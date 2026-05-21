import { useState } from 'react';
import { Play } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { CategoryDashboardMockup } from './components/CategoryDashboardMockup';
import { FeaturesSection } from './components/FeaturesSection';
import { CustomerLogosSection } from './components/CustomerLogosSection';
import { TestimonialSection } from './components/TestimonialSection';
import { StatsSection } from './components/StatsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FeaturesPage } from './pages/FeaturesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ElectricalWholesalePage } from './pages/ElectricalWholesalePage';
import { PlumbersMerchantPage } from './pages/PlumbersMerchantPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';

function HomePage({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="pt-20 pb-12 min-h-[800px] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 w-full items-center">
              {/* Left Content - 60% */}
              <div className="lg:col-span-3 space-y-8">
                <div style={{ fontSize: '12px', color: '#4b5563', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  For Builders' Merchants | Electrical Wholesalers | Plumbers' Merchants | & their Suppliers
                </div>
                <h1 className="max-w-[700px]" style={{ fontSize: '56px', fontWeight: '700', color: '#1e293b', lineHeight: '1.1' }}>
                  See which categories your customers buy from competitors - based on the jobs they do.
                </h1>
                <div className="space-y-4">
                  <h2 className="max-w-[650px]" style={{ fontSize: '28px', fontWeight: '600', color: '#1e3a8a', lineHeight: '1.3' }}>
                    Get notified when spending shifts to competitors in key categories
                  </h2>
                  <p className="max-w-[600px]" style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6' }}>
                    Get alerts when customers reduce orders or stop buying product lines. See which categories they likely buy elsewhere based on the projects they do and trades they work with.
                  </p>
                </div>
                <div className="space-y-4" style={{ marginTop: '40px' }}>
                  <h2 className="max-w-[650px]" style={{ fontSize: '28px', fontWeight: '600', color: '#1e3a8a', lineHeight: '1.3' }}>
                    Win the category battle and grow your share
                  </h2>
                  <p className="max-w-[600px]" style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6' }}>
                    We identify products each customer needs but buys from competitors. Your team gets simple recommendations to compete for categories and increase what customers spend with you.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4" style={{ marginTop: '48px' }}>
                  <button className="bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors shadow-lg hover:shadow-xl"
                    style={{ fontSize: '16px', padding: '14px 32px' }}>
                    See Your Growth Potential
                  </button>
                  <button className="bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    style={{ fontSize: '16px', padding: '14px 32px' }}>
                    <Play className="w-4 h-4 fill-current" />
                    Watch 2-Min Demo
                  </button>
                </div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '24px' }}>
                  Trusted by wholesale distributors like you across UK
                </div>
              </div>
              {/* Right Visual - 40% */}
              <div className="lg:col-span-2 relative h-[600px]">
                <CategoryDashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <CustomerLogosSection />
      <TestimonialSection />
      <StatsSection />
      <FinalCTASection />
    </div>
  );
}

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
      case 'home': return <HomePage onNavigate={handleNavigate} />;
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
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}
