import { cn } from '@/lib/utils';

interface PageSectionProps {
  children: React.ReactNode;
  variant?: 'hero' | 'default' | 'gray' | 'cta';
  className?: string;
  containerClassName?: string;
}

const sectionVariants = {
  hero: 'bg-gradient-to-b from-brand-ivory/30 to-white py-16 lg:py-24',
  default: 'py-16 lg:py-24',
  gray: 'py-16 bg-gray-50',
  cta: 'py-16 bg-brand-green'
};

export function PageSection({ 
  children, 
  variant = 'default', 
  className = '', 
  containerClassName = '' 
}: PageSectionProps) {
  return (
    <section className={cn(sectionVariants[variant], className)}>
      <div className={cn('container mx-auto px-4', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function PageHero({ 
  children, 
  className = '',
  containerClassName = ''
}: Omit<PageSectionProps, 'variant'>) {
  return (
    <PageSection 
      variant="hero" 
      className={className}
      containerClassName={containerClassName}
    >
      {children}
    </PageSection>
  );
}