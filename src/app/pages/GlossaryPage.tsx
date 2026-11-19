import { glossaryGroups } from '../data/glossary';

// Every term has its own address (/glossary#term) and every definition is plain
// text in the page, so people, search engines and AI crawlers can read and link
// straight to any one of them.
export function GlossaryPage() {
  const total = glossaryGroups.reduce((n, g) => n + g.terms.length, 0);
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <h1
            className="mb-6"
            style={{ fontSize: '44px', fontWeight: '700', color: '#1e293b', lineHeight: '1.15' }}
          >
            Glossary of trade merchant terms
          </h1>
          <p className="max-w-[640px] mx-auto" style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}>
            {total} terms you will hear in trade merchants, wholesalers and tool hire, explained in plain English.
          </p>
        </div>
      </div>

      <div className="pb-24">
        <div className="max-w-[800px] mx-auto px-8">
          {/* Index: a real link to every term */}
          <nav aria-label="Glossary index" className="mt-4 rounded-2xl bg-[#f9fafb] p-6">
            {glossaryGroups.map((group) => (
              <p key={group.title} className="mb-2 last:mb-0" style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.9' }}>
                <strong style={{ color: '#1e293b' }}>{group.title}: </strong>
                {group.terms.map((t, i) => (
                  <span key={t.slug}>
                    <a href={`#${t.slug}`} className="hover:underline" style={{ color: '#1e3a8a', fontWeight: '500' }}>
                      {t.term}
                    </a>
                    {i < group.terms.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            ))}
          </nav>

          {glossaryGroups.map((group) => (
            <section key={group.title} className="mt-14">
              <h2 className="mb-4" style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b' }}>
                {group.title}
              </h2>
              <dl>
                {group.terms.map((t) => (
                  <div key={t.slug} id={t.slug} className="scroll-mt-24 border-b border-gray-200 py-6">
                    <dt>
                      <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                        {t.term}
                      </h3>
                      {t.alsoCalled && t.alsoCalled.length > 0 && (
                        <p className="mt-1" style={{ fontSize: '13px', color: '#9ca3af' }}>
                          Also called: {t.alsoCalled.join(', ')}
                        </p>
                      )}
                    </dt>
                    <dd className="mt-2" style={{ margin: 0 }}>
                      <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7' }}>{t.definition}</p>
                      {t.link && (
                        <p className="mt-3">
                          <a
                            href={t.link.href}
                            className="hover:underline"
                            style={{ fontSize: '15px', fontWeight: '600', color: '#1e3a8a' }}
                          >
                            {t.link.label} &rarr;
                          </a>
                        </p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] p-10 text-center">
            <h2 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>
              Want to see these measured on your own accounts?
            </h2>
            <p className="mb-6" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)' }}>
              Palm AI shows share of wallet, buying elsewhere and basket gaps customer by customer.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white rounded-lg hover:shadow-xl transition-all"
              style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a', padding: '12px 28px' }}
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
