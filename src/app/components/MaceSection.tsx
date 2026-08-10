// Swap for the real MACE logo file once added to assets, e.g.:
// import maceLogo from '../../assets/icon-mace-logo-white.png';

export function MaceSection() {
  return (
    <section className="w-full py-[100px]" style={{ backgroundColor: '#1e3a8a' }}>
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <h2
          className="mb-4"
          style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff' }}
        >
          Works with your existing systems
        </h2>
        <p
          className="max-w-[640px] mx-auto mb-10"
          style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6' }}
        >
          Palm AI connects to your data however it lives — CSV exports, API
          connections, or direct ERP integration. No rip and replace. No
          six-month implementation. You can be up and running in days.
        </p>

        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl px-6 py-5 mb-5">
          {/* <img src={maceLogo} alt="MACE Systems" className="h-6" /> */}
          <span style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff' }}>
            MACE Systems
          </span>
          <span className="w-px h-5 bg-white/20" />
          <a
            href="https://mace.systems"
            style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff' }}
            className="hover:underline"
          >
            Fully integrated with MACE Systems — live in under 1 hour
          </a>
        </div>

        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
          Using a different system? We'll connect to it. Talk to us about
          your setup.
        </p>
      </div>
    </section>
  );
}
