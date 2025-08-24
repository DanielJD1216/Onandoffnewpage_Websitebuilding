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
    1: variant === 'premium' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl',
    2: variant === 'premium' ? 'text-4xl md:text-5xl' : variant === 'compact' ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl', 
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
      {/* Korean-style decorative line for premium variant */}
      {variant === 'premium' && centered && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-4" />
      )}
      
      <HeadingTag className={`${headingSizes[level]} font-black ${headingStyles} leading-tight ${headingMargins[level]} relative`}>
        {title}
        {/* Korean-style accent dot */}
        {variant === 'premium' && (
          <span className="inline-block w-2 h-2 bg-brand-gold rounded-full ml-2 -translate-y-1" />
        )}
      </HeadingTag>
      
      {subtitle && (
        <div className="relative">
          <p className={`${
            variant === 'premium' 
              ? 'text-xl md:text-2xl text-gray-600 font-semibold' 
              : variant === 'compact'
              ? 'text-lg text-gray-700 font-medium'
              : 'text-xl text-gray-700 font-medium'
          } max-w-4xl mx-auto leading-relaxed`}>
            {subtitle}
          </p>
          
          {/* Korean-style bottom accent line for premium */}
          {variant === 'premium' && centered && (
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />
          )}
        </div>
      )}
    </div>
  );
}