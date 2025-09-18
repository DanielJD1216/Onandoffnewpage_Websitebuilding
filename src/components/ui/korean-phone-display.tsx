import Link from 'next/link';

interface KoreanPhoneDisplayProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light' | 'dark';
}

export function KoreanPhoneDisplay({
  className = '',
  size = 'md',
  variant = 'default'
}: KoreanPhoneDisplayProps) {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const variantClasses = {
    default: 'text-gray-600',
    light: 'text-gray-500',
    dark: 'text-gray-700'
  };

  return (
    <div className={`text-center ${className}`}>
      <p className={`${sizeClasses[size]} ${variantClasses[variant]}`}>
        📞 한국 상담 전화번호: {' '}
        <Link
          href="tel:010-4517-1770"
          className="font-semibold hover:underline transition-colors"
          style={{ color: 'rgb(29, 78, 216)' }}
        >
          010-4517-1770
        </Link>
      </p>
    </div>
  );
}