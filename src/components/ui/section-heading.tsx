interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  level?: 1 | 2 | 3;
  centered?: boolean;
  className?: string;
  variant?: 'default' | 'premium' | 'compact';
}

export function SectionHeading({ 
  title, 
  subtitle,
  level = 2, 
  centered = true,
  className = '',
  variant = 'default'
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const headingSizes = {
    1: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
    2: variant === 'premium' ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' : variant === 'compact' ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl' : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl', 
    3: variant === 'compact' ? 'text-base md:text-lg' : 'text-lg'
  };

  const headingMargins = {
    1: variant === 'premium' ? 'mb-8' : 'mb-6',
    2: variant === 'compact' ? 'mb-8' : 'mb-16',
    3: 'mb-2'
  };

  const containerClasses = centered ? 'text-center' : '';
  
  const headingStyles = variant === 'premium' 
    ? 'bg-gradient-to-r from-brand-green via-brand-green/90 to-brand-green bg-clip-text text-transparent' 
    : 'text-brand-green';

  return (
    <div className={`relative ${containerClasses} ${className}`}>
      {/* Korean-style decorative line for premium variant - positioned safely above */}
      {variant === 'premium' && centered && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      )}
      
      <HeadingTag className={`${headingSizes[level]} font-black ${headingStyles} leading-tight ${headingMargins[level]} relative`}>
        {title}
      </HeadingTag>
      
      {subtitle && (
        <div className="relative">
          <p className={`${
            variant === 'premium' 
              ? 'text-xl md:text-2xl text-gray-600 font-semibold' 
              : variant === 'compact'
              ? 'text-lg font-medium'
              : 'text-xl font-medium'
          } max-w-4xl mx-auto leading-relaxed text-inherit`}>
            {subtitle}
          </p>
          
          {/* Korean-style bottom accent line for premium - safely positioned below */}
          {variant === 'premium' && centered && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-brand-green/25 to-transparent" />
          )}
        </div>
      )}
    </div>
  );
}