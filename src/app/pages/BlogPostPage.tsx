import { ArrowLeft, Clock, Tag, Share2, Linkedin } from 'lucide-react';
import { blogPosts, categoryLabels, categoryColors, BlogPost } from '../data/blogPosts';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (page: string, slug?: string) => void;
}

export function BlogPostPage({ slug, onNavigate }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>Article not found</h1>
          <button onClick={() => onNavigate('blog')} style={{ color: '#1e3a8a', fontWeight: '600' }}>
            ← Back to articles
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const related = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Back nav */}
      <div className="border-b border-gray-100">
        <div className="max-w-[800px] mx-auto px-8 py-4">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center gap-2 hover:text-[#1e3a8a] transition-colors"
            style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            All articles
          </button>
        </div>
      </div>

      {/* Article header */}
      <div className="max-w-[800px] mx-auto px-8 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="px-3 py-1 rounded-full"
            style={{
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: `${categoryColors[post.category]}15`,
              color: categoryColors[post.category],
            }}
          >
            {categoryLabels[post.category]}
          </span>
          <div className="flex items-center gap-1" style={{ fontSize: '13px', color: '#9ca3af' }}>
            <Clock style={{ width: '13px', height: '13px' }} />
            {post.readTime} min read
          </div>
          <span style={{ fontSize: '13px', color: '#9ca3af' }}>{formatDate(post.publishedAt)}</span>
        </div>

        <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#1e293b', lineHeight: '1.2', marginBottom: '20px' }}>
          {post.title}
        </h1>

        <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.7', marginBottom: '32px' }}>
          {post.excerpt}
        </p>

        {/* Share bar */}
        <div className="flex items-center justify-between py-4 border-t border-b border-gray-100">
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            By <span style={{ fontWeight: '600', color: '#1e293b' }}>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <span style={{ fontSize: '13px', color: '#6b7280' }}>Share:</span>
            <button className="flex items-center gap-1.5 bg-[#0077b5] text-white rounded-lg px-3 py-1.5 hover:opacity-90 transition-opacity"
              style={{ fontSize: '12px', fontWeight: '600' }}>
              <Linkedin style={{ width: '13px', height: '13px' }} />
              LinkedIn
            </button>
            <button className="flex items-center gap-1.5 bg-gray-100 text-gray-700 rounded-lg px-3 py-1.5 hover:bg-gray-200 transition-colors"
              style={{ fontSize: '12px', fontWeight: '600' }}>
              <Share2 style={{ width: '13px', height: '13px' }} />
              Copy link
            </button>
          </div>
        </div>
      </div>

      {/* Article body placeholder */}
      <div className="max-w-[800px] mx-auto px-8 pb-16">
        <div className="prose-content space-y-6" style={{ fontSize: '17px', color: '#374151', lineHeight: '1.8' }}>
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div className="bg-gradient-to-br from-[#f0f4ff] to-[#f9fafb] rounded-2xl p-12 text-center border border-blue-100">
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>📝</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e3a8a', marginBottom: '8px' }}>
                Full article coming soon
              </h3>
              <p style={{ fontSize: '15px', color: '#6b7280' }}>
                This article is being written. Add it to the <code style={{ backgroundColor: '#e8ecf8', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>blogPosts</code> data with a <code style={{ backgroundColor: '#e8ecf8', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>content</code> field to publish it.
              </p>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100">
          {post.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1"
              style={{ fontSize: '12px', color: '#6b7280' }}>
              <Tag style={{ width: '11px', height: '11px' }} />
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-8 text-center">
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
            See this in action for your business
          </h3>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>
            Find out exactly where your revenue opportunities are hiding.
          </p>
          <button className="bg-white rounded-lg hover:bg-blue-50 transition-colors"
            style={{ fontSize: '15px', fontWeight: '600', color: '#1e3a8a', padding: '12px 28px' }}>
            Book a Demo
          </button>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
              Related articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map(rel => (
                <div
                  key={rel.slug}
                  className="border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-[#3b82f6] hover:shadow-md transition-all"
                  onClick={() => onNavigate('blog-post', rel.slug)}
                >
                  <span className="text-xs font-semibold" style={{ color: categoryColors[rel.category] }}>
                    {categoryLabels[rel.category]}
                  </span>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', marginTop: '6px', lineHeight: '1.4' }}>
                    {rel.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
