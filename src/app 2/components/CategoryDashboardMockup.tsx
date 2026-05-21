import { AlertTriangle, TrendingUp, Lightbulb, AlertCircle } from 'lucide-react';

interface Category {
  name: string;
  percent: number;
  status: 'strong' | 'risk' | 'elsewhere';
}

interface Customer {
  name: string;
  trade: string;
  categories: Category[];
}

interface FloatingCard {
  categoryOpportunity: {
    amount: string;
    category: string;
  };
  buyingElsewhereAlert: {
    category: string;
    likelihood: number;
  };
  orderReduction: {
    category: string;
    percent: number;
  };
  recommendation: {
    suggestion: string;
  };
}

interface CategoryDashboardMockupProps {
  customers?: Customer[];
  floatingCards?: FloatingCard;
}

export function CategoryDashboardMockup({ 
  customers: customersData,
  floatingCards
}: CategoryDashboardMockupProps = {}) {
  const defaultCustomers = [
    { 
      name: "Bob Builders Ltd", 
      trade: "General Builder",
      categories: [
        { name: "Timber & Sheet Materials", percent: 65, status: "strong" as const },
        { name: "Bricks & Blocks", percent: 20, status: "risk" as const },
        { name: "Cement", percent: 15, status: "elsewhere" as const },
      ]
    },
    { 
      name: "Ryan Electrical Co", 
      trade: "Electrician",
      categories: [
        { name: "Wiring Accessories", percent: 78, status: "strong" as const },
        { name: "Cable & Cable Management", percent: 12, status: "elsewhere" as const },
        { name: "Power Distribution", percent: 10, status: "risk" as const },
      ]
    },
    { 
      name: "Plumb & Sink Maintenance", 
      trade: "Plumber",
      categories: [
        { name: "Brassware", percent: 45, status: "risk" as const },
        { name: "Sanitaryware", percent: 30, status: "strong" as const },
        { name: "Electrical", percent: 25, status: "elsewhere" as const },
      ]
    },
  ];

  const defaultFloatingCards = {
    categoryOpportunity: {
      amount: "£4K",
      category: "Aggregates & Cement"
    },
    buyingElsewhereAlert: {
      category: "Plumbing",
      likelihood: 73
    },
    orderReduction: {
      category: "Timber",
      percent: 40
    },
    recommendation: {
      suggestion: "Offer Insulation range"
    }
  };

  const customers = customersData || defaultCustomers;
  const cards = floatingCards || defaultFloatingCards;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'strong': return '#10b981';
      case 'risk': return '#f59e0b';
      case 'elsewhere': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'strong': return 'Strong';
      case 'risk': return 'At Risk';
      case 'elsewhere': return 'Buying Elsewhere';
      default: return '';
    }
  };

  const getTradeColor = (trade: string) => {
    if (trade.includes('Electrician')) return '#3b82f6';
    if (trade.includes('Plumber')) return '#8b5cf6';
    return '#6b7280';
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main dashboard mockup with 3D tilt */}
      <div 
        className="relative w-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ 
          transform: 'perspective(1200px) rotateY(-15deg) rotateX(5deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Dashboard header */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] px-6 py-4">
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>
            Share of Wallet Analysis
          </h3>
          <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
            Each Customer by category
          </p>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Customer list with category breakdowns */}
          <div className="space-y-4">
            {customers.map((customer, idx) => (
              <div key={idx} className="bg-[#f9fafb] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
                    {customer.name}
                  </div>
                  <div 
                    className="px-2 py-1 rounded-full"
                    style={{ 
                      fontSize: '10px', 
                      fontWeight: '600',
                      backgroundColor: `${getTradeColor(customer.trade)}20`,
                      color: getTradeColor(customer.trade)
                    }}
                  >
                    {customer.trade}
                  </div>
                </div>
                
                {/* Category breakdown bars */}
                <div className="space-y-2">
                  {customer.categories.map((category, catIdx) => (
                    <div key={catIdx}>
                      <div className="flex items-center justify-between mb-1">
                        <div style={{ fontSize: '11px', color: '#374151' }}>
                          {category.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <div style={{ fontSize: '11px', fontWeight: '600', color: '#374151' }}>
                            {category.percent}%
                          </div>
                          <div 
                            className="px-1.5 py-0.5 rounded"
                            style={{ 
                              fontSize: '9px', 
                              fontWeight: '600',
                              backgroundColor: `${getStatusColor(category.status)}20`,
                              color: getStatusColor(category.status)
                            }}
                          >
                            {getStatusLabel(category.status)}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${category.percent}%`,
                            backgroundColor: getStatusColor(category.status)
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating data card 1 - Top right - Category Opportunity */}
      <div 
        className="absolute top-8 right-0 bg-white rounded-xl shadow-xl overflow-hidden"
        style={{
          width: '220px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transform: 'translateZ(40px)'
        }}
      >
        <div className="bg-gradient-to-br from-[#10b981] to-[#059669] p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-white" />
            <span style={{ fontSize: '11px', fontWeight: '600', color: '#ffffff' }}>
              CATEGORY OPPORTUNITY
            </span>
          </div>
          <div style={{ fontSize: '26px', fontWeight: '700', color: '#ffffff' }}>
            {cards.categoryOpportunity.amount}
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.95)', marginTop: '4px' }}>
            in {cards.categoryOpportunity.category}
          </div>
        </div>
      </div>

      {/* Floating data card 2 - Middle left - Buying Elsewhere Alert */}
      <div 
        className="absolute top-1/2 left-0 bg-white rounded-xl shadow-xl p-4"
        style={{
          width: '230px',
          transform: 'translateY(-50%) translateZ(30px)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-4 h-4 text-[#ef4444]" />
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ALERT
          </span>
        </div>
        <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a8a', marginBottom: '6px' }}>
          Customer buying {cards.buyingElsewhereAlert.category} elsewhere
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-[#f9fafb] rounded-full h-1.5">
            <div className="bg-[#ef4444] h-full rounded-full" style={{ width: `${cards.buyingElsewhereAlert.likelihood}%` }} />
          </div>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#ef4444' }}>
            {cards.buyingElsewhereAlert.likelihood}% likely
          </span>
        </div>
      </div>

      {/* Floating data card 3 - Bottom left - Order Reduction Alert */}
      <div 
        className="absolute bottom-16 left-4 bg-white rounded-xl shadow-xl p-4"
        style={{
          width: '240px',
          transform: 'translateZ(35px)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ALERT
          </span>
        </div>
        <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a8a', marginBottom: '4px' }}>
          Order size reduced in {cards.orderReduction.category}
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="px-3 py-1.5 rounded-lg"
            style={{ 
              fontSize: '18px', 
              fontWeight: '700',
              backgroundColor: '#fef3c7',
              color: '#f59e0b'
            }}
          >
            -{cards.orderReduction.percent}%
          </div>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>
            vs. last month
          </span>
        </div>
      </div>

      {/* Floating data card 4 - Bottom right - Recommendation */}
      <div 
        className="absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-4"
        style={{
          width: '230px',
          transform: 'translateZ(38px)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="w-4 h-4 text-[#3b82f6]" />
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            RECOMMENDATION
          </span>
        </div>
        <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a8a', marginBottom: '4px' }}>
          {cards.recommendation.suggestion}
        </div>
        <div style={{ fontSize: '11px', color: '#6b7280', lineHeight: '1.4' }}>
          Based on project type and trade patterns
        </div>
      </div>
    </div>
  );
}
