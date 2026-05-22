export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'basket-analysis' | 'customer-analysis' | 'share-of-wallet' | 'sales-strategy';
  readTime: number;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-your-best-customers-are-buying-from-competitors',
    title: "Why your best customers are buying from your competitors — and you probably won't know until it's too late",
    excerpt: "Most trade merchants don't lose customers in one go. They lose them category by category, quietly, over months. Here's how to spot it before it's too late.",
    category: 'customer-analysis',
    readTime: 3,
    publishedAt: '2025-05-19',
    author: { name: 'Jonathan Pritchard', role: 'Founder, Palm AI' },
    tags: ['customer churn', 'wholesale', 'builders merchants', 'sales gap', 'category analysis'],
    content: `
<p style="font-size:18px;font-weight:500;color:#1e293b;line-height:1.6;margin-bottom:24px;">A builders' merchant in the South East had a customer who'd been trading with them for eleven years. Good account. Regular orders. Then, over about eight months, his cement orders quietly dropped. Then his aggregates. Then nothing.</p>
<p>By the time anyone noticed, he'd moved. Not because of a bad experience. Not because a competitor called him. Because nobody had noticed the drift — and nobody had called him first.</p>
<h2>This is how most merchants lose customers</h2>
<p>Not in one go. Category by category. Quietly, over months.</p>
<p>The problem isn't a bad product or poor service. It's that the data is there — in your transaction history, your order patterns, your CRM — and nobody is watching it.</p>
<p>A customer who ordered cement monthly and then stops isn't just changing their order. They're telling you something. They've found another supplier for that category. And if you don't act on it, the next category goes too.</p>
<h2>Three signals most merchants miss</h2>
<p><strong>Order frequency drops.</strong> Weekly becomes fortnightly. Fortnightly becomes monthly. Monthly becomes nothing. Each step feels small. Together, they're a customer leaving.</p>
<p><strong>Category gaps open.</strong> They stop buying one product line entirely. They don't say anything. They just stop. Nine times out of ten, they've found it somewhere else.</p>
<p><strong>Basket size shrinks.</strong> They're still ordering, but less. Testing a new supplier on the side. Classic early churn behaviour.</p>
<h2>What changes when you watch for it</h2>
<p>One national distributor we worked with reduced customer churn by 10% in year one — not by changing their pricing or their service, but simply by knowing which accounts were drifting before they were gone, and giving their reps a reason to call.</p>
<p>The call didn't need to be a hard sell. Just: <em>"We noticed you haven't ordered cement in six weeks — is everything okay? We've got some good stock at the moment."</em></p>
<p>That's it. A data-informed conversation. One that would never have happened without the signal.</p>
<blockquote style="border-left:4px solid #10b981;padding:16px 20px;margin:24px 0;background:#f0fdf4;border-radius:0 8px 8px 0;">
<p style="margin:0;font-style:italic;color:#1e293b;">"Understands data and its powers to an incredible level, but more crucially understands ways to unlock the potential of data to drive business strategy."</p>
<p style="margin:8px 0 0;font-size:14px;color:#6b7280;">— Julie McLean, UK Marketing Director, Hansgrohe</p>
</blockquote>
<h2>The question worth asking</h2>
<p>How many of your accounts right now are in early drift? Not gone. Not even unhappy. Just quietly buying one category from someone else — and you don't know yet?</p>
<p>That's the number worth finding out.</p>
    `
  },
  {
    slug: 'what-is-basket-analysis-trade-merchants',
    title: 'What is basket analysis? A plain English guide for trade merchants',
    excerpt: "Basket analysis sounds technical. It isn't. It's simply understanding what your customers buy together — and spotting what's missing. Here's how it works in practice.",
    category: 'basket-analysis',
    readTime: 2,
    publishedAt: '2025-05-14',
    author: { name: 'Jonathan Pritchard', role: 'Founder, Palm AI' },
    tags: ['basket analysis', 'cross-sell', 'wholesale', 'trade merchants', 'product affinity'],
    content: `
<p style="font-size:18px;font-weight:500;color:#1e293b;line-height:1.6;margin-bottom:24px;">Plumbers buy copper pipe. They also buy fittings, valves, and flux. That's not a coincidence — it's a pattern. Basket analysis is simply the process of understanding those patterns across your entire customer base, and using them to spot what's missing.</p>
<p>It's one of the oldest techniques in retail data. Supermarkets have used it for decades. In trade and wholesale, most merchants are sitting on the same data and not using it at all.</p>
<h2>What it looks like in practice</h2>
<p>Take a builders' merchant. A customer regularly buys timber and sheet materials. The data shows that 80% of customers with that buying pattern also buy plasterboard. But this particular customer has never ordered plasterboard — not once in three years.</p>
<p>That's a basket gap. Either they're getting it somewhere else, or nobody has ever asked.</p>
<p>One conversation — <em>"Do you get your plasterboard from us?"</em> — can open a revenue line that was always there but invisible.</p>
<h2>Why it matters more than market share</h2>
<p>Finding new customers is expensive. Getting more from existing ones isn't. A customer who already trusts you, already has a trade account, already orders regularly — the cost of selling them an additional category is close to zero.</p>
<p>For one distributor we worked with, basket analysis across their account base identified over £1.2 million in untapped opportunity — revenue sitting in their existing customer relationships that no one was going after.</p>
<h2>The three questions basket analysis answers</h2>
<p><strong>What should this customer be buying that they aren't?</strong> Based on their trade type, their order history, and what similar customers buy.</p>
<p><strong>Which categories are they buying elsewhere?</strong> If a plumber orders everything except push-fit fittings, the question isn't whether they're buying them — it's who from.</p>
<p><strong>Who is most likely to say yes right now?</strong> Not every gap is worth chasing. Basket analysis tells you which ones are warm.</p>
<h2>You already have the data</h2>
<p>The transaction history is sitting in your ERP or order management system right now. The patterns are there. The gaps are there. The question is whether anyone is looking at them — and what they're doing about it when they do.</p>
    `
  },
  {
    slug: 'share-of-wallet-wholesale-distributors',
    title: 'Share of wallet: what it means for wholesalers and how to grow it',
    excerpt: "Share of wallet isn't a finance term. For wholesalers and distributors, it's the single most important number you're probably not tracking. Here's why it matters.",
    category: 'share-of-wallet',
    readTime: 3,
    publishedAt: '2025-05-07',
    author: { name: 'Jonathan Pritchard', role: 'Founder, Palm AI' },
    tags: ['share of wallet', 'sales gap analysis', 'wholesale distributors', 'revenue growth', 'account penetration'],
    content: `
<p style="font-size:18px;font-weight:500;color:#1e293b;line-height:1.6;margin-bottom:24px;">A plumbing wholesaler had a customer spending £40,000 a year with them. Good account, they thought. Loyal. Then they ran the numbers — and realised that based on the customer's trade type, size, and project activity, they should have been spending closer to £140,000.</p>
<p>The other £100,000 was going somewhere else. The wholesaler just didn't know it.</p>
<h2>What share of wallet actually means</h2>
<p>Share of wallet is the percentage of a customer's total relevant spend that comes to you — as opposed to your competitors.</p>
<p>It's different from revenue. A customer can be spending more with you every year and your share of wallet can still be shrinking, if their overall spend is growing faster than their orders with you.</p>
<p>Most wholesalers and distributors track revenue. Very few track share of wallet. The gap between those two numbers is where the opportunity lives.</p>
<h2>Why it's hard to see without data</h2>
<p>You can see what a customer buys from you. You can't easily see what they buy from everyone else. So share of wallet has to be estimated — using trade type, company size, sector signals, project activity, and buying patterns from similar accounts.</p>
<p>That estimation used to require a data team and weeks of work. Now it doesn't.</p>
<h2>What happens when you start measuring it</h2>
<p>The first thing most merchants discover is that their "best" customers by revenue aren't always their best customers by share of wallet. A £200K account that represents 90% of a customer's potential is better than a £400K account that represents 15% — because the growth runway is completely different.</p>
<p>Knowing that changes where your sales team focuses. Instead of calling the biggest spenders, they call the accounts with the most headroom.</p>
<p>Bristan, one of the UK's leading bathroom product manufacturers, has been using data to understand what different customer groups want to hear — making sure the right conversation is happening with the right customer at the right time. The result isn't just more revenue. It's better relationships, because the conversations are relevant.</p>
<h2>The starting point</h2>
<p>You don't need a perfect model to start. You need a rough answer to one question for each of your top 50 accounts:</p>
<p><em>What percentage of this customer's total relevant spend comes to us?</em></p>
<p>If you can answer that — even roughly — you have a prioritised list of where your growth is hiding. And that list is worth more than any new customer campaign you'll run this year.</p>
    `
  }
];

export const categoryLabels: Record<BlogPost['category'], string> = {
  'basket-analysis': 'Basket Analysis',
  'customer-analysis': 'Customer Analysis',
  'share-of-wallet': 'Share of Wallet',
  'sales-strategy': 'Sales Strategy',
};

export const categoryColors: Record<BlogPost['category'], string> = {
  'basket-analysis': '#3b82f6',
  'customer-analysis': '#10b981',
  'share-of-wallet': '#1e3a8a',
  'sales-strategy': '#f59e0b',
};
