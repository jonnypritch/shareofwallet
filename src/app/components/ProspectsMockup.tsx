import { useState } from "react";
import { Star, Sparkles, ArrowRight, TrendingUp } from "lucide-react";

/**
 * Four-tab narrative demo for the Prospects feature, matching the depth
 * and tab-bar pattern of InventoryCashflowMockup.tsx:
 *
 * 1. Territory   — every tradesperson in the catchment, mapped by spend
 * 2. Enrichment  — one profile, fully built out
 * 3. Pipeline    — tracked through to a live account
 * 4. Market Share — where you're winning vs. where competitors hold on
 */

const STEPS = [
  {
    id: "territory",
    label: "Territory",
    caption:
      "Every tradesperson, contractor and construction company in your catchment area, mapped with estimated spend.",
  },
  {
    id: "enrichment",
    label: "Prospect Enrichment",
    caption:
      "One click turns a name into a full profile — reviews, recent projects, category spend and an opening script.",
  },
  {
    id: "pipeline",
    label: "Pipeline",
    caption:
      "Track prospects through to a live account, from first contact to signed customer.",
  },
  {
    id: "marketshare",
    label: "Market Share",
    caption:
      "See where you're winning and where competitors still hold the account — and track it moving.",
  },
];

const tradeBreakdown = [
  { label: "Builders / General Contractors", count: 98, color: "#1e293b" },
  { label: "Electricians", count: 42, color: "#3b82f6" },
  { label: "Plumbers / Heating Engineers", count: 38, color: "#10b981" },
  { label: "Other Construction", count: 27, color: "#94a3b8" },
  { label: "Landscapers", count: 23, color: "#34d399" },
  { label: "Specialist Trades", count: 23, color: "#ef4444" },
];
const tradeMax = Math.max(...tradeBreakdown.map((t) => t.count));

const signalRows = [
  {
    label: "Property & Lettings",
    count: 160,
    note: "Landlords, letting agents & property managers — not a trade, but a maintenance/refurb spend signal",
  },
  {
    label: "Leisure & Holiday Parks",
    count: 20,
    note: "Caravan and holiday parks — seasonal, often site-wide maintenance spend, useful off-season",
  },
];
const signalMax = 200;

function TerritoryPanel() {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-100">
      <div className="bg-[#1d1d31] px-4 pt-4 pb-5">
        <p className="text-white text-base font-bold leading-tight">
          Aylsham
        </p>
        <p className="text-white/50 text-[11px] mb-3">NR11 6FD</p>
        <p className="text-[#79dea8] text-3xl font-extrabold leading-none">
          538
        </p>
        <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wide mt-1.5">
          Estimated prospects in territory
        </p>
      </div>

      <div className="bg-white p-4">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mb-2">
          By trade type
        </p>
        <div className="space-y-1.5 mb-3">
          {tradeBreakdown.map((t) => (
            <div key={t.label} className="flex items-center gap-2">
              <span className="text-[9.5px] text-slate-600 w-[92px] shrink-0 truncate">
                {t.label}
              </span>
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(t.count / tradeMax) * 100}%`,
                    background: t.color,
                  }}
                />
              </div>
              <span className="text-[9.5px] font-bold text-slate-700 w-6 text-right shrink-0">
                {t.count}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-2.5 pt-2 border-t border-dashed border-slate-200">
          {signalRows.map((s) => (
            <div key={s.label}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9.5px] font-bold text-slate-800 w-[92px] shrink-0 truncate">
                  {s.label}
                </span>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-teal-600"
                    style={{ width: `${(s.count / signalMax) * 100}%` }}
                  />
                </div>
                <span className="text-[9.5px] font-bold text-slate-700 w-6 text-right shrink-0">
                  {s.count}
                </span>
              </div>
              <p className="text-[8.5px] text-slate-400 leading-snug">
                {s.note}
              </p>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 bg-[#79dea8] text-[#0f2818] text-[11px] font-bold py-2.5 rounded-lg hover:bg-[#6acb96] transition-colors">
          Scan Aylsham territory →
        </button>
      </div>
    </div>
  );
}

const categorySpend = [
  { label: "Cable & wiring", value: "£2,500–£6,000", pct: 85 },
  { label: "Consumer units / MCBs", value: "£2,000–£5,000", pct: 65 },
  { label: "Wiring accessories", value: "£2,000–£5,000", pct: 60 },
  { label: "Lighting", value: "£1,500–£4,000", pct: 45 },
];

function EnrichmentPanel() {
  return (
    <div>
      <div className="flex items-start justify-between mb-1.5">
        <div>
          <p className="text-[13px] font-bold text-slate-900 leading-tight">
            Apex Electrical Services
          </p>
          <p className="text-[10px] text-slate-400">
            Electrical contractor · micro
          </p>
        </div>
        <div className="text-right shrink-0 ml-2">
          <p className="text-[13px] font-bold text-[#10b981] leading-none">
            £10k–£25k
          </p>
          <p className="text-[8px] font-semibold text-slate-400 uppercase tracking-wide">
            Est. annual wallet
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-3">
        <Star size={11} className="text-amber-400 fill-amber-400" />
        <span className="text-[10px] font-bold text-slate-700">9.6/10</span>
        <span className="text-[10px] text-slate-400">(14 reviews)</span>
      </div>

      <div className="bg-slate-50 rounded-lg p-2.5 space-y-1.5 mb-3">
        {categorySpend.map((cat) => (
          <div key={cat.label}>
            <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
              <span>{cat.label}</span>
              <span className="text-slate-800 font-semibold">
                {cat.value}
              </span>
            </div>
            <div className="h-1 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-[#10b981] rounded-full"
                style={{ width: `${cat.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-[#10b981] bg-slate-50 rounded-r-lg pl-2.5 pr-2.5 py-2 mb-3">
        <div className="flex items-center gap-1 mb-1">
          <Sparkles size={11} className="text-[#1e3a8a]" />
          <span className="text-[9.5px] font-bold text-slate-600 uppercase tracking-wide">
            Suggested opening
          </span>
        </div>
        <p className="text-[10.5px] text-slate-600 leading-snug italic">
          "Noticed you've won a few new-build jobs locally this quarter —
          worth a quick chat about consumer unit pricing on volume?"
        </p>
      </div>

      <button className="w-full flex items-center justify-center gap-1.5 bg-[#1e3a8a] text-white text-xs font-semibold py-2 rounded-lg hover:bg-[#1e3a8a]/90 transition-colors">
        Add to Pipeline
        <ArrowRight size={13} />
      </button>
    </div>
  );
}

const pipelineColumns = [
  {
    title: "To Contact",
    count: 1,
    cards: [
      {
        name: "Meridian Plumbing & Property",
        trade: "Plumbers / Heating",
        spend: "£3k–£10k",
      },
    ],
  },
  {
    title: "Contacted",
    count: 2,
    cards: [
      { name: "Northgate Electrical", trade: "Electricians", spend: "£6k–£18k" },
      { name: "Apex Electrical Services", trade: "Electricians", spend: "£10k–£25k" },
    ],
  },
  {
    title: "Meeting Booked",
    count: 1,
    cards: [
      {
        name: "Harbour View Heating Ltd",
        trade: "Plumbers / Heating",
        spend: "£18k–£45k",
        badges: [
          { label: "Wolseley", tone: "gold" },
          { label: "MKM", tone: "outline" },
        ],
      },
    ],
  },
  { title: "Not Trading", count: 0, cards: [] },
];

function PipelinePanel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-700">
          Pipeline
        </span>
        <span className="text-[9.5px] text-slate-400">14 active prospects</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {pipelineColumns.map((col) => (
          <div
            key={col.title}
            className="bg-slate-50 rounded-lg border border-slate-100 p-1.5"
          >
            <div className="flex items-center justify-between mb-1.5 px-0.5">
              <span className="text-[8.5px] font-bold text-slate-500 uppercase tracking-wide leading-tight">
                {col.title}
              </span>
              <span className="text-[8px] font-semibold text-slate-400 bg-white rounded-full w-3.5 h-3.5 flex items-center justify-center shrink-0">
                {col.count}
              </span>
            </div>
            <div className="space-y-1 min-h-[32px]">
              {col.cards.length === 0 && (
                <p className="text-[8.5px] text-slate-300 text-center py-2">
                  No cards
                </p>
              )}
              {col.cards.map((card) => (
                <div
                  key={card.name}
                  className="bg-white rounded-md border border-slate-100 p-1.5 shadow-sm"
                >
                  <p className="text-[9px] font-bold text-slate-800 leading-tight">
                    {card.name}
                  </p>
                  <p className="text-[8px] text-slate-400 leading-tight">
                    {card.trade}
                  </p>
                  <p className="text-[9px] font-bold text-[#10b981] mt-0.5">
                    {card.spend}
                  </p>
                  {"badges" in card && card.badges && (
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {card.badges.map((b) => (
                        <span
                          key={b.label}
                          className={
                            b.tone === "gold"
                              ? "text-[7px] font-bold px-1 py-0.5 rounded-full bg-amber-400 text-slate-900"
                              : "text-[7px] font-bold px-1 py-0.5 rounded-full bg-white border border-[#1e3a8a] text-[#1e3a8a]"
                          }
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const shareRows = [
  { label: "You", pct: 38, tone: "#10b981" },
  { label: "Competitor A", pct: 31, tone: "#94a3b8" },
  { label: "Competitor B", pct: 19, tone: "#cbd5e1" },
  { label: "Unaccounted", pct: 12, tone: "#e5e7eb" },
];

function MarketSharePanel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-700">
          Electricians — Doncaster catchment
        </span>
        <span className="flex items-center gap-1 text-[9.5px] font-semibold text-[#10b981]">
          <TrendingUp size={11} />
          +8% this quarter
        </span>
      </div>
      <div className="bg-slate-50 rounded-lg p-2.5">
        <div className="flex h-3 rounded-full overflow-hidden mb-3">
          {shareRows.map((r) => (
            <div
              key={r.label}
              style={{ width: `${r.pct}%`, background: r.tone }}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          {shareRows.map((r) => (
            <div key={r.label} className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] text-slate-600">
                <span
                  className="w-2 h-2 rounded-sm shrink-0"
                  style={{ background: r.tone }}
                />
                {r.label}
              </span>
              <span className="text-[10px] font-semibold text-slate-800">
                {r.pct}%
              </span>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-slate-500 mt-3">
          You've closed the gap on Competitor A by{" "}
          <b className="text-slate-700">6 points</b> since last quarter.
        </p>
      </div>
    </div>
  );
}

export function ProspectsMockup() {
  const [step, setStep] = useState(0);
  const active = STEPS[step];

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden">
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

        {step === 0 && <TerritoryPanel />}
        {step === 1 && <EnrichmentPanel />}
        {step === 2 && <PipelinePanel />}
        {step === 3 && <MarketSharePanel />}

        <button
          onClick={() => setStep((s) => Math.min(s + 1, STEPS.length - 1))}
          disabled={step === STEPS.length - 1}
          className="mt-4 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#1e3a8a] py-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-0 disabled:pointer-events-none transition-colors"
        >
          Next
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
