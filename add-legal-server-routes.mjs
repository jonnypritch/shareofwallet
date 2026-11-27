// add-legal-server-routes.mjs  (run once, locally:  node add-legal-server-routes.mjs)
// Adds /terms, /customer-terms and /sub-processors to src/entry-server.tsx so
// they are prerendered like /privacy. Safe to run more than once.
import fs from 'node:fs';

const file = 'src/entry-server.tsx';
let s = fs.readFileSync(file, 'utf8');

if (s.includes("'/customer-terms'")) {
  console.log('entry-server.tsx already has the new pages. Nothing changed.');
  process.exit(0);
}

const importAnchor = "import { PrivacyPolicyPage } from './app/pages/PrivacyPolicyPage';\n";
const routeAnchor = "  '/privacy': { page: 'privacy', Component: PrivacyPolicyPage },\n";
if (!s.includes(importAnchor) || !s.includes(routeAnchor)) {
  console.log('Could not find the /privacy lines in src/entry-server.tsx, so nothing changed. Tell Claude.');
  process.exit(1);
}

s = s.replace(
  importAnchor,
  importAnchor +
    "import { TermsPage } from './app/pages/TermsPage';\n" +
    "import { CustomerTermsPage } from './app/pages/CustomerTermsPage';\n" +
    "import { SubProcessorsPage } from './app/pages/SubProcessorsPage';\n"
);
s = s.replace(
  routeAnchor,
  routeAnchor +
    "  '/terms': { page: 'terms', Component: TermsPage },\n" +
    "  '/customer-terms': { page: 'customer-terms', Component: CustomerTermsPage },\n" +
    "  '/sub-processors': { page: 'sub-processors', Component: SubProcessorsPage },\n"
);
fs.writeFileSync(file, s);
console.log('Added 3 routes to src/entry-server.tsx.');
