import { Check } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  statBadge: {
    text: string;
    color: 'green' | 'blue' | 'amber';
  };
  headline: string;
  description: string;
  mockup: ReactNode;
  bulletPoints: string[];
}

export function FeatureCard({ 
  icon, 
  statBadge, 
  headline, 
  description, 
  mockup, 
  bulletPoints 
}: FeatureCardProps) {
  const getBadgeColors = (color: 'green' | 'blue' | 'amber') => {
    switch (color) {
      case 'green':
        return { bg: '#10b981', text: '#ffffff' };
      case 'blue':
        return { bg: '#3b82f6', text: '#ffffff' };
      case 'amber':
        return { bg: '#f59e0b', text: '#ffffff' };
    }
  };

  const badgeColors = getBadgeColors(statBadge.color);

  return (
    <div 
      className="bg-white rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Icon and Badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        <div 
          className="rounded-full px-3 py-1"
          style={{ 
            backgroundColor: badgeColors.bg,
            color: badgeColors.text
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: '600' }}>
            {statBadge.text}
          </span>
        </div>
      </div>

      {/* Headline */}
      <h3 
        className="mb-4"
        style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          color: '#1e3a8a'
        }}
      >
        {headline}
      </h3>

      {/* Description */}
      <p 
        className="mb-6"
        style={{ 
          fontSize: '16px', 
          color: '#4b5563',
          lineHeight: '1.6'
        }}
      >
        {description}
      </p>

      {/* Mockup */}
      <div className="mb-6">
        {mockup}
      </div>

      {/* Bullet Points */}
      <div className="space-y-3">
        {bulletPoints.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-[#10b981] bg-opacity-10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#10b981]" strokeWidth={3} />
              </div>
            </div>
            <span style={{ fontSize: '14px', color: '#374151' }}>
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
