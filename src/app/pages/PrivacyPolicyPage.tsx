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

function SimpleTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse" style={{ fontSize: '13.5px' }}>
        <tbody>
          {rows.map(([left, right], idx) => (
            <tr key={idx} className="border-b border-gray-200 align-top">
              <td className="py-2.5 pr-4" style={{ fontWeight: '600', color: '#1e293b', width: '220px' }}>
                {left}
              </td>
              <td className="py-2.5" style={{ color: '#4b5563' }}>{right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[900px] mx-auto px-8 py-20">
        <h1 className="mb-3" style={{ fontSize: '40px', fontWeight: '700', color: '#1e293b' }}>
          Privacy and Cookie Policy
        </h1>
        <p className="mb-12" style={{ fontSize: '17px', color: '#4b5563', lineHeight: '1.6' }}>
          The privacy of our visitors is really important to us. We promise
          not to do anything weird with your data — as with any website
          there's some stuff the tech has to do to make it work for you and
          help your experience while you visit. Any concerns, please don't
          hesitate to get in touch.
        </p>

        <Section title="Background">
          <p className="mb-4">
            This Policy applies as between you, the User of this Web Site,
            and Palm AI Limited, the owner and provider of this Web Site.
            This Policy applies to our use of any and all Data collected by
            us in relation to your use of the Web Site and any Services or
            Systems therein.
          </p>
        </Section>

        <Section title="Important information">
          <p className="mb-4">
            Our website is not intended for children and we do not knowingly
            collect data relating to children.
          </p>
          <p className="mb-4">
            This Privacy Policy supplements our other policies (including our
            terms of use) and is not intended to override them.
          </p>
          <p className="mb-4">
            Palm AI Limited is the controller and responsible for your
            personal data (we, us or our).
          </p>
          <p className="mb-4">
            To assist you further in understanding this Privacy Policy, we
            have set out in Part 5 of Schedule 1 a glossary of terms used,
            examples of types of personal data we collect, how we use it, the
            lawful basis for processing such data and further details of
            your rights.
          </p>
          <p className="mb-4">
            We have appointed a data privacy manager (DPM). If you have any
            questions about this Privacy Policy, including any requests to
            exercise your legal rights, please contact our DPM in writing,
            either:
          </p>
          <p className="mb-2">By email to: <a href="mailto:info@palmai.io" className="text-[#1e3a8a] underline">info@palmai.io</a></p>
          <p className="mb-4">
            By post to: Data Privacy Manager, Palm AI Limited, 71-75 Shelton
            Street, Covent Garden, London, WC2H 9JQ
          </p>
          <p className="mb-4">
            You have the right to make a complaint at any time to the ICO
            (ico.org.uk). We would, however, appreciate the chance to deal
            with your concerns before you approach the ICO, so please contact
            us in the first instance.
          </p>
          <p className="mb-4">
            It is important that the data we hold about you is accurate and
            current, therefore please keep us informed of any changes to
            your personal data.
          </p>
          <p>
            Our website may include links to third-party websites,
            plug-ins and applications. By clicking on these links or
            enabling connections you may be allowing third parties to
            collect or share your personal data. We have no control over
            these third-party websites, plug-ins or applications and are not
            responsible for their privacy policies, therefore you should
            also read their privacy policy to understand what personal data
            they collect about you and how they use it.
          </p>
        </Section>

        <Section title="The data we collect about you">
          <p className="mb-4">
            We may collect, use, store and transfer the types of personal
            data about you listed in Part 1 of Schedule 1.
          </p>
          <p className="mb-4">
            We also collect, use and share aggregated data. However, if we
            combine aggregated data with your personal data so that it can
            directly or indirectly identify you, we treat this as your
            personal data.
          </p>
          <p className="mb-4">We do not collect any special categories of personal data.</p>
          <p>
            If we are required by law, or under the terms of a contract we
            have with you, to collect your personal data and you fail to
            provide it, we may not be able to enter into or perform the
            contract with you and we may have to cancel a product or
            service. We will notify you of this at the relevant time.
          </p>
        </Section>

        <Section title="How personal data is collected">
          <p className="mb-4">We collect personal data in the following ways:</p>
          <SimpleTable
            rows={[
              ['Direct interactions', 'You may provide personal data when you complete online forms, request products/services, subscribe to our services, create a user account, join our mailing list or otherwise correspond with us (by post, phone or email).'],
              ['Automated technology', 'We automatically collect personal data (technical and usage) when you browse or interact with our website, by using cookies, server logs and other similar technologies. We may also receive technical data about you if you visit other websites which use our cookies.'],
              ['Publicly available sources', 'We may collect personal data from publicly available sources such as Companies House, the Electoral Register and credit reference agencies, based inside the EU.'],
              ['Third parties', 'We may receive personal data from: (a) analytics providers based outside the EU (such as Google); (b) advertising networks; (c) search information providers; and (d) our suppliers such as payment providers, delivery services, and website support and maintenance providers.'],
            ]}
          />
        </Section>

        <Section title="How we use your personal data">
          <p className="mb-4">
            We will only use your personal data when the law allows us to.
            Most commonly, we will use your personal data:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1.5">
            <li>To perform the contract we are to enter into or have entered into with you;</li>
            <li>To comply with a legal obligation; and</li>
            <li>Where it is necessary to carry out our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>
          <p className="mb-4">
            Part 2 of Schedule 1 sets out the lawful basis we will rely on to
            process your personal data.
          </p>
          <p className="mb-4">
            We generally only rely on consent as a legal basis for
            processing your personal data to send email and SMS marketing
            communications, and you have the right to withdraw your consent
            at any time by contacting us. Please note that we may process
            your personal data for more than one lawful ground depending on
            the specific purpose for which we are using your data.
          </p>
          <p className="mb-4">
            We may analyse your personal data to form a view on what
            products and/or services we think may be of interest to you. You
            will only receive marketing communications from us if you have
            requested information from us or purchased services from us, if
            you consent to marketing at the time we collect your personal
            data and you have not subsequently opted out or withdrawn your
            consent, or if we have another basis to send you the marketing
            communications.
          </p>
          <p className="mb-4">
            We will not share your personal data with third parties for
            their marketing purposes.
          </p>
          <p className="mb-4">
            You can opt out of email marketing by clicking the unsubscribe
            button within the marketing email. You can also withdraw your
            consent to marketing at any time by contacting our DPM.
          </p>
          <p className="mb-4">
            Even if you opt out of receiving marketing, we may still use
            your personal data for other purposes provided we have a lawful
            basis to do so.
          </p>
          <p className="mb-4">
            We will only use your personal data for the purpose that we
            originally collected it for, unless we reasonably consider that
            we need to use it for another reason and that reason is
            compatible with the original purpose.
          </p>
          <p className="mb-4">
            If we need to use your personal data for an unrelated purpose,
            we will notify you and explain the legal basis which allows us
            to use your personal data in this manner.
          </p>
          <p>
            We may process your personal data (without your knowledge or
            consent) where this is required or permitted by law.
          </p>
        </Section>

        <Section title="Disclosure of your personal data">
          <p>
            We may have to share your personal data with third parties,
            further details of which are set out in Part 4 of Schedule 1. We
            require all third parties to respect the security of your
            personal data and to treat it in accordance with the law. We do
            not allow our third-party service providers to use your personal
            data for their own purposes. They can only process your
            personal data for specified purposes and in accordance with our
            instructions.
          </p>
        </Section>

        <Section title="International transfers">
          <p className="mb-4">We do not transfer your personal data outside the European Economic Area (EEA).</p>
          <p>
            Please contact us if you want further information on the
            specific mechanism used by us when transferring your personal
            data.
          </p>
        </Section>

        <Section title="Data security">
          <p className="mb-4">
            We have put in place appropriate security measures to prevent
            your personal data from being accidentally lost, used or
            accessed in an unauthorised way, altered or disclosed. We also
            limit access to your personal data to those employees, agents,
            contractors and other third parties who have a business need to
            know, and they can only process your personal data on our
            instructions and will be subject to a duty of confidentiality.
          </p>
          <p>
            We have procedures in place to deal with any suspected personal
            data breach and will notify you and any applicable regulator of
            a breach where we are legally required to do so.
          </p>
        </Section>

        <Section title="Data retention">
          <p className="mb-4">
            We will only retain your personal data for as long as necessary
            to fulfil the purposes we collected it for, including for the
            purposes of satisfying any legal, accounting, or reporting
            requirements.
          </p>
          <p className="mb-4">
            Details of retention periods for different aspects of your
            personal data are available in our retention policy, which you
            can request from us. However, we are legally required to keep
            basic information about our customers (including contact,
            identity, financial and transaction data) for six years after
            they cease being customers, for tax purposes.
          </p>
          <p>
            We may also anonymise your personal data (so that it can no
            longer be associated with you) for research or statistical
            purposes. We can use anonymised information indefinitely
            without further notice to you.
          </p>
        </Section>

        <Section title="Your legal rights">
          <p className="mb-4">
            You have certain rights in certain circumstances under data
            protection law. These are set out in full in Part 3 of Schedule
            1. If you wish to exercise any of your rights, please contact
            our DPM.
          </p>
          <p className="mb-4">
            You will not have to pay a fee to exercise any of your rights.
            However, if your request is clearly unfounded, repetitive or
            excessive, we may charge a reasonable fee for this information
            or refuse to comply with your request.
          </p>
          <p className="mb-4">
            We may request specific information from you to help us confirm
            your identity when you contact us. This is a security measure to
            ensure that personal data is not disclosed to any person who
            does not have the right to receive it.
          </p>
          <p>
            We try to respond to all legitimate requests within one month.
            Occasionally it may take us longer than a month if your request
            is particularly complex or you have made a number of requests.
            In this case, we will notify you and keep you updated.
          </p>
        </Section>

        <h2 className="mb-6 mt-16 pt-10 border-t border-gray-200" style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b' }}>
          Schedule 1: Personal Data
        </h2>

        <Section title="Part 1: Types of personal data">
          <SimpleTable
            rows={[
              ['Contact data', 'Billing address, delivery address, email address and telephone number'],
              ['Financial data', 'Bank account and payment card details'],
              ['Identity data', 'First name, last name, username or similar identifier'],
              ['Marketing and communication data', 'Your preferences in receiving marketing from us and our third parties, and your communication preferences'],
              ['Profile data', 'Your username and password, orders made by you, preferences, and feedback'],
              ['Technical data', 'Internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website'],
            ]}
          />
        </Section>

        <Section title="Part 2: Lawful basis for processing and processing activities">
          <p className="mb-4">The lawful bases we may rely on to process your personal data are:</p>
          <SimpleTable
            rows={[
              ['Consent', 'You have given your express consent for us to process your personal data for a specific purpose.'],
              ['Contract', 'The processing is necessary for us to perform our contractual obligations with you under our contract, or because you have asked us to take specific steps before entering into a contract with you.'],
              ['Legal obligation', 'The processing is necessary for us to comply with a legal or regulatory obligation.'],
              ['Legitimate interests', "The processing is necessary for our or a third party's legitimate interest, e.g. in order for us to provide the best service to you via our website. Before we process your personal data on this basis we make sure we consider and balance any potential impact on you, and we will not use your personal data on this basis where such impact outweighs our interest."],
            ]}
          />
          <p className="mb-4">
            Set out below are specific details of the processing activities
            we undertake with your personal data and the lawful basis for
            doing this.
          </p>
          <SimpleTable
            rows={[
              ['To register you as a new customer', 'Identity & contact data — to perform our contract with you.'],
              ['To process and deliver your order, manage payments, fees and charges and debt recovery', 'Identity, contact, financial, transaction and marketing & communications data — (i) to perform our contract with you; (ii) as necessary for our legitimate interest in recovering debts due to us.'],
              ['To manage our relationship with you, notify you about changes to our Terms or Privacy Policy, and ask you to leave a review or take a survey', 'Identity, contact, profile & marketing & communications data — (i) to perform our contract with you; (ii) as necessary to comply with a legal obligation; (iii) as necessary for our legitimate interests in keeping our records updated and analysing how customers use our products/services.'],
              ['To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)', 'Identity, contact & technical data — (i) as necessary for our legitimate interests in running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise; (ii) as necessary to comply with any legal obligations.'],
              ['To deliver relevant website content/advertisements to you and measure or understand the effectiveness of our advertising', 'Identity, contact, profile, usage, marketing & communications & technical data — as necessary for our legitimate interests in studying how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy.'],
              ['To use data analytics to improve our website, products/services, marketing, customer relationships and experiences', 'Technical & usage data — as necessary for our legitimate interests to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy.'],
              ['To make suggestions and recommendations to you about goods or services that may be of interest to you, including promotional offers', 'Identity, contact, technical, usage & profile data — as necessary for our legitimate interests to develop our products/services and grow our business.'],
            ]}
          />
        </Section>

        <Section title="Part 3: Your legal rights">
          <p className="mb-4">You have the following legal rights in relation to your personal data:</p>
          <SimpleTable
            rows={[
              ['Access your data', 'You can ask for access to and a copy of your personal data and can check we are lawfully processing it.'],
              ['Correction', 'You can ask us to correct any incomplete or inaccurate personal data we hold about you.'],
              ['Erasure', 'You can ask us to delete or remove your personal data where there is no good reason for us continuing to process it, you have successfully exercised your right to object, we may have processed your information unlawfully, or we are required to erase it to comply with local law. We may not always be able to comply for specific legal reasons, which will be notified to you at the time.'],
              ['Object', 'You can object to the processing of your personal data where we are relying on our legitimate interest (or those of a third party) as the basis for processing, if you feel it impacts your fundamental rights and freedoms, or where we are processing your personal data for direct marketing purposes.'],
              ['Restrict processing', 'You can ask us to suspend or restrict the processing of your personal data in certain circumstances, such as while we establish its accuracy or while you need us to hold it to establish, exercise or defend legal claims.'],
              ['Request a transfer', 'You can request a transfer of your personal data which is held in an automated manner, in a structured, commonly used, machine-readable format.'],
              ['Withdraw your consent', 'You can withdraw your consent at any time, where we are relying on consent to process your personal data. This does not affect the lawfulness of any processing carried out before you withdraw your consent.'],
            ]}
          />
        </Section>

        <Section title="Part 4: Third Parties">
          <SimpleTable
            rows={[
              ['Service providers', 'Acting as processors or controllers based in the EEA and around the world who provide services and IT and system administration services.'],
              ['Professional advisors', 'Acting as processors or joint controllers, including lawyers, bankers, auditors and insurers based in the United Kingdom who provide consultancy, banking, legal, insurance and accounting services.'],
              ['HM Revenue & Customs, regulators and other authorities', 'Acting as processors or joint controllers based in the EEA who require reporting of processing activities in certain circumstances.'],
              ['Third parties', 'Third parties whom we may choose to sell, transfer, or merge parts of our business or our assets with. If a change happens to our business, the new owners may use your personal data in the same way as set out in this Privacy Policy.'],
            ]}
          />
        </Section>

        <Section title="Part 5: Glossary">
          <SimpleTable
            rows={[
              ['Aggregated data', 'Information such as statistical or demographic data which may be derived from personal data, but which cannot by itself identify a data subject.'],
              ['Controller', 'A body that determines the purposes and means of processing personal data.'],
              ['Data subject', 'An individual living person identified by personal data (which will generally be you).'],
              ['Personal data', 'Information identifying a data subject from that data alone or with other data we may hold, but it does not include anonymised or aggregated data.'],
              ['Processor', 'A body that is responsible for processing personal data on behalf of a controller.'],
              ['Special categories of personal data', 'Information about race, ethnicity, political opinions, religious or philosophical beliefs, trade union membership, health, genetic, biometric data, sex life, or sexual orientation.'],
              ['ICO', "Information Commissioner's Office, the UK's supervisory authority for data protection issues."],
            ]}
          />
        </Section>

        <Section title="Changes to this Policy">
          <p>
            Palm AI reserves the right to change this Privacy Policy as we
            may deem necessary from time to time or as may be required by
            law. Any changes will be posted on the Web Site, and you are
            deemed to have accepted the terms of the Policy on your first
            use of the Web Site following the alterations.
          </p>
        </Section>

        <h2 className="mb-6 mt-16 pt-10 border-t border-gray-200" style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b' }}>
          Cookies
        </h2>

        <Section title="How we use cookies">
          <p className="mb-4">
            We do not currently use any analytics, marketing or tracking
            cookies on this website. The only cookies in use are those
            strictly necessary for the site to function — for example,
            remembering your cookie consent choice.
          </p>
          <p className="mb-4">
            As we add tools such as analytics or advertising in future, we
            will update this policy first and, where required, ask for your
            consent before any new cookies are set. Nothing on this page
            should be read as describing tools we don't yet use.
          </p>
          <p className="mb-4">
            You can choose to enable or disable cookies at any time in your
            web browser. By default, your browser will accept cookies,
            however this can be altered. For further details please consult
            the help menu in your browser.
          </p>
          <p>
            You may delete cookies at any time, however you may lose any
            information that enables you to access the Web Site more
            quickly.
          </p>
        </Section>

        <Section title="Third-party cookies">
          <p>
            We do not currently use any third-party analytics or advertising
            cookies (such as Google Analytics). This section will be
            updated with full details before any such tool is added to the
            site.
          </p>
        </Section>

        <p className="mt-16 pt-8 border-t border-gray-200" style={{ fontSize: '13px', color: '#9ca3af' }}>
          Palm AI Limited, 71–75 Shelton Street, Covent Garden, London, WC2H
          9JQ
        </p>
      </div>
    </div>
  );
}
