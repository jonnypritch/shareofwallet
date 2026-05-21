export function CoinTowersIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Small tower (left) */}
      <ellipse cx="5" cy="16" rx="2.5" ry="1" fill="currentColor" opacity="0.3" />
      <rect x="2.5" y="16" width="5" height="6" fill="currentColor" opacity="0.6" />
      <ellipse cx="5" cy="16" rx="2.5" ry="1" fill="currentColor" />
      
      {/* Tall tower (middle) */}
      <ellipse cx="12" cy="8" rx="2.5" ry="1" fill="currentColor" opacity="0.3" />
      <rect x="9.5" y="8" width="5" height="14" fill="currentColor" opacity="0.6" />
      <ellipse cx="12" cy="8" rx="2.5" ry="1" fill="currentColor" />
      
      {/* Medium tower (right) */}
      <ellipse cx="19" cy="12" rx="2.5" ry="1" fill="currentColor" opacity="0.3" />
      <rect x="16.5" y="12" width="5" height="10" fill="currentColor" opacity="0.6" />
      <ellipse cx="19" cy="12" rx="2.5" ry="1" fill="currentColor" />
    </svg>
  );
}
