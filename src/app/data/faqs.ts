/**
 * FAQ content: the single source for the visible /faq page AND its FAQPage
 * structured data (written into the static HTML by prerender-pages.mjs).
 * Keep answers to plain text: short, direct, and complete on their own.
 */
export interface FaqItem {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: 'About Palm AI',
    items: [
      {
        q: 'What is Palm AI?',
        a: "Palm AI is an AI platform for builders' merchants, plumbers' merchants, tool hire, electrical wholesalers and foodservice wholesalers. It shows you where each customer's spend is going, tells your team what to do about it, and helps you find new accounts. Our aim is simple: save you time, save you money and grow your customers.",
      },
      {
        q: 'Who is Palm AI for?',
        a: "Palm AI is built for trade merchants and wholesalers: builders' merchants, plumbers' merchants, electrical wholesalers, tool hire depots and foodservice wholesalers. It's designed for the branch teams, counter staff and sales reps who deal with trade customers every day.",
      },
      {
        q: 'Who owns Palm AI?',
        a: "Palm AI is independently owned by its founder, Jonathan Pritchard. We're focused on helping our customers thrive and expand, making their businesses stronger, more resilient and more productive, while giving the people who use our tools new skills. We also share what we learn about using new technology to take the mundane out of the working day.",
        link: { href: '/about', label: 'About Palm AI' },
      },
      {
        q: 'How is Palm AI different from a dashboard or reporting tool?',
        a: "Dashboards and reports show you the numbers and wait for someone to open them. Palm AI works the other way round: it watches every account and category continuously, tells you when something is worth knowing, and puts the recommendation where the work already happens, such as the order screen or a drafted message ready for your team to approve.",
      },
    ],
  },
  {
    title: 'Share of wallet and market data',
    items: [
      {
        q: 'What is share of wallet?',
        a: "Share of wallet is the percentage of a customer's total spend, on the products you sell, that goes to your business rather than to anyone else. If a customer spends £10,000 a month on what you stock and £3,000 of it comes to you, your share of wallet with that customer is 30%.",
        link: { href: '/blog/what-is-share-of-wallet-b2b', label: 'Read the full guide: What is share of wallet in B2B?' },
      },
      {
        q: 'How does Palm AI know what my customers spend elsewhere?',
        a: "No merchant can see another merchant's invoices, so Palm AI estimates it. It takes publicly available information about local projects, such as kitchen extensions, driveways, rewires and boiler installs, works out what each typically costs, and applies that to your catchment. The result is a database of estimated trade spend covering over 250,000 verifiable UK trade companies and sole traders, refreshed daily where the data allows. Merchants who have tested the estimates have found them reasonable.",
        link: { href: '/blog/how-to-calculate-share-of-wallet', label: 'How to calculate share of wallet' },
      },
      {
        q: 'Does Palm AI understand trade language and local product names?',
        a: "Yes. Palm AI uses aliases for trade language, so it can interpret the words your customers and staff actually use for products and projects in your area, not just the formal product descriptions.",
      },
    ],
  },
  {
    title: 'What Palm AI does',
    items: [
      {
        q: 'What can Palm AI do for my branches?',
        a: "Palm AI shows you the opportunity to grow share of wallet, category by category. It shows your prospects and what they spend on materials, with contact details, and your local market share and how it's moving. It gives automated basket updates on the order screen, turns WhatsApp and SMS requests into quotes on your quotes page, and brings inventory management that saves money and time and forecasts what you need more accurately, alongside forward-looking cashflow forecasts.",
        link: { href: '/features', label: 'See every feature' },
      },
      {
        q: 'Can Palm AI help counter staff and sales reps at the point of sale?',
        a: "Yes. Palm AI puts cross-sell and upsell suggestions at basket and quote level, while the order is still open. Your people decide what to offer, so it's guidance and not instruction, and it leaves counter staff and sales teams more time for customer relationships and less on admin.",
      },
      {
        q: 'What are automated quotations?',
        a: "When a customer asks for a quote by WhatsApp or SMS, Palm AI puts it straight onto your quotes page, so your team isn't keying it in. It suggests the likely other needs and keeps margin within your guardrails. Nothing is sent without your team's approval. It's available now for MACE Systems, and not yet for other systems.",
      },
      {
        q: 'What are automated basket updates?',
        a: "In our basket analysis across several merchants, 92% of baskets are individual to the business at SKU level. Making sense of what goes with what, and why, can take years of experience. Our machine learning tools do it in milliseconds, so your team can help customers get everything they need for the job.",
      },
      {
        q: 'Can Palm AI help me hold the right stock?',
        a: "Yes. Palm AI can set stock levels from our forecast instead of a simple 13-week average, balancing two things: making sure you have your fast-moving lines and their associated SKUs in stock, and holding enough of the related but slower-selling items to keep your service promise. In validation testing across two branches, this would have meant around 25% less stock on the shelf while still covering the large majority of lines (92-95%), roughly £30k less cash tied up per branch. Results vary by branch and product range. Do you know what it costs you just to hold your stock, before you count the cost of the stock itself? If 80% of your inventory management time goes on SKUs that give you 10% of sales, you need a better balance.",
        link: { href: '/blog/how-much-stock-should-a-builders-merchant-hold', label: "How much stock should a builders' merchant hold?" },
      },
      {
        q: 'Can Palm AI help me find new customers?',
        a: "Yes. Palm AI shows prospects in your catchment, what they're estimated to spend on materials, and their contact details, so you can see which trades you don't yet serve and where to look first.",
      },
      {
        q: "How accurate are Palm AI's forecasts?",
        a: "When we compared forecast against actual sales by category, our brick forecast in value was only 1% out over one month. That is one category over one month, and accuracy varies by category and period.",
      },
    ],
  },
  {
    title: 'Your systems, data and security',
    items: [
      {
        q: 'Will Palm AI work with my ERP or POS system?',
        a: "Palm AI is integrated with MACE Systems, has worked with an API from GenetiQ (formerly Intact iQ), and can integrate with any system that has an API. We can also work with a few systems that don't have one. Tell us what you use and we'll explain how we'd connect it.",
      },
      {
        q: 'Do I have to replace my ERP?',
        a: "No. Palm AI sits alongside your ERP or POS system. It doesn't change how you process an order and there's no rip-and-replace. Your ERP stays your system of record, and Palm AI adds the intelligence on top.",
      },
      {
        q: 'Can Palm AI work with data held on servers at my branches?',
        a: "Yes. Palm AI can work with ERP data held on local servers at your branches, so the intelligence is delivered where and when you need it, on the systems you use today.",
      },
      {
        q: 'How is my data kept secure?',
        a: "Where customer data needs to be stored, it is held securely in AWS and encrypted to banking standards. We don't allow data to leave our environment.",
      },
      {
        q: 'Is my data sent to ChatGPT or other AI companies?',
        a: "No. Your data is not sent to ChatGPT, to other AI companies, or out to the internet. It stays inside our environment, so there is no data leakage to third parties.",
      },
    ],
  },
  {
    title: 'Getting started and pricing',
    items: [
      {
        q: 'How long does Palm AI take to set up, and when will I see results?',
        a: "Once we receive your data, you'll see first insights within 24 hours, and configuration is complete within 48 hours. Time to value is about one week.",
      },
      {
        q: 'How much does Palm AI cost?',
        a: "There are no fixed tiers and no published price list. What you pay is agreed around your branches, your data, and what you need live first. Get in touch and we'll agree it with you.",
        link: { href: '/pricing', label: 'Pricing' },
      },
      {
        q: 'How can I see Palm AI working?',
        a: "Book a demo. We can show you daily client data in the system and the prospect tool, then agree what to connect first.",
        link: { href: '/contact', label: 'Book a demo' },
      },
    ],
  },
];
