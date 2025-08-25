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
      <section className="relative bg-gradient-to-b from-brand-ivory to-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading 
            title={COMPANY_INFO.taglineKr}
            subtitle={COMPANY_INFO.subtitleKr}
            level={1}
            variant="premium"
            className="mb-8"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 text-lg font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                무료 상담 예약
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-4 text-lg font-medium"
              asChild
            >
              <Link href={`/${params.locale}/programs`}>
                프로그램 안내
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="믿을 수 있는 교육 파트너" 
            subtitle="캐나다 현지에서 검증된 전문성과 신뢰성"
            variant="premium"
            centered={true}
            className="mb-12"
          />
          <TrustBadges className="max-w-6xl mx-auto" />
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