// updated
import hansgroheLogo from '../../assets/logo-hansgrohe.png';
import bristanLogo from '../../assets/logo-bristan.png';
import greenBrosLogo from '../../assets/logo-greenbros.png';
import gardnerLogo from '../../assets/logo-gardner-scardifield.png';
import southCoastLogo from '../../assets/logo-south-coast.png';
import wolseleyLogo from '../../assets/logo-wolseley.png';
import cemexLogo from '../../assets/logo-cemex.png';

const logos = [
  { src: gardnerLogo, alt: 'Gardner & Scardifield', dark: false },
  { src: southCoastLogo, alt: 'South Coast Building Supplies', dark: false },
  { src: bristanLogo, alt: 'Bristan Group', dark: false },
  { src: hansgroheLogo, alt: 'hansgrohe', dark: true },
  { src: greenBrosLogo, alt: 'Green Bros', dark: true },
  { src: wolseleyLogo, alt: 'Wolseley', dark: false },
  { src: cemexLogo, alt: 'CEMEX', dark: false },
];

export function CustomerLogosSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-8 py-[60px]">
        <h2
          className="text-center mb-12"
          style={{ fontSize: '28px', fontWeight: '600', color: '#1e3a8a' }}
        >
          Trusted by leading trade & wholesale businesses
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-[56px]"
            >
              <div
                className="flex items-center justify-center w-full h-full rounded-lg px-3 py-2"
                style={{ backgroundColor: logo.dark ? '#1d1d31' : 'transparent' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ maxHeight: '36px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
