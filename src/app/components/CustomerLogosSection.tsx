import logoGardnerScardifield from '../../assets/logo-gardner-scardifield.png';
import logoSouthCoast from '../../assets/logo-south-coast.png';
import logoBristan from '../../assets/logo-bristan.png';
import logoHansgrohe from '../../assets/logo-hansgrohe.png';
import logoGreenBros from '../../assets/logo-greenbros.png';
import logoCemex from '../../assets/logo-cemex.png';

interface Customer {
  name: string;
  logo?: string;
}

const customers: Customer[] = [
  { name: 'Gardner & Scardifield', logo: logoGardnerScardifield },
  { name: 'South Coast Building Supplies', logo: logoSouthCoast },
  { name: 'Bristan Group', logo: logoBristan },
  { name: 'hansgrohe', logo: logoHansgrohe },
  { name: 'Green Bros', logo: logoGreenBros },
  { name: 'CEMEX', logo: logoCemex },
];

export function CustomerLogosSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-8 py-[60px]">
        {/* Heading */}
        <h2
          className="text-center mb-12"
          style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#1e3a8a'
          }}
        >
          Trusted by merchants and suppliers across the trade
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-center justify-center h-[60px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm w-[140px] h-[60px] flex items-center justify-center overflow-hidden p-2">
                {customer.logo ? (
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span
                    className="text-center px-3"
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#374151',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {customer.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
