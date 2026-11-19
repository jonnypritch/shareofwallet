import type { MouseEvent } from 'react';
import palmAiLogoWhite from '../../assets/palm-ai-logo-colour-white-text.png';
import { PAGE_PATHS } from '../data/paths';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  const productLinks = [
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQ' },
  ];

  const solutionsLinks = [
    { id: 'solutions-builders', label: "Builders' Merchants" },
    { id: 'solutions-electrical', label: 'Electrical Wholesale' },
    { id: 'solutions-plumbers', label: "Plumbers' Merchants" },
    { id: 'solutions-tool-hire', label: 'Tool Hire' },
    { id: 'solutions-foodservice', label: 'Foodservice Wholesale' },
  ];

  const companyLinks = [
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  // Real links (href) so crawlers can follow them; a normal click uses the app's navigation.
  const link = (id: string) => ({
    href: PAGE_PATHS[id] ?? '/',
    onClick: (e: MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      onNavigate(id);
    },
  });

  const columnTitleStyle = {
    fontSize: '11px',
    fontWeight: '700',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  };

  const linkStyle = { fontSize: '14px', color: 'rgba(255,255,255,0.7)' };

  return (
    <footer style={{ backgroundColor: '#1d1d31' }}>
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <img src={palmAiLogoWhite} alt="Palm AI" className="h-8 w-auto mb-4" />
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.6', maxWidth: '360px' }}>
              AI platform for Builders' Merchants, Plumbers' Merchants, Tool
              Hire, Electrical Wholesalers and their Suppliers.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p className="mb-4" style={columnTitleStyle}>Product</p>
            <div className="flex flex-col gap-3">
              {productLinks.map((l) => (
                <a key={l.id} {...link(l.id)} className="block text-left hover:text-white transition-colors" style={linkStyle}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions links */}
          <div>
            <p className="mb-4" style={columnTitleStyle}>Solutions</p>
            <div className="flex flex-col gap-3">
              {solutionsLinks.map((l) => (
                <a key={l.id} {...link(l.id)} className="block text-left hover:text-white transition-colors" style={linkStyle}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <p className="mb-4" style={columnTitleStyle}>Company</p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <a key={l.id} {...link(l.id)} className="block text-left hover:text-white transition-colors" style={linkStyle}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
            <p>&copy; {year} Palm AI Limited. All rights reserved.</p>
            <p className="mt-1">71–75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
          </div>
          <a
            {...link('privacy')}
            className="hover:text-white transition-colors"
            style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}
          >
            Privacy &amp; Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
