export function StatsSection() {
  const stats = [
    { value: '£14M', label: 'Revenue opportunities identified' },
    { value: '12-17%', label: 'Average wallet share increase' },
    { value: '6+', label: 'Distributors using platform' },
    { value: '12hrs', label: 'Saved per rep, per week' },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#1e3a8a] to-[#1e293b]">
      <div className="max-w-[1440px] mx-auto px-8 py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div 
                className="mb-3"
                style={{ 
                  fontSize: '48px', 
                  fontWeight: '700', 
                  color: '#ffffff'
                }}
              >
                {stat.value}
              </div>
              <div 
                style={{ 
                  fontSize: '16px', 
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
