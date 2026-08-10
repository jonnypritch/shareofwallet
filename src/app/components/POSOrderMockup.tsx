import { ArrowRight, Sparkles, Plus, TrendingUp } from 'lucide-react';

interface Line {
  name: string;
  unit: number;
  qty: number;
}

function LineRow({ line, strike = false }: { line: Line; strike?: boolean }) {
  const total = line.unit * line.qty;
  return (
    <div className="flex items-center justify-between bg-[#f9fafb] rounded-md px-3 py-2">
      <div className={strike ? 'opacity-50' : ''}>
        <div
          style={{
            fontSize: '11.5px',
            fontWeight: '600',
            color: '#1e293b',
            textDecoration: strike ? 'line-through' : 'none',
          }}
        >
          {line.name}
        </div>
        <div style={{ fontSize: '9.5px', color: '#6b7280' }}>
          £{line.unit.toFixed(2)} unit (ex VAT) &times; {line.qty}
        </div>
      </div>
      <div
        style={{
          fontSize: '11.5px',
          fontWeight: '700',
          color: strike ? '#9ca3af' : '#374151',
          textDecoration: strike ? 'line-through' : 'none',
        }}
      >
        £{total.toFixed(2)}
      </div>
    </div>
  );
}

const AVG_ORDER_VALUE = 60;

export function POSOrderMockup() {
  // All unit prices ex VAT.
  const cable: Line = { name: 'Twin & Earth Cable 2.5mm (100m)', unit: 74.99, qty: 2 };
  const socketOld: Line = { name: 'MK Logic K2746CEWHI 13A Double Socket', unit: 15.71, qty: 6 };
  const socketNew: Line = { name: 'MK Aspect K24347BSSW Brushed Steel', unit: 35.68, qty: 6 };
  const consumerUnit: Line = { name: 'Consumer Unit — 10 Way', unit: 53.75, qty: 1 };
  const clips: Line = { name: 'Tower 16mm Round Cable Clips (Black, Pack 50)', unit: 10.23, qty: 1 };

  const upsellDelta = socketNew.unit * socketNew.qty - socketOld.unit * socketOld.qty;
  const clipsTotal = clips.unit * clips.qty;
  const totalAdditions = upsellDelta + clipsTotal;
  const aovMultiple = totalAdditions / AVG_ORDER_VALUE;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-[#1e293b] px-4 py-3 flex items-center justify-between">
        <div>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#ffffff' }}>
            Order Screen — MACE
          </div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>
            Apex Electrical Services · prices ex VAT
          </div>
        </div>
        <div
          className="px-2 py-1 rounded-full"
          style={{ fontSize: '9px', fontWeight: '600', backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
        >
          Available in MACE Systems
        </div>
      </div>

      <div className="p-4">
        {/* Base order lines */}
        <div className="space-y-2 mb-3">
          <LineRow line={cable} />
          <LineRow line={socketOld} strike />
          <LineRow line={consumerUnit} />
        </div>

        {/* Premium upsell — shown as the actual replacement line */}
        <div className="border border-dashed border-[#10b981] bg-[#ecfdf5] rounded-md px-3 py-2.5 mb-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <ArrowRight className="w-3 h-3 text-[#10b981]" />
            <span style={{ fontSize: '10px', fontWeight: '700', color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
              Upsell applied
            </span>
          </div>
          <LineRow line={socketNew} />
          <div className="flex items-center justify-between mt-1.5 pt-1.5" style={{ borderTop: '1px dashed #a7f3d0' }}>
            <span style={{ fontSize: '10.5px', color: '#6b7280' }}>
              £{socketNew.unit.toFixed(2)} vs £{socketOld.unit.toFixed(2)} unit — better finish, same footprint
            </span>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#10b981' }}>
              +£{upsellDelta.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Suggested fixings — added as a real line */}
        <div className="border border-dashed border-[#3b82f6] bg-[#eff6ff] rounded-md px-3 py-2.5 mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3 h-3 text-[#3b82f6]" />
            <span style={{ fontSize: '10px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
              Suggested addition
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div style={{ fontSize: '11.5px', fontWeight: '600', color: '#1e293b' }}>{clips.name}</div>
              <div style={{ fontSize: '9.5px', color: '#6b7280' }}>
                £{clips.unit.toFixed(2)} unit (ex VAT) &times; {clips.qty} — none on this order yet
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#3b82f6' }}>
                +£{clipsTotal.toFixed(2)}
              </span>
              <Plus className="w-3.5 h-3.5 text-[#3b82f6]" />
            </div>
          </div>
        </div>

        {/* AOV callout */}
        <div className="bg-[#1e3a8a] rounded-md px-3 py-2.5 mb-4">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-[#79dea8]" />
            <span style={{ fontSize: '10px', fontWeight: '700', color: '#79dea8', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
              Recommended additions
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff' }}>
              +£{totalAdditions.toFixed(2)}
            </span>
            <span style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.75)' }}>
              {aovMultiple.toFixed(1)}&times; your average order value (£{AVG_ORDER_VALUE})
            </span>
          </div>
        </div>

        <button
          className="w-full bg-[#1e3a8a] text-white rounded-md hover:bg-[#1e40af] transition-colors"
          style={{ fontSize: '12px', fontWeight: '600', padding: '10px' }}
        >
          Add to order
        </button>
      </div>
    </div>
  );
}
