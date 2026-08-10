import { Sparkles } from "lucide-react";

/**
 * Product images
 * ----------------
 * These are lightweight original vector illustrations standing in for real
 * product photography — swap each <img> below for a real product photo when
 * available, e.g.:
 *   <img src="/assets/products/twin-earth-cable.jpg" alt="..." />
 * Keep the same aspect ratio (1:1) and the card layout will hold.
 */

function CableImage() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <rect width="120" height="120" fill="#f3f4f6" />
      <circle cx="60" cy="60" r="34" fill="#e5e7eb" />
      <circle cx="60" cy="60" r="34" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="60" cy="60" r="26" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="60" cy="60" r="18" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="60" cy="60" r="9" fill="#374151" />
      <rect x="52" y="18" width="16" height="14" rx="2" fill="#1e3a8a" />
    </svg>
  );
}

function ConsumerUnitImage() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <rect width="120" height="120" fill="#f3f4f6" />
      <rect x="24" y="26" width="72" height="68" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
      <rect x="24" y="26" width="72" height="14" fill="#1e3a8a" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={32 + i * 12}
          y={50}
          width="8"
          height="34"
          rx="1.5"
          fill={i === 2 ? "#10b981" : "#9ca3af"}
        />
      ))}
    </svg>
  );
}

function SocketsImage() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <rect width="120" height="120" fill="#f3f4f6" />
      <rect x="30" y="30" width="60" height="60" rx="6" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
      <g fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
        <line x1="48" y1="48" x2="48" y2="56" />
        <line x1="60" y1="46" x2="60" y2="56" />
        <line x1="72" y1="48" x2="72" y2="56" />
      </g>
      <circle cx="60" cy="72" r="3" fill="#10b981" />
    </svg>
  );
}

const products = [
  {
    Image: CableImage,
    name: "Twin & Earth Cable (100m)",
    price: "£89.99",
  },
  {
    Image: ConsumerUnitImage,
    name: "Consumer Units & MCBs",
    price: "From £45.00",
  },
  {
    Image: SocketsImage,
    name: "Sockets & Switches Pack",
    price: "£77.50",
  },
];

export function ContentMockup() {
  return (
    <div
      className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white"
      style={{ transform: "rotateY(-5deg) rotateX(2deg)" }}
    >
      {/* Header */}
      <div className="bg-[#1e3a8a] px-5 pt-5 pb-6">
        <div className="flex items-center gap-1.5 mb-2">
          <Sparkles size={13} className="text-[#79dea8]" />
          <span className="text-[10px] font-semibold text-[#79dea8] uppercase tracking-wide">
            Auto-generated for this customer
          </span>
        </div>
        <p className="text-white text-sm font-semibold leading-snug">
          Your Merchant — For Electricians
        </p>
        <p className="text-white/70 text-xs mt-0.5">Your October Update</p>
      </div>

      {/* Intro */}
      <div className="px-5 py-4 border-b border-slate-100">
        <p className="text-[12.5px] text-slate-600 leading-snug">
          Based on your recent orders and project activity, here&apos;s what
          we think you need this month.
        </p>
      </div>

      {/* Product cards */}
      <div className="px-5 py-4 space-y-3">
        {products.map((p) => {
          const Image = p.Image;
          return (
            <div
              key={p.name}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-2 hover:border-[#10b981]/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                <Image />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12.5px] font-medium text-slate-800 leading-tight truncate">
                  {p.name}
                </p>
                <p className="text-[12px] font-semibold text-[#10b981] mt-0.5">
                  {p.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
        <p className="text-[10.5px] text-slate-400 text-center">
          Generated automatically from your inventory data · Palm AI
        </p>
      </div>
    </div>
  );
}
