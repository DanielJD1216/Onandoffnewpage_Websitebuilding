import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'default' | 'large' | 'benefit';
  className?: string;
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  className = '' 
}: FeatureCardProps) {
  const iconSizes = {
    default: 'w-12 h-12',
    large: 'w-16 h-16', 
    benefit: 'w-12 h-12'
  };

  const iconBgColors = {
    default: 'bg-brand-green',
    large: 'bg-brand-green/10',
    benefit: 'bg-brand-green'
  };

  const iconTextColors = {
    default: 'text-white',
    large: 'text-brand-green',
    benefit: 'text-white'
  };

  const titleSizes = {
    default: 'text-lg',
    large: 'text-xl',
    benefit: 'font-black'
  };

  return (
    <Card className={`p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className={`${iconSizes[variant]} ${iconBgColors[variant]} rounded-full mx-auto mb-4 flex items-center justify-center`}>
        <span className={`${iconTextColors[variant]} text-2xl`}>{icon}</span>
      </div>
      <h3 className={`${titleSizes[variant]} font-black text-brand-green mb-2`}>
        {title}
      </h3>
      <p className="text-gray-600 font-medium text-sm">
        {description}
      </p>
    </Card>
  );
}