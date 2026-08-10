import { Check, ArrowRight, Target, Sparkles, Mail, Users, MapPin, MessageCircle, ShoppingCart } from 'lucide-react';
import { ShareOfWalletAnalyticsMockup } from '../components/mockups/ShareOfWalletAnalyticsMockup';
import { CustomerPriorityMockup } from '../components/CustomerPriorityMockup';
import { NextBestOffersMockup } from '../components/mockups/NextBestOffersMockup';
import { POSOrderMockup } from '../components/POSOrderMockup';
import { WhatsAppOfferMockup } from '../components/WhatsAppOfferMockup';
import { ProspectsMockup } from '../components/ProspectsMockup';
import { ContentGenerationMockup } from '../components/mockups/ContentGenerationMockup';
import { TeamPerformanceMockup } from '../components/mockups/TeamPerformanceMockup';
import { CoinTowersIcon } from '../components/icons/CoinTowersIcon';
import { useState } from 'react';

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="bg-[#10b981] rounded-full p-1">
            <Check className="w-4 h-4 text-white" />
          </div>
          <span style={{ fontSize: '16px', color: '#374151' }}>{feature}</span>
        </div>
      ))}
    </div>
  );
}

function Eyebrow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div
      className="mb-4 flex items-center"
      style={{
        fontSize: '12px',
        fontWeight: '600',
        color: '#3b82f6',
        letterSpacing: '1.5px',
        textTransform: 'uppercase'
      }}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </div>
  );
}

export function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('analytics');

  const tabs = [
    { id: 'analytics', label: 'Analytics' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'prospects', label: 'Prospects' },
    { id: 'content', label: 'Content' },
    { id: 'team', label: 'Team Tools' },
  ];

  const integrationLogos = [
    'Salesforce', 'SAP', 'Microsoft Dynamics', 'HubSpot', 'Sage', 'QuickBooks'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-[800px] mx-auto text-center">
            <h1
              className="mb-6"
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#1e293b',
                lineHeight: '1.1'
              }}
            >
              Everything you need to grow customer wallet share
            </h1>
            <p
              className="max-w-[700px] mx-auto mb-12"
              style={{
                fontSize: '20px',
                color: '#4b5563',
                lineHeight: '1.6'
              }}
            >
              Deeper insights, automated recommendations, and tools your team will actually use
            </p>

            {/* Feature Category Tabs */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); const el = document.getElementById('section-' + tab.id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className="rounded-lg transition-all"
                  style={{
                    fontSize: '16px',
                    fontWeight: activeTab === tab.id ? '600' : '400',
                    color: activeTab === tab.id ? '#ffffff' : '#1e3a8a',
                    backgroundColor: activeTab === tab.id ? '#1e3a8a' : '#ffffff',
                    border: activeTab === tab.id ? 'none' : '2px solid #1e3a8a',
                    padding: '12px 24px'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 1 - Share of Wallet Analytics */}
      <div id="section-analytics" className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow icon={<CoinTowersIcon className="inline w-4 h-4" />}>
                Intelligent Analytics
              </Eyebrow>
              <h2
                className="mb-6"
                style={{ fontSize: '36px', fontWeight: '700', color: '#1e293b', lineHeight: '1.2' }}
              >
                See exactly what customers buy elsewhere
              </h2>
              <p className="mb-8" style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6' }}>
                Our Analysis engine identifies transaction patterns, CRM data, and industry benchmarks to calculate share of wallet by customer, category, and sub-category. Know precisely where you're winning and where you're losing.
              </p>
              <FeatureList
                items={[
                  'Real-time wallet share calculations',
                  'Category and sub-category breakdowns',
                  'Competitive gap analysis',
                  'Historical trend tracking'
                ]}
              />
            </div>
            <div className="flex justify-center">
              <ShareOfWalletAnalyticsMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 2 - Recommendations (expanded) */}
      <div id="section-recommendations" className="py-24 bg-[#f9fafb]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-[800px] mx-auto text-center mb-20">
            <Eyebrow icon={<Sparkles className="inline w-4 h-4" />}>
              <span className="mx-auto">Recommendations</span>
            </Eyebrow>
            <h2 className="mb-6" style={{ fontSize: '36px', fontWeight: '700', color: '#1e293b', lineHeight: '1.2' }}>
              The right offer, wherever your team is working
            </h2>
            <p style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6' }}>
              Recommendations aren't a report to go and check — they show up on the system, at the till, and in the conversations your team is already having.
            </p>
          </div>

          {/* Row 1 - On system: customer prioritisation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex justify-center lg:order-1">
              <CustomerPriorityMockup />
            </div>
            <div className="lg:order-2">
              <Eyebrow icon={<Target className="inline w-4 h-4" />}>Smart Targeting</Eyebrow>
              <h3 className="mb-5" style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', lineHeight: '1.25' }}>
                Focus on customers with the greatest growth potential
              </h3>
              <p className="mb-6" style={{ fontSize: '16px', color: '#374151', lineHeight: '1.6' }}>
                Individual customer scoring identifies which customers offer the highest potential for wallet share growth based on buying patterns, profitability, and purchase propensity.
              </p>
              <FeatureList
                items={[
                  'AI-powered priority scoring',
                  'Growth potential calculations',
                  'Profitability analysis',
                ]}
              />
            </div>
          </div>

          {/* Row 2 - Automated offers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <Eyebrow icon={<Sparkles className="inline w-4 h-4" />}>Automated Recommendations</Eyebrow>
              <h3 className="mb-5" style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', lineHeight: '1.25' }}>
                Give your team the perfect offer at the perfect time
              </h3>
              <p className="mb-6" style={{ fontSize: '16px', color: '#374151', lineHeight: '1.6' }}>
                Project-aware recommendations suggest the right products based on customer buying patterns, trade type, and project stage — reviewed and sent with one click.
              </p>
              <FeatureList
                items={[
                  'Project-based product recommendations',
                  'Confidence scoring for each offer',
                  'One-click offer deployment',
                ]}
              />
            </div>
            <div className="flex justify-center">
              <NextBestOffersMockup />
            </div>
          </div>

          {/* Row 3 - ERP / POS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex justify-center lg:order-1">
              <POSOrderMockup />
            </div>
            <div className="lg:order-2">
              <Eyebrow icon={<ShoppingCart className="inline w-4 h-4" />}>At the point of sale</Eyebrow>
              <h3 className="mb-5" style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', lineHeight: '1.25' }}>
                Recommendations on the order screen, not a separate tab
              </h3>
              <p className="mb-6" style={{ fontSize: '16px', color: '#374151', lineHeight: '1.6' }}>
                As an order gets built in your ERP, Palm AI flags what's missing and what's worth upgrading — right there on the same screen your team already uses.
              </p>
              <p style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>
                Available now for MACE Systems — other ERPs coming soon.
              </p>
            </div>
          </div>

          {/* Row 4 - WhatsApp */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow icon={<MessageCircle className="inline w-4 h-4" />}>Automated, via chat</Eyebrow>
              <h3 className="mb-5" style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', lineHeight: '1.25' }}>
                When a customer messages in, the offer is already drafted
              </h3>
              <p className="mb-6" style={{ fontSize: '16px', color: '#374151', lineHeight: '1.6' }}>
                A customer orders over WhatsApp — Palm AI drafts the reply with the right upsells and fixings already added. Your team approves or declines before anything sends.
              </p>
              <FeatureList
                items={[
                  'Drafted, never sent without approval',
                  'Upsells and fixings suggested automatically',
                  'Approved orders flow straight to the order screen',
                ]}
              />
            </div>
            <div className="flex justify-center">
              <WhatsAppOfferMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 3 - Prospects */}
      <div id="section-prospects" className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <Eyebrow icon={<MapPin className="inline w-4 h-4" />}>
              <span className="mx-auto">Prospects</span>
            </Eyebrow>
            <h2 className="mb-6" style={{ fontSize: '36px', fontWeight: '700', color: '#1e293b', lineHeight: '1.2' }}>
              Your next customers are already out there. We find them.
            </h2>
            <p style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6' }}>
              Every tradesperson, contractor and construction company in your catchment area — estimated spend, recent projects, and a pipeline to track them through to a live account.
            </p>
          </div>
          <div className="flex justify-center">
            <ProspectsMockup />
          </div>
        </div>
      </div>

      {/* Feature Section 4 - Content Generation */}
      <div id="section-content" className="py-24 bg-[#f9fafb]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:order-1">
              <ContentGenerationMockup />
            </div>
            <div className="lg:order-2">
              <Eyebrow icon={<Mail className="inline w-4 h-4" />}>Marketing Automation</Eyebrow>
              <h2 className="mb-6" style={{ fontSize: '36px', fontWeight: '700', color: '#1e293b', lineHeight: '1.2' }}>
                Create personalised content in seconds
              </h2>
              <p className="mb-8" style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6' }}>
                Generate emails, and social posts targeted by project stage and customer needs. Create personalised marketing content that customers love because it's helpful.
              </p>
              <FeatureList
                items={[
                  'Personalised email generation',
                  'Deploy to Chatbots or WhatsApp',
                  'Social media Content & Video',
                  'Project stage-aware messaging'
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 5 - Team Performance */}
      <div id="section-team" className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow icon={<Users className="inline w-4 h-4" />}>Sales Enablement</Eyebrow>
              <h2 className="mb-6" style={{ fontSize: '36px', fontWeight: '700', color: '#1e293b', lineHeight: '1.2' }}>
                Turn every rep into a top performer
              </h2>
              <p className="mb-8" style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6' }}>
                Personal dashboards show each rep their performance, learning modules, and development plans. Gamified learning makes training engaging and drives adoption.
              </p>
              <FeatureList
                items={[
                  'Individual performance dashboards',
                  'Gamified learning modules',
                  'Personal development plans',
                  'Team leaderboards and goals'
                ]}
              />
            </div>
            <div className="flex justify-center">
              <TeamPerformanceMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="py-24 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="mb-6" style={{ fontSize: '36px', fontWeight: '700', color: '#1e293b' }}>
            Works with your existing tools
          </h2>
          <p className="mb-12" style={{ fontSize: '18px', color: '#6b7280' }}>
            Integrates with your CRM, ERP, and business tools
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-[900px] mx-auto">
            {integrationLogos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
                style={{ minHeight: '100px' }}
              >
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#6b7280' }}>
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="mb-6" style={{ fontSize: '36px', fontWeight: '700', color: '#ffffff' }}>
            Ready to see your features in action?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              className="bg-white text-[#1e3a8a] rounded-lg hover:shadow-xl transition-all"
              style={{ fontSize: '16px', fontWeight: '600', padding: '14px 32px' }}
            >
              Interactive Demo
            </button>
            <button
              className="bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1e3a8a] transition-all"
              style={{ fontSize: '16px', fontWeight: '600', padding: '14px 32px' }}
            >
              Book Personal Walkthrough
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
