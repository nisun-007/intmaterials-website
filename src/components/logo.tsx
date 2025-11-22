import type React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40, white = false }) => {
  const strokeColor = white ? "#ffffff" : "#18181b";
  const fillColor = white ? "#ffffff" : "#18181b";
  const textColor = white ? "text-white" : "text-zinc-900";
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        className="flex-shrink-0"
      >
        {/* Outer hexagon representing crystalline structure */}
        <path
          d="M20 2 L32 10 L32 26 L20 34 L8 26 L8 10 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
        />

        {/* Inner molecular structure */}
        <circle cx="20" cy="12" r="2" fill={fillColor} />
        <circle cx="14" cy="20" r="2" fill={fillColor} />
        <circle cx="26" cy="20" r="2" fill={fillColor} />
        <circle cx="20" cy="28" r="2" fill={fillColor} />

        {/* Connecting bonds */}
        <line x1="20" y1="14" x2="16" y2="18" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="20" y1="14" x2="24" y2="18" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="14" y1="22" x2="20" y2="26" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="26" y1="22" x2="20" y2="26" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="16" y1="20" x2="24" y2="20" stroke={strokeColor} strokeWidth="1.5" />
      </svg>

      <div className={`text-2xl font-bold ${textColor} select-none`}>
        InterfaceMaterials
      </div>
    </div>
  );
};

export default Logo;
