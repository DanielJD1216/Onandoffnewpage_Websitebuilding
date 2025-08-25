import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
  GraduationCap, 
  Home, 
  BookOpen, 
  ShieldCheck,
  Users,
  Building2,
  School,
  Briefcase,
  MapPin,
  Plane,
  Award,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  Globe
} from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'default' | 'large' | 'benefit' | 'premium';
  className?: string;
  badge?: string;
}

// Map emoji/text icons to Lucide icons for more professional look
const iconMap: { [key: string]: any } = {
  '🎯': Target,
  '🏠': Home,
  '📚': BookOpen,
  '🚨': ShieldCheck,
  '👨‍👩‍👧‍👦': Users,
  '🏘️': Building2,
  '🏫': School,
  '💼': Briefcase,
  '🎓': GraduationCap,
  '📍': MapPin,
  '✈️': Plane,
  '💰': DollarSign,
  '🇨🇦': Globe,
  '🕐': Clock,
  '✓': CheckCircle,
  // Fallback for any unmapped icons
  default: Award
};

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  className = '',
  badge
}: FeatureCardProps) {
  // Get the appropriate icon component
  const IconComponent = iconMap[icon] || iconMap.default;
  
  const cardStyles = {
    default: 'group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-brand-ivory/20 border border-brand-green/10 relative overflow-hidden',
    large: 'group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-brand-ivory/30 border border-brand-green/15 relative overflow-hidden',
    benefit: 'group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-brand-green/5 border border-brand-green/20 relative overflow-hidden',
    premium: 'group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-brand-ivory/30 to-brand-green/5 border border-brand-green/15 relative overflow-hidden'
  };

  const iconStyles = {
    default: 'w-14 h-14',
    large: 'w-16 h-16',
    benefit: 'w-14 h-14',
    premium: 'w-16 h-16'
  };

  const titleStyles = {
    default: 'text-lg',
    large: 'text-xl',
    benefit: 'text-lg',
    premium: 'text-xl'
  };

  return (
    <Card className={cn('p-6 text-center border-0 shadow-lg', cardStyles[variant], className)}>
      {/* Premium variant decorative elements */}
      {(variant === 'premium' || variant === 'large') && (
        <>
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-green/5 to-transparent rounded-full transform translate-x-8 -translate-y-8" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-full transform -translate-x-6 translate-y-6" />
        </>
      )}
      
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-brand-green to-brand-green/80 text-white text-xs font-black px-2 py-1 rounded-full shadow-sm">
          {badge}
        </div>
      )}
      
      {/* Icon with premium styling */}
      <div className="relative mb-6">
        <div className={cn(
          'mx-auto bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/25 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300',
          iconStyles[variant]
        )}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        
        {/* Decorative ring */}
        <div className={cn(
          'absolute inset-0 mx-auto rounded-2xl border-2 border-brand-green/20 group-hover:border-brand-green/40 transition-colors duration-300 transform scale-125 opacity-30',
          iconStyles[variant]
        )} />
        
        {/* Korean-style accent dot */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-gold rounded-full group-hover:scale-125 transition-transform duration-300" />
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className={cn(
          'font-black text-brand-green mb-3 group-hover:text-brand-green/90 transition-colors leading-tight',
          titleStyles[variant]
        )}>
          {title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>
      
      {/* Korean-style bottom accent line - safely positioned */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-brand-green/15 to-transparent group-hover:w-12 group-hover:via-brand-green/20 transition-all duration-300" />
    </Card>
  );
}