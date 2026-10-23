import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  light = false,
  className = '',
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs md:text-sm font-bold uppercase tracking-widest ${light ? 'text-red-400' : 'text-[#ee2326]'}`}>
          <span className="w-6 h-0.5 bg-[#ee2326]"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight ${light ? 'text-white' : 'text-[#181818]'}`}>
        {title}{' '}
        {highlight && <span className="text-[#ee2326]">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
