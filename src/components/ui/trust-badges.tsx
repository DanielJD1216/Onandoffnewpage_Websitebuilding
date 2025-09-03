import { Card } from '@/components/ui/card';
import { Shield, CheckCircle, Award, Globe } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    title: '인증된 교육 컨설턴트',
    subtitle: 'Certified Education Consultant',
    description: 'ICCRC 공인 이민 컨설턴트',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: CheckCircle,
    title: '100% 성공률',
    subtitle: '2024년 기준',
    description: '모든 상담 학생 안전 정착',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Award,
    title: '5년 연속 우수 업체',
    subtitle: 'Excellence Award',
    description: '밴쿠버 교육청 공식 파트너',
    color: 'from-brand-gold to-yellow-600'
  },
  {
    icon: Globe,
    title: '현지 직접 운영',
    subtitle: 'Vancouver Local Office',
    description: '24시간 현지 지원 서비스',
    color: 'from-brand-green to-emerald-600'
  }
];

export function TrustBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {trustBadges.map((badge, index) => (
        <Card key={index} className="group relative p-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100 overflow-hidden">
          {/* Background accent */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${badge.color}`} />
          
          {/* Icon */}
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
            <badge.icon className="w-5 h-5 text-white" />
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-sm font-black text-gray-900 mb-1 leading-tight">
              {badge.title}
            </h3>
            <p className="text-xs text-gray-500 mb-2 font-medium">
              {badge.subtitle}
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              {badge.description}
            </p>
          </div>
          
          {/* Korean-style corner accent */}
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-brand-green/40 rounded-full group-hover:scale-150 transition-transform duration-300" />
        </Card>
      ))}
    </div>
  );
}

// Compact version for headers/footers
export function CompactTrustBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {trustBadges.slice(0, 3).map((badge, index) => (
        <div key={index} className="flex items-center gap-2 bg-white/80 rounded-full px-3 py-2 shadow-sm border border-gray-200/50">
          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0`}>
            <badge.icon className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-black text-gray-800">
            {badge.title}
          </span>
        </div>
      ))}
    </div>
  );
}