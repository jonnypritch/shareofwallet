import { useState } from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts, categoryLabels, categoryColors, BlogPost } from '../data/blogPosts';

interface BlogPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'basket-analysis', 'customer-analysis', 'share-of-wallet', 'sales-strategy'];

  const filtered = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#f0f4ff] to-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-8 py-20">
          <div className="max-w-[640px]">
            <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Insights & Education
            </div>
            <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1e293b', lineHeight: '1.1', marginBottom: '16px' }}>
              Data that drives revenue
            </h1>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}>
              Practical guides on basket analysis, customer data, and growing share of wallet — written for merchants, wholesalers and distributors.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 rounded-full px-4 py-1.5 transition-all duration-200"
                style={{
                  fontSize: '13px',
                  fontWeight: activeCategory === cat ? '600' : '400',
                  backgroundColor: activeCategory === cat
                    ? (cat === 'all' ? '#1e3a8a' : categoryColors[cat as BlogPost['category']])
                    : '#f3f4f6',
                  color: activeCategory === cat ? '#ffffff' : '#374151',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {cat === 'all' ? 'All Articles' : categoryLabels[cat as BlogPost['category']]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p style={{ fontSize: '18px', color: '#6b7280' }}>No articles in this category yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#3b82f6] hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => onNavigate('blog-post', post.slug)}
              >
                {/* Category bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: categoryColors[post.category] }}
                />

                <div className="p-6">
                  {/* Category + read time */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-2.5 py-1 rounded-full"
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        backgroundColor: `${categoryColors[post.category]}15`,
                        color: categoryColors[post.category],
                      }}
                    >
                      {categoryLabels[post.category]}
                    </span>
                    <div className="flex items-center gap-1" style={{ fontSize: '12px', color: '#9ca3af' }}>
                      <Clock style={{ width: '12px', height: '12px' }} />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2
                    className="mb-3 group-hover:text-[#1e3a8a] transition-colors"
                    style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', lineHeight: '1.4' }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                      {formatDate(post.publishedAt)}
                    </span>
                    <div className="flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a8a' }}>
                      Read article
                      <ArrowRight style={{ width: '14px', height: '14px' }} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Coming Soon Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-10 text-center">
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
            New articles every week
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}>
            Basket analysis, customer data, share of wallet — practical guides for trade merchants and wholesalers.
          </p>
          <button
            className="bg-white rounded-lg hover:bg-blue-50 transition-colors"
            style={{ fontSize: '15px', fontWeight: '600', color: '#1e3a8a', padding: '12px 28px' }}
          >
            Get notified of new articles
          </button>
        </div>
      </div>
    </div>
  );
}
