// Providers that process customer personal data for Palm AI. Keep this list
// in step with Schedule 4 of the customer agreement and give customers
// 30 days' notice before adding or replacing a provider.
const PROVIDERS: { name: string; location: string; purpose: string; data: string }[] = [
  {
    name: 'Amazon Web Services',
    location: 'United Kingdom',
    purpose: 'Database hosting, and hosting of self-hosted open-source AI models',
    data: 'Message data, customer account and contact data',
  },
  {
    name: 'Vercel Inc.',
    location: 'United States and its global network',
    purpose: 'Website and application hosting',
    data: 'Website and application traffic, including IP addresses',
  },
  {
    name: 'Hostinger',
    location: 'Hostinger data centres',
    purpose: 'Email',
    data: 'Names, email addresses and email content',
  },
];

// Add a provider here only after customers have had 30 days' notice, and move
// it into PROVIDERS above. Example entries (not live):
//   Anthropic, Google: AI processing where selected for a feature or customer.

export function SubProcessorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[900px] mx-auto px-8 py-20">
        <h1 className="mb-3" style={{ fontSize: '40px', fontWeight: '700', color: '#1e293b' }}>
          Sub-processors
        </h1>
        <p className="mb-4" style={{ fontSize: '17px', color: '#4b5563', lineHeight: '1.6' }}>
          To provide Palm AI, we use a small number of providers that process
          personal data on our customers' behalf. This is the current list.
        </p>
        <p className="mb-12" style={{ fontSize: '14px', color: '#9ca3af' }}>
          Last updated: 26 November 2026
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-left" style={{ fontSize: '14px' }}>
            <thead>
              <tr className="border-b-2 border-gray-300" style={{ color: '#1e293b' }}>
                <th className="py-3 pr-4 font-semibold">Provider</th>
                <th className="py-3 pr-4 font-semibold">Location</th>
                <th className="py-3 pr-4 font-semibold">Purpose</th>
                <th className="py-3 font-semibold">Data</th>
              </tr>
            </thead>
            <tbody style={{ color: '#374151' }}>
              {PROVIDERS.map((p) => (
                <tr key={p.name} className="border-b border-gray-200 align-top">
                  <td className="py-3 pr-4 font-semibold" style={{ color: '#1e293b' }}>{p.name}</td>
                  <td className="py-3 pr-4">{p.location}</td>
                  <td className="py-3 pr-4">{p.purpose}</td>
                  <td className="py-3">{p.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7' }}>
          <h2 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
            Changes to this list
          </h2>
          <p className="mb-8">
            We give customers at least 30 days' notice before adding or
            replacing a sub-processor, by email to the customer's account
            contact and by updating this page. A customer may object on
            reasonable data protection grounds within that time. If we cannot
            resolve the objection, either party may end the affected services
            without penalty.
          </p>

          <h2 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
            International transfers
          </h2>
          <p className="mb-8">
            Where personal data is transferred outside the United Kingdom, we
            make sure a lawful transfer mechanism is in place, such as UK
            adequacy regulations (including the UK–US data bridge, where the
            provider is certified under it), the UK International Data
            Transfer Agreement or the UK Addendum to the EU standard
            contractual clauses.
          </p>

          <h2 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
            WhatsApp
          </h2>
          <p className="mb-8">
            WhatsApp messages are carried by WhatsApp, which is part of Meta,
            under Meta's own terms. See our{' '}
            <a href="/customer-terms" className="text-[#1e3a8a] underline">Customer Terms</a> for how
            we handle message data.
          </p>

          <h2 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
            Questions
          </h2>
          <p>
            Contact us at{' '}
            <a href="mailto:info@palmai.io" className="text-[#1e3a8a] underline">info@palmai.io</a>.
          </p>
        </div>

        <p className="mt-16 pt-8 border-t border-gray-200" style={{ fontSize: '13px', color: '#9ca3af' }}>
          Palm AI Limited, registered in England and Wales, company number
          12300251. 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ
        </p>
      </div>
    </div>
  );
}
