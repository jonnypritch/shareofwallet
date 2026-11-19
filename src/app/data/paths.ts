/**
 * Page id -> URL path. Used by Navigation and Footer so every menu item is a
 * real <a href> link that crawlers can follow. (App.tsx keeps its own copy of
 * this map for client-side navigation; keep the two in step.)
 */
export const PAGE_PATHS: Record<string, string> = {
  home: '/',
  features: '/features',
  'solutions-builders': '/solutions/builders-merchants',
  'solutions-electrical': '/solutions/electrical-wholesale',
  'solutions-plumbers': '/solutions/plumbers-merchants',
  'solutions-tool-hire': '/solutions/tool-hire',
  'solutions-foodservice': '/solutions/foodservice-wholesale',
  'solutions-suppliers': '/solutions/suppliers',
  'solutions-brands': '/solutions/brands',
  pricing: '/pricing',
  about: '/about',
  faq: '/faq',
  contact: '/contact',
  blog: '/blog',
  privacy: '/privacy',
};
