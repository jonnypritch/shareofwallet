// add-prerender-rewrites.mjs  (run once, locally:  node add-prerender-rewrites.mjs)
//
// Edits vercel.json so that:
//   1. each prerendered page URL is served from dist/prerender/<name>.html, and
//   2. the catch-all (unknown URLs, single-page-app fallback) uses
//      /app-shell.html, the untouched empty app shell, because dist/index.html
//      now holds the prerendered homepage.
// Safe to run more than once. Prints what it changed.
import fs from 'node:fs';

const cfg = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const routes = JSON.parse(fs.readFileSync('prerender-routes.json', 'utf8'));

let rewrites = Array.isArray(cfg.rewrites) ? cfg.rewrites : [];
rewrites = rewrites.filter((r) => !String(r.destination || '').startsWith('/prerender/'));

let catchAll = rewrites.findIndex((r) => r.source === '/(.*)');
if (catchAll === -1) {
  rewrites.push({ source: '/(.*)', destination: '/app-shell.html' });
  catchAll = rewrites.length - 1;
  console.log('No catch-all rewrite found: added one pointing at /app-shell.html');
} else {
  console.log(`Catch-all destination: ${rewrites[catchAll].destination}  ->  /app-shell.html`);
  rewrites[catchAll].destination = '/app-shell.html';
}

const added = routes
  .filter((r) => r.path !== '/')
  .map((r) => ({ source: r.path, destination: `/prerender/${r.name}.html` }));
rewrites.splice(catchAll, 0, ...added); // before the catch-all
cfg.rewrites = rewrites;

fs.writeFileSync('vercel.json', JSON.stringify(cfg, null, 2) + '\n');
console.log(`Added ${added.length} prerender rewrite(s). vercel.json updated.`);
