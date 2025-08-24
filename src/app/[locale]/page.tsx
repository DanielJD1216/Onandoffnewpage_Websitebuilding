import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
          <h1 className="text-4xl md:text-6xl font-black text-brand-green mb-6 leading-tight">
            캐나다 유학, 꿈을 현실로
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8 max-w-3xl mx-auto">
            밴쿠버 현지에서 직접 운영하는 신뢰할 수 있는 교육 컨설팅
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 text-lg font-black"
              asChild
            >
              <Link href={`/${params.locale}/consultation`}>
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

      {/* Key Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-brand-green mb-16">
            왜 On & Off New Page인가?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🏢</span>
              </div>
              <h3 className="text-lg font-black text-brand-green mb-2">
                밴쿠버 현지 직접 운영
              </h3>
              <p className="text-gray-600 font-medium text-sm">
                밴쿠버 현지 오피스에서 직접 관리하는 신뢰할 수 있는 서비스
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🏠</span>
              </div>
              <h3 className="text-lg font-black text-brand-green mb-2">
                검증된 홈스테이 관리
              </h3>
              <p className="text-gray-600 font-medium text-sm">
                엄선된 홈스테이 가정과 지속적인 품질 관리
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🚨</span>
              </div>
              <h3 className="text-lg font-black text-brand-green mb-2">
                24/7 긴급 지원
              </h3>
              <p className="text-gray-600 font-medium text-sm">
                현지에서 24시간 긴급상황 대응 및 학생 케어
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-lg font-black text-brand-green mb-2">
                비자 신청 지원 서비스
              </h3>
              <p className="text-gray-600 font-medium text-sm">
                학생비자부터 가디언십까지 원스톱 지원
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-brand-green mb-16">
            주요 프로그램
          </h2>
          
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            캐나다 유학의 첫 걸음을 함께 하세요
          </h2>
          <p className="text-xl text-brand-ivory mb-8 font-medium max-w-2xl mx-auto">
            무료 상담을 통해 학생에게 최적의 유학 계획을 세워보세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-green hover:bg-brand-ivory px-8 py-4 text-lg font-black"
              asChild
            >
              <Link href={`/${params.locale}/consultation`}>
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
            <p className="text-white text-sm">204-1046 Austin Avenue, Coquitlam, British Columbia</p>
          </div>
        </div>
      </section>
    </div>
  );
}