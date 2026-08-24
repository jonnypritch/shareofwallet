import { ShoppingCart, TrendingDown, Clock, Building2, Utensils, ChefHat, Zap } from 'lucide-react';
import { CategoryDashboardMockup } from '../components/CategoryDashboardMockup';

const foodserviceCustomers = [
  {
    name: 'The Old Mill Bistro',
    trade: 'Restaurant',
    categories: [
      { name: 'Produce & Accompaniments', percent: 68, status: 'strong' as const },
      { name: 'Meat & Poultry', percent: 21, status: 'risk' as const },
      { name: 'Drinks, Snacks & Confectionery', percent: 14, status: 'elsewhere' as const },
    ]
  },
  {
    name: 'Riverside Care Home',
    trade: 'Care Home',
    categories: [
      { name: 'Everyday Essentials', percent: 74, status: 'strong' as const },
      { name: 'Meal Solutions', percent: 19, status: 'elsewhere' as const },
      { name: 'Catering Supplies', percent: 26, status: 'risk' as const },
    ]
  },
  {
    name: 'Corner Café',
    trade: 'Café',
    categories: [
      { name: 'Bakery', percent: 55, status: 'strong' as const },
      { name: 'Dairy', percent: 24, status: 'risk' as const },
      { name: 'Drinks, Snacks & Confectionery', percent: 17, status: 'elsewhere' as const },
    ]
  },
];

const foodserviceFloatingCards = {
  categoryOpportunity: {
    amount: '£3K',
    category: 'Meat & Poultry'
  },
  buyingElsewhereAlert: {
    category: 'Fish & Seafood',
    likelihood: 71
  },
  orderReduction: {
    category: 'Bakery',
    percent: 35
  },
  recommendation: {
    suggestion: 'Offer seasonal menu bundle'
  }
};

export function FoodserviceWholesalePage() {
  // Category taxonomy based on a real foodservice wholesaler's product
  // range (Elite Fine Foods), rather than an invented list.
  const categories = [
    { name: 'Bakery', share: 28, status: 'opportunity', icon: '🍞' },
    { name: 'Catering Supplies', share: 36, status: 'growing', icon: '🍽️' },
    { name: 'Dairy', share: 58, status: 'strong', icon: '🧀' },
    { name: 'Delicatessen', share: 24, status: 'opportunity', icon: '🧈' },
    { name: 'Desserts', share: 31, status: 'growing', icon: '🍰' },
    { name: 'Drinks, Snacks & Confectionery', share: 47, status: 'growing', icon: '🥤' },
    { name: 'Everyday Essentials', share: 62, status: 'strong', icon: '🥫' },
    { name: 'Fish & Seafood', share: 14, status: 'opportunity', icon: '🐟' },
    { name: 'Meal Solutions', share: 33, status: 'growing', icon: '🍱' },
    { name: 'Meat & Poultry', share: 19, status: 'opportunity', icon: '🍗' },
    { name: 'Produce & Accompaniments', share: 41, status: 'growing', icon: '🥬' },
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
            Solutions {' > '} Foodservice Wholesale
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
            Grow Your Foodservice Wholesale Business with Data-Driven Insights
          </h1>

          <p
            className="max-w-[800px] mx-auto mb-10"
            style={{
              fontSize: '22px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.4'
            }}
          >
            Help caterers, restaurants, and food businesses get everything their kitchen needs, while you grow your wallet share
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
            See Foodservice Solution
          </a>

          {/* Capability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              'Multi-depot delivery visibility',
              'Menu-driven category insights',
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
            The Challenge Facing Foodservice Wholesalers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <ShoppingCart className="w-8 h-8 text-[#ef4444]" />
              </div>
              <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b' }}>
                Customers Split Their Food Spend
              </h3>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6' }}>
                Your regular kitchens buy ambient and dry goods from you, but source fresh produce, meat, or fish elsewhere on the same delivery run.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <TrendingDown className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b' }}>
                Limited Account Visibility
              </h3>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6' }}>
                Your reps manage a wide customer base but have no easy way to see which kitchens represent the biggest growth opportunities.
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
                Pulling reports, checking order patterns, and trying to spot gaps takes hours away from actual selling time.
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
            How Share of Wallet Works for Foodservice Wholesale
          </h2>

          <div className="relative flex items-center justify-center min-h-[600px]">
            <div className="z-10">
              <CategoryDashboardMockup customers={foodserviceCustomers} floatingCards={foodserviceFloatingCards} />
            </div>

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
                See which food, drink, and consumable categories your customers buy from competitors
              </p>
            </div>

            <div
              className="absolute top-0 right-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <ChefHat className="w-6 h-6 text-[#10b981]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Menu Intelligence
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Know when a customer changes their menu or opens a new site, and what they'll need
              </p>
            </div>

            <div
              className="absolute bottom-0 left-0 bg-white rounded-xl shadow-xl p-6 max-w-[280px]"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Utensils className="w-6 h-6 text-[#f59e0b]" />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                  Trade-Specific Recommendations
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Get next-best offers tailored to restaurants, cafes, care homes, schools and hotels
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
            Track Wallet Share Across All Food & Catering Categories
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
            Built Specifically for Foodservice Wholesale
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: 'Multi-Depot Management',
                description: 'Compare performance across delivery depots'
              },
              {
                icon: Utensils,
                title: 'Trade Account Insights',
                description: 'Understand restaurant vs. care home vs. education needs'
              },
              {
                icon: ChefHat,
                title: 'Menu & Seasonal Tracking',
                description: 'From menu changes to seasonal demand shifts'
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
            Ready to grow your foodservice wholesale business?
          </h2>
          <p className="mb-10" style={{ fontSize: '18px', color: '#6b7280' }}>
            See how other foodservice wholesalers are using share of wallet to increase revenue from existing customers
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
              Book a Foodservice Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
