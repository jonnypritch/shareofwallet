import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, type MouseEvent } from 'react';
import palmAiLogo from '../../assets/palm-ai-logo-colour.png';
import { PAGE_PATHS } from '../data/paths';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // nofollow: these two pages are placeholders ("coming soon"), so crawlers are asked not to follow them
  const solutionsPages: { id: string; label: string; nofollow?: boolean }[] = [
    { id: 'solutions-builders', label: "Builders' Merchants" },
    { id: 'solutions-electrical', label: 'Electrical Wholesale' },
    { id: 'solutions-plumbers', label: "Plumbers' Merchants" },
    { id: 'solutions-tool-hire', label: 'Tool Hire' },
    { id: 'solutions-foodservice', label: 'Foodservice Wholesale' },
    { id: 'solutions-suppliers', label: 'Suppliers', nofollow: true },
    { id: 'solutions-brands', label: 'Brands', nofollow: true },
  ];

  const isSolutionsPage = currentPage.startsWith('solutions');

  // Every menu item is a real link (href) so crawlers can follow it. A normal
  // click still uses the app's own navigation; ctrl/cmd-click opens a new tab.
  const link = (id: string, after?: () => void) => ({
    href: PAGE_PATHS[id] ?? '/',
    onClick: (e: MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      onNavigate(id);
      after?.();
    },
  });

  const closeMobile = () => setMobileMenuOpen(false);

  const deskStyle = (active: boolean) => ({
    fontSize: '16px',
    fontWeight: active ? '600' : '400',
    color: active ? '#1e3a8a' : '#374151',
  });

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a {...link('home')} className="flex items-center cursor-pointer" aria-label="Palm AI home">
            <img src={palmAiLogo} alt="Palm AI" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a {...link('home')} style={deskStyle(currentPage === 'home')} className="hover:text-[#1e3a8a] transition-colors">
              Home
            </a>

            <a {...link('features')} style={deskStyle(currentPage === 'features')} className="hover:text-[#1e3a8a] transition-colors">
              Features
            </a>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <a
                {...link('solutions-builders')}
                style={deskStyle(isSolutionsPage)}
                className="hover:text-[#1e3a8a] transition-colors flex items-center gap-1"
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </a>

              {/* Dropdown Menu. The links are always in the page (so crawlers can
                  see them) and are shown or hidden with a class. pt-2 (not mt-2)
                  keeps the hover zone flush against the link, no dead gap. */}
              <div className={`absolute top-full left-0 pt-2 w-56 ${solutionsDropdownOpen ? '' : 'hidden'}`}>
                <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  {solutionsPages.map((page) => (
                    <a
                      key={page.id}
                      {...link(page.id, () => setSolutionsDropdownOpen(false))}
                      rel={page.nofollow ? 'nofollow' : undefined}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors"
                      style={{
                        fontSize: '15px',
                        fontWeight: currentPage === page.id ? '600' : '400',
                        color: currentPage === page.id ? '#1e3a8a' : '#374151',
                      }}
                    >
                      {page.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a {...link('pricing')} style={deskStyle(currentPage === 'pricing')} className="hover:text-[#1e3a8a] transition-colors">
              Pricing
            </a>

            <a {...link('blog')} style={deskStyle(currentPage === 'blog')} className="hover:text-[#1e3a8a] transition-colors">
              Blog
            </a>

            <a {...link('about')} style={deskStyle(currentPage === 'about')} className="hover:text-[#1e3a8a] transition-colors">
              About
            </a>

            <a {...link('contact')} style={deskStyle(currentPage === 'contact')} className="hover:text-[#1e3a8a] transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              {...link('contact')}
              className="inline-block bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors shadow-md hover:shadow-lg"
              style={{ fontSize: '16px', padding: '10px 24px' }}
            >
              Book Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
              <a {...link('home', closeMobile)} style={deskStyle(currentPage === 'home')} className="block text-left py-2">
                Home
              </a>

              <a {...link('features', closeMobile)} style={deskStyle(currentPage === 'features')} className="block text-left py-2">
                Features
              </a>

              {/* Solutions Submenu */}
              <div>
                <div style={deskStyle(isSolutionsPage)} className="text-left py-2">
                  Solutions
                </div>
                <div className="pl-4 flex flex-col gap-2 mt-2">
                  {solutionsPages.map((page) => (
                    <a
                      key={page.id}
                      {...link(page.id, closeMobile)}
                      rel={page.nofollow ? 'nofollow' : undefined}
                      style={{
                        fontSize: '15px',
                        fontWeight: currentPage === page.id ? '600' : '400',
                        color: currentPage === page.id ? '#1e3a8a' : '#6b7280',
                      }}
                      className="block text-left py-1"
                    >
                      {page.label}
                    </a>
                  ))}
                </div>
              </div>

              <a {...link('pricing', closeMobile)} style={deskStyle(currentPage === 'pricing')} className="block text-left py-2">
                Pricing
              </a>

              <a {...link('blog', closeMobile)} style={deskStyle(currentPage === 'blog')} className="block text-left py-2">
                Blog
              </a>

              <a {...link('about', closeMobile)} style={deskStyle(currentPage === 'about')} className="block text-left py-2">
                About
              </a>

              <a {...link('contact', closeMobile)} style={deskStyle(currentPage === 'contact')} className="block text-left py-2">
                Contact
              </a>

              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
                <a
                  {...link('contact', closeMobile)}
                  className="block bg-[#1e3a8a] text-white rounded-lg shadow-md text-center"
                  style={{ fontSize: '16px', padding: '12px 24px' }}
                >
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
