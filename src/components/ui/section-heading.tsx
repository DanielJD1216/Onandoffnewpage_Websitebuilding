interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  level?: 1 | 2 | 3;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle,
  level = 2, 
  centered = true,
  className = '' 
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const headingSizes = {
    1: 'text-4xl md:text-6xl',
    2: 'text-3xl md:text-4xl', 
    3: 'text-lg'
  };

  const headingMargins = {
    1: 'mb-6',
    2: 'mb-16',
    3: 'mb-2'
  };

  const containerClasses = centered ? 'text-center' : '';

  return (
    <div className={`${containerClasses} ${className}`}>
      <HeadingTag className={`${headingSizes[level]} font-black text-brand-green leading-tight ${headingMargins[level]}`}>
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}