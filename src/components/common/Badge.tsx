import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'dark' | 'gray' | 'outline' | 'green';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'red',
  className = '',
}) => {
  const variantStyles = {
    red: 'bg-[#ee2326] text-white',
    dark: 'bg-[#181818] text-white',
    gray: 'bg-gray-100 text-gray-800 border border-gray-200',
    outline: 'border border-[#ee2326] text-[#ee2326] bg-[#ee2326]/5',
    green: 'bg-emerald-600 text-white',
  };

  return (
    <span className={`inline-flex items-center text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
