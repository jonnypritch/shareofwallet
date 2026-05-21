import { TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

export function DashboardMockup() {
  const customers = [
    { name: "Bob Builders Ltd", current: 34, potential: 68, status: "high", opportunity: "£12.4K" },
    { name: "Ryan Electrical Co", current: 56, potential: 78, status: "medium", opportunity: "£8.2K" },
    { name: "Plumb & Sink Maintenance", current: 23, potential: 89, status: "high", opportunity: "£18.7K" },
    { name: "The Jolly Sparky", current: 67, potential: 82, status: "low", opportunity: "£4.1K" },
    { name: "Turner's Landscapes", current: 45, potential: 91, status: "high", opportunity: "£15.3K" },
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
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main dashboard mockup with 3D tilt */}
      <div 
        className="relative w-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden"
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
            Customer spend optimisation
          </p>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Summary metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-[#f9fafb] rounded-lg p-3">
              <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
                Avg. Wallet Share
              </div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#1e3a8a' }}>
                45%
              </div>
            </div>
            <div className="bg-[#f9fafb] rounded-lg p-3">
              <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
                Total Opportunity
              </div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#10b981' }}>
                £58.7K
              </div>
            </div>
            <div className="bg-[#f9fafb] rounded-lg p-3">
              <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
                Growth Potential
              </div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#3b82f6' }}>
                +34%
              </div>
            </div>
          </div>

          {/* Customer list */}
          <div className="space-y-3">
            {customers.map((customer, idx) => (
              <div key={idx} className="bg-[#f9fafb] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a8a' }}>
                    {customer.name}
                  </div>
                  <div 
                    className="px-2 py-1 rounded-full"
                    style={{ 
                      fontSize: '10px', 
                      fontWeight: '600',
                      backgroundColor: `${getStatusColor(customer.status)}20`,
                      color: getStatusColor(customer.status)
                    }}
                  >
                    {customer.opportunity}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: `${customer.current}%`,
                        backgroundColor: getStatusColor(customer.status)
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#374151', minWidth: '35px' }}>
                    {customer.current}%
                  </div>
                </div>
                <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '4px' }}>
                  Potential: {customer.potential}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating data card 1 - Top right */}
      <div 
        className="absolute top-12 right-0 bg-white rounded-xl shadow-lg overflow-hidden"
        style={{
          width: '200px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transform: 'translateZ(40px)'
        }}
      >
        <div className="bg-gradient-to-br from-[#10b981] to-[#059669] p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-white" />
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#ffffff' }}>
              Opportunity Identified
            </span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#ffffff' }}>
            £47K
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.9)', marginTop: '4px' }}>
            Across 23 customers
          </div>
        </div>
      </div>

      {/* Floating data card 2 - Middle left */}
      <div 
        className="absolute top-1/2 left-0 bg-white rounded-xl shadow-lg p-4"
        style={{
          width: '220px',
          transform: 'translateY(-50%) translateZ(30px)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-[#3b82f6] bg-opacity-10 p-2 rounded-lg">
            <Target className="w-5 h-5 text-[#3b82f6]" />
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e3a8a' }}>
              23%
            </div>
            <div style={{ fontSize: '11px', color: '#6b7280' }}>
              Wallet Share Increase
            </div>
          </div>
        </div>
      </div>

      {/* Floating data card 3 - Bottom right */}
      <div 
        className="absolute bottom-8 right-12 bg-white rounded-xl shadow-lg p-4"
        style={{
          width: '240px',
          transform: 'translateZ(35px)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-[#f59e0b]" />
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Next Best Offer
          </span>
        </div>
        <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a', marginBottom: '4px' }}>
          Electrical Cable
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-[#f9fafb] rounded-full h-1.5">
            <div className="bg-[#10b981] h-full rounded-full" style={{ width: '78%' }} />
          </div>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#10b981' }}>
            78% match
          </span>
        </div>
      </div>
    </div>
  );
}
