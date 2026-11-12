// generate-post-pages.mjs
//
// Runs AFTER `vite build` (see "postbuild" in package.json).
//
// For every post in src/app/data/blogPosts.ts it takes the freshly built
// dist/index.html (the full React app shell, with the correct hashed JS/CSS)
// and writes dist/blog-pages/<slug>.html with that post's own <title>,
// meta description, canonical URL, Open Graph / Twitter tags and Article
// structured data already in the HTML.
//
// vercel.json rewrites /blog/:slug to these files for EVERYONE (visitors,
// Googlebot, LinkedIn, Slack...), so no crawler has to run JavaScript to
// learn what a post is about. The React app then loads exactly as before.
//
// Optional per-post fields (add to the BlogPost interface):
//   metaTitle?: string        // SEO title, defaults to `title`
//   metaDescription?: string  // SEO description, defaults to `excerpt`
//
// This replaces generate-og-pages.mjs (noindex stubs for social bots only).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ORIGIN = 'https://palmai.io';
const SITE_NAME = 'Palm AI';
const FALLBACK_IMAGE = `${ORIGIN}/social-preview.png`;

const root = process.env.SITE_ROOT || path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(root, 'src/app/data/blogPosts.ts');
const distDir = path.join(root, 'dist');
const shellPath = path.join(distDir, 'index.html');
const outDir = path.join(distDir, 'blog-pages');

// ---- load posts (same approach the existing build already uses) ----------
const src = fs.readFileSync(dataFile, 'utf8');
const start = src.indexOf('export const blogPosts');
const end = src.indexOf('export const categoryLabels');
if (start === -1 || end === -1) {
  throw new Error('generate-post-pages: could not find blogPosts / categoryLabels in blogPosts.ts');
}
const js = src
  .slice(start, end)
  .replace('export const blogPosts: BlogPost[] =', 'export const blogPosts =');
const mod = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
const posts = mod.blogPosts;
if (!Array.isArray(posts) || posts.length === 0) {
  throw new Error('generate-post-pages: no posts loaded from blogPosts.ts');
}

// ---- load the built app shell --------------------------------------------
if (!fs.existsSync(shellPath)) {
  throw new Error('generate-post-pages: dist/index.html not found - this must run after `vite build`.');
}
const shell = fs.readFileSync(shellPath, 'utf8');
if (!shell.includes('</head>')) throw new Error('generate-post-pages: no </head> in dist/index.html');

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Strip the generic homepage tags so the post's tags are the only ones.
function stripGenericHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\b[^>]*\b(?:name|property)\s*=\s*"(?:description|og:[^"]*|twitter:[^"]*)"[^>]*>\s*/gi, '')
    .replace(/<link\b[^>]*\brel\s*=\s*"canonical"[^>]*>\s*/gi, '');
}

const base = stripGenericHead(shell);

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const post of posts) {
  const url = `${ORIGIN}/blog/${post.slug}`;
  const hasHero = Boolean(post.heroImage);
  const image = hasHero
    ? post.heroImage.startsWith('http') ? post.heroImage : `${ORIGIN}${post.heroImage}`
    : FALLBACK_IMAGE;
  const headline = post.metaTitle || post.title;
  const pageTitle = `${headline} | ${SITE_NAME}`;
  const desc = post.metaDescription || post.excerpt;
  const authorName = post.author?.name ?? SITE_NAME;

  if (desc.length > 170) {
    console.warn(`generate-post-pages: "${post.slug}" description is ${desc.length} chars; Google will trim it (aim for ~155).`);
  }

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: desc,
    image: [image],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Person', name: authorName },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: ORIGIN },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const tags = [
    `<title>${esc(pageTitle)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(post.title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    ...(hasHero ? [] : [
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
    ]),
    `<meta property="article:published_time" content="${esc(post.publishedAt)}" />`,
    `<meta property="article:author" content="${esc(authorName)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(post.title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`,
  ].map((t) => `    ${t}`).join('\n');

  const html = base.replace('</head>', `${tags}\n  </head>`);
  fs.writeFileSync(path.join(outDir, `${post.slug}.html`), html);
}

console.log(`generate-post-pages: wrote ${posts.length} post page(s) to dist/blog-pages/`);
