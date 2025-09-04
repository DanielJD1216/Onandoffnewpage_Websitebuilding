import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FeatureCard } from '@/components/ui/feature-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { TrustBadges } from '@/components/ui/trust-badges';
import { COMPANY_INFO, FEATURES, PROGRAMS } from '@/lib/constants';
import Link from 'next/link';

export function generateStaticParams() {
  return [{ locale: 'ko' }, { locale: 'en' }];
}

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-brand-ivory/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Trust Indicator Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full">
              <span className="text-brand-green font-bold">🏆 2025년 캐나다 유학 전문</span>
              <span className="text-sm text-gray-600">밴쿠버 현지 직영 사무소</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-black text-brand-green mb-6 leading-tight font-batang">
              자녀의 꿈이 실현되는 곳<br/>
              <span className="text-3xl lg:text-5xl text-gray-700">캐나다 맞춤 유학 설계</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              밴쿠버 현지에서 직접 관리하는 <span className="font-bold text-brand-green">11-18세 전문</span> 유학 컨설팅<br/>
              <span className="text-lg">초등학생부터 대학 입학까지, 5년+ 경험으로 안전하게 지원합니다</span>
            </p>
            
            {/* Value Propositions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="text-2xl font-black text-brand-green">100%</div>
                <div className="text-sm text-gray-600">완전 무료 상담</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="text-2xl font-black text-brand-green">24/7</div>
                <div className="text-sm text-gray-600">긴급 상황 지원</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="text-2xl font-black text-brand-green">500+</div>
                <div className="text-sm text-gray-600">성공 사례</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="text-2xl font-black text-brand-green">98%</div>
                <div className="text-sm text-gray-600">학부모 만족도</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white px-10 py-5 text-xl font-black shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                지금 무료 상담 예약 →
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-10 py-5 text-xl font-bold"
              asChild
            >
              <Link href={`/${params.locale}/program`}>
                프로그램 둘러보기
              </Link>
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              ⭐⭐⭐⭐⭐ &quot;우리 아이가 안전하게 유학할 수 있어 감사합니다&quot; - 김○○ 학부모님
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges & Service Types */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="두 가지 맞춤 서비스" 
            subtitle="가족 상황에 따른 최적의 유학 솔루션"
            variant="premium"
            centered={true}
            className="mb-12"
          />
          
          {/* Service Type Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Independent Service */}
            <Card className="relative overflow-hidden border-2 border-brand-green/20 hover:border-brand-green transition-all p-8">
              <div className="absolute top-0 right-0 bg-brand-green text-white px-4 py-1 text-sm font-bold">
                인기 프로그램
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-black text-brand-green mb-2">자녀 단독 유학</h3>
                <p className="text-gray-600">중·고등학생 독립형 프로그램</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1">✓</span>
                  <span>홈스테이 배정 및 관리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1">✓</span>
                  <span>가디언십 서비스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1">✓</span>
                  <span>정기 학업 모니터링</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1">✓</span>
                  <span>24시간 긴급 지원</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white" asChild>
                <Link href={`/${params.locale}/contact?type=independent`}>
                  자녀 단독 유학 상담
                </Link>
              </Button>
            </Card>
            
            {/* Parent-Accompanied Service */}
            <Card className="relative overflow-hidden border-2 border-brand-gold/20 hover:border-brand-gold transition-all p-8">
              <div className="absolute top-0 right-0 bg-brand-gold text-white px-4 py-1 text-sm font-bold">
                프리미엄 케어
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-black text-brand-gold mb-2">부모 동반 유학</h3>
                <p className="text-gray-600">초·중등 가족 이민형 프로그램</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>부모 비자 신청 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>주거지 정착 서비스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>생활 정착 토탈 케어</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>부모 영어 교육 연계</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white" asChild>
                <Link href={`/${params.locale}/contact?type=parent-accompanied`}>
                  부모 동반 유학 상담
                </Link>
              </Button>
            </Card>
          </div>
          
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="왜 On & Off New Page인가?" 
            variant="premium"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FEATURES.local.iconKr}
              title={FEATURES.local.titleKr}
              description={FEATURES.local.descriptionKr}
              variant="premium"
            />
            <FeatureCard
              icon={FEATURES.homestay.iconKr}
              title={FEATURES.homestay.titleKr}
              description={FEATURES.homestay.descriptionKr}
              variant="premium"
            />
            <FeatureCard
              icon={FEATURES.support.iconKr}
              title={FEATURES.support.titleKr}
              description={FEATURES.support.descriptionKr}
              variant="premium"
            />
            <FeatureCard
              icon={FEATURES.visa.iconKr}
              title={FEATURES.visa.titleKr}
              description={FEATURES.visa.descriptionKr}
              variant="premium"
            />
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 bg-brand-ivory/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="유학생들의 생생한 성공 이야기" 
            subtitle="온앤오프 뉴페이지와 함께 꿈을 이룬 학생들"
            variant="premium"
            centered={true}
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Soobin's Story */}
            <Card className="bg-white p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-brand-green">수빈 학생</h3>
                  <p className="text-sm text-brand-gold font-bold">Michigan State University 진학</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                &quot;처음엔 새로운 환경과 영어 수업이 막막했지만, 뉴페이지 선생님들이 하나하나 도와주셔서 자신감을 회복했어요. 
                특히 한 달에 한 번씩 있던 보드게임, 분식 파티, 시애틀 투어 같은 프로그램들이 정말 큰 힘이 되었습니다.&quot;
              </blockquote>
              
              <div className="bg-brand-green/5 rounded-lg p-4">
                <p className="text-sm font-bold text-brand-green mb-2">핵심 지원 내용:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 맞춤형 학업 컨설팅 및 튜터 연결</li>
                  <li>• 월간 문화 프로그램 및 나들이</li>
                  <li>• 지속적인 정서적 지원</li>
                </ul>
              </div>
            </Card>
            
            {/* Sian's Story */}
            <Card className="bg-white p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-brand-green">시안 학생</h3>
                  <p className="text-sm text-brand-gold font-bold">University of Toronto 진학</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                &quot;홈스테이가 맞지 않아 힘들었는데, 뉴페이지가 저와 정말 잘 맞는 가정을 찾아주셨어요. 
                서희 언니가 미술 튜터까지 해주시고 맛있는 음식도 챙겨주셔서, 낯선 나라에서도 가족 같은 따뜻함을 느꼈습니다.&quot;
              </blockquote>
              
              <div className="bg-brand-green/5 rounded-lg p-4">
                <p className="text-sm font-bold text-brand-green mb-2">핵심 지원 내용:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 맞춤형 홈스테이 매칭</li>
                  <li>• 미술 포트폴리오 지원</li>
                  <li>• 12학년 졸업까지 전방위 케어</li>
                </ul>
              </div>
            </Card>
          </div>
          
          {/* Parent Testimonial Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-black text-center text-brand-green mb-8">학부모님들의 믿음직한 후기</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white p-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  &quot;정기적인 리포트와 24시간 지원으로 안심할 수 있었어요.&quot;
                </p>
                <p className="text-xs font-bold text-brand-green">박○○ 어머님</p>
                <p className="text-xs text-gray-500">고2 자녀, 밴쿠버</p>
              </Card>
              
              <Card className="bg-white p-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  &quot;정착 과정이 정말 수월했습니다. 모든 과정을 도와주셨어요.&quot;
                </p>
                <p className="text-xs font-bold text-brand-green">이○○ 아버님</p>
                <p className="text-xs text-gray-500">초6 자녀, 토론토</p>
              </Card>
              
              <Card className="bg-white p-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  &quot;현지 사무소가 있어서 문제 대응이 빠릅니다.&quot;
                </p>
                <p className="text-xs font-bold text-brand-green">최○○ 어머님</p>
                <p className="text-xs text-gray-500">중3 자녀, 코퀴틀람</p>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href={`/${params.locale}/success-stories`} className="text-brand-green font-bold text-lg hover:underline">
              더 많은 성공 사례 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="주요 프로그램" 
            subtitle="캐나다 전 지역 맞춤형 교육 솔루션"
            variant="premium"
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-brand-green text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-black text-brand-green mb-3 text-center">
                브리티시 컬럼비아 (BC)
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  버나비 교육청
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  코퀴틀람 교육청
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  웨스트 밴쿠버 교육청
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-brand-green text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-black text-brand-green mb-3 text-center">
                온타리오 (Toronto)
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  토론토 교육청
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  요크 지역 교육청
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  할튼 지역 교육청
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-brand-green text-2xl">🌲</span>
              </div>
              <h3 className="text-xl font-black text-brand-green mb-3 text-center">
                기타 주요 지역
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  알버타주 캘거리
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  퀘벡주 몬트리올
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  맞춤형 지역 상담
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline" 
              className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-3 text-lg font-medium"
              asChild
            >
              <Link href={`/${params.locale}/programs`}>
                전체 프로그램 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-green py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading 
            title={COMPANY_INFO.consultation.ctaKr}
            subtitle={COMPANY_INFO.consultation.ctaSubtitleKr}
            centered={true}
            className="mb-8 text-white [&_h2]:text-white [&_p]:text-brand-ivory"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-green hover:bg-brand-ivory px-8 py-4 text-lg font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                지금 상담 신청하기
              </Link>
            </Button>
            
            <Button 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-green px-8 py-4 text-lg font-medium"
              asChild
            >
              <Link href={`/${params.locale}/about`}>
                회사 소개
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-green/20">
            <p className="text-brand-ivory font-medium mb-2">밴쿠버 사무실</p>
            <p className="text-white text-sm">{COMPANY_INFO.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}