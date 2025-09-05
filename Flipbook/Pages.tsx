import { forwardRef } from "react";
import { AnimationWrapper } from "./AnimationWrapper";
import FlipbookPage from "./FlipbookPage"; // assumes you have a FlipbookPage component

// Page 0 – 준비의 장
export const Page0 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <AnimationWrapper isActive={isActive} effect="fade" stagger={0.15}>
      <h2 className="font-batang text-3xl font-black text-brand-green">준비의 장</h2>
      <p className="font-batang text-lg mt-4 text-gray-700">한국에서의 첫걸음</p>
      <ul className="mt-6 space-y-2 text-left text-gray-700">
        <li>학부모·학생 맞춤 상담</li>
        <li>지역/학교 선택 및 등록 절차 안내</li>
        <li>비자, 서류 진행</li>
      </ul>
      <AnimationWrapper isActive={isActive} effect="shimmer" delay={1}>
        <p className="mt-6 italic text-brand-gold">“새로운 책의 표지를 열 준비 단계”</p>
      </AnimationWrapper>
    </AnimationWrapper>
  </FlipbookPage>
));
Page0.displayName = "Page0";

// Page 1 – 시작의 장
export const Page1 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <AnimationWrapper isActive={isActive} effect="bounce" stagger={0.2}>
      <h2 className="font-batang text-3xl font-black text-brand-green">시작의 장</h2>
      <p className="font-batang text-lg mt-4 text-gray-700">캐나다 도착</p>
      <ul className="mt-6 space-y-2 text-left text-gray-700">
        <li>공항 픽업 & 홈스테이 배정</li>
        <li>학교 등록 및 오리엔테이션</li>
        <li>첫 주: 환영 모임 & On&Off Kitchen+Bar 첫 외식 파티</li>
      </ul>
      <p className="mt-6 italic text-brand-gold">“인생의 첫 페이지가 열리는 순간”</p>
    </AnimationWrapper>
  </FlipbookPage>
));
Page1.displayName = "Page1";

// Page 2 – 성장의 장
export const Page2 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <AnimationWrapper isActive={isActive} effect="fade" stagger={0.1}>
      <h2 className="font-batang text-3xl font-black text-brand-green">성장의 장</h2>
      <p className="font-batang text-lg mt-4 text-gray-700">학업 + 문화체험</p>
      <ul className="mt-6 space-y-2 text-left text-gray-700">
        <li>학교 수업 Follow-up 관리</li>
        <li>부족한 과목은 전문 튜터 매칭</li>
        <li>과제·숙제·시험 대비 관리</li>
        <li>정기 프로그램: 보드게임, 정보 공유 세션, 외식 지원</li>
      </ul>
      <h3 className="mt-6 font-batang font-black text-brand-green">월별 문화체험 예시</h3>
      <ul className="space-y-1 text-gray-700 text-sm">
        <li>1월: 스키 & 눈썰매 체험</li>
        <li>2월: 밴쿠버 투어 & 아일랜드 소풍</li>
        <li>3월: 시애틀 당일치기 여행</li>
        <li>4월: 봄맞이 BBQ & 야외 피크닉</li>
        <li>5월: 게잡이 & 해양 체험</li>
        <li>6월: 체육대회 & 보드게임 나이트</li>
        <li>7월: 여름 수영 & 캠프</li>
        <li>8월: 록키산맥 자연 체험</li>
        <li>9월: 학기 초 적응 프로그램 & Study Group</li>
        <li>10월: 핼러윈 파티</li>
        <li>11월: 추수감사절 디너 (On&Off Kitchen+Bar)</li>
        <li>12월: 크리스마스 파티 & 송년 모임</li>
      </ul>
      <p className="mt-4 text-xs text-gray-500">
        ⚠️ 일부 특별 체험은 추가 비용이 발생할 수 있으며, 사전 안내 후 선택 참여 가능
      </p>
    </AnimationWrapper>
  </FlipbookPage>
));
Page2.displayName = "Page2";

// Page 3 – 진로의 장
export const Page3 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <AnimationWrapper isActive={isActive} effect="fade" direction="left" stagger={0.15}>
      <h2 className="font-batang text-3xl font-black text-brand-green">진로의 장</h2>
      <p className="font-batang text-lg mt-4 text-gray-700">고등학교 졸업 & 대학 준비</p>
      <ul className="mt-6 space-y-2 text-left text-gray-700">
        <li>11~12학년 대학 진학 집중 지원</li>
        <li>SAT/IELTS/TOEFL 시험 대비</li>
        <li>대학 에세이 & 포트폴리오 멘토링</li>
        <li>대학 지원 전략 컨설팅 & 모의 인터뷰</li>
        <li>진학 담당자 초청 세션, 박람회 참여</li>
      </ul>
    </AnimationWrapper>
  </FlipbookPage>
));
Page3.displayName = "Page3";

// Page 4 – 도약의 장
export const Page4 = forwardRef<HTMLDivElement, AnimatedPageProps>(({ isActive }, ref) => (
  <FlipbookPage ref={ref} isActive={isActive}>
    <AnimationWrapper isActive={isActive} effect="fade" stagger={0.15}>
      <h2 className="font-batang text-3xl font-black text-brand-green">도약의 장</h2>
      <p className="font-batang text-lg mt-4 text-gray-700">졸업 후 새로운 여정</p>
      <ul className="mt-6 space-y-2 text-left text-gray-700">
        <li>캐나다/미국 대학 진학 → On&Off 동문 네트워크 연결</li>
        <li>후배들에게 멘토로 돌아와 조언</li>
        <li>여름방학 인턴십 & 봉사활동 연결</li>
        <li>글로벌 네트워킹 (한·캐·미 유학생 공동체)</li>
      </ul>
      <AnimationWrapper isActive={isActive} effect="typewriter" delay={0.5}>
        <p className="mt-6 italic text-brand-gold">
          “On&Off New Page – We Open Every Chapter of Your Journey”
        </p>
      </AnimationWrapper>
    </AnimationWrapper>
  </FlipbookPage>
));
Page4.displayName = "Page4";
