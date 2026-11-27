// add-legal-routes.mjs  (run once, locally:  node add-legal-routes.mjs)
//
// Registers the three new pages (/terms, /customer-terms, /sub-processors):
//   1. adds them to prerender-routes.json so they are prerendered like /privacy
//   2. adds them to the STATIC_ROUTES list in generate-feeds.mjs (the sitemap)
// Safe to run more than once. Afterwards run:  node add-prerender-rewrites.mjs
import fs from 'node:fs';

const NEW_ROUTES = [
  { path: '/terms', name: 'terms', title: 'Website Terms of Use — Palm AI', description: 'The terms that apply when you use the Palm AI website.' },
  { path: '/customer-terms', name: 'customer-terms', title: 'Customer Terms: WhatsApp Services and Data Protection — Palm AI', description: 'The terms that apply to Palm AI customers using the WhatsApp messaging service, including data protection.' },
  { path: '/sub-processors', name: 'sub-processors', title: 'Sub-processors — Palm AI', description: 'The providers Palm AI uses to process customer personal data, where they operate and why.' },
];

// 1. prerender-routes.json
const routes = JSON.parse(fs.readFileSync('prerender-routes.json', 'utf8'));
let added = 0;
for (const r of NEW_ROUTES) {
  if (!routes.some((x) => x.path === r.path)) { routes.push(r); added++; }
}
fs.writeFileSync('prerender-routes.json', '[\n' + routes.map((r) => '  ' + JSON.stringify(r)).join(',\n') + '\n]\n');
console.log(`prerender-routes.json: added ${added} route(s), ${routes.length} in total.`);

// 2. sitemap list in generate-feeds.mjs
let feeds = fs.readFileSync('generate-feeds.mjs', 'utf8');
const anchor = '  { path: "/privacy", priority: "0.3" },\n';
if (feeds.includes('"/terms"')) {
  console.log('generate-feeds.mjs: already has the new pages.');
} else if (!feeds.includes(anchor)) {
  console.log('generate-feeds.mjs: could not find the /privacy line, so nothing changed. Tell Claude.');
  process.exit(1);
} else {
  feeds = feeds.replace(
    anchor,
    anchor +
      '  { path: "/terms", priority: "0.3" },\n' +
      '  { path: "/customer-terms", priority: "0.4" },\n' +
      '  { path: "/sub-processors", priority: "0.3" },\n'
  );
  fs.writeFileSync('generate-feeds.mjs', feeds);
  console.log('generate-feeds.mjs: added 3 sitemap entries.');
}
