type Item =
  | { k: 'sched'; n: string; text: string }
  | { k: 'h'; text: string }
  | { k: 'n' | 'a'; n: string; text: string }
  | { k: 'd' | 't'; text: string };

// Schedules 3 and 4 of the Palm AI customer agreement, published for customers
// and for Meta. Keep in step with the signed agreement.
const ITEMS: Item[] = [
  { k: 'sched', n: "3", text: "WhatsApp Services" },
  { k: 'h', text: "1.\tDefinitions" },
  { k: "d", text: "In this Schedule 3:" },
  { k: "d", text: "**“Meta”** means Meta Platforms, Inc. and its affiliates, including the WhatsApp entities that contract with the Client and the Service Provider." },
  { k: "d", text: "**“Meta Terms”** means all terms and policies of Meta that apply to the WhatsApp Business Platform or to the use of it by the Client or the Service Provider, as updated from time to time, including the WhatsApp Business Terms of Service, the WhatsApp Business Solution Terms, the WhatsApp Business Messaging Policy, the WhatsApp Messaging Guidelines, the WhatsApp Business Data Processing Terms, the terms for hosting the WhatsApp Cloud API and Meta’s technology provider terms." },
  { k: "d", text: "**“WhatsApp Account”** means a WhatsApp Business Account and its phone number or numbers, registered with Meta." },
  { k: "d", text: "**“WhatsApp Services”** means the services under which the Service Provider connects to the WhatsApp Business Platform and sends, receives, stores and manages WhatsApp messages for the Client, including automated replies and AI-suggested replies that the Client’s staff confirm." },
  { k: "d", text: "**“Recipient”** means any person to or from whom messages are sent or received through the WhatsApp Services, including employees and representatives of the Client’s customers." },
  { k: "d", text: "**“Opt-in”** means a Recipient’s permission to receive messages from the Client on WhatsApp, given in a way that meets the Meta Terms and applicable law." },
  { k: "d", text: "**“Template”** means a message format that Meta must approve before it can be used to start a conversation with a Recipient." },
  { k: "d", text: "**“Message Data”** means the content of messages, Recipients’ names and phone numbers, delivery and read status, and related information received through the WhatsApp Services." },
  { k: "d", text: "**“Message Fees”** means the fees that Meta charges for messages and related services on the WhatsApp Business Platform." },
  { k: 'h', text: "2.\tNature of the WhatsApp Services" },
  { k: "n", n: "2.1", text: "The Service Provider provides the WhatsApp Services to the Client as a technology provider. Messages are sent to and received from the Client’s customers on the Client’s behalf and in the Client’s name." },
  { k: "n", n: "2.2", text: "The Service Provider will connect the Client’s WhatsApp Account to the Services using Meta’s onboarding tools. The Client will be asked to sign in to Meta and to grant the permissions the WhatsApp Services need." },
  { k: "n", n: "2.3", text: "If the Client does not have a WhatsApp Account, the Service Provider will help the Client to create its own during onboarding." },
  { k: 'h', text: "3.\tMeta Terms" },
  { k: "n", n: "3.1", text: "The Services depend on Meta’s platform. Before using the WhatsApp Services, the Client must accept the WhatsApp Business Solution Terms, the WhatsApp Business Terms of Service and any other Meta Terms that Meta requires it to accept, and it must comply with the Meta Terms at all times." },
  { k: "n", n: "3.2", text: "The Service Provider will comply with the Meta Terms that apply to it. To the extent the Meta Terms conflict with this Agreement in relation to the WhatsApp Services, the Meta Terms prevail." },
  { k: "n", n: "3.3", text: "The Service Provider may change the WhatsApp Services or this Schedule on written notice to the extent needed to comply with the Meta Terms, with applicable law or with a requirement of Meta." },
  { k: "n", n: "3.4", text: "Meta controls Template approval, quality ratings, messaging limits, account restrictions, pricing and availability. The Service Provider has no control over these and is not responsible for Meta’s decisions, but it will give the Client reasonable help to respond to them." },
  { k: 'h', text: "4.\tClient responsibilities" },
  { k: "n", n: "4.1", text: "The Client is responsible for:" },
  { k: "a", n: "(a)", text: "having a lawful basis under the Data Protection Legislation and a valid Opt-in for each Recipient before any message that the Client or the Service Provider starts is sent to that Recipient;" },
  { k: "a", n: "(b)", text: "keeping records of each Opt-in and giving the Service Provider evidence of it on request;" },
  { k: "a", n: "(c)", text: "honouring opt-outs straight away. The Service Provider will provide a way to record and apply them, and the Client must not override them;" },
  { k: "a", n: "(d)", text: "the content of every Template and message that it creates, approves or instructs the Service Provider to send;" },
  { k: "a", n: "(e)", text: "giving Recipients the privacy information they are entitled to, and making clear who the messages come from; and" },
  { k: "a", n: "(f)", text: "making sure its use of the WhatsApp Services complies with the Meta Terms, the Privacy and Electronic Communications (EC Directive) Regulations 2003, the UK GDPR, advertising and consumer law, and any rules that apply to its sector." },
  { k: "n", n: "4.2", text: "The Client must not use the WhatsApp Services to send unsolicited or bulk messages, content that is unlawful, misleading or prohibited by the Meta Terms, or content that infringes anyone’s rights. It must not use personal data it has no right to use, and it must not try to get round limits that Meta sets." },
  { k: "n", n: "4.3", text: "The Client must give Meta accurate information about its business and keep it up to date." },
  { k: 'h', text: "5.\tAutomated and AI-assisted messages" },
  { k: "n", n: "5.1", text: "The WhatsApp Services may use large language models to read and help interpret incoming messages. Replies that are sent automatically to Recipients are produced by the Service Provider’s software, not written directly by an AI model." },
  { k: "n", n: "5.2", text: "In one feature, AI suggests clarifying messages or upsell options to the Client’s staff. The Client’s staff must confirm each suggestion, or edit it, before it is sent, and the Service Provider will not send an AI-suggested message to a Recipient without that confirmation." },
  { k: "n", n: "5.3", text: "AI may misread a message, and its suggestions may be inaccurate or incomplete. The Service Provider does not warrant them. The Client’s staff are responsible for checking any suggestion that deals with prices, availability, legal, safety or compliance matters before they confirm it, and for the messages they send." },
  { k: "n", n: "5.4", text: "The Service Provider will give Recipients a way to reach a person at the Client, and will let the Client’s staff take over any conversation. The Client must make sure that Recipients are told they are dealing with an automated service where the law or the Meta Terms require it." },
  { k: "n", n: "5.5", text: "The Service Provider will use AI model providers only as sub-processors under Schedule 4, on written terms that stop them using Message Data for their own purposes, including training or improving their models." },
  { k: 'h', text: "6.\tMessage Data" },
  { k: "n", n: "6.1", text: "The Service Provider stores Message Data on the Client’s behalf so that the Client can see its conversation history and reports, and so that the AI features can use the context of a conversation. It keeps Message Data for 12 months after the message date unless the Client instructs otherwise or the law requires longer. The Client can ask for an export or deletion at any time." },
  { k: "n", n: "6.2", text: "The Service Provider will use Message Data only to provide the WhatsApp Services to the Client. It will not use Message Data, or anonymised, aggregated or derived versions of it, for its own purposes (including marketing, profiling or training any artificial intelligence model). It will not disclose Message Data to anyone other than sub-processors listed in Schedule 4 or as the law requires." },
  { k: "n", n: "6.3", text: "On expiry or termination, or earlier on the Client’s instruction, the Service Provider will within 30 days transfer Message Data in a commonly used format to the Client, to systems under the Client’s control or to a replacement provider that the Client names, and then delete its copies as paragraph 4 of Schedule 4 requires." },
  { k: "n", n: "6.4", text: "The Client’s WhatsApp Account remains the Client’s. On termination the Service Provider will end its access to it." },
  { k: 'h', text: "7.\tFees" },
  { k: "n", n: "7.1", text: "Where the Client uses its own WhatsApp Account, Meta charges Message Fees directly to the Client under the Meta Terms and the Client must pay them to Meta. The Service Provider’s own charges for the WhatsApp Services are set out in Schedule 2." },
  { k: "n", n: "7.2", text: "Where Meta charges the Service Provider for the Client’s messages, the Service Provider will charge the Client the Message Fees that Meta charges it for those messages, at cost. The Service Provider will send an itemised statement monthly in arrears and the Client must pay it under Clause 4." },
  { k: "n", n: "7.3", text: "Meta may change Message Fees. The Service Provider may pass on any change from the date it applies to the Service Provider, and will give notice where reasonably practicable. Message Fees are exclusive of VAT." },
  { k: "n", n: "7.4", text: "If Message Fees are unpaid, Meta may restrict the WhatsApp Account. The Service Provider is not liable for any resulting loss." },
  { k: 'h', text: "8.\tSuspension and ending this Schedule" },
  { k: "n", n: "8.1", text: "The Service Provider may suspend the WhatsApp Services in whole or in part, with immediate effect, if Meta suspends or restricts the WhatsApp Account or the Service Provider’s access; if the Service Provider reasonably believes the Client’s use breaches the Meta Terms or the law, or puts the Service Provider’s own access to Meta at risk; or if Message Fees owed by the Client are unpaid. It will tell the Client as soon as reasonably practicable and will restore the service once the cause is resolved." },
  { k: "n", n: "8.2", text: "If Meta stops the Service Provider from providing the WhatsApp Services, or permanently disables the Client’s WhatsApp Account, the Service Provider may end this Schedule by written notice. The rest of this Agreement continues, and fees for the WhatsApp Services stop from the date of the notice." },
  { k: 'h', text: "9.\tLiability" },
  { k: "n", n: "9.1", text: "The Service Provider is not liable for Meta’s acts or omissions, for outages of the WhatsApp Business Platform, for Templates that Meta rejects, for restrictions or Message Fees that Meta imposes, for delay or failure of delivery caused by Meta, mobile networks or Recipients’ devices, or for messages sent on the Client’s instruction." },
  { k: "n", n: "9.2", text: "The Client will indemnify the Service Provider against losses, fines and third-party claims arising from the Client’s breach of paragraph 3.1 or paragraph 4 of this Schedule." },
  { k: "n", n: "9.3", text: "Nothing in this Schedule limits or excludes any liability that cannot be limited or excluded by law." },
  { k: 'sched', n: "4", text: "Data Protection" },
  { k: 'h', text: "1.\tDefinitions and roles" },
  { k: "n", n: "1.1", text: "In this Schedule 4, **“Data Protection Legislation”** means the UK GDPR, the Data Protection Act 2018, the Privacy and Electronic Communications (EC Directive) Regulations 2003 and any other law in force in the United Kingdom relating to personal data, each as amended or replaced. **“Client Personal Data”** means personal data that the Service Provider processes on the Client’s behalf under this Agreement, including Message Data. **“Sub-processor”** means any third party that the Service Provider engages to process Client Personal Data. The terms controller, processor, data subject, personal data, personal data breach and processing have the meanings given in the UK GDPR." },
  { k: "n", n: "1.2", text: "For Client Personal Data, the Client is the controller and the Service Provider is the processor." },
  { k: "n", n: "1.3", text: "Each Party is a separate controller of the business contact and account details of the other’s staff that it holds for the purposes of this Agreement. The Service Provider’s use of such details is described in its privacy policy at palmai.io/privacy." },
  { k: "n", n: "1.4", text: "The Client acknowledges that Meta processes data under the Meta Terms, in some cases as an independent controller, and that the Service Provider does not control how Meta does so." },
  { k: 'h', text: "2.\tDetails of the processing" },
  { k: "n", n: "2.1", text: "**Subject matter and duration:** providing the Services during the Term, and until Client Personal Data is returned or deleted under paragraph 4." },
  { k: "n", n: "2.2", text: "**Nature and purpose:** hosting, storing, organising, analysing and transmitting data; sending, receiving and storing messages; generating recommendations and quotations, and suggesting replies for the Client’s staff to confirm (including using AI models); reporting; and support." },
  { k: "n", n: "2.3", text: "**Types of personal data:** names, job titles, email addresses, telephone numbers and WhatsApp numbers and profile names; message content; account and purchase information about the Client’s customers; delivery and read status; and usage information." },
  { k: "n", n: "2.5", text: "The Client must not use the Services to process special category personal data or data about criminal offences, unless the parties have agreed this in writing first." },
  { k: 'h', text: "3.\tThe Service Provider’s obligations" },
  { k: "n", n: "3.1", text: "The Service Provider will:" },
  { k: "a", n: "(a)", text: "process Client Personal Data only on the Client’s documented instructions, which are this Agreement and the Client’s use and configuration of the Services, unless the law requires otherwise (in which case it will tell the Client first, unless the law forbids it);" },
  { k: "a", n: "(b)", text: "tell the Client if it believes an instruction would breach the Data Protection Legislation;" },
  { k: "a", n: "(c)", text: "make sure everyone who is allowed to process Client Personal Data is bound by a duty of confidentiality;" },
  { k: "a", n: "(d)", text: "keep in place appropriate technical and organisational measures to protect Client Personal Data, including access controls, encryption in transit, separation of each client’s data and staff training;" },
  { k: "a", n: "(e)", text: "help the Client to respond to requests from data subjects, and forward any request it receives to the Client within 5 Business Days;" },
  { k: "a", n: "(f)", text: "help the Client to meet its obligations on security, personal data breach notification, data protection impact assessments and prior consultation with the Information Commissioner, taking into account the nature of the processing;" },
  { k: "a", n: "(g)", text: "tell the Client without undue delay, and aim to do so within 48 hours, after becoming aware of a personal data breach affecting Client Personal Data, giving the information it has; and" },
  { k: "a", n: "(h)", text: "make available the information needed to show compliance with this Schedule, and allow audits by the Client or its auditor on 30 days’ written notice, no more than once a year (unless after a personal data breach or at the request of a regulator), in business hours, without unreasonable disruption and subject to confidentiality." },
  { k: 'h', text: "4.\tReturn and deletion" },
  { k: "n", n: "4.1", text: "When the Services end, or earlier on the Client’s written instruction, the Service Provider will at the Client’s choice return Client Personal Data (as paragraph 6.3 of Schedule 3 provides for Message Data) or delete it, and will delete existing copies within 30 days unless the law requires it to keep them." },
  { k: 'h', text: "5.\tSub-processors" },
  { k: "n", n: "5.1", text: "The Client gives general authorisation for the Service Provider to use the Sub-processors listed in the Annex to this Schedule." },
  { k: "n", n: "5.2", text: "The Service Provider will give the Client at least 30 days’ notice of any new or replacement Sub-processor, by email to the Client’s account contact and by updating the list at palmai.io/sub-processors. The Client may object on reasonable data protection grounds within that time. If the parties cannot resolve the objection, either may end the affected Services without penalty." },
  { k: "n", n: "5.3", text: "The Service Provider will bind each Sub-processor by a written contract that gives at least the same protection as this Schedule, and remains responsible for each Sub-processor’s performance." },
  { k: 'h', text: "6.\tInternational transfers" },
  { k: "n", n: "6.1", text: "The Service Provider will not transfer Client Personal Data outside the United Kingdom unless it does so in accordance with the Data Protection Legislation, for example under UK adequacy regulations (including the UK–US data bridge where the recipient is certified), the UK International Data Transfer Agreement or the UK Addendum to the EU standard contractual clauses. The Client authorises transfers to the Sub-processors in the Annex on that basis." },
  { k: 'h', text: "7.\tThe Client’s obligations" },
  { k: "n", n: "7.1", text: "The Client confirms that it has a lawful basis for, and has given all notices needed for, the processing described in this Schedule, and that its instructions comply with the Data Protection Legislation." },
  { k: 'h', text: "Annex: Sub-processors" },
  { k: "t", text: "The current list of Sub-processors, with what each does and where it processes data, is published at palmai.io/sub-processors." },
];

// Renders **bold** segments.
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>
      )}
    </>
  );
}

function Block({ item }: { item: Item }) {
  const body = { fontSize: '15px', color: '#374151', lineHeight: '1.7' } as const;
  switch (item.k) {
    case 'sched':
      return (
        <h2
          id={`schedule-${item.n}`}
          className="mt-14 mb-4 pt-8 border-t border-gray-200"
          style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b' }}
        >
          Schedule {item.n}: {item.text}
        </h2>
      );
    case 'h':
      return (
        <h3 className="mt-8 mb-3" style={{ fontSize: '17px', fontWeight: '700', color: '#1e293b' }}>
          {item.text}
        </h3>
      );
    case 'n':
      return (
        <p className="mb-3 flex gap-4" style={body}>
          <span className="shrink-0" style={{ width: '40px', color: '#6b7280' }}>{item.n}</span>
          <span><Rich text={item.text} /></span>
        </p>
      );
    case 'a':
      return (
        <p className="mb-3 flex gap-4" style={{ ...body, marginLeft: '40px' }}>
          <span className="shrink-0" style={{ width: '32px', color: '#6b7280' }}>{item.n}</span>
          <span><Rich text={item.text} /></span>
        </p>
      );
    case 'd':
      return (
        <p className="mb-3" style={{ ...body, marginLeft: '56px' }}>
          <Rich text={item.text} />
        </p>
      );
    default:
      return (
        <p className="mb-3" style={body}>
          <Rich text={item.text} />
        </p>
      );
  }
}

export function CustomerTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[900px] mx-auto px-8 py-20">
        <h1 className="mb-3" style={{ fontSize: '40px', fontWeight: '700', color: '#1e293b' }}>
          Customer Terms: WhatsApp Services and Data Protection
        </h1>
        <p className="mb-4" style={{ fontSize: '17px', color: '#4b5563', lineHeight: '1.6' }}>
          These terms apply when you use the Palm AI WhatsApp messaging
          service under an agreement with Palm AI Limited. They form
          Schedules 3 and 4 of that agreement. If they conflict with the rest
          of the agreement, these terms prevail.
        </p>
        <p className="mb-10" style={{ fontSize: '14px', color: '#9ca3af' }}>
          Last updated: 26 November 2026
        </p>

        <div className="mb-10" style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7' }}>
          <h2 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
            About these terms
          </h2>
          <p className="mb-3">
            In these terms, the Service Provider is Palm AI Limited (company
            number 12300251, registered office 71–75 Shelton Street, Covent
            Garden, London, WC2H 9JQ). The Client is the customer that has
            entered into the agreement with us. The Agreement is that
            agreement, and Business Day, Clause, Schedule, Services, Term and
            Fees have the meanings given in it.
          </p>
          <p>
            Our <a href="/privacy" className="text-[#1e3a8a] underline">Privacy &amp; Cookie Policy</a> explains
            how we handle personal data on our website, and our{' '}
            <a href="/sub-processors" className="text-[#1e3a8a] underline">sub-processors list</a> shows
            the providers we use. Questions about these terms can be sent to{' '}
            <a href="mailto:info@palmai.io" className="text-[#1e3a8a] underline">info@palmai.io</a>.
          </p>
        </div>

        {ITEMS.map((item, i) => (
          <Block key={i} item={item} />
        ))}

        <p className="mt-16 pt-8 border-t border-gray-200" style={{ fontSize: '13px', color: '#9ca3af' }}>
          Palm AI Limited, registered in England and Wales, company number
          12300251. 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ
        </p>
      </div>
    </div>
  );
}
