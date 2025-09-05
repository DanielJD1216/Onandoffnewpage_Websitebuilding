import React from 'react';
import JourneyAnimationWrapper from './JourneyAnimationWrapper';

interface PageProps {
  isActive: boolean;
}

// Page 0: 준비의 장
export const JourneyPage0: React.FC<PageProps> = ({ isActive }) => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-brand-ivory to-white p-8 flex flex-col justify-center items-center">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
        <h1 className="text-6xl font-batang text-brand-green mb-8 text-center">
          준비의 장
        </h1>
      </JourneyAnimationWrapper>
      
      <JourneyAnimationWrapper isActive={isActive} effect="shimmer" delay={0.8}>
        <div className="text-center max-w-md">
          <blockquote className="text-2xl font-batang text-brand-gold italic leading-relaxed">
            &ldquo;천 리 길도 한 걸음부터&rdquo;
          </blockquote>
          <p className="text-lg text-brand-green mt-6 leading-relaxed">
            유학의 꿈을 현실로 만들어가는 첫 번째 단계, 
            철저한 준비가 성공의 열쇠입니다.
          </p>
        </div>
      </JourneyAnimationWrapper>
    </div>
  );
};

// Page 1: 시작의 장
export const JourneyPage1: React.FC<PageProps> = ({ isActive }) => {
  const features = [
    { icon: "🎯", title: "목표 설정", desc: "명확한 유학 목표 수립" },
    { icon: "📚", title: "학습 계획", desc: "체계적인 어학 준비" },
    { icon: "📝", title: "서류 준비", desc: "완벽한 지원 서류 작성" },
    { icon: "🌟", title: "멘토링", desc: "전문가 1:1 맞춤 상담" }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-white to-brand-ivory p-8">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
        <h1 className="text-5xl font-batang text-brand-green mb-8 text-center">
          시작의 장
        </h1>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="bounce" stagger={0.2} delay={0.5}>
        <div className="grid grid-cols-2 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-gold">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-batang text-brand-green font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={1.2}>
        <p className="text-center text-brand-green mt-8 text-lg font-medium">
          성공적인 유학을 위한 체계적인 첫걸음을 시작하세요
        </p>
      </JourneyAnimationWrapper>
    </div>
  );
};

// Page 2: 성장의 장
export const JourneyPage2: React.FC<PageProps> = ({ isActive }) => {
  const monthlyTasks = [
    "1개월: 기초 어학 실력 진단 및 목표 설정",
    "2개월: 집중 어학 훈련 및 모의 시험",
    "3개월: 지원서 초안 작성 및 검토",
    "4개월: 추천서 준비 및 인터뷰 연습",
    "5개월: 최종 서류 완성 및 제출",
    "6개월: 합격 후 출국 준비 완료"
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-brand-ivory to-white p-8">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
        <h1 className="text-5xl font-batang text-brand-green mb-6 text-center">
          성장의 장
        </h1>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="fade" stagger={0.15} delay={0.5}>
        <div className="space-y-4 mb-8">
          {monthlyTasks.map((task, index) => (
            <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                {index + 1}
              </div>
              <p className="text-gray-700 flex-1">{task}</p>
            </div>
          ))}
        </div>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="bounce" delay={1.5}>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <div className="flex items-center">
            <div className="text-red-400 text-xl mr-3 animate-pulse">⚠️</div>
            <p className="text-red-700 font-medium">
              각 단계별 데드라인 준수가 성공의 핵심입니다!
            </p>
          </div>
        </div>
      </JourneyAnimationWrapper>
    </div>
  );
};

// Page 3: 진로의 장
export const JourneyPage3: React.FC<PageProps> = ({ isActive }) => {
  const checklistItems = [
    "전공 선택 및 학교 리서치 완료",
    "어학 점수 목표치 달성",
    "추천서 3부 확보",
    "자기소개서 완성",
    "포트폴리오 준비 (해당 시)",
    "면접 준비 및 연습",
    "재정증명서 준비",
    "비자 서류 준비"
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-white to-brand-ivory p-8">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
        <h1 className="text-5xl font-batang text-brand-green mb-6 text-center">
          진로의 장
        </h1>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.5}>
        <p className="text-center text-brand-gold text-xl font-medium mb-8">
          체크리스트로 확인하는 유학 준비 현황
        </p>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="fade" direction="left" stagger={0.1} delay={0.8}>
        <div className="space-y-3">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <input 
                type="checkbox" 
                className="mr-4 h-5 w-5 text-brand-green rounded focus:ring-brand-green"
                readOnly
              />
              <span className="text-gray-700 flex-1">{item}</span>
            </div>
          ))}
        </div>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={1.5}>
        <div className="mt-8 text-center">
          <p className="text-brand-green font-medium text-lg">
            모든 항목을 완료하면 합격 가능성이 크게 높아집니다
          </p>
        </div>
      </JourneyAnimationWrapper>
    </div>
  );
};

// Page 4: 도약의 장
export const JourneyPage4: React.FC<PageProps> = ({ isActive }) => {
  const achievements = [
    "성공적인 유학 지원서 제출",
    "목표 학교 합격 달성",
    "장학금 수혜 기회 획득",
    "글로벌 네트워크 구축",
    "전문 역량 강화"
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-brand-green to-brand-gold p-8 text-white">
      <JourneyAnimationWrapper isActive={isActive} effect="fade" delay={0.2}>
        <h1 className="text-5xl font-batang text-brand-ivory mb-8 text-center">
          도약의 장
        </h1>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="fade" stagger={0.2} delay={0.5}>
        <div className="mb-8">
          <h2 className="text-2xl font-batang text-brand-ivory mb-6 text-center">
            당신이 얻게 될 성과들
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="w-8 h-8 bg-brand-ivory text-brand-green rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  ✓
                </div>
                <p className="text-brand-ivory text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </JourneyAnimationWrapper>

      <JourneyAnimationWrapper isActive={isActive} effect="typewriter" delay={2}>
        <div className="text-center">
          <h2 className="text-3xl font-batang text-brand-ivory leading-relaxed">
            &ldquo;꿈을 현실로, 도전을 성공으로&rdquo;
          </h2>
          <p className="text-xl text-brand-ivory/90 mt-4">
            지금 시작하세요, 당신의 글로벌 미래를!
          </p>
        </div>
      </JourneyAnimationWrapper>
    </div>
  );
};