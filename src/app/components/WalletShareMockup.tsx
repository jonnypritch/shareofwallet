export function WalletShareMockup() {
  const categories = [
    { name: "Electrical", current: 68, total: 92, opportunity: "£1k" },
    { name: "Plumbing Materials", current: 45, total: 78, opportunity: "£2K" },
    { name: "Bricks and Blocks", current: 82, total: 95, opportunity: "£8K" },
    { name: "Aggregates and Cement", current: 34, total: 88, opportunity: "£3K" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#f9fafb] to-white rounded-lg shadow-sm border border-gray-200 p-4">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
            Share of Wallet Calculator
          </h4>
          <div className="bg-[#10b981] bg-opacity-10 px-2 py-1 rounded-full">
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#edf7f4' }}>
              £14k Total Opportunity
            </span>
          </div>
        </div>
        <p style={{ fontSize: '11px', color: '#6b7280' }}>
          Customer: Total Builders Ltd
        </p>
      </div>

      {/* Categories list */}
      <div className="space-y-3">
        {categories.map((category, idx) => (
          <div key={idx} className="bg-white rounded-lg p-3 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#374151' }}>
                {category.name}
              </span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#f59e0b' }}>
                {category.opportunity}
              </span>
            </div>
            
            {/* Progress bars */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-full bg-[#3b82f6] rounded-full"
                    style={{ width: `${category.current}%` }}
                  />
                </div>
                <span style={{ fontSize: '10px', color: '#6b7280', minWidth: '40px' }}>
                  {category.current}% now
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-full bg-[#10b981] rounded-full"
                    style={{ width: `${category.total}%` }}
                  />
                </div>
                <span style={{ fontSize: '10px', color: '#10b981', minWidth: '40px' }}>
                  {category.total}% potential
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
