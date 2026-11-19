import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqGroups } from '../data/faqs';

// Native <details>/<summary> accordion: every answer is in the page's HTML (so
// crawlers can read it) and it opens and closes without any JavaScript.
export function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <h1
            className="mb-6"
            style={{ fontSize: '44px', fontWeight: '700', color: '#1e293b', lineHeight: '1.15' }}
          >
            Frequently asked questions
          </h1>
          <p className="max-w-[640px] mx-auto" style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}>
            Straight answers about what Palm AI does, how it works with your systems, how your data is looked
            after, and how to get started.
          </p>
        </div>
      </div>

      <div className="pb-24">
        <div className="max-w-[800px] mx-auto px-8">
          {faqGroups.map((group) => (
            <section key={group.title} className="mt-14">
              <h2 className="mb-2" style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b' }}>
                {group.title}
              </h2>
              <div>
                {group.items.map((item) => (
                  <details key={item.q} className="group border-b border-gray-200">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', lineHeight: '1.4', margin: 0 }}>
                        {item.q}
                      </h3>
                      <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#1e3a8a] transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pb-6">
                      <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7' }}>{item.a}</p>
                      {item.link && (
                        <p className="mt-3">
                          <a
                            href={item.link.href}
                            className="inline-flex items-center gap-1 hover:underline"
                            style={{ fontSize: '15px', fontWeight: '600', color: '#1e3a8a' }}
                          >
                            {item.link.label}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] p-10 text-center">
            <h2 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>
              Still have a question?
            </h2>
            <p className="mb-6" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)' }}>
              Tell us what you'd like to know and we'll come back to you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white rounded-lg hover:shadow-xl transition-all"
              style={{ fontSize: '16px', fontWeight: '600', color: '#1e3a8a', padding: '12px 28px' }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
