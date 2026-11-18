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
// The article text itself (H1, intro, body, image + credit) is also written into
// <div id="root"> so crawlers that don't run JavaScript (most AI crawlers) can read
// the article. React replaces it on load, so visitors see the normal app.
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

// Non-ASCII characters (em dashes, £, curly quotes) are written as numeric HTML
// entities, so the page reads correctly even if a crawler guesses the wrong
// character encoding (Bing's report showed an em dash garbled as "â&#128;&#148;").
const ascii = (s) => String(s).replace(/[^\x00-\x7F]/gu, (ch) => `&#${ch.codePointAt(0)};`);

const esc = (s) =>
  ascii(
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;'),
  );

// Strip the generic homepage tags so the post's tags are the only ones.
function stripGenericHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\b[^>]*\b(?:name|property)\s*=\s*"(?:description|og:[^"]*|twitter:[^"]*)"[^>]*>\s*/gi, '')
    .replace(/<link\b[^>]*\brel\s*=\s*"canonical"[^>]*>\s*/gi, '');
}

const base = stripGenericHead(shell);

const ROOT_RE = /<div id="root"><\/div>/;
if (!ROOT_RE.test(base)) {
  console.warn('generate-post-pages: could not find <div id="root"></div> in dist/index.html; article text will not be written into the static pages.');
}

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// Plain, readable article markup for crawlers. React replaces this when the app loads.
function staticArticle(post, image) {
  const hero = post.heroImage
    ? `<img src="${esc(image)}" alt="${esc(post.heroImageAlt || post.title)}" style="width:100%;height:auto;border-radius:16px;display:block" />` +
      (post.heroImageCredit ? `<p style="font-size:12px;color:#9ca3af">${post.heroImageCredit}</p>` : '')
    : '';
  return ascii(`<main><article style="max-width:800px;margin:0 auto;padding:48px 32px;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#374151;line-height:1.7">
<p><a href="/">Palm AI</a> · <a href="/blog">All articles</a> · <a href="/features">Features</a> · <a href="/contact">Contact</a></p>
<h1 style="font-size:36px;line-height:1.2;color:#1e293b">${esc(post.title)}</h1>
<p style="font-size:20px">${esc(post.excerpt)}</p>
<p style="font-size:14px;color:#6b7280">By ${esc(post.author?.name ?? SITE_NAME)} · ${esc(formatDate(post.publishedAt))} · ${esc(String(post.readTime))} min read</p>
${hero}
${post.content || ''}
</article></main>`);
}

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
    `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c').replace(/[^\x00-\x7F]/gu, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'))}</script>`,
  ].map((t) => `    ${t}`).join('\n');

  const headTags = `${tags}\n  </head>`;
  let html = base.replace('</head>', () => headTags);
  const articleHtml = staticArticle(post, image);
  html = html.replace(ROOT_RE, () => `<div id="root">${articleHtml}</div>`);
  fs.writeFileSync(path.join(outDir, `${post.slug}.html`), html);
}

console.log(`generate-post-pages: wrote ${posts.length} post page(s) to dist/blog-pages/`);
