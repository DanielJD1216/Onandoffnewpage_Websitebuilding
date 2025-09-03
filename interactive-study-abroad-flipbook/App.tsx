import React, { useState, useCallback, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

import Page from './components/Page';
import HardCover from './components/HardCover';
import Stamp from './components/Stamp';
import SwipeIndicator from './components/SwipeIndicator';

// Define a common props interface for pages that will be animated
interface AnimatedPageProps {
    isActive: boolean;
}

// FIX: The type definitions for 'react-pageflip' are incorrect, marking optional props as required.
// Casting to `any` as a workaround to suppress the TypeScript error.
const AnyHTMLFlipBook = HTMLFlipBook as any;

// Page components updated to accept `isActive` prop for animation control
const PageCover = React.forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
    <HardCover ref={ref} isActive={isActive}>
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-noto-serif text-4xl md:text-5xl font-bold leading-tight">
                내 삶에 <br /> 새로운 장의 시작
            </h1>
            <p className="font-poppins mt-4 text-lg text-[#A48242] italic">
                On & Off New Page
            </p>
            <div className="absolute bottom-10 text-sm opacity-70">
                Click or swipe to open
            </div>
        </div>
    </HardCover>
));

const Page1 = React.forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
    <Page ref={ref} className="relative overflow-hidden" isActive={isActive}>
        <Stamp />
        <h2 className="font-noto-serif text-4xl font-bold text-[#114B3F]">무료 상담</h2>
        <p className="font-poppins text-lg mt-4 text-gray-700">
            <strong className="text-3xl font-bold text-[#A48242]">$0</strong>
            <br/>
            숨겨진 수수료 없음
        </p>
        <button className="mt-8 bg-[#114B3F] text-[#ECEBE3] font-poppins font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#0d3a30] hover:-translate-y-1 transition-all duration-300">
            상담 시작하기
        </button>
    </Page>
));

const Page2 = React.forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
    <Page ref={ref} isActive={isActive}>
        <h2 className="font-noto-serif text-4xl font-bold text-[#114B3F]">학교 등록</h2>
        <p className="font-poppins text-lg mt-4 text-gray-700">학교 등록 전 과정 무료 지원</p>
        <p className="font-poppins mt-2 text-gray-600">
            필요 서류 확인 및 제출 <br /> 승인 레터까지 Follow-up
        </p>
        <button className="mt-8 bg-[#114B3F] text-[#ECEBE3] font-poppins font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#0d3a30] hover:-translate-y-1 transition-all duration-300">
            무료 등록 신청
        </button>
    </Page>
));

const Page3 = React.forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
    <Page ref={ref} isActive={isActive}>
        <h2 className="font-noto-serif text-3xl font-bold text-[#114B3F]">정착 서비스 (기본)</h2>
        <ul className="font-poppins text-lg mt-4 text-gray-700 space-y-2">
            <li>공항 픽업 ✈️</li>
            <li>휴대폰 개통 📱</li>
            <li>은행 계좌 개설 💳</li>
        </ul>
        <p className="font-poppins mt-6 text-xl font-semibold text-[#A48242]">₩100,000부터</p>
    </Page>
));

const Page4 = React.forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
    <Page ref={ref} isActive={isActive}>
        <h2 className="font-noto-serif text-3xl font-bold text-[#114B3F]">정착 서비스 (맞춤형)</h2>
        <ul className="font-poppins text-lg mt-4 text-gray-700 space-y-2">
            <li>학부모 주거지 탐색 🏡</li>
            <li>생활 필수품 구매 지원 🛒</li>
            <li>학교 문제 대응 🎓</li>
        </ul>
        <p className="font-poppins mt-6 text-xl font-semibold text-[#A48242]">맞춤 견적</p>
    </Page>
));

const Page5 = React.forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
    <Page ref={ref} isActive={isActive}>
        <h2 className="font-noto-serif text-4xl font-bold text-[#114B3F]">홈스테이</h2>
        <p className="font-poppins text-lg mt-4 text-gray-700">학생 전용 & 학부모 동반 옵션 제공</p>
        <button className="mt-8 bg-[#114B3F] text-[#ECEBE3] font-poppins font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#0d3a30] hover:-translate-y-1 transition-all duration-300">
            홈스테이 찾기
        </button>
    </Page>
));

const PageEnd = React.forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
    <Page ref={ref} isActive={isActive}>
        <h2 className="font-noto-serif text-4xl font-bold text-[#114B3F]">새로운 장의 시작</h2>
        <p className="font-poppins mt-6 text-center text-base leading-relaxed opacity-90">
            우리는 단순히 유학을 돕는 것이 아니라, <br />
            당신의 새로운 삶의 페이지를 함께 열어갑니다.
        </p>
        <strong className="font-poppins mt-10 text-lg text-[#A48242] italic">On & Off New Page</strong>
    </Page>
));

const BackCover = React.forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
    <HardCover ref={ref} isActive={isActive} />
));

const App: React.FC = () => {
    // currentPage now represents the index of the right-hand page of the current view
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(() => {
        const checkIsMobile = () => {
            // Using 768px as a common breakpoint for tablets/mobile
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
        // Hide indicator after the first interaction
        if (showIndicator) {
            setShowIndicator(false);
        }
    }, [showIndicator]);

    const getPageIndicatorText = (pageIndex: number): string => {
        const totalUserPages = 6;
        if (pageIndex === 0) return `Cover`;
        if (pageIndex === 1) return `Page 1 of ${totalUserPages}`;
        if (pageIndex === 3) return `Pages 2-3 of ${totalUserPages}`;
        if (pageIndex === 5) return `Pages 4-5 of ${totalUserPages}`;
        if (pageIndex === 7) return `Page 6 of ${totalUserPages}`;
        return ``;
    };

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center font-poppins p-4 relative">
            {isMobile && showIndicator && <SwipeIndicator />}
            
            <div className="relative" style={{ width: '90vw', height: '80vh', maxWidth: '1000px', maxHeight: '600px' }}>
                {/* Visual Spine Element - only on desktop */}
                {!isMobile && <div className="book-spine"></div>}

                <AnyHTMLFlipBook
                    width={500}
                    height={600}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={800}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    flippingTime={1000}
                    onFlip={onPage}
                    className="react-pageflip shadow-2xl rounded-lg overflow-hidden"
                >
                    <PageCover isActive={currentPage === 0} />
                    <Page1 isActive={currentPage === 1} />
                    <Page2 isActive={currentPage === 3} />
                    <Page3 isActive={currentPage === 3} />
                    <Page4 isActive={currentPage === 5} />
                    <Page5 isActive={currentPage === 5} />
                    <PageEnd isActive={currentPage === 7} />
                    <BackCover isActive={currentPage === 7} />
                </AnyHTMLFlipBook>
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#114B3F] bg-opacity-90 text-[#ECEBE3] font-semibold text-sm py-2 px-5 rounded-full shadow-lg z-50 pointer-events-none">
                <span key={currentPage} className="animate-page-indicator">
                    {getPageIndicatorText(currentPage)}
                </span>
            </div>
        </main>
    );
};

export default App;