'use client';

import { cn } from '@/lib/utils';
import { Megaphone, Clock, AlertCircle, Info, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

interface AnnouncementBannerProps {
  title: string;
  message: string;
  variant?: 'info' | 'warning' | 'success' | 'urgent';
  icon?: React.ReactNode;
  dismissible?: boolean;
  className?: string;
  onDismiss?: () => void;
}

const variantStyles = {
  info: {
    bg: 'from-blue-50/80 via-blue-100/60 to-blue-50/80',
    border: 'border-blue-200/50',
    text: 'text-blue-800',
    icon: 'text-blue-600',
    accent: 'bg-blue-500'
  },
  warning: {
    bg: 'from-yellow-50/80 via-yellow-100/60 to-yellow-50/80',
    border: 'border-yellow-200/50',
    text: 'text-yellow-800',
    icon: 'text-yellow-600',
    accent: 'bg-yellow-500'
  },
  success: {
    bg: 'from-green-50/80 via-green-100/60 to-green-50/80',
    border: 'border-green-200/50',
    text: 'text-green-800',
    icon: 'text-green-600',
    accent: 'bg-green-500'
  },
  urgent: {
    bg: 'from-red-50/80 via-red-100/60 to-red-50/80',
    border: 'border-red-200/50',
    text: 'text-red-800',
    icon: 'text-red-600',
    accent: 'bg-red-500'
  }
};

const defaultIcons = {
  info: Info,
  warning: AlertCircle,
  success: CheckCircle,
  urgent: Megaphone
};

export function AnnouncementBanner({
  title,
  message,
  variant = 'info',
  icon,
  dismissible = false,
  className = '',
  onDismiss
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const styles = variantStyles[variant];
  const IconComponent = icon ? () => <>{icon}</> : defaultIcons[variant];

  return (
    <div className={cn(
      'relative rounded-2xl border shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl',
      `bg-gradient-to-r ${styles.bg} ${styles.border}`,
      className
    )}>
      {/* Korean-style decorative elements */}
      <div className={`absolute top-0 left-0 w-full h-1 ${styles.accent}`} />
      <div className={`absolute top-0 right-0 w-16 h-16 ${styles.accent} opacity-10 rounded-full transform translate-x-6 -translate-y-6`} />
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-brand-gold/10 rounded-full transform -translate-x-4 translate-y-4" />

      <div className="p-6 relative">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm',
            styles.accent
          )}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className={cn(
                  'text-lg font-black leading-tight mb-2',
                  styles.text
                )}>
                  <Megaphone className={cn('w-4 h-4 inline mr-2', styles.icon)} />
                  {title}
                </h3>
                <p className={cn(
                  'text-sm leading-relaxed font-medium',
                  styles.text,
                  'opacity-90'
                )}>
                  {message}
                </p>
              </div>

              {/* Dismiss button */}
              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-black/10 flex-shrink-0',
                    styles.icon
                  )}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Response time indicator for announcements */}
            <div className="mt-4 flex items-center gap-2">
              <Clock className={cn('w-3 h-3', styles.icon)} />
              <span className={cn('text-xs font-bold', styles.text, 'opacity-75')}>
                영업일 기준 1-2일 내로 연락드리겠습니다. 감사합니다!
              </span>
            </div>
          </div>
        </div>

        {/* Korean-style bottom accent line */}
        <div className={`absolute bottom-2 left-6 right-6 h-0.5 ${styles.accent} opacity-15`} />
      </div>
    </div>
  );
}

// Convenience components for different types
export function InfoBanner({ title, message, ...props }: Omit<AnnouncementBannerProps, 'variant'>) {
  return <AnnouncementBanner title={title} message={message} variant="info" {...props} />;
}

export function WarningBanner({ title, message, ...props }: Omit<AnnouncementBannerProps, 'variant'>) {
  return <AnnouncementBanner title={title} message={message} variant="warning" {...props} />;
}

export function SuccessBanner({ title, message, ...props }: Omit<AnnouncementBannerProps, 'variant'>) {
  return <AnnouncementBanner title={title} message={message} variant="success" {...props} />;
}

export function UrgentBanner({ title, message, ...props }: Omit<AnnouncementBannerProps, 'variant'>) {
  return <AnnouncementBanner title={title} message={message} variant="urgent" {...props} />;
}