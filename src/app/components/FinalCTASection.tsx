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
          Ready to retain and grow the right customers?
        </h2>

        {/* Subheadline */}
        <p 
          className="mb-10"
          style={{ 
            fontSize: '20px', 
            color: '#4b5563'
          }}
        >
          See exactly where your growth opportunities are hiding
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button 
            className="bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            style={{ 
              fontSize: '18px',
              fontWeight: '600',
              padding: '16px 40px'
            }}
          >
            Calculate Your Opportunity
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            className="bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
            style={{ 
              fontSize: '18px',
              fontWeight: '600',
              padding: '16px 40px'
            }}
          >
            Book a Demo
          </button>
        </div>

        {/* Fine Print */}
        <div 
          className="flex items-center justify-center gap-3 flex-wrap"
          style={{ 
            fontSize: '14px', 
            color: '#6b7280'
          }}
        >
          <span>No credit card required</span>
          <span className="w-1 h-1 rounded-full bg-gray-400" />
          <span>14-day free trial</span>
          <span className="w-1 h-1 rounded-full bg-gray-400" />
          <span>Setup in minutes</span>
        </div>
      </div>
    </section>
  );
}
