import { Bell, TrendingUp, AlertCircle, Smartphone } from 'lucide-react';

export function OpportunityAlertMockup() {
  return (
    <div className="w-full space-y-3">
      {/* Top Alert - Amber Warning */}
      <div className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-xl p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="bg-white bg-opacity-20 p-2 rounded-lg backdrop-blur-sm">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Opportunity Alert
              </span>
              <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.9)' }}>
                Just now
              </span>
            </div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>
              ABC Builders bought Cement from competitor
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px' }}>
              Cement - Category not in their last 3 orders
            </div>
            <div className="bg-white bg-opacity-25 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-flex items-center gap-2">
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff' }}>
                £12.4K
              </span>
              <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.9)' }}>
                opportunity value
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop + Mobile Notifications */}
      <div className="grid grid-cols-2 gap-3">
        {/* Mobile notification card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-3 shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <Smartphone className="w-4 h-4 text-white" />
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Mobile Push
            </span>
          </div>
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <div className="flex items-start gap-2">
              <div className="bg-[#10b981] bg-opacity-10 p-1.5 rounded">
                <TrendingUp className="w-3 h-3 text-[#10b981]" />
              </div>
              <div className="flex-1">
                <div style={{ fontSize: '9px', fontWeight: '600', color: '#1e3a8a' }}>
                  Project Intelligence
                </div>
                <div style={{ fontSize: '8px', color: '#6b7280', marginTop: '2px' }}>
                  Big John Groundworks: New site
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop notification card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-[#3b82f6] bg-opacity-10 p-1.5 rounded">
              <Bell className="w-4 h-4 text-[#3b82f6]" />
            </div>
            <span style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Desktop Alert
            </span>
          </div>
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#1e3a8a', marginBottom: '4px' }}>
            Next Best Offer
          </div>
          <div style={{ fontSize: '9px', color: '#6b7280', marginBottom: '6px' }}>
            DPC and Aggregates
          </div>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '8px', color: '#6b7280' }}>
              Match
            </span>
            <div className="flex items-center gap-1">
              <div className="w-12 bg-gray-100 rounded-full h-1">
                <div className="w-[85%] h-full bg-[#10b981] rounded-full" />
              </div>
              <span style={{ fontSize: '8px', fontWeight: '600', color: '#10b981' }}>
                85%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
