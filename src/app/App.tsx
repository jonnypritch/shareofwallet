import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ElectricalWholesalePage } from './pages/ElectricalWholesalePage';
import { PlumbersMerchantPage } from './pages/PlumbersMerchantPage';
import { ToolHirePage } from './pages/ToolHirePage';
import { FoodserviceWholesalePage } from './pages/FoodserviceWholesalePage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

function SuppliersPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-8">
        <h1 className="mb-6" style={{ fontSize: '48px', fontWeight: '700', color: '#1e293b' }}>Suppliers Solution</h1>
        <p style={{ fontSize: '20px', color: '#6b7280', lineHeight: '1.6' }}>
          Coming soon — A comprehensive solution for suppliers to collaborate with distributors and grow market share.
        </p>
      </div>
    </div>
  );
}

function BrandsPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-8">
        <h1 className="mb-6" style={{ fontSize: '48px', fontWeight: '700', color: '#1e293b' }}>Brands Solution</h1>
        <p style={{ fontSize: '20px', color: '#6b7280', lineHeight: '1.6' }}>
          Coming soon — A comprehensive solution for brands to partner with distributors and grow their market presence.
        </p>
      </div>
    </div>
  );
}

/**
 * Every existing component (Navigation, Footer, BlogPage, BlogPostPage, and
 * any other page) calls onNavigate('some-id') using these same ids as
 * before. Nothing about that interface changes — this map is the only new
 * thing, translating those ids to real, crawlable URLs.
 */
const PAGE_TO_PATH: Record<string, string> = {
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
  contact: '/contact',
  blog: '/blog',
  privacy: '/privacy',
};

const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([id, path]) => [path, id])
);

const PAGE_TITLES: Record<string, string> = {
  home: 'Palm AI — Sell more. To the right customers. More profitably.',
  features: 'Features — Palm AI',
  'solutions-builders': "Builders' Merchants — Palm AI",
  'solutions-electrical': 'Electrical Wholesalers — Palm AI',
  'solutions-plumbers': "Plumbers' Merchants — Palm AI",
  'solutions-tool-hire': 'Tool Hire — Palm AI',
  'solutions-foodservice': 'Foodservice Wholesale — Palm AI',
  'solutions-suppliers': 'Suppliers — Palm AI',
  'solutions-brands': 'Brands — Palm AI',
  pricing: 'Pricing — Palm AI',
  about: 'About — Palm AI',
  contact: 'Contact — Palm AI',
  blog: 'Blog — Palm AI',
  privacy: 'Privacy & Cookie Policy — Palm AI',
};

const PAGE_DESCRIPTIONS: Record<string, string> = {
  home: "Palm AI helps Builders' Merchants, Plumbers' Merchants, Tool Hire, Electrical Wholesalers and Foodservice Wholesalers grow customer wallet share, find new accounts, and forecast cashflow — built around your existing systems.",
  features: 'Analytics, recommendations, prospecting, content generation, inventory and cashflow — see every Palm AI feature and how it works.',
  'solutions-builders': "How Palm AI helps builders' merchants grow wallet share, find new trade accounts, and compete for categories they're missing.",
  'solutions-electrical': 'How Palm AI helps electrical wholesalers grow wallet share across domestic, commercial and industrial electrical categories.',
  'solutions-plumbers': "How Palm AI helps plumbers' merchants win bathroom, heating and plumbing categories from existing accounts.",
  'solutions-tool-hire': 'How Palm AI helps tool hire depots turn single-category hires into full accounts, and find the next contractor before they call.',
  'solutions-foodservice': 'How Palm AI helps foodservice wholesalers stop losing kitchens to split ordering across produce, dairy, meat and more.',
  'solutions-suppliers': 'How Palm AI helps suppliers collaborate with distributors and grow market share together.',
  'solutions-brands': 'How Palm AI helps brands partner with distributors and grow their presence in the trade.',
  pricing: 'Palm AI pricing is agreed around your branches, your data, and what you need live first — no fixed tiers, no published price list.',
  about: 'The team and story behind Palm AI.',
  contact: 'Get in touch with Palm AI to book a demo or ask a question.',
  blog: 'Practical guides on basket analysis, customer data, and growing share of wallet — written for merchants, wholesalers and distributors.',
  privacy: "Palm AI's privacy and cookie policy.",
};

function BlogPostRoute({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) {
  const { slug } = useParams<{ slug: string }>();
  return <BlogPostPage slug={slug ?? ''} onNavigate={onNavigate} />;
}

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: string, slug?: string) => {
    if (page === 'blog-post' && slug) {
      navigate(`/blog/${slug}`);
    } else {
      navigate(PAGE_TO_PATH[page] ?? '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Blog post URLs (/blog/some-slug) should still highlight "Blog" in nav.
  const currentPage = location.pathname.startsWith('/blog/')
    ? 'blog'
    : PATH_TO_PAGE[location.pathname] ?? 'home';

  useEffect(() => {
    const titleKey = location.pathname.startsWith('/blog/') ? 'blog' : currentPage;
    document.title = PAGE_TITLES[titleKey] ?? PAGE_TITLES.home;

    const description = PAGE_DESCRIPTIONS[titleKey] ?? PAGE_DESCRIPTIONS.home;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [location.pathname, currentPage]);

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions/builders-merchants" element={<SolutionsPage />} />
        <Route path="/solutions/electrical-wholesale" element={<ElectricalWholesalePage />} />
        <Route path="/solutions/plumbers-merchants" element={<PlumbersMerchantPage />} />
        <Route path="/solutions/tool-hire" element={<ToolHirePage />} />
        <Route path="/solutions/foodservice-wholesale" element={<FoodserviceWholesalePage />} />
        <Route path="/solutions/suppliers" element={<SuppliersPage />} />
        <Route path="/solutions/brands" element={<BrandsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} />} />
        <Route path="/blog/:slug" element={<BlogPostRoute onNavigate={handleNavigate} />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        {/* Unknown URLs fall back to the homepage rather than a blank screen */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
