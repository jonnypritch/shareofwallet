import { ArrowRight, Check } from 'lucide-react';

const CAPABILITIES = [
  'See the opportunity to grow your share of wallet, category by category',
  'See your prospects — and what they spend on materials, with contact details',
  'Understand your local market share, and how it\u2019s moving over time',
  'Link intelligently to your ERP, where your system supports it',
  'See cross-sells and upsells right on the order screen',
  'Go from WhatsApp and SMS straight to orders, automatically',
  'Get assistance across inventory, branch to branch',
  'Get more accurate, forward-looking cashflow forecasts',
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-[760px] mx-auto text-center">
            <h1
              className="mb-6"
              style={{ fontSize: '44px', fontWeight: '700', color: '#1e293b', lineHeight: '1.15' }}
            >
              Everything you need to grow — priced around your business
            </h1>
            <p
              className="max-w-[600px] mx-auto"
              style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}
            >
              No fixed tiers, no published price list. What you pay is
              agreed around your branches, your data, and what you need live
              first.
            </p>
          </div>
        </div>
      </div>

      {/* Capability recap */}
      <div className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="space-y-4 mb-14">
            {CAPABILITIES.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="bg-[#10b981] rounded-full p-1 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span style={{ fontSize: '16px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2
              className="mb-6"
              style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b' }}
            >
              Contact us today for the best deal
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors shadow-md hover:shadow-lg"
              style={{ fontSize: '17px', fontWeight: '600', padding: '16px 36px', textDecoration: 'none' }}
            >
              Talk to us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
