export function CustomerLogosSection() {
  const customers = [
    "Gardner & Scardifield",
    "South Coast Building Suppies",
    "Bristan Group",
    "hansgrohe",
    "Green Bros",
   
  ];

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
          Built for the Trade, Trusted by the Trade
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {customers.map((customer, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center h-[60px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <div className="bg-white rounded-lg border border-gray-200 px-6 py-4 shadow-sm w-[140px] h-[60px] flex items-center justify-center">
                <span 
                  className="text-center"
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: '600', 
                    color: '#374151',
                    letterSpacing: '0.5px'
                  }}
                >
                  {customer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
