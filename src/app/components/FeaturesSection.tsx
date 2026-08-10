import { PieChart, Target, Lightbulb } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { WalletShareMockup } from './WalletShareMockup';
import { CustomerPriorityMockup } from './CustomerPriorityMockup';
import { OpportunityAlertMockup } from './OpportunityAlertMockup';

export function FeaturesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: '40px',
                fontWeight: '700',
                color: '#1e3a8a'
              }}
            >
              Stop guessing where to grow. Start knowing.
            </h2>
            <p
              className="max-w-[700px] mx-auto"
              style={{
                fontSize: '18px',
                color: '#4b5563'
              }}
            >
              It's not another report to read. It's your data, analysed and acted on — automatically.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Grow Your Share of Wallet */}
            <FeatureCard
              icon={<PieChart className="w-12 h-12 text-[#3b82f6]" strokeWidth={2} />}
              statBadge={{ text: '+23% average increase', color: 'green' }}
              headline="Meet more of your customer needs"
              description="Identify exactly which product categories your customers buy elsewhere. See wallet share percentages and growth opportunities ranked by revenue impact."
              mockup={<WalletShareMockup />}
              bulletPoints={[
                'Identify products bought elsewhere',
                'Calculate share of wallet by customer',
                'Track improvements over time'
              ]}
            />

            {/* Card 2 - Target High-Impact Customers */}
            <FeatureCard
              icon={<Target className="w-12 h-12 text-[#3b82f6]" strokeWidth={2} />}
              statBadge={{ text: 'Save 12hrs/week', color: 'blue' }}
              headline="Focus where it matters most"
              description="AI-powered customer prioritisation shows you which accounts have the greatest growth potential, profitability, and propensity to buy."
              mockup={<CustomerPriorityMockup />}
              bulletPoints={[
                'Growth + profitability scoring',
                'Propensity-based recommendations',
                'Stop wasting time on low-potential accounts'
              ]}
            />

            {/* Card 3 - Turn Farmers into Hunters */}
            <FeatureCard
              icon={<Lightbulb className="w-12 h-12 text-[#3b82f6]" strokeWidth={2} />}
              statBadge={{ text: 'Real-time alerts', color: 'amber' }}
              headline="Turn Farmers into Hunters"
              description="Give your counter staff the confidence to open the conversation. Transform order-takers into opportunity-makers with automated next-best offers, project intelligence, and real-time customer alerts."
              mockup={<OpportunityAlertMockup />}
              bulletPoints={[
                'Automated opportunity detection',
                'Mobile + desktop notifications',
                 'Send straight to Customer via Whatsapp or Chatbot',
                'Project-stage intelligence'
              ]}
            />
          </div>

          {/* Automation closing line */}
          <p
            className="text-center mt-16 max-w-[640px] mx-auto"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1e3a8a',
              lineHeight: '1.5'
            }}
          >
            No dashboards to check, no reports to pull. Palm AI assists you on
            what to do next — and the likely impact.
          </p>

          {/* Bespoke reporting teaser */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span
              className="rounded-full px-3 py-1"
              style={{
                fontSize: '11px',
                fontWeight: '700',
                backgroundColor: '#f3f4f6',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Coming Soon
            </span>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Want something bespoke? Custom reports built around exactly the
              numbers you care about.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
