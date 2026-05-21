import { ShoppingCart, TrendingDown, Clock, Building2, Wrench, HardHat, Zap } from 'lucide-react';
import { CategoryDashboardMockup } from '../components/CategoryDashboardMockup';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function SolutionsPage() {
  const categories = [
    { name: 'Timber & Sheet Materials', share: 63, status: 'strong', icon: '🪵' },
    { name: 'Bricks and Blocks', share: 12, status: 'opportunity', icon: '🧱' },
    { name: 'Plumbing & Electrical Supplies', share: 8, status: 'opportunity', icon: '🚰 ⚡' },
    { name: 'Hand & Power Tools', share: 34, status: 'growing', icon: '🔨' },
    { name: 'Cement & Aggregates', share: 71, status: 'strong', icon: '🏗️' },
    { name: 'Ironmongery', share: 45, status: 'growing', icon: '🔩' },
    { name: 'Roofing Materials', share: 19, status: 'opportunity', icon: '🏠' },
    { name: 'Landscaping & Paving', share: 15, status: 'opportunity', icon: '🌿' },
    { name: 'PPE & Workwear', share: 22, status: 'opportunity', icon: '🦺' },
    { name: 'Adhesives & Sealants', share: 38, status: 'growing', icon: '🔧' },
    { name: 'Insulation', share: 41, status: 'growing', icon: '🧱' },
    { name: 'Decorating Supplies', share: 27, status: 'opportunity', icon: '🎨' },
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
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHN1cHBsaWVzJTIwbWVyY2hhbnQlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzYwOTYxNjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Building supplies warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] opacity-90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-20 text-center">
          <div
            className="mb-4"
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Solutions {' > '} Builders' Merchants
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
            Grow Your Builders' Merchant Business with Data-Driven Insights
          </h1>
          
          <p
            className="max-w-[800px] mx-auto mb-10"
            style={{
              fontSize: '22px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.4'
            }}
          >
            Help builders, developers, and specialist trades grow their projects while you grow your wallet share
          </p>

          <button
            className="bg-white text-[#1e3a8a] rounded-lg hover:shadow-xl transition-all mb-12"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              padding: '16px 40px'
            }}
          >
            See Merchant Solution
          </button>

          {/* Industry Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              'Average 23% wallet growth',
              '12+ product categories tracked',
              'Real-time project intelligence'
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
            The Challenge Facing Builders' Merchants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pain Point 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <ShoppingCart className="w-8 h-8 text-[#ef4444]" />
              </div>
              <h3
                className="mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1e293b'
                }}
              >
                Customers Split Their Spend
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                Your regular customers buy timber from you, but source cement, insulation, and metalwork elsewhere. You're missing 40-60% of their project needs.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <TrendingDown className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <h3
                className="mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1e293b'
                }}
              >
                Limited Account Visibility
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                Your staff manage 100+ accounts but have no way to know which customers represent the biggest growth opportunities.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <Clock className="w-8 h-8 text-[#ef4444]" />
              </div>
              <h3
                className="mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1e293b'
                }}
              >
                Manual, Time-Consuming Analysis
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                Pulling reports, analysing spreadsheets, and trying to spot patterns takes hours away from actual selling time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section with Mockup */}
      <div className="py-24 bg-blue-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            How Share of Wallet Works for Builders' Merchants
          </h2>

          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Central Dashboard */}
            <div className="z-10">
              <CategoryDashboardMockup />
            </div>

            {/* Floating Callout Cards */}
            {/* Top-left card */}
            <div
              className="absolute top-0 left-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-[#3b82f6]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Identify Missing Categories
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                See which building materials, tools, and supplies your customers buy from competitors
              </p>
            </div>

            {/* Top-right card */}
            <div
              className="absolute top-0 right-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <HardHat className="w-6 h-6 text-[#10b981]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Project Intelligence
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Know when builders start new projects and what they'll need throughout each stage
              </p>
            </div>

            {/* Bottom-left card */}
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
                Get next-best offers tailored to general builders, developers, carpenters, bricklayers, plumbers, plasterers and landscapers
              </p>
            </div>

            {/* Bottom-right card */}
            <div
              className="absolute bottom-0 right-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-[#8b5cf6]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Branch Performance
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Compare wallet share across locations and identify best practices
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
            Track Wallet Share Across All Building Supply Categories
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

      {/* Use Case Section */}
      <div className="py-24 bg-[#1e3a8a]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#ffffff'
            }}
          >
            Real Results from Builders' Merchants
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ fontSize: '24px', color: '#f59e0b' }}>★</span>
                  ))}
                </div>
                <p
                  className="mb-6"
                  style={{
                    fontSize: '18px',
                    color: '#374151',
                    lineHeight: '1.6',
                    fontStyle: 'italic'
                  }}
                >
                  "We discovered that our top 50 builders were spending £2.3M annually on timber and bricks and blocks supplies elsewhere. Within 6 months, we've captured 30% of that spend."
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>JM</span>
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                    James Morrison
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    Sales Director, Morrison Building Supplies
                  </div>
                </div>
              </div>

              <div
                className="mt-6 inline-block px-4 py-2 rounded-lg"
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  backgroundColor: '#10b98120',
                  color: '#10b981'
                }}
              >
                £690K new revenue
              </div>
            </div>

            {/* Right: Results Metrics */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#10b981', marginBottom: '8px' }}>
                  31%
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  Wallet share increase in first year
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                  £1.2M
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  In identified opportunities
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#f59e0b', marginBottom: '8px' }}>
                  8
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  New product categories introduced
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Merchant-Specific Features */}
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
            Built Specifically for Builders' Merchants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: 'Multi-Branch Management',
                description: 'Compare performance across locations'
              },
              {
                icon: Wrench,
                title: 'Trade Account Insights',
                description: 'Understand builder vs. groundworker vs. developer needs'
              },
              {
                icon: HardHat,
                title: 'Project Tracking',
                description: 'From groundworks to completion'
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
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#1e3a8a'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      lineHeight: '1.5'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Integration Callout */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
            {['Kerridge', 'Intact', 'Civica',].map((system, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg px-8 py-4 shadow-md"
              >
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#6b7280' }}>
                  {system}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: '16px',
              color: '#6b7280'
            }}
          >
            Seamlessly integrates with your existing merchant management system
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e293b'
            }}
          >
            Ready to grow your builders' merchant business?
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: '18px',
              color: '#6b7280'
            }}
          >
            See how other merchants are using share of wallet to increase revenue from existing customers
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-all shadow-lg hover:shadow-xl"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 32px'
              }}
            >
              Book a Merchant Demo
            </button>
            <button
              className="bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 32px'
              }}
            >
              Download Merchant Case Study
            </button>
          </div>

          <p
            className="mt-8"
            style={{
              fontSize: '14px',
              color: '#6b7280'
            }}
          >
            Join <span style={{ fontWeight: '600', color: '#1e3a8a' }}>5+ builders' merchants</span> already using our platform
          </p>
        </div>
      </div>
    </div>
  );
}