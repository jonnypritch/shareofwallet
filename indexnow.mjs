// indexnow.mjs
//
// Tells Bing (and the other search engines that take part in IndexNow) the moment
// a page is added or changed, instead of waiting for them to come back and look.
//
// Run it AFTER a deploy is live (Vercel shows "Ready"), from the project folder:
//
//   node indexnow.mjs --recent 3        articles dated in the last 3 days (+ the /blog index)
//   node indexnow.mjs --all             every page in the sitemap (use once, or after a big change)
//   node indexnow.mjs /faq /glossary    specific pages (full addresses also work)
//   node indexnow.mjs --dry-run --all   show what WOULD be sent, send nothing
//
// The key below is not a secret: it is published at https://palmai.io/<key>.txt so the
// search engines can check you own the site. Only submit pages that are new, changed or removed.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'palmai.io';
const ORIGIN = `https://${HOST}`;
const KEY = '9a86dbd71783fba05d888c5d1364528e';
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const root = process.env.SITE_ROOT || path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

function fail(msg) {
  console.error(`indexnow: ${msg}`);
  process.exit(1);
}

async function loadPosts() {
  const src = fs.readFileSync(path.join(root, 'src/app/data/blogPosts.ts'), 'utf8');
  const start = src.indexOf('export const blogPosts');
  const end = src.indexOf('export const categoryLabels');
  if (start === -1 || end === -1) fail('could not read blogPosts.ts');
  const js = src.slice(start, end).replace('export const blogPosts: BlogPost[] =', 'export const blogPosts =');
  const mod = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
  return mod.blogPosts;
}

function sitemapUrls() {
  const xml = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const urls = new Set();
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--dry-run') continue;
  if (a === '--all') {
    sitemapUrls().forEach((u) => urls.add(u));
  } else if (a === '--recent') {
    const days = Number(args[i + 1]) > 0 ? Number(args[++i]) : 7;
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    const posts = await loadPosts();
    for (const p of posts) {
      if (new Date(p.publishedAt).getTime() >= cutoff) urls.add(`${ORIGIN}/blog/${p.slug}`);
    }
    urls.add(`${ORIGIN}/blog`);
  } else if (a.startsWith('/')) {
    urls.add(ORIGIN + a);
  } else if (a.startsWith('http')) {
    urls.add(a);
  } else {
    fail(`don't understand "${a}". Use --recent N, --all, --dry-run, or page addresses.`);
  }
}

const urlList = [...urls];
if (urlList.length === 0) fail('nothing to submit. Try: node indexnow.mjs --recent 3   or   node indexnow.mjs /faq');
for (const u of urlList) {
  if (new URL(u).host !== HOST) fail(`${u} is not on ${HOST}`);
}

const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
console.log(`indexnow: ${urlList.length} page(s):`);
urlList.forEach((u) => console.log(`  ${u}`));

if (dryRun) {
  console.log('\nindexnow: dry run, nothing sent. The request would be:');
  console.log(JSON.stringify({ ...payload, urlList: `[${urlList.length} addresses]` }, null, 2));
  process.exit(0);
}

// The key file must be live first, or the search engines will refuse the request.
try {
  const res = await fetch(KEY_LOCATION);
  const body = (await res.text()).trim();
  if (!res.ok || body !== KEY) fail(`the key file is not live at ${KEY_LOCATION} (got ${res.status}). Deploy first, wait for Ready, then run this again.`);
} catch (err) {
  fail(`could not check the key file (${err.message}).`);
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});
const meaning = {
  200: 'accepted.',
  202: 'accepted. The key is still being verified, which is normal the first time. Submit again later if you like.',
  400: 'rejected: the request was badly formed.',
  403: 'rejected: the key is not valid for this site. Check the key file is live and matches.',
  422: 'rejected: one of the addresses is not valid for this site.',
  429: 'rejected: too many requests. Wait a while and try again.',
};
console.log(`\nindexnow: ${res.status} ${meaning[res.status] || 'unexpected response.'}`);
if (![200, 202].includes(res.status)) process.exit(1);
