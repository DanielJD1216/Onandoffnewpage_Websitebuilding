'use client';

import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CollapsibleCardProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  variant?: 'default' | 'premium' | 'accent';
  className?: string;
  headerIcon?: React.ReactNode;
}

export function CollapsibleCard({ 
  title, 
  defaultOpen = false, 
  children, 
  variant = 'default',
  className = '',
  headerIcon
}: CollapsibleCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const cardStyles = {
    default: 'bg-gradient-to-br from-white to-brand-ivory/10 border border-brand-green/15',
    premium: 'bg-gradient-to-br from-white via-brand-ivory/20 to-brand-green/5 border border-brand-green/20',
    accent: 'bg-gradient-to-br from-brand-ivory/30 to-white border border-brand-green/25'
  };

  const headerStyles = {
    default: 'bg-gradient-to-r from-brand-green/5 to-brand-green/10',
    premium: 'bg-gradient-to-r from-brand-green to-brand-green/90',
    accent: 'bg-gradient-to-r from-brand-gold/20 to-brand-green/20'
  };

  const titleStyles = {
    default: 'text-brand-green',
    premium: 'text-white',
    accent: 'text-brand-green'
  };

  const iconStyles = {
    default: 'text-brand-green',
    premium: 'text-white',
    accent: 'text-brand-green'
  };

  return (
    <Card className={cn(
      'border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden',
      cardStyles[variant],
      className
    )}>
      {/* Korean-style decorative elements for premium variant */}
      {variant === 'premium' && (
        <>
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full transform translate-x-8 -translate-y-8" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-brand-ivory/20 to-transparent rounded-full transform -translate-x-6 translate-y-6" />
        </>
      )}

      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full p-6 flex items-center justify-between transition-all duration-200 hover:bg-opacity-80 relative',
          headerStyles[variant]
        )}
      >
        <div className="flex items-center gap-4">
          {headerIcon && (
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              {headerIcon}
            </div>
          )}
          <h3 className={cn(
            'text-xl font-black leading-tight text-left',
            titleStyles[variant]
          )}>
            {title}
          </h3>
        </div>
        
        <div className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200',
          variant === 'premium' ? 'bg-white/20' : 'bg-brand-green/10',
          isOpen && 'rotate-180'
        )}>
          <ChevronDown className={cn('w-5 h-5', iconStyles[variant])} />
        </div>

        {/* Korean-style accent line - safely positioned */}
        <div className="absolute -bottom-1 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </button>

      {/* Content */}
      <div className={cn(
        'overflow-hidden transition-all duration-300 ease-in-out',
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="p-6 pt-0 relative">
          {/* Korean-style content accent - safely positioned */}
          <div className="absolute -top-2 left-8 w-8 h-0.5 bg-gradient-to-r from-brand-gold/40 to-transparent" />
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </Card>
  );
}