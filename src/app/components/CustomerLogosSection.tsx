// updated
import hansgroheLogo from '../../assets/logo-hansgrohe.png';
import bristanLogo from '../../assets/logo-bristan.png';
import greenBrosLogo from '../../assets/logo-greenbros.png';
import gardnerLogo from '../../assets/logo-gardner-scardifield.png';
import southCoastLogo from '../../assets/logo-south-coast.png';
import wolseleyLogo from '../../assets/logo-wolseley.png';
import cemexLogo from '../../assets/logo-cemex.png';

const logos = [
  { src: gardnerLogo, alt: 'Gardner & Scardifield' },
  { src: southCoastLogo, alt: 'South Coast Building Supplies' },
  { src: bristanLogo, alt: 'Bristan Group' },
  { src: hansgroheLogo, alt: 'hansgrohe' },
  { src: greenBrosLogo, alt: 'Green Bros' },
  { src: wolseleyLogo, alt: 'Wolseley' },
  { src: cemexLogo, alt: 'CEMEX' },
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center rounded-xl px-4 py-3"
              style={{ backgroundColor: '#ececf0', height: '64px' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ maxHeight: '32px', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
