import { Check, ArrowRight, Database, Target, Sparkles, Mail, Users } from 'lucide-react';
import { ShareOfWalletAnalyticsMockup } from '../components/mockups/ShareOfWalletAnalyticsMockup';
import { CustomerPriorityMockup } from '../components/CustomerPriorityMockup';
import { NextBestOffersMockup } from '../components/mockups/NextBestOffersMockup';
import { ContentGenerationMockup } from '../components/mockups/ContentGenerationMockup';
import { TeamPerformanceMockup } from '../components/mockups/TeamPerformanceMockup';
import { CoinTowersIcon } from '../components/icons/CoinTowersIcon';
import { useState } from 'react';

export function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('analytics');

  const tabs = [
    { id: 'analytics', label: 'Analytics' },
    { id: 'recommendations', label: 'Recommendations' },
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
                  onClick={() => setActiveTab(tab.id)}
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
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div
                className="mb-4"
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#3b82f6',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <CoinTowersIcon className="inline w-4 h-4 mr-2" />
                INTELLIGENT ANALYTICS
              </div>
              <h2
                className="mb-6"
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#1e293b',
                  lineHeight: '1.2'
                }}
              >
                See exactly what customers buy elsewhere
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                Our Analysis engine identifies transaction patterns, CRM data, and industry benchmarks to calculate share of wallet by customer, category, and sub-category. Know precisely where you're winning and where you're losing.
              </p>

              {/* Feature List */}
              <div className="space-y-3">
                {[
                  'Real-time wallet share calculations',
                  'Category and sub-category breakdowns',
                  'Competitive gap analysis',
                  'Historical trend tracking'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#10b981] rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span style={{ fontSize: '16px', color: '#374151' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center">
              <ShareOfWalletAnalyticsMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 2 - Customer Prioritization */}
      <div className="py-24 bg-[#f9fafb]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Visual */}
            <div className="flex justify-center lg:order-1">
              <CustomerPriorityMockup />
            </div>

            {/* Right Content */}
            <div className="lg:order-2">
              <div
                className="mb-4"
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#3b82f6',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Target className="inline w-4 h-4 mr-2" />
                SMART TARGETING
              </div>
              <h2
                className="mb-6"
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#1e293b',
                  lineHeight: '1.2'
                }}
              >
                Focus on customers with the greatest growth potential
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                Individual Customer scoring identifies which customers offer the highest potential for wallet share growth based on buying patterns, profitability, and purchase propensity. Stop wasting time on low-value accounts.
              </p>

              {/* Feature List */}
              <div className="space-y-3">
                {[
                  'AI-powered priority scoring',
                  'Growth potential calculations',
                  'Profitability analysis',
                  'Smart filters and segmentation'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#10b981] rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span style={{ fontSize: '16px', color: '#374151' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 3 - Next Best Offers */}
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div
                className="mb-4"
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#3b82f6',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Sparkles className="inline w-4 h-4 mr-2" />
                AUTOMATED RECOMMENDATIONS
              </div>
              <h2
                className="mb-6"
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#1e293b',
                  lineHeight: '1.2'
                }}
              >
                Give your team the perfect offer at the perfect time
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                Project-aware recommendations suggest the right products based on customer buying patterns, trade type, and project stage. Your team always know what to offer next. Automate this via Chat Channels to never miss an opporunity
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {[
                  'Project-based product recommendations',
                  'Confidence scoring for each offer',
                  'Trade-specific suggestions',
                  'One-click offer deployment'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#10b981] rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span style={{ fontSize: '16px', color: '#374151' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#3b82f6'
                }}
              >
            
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center">
              <NextBestOffersMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 4 - Content Generation */}
      <div className="py-24 bg-[#f9fafb]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Visual */}
            <div className="flex justify-center lg:order-1">
              <ContentGenerationMockup />
            </div>

            {/* Right Content */}
            <div className="lg:order-2">
              <div
                className="mb-4"
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#3b82f6',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Mail className="inline w-4 h-4 mr-2" />
                MARKETING AUTOMATION
              </div>
              <h2
                className="mb-6"
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#1e293b',
                  lineHeight: '1.2'
                }}
              >
                Create personalised content in seconds
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                Generate emails, and social posts targeted by project stage and customer needs. Create personalised marketing content that customers love because it's helpful. 
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {[
                  'Personalised email generation',
                  'Deploy to Chatbots or WhatsApp',
                  'Social media Content & Video',
                  'Project stage-aware messaging'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#10b981] rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span style={{ fontSize: '16px', color: '#374151' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#3b82f6'
                }}
              >
               
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 5 - Team Performance */}
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div
                className="mb-4"
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#3b82f6',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Users className="inline w-4 h-4 mr-2" />
                SALES ENABLEMENT
              </div>
              <h2
                className="mb-6"
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#1e293b',
                  lineHeight: '1.2'
                }}
              >
                Turn every rep into a top performer
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.6'
                }}
              >
                Personal dashboards show each rep their performance, learning modules, and development plans. Gamified learning makes training engaging and drives adoption.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {[
                  'Individual performance dashboards',
                  'Gamified learning modules',
                  'Personal development plans',
                  'Team leaderboards and goals'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#10b981] rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span style={{ fontSize: '16px', color: '#374151' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#3b82f6'
                }}
              >
              
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center">
              <TeamPerformanceMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="py-24 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            Works with your existing tools
          </h2>
          <p
            className="mb-12"
            style={{
              fontSize: '18px',
              color: '#6b7280'
            }}
          >
            Integrates with your CRM, ERP, and business tools
          </p>

          {/* Integration Logos */}
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
          <h2
            className="mb-6"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#ffffff'
            }}
          >
            Ready to see your features in action?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              className="bg-white text-[#1e3a8a] rounded-lg hover:shadow-xl transition-all"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 32px'
              }}
            >
              Interactive Demo
            </button>
            <button
              className="bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1e3a8a] transition-all"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 32px'
              }}
            >
              Book Personal Walkthrough
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}