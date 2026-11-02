// Generates one tiny static HTML page per blog post containing that post's
// Open Graph / Twitter tags. vercel.json routes ONLY social-media crawlers
// (LinkedIn, Facebook, X, Slack, WhatsApp...) to these pages, because those
// crawlers don't run JavaScript and would otherwise only see index.html's
// generic tags. Normal visitors and Googlebot still get the normal React site.
//
// Run before the build: see "buildCommand" in vercel.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ORIGIN = 'https://palmai.io';
const FALLBACK_IMAGE = `${ORIGIN}/social-preview.png`;

const root = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(root, 'src/app/data/blogPosts.ts');
const outDir = process.env.OG_OUT_DIR || path.join(root, 'public/og');

// Load blogPosts.ts as real JavaScript: take only the array, drop the TS type.
const src = fs.readFileSync(dataFile, 'utf8');
const start = src.indexOf('export const blogPosts');
const end = src.indexOf('export const categoryLabels');
if (start === -1 || end === -1) {
  throw new Error('generate-og-pages: could not find blogPosts / categoryLabels in blogPosts.ts');
}
const js = src
  .slice(start, end)
  .replace('export const blogPosts: BlogPost[] =', 'export const blogPosts =');
const mod = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
const posts = mod.blogPosts;

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const post of posts) {
  const url = `${ORIGIN}/blog/${post.slug}`;
  const hasHero = Boolean(post.heroImage);
  const image = hasHero
    ? (post.heroImage.startsWith('http') ? post.heroImage : `${ORIGIN}${post.heroImage}`)
    : FALLBACK_IMAGE;
  const title = post.title;
  const desc = post.excerpt;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${esc(title)} — Palm AI</title>
<meta name="description" content="${esc(desc)}" />
<meta name="robots" content="noindex" />
<link rel="canonical" href="${esc(url)}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Palm AI" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${esc(url)}" />
<meta property="og:image" content="${esc(image)}" />
${hasHero ? '' : '<meta property="og:image:width" content="1200" />\n<meta property="og:image:height" content="630" />\n'}<meta property="article:published_time" content="${esc(post.publishedAt)}" />
<meta property="article:author" content="${esc(post.author?.name ?? 'Palm AI')}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(desc)}" />
<meta name="twitter:image" content="${esc(image)}" />
<script>location.replace(${JSON.stringify(url)});</script>
</head>
<body>
<p><a href="${esc(url)}">${esc(title)}</a></p>
</body>
</html>
`;
  fs.writeFileSync(path.join(outDir, `${post.slug}.html`), html);
}

console.log(`generate-og-pages: wrote ${posts.length} pages to ${path.relative(root, outDir) || outDir}`);
