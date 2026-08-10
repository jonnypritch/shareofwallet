import palmAiLogoWhite from '../../assets/palm-ai-logo-colour-white-text.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  const productLinks = [
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'blog', label: 'Blog' },
  ];

  const companyLinks = [
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer style={{ backgroundColor: '#1d1d31' }}>
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
            <p
              className="mb-4"
              style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px' }}
            >
              Product
            </p>
            <div className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left hover:text-white transition-colors"
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <p
              className="mb-4"
              style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px' }}
            >
              Company
            </p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left hover:text-white transition-colors"
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}
                >
                  {link.label}
                </button>
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
          <button
            onClick={() => onNavigate('privacy')}
            className="hover:text-white transition-colors"
            style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}
          >
            Privacy &amp; Cookie Policy
          </button>
        </div>
      </div>
    </footer>
  );
}
