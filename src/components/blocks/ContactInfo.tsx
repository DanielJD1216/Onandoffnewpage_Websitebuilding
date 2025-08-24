import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContactMethodCard } from '@/components/ui/contact-method-card';
import { COMPANY_INFO } from '@/lib/constants';

interface ContactMethod {
  method: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  contact: string;
  action: string;
  buttonText: string;
  external?: boolean;
}

interface ContactInfoProps {
  variant?: 'cards' | 'simple' | 'office';
  className?: string;
  showMethods?: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    method: 'email',
    icon: '📧',
    title: 'Email',
    subtitle: '이메일로 문의하기',
    description: '자세한 상황을 설명해 주시면 맞춤 상담을 제공해 드립니다.',
    contact: COMPANY_INFO.email,
    action: 'mailto:' + COMPANY_INFO.email,
    buttonText: '이메일 보내기'
  },
  {
    method: 'kakao',
    icon: '💬',
    title: 'KakaoTalk',
    subtitle: '카카오톡으로 빠른 상담',
    description: '실시간으로 빠른 답변을 받아보세요.',
    contact: 'ID: onoffnewpage',
    action: 'https://open.kakao.com/o/your-kakao-link',
    buttonText: '카카오톡 상담',
    external: true
  },
  {
    method: 'whatsapp',
    icon: '📱',
    title: 'WhatsApp',
    subtitle: 'WhatsApp으로 편리하게',
    description: '해외에서도 편리하게 연락할 수 있습니다.',
    contact: '+1 (604) 123-4567',
    action: 'https://wa.me/16041234567',
    buttonText: 'WhatsApp 상담',
    external: true
  }
];

export function ContactInfo({ 
  variant = 'simple', 
  className = '',
  showMethods = false 
}: ContactInfoProps) {
  if (variant === 'cards' && showMethods) {
    return (
      <div className={`grid md:grid-cols-3 gap-8 ${className}`}>
        {contactMethods.map((option, index) => (
          <ContactMethodCard
            key={index}
            method={option.method as 'email' | 'kakao' | 'whatsapp'}
            title={option.title}
            subtitle={option.subtitle}
            description={option.description}
            contact={option.contact}
            action={option.action}
            buttonText={option.buttonText}
            external={option.external}
            variant={index === 1 ? 'premium' : 'default'} // Make middle card premium
          />
        ))}
      </div>
    );
  }

  if (variant === 'office') {
    return (
      <div className={`grid md:grid-cols-2 gap-8 ${className}`}>
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
          <div className="text-white">
            <h3 className="text-xl font-black mb-4 flex items-center gap-2">
              <span>📍</span>
              오피스 주소
            </h3>
            <p className="text-brand-ivory mb-4">{COMPANY_INFO.address}</p>
            <p className="text-sm text-brand-ivory">
              * 방문 상담은 사전 예약 필수입니다
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
          <div className="text-white">
            <h3 className="text-xl font-black mb-4 flex items-center gap-2">
              <span>🕐</span>
              운영 시간
            </h3>
            <div className="text-brand-ivory space-y-2">
              <p>월 - 금: 오전 9시 - 오후 6시 (PST)</p>
              <p>토요일: 오전 10시 - 오후 4시 (PST)</p>
              <p>일요일 및 공휴일: 휴무</p>
              <p className="text-sm mt-4">* 긴급상황 시 24시간 연락 가능</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Simple variant
  return (
    <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 text-sm ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-brand-green">📧</span>
        <span className="font-medium">{COMPANY_INFO.email}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-brand-green">📍</span>
        <span className="font-medium">{COMPANY_INFO.address}</span>
      </div>
    </div>
  );
}

// Convenience components
export function ContactMethods({ className = '' }: { className?: string }) {
  return <ContactInfo variant="cards" showMethods={true} className={className} />;
}

export function OfficeInfo({ className = '' }: { className?: string }) {
  return <ContactInfo variant="office" className={className} />;
}

export function SimpleContactInfo({ className = '' }: { className?: string }) {
  return <ContactInfo variant="simple" className={className} />;
}