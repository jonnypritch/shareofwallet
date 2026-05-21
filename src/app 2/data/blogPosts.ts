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
    slug: 'what-is-basket-analysis-for-wholesalers',
    title: 'What is basket analysis? A practical guide for wholesalers and distributors',
    excerpt: 'Basket analysis reveals which products your customers buy together — and which ones they should be buying from you but aren\'t. Here\'s how to use it.',
    category: 'basket-analysis',
    readTime: 6,
    publishedAt: '2025-05-12',
    author: { name: 'ShareOfWallet', role: 'Data & Insights' },
    tags: ['basket analysis', 'wholesale', 'distributors', 'sales gap'],
  },
  {
    slug: 'how-to-identify-customers-buying-from-competitors',
    title: 'How to identify which customers are buying from your competitors',
    excerpt: 'If a customer suddenly drops their cement orders but keeps buying timber, they\'ve found another supplier. Here\'s how to spot it before it becomes permanent.',
    category: 'customer-analysis',
    readTime: 7,
    publishedAt: '2025-05-08',
    author: { name: 'ShareOfWallet', role: 'Data & Insights' },
    tags: ['customer analysis', 'churn', 'competitor intelligence', 'merchants'],
  },
  {
    slug: 'sales-gap-analysis-builders-merchants',
    title: 'Sales gap analysis for builders\' merchants: where your revenue is hiding',
    excerpt: 'Most builders\' merchants are sitting on 15-25% more revenue from their existing customer base. Sales gap analysis is how you find it.',
    category: 'share-of-wallet',
    readTime: 8,
    publishedAt: '2025-05-02',
    author: { name: 'ShareOfWallet', role: 'Data & Insights' },
    tags: ['sales gap analysis', 'builders merchants', 'revenue growth', 'UK wholesale'],
  },
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
