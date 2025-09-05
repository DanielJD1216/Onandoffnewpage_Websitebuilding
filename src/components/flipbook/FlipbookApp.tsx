'use client';

import React, { useState, useCallback, useEffect, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import FlipbookPage from './FlipbookPage';
import FlipbookCover from './FlipbookCover';
import Stamp from './Stamp';
import SwipeIndicator from './SwipeIndicator';

// Define a common props interface for pages that will be animated
interface AnimatedPageProps {
  isActive: boolean;
}

// Dynamically import HTMLFlipBook to avoid SSR issues
const HTMLFlipBook = dynamic(
  () => import('react-pageflip').then((module) => module.default),
  { ssr: false }
) as any; // Type casting due to incorrect TypeScript definitions

// Page components with Korean content and brand styling
const PageCover = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookCover ref={ref} isActive={isActive}>
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="font-batang text-4xl md:text-5xl font-black leading-tight text-brand-ivory">
        내 삶에 <br /> 새로운 장의 시작
      </h1>
      <p className="font-batang mt-4 text-lg text-brand-gold">
        On & Off New Page
      </p>
      <div className="absolute bottom-10 text-sm opacity-70 text-brand-ivory">
        클릭 또는 스와이프하여 열기
      </div>
    </div>
  </FlipbookCover>
));
PageCover.displayName = 'PageCover';

const Page1 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} className="relative overflow-hidden" isActive={isActive}>
    <Stamp />
    <h2 className="font-batang text-4xl font-black text-brand-green">무료 상담</h2>
    <p className="font-batang text-lg mt-4 text-gray-700">
      <strong className="text-3xl font-black text-brand-gold">$0</strong>
      <br/>
      숨겨진 수수료 없음
    </p>
    <button className="mt-8 bg-brand-green text-brand-ivory font-batang font-black py-3 px-8 rounded-lg shadow-md hover:bg-brand-green/90 hover:-translate-y-1 transition-all duration-300">
      상담 시작하기
    </button>
  </FlipbookPage>
));
Page1.displayName = 'Page1';

const Page2 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <h2 className="font-batang text-4xl font-black text-brand-green">학교 등록</h2>
    <p className="font-batang text-lg mt-4 text-gray-700 font-medium">학교 등록 전 과정 무료 지원</p>
    <p className="font-batang mt-2 text-gray-600">
      필요 서류 확인 및 제출 <br /> 승인 레터까지 Follow-up
    </p>
    <button className="mt-8 bg-brand-green text-brand-ivory font-batang font-black py-3 px-8 rounded-lg shadow-md hover:bg-brand-green/90 hover:-translate-y-1 transition-all duration-300">
      무료 등록 신청
    </button>
  </FlipbookPage>
));
Page2.displayName = 'Page2';

const Page3 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <h2 className="font-batang text-3xl font-black text-brand-green">정착 서비스 (기본)</h2>
    <ul className="font-batang text-lg mt-4 text-gray-700 space-y-2">
      <li>공항 픽업 ✈️</li>
      <li>휴대폰 개통 📱</li>
      <li>은행 계좌 개설 💳</li>
    </ul>
    <p className="font-batang mt-6 text-xl font-black text-brand-gold">₩100,000부터</p>
  </FlipbookPage>
));
Page3.displayName = 'Page3';

const Page4 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <h2 className="font-batang text-3xl font-black text-brand-green">정착 서비스 (맞춤형)</h2>
    <ul className="font-batang text-lg mt-4 text-gray-700 space-y-2">
      <li>학부모 주거지 탐색 🏡</li>
      <li>생활 필수품 구매 지원 🛒</li>
      <li>학교 문제 대응 🎓</li>
    </ul>
    <p className="font-batang mt-6 text-xl font-black text-brand-gold">맞춤 견적</p>
  </FlipbookPage>
));
Page4.displayName = 'Page4';

const Page5 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <h2 className="font-batang text-4xl font-black text-brand-green">홈스테이</h2>
    <p className="font-batang text-lg mt-4 text-gray-700 font-medium">학생 전용 & 학부모 동반 옵션 제공</p>
    <button className="mt-8 bg-brand-green text-brand-ivory font-batang font-black py-3 px-8 rounded-lg shadow-md hover:bg-brand-green/90 hover:-translate-y-1 transition-all duration-300">
      홈스테이 찾기
    </button>
  </FlipbookPage>
));
Page5.displayName = 'Page5';

const PageEnd = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <h2 className="font-batang text-4xl font-black text-brand-green">새로운 장의 시작</h2>
    <p className="font-batang mt-6 text-center text-base leading-relaxed opacity-90">
      우리는 단순히 유학을 돕는 것이 아니라, <br />
      당신의 새로운 삶의 페이지를 함께 열어갑니다.
    </p>
    <strong className="font-batang mt-10 text-lg text-brand-gold">On & Off New Page</strong>
  </FlipbookPage>
));
PageEnd.displayName = 'PageEnd';

const BackCover = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookCover ref={ref} isActive={isActive} />
));
BackCover.displayName = 'BackCover';

const FlipbookApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);
  const [isClient, setIsClient] = useState(false);

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
    const totalUserPages = 6;
    if (pageIndex === 0) return `표지`;
    if (pageIndex === 1) return `1/${totalUserPages} 페이지`;
    if (pageIndex === 2) return `2/${totalUserPages} 페이지`;
    if (pageIndex === 3) return `3/${totalUserPages} 페이지`;
    if (pageIndex === 4) return `4/${totalUserPages} 페이지`;
    if (pageIndex === 5) return `5/${totalUserPages} 페이지`;
    if (pageIndex === 6) return `6/${totalUserPages} 페이지`;
    if (pageIndex === 7) return `뒷표지`;
    return ``;
  };

  if (!isClient) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-brand-green font-batang text-xl">로딩중...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center font-batang p-4 relative">
      {showIndicator && <SwipeIndicator />}
      
      <div className="relative" style={{ width: '90vw', height: '80vh', maxWidth: '500px', maxHeight: '600px' }}>
        <HTMLFlipBook
          width={300}
          height={400}
          size="stretch"
          minWidth={280}
          maxWidth={500}
          minHeight={350}
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
          <PageEnd isActive={currentPage === 6} />
          <BackCover isActive={currentPage === 7} />
        </HTMLFlipBook>
      </div>
      
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-brand-green bg-opacity-90 text-brand-ivory font-black text-sm py-2 px-5 rounded-full shadow-lg z-50 pointer-events-none">
        <span key={currentPage} className="animate-fade-in">
          {getPageIndicatorText(currentPage)}
        </span>
      </div>
    </div>
  );
};

export default FlipbookApp;