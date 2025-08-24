import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface NoticeBoxProps {
  title?: string;
  message: string;
  buttons?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'default' | 'outline';
  }[];
  variant?: 'info' | 'success' | 'warning';
  className?: string;
}

export function NoticeBox({ 
  title, 
  message, 
  buttons = [], 
  variant = 'info',
  className = '' 
}: NoticeBoxProps) {
  const variantStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900'
  };

  const iconMap = {
    info: '📢',
    success: '✅',
    warning: '⚠️'
  };

  return (
    <Card className={`${variantStyles[variant]} border-2 ${className}`}>
      <div className="p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{iconMap[variant]}</span>
          <div className="flex-grow">
            {title && (
              <h3 className="font-black mb-2 text-lg">
                {title}
              </h3>
            )}
            <p className="font-medium mb-4">
              {message}
            </p>
            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || 'default'}
                    size="sm"
                    onClick={button.onClick}
                    asChild={!!button.href}
                    className="font-black"
                  >
                    {button.href ? (
                      <a href={button.href}>{button.text}</a>
                    ) : (
                      button.text
                    )}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}