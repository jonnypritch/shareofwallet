/**
 * Glossary content: the single source for the visible /glossary page AND its
 * DefinedTermSet structured data (written into the static HTML by
 * prerender-pages.mjs). Each term's `slug` is its link: /glossary#<slug>.
 * Keep definitions to plain text: short, direct, complete on their own.
 */
export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  alsoCalled?: string[];
  link?: { href: string; label: string };
}

export interface GlossaryGroup {
  title: string;
  terms: GlossaryTerm[];
}

export const glossaryGroups: GlossaryGroup[] = [
  {
    title: 'Measuring customers',
    terms: [
      {
        term: 'Share of wallet',
        slug: 'share-of-wallet',
        alsoCalled: ['wallet share'],
        definition: "The percentage of a customer's total spend, on what you sell, that comes to you rather than anyone else. If a customer spends £10,000 a month on what you stock and £3,000 comes to you, your share of wallet is 30%.",
        link: { href: '/blog/what-is-share-of-wallet-b2b', label: 'What is share of wallet in B2B?' },
      },
      {
        term: 'Local market share',
        slug: 'local-market-share',
        definition: "Your share of everything trade customers in your catchment spend on the products you sell. It is measured against the whole local market, not one account, so it shows how much room there is to grow in your area.",
      },
      {
        term: 'Estimated total spend',
        slug: 'estimated-total-spend',
        definition: "What a customer is likely to spend in total on the products you sell, including what they buy from other suppliers. No merchant can see a rival's invoices, so it has to be estimated, for example from the typical cost of the projects a trade carries out.",
        link: { href: '/blog/how-to-calculate-share-of-wallet', label: 'How to calculate share of wallet' },
      },
      {
        term: 'Buying elsewhere (leakage)',
        slug: 'buying-elsewhere',
        alsoCalled: ['leakage'],
        definition: "When a customer buys products you sell from someone else, so some of their spend leaks away. It often shows up as a gap, such as a plumber who buys pipe and fittings from you but never boilers.",
        link: { href: '/blog/share-of-wallet-analysis-buying-elsewhere', label: 'How to find where customers are buying elsewhere' },
      },
      {
        term: 'Downtrading',
        slug: 'downtrading',
        definition: "When a customer moves to a cheaper product or range, usually to save money. Sales value and margin can fall even when the number of orders stays the same.",
      },
      {
        term: 'Customer churn',
        slug: 'customer-churn',
        alsoCalled: ['customer attrition'],
        definition: "When a customer stops buying from you. It rarely happens overnight, because customers usually move one category at a time, so a falling share of wallet is an early warning.",
        link: { href: '/blog/why-your-best-customers-are-buying-from-competitors', label: 'Why your best customers are buying from competitors' },
      },
      {
        term: 'Buying cadence',
        slug: 'buying-cadence',
        definition: "A customer's normal rhythm of ordering, such as weekly, monthly or quarterly. A gap only counts as lost business when it is longer than their usual cadence.",
      },
      {
        term: 'Project frequency',
        slug: 'project-frequency',
        definition: "How often a trade customer starts or finishes projects, such as jobs per month. It helps explain buying cadence, because a customer running several jobs at once orders differently from one working on a single build.",
      },
    ],
  },
  {
    title: 'Baskets and selling',
    terms: [
      {
        term: 'Basket analysis',
        slug: 'basket-analysis',
        alsoCalled: ['market basket analysis'],
        definition: "Analysing what customers buy together, how often, and how much they spend per order, to see what is missing from a typical basket and where to cross-sell.",
        link: { href: '/blog/what-is-basket-analysis-trade-merchants', label: 'What is basket analysis?' },
      },
      {
        term: 'Basket value',
        slug: 'basket-value',
        definition: "The total value of a single order. Average basket value, across all orders, is a common measure of how well you sell related products.",
      },
      {
        term: 'Cross-selling',
        slug: 'cross-selling',
        definition: "Suggesting products that go with what the customer is already buying, such as jointing compound and screws with plasterboard.",
        link: { href: '/blog/how-to-increase-share-of-wallet-trade-customers', label: 'How to increase share of wallet with trade customers' },
      },
      {
        term: 'Upselling',
        slug: 'upselling',
        definition: "Suggesting a better, larger or higher-value version of what the customer is buying, such as a higher-spec boiler or a bigger pack.",
      },
      {
        term: 'Support',
        slug: 'support',
        definition: "In basket analysis, how often two products appear together across all orders, shown as a percentage. If 120 of 1,000 orders include both plasterboard and jointing compound, support is 12%.",
      },
      {
        term: 'Confidence',
        slug: 'confidence',
        definition: "In basket analysis, the proportion of orders containing one product that also contain another. If 160 orders include plasterboard and 120 of those also include jointing compound, confidence is 75%.",
      },
      {
        term: 'Lift',
        slug: 'lift',
        definition: "In basket analysis, how much more likely customers are to buy a second product when they buy the first, compared with how likely they are to buy it anyway. A lift above 1 means the pairing is stronger than chance. If 24% of all orders include jointing compound, then 75% confidence against that 24% baseline gives a lift of about 3.1.",
      },
    ],
  },
  {
    title: 'Customers and markets',
    terms: [
      {
        term: 'Ideal customer profile',
        slug: 'ideal-customer-profile',
        alsoCalled: ['ICP'],
        definition: "A description of what a healthy account of a given type should buy, by category and sub-category, such as a roofer or a plumbing and heating engineer. It is the yardstick for spotting gaps.",
      },
      {
        term: 'Sub-category',
        slug: 'sub-category',
        definition: "A narrower group within a product category, such as cylinders or underfloor heating within plumbing. Measuring at sub-category level shows which part of the range a customer buys elsewhere.",
      },
      {
        term: 'Project stage',
        slug: 'project-stage',
        definition: "A step in the life of a building job, such as groundworks, foundations, structure, first fix, second fix and finishing. Each stage needs different materials, so knowing the stage helps predict the next order.",
      },
      {
        term: 'Prospect',
        slug: 'prospect',
        definition: "A trade business that is not yet a customer but could be, ideally with an estimate of what it spends on materials and contact details.",
      },
    ],
  },
  {
    title: 'Systems and data',
    terms: [
      {
        term: 'ERP',
        slug: 'erp',
        alsoCalled: ['enterprise resource planning'],
        definition: "The main software a merchant runs on to record orders, stock, invoicing and pricing.",
      },
      {
        term: 'API',
        slug: 'api',
        alsoCalled: ['application programming interface'],
        definition: "A standard way for one piece of software to share data with another. If your system has one, a tool like Palm AI can connect to it without replacing it.",
      },
      {
        term: 'Intelligence layer',
        slug: 'intelligence-layer',
        definition: "Software that sits alongside your ERP, reads your data and turns it into recommendations, such as who to call and what to suggest at the counter, without changing how you process orders.",
      },
      {
        term: 'Alias (trade language)',
        slug: 'alias',
        alsoCalled: ['trade language'],
        definition: "A local or informal name for a product or project, linked to the formal product so software understands the words people actually use. Palm AI uses aliases to interpret local trade terms.",
      },
    ],
  },
  {
    title: 'Money and stock',
    terms: [
      {
        term: 'Gross margin and gross profit',
        slug: 'gross-margin-and-gross-profit',
        definition: "Gross profit is sales minus the cost of the goods sold, in pounds. Gross margin is gross profit as a percentage of sales. A £100 sale that cost £70 gives £30 gross profit and a 30% gross margin.",
      },
      {
        term: 'Stock holding cost',
        slug: 'stock-holding-cost',
        alsoCalled: ['inventory carrying cost'],
        definition: "What it costs to keep stock on the shelf, beyond what you paid for it: cash tied up, space, handling, insurance and the risk it never sells.",
        link: { href: '/faq', label: 'Can Palm AI help me hold the right stock?' },
      },
      {
        term: 'Cash-to-cash cycle',
        slug: 'cash-to-cash-cycle',
        alsoCalled: ['cash conversion cycle'],
        definition: "The number of days between paying for stock and getting paid for it. It is days of stock held, plus days customers take to pay, minus days you take to pay suppliers. A shorter cycle frees up cash.",
      },
    ],
  },
];
