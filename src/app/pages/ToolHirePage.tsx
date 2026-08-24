import { ShoppingCart, TrendingDown, Clock, Building2, Wrench, HardHat, Zap } from 'lucide-react';
import { CategoryDashboardMockup } from '../components/CategoryDashboardMockup';

const toolHireCustomers = [
  {
    name: 'Apex Groundworks Ltd',
    trade: 'Groundworker',
    categories: [
      { name: 'Compaction Equipment', percent: 62, status: 'strong' as const },
      { name: 'Generators & Power', percent: 18, status: 'risk' as const },
      { name: 'Site Welfare Units', percent: 12, status: 'elsewhere' as const },
    ]
  },
  {
    name: 'Ridgeline Roofing Co',
    trade: 'Roofer',
    categories: [
      { name: 'Access Towers', percent: 71, status: 'strong' as const },
      { name: 'Power Tools & Fixings', percent: 22, status: 'elsewhere' as const },
      { name: 'PPE & Safety Equipment', percent: 15, status: 'risk' as const },
    ]
  },
  {
    name: 'Turner Landscaping',
    trade: 'Landscaper',
    categories: [
      { name: 'Landscaping Equipment', percent: 48, status: 'risk' as const },
      { name: 'Excavation & Groundworks', percent: 33, status: 'strong' as const },
      { name: 'Generators & Power', percent: 19, status: 'elsewhere' as const },
    ]
  },
];

const toolHireFloatingCards = {
  categoryOpportunity: {
    amount: '£3K',
    category: 'Generators & Power'
  },
  buyingElsewhereAlert: {
    category: 'Access Towers',
    likelihood: 68
  },
  orderReduction: {
    category: 'Power Tools',
    percent: 25
  },
  recommendation: {
    suggestion: 'Offer welfare unit upgrade'
  }
};

export function ToolHirePage() {
  const categories = [
    { name: 'Powered Access', share: 58, status: 'strong', icon: '🏗️' },
    { name: 'Excavation & Groundworks', share: 22, status: 'opportunity', icon: '🚜' },
    { name: 'Compaction Equipment', share: 45, status: 'growing', icon: '🧱' },
    { name: 'Power Tools & Fixings', share: 67, status: 'strong', icon: '🔨' },
    { name: 'Generators & Power', share: 31, status: 'growing', icon: '🔌' },
    { name: 'Site Accommodation & Welfare', share: 14, status: 'opportunity', icon: '🏠' },
    { name: 'Scaffolding & Access Towers', share: 27, status: 'opportunity', icon: '🪜' },
    { name: 'Concrete & Mixing Equipment', share: 39, status: 'growing', icon: '🧰' },
    { name: 'Surveying & Measuring', share: 18, status: 'opportunity', icon: '📐' },
    { name: 'Heating & Drying Equipment', share: 24, status: 'opportunity', icon: '🔥' },
    { name: 'Landscaping Equipment', share: 33, status: 'growing', icon: '🌿' },
    { name: 'PPE & Safety Equipment', share: 52, status: 'strong', icon: '🦺' },
  ];

  const getStatusColor = (status: string) => {
    if (status === 'strong') return '#10b981';
    if (status === 'growing') return '#3b82f6';
    return '#f59e0b';
  };

  const getStatusLabel = (status: string) => {
    if (status === 'strong') return '✓ Strong';
    if (status === 'growing') return '→ Growing';
    return '⚠ Opportunity';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-20 text-center">
          <div
            className="mb-4"
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Solutions {' > '} Tool Hire
          </div>

          <h1
            className="max-w-[900px] mx-auto mb-6"
            style={{
              fontSize: '52px',
              fontWeight: '700',
              color: '#ffffff',
              lineHeight: '1.1'
            }}
          >
            Grow Your Tool Hire Business with Data-Driven Insights
          </h1>

          <p
            className="max-w-[800px] mx-auto mb-10"
            style={{
              fontSize: '22px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.4'
            }}
          >
            Help contractors and tradespeople get the right equipment for every job, while you grow your wallet share
          </p>

          <a
            href="#how-it-works"
            className="inline-block bg-white text-[#1e3a8a] rounded-lg hover:shadow-xl transition-all mb-12"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              padding: '16px 40px',
              textDecoration: 'none'
            }}
          >
            See Tool Hire Solution
          </a>

          {/* Capability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              'Multi-depot fleet visibility',
              'Job-stage equipment intelligence',
              'Trade-specific recommendations'
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-full"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: '10px 20px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            The Challenge Facing Tool Hire Businesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <ShoppingCart className="w-8 h-8 text-[#ef4444]" />
              </div>
              <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b' }}>
                Customers Hire Elsewhere for Certain Kit
              </h3>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6' }}>
                Your regular contractors hire power tools from you, but source powered access, generators, or welfare units elsewhere on the same job.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <TrendingDown className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b' }}>
                Limited Fleet & Account Visibility
              </h3>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6' }}>
                Your team manage a wide account base but have no easy way to see which customers represent the biggest growth opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <Clock className="w-8 h-8 text-[#ef4444]" />
              </div>
              <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b' }}>
                Manual, Time-Consuming Analysis
              </h3>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6' }}>
                Pulling reports, checking utilisation, and trying to spot patterns takes hours away from actual selling and turnaround time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section with Mockup */}
      <div id="how-it-works" className="py-24 bg-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            How Share of Wallet Works for Tool Hire
          </h2>

          <div className="relative flex items-center justify-center min-h-[600px]">
            <div className="z-10">
              <CategoryDashboardMockup customers={toolHireCustomers} floatingCards={toolHireFloatingCards} />
            </div>

            <div
              className="absolute top-0 left-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-[#3b82f6]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Identify Missing Equipment
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                See which plant, tools, and equipment your customers hire from competitors
              </p>
            </div>

            <div
              className="absolute top-0 right-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <HardHat className="w-6 h-6 text-[#10b981]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Job Intelligence
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Know when contractors start new jobs and what they'll need through each phase
              </p>
            </div>

            <div
              className="absolute bottom-0 left-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Wrench className="w-6 h-6 text-[#f59e0b]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Trade-Specific Recommendations
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Get next-best offers tailored to groundworkers, roofers, landscapers and general contractors
              </p>
            </div>

            <div
              className="absolute bottom-0 right-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-[#8b5cf6]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Depot Performance
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Compare wallet share across depots and identify best practices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tracking Section */}
      <div className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            Track Wallet Share Across All Equipment Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#f9fafb] to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: '32px' }}>{category.icon}</span>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                        {category.name}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: getStatusColor(category.status),
                          marginTop: '4px'
                        }}
                      >
                        {getStatusLabel(category.status)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${category.share}%`,
                        backgroundColor: getStatusColor(category.status)
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1e3a8a',
                      minWidth: '50px'
                    }}
                  >
                    {category.share}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trade-Specific Features */}
      <div className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            Built Specifically for Tool Hire
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: 'Multi-Depot Management',
                description: 'Compare performance across hire depots'
              },
              {
                icon: Wrench,
                title: 'Trade Account Insights',
                description: 'Understand contractor vs. developer vs. DIY needs'
              },
              {
                icon: HardHat,
                title: 'Job Tracking',
                description: 'From site setup to completion'
              },
              {
                icon: Zap,
                title: 'Supplier Collaboration',
                description: 'Share data insights with your suppliers for joint growth and better rebates'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                    <Icon className="w-8 h-8 text-[#3b82f6]" />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Integration */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <p style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
            Can integrate with your current systems via API.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="mb-6" style={{ fontSize: '36px', fontWeight: '700', color: '#1e293b' }}>
            Ready to grow your tool hire business?
          </h2>
          <p className="mb-10" style={{ fontSize: '18px', color: '#6b7280' }}>
            See how other tool hire businesses are using share of wallet to increase revenue from existing customers
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-all shadow-lg hover:shadow-xl"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 32px',
                textDecoration: 'none'
              }}
            >
              Book a Tool Hire Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
