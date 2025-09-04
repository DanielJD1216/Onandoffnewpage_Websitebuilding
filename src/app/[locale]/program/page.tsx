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
          프로그램 로딩중...
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
            title="프로그램"
            subtitle="On & Off New Page와 함께하는 캐나다 유학 프로그램을 인터랙티브하게 살펴보세요"
            level={1}
          />
          
          {/* Interactive Flipbook Section */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-6xl">
              <FlipbookApp />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-gray-600 font-batang">
              위의 인터랙티브 책을 클릭하거나 스와이프하여 우리의 프로그램을 자세히 알아보세요.
            </p>
            
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