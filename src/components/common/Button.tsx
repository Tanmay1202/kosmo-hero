import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer text-center';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 shadow-sm',
  };

  const variantStyles = {
    primary: 'bg-[#ee2326] text-white hover:bg-[#d30000] shadow-sm hover:shadow-md hover:shadow-[#ee2326]/20 active:translate-y-0.5',
    secondary: 'bg-[#181818] text-white hover:bg-[#303030] active:translate-y-0.5',
    outline: 'border-2 border-[#ee2326] text-[#ee2326] hover:bg-[#ee2326] hover:text-white',
    ghost: 'text-gray-700 hover:text-[#ee2326] hover:bg-gray-100',
    white: 'bg-white text-[#181818] hover:bg-gray-100 shadow-sm active:translate-y-0.5',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedStyles}>
      {children}
    </button>
  );
};
