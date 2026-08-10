import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="w-full bg-white py-[120px]">
      <div className="max-w-[800px] mx-auto px-8 text-center">
        {/* Headline */}
        <h2
          className="mb-6"
          style={{
            fontSize: '40px',
            fontWeight: '700',
            color: '#1e3a8a'
          }}
        >
          Ready to grow?
        </h2>

        {/* Subheadline */}
        <p
          className="mb-10"
          style={{
            fontSize: '20px',
            color: '#4b5563'
          }}
        >
          See exactly where your opportunities are and how to fulfil them.
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              padding: '16px 40px'
            }}
          >
            Book a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
