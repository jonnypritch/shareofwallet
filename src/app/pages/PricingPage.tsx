import { ArrowRight } from 'lucide-react';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-24">
        <div className="max-w-[720px] mx-auto px-8 text-center">
          <h1
            className="mb-6"
            style={{ fontSize: '42px', fontWeight: '700', color: '#1e293b', lineHeight: '1.15' }}
          >
            We don't publish a price list.
          </h1>

          <p
            className="mb-6"
            style={{ fontSize: '18px', color: '#374151', lineHeight: '1.7' }}
          >
            What you'd pay depends on your branches, your data, your ERP, and
            what you need live first — not everything integrates the same
            way, and we'd rather have that conversation properly than guess
            at a number that doesn't fit your setup.
          </p>

          <p
            className="mb-12"
            style={{ fontSize: '18px', color: '#374151', lineHeight: '1.7' }}
          >
            Get in touch, tell us what you're working with, and we'll agree a
            price together. No obligation, and no assumption about what
            you'll want to buy.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors"
            style={{ fontSize: '17px', fontWeight: '600', padding: '16px 36px', textDecoration: 'none' }}
          >
            Talk to us
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
