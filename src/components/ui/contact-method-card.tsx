import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Mail, 
  MessageCircle, 
  Phone,
  ExternalLink,
  Clock,
  CheckCircle
} from 'lucide-react';

interface ContactMethodCardProps {
  method: 'email' | 'kakao' | 'whatsapp';
  title: string;
  subtitle: string;
  description: string;
  contact: string;
  action: string;
  buttonText: string;
  external?: boolean;
  variant?: 'default' | 'premium' | 'compact';
  className?: string;
}

// Icon mapping for different contact methods
const iconMap = {
  email: Mail,
  kakao: MessageCircle,
  whatsapp: Phone
};

// Color schemes for different methods
const colorSchemes = {
  email: {
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100/50',
    border: 'border-blue-200/50',
    accent: 'bg-blue-500'
  },
  kakao: {
    gradient: 'from-yellow-500 to-yellow-600',
    bgGradient: 'from-yellow-50 to-yellow-100/50',
    border: 'border-yellow-200/50',
    accent: 'bg-yellow-500'
  },
  whatsapp: {
    gradient: 'from-green-500 to-green-600',
    bgGradient: 'from-green-50 to-green-100/50',
    border: 'border-green-200/50',
    accent: 'bg-green-500'
  }
};

export function ContactMethodCard({
  method,
  title,
  subtitle,
  description,
  contact,
  action,
  buttonText,
  external = false,
  variant = 'default',
  className = ''
}: ContactMethodCardProps) {
  const IconComponent = iconMap[method];
  const colors = colorSchemes[method];

  const cardStyles = {
    default: 'bg-gradient-to-br from-white to-brand-ivory/10 border border-brand-green/15',
    premium: `bg-gradient-to-br ${colors.bgGradient} border ${colors.border}`,
    compact: 'bg-white border border-gray-200'
  };

  return (
    <Card className={cn(
      'border-0 shadow-lg active:shadow-2xl transition-all duration-500 active:-translate-y-2 md:hover:shadow-2xl md:hover:-translate-y-2 text-center group overflow-hidden relative',
      cardStyles[variant],
      className
    )}>
      {/* Korean-style decorative elements */}
      {variant === 'premium' && (
        <>
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full transform translate-x-8 -translate-y-8`} />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-full transform -translate-x-6 translate-y-6" />
        </>
      )}

      <div className="p-8 relative">
        {/* Icon Section */}
        <div className="relative mb-6">
          <div className={cn(
            'w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/25 group-active:scale-110 group-active:rotate-3 md:group-hover:scale-110 md:group-hover:rotate-3 transition-all duration-300',
            variant === 'premium' 
              ? `bg-gradient-to-br ${colors.gradient}` 
              : 'bg-gradient-to-br from-brand-green to-brand-green/80'
          )}>
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          
          {/* External link indicator */}
          {external && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center">
              <ExternalLink className="w-3 h-3 text-white" />
            </div>
          )}

        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Title */}
          <div>
            <h3 className="text-2xl font-black text-brand-green mb-2 group-active:text-brand-green/90 md:group-hover:text-brand-green/90 transition-colors">
              {title}
            </h3>
            <p className="text-sm font-semibold text-gray-600 mb-3">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed font-medium px-2">
            {description}
          </p>

          {/* Contact Info */}
          <div className={cn(
            'p-4 rounded-xl relative overflow-hidden',
            variant === 'premium' 
              ? `bg-gradient-to-r ${colors.bgGradient} border ${colors.border}`
              : 'bg-brand-ivory/30 border border-brand-green/20'
          )}>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-green" />
              <span className="font-black text-brand-green text-sm">
                {contact}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Button 
              size="lg"
              className={cn(
                'w-full font-black text-white shadow-lg transition-all duration-300 group-active:shadow-xl md:group-hover:shadow-xl',
                variant === 'premium'
                  ? `bg-gradient-to-r ${colors.gradient} active:scale-105 md:hover:scale-105`
                  : 'bg-brand-green active:bg-brand-green/90 active:scale-105 md:hover:bg-brand-green/90 md:hover:scale-105'
              )}
              asChild
            >
              <a 
                href={action} 
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="flex items-center justify-center gap-2"
              >
                {buttonText}
                {external && <ExternalLink className="w-4 h-4" />}
              </a>
            </Button>
          </div>
        </div>

        {/* Korean-style bottom accent line - safely positioned */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-green/15 to-transparent group-active:w-16 group-active:via-brand-green/20 md:group-hover:w-16 md:group-hover:via-brand-green/20 transition-all duration-300" />
      </div>

      {/* Response time badge */}
      <div className="absolute top-4 left-4">
        <div className="flex items-center gap-1 bg-brand-green/10 rounded-full px-3 py-1 text-xs">
          <Clock className="w-3 h-3 text-brand-green" />
          <span className="text-brand-green font-bold">
            {method === 'email' ? '1-2일' : method === 'kakao' ? '즉시' : '빠른'}
          </span>
        </div>
      </div>
    </Card>
  );
}