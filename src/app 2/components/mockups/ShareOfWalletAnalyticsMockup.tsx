import { TrendingUp, BarChart3 } from 'lucide-react';

export function ShareOfWalletAnalyticsMockup() {
  const customers = [
    { name: "Bob Builders Ltd", wallet: 34, trend: "+5%", opportunity: "£12.4K", status: "high" },
    { name: "Ryan Electrical Co", wallet: 56, trend: "+12%", opportunity: "£8.2K", status: "medium" },
    { name: "Plumb & Sink Ltd", wallet: 23, trend: "-3%", opportunity: "£18.7K", status: "high" },
    { name: "The Jolly Sparky", wallet: 67, trend: "+8%", opportunity: "£4.1K", status: "low" },
    { name: "Turner's Landscapes", wallet: 45, trend: "+15%", opportunity: "£15.3K", status: "high" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'low': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="relative w-full max-w-[600px]">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>
                Share of Wallet Analysis
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
                Customer spend optimization
              </p>
            </div>
            <BarChart3 className="w-6 h-6 text-white opacity-80" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-[#f9fafb] rounded-lg p-3">
              <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
                Avg. Wallet Share
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e3a8a' }}>
                45%
              </div>
            </div>
            <div className="bg-[#f9fafb] rounded-lg p-3">
              <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
                Total Opportunity
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#10b981' }}>
                £58.7K
              </div>
            </div>
            <div className="bg-[#f9fafb] rounded-lg p-3">
              <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
                Growth Trend
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                +34%
              </div>
            </div>
          </div>

          {/* Customer Table */}
          <div className="space-y-3">
            {customers.map((customer, idx) => (
              <div key={idx} className="bg-[#f9fafb] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
                    {customer.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '600' }}>
                      {customer.trend}
                    </span>
                    <TrendingUp className="w-4 h-4 text-[#10b981]" />
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ fontSize: '11px', color: '#6b7280' }}>Wallet Share</span>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#374151' }}>{customer.wallet}%</span>
                    </div>
                    <div className="bg-white rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${customer.wallet}%`,
                          backgroundColor: getStatusColor(customer.status)
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-lg"
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      backgroundColor: `${getStatusColor(customer.status)}20`,
                      color: getStatusColor(customer.status)
                    }}
                  >
                    {customer.opportunity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Highlight Callout */}
      <div
        className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border-2 border-[#10b981]"
        style={{ width: '200px' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-[#10b981] rounded-full p-1">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#374151', textTransform: 'uppercase' }}>
            OPPORTUNITY
          </span>
        </div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#10b981' }}>
          £47,000
        </div>
        <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
          across top 5 customers
        </div>
      </div>
    </div>
  );
}
