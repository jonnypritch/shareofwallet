import { Check, X, ArrowRight } from 'lucide-react';

export function WhatsAppOfferMockup() {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* WhatsApp-style header */}
      <div className="bg-[#075e54] px-4 py-3 flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
        >
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff' }}>AE</span>
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#ffffff' }}>Apex Electrical Services</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>via WhatsApp</div>
        </div>
      </div>

      {/* Chat body */}
      <div className="p-3" style={{ backgroundColor: '#e5ddd5' }}>
        {/* Customer message */}
        <div className="flex justify-start mb-2.5">
          <div
            className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%]"
            style={{ boxShadow: '0 1px 1px rgba(0,0,0,0.08)' }}
          >
            <p style={{ fontSize: '11.5px', color: '#111827', lineHeight: '1.4' }}>
              Hi — can you get me 6x MK sockets, a 10-way consumer unit and 100m of 2.5mm T&amp;E for tomorrow?
            </p>
            <div style={{ fontSize: '9px', color: '#9ca3af', textAlign: 'right', marginTop: '2px' }}>09:14</div>
          </div>
        </div>

        {/* Drafted reply, awaiting approval */}
        <div className="flex justify-end">
          <div
            className="rounded-lg rounded-tr-none px-3 py-2.5 max-w-[88%]"
            style={{ backgroundColor: '#fff8e1', border: '1px dashed #f59e0b' }}
          >
            <div style={{ fontSize: '9px', fontWeight: '700', color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: '6px' }}>
              Drafted for you — not sent yet
            </div>
            <p style={{ fontSize: '11.5px', color: '#1e293b', lineHeight: '1.5', marginBottom: '8px' }}>
              All in for tomorrow. Since you're doing sockets — want the{' '}
              <b>MK Aspect brushed steel range</b> instead, for +£20 total? And I'd add a{' '}
              <b>box of cable clips</b> for the T&amp;E run, none on your last few orders.
            </p>
            <div className="flex gap-2">
              <button
                className="flex-1 flex items-center justify-center gap-1 bg-[#10b981] text-white rounded-md hover:bg-[#059669] transition-colors"
                style={{ fontSize: '10.5px', fontWeight: '600', padding: '6px' }}
              >
                <Check className="w-3 h-3" />
                Approve &amp; send
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-1 bg-white border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50 transition-colors"
                style={{ fontSize: '10.5px', fontWeight: '600', padding: '6px' }}
              >
                <X className="w-3 h-3" />
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flow indicator */}
      <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f9fafb] border-t border-gray-100">
        <span style={{ fontSize: '10px', color: '#6b7280' }}>Once approved</span>
        <ArrowRight className="w-3 h-3 text-[#3b82f6]" />
        <span style={{ fontSize: '10px', fontWeight: '600', color: '#3b82f6' }}>Sent to order screen automatically</span>
      </div>
    </div>
  );
}
