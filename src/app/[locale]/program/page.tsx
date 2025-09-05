'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
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
    <div className="min-h-screen" style={{backgroundImage: 'linear-gradient(to bottom, white 35%, #f8f6f0 100%)'}}>
      {/* Hero Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          {/* Interactive Story Flipbook Section */}
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl lg:text-5xl font-batang text-brand-green mb-4 font-black">유학 성공 여정</h1>
                <p className="text-brand-gold text-lg">당신의 꿈을 현실로 만드는 5단계 스토리</p>
              </div>
              <FlipbookApp />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-24 max-w-4xl mx-auto text-center">
            
            
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