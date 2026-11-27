function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
        {title}
      </h2>
      <div style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7' }}>{children}</div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[900px] mx-auto px-8 py-20">
        <h1 className="mb-3" style={{ fontSize: '40px', fontWeight: '700', color: '#1e293b' }}>
          Website Terms of Use
        </h1>
        <p className="mb-4" style={{ fontSize: '17px', color: '#4b5563', lineHeight: '1.6' }}>
          These terms cover your use of the Palm AI website at palmai.io.
          Please read them before you use it.
        </p>
        <p className="mb-12" style={{ fontSize: '14px', color: '#9ca3af' }}>
          Last updated: 26 November 2026
        </p>

        <Section title="Who we are">
          <p>
            This website is run by Palm AI Limited, a company registered in
            England and Wales under number 12300251. Our registered office is
            71–75 Shelton Street, Covent Garden, London, WC2H 9JQ. You can
            contact us at{' '}
            <a href="mailto:info@palmai.io" className="text-[#1e3a8a] underline">info@palmai.io</a>.
          </p>
        </Section>

        <Section title="About these terms">
          <p className="mb-4">
            By using this website you agree to these terms. If you do not
            agree, please do not use it.
          </p>
          <p>
            These terms cover the website only. If you are a customer, your
            use of our services is governed by your agreement with us and by
            our{' '}
            <a href="/customer-terms" className="text-[#1e3a8a] underline">Customer Terms</a>, not
            by these terms.
          </p>
        </Section>

        <Section title="Using the website">
          <p className="mb-4">
            You may use the website for lawful purposes only. You must not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">use it in any way that is unlawful, fraudulent or harmful;</li>
            <li className="mb-2">try to gain unauthorised access to the website, our servers or any connected systems;</li>
            <li className="mb-2">introduce viruses or other harmful or malicious material;</li>
            <li className="mb-2">copy or collect content from the website by automated means, such as scraping, without our written permission;</li>
            <li className="mb-2">send spam or false, misleading or automated submissions through our contact form; or</li>
            <li>do anything that could damage, overload or interfere with the website.</li>
          </ul>
          <p>
            We may suspend or restrict access to the website at any time,
            including if we think these terms have been broken.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p className="mb-4">
            The website, its content, design, logos and the Palm AI name are
            owned by Palm AI Limited or its licensors and are protected by
            intellectual property laws. All rights are reserved.
          </p>
          <p>
            You may view the website and print or download extracts for your
            own business use, provided you keep any copyright notices. You
            must not copy, republish, sell or otherwise use our content for
            any other purpose without our written permission.
          </p>
        </Section>

        <Section title="Information on the website">
          <p className="mb-4">
            The website gives general information about Palm AI and our
            services, and the blog and guides give general guidance. None of
            it is legal, financial or professional advice, and you should not
            rely on it as if it were.
          </p>
          <p>
            We take reasonable care to keep the website accurate and up to
            date, but we do not promise that it is complete, current or free
            of errors. Examples, figures and illustrations are for
            explanation only. Features and services described may change.
          </p>
        </Section>

        <Section title="Links to other websites">
          <p>
            The website may link to other websites. We do not control them and
            are not responsible for their content, privacy practices or
            availability. A link does not mean we endorse the site.
          </p>
        </Section>

        <Section title="Our liability">
          <p className="mb-4">
            Nothing in these terms limits or excludes our liability for death
            or personal injury caused by our negligence, for fraud or
            fraudulent misrepresentation, or for anything else that cannot be
            limited or excluded by law. If you are a consumer, your legal
            rights are not affected.
          </p>
          <p className="mb-4">
            Subject to that, we are not liable for any loss arising from your
            use of, or inability to use, the website or from your reliance on
            its content, including loss of profit, revenue, business,
            goodwill or data, or any indirect or consequential loss.
          </p>
          <p>
            We do not guarantee that the website will be available at all
            times or free from viruses or other harmful material. You are
            responsible for protecting your own devices and data.
          </p>
        </Section>

        <Section title="Your information">
          <p>
            How we use personal data collected through the website is
            explained in our{' '}
            <a href="/privacy" className="text-[#1e3a8a] underline">Privacy &amp; Cookie Policy</a>.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may change the website and these terms from time to time. The
            current version is always on this page, with the date it was last
            updated. By continuing to use the website after a change, you
            accept the updated terms.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms, and any dispute arising from them or from your use
            of the website, are governed by the laws of England and Wales,
            and the courts of England and Wales have jurisdiction. If you are
            a consumer living in Scotland or Northern Ireland, you may also
            bring proceedings in the courts there.
          </p>
        </Section>

        <p className="mt-16 pt-8 border-t border-gray-200" style={{ fontSize: '13px', color: '#9ca3af' }}>
          Palm AI Limited, registered in England and Wales, company number
          12300251. 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ
        </p>
      </div>
    </div>
  );
}
