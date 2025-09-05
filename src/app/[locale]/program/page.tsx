'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import '../../../components/flipbook/flipbook-styles.css';

// Dynamic import to avoid SSR issues with the flipbook
const FlipbookApp = dynamic(
  () => import('@/components/flipbook/FlipbookApp'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-brand-green font-batang text-xl animate-pulse">
          스토리북 로딩중...
        </div>
      </div>
    )
  }
);

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-ivory/30 to-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="여정"
            subtitle="On & Off New Page와 함께하는 캐나다 유학 성공 스토리를 인터랙티브하게 살펴보세요"
            level={1}
          />
          
          {/* Interactive Story Flipbook Section */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-batang text-brand-green mb-2">유학 성공 여정</h2>
                <p className="text-brand-gold text-lg">당신의 꿈을 현실로 만드는 5단계 스토리</p>
              </div>
              <FlipbookApp />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-gray-600 font-batang">
              위의 인터랙티브 스토리북을 클릭하거나 스와이프하여 유학 성공의 전 과정을 체험해보세요.
            </p>
            
            {/* Story Features Description */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="font-batang text-xl font-bold text-brand-green mb-3 text-center">유학 성공 스토리북</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                준비의 장부터 도약의 장까지, 5단계 여정을 스토리텔링과 애니메이션으로 경험해보세요. 
                각 장마다 다른 효과와 인터랙션으로 유학 성공의 로드맵을 확인할 수 있습니다.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                href="/ko/contact" 
                className="bg-brand-green text-brand-ivory font-batang font-black py-3 px-8 rounded-lg shadow-md hover:bg-brand-green/90 hover:-translate-y-1 transition-all duration-300"
              >
                무료 상담 신청
              </Link>
              <Link 
                href="/ko/programs" 
                className="bg-white text-brand-green border-2 border-brand-green font-batang font-black py-3 px-8 rounded-lg shadow-md hover:bg-brand-ivory hover:-translate-y-1 transition-all duration-300"
              >
                상세 프로그램 안내
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}