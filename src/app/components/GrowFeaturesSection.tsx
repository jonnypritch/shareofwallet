import { Check } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';
import { ProspectsMockup } from './ProspectsMockup';
import { ContentMockup } from './ContentMockup';
import { InventoryCashflowMockup } from './InventoryCashflowMockup';

interface FeatureCopy {
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
}

const FEATURES: Record<string, FeatureCopy> = {
  shareOfWallet: {
    eyebrow: 'Share of Wallet',
    headline: 'Grow customers one category at a time',
    body: "Every customer buys categories from competitors they should buy from you. Palm AI shows exactly which ones — and gets AI recommendations onto the order screen, so counter staff get the right suggestion at the right moment.",
    bullets: [
      'See share of wallet by customer/category',
      'Automated upsell and cross-sell at POS',
      'AI recommendations on order screen',
      "Compete where you're missing spend",
    ],
  },
  prospects: {
    eyebrow: 'Prospects',
    headline: "Your next customers are already out there. We find them.",
    body: 'Every tradesperson, contractor, construction company, property manager and leisure facility in your catchment area. Estimated spend. Recent projects. Contact details.',
    bullets: [
      'Full view of local trades and estimated spend',
      'Recent project activity and contact details',
      'Track local market share and competitor strengths',
      'Built-in CRM to onboard and manage new accounts',
    ],
  },
  content: {
    eyebrow: 'Content Generation',
    headline: 'Content that drives footfall — generated from your own data',
    body: 'Automates content from validated data — products, quotes, project opportunities, delivery timings. SEO-friendly pages, trade-specific copy, customer updates.',
    bullets: [
      'Automated product and category page creation',
      'SEO-friendly copy and images',
      'Trade-specific content',
      'Promote quotes, projects and delivery updates',
    ],
  },
  inventory: {
    eyebrow: 'Inventory & Cashflow',
    headline: 'The right stock, in the right place. And the cashflow to prove it.',
    body: 'Intelligent inventory management and cashflow forecasting based on real payment behaviour — not just stock counts. See the reasoning behind every reorder decision.',
    bullets: [
      'Intelligent inventory management across locations',
      'Reduce dead stock and free up cashflow',
      'Cashflow forecasting based on actual payment patterns',
      "Never lose a sale because the stock wasn't there",
    ],
  },
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mt-5">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-2.5">
          <span className="mt-0.5 w-4 h-4 rounded-full bg-[#10b981]/15 flex items-center justify-center shrink-0">
            <Check size={10} className="text-[#10b981]" strokeWidth={3} />
          </span>
          <span className="text-sm text-slate-600 leading-snug">{b}</span>
        </li>
      ))}
    </ul>
  );
}

function FeatureIntro({ f, centered = false }: { f: FeatureCopy; centered?: boolean }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <p className="text-[11px] font-bold text-[#10b981] uppercase tracking-wide mb-2">
        {f.eyebrow}
      </p>
      <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0f172a] leading-tight mb-3">
        {f.headline}
      </h3>
      <p className="text-[15px] text-slate-600 leading-relaxed">{f.body}</p>
      <div className={centered ? 'inline-block text-left' : ''}>
        <Bullets items={f.bullets} />
      </div>
    </div>
  );
}

export function GrowFeaturesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-8 py-[100px]">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a8a] text-center mb-16">
          Four ways Palm AI grows your business
        </h2>

        {/* 1 — Share of Wallet: standard side-by-side */}
        <div className="grid sm:grid-cols-2 gap-10 items-center mb-24">
          <FeatureIntro f={FEATURES.shareOfWallet} />
          <div className="flex justify-center">
            <DashboardMockup />
          </div>
        </div>

        {/* 2 — Prospects: flagship, full-width */}
        <div className="mb-24">
          <div className="max-w-2xl mx-auto mb-8">
            <FeatureIntro f={FEATURES.prospects} centered />
          </div>
          <div className="flex justify-center">
            <ProspectsMockup />
          </div>
        </div>

        {/* 3 — Content Generation: standard side-by-side, mockup first on desktop */}
        <div className="grid sm:grid-cols-2 gap-10 items-center mb-24">
          <div className="flex justify-center order-2 sm:order-1">
            <ContentMockup />
          </div>
          <div className="order-1 sm:order-2">
            <FeatureIntro f={FEATURES.content} />
          </div>
        </div>

        {/* 4 — Inventory & Cashflow: flagship, full-width */}
        <div>
          <div className="max-w-2xl mx-auto mb-8">
            <FeatureIntro f={FEATURES.inventory} centered />
          </div>
          <div className="flex justify-center">
            <InventoryCashflowMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
