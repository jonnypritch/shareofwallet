import { TrendingUp, ArrowUp } from 'lucide-react';

export function CustomerPriorityMockup() {
  const customers = [
    { name: "Premier Plumbers Ltd", score: 94, growth: "High", profit: "High", opportunity: "£7.2K", propensity: 89 },
    { name: "ABC Builders", score: 88, growth: "High", profit: "Medium", opportunity: "£4.8K", propensity: 76 },
    { name: "Sparky & Co", score: 82, growth: "Medium", profit: "High", opportunity: "£2.5K", propensity: 81 },
    { name: "Gavin's Groundworks", score: 76, growth: "Medium", profit: "Medium", opportunity: "£1.3K", propensity: 68 },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return '#10b981';
    if (score >= 70) return '#3b82f6';
    return '#6b7280';
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#f9fafb] to-white rounded-lg shadow-sm border border-gray-200 p-4">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
            High-Priority Accounts
          </h4>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-[#10b981]" />
            <span style={{ fontSize: '11px', fontWeight: '600', color: '#10b981' }}>
              Sorted by opportunity
            </span>
          </div>
        </div>
        <p style={{ fontSize: '11px', color: '#6b7280' }}>
          Top accounts ranked by growth potential
        </p>
      </div>

      {/* Customer list */}
      <div className="space-y-2">
        {customers.map((customer, idx) => (
          <div key={idx} className="bg-white rounded-lg p-3 border border-gray-100 hover:border-[#3b82f6] transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#374151' }}>
                    {customer.name}
                  </span>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${getScoreColor(customer.score)}20` }}
                  >
                    <span style={{ fontSize: '11px', fontWeight: '700', color: getScoreColor(customer.score) }}>
                      {customer.score}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span style={{ fontSize: '10px', color: '#6b7280' }}>
                      Growth: {customer.growth}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                    <span style={{ fontSize: '10px', color: '#6b7280' }}>
                      Profit: {customer.profit}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e3a8a' }}>
                  {customer.opportunity}
                </div>
                <div style={{ fontSize: '10px', color: '#6b7280' }}>
                  opportunity
                </div>
              </div>
            </div>

            {/* Propensity bar */}
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '9px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Propensity
              </span>
              <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="h-full bg-[#3b82f6] rounded-full"
                  style={{ width: `${customer.propensity}%` }}
                />
              </div>
              <span style={{ fontSize: '10px', fontWeight: '600', color: '#3b82f6' }}>
                {customer.propensity}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
