import { Sparkles, Target } from 'lucide-react';

export function NextBestOffersMockup() {
  const recommendations = [
    {
      product: "Electrical Cable - Twin & Earth",
      customer: "Bob Builders Ltd",
      trade: "General Builder",
      confidence: 92,
      reason: "Starting new residential project",
      value: "£850"
    },
    {
      product: "Plumbing Fittings Pack",
      customer: "Ryan Electrical Co",
      trade: "Electrician",
      confidence: 78,
      reason: "Working with plumber on site",
      value: "£420"
    },
    {
      product: "Professional Hand Tools Set",
      customer: "Plumb & Sink Ltd",
      trade: "Plumber",
      confidence: 85,
      reason: "Buying tools category elsewhere",
      value: "£320"
    },
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return '#10b981';
    if (confidence >= 60) return '#f59e0b';
    return '#6b7280';
  };

  return (
    <div className="w-full max-w-[600px]">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] px-6 py-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-white" />
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff' }}>
              Next Best Offers
            </h3>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
            AI-powered recommendations
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#f9fafb] to-white rounded-xl p-5 border border-gray-200">
                {/* Customer & Trade */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
                      {rec.customer}
                    </div>
                    <div
                      className="inline-block px-2 py-1 rounded-full mt-1"
                      style={{
                        fontSize: '10px',
                        fontWeight: '600',
                        backgroundColor: '#3b82f620',
                        color: '#3b82f6'
                      }}
                    >
                      {rec.trade}
                    </div>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-lg"
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      backgroundColor: '#10b98120',
                      color: '#10b981'
                    }}
                  >
                    {rec.value}
                  </div>
                </div>

                {/* Product Recommendation */}
                <div className="bg-white rounded-lg p-4 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-[#3b82f6]" />
                    <span style={{ fontSize: '11px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                      RECOMMENDED
                    </span>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a' }}>
                    {rec.product}
                  </div>
                </div>

                {/* Confidence & Reason */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: '11px', color: '#6b7280' }}>Confidence:</span>
                    <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${rec.confidence}%`,
                          backgroundColor: getConfidenceColor(rec.confidence)
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: getConfidenceColor(rec.confidence) }}>
                      {rec.confidence}%
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280', fontStyle: 'italic' }}>
                    💡 {rec.reason}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              className="flex-1 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors"
              style={{ fontSize: '14px', padding: '12px 24px', fontWeight: '600' }}
            >
              Send All Offers
            </button>
            <button
              className="px-6 bg-white border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg hover:bg-blue-50 transition-colors"
              style={{ fontSize: '14px', padding: '12px 24px', fontWeight: '600' }}
            >
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
