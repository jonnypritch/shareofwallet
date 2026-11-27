/**
 * Server entry, used ONLY at build time by prerender-pages.mjs.
 * It renders each main page to plain HTML so crawlers that don't run
 * JavaScript can read it. Visitors still get the normal React app, which
 * replaces this HTML as soon as it loads.
 *
 * To prerender a new page: add it to ROUTES below AND to prerender-routes.json.
 */
import type { ComponentType } from 'react';
import { renderToString } from 'react-dom/server';
import { Navigation } from './app/components/Navigation';
import { Footer } from './app/components/Footer';
import { HomePage } from './app/pages/HomePage';
import { FeaturesPage } from './app/pages/FeaturesPage';
import { SolutionsPage } from './app/pages/SolutionsPage';
import { ElectricalWholesalePage } from './app/pages/ElectricalWholesalePage';
import { PlumbersMerchantPage } from './app/pages/PlumbersMerchantPage';
import { ToolHirePage } from './app/pages/ToolHirePage';
import { FoodserviceWholesalePage } from './app/pages/FoodserviceWholesalePage';
import { PricingPage } from './app/pages/PricingPage';
import { AboutPage } from './app/pages/AboutPage';
import { ContactPage } from './app/pages/ContactPage';
import { FaqPage } from './app/pages/FaqPage';
import { GlossaryPage } from './app/pages/GlossaryPage';
import { BlogPage } from './app/pages/BlogPage';
import { PrivacyPolicyPage } from './app/pages/PrivacyPolicyPage';
import { TermsPage } from './app/pages/TermsPage';
import { CustomerTermsPage } from './app/pages/CustomerTermsPage';
import { SubProcessorsPage } from './app/pages/SubProcessorsPage';

const noop = () => {};

// path -> { page id (for the highlighted menu item), component }
const ROUTES: Record<string, { page: string; Component: ComponentType }> = {
  '/': { page: 'home', Component: HomePage },
  '/features': { page: 'features', Component: FeaturesPage },
  '/solutions/builders-merchants': { page: 'solutions-builders', Component: SolutionsPage },
  '/solutions/electrical-wholesale': { page: 'solutions-electrical', Component: ElectricalWholesalePage },
  '/solutions/plumbers-merchants': { page: 'solutions-plumbers', Component: PlumbersMerchantPage },
  '/solutions/tool-hire': { page: 'solutions-tool-hire', Component: ToolHirePage },
  '/solutions/foodservice-wholesale': { page: 'solutions-foodservice', Component: FoodserviceWholesalePage },
  '/pricing': { page: 'pricing', Component: PricingPage },
  '/about': { page: 'about', Component: AboutPage },
  '/contact': { page: 'contact', Component: ContactPage },
  '/faq': { page: 'faq', Component: FaqPage },
  '/glossary': { page: 'glossary', Component: GlossaryPage },
  '/blog': { page: 'blog', Component: () => <BlogPage onNavigate={noop} /> },
  '/privacy': { page: 'privacy', Component: PrivacyPolicyPage },
  '/terms': { page: 'terms', Component: TermsPage },
  '/customer-terms': { page: 'customer-terms', Component: CustomerTermsPage },
  '/sub-processors': { page: 'sub-processors', Component: SubProcessorsPage },
};

export function render(path: string): string {
  const route = ROUTES[path];
  if (!route) throw new Error(`No server route defined for ${path}`);
  const { page, Component } = route;
  // Same wrapper structure as AppShell in App.tsx
  return renderToString(
    <div className="min-h-screen">
      <Navigation currentPage={page} onNavigate={noop} />
      <Component />
      <Footer onNavigate={noop} />
    </div>,
  );
}
