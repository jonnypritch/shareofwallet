import { useState } from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";

/**
 * Four-stage narrative demo for the Inventory & Cashflow feature.
 *
 * 1. Familiar   — cashflow forecast (QuickBooks-style) + ABC/Pareto inventory
 * 2. Augmented  — adds a per-SKU reorder-point line
 * 3. Understand — demand range / uncertainty band, not a single forecast number
 * 4. Decision   — proprietary combined view: stock cover + cash tied up +
 *                 payment behaviour + quote pipeline -> one recommendation
 */

const STEPS = [
  {
    id: "familiar",
    label: "What you're used to",
    caption:
      "Cashflow forecast and inventory value, presented the way any accounting or stock tool would show it.",
  },
  {
    id: "augmented",
    label: "+ Reorder signals",
    caption:
      "Same data, now with reorder points and days-of-cover so you know when a line is about to run out.",
  },
  {
    id: "uncertainty",
    label: "+ Demand range",
    caption:
      "Demand isn't a single number. We show the likely range so you plan for reality, not a guess.",
  },
  {
    id: "decision",
    label: "Decision, made for you",
    caption:
      "Stock, cash, payment behaviour and your open quotes — combined into one recommendation, with the reasoning shown.",
  },
];

function CashflowChart() {
  const weeks = ["W1", "W2", "W3", "W4", "W5", "W6"];
  const moneyIn = [62, 48, 74, 40, 82, 58];
  const moneyOut = [45, 52, 42, 55, 48, 62];
  const balance = [40, 55, 51, 83, 68, 102, 98];

  const w = 280;
  const h = 90;
  const step = w / (balance.length - 1);
  const maxBal = 110;
  const points = balance
    .map((v, i) => `${i * step},${h - (v / maxBal) * h}`)
    .join(" ");

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-700">
          Cash flow forecast
        </span>
        <span className="text-[9.5px] text-slate-400">Next 6 weeks</span>
      </div>
      <div className="relative bg-slate-50 rounded-lg p-2.5">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[70px]">
          {weeks.map((_, i) => {
            const barW = 14;
            const x = i * step - barW / 2 + step / 2 - 8;
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={h / 2 - (moneyIn[i] / maxBal) * h}
                  width={barW}
                  height={(moneyIn[i] / maxBal) * h}
                  fill="#10b981"
                  opacity={0.55}
                  rx={1.5}
                />
                <rect
                  x={x}
                  y={h / 2}
                  width={barW}
                  height={(moneyOut[i] / maxBal) * h * 0.5}
                  fill="#94a3b8"
                  opacity={0.55}
                  rx={1.5}
                />
              </g>
            );
          })}
          <line x1={0} y1={h / 2} x2={w} y2={h / 2} stroke="#e2e8f0" strokeWidth={1} />
          <polyline
            points={points}
            fill="none"
            stroke="#1e3a8a"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex justify-between mt-1 px-0.5">
          {weeks.map((w) => (
            <span key={w} className="text-[8.5px] text-slate-400">
              {w}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="flex items-center gap-1 text-[9px] text-slate-500">
            <span className="w-2 h-2 rounded-sm bg-[#10b981]/60" /> Money in
          </span>
          <span className="flex items-center gap-1 text-[9px] text-slate-500">
            <span className="w-2 h-2 rounded-sm bg-slate-400/60" /> Money out
          </span>
          <span className="flex items-center gap-1 text-[9px] text-slate-500">
            <span className="w-3 h-0.5 bg-[#1e3a8a] rounded" /> Balance
          </span>
        </div>
      </div>
    </div>
  );
}

function ParetoChart() {
  const cats = [
    { label: "Cable & wiring", value: 100, cum: 34 },
    { label: "Consumer units", value: 78, cum: 60 },
    { label: "Accessories", value: 52, cum: 78 },
    { label: "Lighting", value: 34, cum: 90 },
    { label: "Other", value: 20, cum: 100 },
  ];
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-700">
          Inventory value by category
        </span>
        <span className="text-[9.5px] text-slate-400">ABC analysis</span>
      </div>
      <div className="bg-slate-50 rounded-lg p-2.5">
        <div className="flex items-end gap-2 h-[64px]">
          {cats.map((c, i) => (
            <div key={c.label} className="flex-1 flex flex-col items-center justify-end h-full">
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${c.value}%`,
                  background: i === 0 ? "#1e3a8a" : i === 1 ? "#2f5aa8" : "#94a3b8",
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-1">
          {cats.map((c) => (
            <span
              key={c.label}
              className="flex-1 text-[8px] text-slate-400 text-center leading-tight"
            >
              {c.label}
            </span>
          ))}
        </div>
        <p className="text-[9.5px] text-slate-500 mt-2">
          Cable &amp; wiring and consumer units make up{" "}
          <b className="text-slate-700">60% of stock value</b> — your A-class
          items.
        </p>
      </div>
    </div>
  );
}

function ReorderChart() {
  // sawtooth stock level with a reorder threshold
  const points = [
    [0, 10], [40, 30], [45, 85], [90, 45], [95, 88], [140, 20],
    [145, 90], [190, 55], [230, 30], [260, 18],
  ];
  const w = 280;
  const h = 80;
  const path = points.map(([x, y]) => `${x},${h - y}`).join(" ");
  const thresholdY = h - 24;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-700">
          Twin &amp; Earth 2.5mm — stock level
        </span>
        <span className="text-[9.5px] font-semibold text-amber-600">
          6 days cover left
        </span>
      </div>
      <div className="bg-slate-50 rounded-lg p-2.5">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[64px]">
          <line
            x1={0}
            y1={thresholdY}
            x2={w}
            y2={thresholdY}
            stroke="#f59e0b"
            strokeDasharray="4 3"
            strokeWidth={1.5}
          />
          <polyline
            points={path}
            fill="none"
            stroke="#1e3a8a"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={260} cy={h - 18} r={4} fill="#f59e0b" />
        </svg>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[9px] text-slate-400">30 days</span>
          <span className="flex items-center gap-1 text-[9px] text-amber-600 font-medium">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-amber-500" />
            Reorder point
          </span>
        </div>
      </div>
    </div>
  );
}

function DemandRangeChart() {
  const weeks = ["This wk", "+1", "+2", "+3"];
  const low = [30, 22, 26, 20];
  const high = [70, 82, 68, 90];
  const mid = [50, 48, 47, 52];
  const w = 280;
  const h = 80;
  const step = w / (weeks.length - 1);
  const toXY = (arr: number[]) =>
    arr.map((v, i) => `${i * step},${h - (v / 100) * h}`).join(" ");
  const upper = toXY(high);
  const lower = toXY(low)
    .split(" ")
    .reverse()
    .join(" ");
  const band = `${upper} ${lower}`;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-700">
          Cable &amp; wiring — demand range
        </span>
        <span className="text-[9.5px] text-slate-400">Next 4 weeks</span>
      </div>
      <div className="bg-slate-50 rounded-lg p-2.5">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[64px]">
          <polygon points={band} fill="#10b981" opacity={0.15} />
          <polyline
            points={toXY(mid)}
            fill="none"
            stroke="#10b981"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex justify-between mt-1">
          {weeks.map((wk) => (
            <span key={wk} className="text-[8.5px] text-slate-400">
              {wk}
            </span>
          ))}
        </div>
        <p className="text-[9.5px] text-slate-500 mt-2">
          Expect between <b className="text-slate-700">220–370 units</b> over
          the next 4 weeks — plan around the range, not a single guess.
        </p>
      </div>
    </div>
  );
}

function DecisionPanel() {
  const stats = [
    { label: "Stock cover", value: "6 days", tone: "warn" },
    { label: "Cash tied up", value: "£4,200", tone: "neutral" },
    { label: "Avg. customer payment", value: "32 days", tone: "neutral" },
    { label: "Open quotes (this line)", value: "£8,600", tone: "good" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-700">
          Twin &amp; Earth 2.5mm — decision analysis
        </span>
        <span className="text-[9px] font-semibold bg-[#79dea8]/30 text-[#0f7a4f] px-2 py-0.5 rounded-full">
          Ready to action
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-slate-50 rounded-lg px-2.5 py-2 border border-slate-100"
          >
            <p className="text-[9px] text-slate-400 leading-tight">
              {s.label}
            </p>
            <p
              className={`text-[13px] font-bold leading-tight mt-0.5 ${
                s.tone === "warn"
                  ? "text-amber-600"
                  : s.tone === "good"
                  ? "text-[#10b981]"
                  : "text-slate-800"
              }`}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-[#10b981] bg-slate-50 rounded-r-lg pl-3 pr-3 py-2.5 mb-3">
        <div className="flex items-center gap-1 mb-1">
          <Sparkles size={11} className="text-[#1e3a8a]" />
          <span className="text-[9.5px] font-bold text-slate-600 uppercase tracking-wide">
            Recommendation
          </span>
        </div>
        <p className="text-[11px] text-slate-700 leading-snug">
          You're low on cable — 6 days of cover left, and that stock ties up{" "}
          <b>£4,200</b>. Your average customer on credit terms pays back in{" "}
          <b>32 days</b>. With <b>£8,600</b> in open quotations converting at
          around 50%, we'd suggest ordering <b>around 600m this week</b>, with{" "}
          <b>150m held back</b> for next week's expected demand.
        </p>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#1e3a8a] text-white text-xs font-semibold py-2 rounded-lg hover:bg-[#1e3a8a]/90 transition-colors">
          <Check size={13} />
          Approve order
        </button>
        <button className="px-3 flex items-center justify-center bg-white border border-slate-200 text-slate-600 text-xs font-semibold py-2 rounded-lg hover:border-slate-300 transition-colors">
          Adjust
        </button>
      </div>
    </div>
  );
}

export function InventoryCashflowMockup() {
  const [step, setStep] = useState(0);
  const active = STEPS[step];

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden">
      {/* Step tabs */}
      <div className="flex border-b border-slate-100 bg-slate-50/60">
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setStep(i)}
            className={`flex-1 text-[9.5px] font-semibold py-2.5 px-1 text-center transition-colors border-b-2 ${
              i === step
                ? "text-[#1e3a8a] border-[#1e3a8a]"
                : "text-slate-400 border-transparent hover:text-slate-600"
            }`}
          >
            {i + 1}. {s.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        <p className="text-[11px] text-slate-500 leading-snug mb-3 italic">
          {active.caption}
        </p>

        {step === 0 && (
          <>
            <CashflowChart />
            <ParetoChart />
          </>
        )}
        {step === 1 && (
          <>
            <CashflowChart />
            <div className="mt-3">
              <ReorderChart />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <ReorderChart />
            <div className="mt-3">
              <DemandRangeChart />
            </div>
          </>
        )}
        {step === 3 && <DecisionPanel />}

        <button
          onClick={() => setStep((s) => Math.min(s + 1, STEPS.length - 1))}
          disabled={step === STEPS.length - 1}
          className="mt-4 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#1e3a8a] py-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-0 disabled:pointer-events-none transition-colors"
        >
          See what we add next
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
