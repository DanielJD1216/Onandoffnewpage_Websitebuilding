import { SectionHeading } from '@/components/ui/section-heading';
import { NoticeBox } from '@/components/ui/notice-box';
import { FeatureCard } from '@/components/ui/feature-card';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHero, PageSection } from '@/components/layout/PageSection';
import { CTASection } from '@/components/layout/CTASection';
import { FeatureGrid } from '@/components/ui/feature-grid';
import Link from 'next/link';

const independentFeatures = [
  {
    icon: '🎯',
    title: '맞춤형 학교 선택',
    description: '학생의 학업 목표와 관심사에 맞는 최적의 학교 및 프로그램 추천'
  },
  {
    icon: '🏠',
    title: '엄선된 홈스테이',
    description: '안전하고 교육적인 환경의 홈스테이 가정과 매칭'
  },
  {
    icon: '📚',
    title: '학업 관리',
    description: '정기적인 성적 모니터링과 학습 상담'
  },
  {
    icon: '🚨',
    title: '24/7 긴급 지원',
    description: '언제든 연락 가능한 현지 긴급 상황 대응 서비스'
  }
];

const parentAccompaniedFeatures = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: '가족 이민 상담',
    description: '부모 동반 시 필요한 비자 및 이민 절차 종합 안내'
  },
  {
    icon: '🏘️',
    title: '주거 솔루션',
    description: '가족 규모에 맞는 렌탈 하우스 및 아파트 매칭'
  },
  {
    icon: '🏫',
    title: '가족 정착 지원',
    description: '은행 계좌, 보험, 생활 인프라 구축 전반 지원'
  },
  {
    icon: '💼',
    title: '부모 취업 지원',
    description: '캐나다 내 취업 기회 정보 제공 및 네트워킹 지원'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero>
        <SectionHeading
          title="유학 서비스"
          subtitle="학생과 가족의 다양한 필요에 맞는 맞춤형 유학 솔루션을 제공합니다"
          level={1}
        />
        
        {/* Service Differentiation Notice */}
        <div className="max-w-4xl mx-auto mt-12">
          <NoticeBox
            title="어떤 유학 방식을 선택하시겠습니까?"
            message="학생의 나이, 가족 상황, 교육 목표에 따라 최적의 유학 방식을 선택할 수 있습니다."
            variant="info"
            buttons={[
              {
                text: '학생 단독 유학',
                href: '#independent',
                variant: 'default'
              },
              {
                text: '부모 동반 유학',
                href: '#parent-accompanied',
                variant: 'outline'
              }
            ]}
          />
        </div>
      </PageHero>

      {/* 학생 단독 유학 */}
      <PageSection containerClassName="max-w-6xl">
        <div id="independent">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">🎓</span>
            <h2 className="text-3xl font-black text-brand-green mb-6">
              학생 단독 유학
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              만 13세 이상 학생들이 독립적으로 캐나다에서 유학하는 프로그램입니다. 
              현지 홈스테이 가정에서 생활하며 캐나다 교육 시스템을 직접 경험할 수 있습니다.
            </p>
          </div>
          
          {/* 프로그램 특징 */}
          <FeatureGrid 
            items={independentFeatures} 
            columns={4} 
            className="mb-12"
          />

          {/* 적합한 학생 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-black text-brand-green mb-4">이런 학생에게 적합해요</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  만 13세 이상의 독립심이 강한 학생
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  새로운 환경에 빠르게 적응하는 학생
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  영어 실력 향상에 적극적인 학생
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  서구 문화 체험을 희망하는 학생
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-black text-brand-green mb-4">프로그램 장점</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  집중적인 영어 환경 노출
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  독립성과 자립심 발달
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  국제적 감각과 글로벌 네트워크 형성
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  상대적으로 경제적인 유학 비용
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </PageSection>

      {/* 부모 동반 유학 */}
      <PageSection variant="gray" containerClassName="max-w-6xl">
        <div id="parent-accompanied">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">👨‍👩‍👧‍👦</span>
            <h2 className="text-3xl font-black text-brand-green mb-6">
              부모 동반 유학
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              부모님이 함께 캐나다로 이주하여 자녀의 교육과 정착을 직접 지원하는 프로그램입니다. 
              가족 전체의 새로운 시작을 위한 종합적인 솔루션을 제공합니다.
            </p>
          </div>
          
          {/* 프로그램 특징 */}
          <FeatureGrid 
            items={parentAccompaniedFeatures} 
            columns={4} 
            className="mb-12"
          />

          {/* 적합한 가족 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-black text-brand-green mb-4">이런 가족에게 적합해요</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  어린 자녀(초등학생)가 있는 가족
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  가족 단위 이민을 고려하는 가족
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  자녀 교육에 적극적으로 참여하고 싶은 부모
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  새로운 환경에서 사업이나 커리어를 시작하고 싶은 부모
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-black text-brand-green mb-4">프로그램 장점</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  가족 단위의 안정적인 정착
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  자녀 교육에 직접적인 참여 가능
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  영주권 획득을 통한 장기 거주 가능
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green text-xl">•</span>
                  가족 모두의 글로벌 경험과 성장
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </PageSection>

      {/* Comparison Section */}
      <PageSection>
        <SectionHeading 
          title="어떤 방식이 우리 가족에게 맞을까요?" 
          subtitle="각 프로그램의 특징을 비교해보세요"
          className="mb-12"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="p-4 text-left font-black">비교 항목</th>
                  <th className="p-4 text-center font-black">학생 단독 유학</th>
                  <th className="p-4 text-center font-black">부모 동반 유학</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-black text-gray-700">적정 연령</td>
                  <td className="p-4 text-center">만 13세 이상</td>
                  <td className="p-4 text-center">전 연령</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-black text-gray-700">거주 형태</td>
                  <td className="p-4 text-center">홈스테이</td>
                  <td className="p-4 text-center">독립 거주</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-black text-gray-700">비용</td>
                  <td className="p-4 text-center">상대적 저비용</td>
                  <td className="p-4 text-center">상대적 고비용</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-black text-gray-700">영어 습득</td>
                  <td className="p-4 text-center">빠른 습득</td>
                  <td className="p-4 text-center">점진적 습득</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-gray-700">가족 케어</td>
                  <td className="p-4 text-center">전문 케어 서비스</td>
                  <td className="p-4 text-center">부모 직접 케어</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <CTASection
        title="어떤 유학 방식이 가장 적합한지 궁금하세요?"
        subtitle="전문가와의 상담을 통해 가족에게 최적의 유학 방식을 찾아보세요"
        buttons={[
          {
            text: '무료 상담 신청하기',
            href: '/ko/contact'
          },
          {
            text: '프로그램 상세보기',
            href: '/ko/programs',
            variant: 'outline'
          }
        ]}
      />
    </div>
  );
}