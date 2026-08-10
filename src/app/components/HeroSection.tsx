import { ArrowRight } from 'lucide-react';

const SEGMENTS = [
  "Builders' Merchants",
  "Plumbers' Merchants",
  'Tool Hire',
  'Electrical Wholesalers',
  'Suppliers',
];

export function HeroSection() {
  return (
    <section className="w-full bg-white pt-20 pb-16 px-6">
      <div className="max-w-[900px] mx-auto text-center">
        <p
          className="mb-5"
          style={{ fontSize: '13px', fontWeight: '600', color: '#10b981', letterSpacing: '0.3px' }}
        >
          {SEGMENTS.join(' · ')}
        </p>
        <h1
          className="mb-4"
          style={{ fontSize: '48px', fontWeight: '800', color: '#0f172a', lineHeight: '1.15' }}
        >
          Sell more. To the right customers. More profitably.
        </h1>
        <p
          className="max-w-[680px] mx-auto mb-3"
          style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}
        >
          Palm AI analyses your customer data at the point of sale — showing
          you who's buying elsewhere, which trades to target next, and what
          it takes to win their full spend.
        </p>
        <p
          className="max-w-[680px] mx-auto mb-8"
          style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}
        >
          We also help you keep the right products in the right branch at
          the right time, and give you clearer, forward-looking cashflow
          forecasts.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl transition-colors shadow-md hover:shadow-lg"
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#1e3a8a',
            padding: '16px 28px',
          }}
        >
          Get in touch to see how we do this for businesses like yours
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="mt-3" style={{ fontSize: '13px', color: '#9ca3af' }}>
          Book a Demo
        </p>
      </div>
    </section>
  );
}
