import { ShoppingCart, TrendingDown, Clock, Building2, Wrench, Zap, Cable } from 'lucide-react';
import { CategoryDashboardMockup } from '../components/CategoryDashboardMockup';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ElectricalWholesalePage() {
  const categories = [
    { name: 'Cable and Cable Management', share: 68, status: 'strong', icon: '🔌' },
    { name: 'Smart Home & Automation', share: 15, status: 'opportunity', icon: '🏡' },
    { name: 'Lighting', share: 54, status: 'strong', icon: '💡' },
    { name: 'Wiring Accessories', share: 47, status: 'growing', icon: '🔧' },
    { name: 'EV Charging', share: 12, status: 'opportunity', icon: '⚡' },
    { name: 'Industrial Equipment', share: 38, status: 'growing', icon: '🏭' },
    { name: 'Consumer Units', share: 61, status: 'strong', icon: '📦' },
    { name: 'Controls & Switches', share: 43, status: 'growing', icon: '🎛️' },
    { name: 'Ventilation & Cooling', share: 22, status: 'opportunity', icon: '🌀' },
    { name: 'Test Equipment', share: 35, status: 'growing', icon: '📊' },
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
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Electrical wholesale warehouse"
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
            Solutions {' > '} Electrical Wholesale
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
            Grow Your Electrical Wholesale Business with Smart Analytics
          </h1>
          
          <p
            className="max-w-[800px] mx-auto mb-10"
            style={{
              fontSize: '22px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.4'
            }}
          >
            Help electricians and contractors complete their projects while you capture more of their electrical spend
          </p>

          <button
            className="bg-white text-[#1e3a8a] rounded-lg hover:shadow-xl transition-all mb-12"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              padding: '16px 40px'
            }}
          >
            See Electrical Solution
          </button>

          {/* Industry Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              'Average 28% wallet growth',
              '10+ electrical categories tracked',
              'Project-aware recommendations'
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
            The Challenge Facing Electrical Wholesalers
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
                Electricians Buy Across Multiple Suppliers
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                Your customers buy cable from you, but purchase lighting, smart home tech, and EV charging equipment from competitors. You're missing significant category opportunities.
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
                Missing Fast-Growing Categories
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                Smart home automation and EV charging might be booming, but you don't know which customers need these products for their current projects.
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
                No Project Visibility
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                You don't know what electrical projects your customers are working on, making it impossible to suggest the right products at the right time.
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
            How Share of Wallet Works for Electrical Wholesalers
          </h2>

          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Central Dashboard */}
            <div className="z-10">
              <CategoryDashboardMockup 
                customers={[
                  { 
                    name: "Bright Spark Electrical", 
                    trade: "Domestic Electrician",
                    categories: [
                      { name: "Cable & Accessories", percent: 75, status: "strong" },
                      { name: "Smart Home Tech", percent: 10, status: "elsewhere" },
                      { name: "Lighting", percent: 15, status: "risk" },
                    ]
                  },
                  { 
                    name: "Industrial Power Solutions", 
                    trade: "Commercial Electrician",
                    categories: [
                      { name: "Consumer Units", percent: 62, status: "strong" },
                      { name: "EV Charging", percent: 18, status: "elsewhere" },
                      { name: "Controls & Switches", percent: 20, status: "risk" },
                    ]
                  },
                  { 
                    name: "HomeAutomation Pro", 
                    trade: "Smart Home Installer",
                    categories: [
                      { name: "Wiring Accessories", percent: 45, status: "risk" },
                      { name: "Smart Home & Automation", percent: 38, status: "strong" },
                      { name: "Lighting", percent: 17, status: "elsewhere" },
                    ]
                  },
                ]}
                floatingCards={{
                  categoryOpportunity: {
                    amount: "£8.2K",
                    category: "Smart Home & EV Charging"
                  },
                  buyingElsewhereAlert: {
                    category: "Smart Home Tech",
                    likelihood: 82
                  },
                  orderReduction: {
                    category: "Cable",
                    percent: 28
                  },
                  recommendation: {
                    suggestion: "Stock EV charging units"
                  }
                }}
              />
            </div>

            {/* Floating Callout Cards */}
            {/* Top-left card */}
            <div
              className="absolute top-0 left-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Cable className="w-6 h-6 text-[#3b82f6]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Category Gap Analysis
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                See which electrical categories your customers buy elsewhere - from Automation to EV charging
              </p>
            </div>

            {/* Top-right card */}
            <div
              className="absolute top-0 right-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-[#10b981]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Project-Based Insights
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Know what electrical work your customers are doing and suggest the right products for each project phase
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
                  Electrician-Specific Offers
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Automated recommendations for domestic, commercial, and industrial electricians or a mix by project
              </p>
            </div>

            {/* Bottom-right card */}
            <div
              className="absolute bottom-0 right-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-[#8b5cf6]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Branch Comparison
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Compare electrical category performance across your branch network
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
            Track Wallet Share Across All Electrical Categories
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
            Real Results from Electrical Wholesalers
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
                  "We identified £1.8M in smart home and EV charging opportunities across our electrician customer base. In 9 months, we've won 35% of that business by offering the right products at the right time."
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>ST</span>
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                    Sarah Thompson
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    Commercial Director, Voltage Electrical Supplies
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
                £630K new revenue
              </div>
            </div>

            {/* Right: Results Metrics */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#10b981', marginBottom: '8px' }}>
                  28%
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  Wallet share increase in first year
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                  £1.8M
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  In electrical category opportunities
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#f59e0b', marginBottom: '8px' }}>
                  6
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  New electrical categories launched
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
            Built Specifically for Electrical Wholesalers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: 'Multi-Branch Analytics',
                description: 'Track electrical sales across all locations'
              },
              {
                icon: Zap,
                title: 'Project Type Tracking',
                description: 'Domestic, commercial, or industrial electrical work'
              },
              {
                icon: Cable,
                title: 'Installation Phase Insights',
                description: 'First fix, second fix, and testing phases'
              },
              {
                icon: Wrench,
                title: 'Supplier Integration',
                description: 'Connect with electrical manufacturers for joint campaigns'
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
            {['Salesforce', 'SAP', 'Microsoft Dynamics', 'Eclipse'].map((system, idx) => (
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
            Seamlessly integrates with your existing electrical wholesale systems
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
            Ready to grow your electrical wholesale business?
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: '18px',
              color: '#6b7280'
            }}
          >
            See how electrical wholesalers are capturing more category spend from electricians
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
              Book an Electrical Demo
            </button>
            <button
              className="bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 32px'
              }}
            >
              Download Electrical Case Study
            </button>
          </div>

          <p
            className="mt-8"
            style={{
              fontSize: '14px',
              color: '#6b7280'
            }}
          >
            Join <span style={{ fontWeight: '600', color: '#1e3a8a' }}>40+ electrical wholesalers</span> already using our platform
          </p>
        </div>
      </div>
    </div>
  );
}
