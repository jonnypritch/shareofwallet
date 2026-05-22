import { Building2, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  const solutionsPages = [
    { id: 'solutions-builders', label: "Builders' Merchants" },
    { id: 'solutions-electrical', label: 'Electrical Wholesale' },
    { id: 'solutions-plumbers', label: "Plumbers' Merchants" },
    { id: 'solutions-suppliers', label: 'Suppliers' },
    { id: 'solutions-brands', label: 'Brands' },
  ];

  const isSolutionsPage = currentPage.startsWith('solutions');

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-[#1e3a8a] rounded-lg p-2">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span style={{ fontSize: '20px', fontWeight: '700', color: '#1e3a8a' }}>
              ShareOfWallet
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              style={{
                fontSize: '16px',
                fontWeight: currentPage === 'home' ? '600' : '400',
                color: currentPage === 'home' ? '#1e3a8a' : '#374151',
              }}
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => onNavigate('features')}
              style={{
                fontSize: '16px',
                fontWeight: currentPage === 'features' ? '600' : '400',
                color: currentPage === 'features' ? '#1e3a8a' : '#374151',
              }}
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Features
            </button>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('solutions-builders')}
                style={{
                  fontSize: '16px',
                  fontWeight: isSolutionsPage ? '600' : '400',
                  color: isSolutionsPage ? '#1e3a8a' : '#374151',
                }}
                className="hover:text-[#1e3a8a] transition-colors flex items-center gap-1"
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  {solutionsPages.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => {
                        onNavigate(page.id);
                        setSolutionsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors"
                      style={{
                        fontSize: '15px',
                        fontWeight: currentPage === page.id ? '600' : '400',
                        color: currentPage === page.id ? '#1e3a8a' : '#374151',
                      }}
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('pricing')}
              style={{
                fontSize: '16px',
                fontWeight: currentPage === 'pricing' ? '600' : '400',
                color: currentPage === 'pricing' ? '#1e3a8a' : '#374151',
              }}
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Pricing
            </button>

            <button
              onClick={() => onNavigate('about')}
              style={{
                fontSize: '16px',
                fontWeight: currentPage === 'about' ? '600' : '400',
                color: currentPage === 'about' ? '#1e3a8a' : '#374151',
              }}
              className="hover:text-[#1e3a8a] transition-colors"
            >
              About
            </button>

            <button
              onClick={() => onNavigate('contact')}
              style={{
                fontSize: '16px',
                fontWeight: currentPage === 'contact' ? '600' : '400',
                color: currentPage === 'contact' ? '#1e3a8a' : '#374151',
              }}
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Contact
            </button>
          </div>


            <button
              onClick={() => onNavigate('blog')}
              style={{
                fontSize: '16px',
                fontWeight: currentPage === 'blog' || currentPage === 'blog-post' ? '600' : '400',
                color: currentPage === 'blog' || currentPage === 'blog-post' ? '#1e3a8a' : '#374151',
              }}
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Blog
            </button>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              style={{ fontSize: '16px', color: '#374151' }}
              className="hover:text-[#1e3a8a] transition-colors"
            >
              Login
            </button>
            <button
              className="bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors shadow-md hover:shadow-lg"
              style={{ fontSize: '16px', padding: '10px 24px' }}
            >
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1e3a8a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1e3a8a]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                style={{
                  fontSize: '16px',
                  fontWeight: currentPage === 'home' ? '600' : '400',
                  color: currentPage === 'home' ? '#1e3a8a' : '#374151',
                }}
                className="text-left py-2"
              >
                Home
              </button>

              <button
                onClick={() => {
                  onNavigate('features');
                  setMobileMenuOpen(false);
                }}
                style={{
                  fontSize: '16px',
                  fontWeight: currentPage === 'features' ? '600' : '400',
                  color: currentPage === 'features' ? '#1e3a8a' : '#374151',
                }}
                className="text-left py-2"
              >
                Features
              </button>

              {/* Solutions Submenu */}
              <div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: isSolutionsPage ? '600' : '400',
                    color: isSolutionsPage ? '#1e3a8a' : '#374151',
                  }}
                  className="text-left py-2"
                >
                  Solutions
                </div>
                <div className="pl-4 flex flex-col gap-2 mt-2">
                  {solutionsPages.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => {
                        onNavigate(page.id);
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        fontSize: '15px',
                        fontWeight: currentPage === page.id ? '600' : '400',
                        color: currentPage === page.id ? '#1e3a8a' : '#6b7280',
                      }}
                      className="text-left py-1"
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('pricing');
                  setMobileMenuOpen(false);
                }}
                style={{
                  fontSize: '16px',
                  fontWeight: currentPage === 'pricing' ? '600' : '400',
                  color: currentPage === 'pricing' ? '#1e3a8a' : '#374151',
                }}
                className="text-left py-2"
              >
                Pricing
              </button>

              <button
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                style={{
                  fontSize: '16px',
                  fontWeight: currentPage === 'about' ? '600' : '400',
                  color: currentPage === 'about' ? '#1e3a8a' : '#374151',
                }}
                className="text-left py-2"
              >
                About
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                style={{
                  fontSize: '16px',
                  fontWeight: currentPage === 'contact' ? '600' : '400',
                  color: currentPage === 'contact' ? '#1e3a8a' : '#374151',
                }}
                className="text-left py-2"
              >
                Contact
              </button>

              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
                <button
                  style={{ fontSize: '16px', color: '#374151' }}
                  className="text-left py-2"
                >
                  Login
                </button>
                <button
                  className="bg-[#1e3a8a] text-white rounded-lg shadow-md text-center"
                  style={{ fontSize: '16px', padding: '12px 24px' }}
                >
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}