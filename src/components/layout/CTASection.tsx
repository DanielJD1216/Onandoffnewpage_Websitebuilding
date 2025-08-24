import { Button } from '@/components/ui/button';
import { PageSection } from './PageSection';
import Link from 'next/link';

interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline';
  external?: boolean;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttons?: CTAButton[];
  className?: string;
}

export function CTASection({ 
  title, 
  subtitle, 
  buttons = [], 
  className = '' 
}: CTASectionProps) {
  return (
    <PageSection variant="cta" className={className}>
      <div className="text-center">
        <h2 className="text-3xl font-black text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-brand-ivory mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button
                key={index}
                size="lg"
                className={
                  button.variant === 'outline'
                    ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-green font-black px-8"
                    : "bg-white text-brand-green hover:bg-brand-ivory font-black px-8"
                }
                asChild
              >
                {button.external ? (
                  <a 
                    href={button.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {button.text}
                  </a>
                ) : (
                  <Link href={button.href}>
                    {button.text}
                  </Link>
                )}
              </Button>
            ))}
          </div>
        )}
      </div>
    </PageSection>
  );
}