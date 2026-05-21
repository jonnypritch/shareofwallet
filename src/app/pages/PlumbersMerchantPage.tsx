import { ShoppingCart, TrendingDown, Clock, Building2, Wrench, Droplet, Thermometer } from 'lucide-react';
import { CategoryDashboardMockup } from '../components/CategoryDashboardMockup';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function PlumbersMerchantPage() {
  const categories = [
    { name: 'Boilers', share: 58, status: 'strong', icon: '🔥' },
    { name: 'Water Heating', share: 52, status: 'strong', icon: '💧' },
    { name: 'Controls', share: 31, status: 'growing', icon: '🎛️' },
    { name: 'Pumps', share: 44, status: 'growing', icon: '⚙️' },
    { name: 'PVF (Pipes, Valves, Fittings)', share: 64, status: 'strong', icon: '🔧' },
    { name: 'Radiators', share: 48, status: 'growing', icon: '🌡️' },
    { name: 'Plumbing Supplies', share: 71, status: 'strong', icon: '✨' },
    { name: 'Brassware', share: 28, status: 'opportunity', icon: '🚰' },
    { name: 'Sanitaryware', share: 19, status: 'opportunity', icon: '🛁' },
    { name: 'Showers', share: 24, status: 'opportunity', icon: '🚿' },
    { name: 'Parts & Spares', share: 56, status: 'strong', icon: '🔩' },
    { name: 'Commercial Heating', share: 35, status: 'growing', icon: '🏢' },
    { name: 'Drainage', share: 41, status: 'growing', icon: '⬇️' },
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
            src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Plumbing supplies warehouse"
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
            Solutions {' > '} Plumbers' Merchants
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
            Grow Your Plumbers' Merchant Business with Share of Wallet Intelligence
          </h1>
          
          <p
            className="max-w-[800px] mx-auto mb-10"
            style={{
              fontSize: '22px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.4'
            }}
          >
            Help plumbers and heating engineers complete their installations while you capture more of their heating and plumbing spend
          </p>

          <button
            className="bg-white text-[#1e3a8a] rounded-lg hover:shadow-xl transition-all mb-12"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              padding: '16px 40px'
            }}
          >
            See Plumbing Solution
          </button>

          {/* Industry Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              'Average 10% wallet growth',
              '13+ plumbing categories tracked',
              'Installer-centric insights'
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
            The Challenge Facing Plumbers' Merchants
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
                Plumbers Split Their Spend
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                Your heating customers buy boilers and controls from you, but purchase pvf, copper tube, and water treatment from other specialists. You're also losing any UFH revenue.
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
                Missing High-Margin Categories
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                Sanitaryware, showers, and brassware offer better margins, but you don't know which plumbers are doing bathroom installations vs. maintenance or distress work.
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
                No Installation Phase Tracking
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}
              >
                You can't see whether customers are doing new builds, bathroom refits, or boiler replacements, making targeted offers impossible.
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
            How Share of Wallet Works for Plumbers' Merchants
          </h2>

          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Central Dashboard */}
            <div className="z-10">
              <CategoryDashboardMockup 
                customers={[
                  { 
                    name: "HeatMaster Plumbing", 
                    trade: "Heating Engineer",
                    categories: [
                      { name: "Boilers & Controls", percent: 72, status: "strong" },
                      { name: "PVF", percent: 15, status: "elsewhere" },
                      { name: "Radiators", percent: 13, status: "risk" },
                    ]
                  },
                  { 
                    name: "Premium Bathrooms Ltd", 
                    trade: "Bathroom Fitter",
                    categories: [
                      { name: "Brassware", percent: 68, status: "strong" },
                      { name: "Showers", percent: 12, status: "elsewhere" },
                      { name: "PVF (Pipes, Valves)", percent: 20, status: "risk" },
                    ]
                  },
                  { 
                    name: "QuickFix Maintenance", 
                    trade: "Plumber",
                    categories: [
                      { name: "Plumbing Supplies", percent: 58, status: "strong" },
                      { name: "Parts & Spares", percent: 25, status: "risk" },
                      { name: "Water Heating", percent: 17, status: "elsewhere" },
                    ]
                  },
                ]}
                floatingCards={{
                  categoryOpportunity: {
                    amount: "£6.5K",
                    category: "Sanitaryware & Brassware"
                  },
                  buyingElsewhereAlert: {
                    category: "Showers",
                    likelihood: 78
                  },
                  orderReduction: {
                    category: "Boilers",
                    percent: 35
                  },
                  recommendation: {
                    suggestion: "Expand bathroom range"
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
                <Droplet className="w-6 h-6 text-[#3b82f6]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Category Opportunity Mapping
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Identify which plumbing and heating categories each customer buys elsewhere
              </p>
            </div>

            {/* Top-right card */}
            <div
              className="absolute top-0 right-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Thermometer className="w-6 h-6 text-[#10b981]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Installation Type Detection
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Know if customers are doing bathroom refits, boiler replacements, or new builds
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
                  Plumber-Specific Offers
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Tailored recommendations for heating engineers, bathroom fitters, and maintenance plumbers
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
                  Branch Performance
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Compare plumbing category sales across your branch locations
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
            Track Wallet Share Across All Plumbing & Heating Categories
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
            Real Results from Plumbers' Merchants
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
                  "We discovered our heating engineers were spending £1.5M annually on sanitaryware and brassware at bathroom showrooms. By targeting plumbers doing bathroom work, we've captured £420K of that spend in the first year."
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>MR</span>
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                    Michael Roberts
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    Managing Director, HeatFlow Plumbing Supplies
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
                £420K new revenue
              </div>
            </div>

            {/* Right: Results Metrics */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#10b981', marginBottom: '8px' }}>
                  26%
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  Wallet share increase in first year
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                  £1.5M
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  In bathroom category opportunities
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#f59e0b', marginBottom: '8px' }}>
                  5
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e3a8a' }}>
                  New high-margin categories introduced
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
            Built Specifically for Plumbers' Merchants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: 'Multi-Branch Management',
                description: 'Track plumbing sales across all branch locations'
              },
              {
                icon: Droplet,
                title: 'Installation Type Insights',
                description: 'Bathroom refit, boiler replacement, distress purchases or new build'
              },
              {
                icon: Thermometer,
                title: 'Heating vs. Plumbing Split',
                description: 'See which customers focus on heating vs. plumbing work, what are you missing out on?'
              },
              {
                icon: Wrench,
                title: 'Manufacturer Partnerships',
                description: 'Share insights for better support with boiler and bathroom brands'
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
            {['Kerridge', 'Eclipse', 'Civica', 'SAP'].map((system, idx) => (
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
            Seamlessly integrates with your existing plumbing merchant systems
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
            Ready to grow your plumbers' merchant business?
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: '18px',
              color: '#6b7280'
            }}
          >
            See how plumbers' merchants are winning bathroom and heating categories
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
              Book a Plumbing Demo
            </button>
            <button
              className="bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 32px'
              }}
            >
              Download Plumbing Case Study
            </button>
          </div>

          <p
            className="mt-8"
            style={{
              fontSize: '14px',
              color: '#6b7280'
            }}
          >
            Join <span style={{ fontWeight: '600', color: '#1e3a8a' }}>35+ plumbers' merchants</span> already using our platform
          </p>
        </div>
      </div>
    </div>
  );
}
