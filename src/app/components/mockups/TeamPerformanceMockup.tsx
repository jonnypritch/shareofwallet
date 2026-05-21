import { Trophy, Target, TrendingUp, Award } from 'lucide-react';

export function TeamPerformanceMockup() {
  const performanceData = {
    name: "Sarah Mitchell",
    role: "Sales Representative",
    score: 87,
    rank: "2nd of 12",
    metrics: [
      { label: "Wallet Share Growth", value: "+18%", target: "+15%", status: "exceeding" },
      { label: "Offers Accepted", value: "23/30", target: "20/30", status: "exceeding" },
      { label: "Customer Engagement", value: "92%", target: "85%", status: "exceeding" },
    ]
  };

  const learningModules = [
    { title: "Category Cross-Selling", progress: 100, status: "complete" },
    { title: "Project Intelligence", progress: 65, status: "in-progress" },
    { title: "Content Personalization", progress: 0, status: "locked" },
  ];

  return (
    <div className="w-full max-w-[600px]">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#10b981] to-[#059669] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>
                {performanceData.name}
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
                {performanceData.role}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-white" />
              <div className="text-right">
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff' }}>
                  {performanceData.score}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)' }}>
                  {performanceData.rank}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-[#1e3a8a]" />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
                Performance Metrics
              </span>
            </div>
            <div className="space-y-3">
              {performanceData.metrics.map((metric, idx) => (
                <div key={idx} className="bg-[#f9fafb] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontSize: '13px', color: '#374151' }}>
                      {metric.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#10b981' }}>
                        {metric.value}
                      </span>
                      <TrendingUp className="w-4 h-4 text-[#10b981]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#10b981]"
                        style={{ width: '90%' }}
                      />
                    </div>
                    <span style={{ fontSize: '11px', color: '#6b7280' }}>
                      Target: {metric.target}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning & Development */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#3b82f6]" />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
                Learning & Development
              </span>
            </div>
            <div className="space-y-3">
              {learningModules.map((module, idx) => (
                <div key={idx} className="bg-[#f9fafb] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontSize: '13px', color: '#374151' }}>
                      {module.title}
                    </span>
                    {module.status === 'complete' && (
                      <div
                        className="px-2 py-1 rounded-full"
                        style={{
                          fontSize: '10px',
                          fontWeight: '600',
                          backgroundColor: '#10b98120',
                          color: '#10b981'
                        }}
                      >
                        Complete
                      </div>
                    )}
                    {module.status === 'in-progress' && (
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#3b82f6' }}>
                        {module.progress}%
                      </span>
                    )}
                    {module.status === 'locked' && (
                      <span style={{ fontSize: '11px', color: '#6b7280' }}>
                        🔒 Locked
                      </span>
                    )}
                  </div>
                  {module.status !== 'locked' && (
                    <div className="bg-white rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${module.progress}%`,
                          backgroundColor: module.status === 'complete' ? '#10b981' : '#3b82f6'
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* This Week's Goals */}
          <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl p-5 text-white">
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
              🎯 This Week's Goals
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded border-2 border-white flex items-center justify-center">
                  <span style={{ fontSize: '12px' }}>✓</span>
                </div>
                <span style={{ fontSize: '13px', opacity: 0.9 }}>Send 10 personalized offers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded border-2 border-white flex items-center justify-center">
                  <span style={{ fontSize: '12px' }}>✓</span>
                </div>
                <span style={{ fontSize: '13px', opacity: 0.9 }}>Improve 3 customer wallet shares</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded border-2 border-white"></div>
                <span style={{ fontSize: '13px', opacity: 0.7 }}>Complete Category module</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
