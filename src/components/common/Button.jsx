import React from 'react';

/**
 * Reusable Button Component adhering to Houseziffy's luxury warm terracotta design system.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer';

  const variants = {
    // Signature warm terracotta button matching screenshots 3 & 4
    primary:
      'bg-[#7E422C] text-white hover:bg-[#6B3622] shadow-sm hover:shadow-md focus-visible:ring-[#7E422C]',
    secondary:
      'bg-stone-900 text-white hover:bg-stone-800 shadow-sm focus-visible:ring-stone-900',
    outline:
      'border border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-stone-400 focus-visible:ring-stone-400',
    ghost:
      'text-stone-700 hover:bg-stone-100 hover:text-stone-900 focus-visible:ring-stone-300',
    subtle:
      'bg-[#FAF1ED] text-[#7E422C] hover:bg-[#F5E6DF] focus-visible:ring-[#7E422C]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
