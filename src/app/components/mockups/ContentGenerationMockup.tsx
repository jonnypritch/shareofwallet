import { Mail, FileText, Image, Wand2 } from 'lucide-react';

export function ContentGenerationMockup() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] px-6 py-4">
          <div className="flex items-center gap-2 mb-2">
            <Wand2 className="w-5 h-5 text-white" />
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff' }}>
              Content Generator
            </h3>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
            Generative marketing content
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Content Type Selector */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <button className="bg-[#3b82f6] text-white rounded-lg p-3 flex flex-col items-center gap-2">
              <Mail className="w-5 h-5" />
              <span style={{ fontSize: '12px', fontWeight: '600' }}>Email</span>
            </button>
            <button className="bg-[#f9fafb] text-[#6b7280] rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors">
              <FileText className="w-5 h-5" />
              <span style={{ fontSize: '12px', fontWeight: '600' }}>Social Post</span>
            </button>
            <button className="bg-[#f9fafb] text-[#6b7280] rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors">
              <Image className="w-5 h-5" />
              <span style={{ fontSize: '12px', fontWeight: '600' }}>Video</span>
            </button>
          </div>

          {/* Generated Email Preview */}
          <div className="bg-gradient-to-br from-[#f9fafb] to-white rounded-xl p-5 border border-gray-200 mb-4">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
              <div>
                <div style={{ fontSize: '11px', color: '#6b7280' }}>To:</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
                  Bob Builders Ltd
                </div>
              </div>
              <div
                className="px-2 py-1 rounded-full"
                style={{
                  fontSize: '10px',
                  fontWeight: '600',
                  backgroundColor: '#10b98120',
                  color: '#10b981'
                }}
              >
                Ready to Send
              </div>
            </div>

            <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a', marginBottom: '12px' }}>
              Complete Your Residential Project with Our Electrical Range
            </div>

            <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6', marginBottom: '16px' }}>
              Hi Bob,<br /><br />
              We noticed you're working on a new residential build in [Location]. Based on the materials you've already ordered, we wanted to highlight our comprehensive electrical supplies range that could save you time and money.<br /><br />
              <strong>Recommended for your project:</strong><br />
              • Twin & Earth Cable (100m) - £89.99<br />
              • Consumer Units & MCBs - From £45.00<br />
              • Sockets & Switches Pack - £77.50<br /><br />
              Save 15% when you add these to your account this week.
            </div>

            <div className="flex gap-2">
              <div className="flex-1 bg-white rounded p-2 text-center" style={{ fontSize: '11px', color: '#6b7280' }}>
                📧 Personalized
              </div>
              <div className="flex-1 bg-white rounded p-2 text-center" style={{ fontSize: '11px', color: '#6b7280' }}>
                🎯 Project-aware
              </div>
              <div className="flex-1 bg-white rounded p-2 text-center" style={{ fontSize: '11px', color: '#6b7280' }}>
                ⚡ Auto-send
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '12px', color: '#6b7280', minWidth: '80px' }}>Tone:</span>
              <select className="flex-1 bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2" style={{ fontSize: '13px' }}>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Urgent</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '12px', color: '#6b7280', minWidth: '80px' }}>Project Stage:</span>
              <select className="flex-1 bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2" style={{ fontSize: '13px' }}>
                <option>First Fix</option>
                <option>Second Fix</option>
                <option>Completion</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              className="flex-1 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-colors"
              style={{ fontSize: '14px', padding: '12px 24px', fontWeight: '600' }}
            >
              Send Now
            </button>
            <button
              className="px-6 bg-white border-2 border-[#8b5cf6] text-[#8b5cf6] rounded-lg hover:bg-purple-50 transition-colors"
              style={{ fontSize: '14px', padding: '12px 24px', fontWeight: '600' }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
