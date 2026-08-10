import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ElectricalWholesalePage } from './pages/ElectricalWholesalePage';
import { PlumbersMerchantPage } from './pages/PlumbersMerchantPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';

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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogSlug, setBlogSlug] = useState<string | undefined>(undefined);

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page);
    if (slug) setBlogSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'features': return <FeaturesPage />;
      case 'solutions-builders': return <SolutionsPage />;
      case 'solutions-electrical': return <ElectricalWholesalePage />;
      case 'solutions-plumbers': return <PlumbersMerchantPage />;
      case 'solutions-suppliers': return <SuppliersPage />;
      case 'solutions-brands': return <BrandsPage />;
      case 'pricing': return <PricingPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'blog': return <BlogPage onNavigate={handleNavigate} />;
      case 'blog-post': return <BlogPostPage slug={blogSlug || ''} onNavigate={handleNavigate} />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}
