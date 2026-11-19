// prerender-pages.mjs
//
// Runs AFTER `vite build` and AFTER generate-post-pages.mjs (see "postbuild" in
// package.json). It writes the main pages (home, features, solutions, pricing,
// about, contact, blog index, privacy) into static HTML, so crawlers that do not
// run JavaScript (most AI crawlers) can read them.
//
//  - Page HTML comes from src/entry-server.tsx (built to dist-ssr/ by `build`).
//  - Titles and descriptions come from prerender-routes.json.
//  - "/" is written into dist/index.html. The original empty app shell is kept
//    as dist/app-shell.html and used for every other URL (see vercel.json).
//  - Every other page is written to dist/prerender/<name>.html (vercel.json
//    rewrites /features -> /prerender/features.html and so on).
//
// SAFETY: this script never fails the build. If a page cannot be rendered on the
// server, that page falls back to the plain app shell (with its own title and
// description) and a warning is printed. The site still works as before.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ORIGIN = 'https://palmai.io';
const FALLBACK_IMAGE = `${ORIGIN}/social-preview.png`;

const root = process.env.SITE_ROOT || path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const routes = JSON.parse(fs.readFileSync(path.join(root, 'prerender-routes.json'), 'utf8'));

// Non-ASCII characters become numeric entities, so pages read correctly even if a
// crawler guesses the wrong character encoding.
const ascii = (s) => String(s).replace(/[^\x00-\x7F]/gu, (ch) => `&#${ch.codePointAt(0)};`);
const esc = (s) =>
  ascii(String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'));

function stripGenericHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\b[^>]*\b(?:name|property)\s*=\s*"(?:description|og:[^"]*|twitter:[^"]*)"[^>]*>\s*/gi, '')
    .replace(/<link\b[^>]*\brel\s*=\s*"canonical"[^>]*>\s*/gi, '');
}

// ---- the pristine app shell ------------------------------------------------
const indexPath = path.join(distDir, 'index.html');
const shellCopyPath = path.join(distDir, 'app-shell.html');
if (!fs.existsSync(indexPath) && !fs.existsSync(shellCopyPath)) {
  console.warn('prerender: dist/index.html not found - run after `vite build`. Skipping.');
  process.exit(0);
}
const shell = fs.existsSync(shellCopyPath)
  ? fs.readFileSync(shellCopyPath, 'utf8')
  : fs.readFileSync(indexPath, 'utf8');
fs.writeFileSync(shellCopyPath, shell); // keep an untouched copy for the SPA fallback

const ROOT_RE = /<div id="root"><\/div>/;
if (!ROOT_RE.test(shell)) {
  console.warn('prerender: could not find <div id="root"></div> in the app shell. Skipping.');
  process.exit(0);
}
const base = stripGenericHead(shell);

// ---- build + load the server bundle ----------------------------------------
// The server build runs here (not in the "build" script) so that, if it ever
// fails, the deploy still succeeds and pages simply keep their plain app shell.
const firstLine = (err) => String((err && err.message) || err).split('\n')[0];
let mod = null;
try {
  const { build } = await import('vite');
  fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
  await build({
    root,
    logLevel: 'warn',
    build: { ssr: 'src/entry-server.tsx', outDir: 'dist-ssr', emptyOutDir: true },
  });
} catch (err) {
  console.warn(`prerender: the server build failed (${firstLine(err)}). Pages will use the plain app shell.`);
}
if (fs.existsSync(ssrEntry)) {
  try {
    mod = await import(pathToFileURL(ssrEntry).href);
  } catch (err) {
    console.warn(`prerender: could not load the server bundle (${firstLine(err)}). Pages will use the plain app shell.`);
  }
}

// ---- structured data for the FAQ page --------------------------------------
// Reads the same file the visible FAQ page uses (src/app/data/faqs.ts), so the
// page and its FAQPage markup can never disagree.
async function loadFaqGroups() {
  const src = fs.readFileSync(path.join(root, 'src/app/data/faqs.ts'), 'utf8');
  const start = src.indexOf('export const faqGroups');
  if (start === -1) throw new Error('could not find faqGroups in src/app/data/faqs.ts');
  const js = src.slice(start).replace('export const faqGroups: FaqGroup[] =', 'export const faqGroups =');
  const m = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
  return m.faqGroups;
}

function jsonLdScript(obj) {
  // ASCII-only, and "<" escaped so the text can never close the script tag
  const json = JSON.stringify(obj)
    .replace(/</g, '\\u003c')
    .replace(/[^\x00-\x7F]/gu, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  return `    <script type="application/ld+json">${json}</script>`;
}

// ---- write the pages -------------------------------------------------------
fs.mkdirSync(path.join(distDir, 'prerender'), { recursive: true });
const ok = [];
const fellBack = [];

for (const r of routes) {
  const url = r.path === '/' ? `${ORIGIN}/` : `${ORIGIN}${r.path}`;
  const tags = [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Palm AI" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(FALLBACK_IMAGE)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(r.title)}" />`,
    `<meta name="twitter:description" content="${esc(r.description)}" />`,
    `<meta name="twitter:image" content="${esc(FALLBACK_IMAGE)}" />`,
  ].map((t) => `    ${t}`).join('\n');

  // optional structured data for this route
  let ldTag = '';
  if (r.jsonLd === 'faq') {
    try {
      const groups = await loadFaqGroups();
      ldTag = '\n' + jsonLdScript({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: groups.flatMap((g) => g.items).map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      });
    } catch (err) {
      console.warn(`prerender: could not build FAQ structured data (${firstLine(err)}).`);
    }
  }

  let body = '';
  if (mod) {
    try {
      body = ascii(mod.render(r.path));
    } catch (err) {
      fellBack.push(`${r.path} (${err.message.split('\n')[0]})`);
    }
  } else {
    fellBack.push(`${r.path} (no server bundle)`);
  }

  let html = base.replace('</head>', () => `${tags}${ldTag}\n  </head>`);
  if (body) {
    html = html.replace(ROOT_RE, () => `<div id="root">${body}</div>`);
    ok.push(r.path);
  }
  const outFile = r.path === '/' ? indexPath : path.join(distDir, 'prerender', `${r.name}.html`);
  fs.writeFileSync(outFile, html);
}

console.log(`prerender: ${ok.length}/${routes.length} page(s) rendered to static HTML.`);
if (fellBack.length) {
  console.warn('prerender: these pages fell back to the plain app shell (they still work, but crawlers see no text):');
  for (const f of fellBack) console.warn(`  - ${f}`);
}
