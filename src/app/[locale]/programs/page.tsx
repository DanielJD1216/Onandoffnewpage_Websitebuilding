import { SectionHeading } from '@/components/ui/section-heading';
import { Accordion } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/feature-card';
import { NoticeBox } from '@/components/ui/notice-box';
import { PROGRAMS } from '@/lib/constants';
import Link from 'next/link';

const programOverview = {
  id: 'overview',
  title: '프로그램 개요',
  defaultOpen: true,
  content: (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        On & Off New Page는 캐나다 전역의 우수한 교육청과 파트너십을 통해 
        학생들에게 최적의 유학 환경을 제공합니다. 각 지역별 특성을 고려하여 
        학생의 학업 목표와 관심사에 맞는 맞춤형 교육 프로그램을 제공합니다.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {Object.values(PROGRAMS).map((program, index) => (
          <Card key={index} className="p-6 border-0 shadow-lg">
            <div className="text-center mb-4">
              <span className="text-3xl mb-2 block">{program.iconKr}</span>
              <h3 className="text-xl font-black text-brand-green mb-4">{program.titleKr}</h3>
            </div>
            <ul className="space-y-2">
              {program.schools.map((school, schoolIndex) => (
                <li key={schoolIndex} className="flex items-center gap-2 text-gray-700">
                  <span className="text-brand-green">•</span>
                  {school}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
};

const programFeatures = {
  id: 'features',
  title: '프로그램 특징',
  content: (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <FeatureCard
        icon="🎯"
        title="맞춤형 학교 매칭"
        description="학생의 학업 수준, 관심 분야, 미래 목표를 고려한 최적의 학교 선택"
        variant="default"
      />
      <FeatureCard
        icon="📚"
        title="체계적인 학업 관리"
        description="정기적인 성적 모니터링과 학습 컨설팅을 통한 지속적인 학업 지원"
        variant="default"
      />
      <FeatureCard
        icon="🏠"
        title="안전한 생활 환경"
        description="엄선된 홈스테이 가정과 24시간 긴급 상황 대응 시스템"
        variant="default"
      />
      <FeatureCard
        icon="🌟"
        title="진로 설계 지원"
        description="대학 진학부터 취업까지 장기적인 진로 계획 수립 지원"
        variant="default"
      />
    </div>
  )
};

const homestayProgram = {
  id: 'homestay',
  title: '홈스테이 프로그램',
  content: (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 border-0 shadow-lg">
          <h3 className="text-xl font-black text-brand-green mb-4">홈스테이 선정 기준</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">범죄 기록 조회 및 백그라운드 체크 완료</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">안전하고 쾌적한 주거 환경 보장</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">학생 케어 경험 및 교육적 마인드</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">학교와의 접근성 및 교통편 고려</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 border-0 shadow-lg">
          <h3 className="text-xl font-black text-brand-green mb-4">홈스테이 포함 서비스</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">🍽️</span>
              <span className="text-gray-700">영양 균형잡힌 3식 식사 제공</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">🏠</span>
              <span className="text-gray-700">개인 침실 및 학습 공간 제공</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">🌐</span>
              <span className="text-gray-700">Wi-Fi 및 생활에 필요한 기본 시설</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">🚌</span>
              <span className="text-gray-700">등하교 교통편 정보 및 지원</span>
            </li>
          </ul>
        </Card>
      </div>

      <NoticeBox
        title="홈스테이 매칭 프로세스"
        message="학생의 성격, 식습관, 알레르기 등을 고려하여 최적의 홈스테이 가정과 매칭합니다."
        variant="info"
      />
    </div>
  )
};

const careServices = {
  id: 'care',
  title: '케어 서비스',
  content: (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-lg text-center">
          <span className="text-3xl mb-3 block">📞</span>
          <h3 className="text-lg font-black text-brand-green mb-3">24/7 긴급 연락</h3>
          <p className="text-gray-700 text-sm">
            언제든 연락 가능한 현지 담당자를 통한 즉시 대응 시스템
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center">
          <span className="text-3xl mb-3 block">🏥</span>
          <h3 className="text-lg font-black text-brand-green mb-3">의료 지원</h3>
          <p className="text-gray-700 text-sm">
            병원 방문 동행 및 의료보험 처리 지원
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center">
          <span className="text-3xl mb-3 block">📊</span>
          <h3 className="text-lg font-black text-brand-green mb-3">정기 리포트</h3>
          <p className="text-gray-700 text-sm">
            월간 학습 리포트 및 생활 상황 부모님께 전달
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center">
          <span className="text-3xl mb-3 block">🎓</span>
          <h3 className="text-lg font-black text-brand-green mb-3">학업 상담</h3>
          <p className="text-gray-700 text-sm">
            정기적인 학업 상담 및 진로 지도
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center">
          <span className="text-3xl mb-3 block">💳</span>
          <h3 className="text-lg font-black text-brand-green mb-3">생활 지원</h3>
          <p className="text-gray-700 text-sm">
            은행 계좌 개설, 핸드폰 개통 등 생활 정착 지원
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center">
          <span className="text-3xl mb-3 block">📋</span>
          <h3 className="text-lg font-black text-brand-green mb-3">비자 지원</h3>
          <p className="text-gray-700 text-sm">
            학생비자 연장 및 가디언십 서류 처리
          </p>
        </Card>
      </div>
    </div>
  )
};

const admissionProcess = {
  id: 'admission',
  title: '입학 절차',
  content: (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 border-0 shadow-lg text-center">
          <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-black">
            1
          </div>
          <h3 className="text-lg font-black text-brand-green mb-3">상담 및 평가</h3>
          <p className="text-gray-700 text-sm">
            학생 상황 분석 및 목표 설정
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center">
          <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-black">
            2
          </div>
          <h3 className="text-lg font-black text-brand-green mb-3">학교 선정</h3>
          <p className="text-gray-700 text-sm">
            맞춤형 학교 및 프로그램 추천
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center">
          <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-black">
            3
          </div>
          <h3 className="text-lg font-black text-brand-green mb-3">서류 준비</h3>
          <p className="text-gray-700 text-sm">
            입학 및 비자 서류 작성 지원
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center">
          <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-black">
            4
          </div>
          <h3 className="text-lg font-black text-brand-green mb-3">출국 준비</h3>
          <p className="text-gray-700 text-sm">
            홈스테이 매칭 및 오리엔테이션
          </p>
        </Card>
      </div>

      <Card className="p-6 border-0 shadow-lg">
        <h3 className="text-xl font-black text-brand-green mb-4">필요 서류 안내</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-black text-gray-800 mb-3">기본 서류</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-brand-green">•</span>
                여권 사본
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-green">•</span>
                최근 2년간 성적표
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-green">•</span>
                재학증명서
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-green">•</span>
                건강검진서
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-gray-800 mb-3">추가 서류</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-brand-green">•</span>
                영어 능력 증명서 (해당시)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-green">•</span>
                자기소개서
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-green">•</span>
                추천서 (선택사항)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-green">•</span>
                기타 특별활동 증명서
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
};

const costs = {
  id: 'costs',
  title: '비용 안내 (2025-2026)',
  content: (
    <div className="space-y-8">
      <NoticeBox
        title="2025-2026 학년도 비용 안내"
        message="아래 비용은 예상 금액이며, 환율 변동 및 교육청 정책에 따라 변동될 수 있습니다."
        variant="info"
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-brand-green text-white">
              <th className="p-4 text-left font-black">구분</th>
              <th className="p-4 text-center font-black">브리티시 컬럼비아</th>
              <th className="p-4 text-center font-black">온타리오</th>
              <th className="p-4 text-center font-black">기타 지역</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4 font-black text-gray-700">학비 (연간)</td>
              <td className="p-4 text-center">CAD $14,000 - $16,000</td>
              <td className="p-4 text-center">CAD $13,000 - $15,000</td>
              <td className="p-4 text-center">CAD $12,000 - $14,000</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4 font-black text-gray-700">홈스테이 (월)</td>
              <td className="p-4 text-center">CAD $1,100 - $1,300</td>
              <td className="p-4 text-center">CAD $1,000 - $1,200</td>
              <td className="p-4 text-center">CAD $900 - $1,100</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-black text-gray-700">가디언십</td>
              <td className="p-4 text-center">CAD $1,500 - $2,000</td>
              <td className="p-4 text-center">CAD $1,500 - $2,000</td>
              <td className="p-4 text-center">CAD $1,200 - $1,800</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4 font-black text-gray-700">의료보험 (연간)</td>
              <td className="p-4 text-center">CAD $600 - $800</td>
              <td className="p-4 text-center">CAD $500 - $700</td>
              <td className="p-4 text-center">CAD $500 - $700</td>
            </tr>
            <tr>
              <td className="p-4 font-black text-gray-700">기타 비용</td>
              <td className="p-4 text-center">CAD $2,000 - $3,000</td>
              <td className="p-4 text-center">CAD $2,000 - $3,000</td>
              <td className="p-4 text-center">CAD $1,500 - $2,500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-black text-brand-green mb-3">💰 무료 서비스</h3>
        <p className="text-gray-700 mb-4">
          On & Off New Page의 모든 컨설팅 서비스는 완전 무료입니다.
        </p>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-brand-green">✓</span>
            초기 상담 및 학교 선정
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-green">✓</span>
            입학 서류 작성 지원
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-green">✓</span>
            비자 신청 지원
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-green">✓</span>
            출국 전 오리엔테이션
          </li>
        </ul>
      </div>
    </div>
  )
};

const accordionItems = [
  programOverview,
  programFeatures,
  homestayProgram,
  careServices,
  admissionProcess,
  costs
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-ivory/30 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="프로그램 안내"
            subtitle="캐나다 전역의 우수 교육청과 파트너십을 통한 맞춤형 유학 프로그램"
            level={1}
          />

          {/* Quick Access Buttons */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mt-12">
            <Button variant="outline" size="lg" className="font-black" asChild>
              <Link href="/ko/services#independent">학생 단독 유학</Link>
            </Button>
            <Button variant="outline" size="lg" className="font-black" asChild>
              <Link href="/ko/services#parent-accompanied">부모 동반 유학</Link>
            </Button>
            <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 font-black" asChild>
              <Link href="/ko/contact">무료 상담 신청</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Accordion items={accordionItems} className="mb-12" />
          </div>
        </div>
      </section>

      {/* Education Board Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="교육청 바로가기" 
            subtitle="파트너 교육청의 공식 웹사이트에서 더 자세한 정보를 확인하세요"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-lg font-black text-brand-green mb-4">브리티시 컬럼비아</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.surreyschools.ca" target="_blank" rel="noopener noreferrer">
                    써리 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.sd43.bc.ca" target="_blank" rel="noopener noreferrer">
                    코퀴틀람 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.sd45.bc.ca" target="_blank" rel="noopener noreferrer">
                    웨스트 밴쿠버 교육청 →
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-lg font-black text-brand-green mb-4">온타리오</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.tdsb.on.ca" target="_blank" rel="noopener noreferrer">
                    토론토 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.yrdsb.ca" target="_blank" rel="noopener noreferrer">
                    요크 지역 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.hdsb.ca" target="_blank" rel="noopener noreferrer">
                    할튼 지역 교육청 →
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-lg font-black text-brand-green mb-4">기타 주요 지역</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.cbe.ab.ca" target="_blank" rel="noopener noreferrer">
                    캘거리 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.emsb.qc.ca" target="_blank" rel="noopener noreferrer">
                    몬트리올 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link href="/ko/contact">
                    맞춤 상담 신청 →
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            완벽한 유학 계획을 세워보세요
          </h2>
          <p className="text-xl text-brand-ivory mb-8 max-w-2xl mx-auto">
            전문가의 무료 상담으로 학생에게 최적화된 유학 프로그램을 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-green hover:bg-brand-ivory font-black px-8"
              asChild
            >
              <Link href="/ko/contact">
                무료 상담 신청하기
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-green font-black px-8"
              asChild
            >
              <Link href="/ko/success-stories">
                성공 사례 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}