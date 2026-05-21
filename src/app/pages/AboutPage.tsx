import founderImage from '../assets/8c7a44181cf12450c3d1a82927bc83a6afa8ce97.png';
import { GreenCheckIcon } from '../components/icons/GreenCheckIcon';
import { Mail, Linkedin } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h1
              className="mb-6"
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#1e293b',
                lineHeight: '1.1'
              }}
            >
              Grow Share of Wallet
            </h1>
            <p
              className="max-w-[700px] mx-auto"
              style={{
                fontSize: '20px',
                color: '#4b5563',
                lineHeight: '1.6'
              }}
            >
              ShareofWallet.co.uk Empowers Merchants, Wholesalers and their suppliers to grow their Share of Wallet
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="mb-6"
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#1e293b',
                  lineHeight: '1.2'
                }}
              >
                Built for Independent Merchants
              </h2>
              <p
                className="mb-6"
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                Our platform is specifically tailored to address the unique challenges faced by independent merchants, wholesalers, and the brands that supply them.
              </p>
              <div className="space-y-4">
                {[
                  'Identifies cross-selling and upselling opportunities specific to needs of the different trades',
                  'Gives you an Early Warning System for customers potentially switching spend',
                  'Delivers actionable insights directly to branch staff and sales teams in an easy-to-understand format - not a flood of reports',
                  'Works seamlessly with your existing ERP system—no complex integration required'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <GreenCheckIcon className="w-5 h-5" />
                    </div>
                    <span style={{ fontSize: '16px', color: '#374151', lineHeight: '1.5' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-12 text-white">
              <h3
                className="mb-4"
                style={{
                  fontSize: '24px',
                  fontWeight: '700'
                }}
              >
                ShareOfWallet
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  opacity: 0.9
                }}
              >
                ShareOfWallet is a product of Palm AI, designed specifically to help merchants understand and grow their share of customer spending across all categories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-24 bg-[#f9fafb]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2
              className="mb-4"
              style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#1e293b'
              }}
            >
              About Our Founder
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="relative">
                <img 
                  src={founderImage} 
                  alt="Jonathan Pritchard, Founder of Palm AI"
                  className="rounded-2xl w-full shadow-lg"
                  style={{ maxWidth: '400px', margin: '0 auto' }}
                />
              </div>
              
              {/* Contact Founder Section */}
              <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm" style={{ maxWidth: '400px', margin: '32px auto 0' }}>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#1e293b'
                  }}
                >
                  Contact Founder
                </h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:j@palmai.io"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f9fafb] transition-colors group"
                  >
                    <div className="bg-[#3b82f6] bg-opacity-10 rounded-lg p-2 group-hover:bg-opacity-20 transition-colors">
                      <Mail className="w-4 h-4 text-[#3b82f6]" />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                        Email Jonathan
                      </div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>
                        j@palmai.io
                      </div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/jonathanpritch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f9fafb] transition-colors group"
                  >
                    <div className="bg-[#3b82f6] bg-opacity-10 rounded-lg p-2 group-hover:bg-opacity-20 transition-colors">
                      <Linkedin className="w-4 h-4 text-[#3b82f6]" />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                        Connect on LinkedIn
                      </div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>
                        /in/jonathanpritch
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              <p
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                ShareofWallet.co.uk is a product of Palm AI Limited. Palm AI was founded by <strong>Jonathan Pritchard</strong>, whose career has been defined by transforming data into growth opportunities for builders' and plumbers' merchants.
              </p>
              
              <p
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                Beginning in 2006 with Build Center (Wolseley UK), Jonathan pioneered a groundbreaking marketing system that evolved into the award-winning "Spend & Save" customer campaign, which used transaction data to create personalised offers that significantly improved customer share-of-wallet.
              </p>
              
              <div className="bg-white border-l-4 border-[#10b981] p-6 rounded-r-lg">
                <p
                  style={{
                    fontSize: '16px',
                    color: '#1e293b',
                    fontStyle: 'italic',
                    lineHeight: '1.6'
                  }}
                >
                  This initiative didn't just drive sales—it became the only marketing programme credited by Plumb Center for positively impacting their half-year financial results.
                </p>
              </div>
              
              <p
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                Jonathan's expertise extends beyond merchants, having led similar data transformation projects for major brands like <strong>Carlsberg</strong>, <strong>Sky TV</strong>, and <strong>PepsiCo's Walkers Crisps</strong>, each focused on empowering frontline teams with actionable customer insights that drive measurable revenue growth in hard-to-reach markets.
              </p>
              
              <p
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                This wealth of experience ensures Palm AI truly understands the merchant business model and the critical importance of branch-level customer relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#ffffff'
            }}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            className="mb-8 max-w-[600px] mx-auto"
            style={{
              fontSize: '18px',
              color: '#ffffff',
              opacity: 0.9
            }}
          >
            Discover how ShareofWallet can help you unlock growth opportunities and build stronger customer relationships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact">
              <button
                className="bg-white text-[#1e3a8a] rounded-lg hover:shadow-xl transition-all"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '14px 32px'
                }}
              >
                Book a Demo
              </button>
            </a>
            <a href="/pricing">
              <button
                className="bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1e3a8a] transition-all"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '14px 32px'
                }}
              >
                View Pricing
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}