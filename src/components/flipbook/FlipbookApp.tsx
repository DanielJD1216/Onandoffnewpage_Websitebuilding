'use client';

import React, { useState, useCallback, useEffect, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import FlipbookPage from './FlipbookPage';
import FlipbookCover from './FlipbookCover';
import SwipeIndicator from './SwipeIndicator';
import JourneyAnimationWrapper from './JourneyAnimationWrapper';

// Define a common props interface for pages that will be animated
interface AnimatedPageProps {
  isActive: boolean;
}

// Dynamically import HTMLFlipBook to avoid SSR issues
const HTMLFlipBook = dynamic(
  () => import('react-pageflip').then((module) => module.default),
  { ssr: false }
) as any; // Type casting due to incorrect TypeScript definitions

// Cover Page (표지)
const PageCover = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookCover ref={ref} isActive={isActive}>
    <div className="flex flex-col items-center justify-center h-full">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
        <h1 className="font-dodum text-4xl md:text-5xl font-black leading-tight text-brand-ivory text-center">
          내 삶에 <br /> 새로운 장의 시작
        </h1>
        <p className="font-dodum mt-4 text-lg text-brand-gold">
          On & Off New Page
        </p>
      </JourneyAnimationWrapper>
      
      {isActive && (
        <div className="absolute bottom-4 right-4 text-sm text-brand-ivory opacity-70">
          클릭 또는 스와이프하여 열기
        </div>
      )}
    </div>
  </FlipbookCover>
));
PageCover.displayName = 'PageCover';

// Page 0: 준비의 장 (한국에서의 첫걸음)
const Page1 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <div ref={ref} className="h-full w-full bg-gradient-to-br from-brand-ivory to-white p-8">
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.1}>
      <p className="text-center text-brand-green text-sm font-medium mb-2">Page 0</p>
    </JourneyAnimationWrapper>
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
      <h1 className="text-5xl font-dodum text-brand-green mb-6 text-center">
        준비의 장
      </h1>
      <p className="text-center text-brand-gold text-lg font-medium mb-8">
        (한국에서의 첫걸음)
      </p>
    </JourneyAnimationWrapper>

    <div className="space-y-4 mb-8">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.5}>
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-green">
          <p className="text-gray-700">학부모·학생 맞춤 상담</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.7}>
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-green">
          <p className="text-gray-700">지역/학교 선택 및 등록 절차 안내</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.9}>
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-green">
          <p className="text-gray-700">비자, 서류 진행</p>
        </div>
      </JourneyAnimationWrapper>
    </div>

    <JourneyAnimationWrapper isActive={isActive} effect="shimmer" delay={1.2}>
      <div className="text-center">
        <blockquote className="text-xl font-dodum text-brand-gold italic leading-relaxed">
          &ldquo;새로운 책의 표지를 열 준비 단계&rdquo;
        </blockquote>
      </div>
    </JourneyAnimationWrapper>
  </div>
));
Page1.displayName = 'Page1';

// Page 1: 시작의 장 (캐나다 도착)
const Page2 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <div ref={ref} className="h-full w-full bg-gradient-to-br from-white to-brand-ivory p-8">
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.1}>
      <p className="text-center text-brand-green text-sm font-medium mb-2">Page 1</p>
    </JourneyAnimationWrapper>
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
      <h1 className="text-5xl font-dodum text-brand-green mb-6 text-center">
        시작의 장
      </h1>
      <p className="text-center text-brand-gold text-lg font-medium mb-8">
        (캐나다 도착)
      </p>
    </JourneyAnimationWrapper>

    <div className="space-y-4 mb-8">
      <JourneyAnimationWrapper isActive={isActive} effect="bounce" delay={0.5}>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl mr-4">✈️</div>
          <p className="text-gray-700">공항 픽업 & 홈스테이 배정</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="bounce" delay={0.7}>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl mr-4">🏫</div>
          <p className="text-gray-700">학교 등록 및 오리엔테이션</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="bounce" delay={0.9}>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl mr-4">🎉</div>
          <p className="text-gray-700">첫 주: 환영 모임 & On&Off Kitchen+Bar 첫 외식 파티</p>
        </div>
      </JourneyAnimationWrapper>
    </div>

    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={1.2}>
      <div className="text-center">
        <blockquote className="text-xl font-dodum text-brand-gold italic leading-relaxed">
          &ldquo;인생의 첫 페이지가 열리는 순간&rdquo;
        </blockquote>
      </div>
    </JourneyAnimationWrapper>
  </div>
));
Page2.displayName = 'Page2';

// Page 2: 성장의 장 (학업 + 문화체험)
const Page3 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <div ref={ref} className="h-full w-full bg-gradient-to-br from-brand-ivory to-white p-8">
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.1}>
      <p className="text-center text-brand-green text-sm font-medium mb-2">Page 2</p>
    </JourneyAnimationWrapper>
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
      <h1 className="text-4xl font-dodum text-brand-green mb-4 text-center">
        성장의 장
      </h1>
      <p className="text-center text-brand-gold text-lg font-medium mb-6">
        (학업 + 문화체험)
      </p>
    </JourneyAnimationWrapper>

    <div className="space-y-3 mb-6">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.5}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">학교 수업 Follow-up 관리</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.65}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">부족한 과목은 전문 튜터 매칭</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.8}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">과제·숙제·시험 대비 관리</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.95}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">정기 프로그램 (보드게임, 정보 공유 세션, 외식 지원)</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={1.1}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">유학생 커뮤니티 모임 → 외로움 해소 & 네트워킹</p>
        </div>
      </JourneyAnimationWrapper>
    </div>

    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={1.3}>
      <div className="bg-blue-50 p-3 rounded-lg mb-4">
        <p className="text-center text-blue-700 text-sm font-medium">
          월별 문화체험 예시 (1월–12월 이벤트)
        </p>
      </div>
    </JourneyAnimationWrapper>

    <JourneyAnimationWrapper isActive={isActive} effect="bounce" delay={1.5}>
      <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
        <div className="flex items-center">
          <div className="text-red-400 text-lg mr-2 animate-pulse">⚠️</div>
          <p className="text-red-700 font-medium text-sm">
            일부 특별 체험은 추가 비용 발생 가능
          </p>
        </div>
      </div>
    </JourneyAnimationWrapper>
  </div>
));
Page3.displayName = 'Page3';

// Page 3: 진로의 장 (고등학교 졸업 & 대학 준비)
const Page4 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <div ref={ref} className="h-full w-full bg-gradient-to-br from-white to-brand-ivory p-8">
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.1}>
      <p className="text-center text-brand-green text-sm font-medium mb-2">Page 3</p>
    </JourneyAnimationWrapper>
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
      <h1 className="text-4xl font-dodum text-brand-green mb-4 text-center">
        진로의 장
      </h1>
      <p className="text-center text-brand-gold text-lg font-medium mb-6">
        (고등학교 졸업 & 대학 준비)
      </p>
    </JourneyAnimationWrapper>

    <div className="space-y-3 mb-6">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.5}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">11~12학년 대학 진학 집중 지원</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.7}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">
            <span className="font-bold text-brand-green">SAT</span> / 
            <span className="font-bold text-brand-green"> IELTS</span> / 
            <span className="font-bold text-brand-green"> TOEFL</span> 시험 대비
          </p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.9}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">대학 에세이 & 포트폴리오 멘토링</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={1.1}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">대학 지원 전략 컨설팅 & 모의 인터뷰</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={1.3}>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">진학 담당자 초청 세션, 박람회 참여</p>
        </div>
      </JourneyAnimationWrapper>
    </div>

    <JourneyAnimationWrapper isActive={isActive} effect="bounce" delay={1.5}>
      <div className="text-center">
        <div className="inline-flex space-x-4">
          <span className="px-3 py-1 bg-brand-green text-white rounded-full text-sm font-bold">SAT</span>
          <span className="px-3 py-1 bg-brand-green text-white rounded-full text-sm font-bold">IELTS</span>
          <span className="px-3 py-1 bg-brand-green text-white rounded-full text-sm font-bold">TOEFL</span>
        </div>
      </div>
    </JourneyAnimationWrapper>
  </div>
));
Page4.displayName = 'Page4';

// Page 4: 도약의 장 (졸업 후 새로운 여정)
const Page5 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <div ref={ref} className="h-full w-full bg-gradient-to-br from-brand-green to-brand-gold p-8 text-white">
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.1}>
      <p className="text-center text-brand-ivory text-sm font-medium mb-2">Page 4</p>
    </JourneyAnimationWrapper>
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
      <h1 className="text-4xl font-dodum text-brand-ivory mb-4 text-center">
        도약의 장
      </h1>
      <p className="text-center text-brand-ivory/90 text-lg font-medium mb-6">
        (졸업 후 새로운 여정)
      </p>
    </JourneyAnimationWrapper>

    <div className="space-y-3 mb-8">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.5}>
        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-brand-ivory text-sm">캐나다/미국 대학 진학 → On&Off 동문 네트워크 연결</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.7}>
        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-brand-ivory text-sm">후배들에게 멘토로 돌아와 조언</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={0.9}>
        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-brand-ivory text-sm">여름방학 인턴십 & 봉사활동 연결</p>
        </div>
      </JourneyAnimationWrapper>
      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" delay={1.1}>
        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-brand-ivory text-sm">글로벌 네트워킹 (한국-캐나다-미국 유학생 공동체)</p>
        </div>
      </JourneyAnimationWrapper>
    </div>

    <JourneyAnimationWrapper isActive={isActive} effect="typewriter" delay={1.3}>
      <div className="text-center px-4">
        <h2 className="text-lg md:text-xl font-dodum text-brand-gold leading-relaxed">
          &ldquo;On&Off New Page – We Open Every Chapter of Your Journey&rdquo;
        </h2>
      </div>
    </JourneyAnimationWrapper>
  </div>
));
Page5.displayName = 'Page5';

// Back Cover
const BackCover = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookCover ref={ref} isActive={isActive}>
    <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
      <div className="flex flex-col items-center justify-center h-full opacity-80">
        {/* Empty closing page like a book cover */}
        <div className="w-full h-full bg-gradient-to-b from-brand-green/20 to-brand-green/40 rounded-lg"></div>
      </div>
    </JourneyAnimationWrapper>
  </FlipbookCover>
));
BackCover.displayName = 'BackCover';

const FlipbookApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const totalPages = 7; // Cover + 5 story pages + Back cover

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const onPage = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
    if (showIndicator) {
      setShowIndicator(false);
    }
  }, [showIndicator]);

  const getPageIndicatorText = (pageIndex: number): string => {
    const pageNames = [
      '표지', '준비의 장', '시작의 장', '성장의 장', '진로의 장', '도약의 장', '뒷표지'
    ];
    return pageNames[pageIndex] || '';
  };

  if (!isClient) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-brand-green font-dodum text-xl">로딩중...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center font-dodum p-4 pb-8 md:pb-4 relative">
      {showIndicator && <SwipeIndicator />}
      
      <div className="relative mb-6 md:mb-0" style={{ width: '90vw', height: '80vh', maxWidth: '500px', maxHeight: '600px' }}>
        <HTMLFlipBook
          width={300}
          height={400}
          size="stretch"
          minWidth={280}
          maxWidth={500}
          minHeight={400}
          maxHeight={600}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          flippingTime={1000}
          onFlip={onPage}
          className="flipbook-container shadow-2xl rounded-lg overflow-hidden"
          showPageCorners={false}
          useMouseEvents={true}
          swipeDistance={50}
          disableFlipByClick={false}
          style={{}}
          startPage={0}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          usePortrait={true}
          drawShadow={true}
        >
          <PageCover isActive={currentPage === 0} />
          <Page1 isActive={currentPage === 1} />
          <Page2 isActive={currentPage === 2} />
          <Page3 isActive={currentPage === 3} />
          <Page4 isActive={currentPage === 4} />
          <Page5 isActive={currentPage === 5} />
          <BackCover isActive={currentPage === 6} />
        </HTMLFlipBook>
      </div>
      
    </div>
  );
};

export default FlipbookApp;