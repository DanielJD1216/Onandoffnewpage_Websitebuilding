import React, { useState, useRef, useCallback, useEffect, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import { JourneyPage0, JourneyPage1, JourneyPage2, JourneyPage3, JourneyPage4 } from './JourneyPages';

// Dynamically import HTMLFlipBook to avoid SSR issues
const HTMLFlipBook = dynamic(
  () => import('react-pageflip').then((module) => module.default),
  { ssr: false }
) as any;

interface FlipBookPage {
  component: React.ComponentType<{ isActive: boolean }>;
  title: string;
}

interface AnimatedPageProps {
  isActive: boolean;
}

const JourneyFlipbook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages] = useState(5);
  const flipBookRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pages: FlipBookPage[] = [
    { component: JourneyPage0, title: '준비의 장' },
    { component: JourneyPage1, title: '시작의 장' },
    { component: JourneyPage2, title: '성장의 장' },
    { component: JourneyPage3, title: '진로의 장' },
    { component: JourneyPage4, title: '도약의 장' }
  ];

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const goToPage = (pageIndex: number) => {
    if (flipBookRef.current) {
      flipBookRef.current.getPageFlip().flip(pageIndex);
    }
  };

  const nextPage = () => {
    if (flipBookRef.current && currentPage < totalPages - 1) {
      flipBookRef.current.getPageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (flipBookRef.current && currentPage > 0) {
      flipBookRef.current.getPageFlip().flipPrev();
    }
  };

  if (!isClient) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-brand-green font-batang text-xl animate-pulse">
          스토리북 로딩중...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center font-batang p-4 relative">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-batang text-brand-green mb-2">
          유학 성공 여정
        </h2>
        <p className="text-brand-gold text-lg">
          당신의 꿈을 현실로 만드는 5단계 스토리
        </p>
      </div>

      {/* Flipbook Container */}
      <div className="relative">
        <div className="flipbook-container" style={{ 
          filter: 'drop-shadow(0 10px 30px rgba(17, 75, 63, 0.2))',
        }}>
          <HTMLFlipBook
            ref={flipBookRef}
            width={500}
            height={600}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className="flipbook"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {pages.map((page, index) => {
              const PageComponent = page.component;
              return (
                <div key={index} className="page">
                  <PageComponent isActive={currentPage === index} />
                </div>
              );
            })}
          </HTMLFlipBook>
        </div>

        {/* Navigation Controls */}
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentPage === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-brand-green text-white hover:bg-brand-green/80 hover:scale-110'
            }`}
            title="이전 페이지"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentPage === totalPages - 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-brand-green text-white hover:bg-brand-green/80 hover:scale-110'
            }`}
            title="다음 페이지"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-8 flex flex-col items-center">
        <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-brand-gold/20">
          <span className="text-brand-green font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>
          <span className="text-brand-gold ml-2">
            • {pages[currentPage].title}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-green to-brand-gold rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
          />
        </div>

        {/* Page Dots */}
        <div className="flex space-x-2 mt-4">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-brand-green scale-125' 
                  : 'bg-gray-300 hover:bg-brand-gold/50'
              }`}
              title={`${pages[index].title}로 이동`}
            />
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 text-center text-sm text-gray-600 max-w-md">
        <p>
          페이지를 클릭하거나 드래그하여 넘길 수 있습니다. 
          좌우 화살표 버튼이나 하단의 점을 클릭해서도 페이지를 이동할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default JourneyFlipbook;