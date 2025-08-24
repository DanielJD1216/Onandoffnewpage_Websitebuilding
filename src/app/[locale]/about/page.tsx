import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';

const values = [
  {
    icon: '🤝',
    title: '신뢰와 투명성',
    description: '학생과 가족에게 정직하고 투명한 정보를 제공하며, 신뢰를 바탕으로 한 관계를 구축합니다.'
  },
  {
    icon: '🎯',
    title: '맞춤형 솔루션',
    description: '각 학생의 개별 상황과 목표에 맞는 최적의 교육 경로를 제시합니다.'
  },
  {
    icon: '🌟',
    title: '전문성과 경험',
    description: '다년간의 현지 경험과 전문 지식으로 성공적인 유학을 지원합니다.'
  },
  {
    icon: '❤️',
    title: '학생 중심 케어',
    description: '학생의 안전과 성장을 최우선으로 하는 세심한 관리와 지원을 제공합니다.'
  }
];

const team = [
  {
    name: '대표 컨설턴트',
    role: '교육 전문가',
    experience: '15년+ 캐나다 교육 경험',
    description: '밴쿠버 현지에서 직접 학생들을 지도하며 쌓은 풍부한 경험을 바탕으로 최적의 교육 솔루션을 제공합니다.'
  },
  {
    name: '학생 케어 매니저',
    role: '학생 지원 전문가',
    experience: '10년+ 학생 관리 경험',
    description: '학생들의 현지 적응과 생활 지원, 긴급 상황 대응까지 24/7 케어 서비스를 제공합니다.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-ivory/30 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="On & Off New Page 소개"
            subtitle="캐나다 교육의 새로운 시작, 학생의 꿈을 현실로 만드는 파트너"
            level={1}
          />
          
          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              On & Off New Page는 밴쿠버 현지에서 직접 운영되는 교육 컨설팅 회사로,
              한국 학생들의 성공적인 캐나다 유학을 위해 전문적이고 체계적인 서비스를 제공합니다.
              우리는 단순한 유학원이 아닌, 학생과 가족의 든든한 현지 파트너입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-brand-green/5 to-white">
              <h2 className="text-2xl font-black text-brand-green mb-4">우리의 미션</h2>
              <p className="text-gray-700 leading-relaxed">
                모든 한국 학생이 캐나다에서 안전하고 성공적인 교육 경험을 할 수 있도록
                현지 전문성과 진심 어린 케어로 지원합니다. 학생 개개인의 잠재력을 발견하고
                글로벌 인재로 성장할 수 있는 최적의 교육 환경을 제공합니다.
              </p>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-brand-ivory/50 to-white">
              <h2 className="text-2xl font-black text-brand-green mb-4">우리의 비전</h2>
              <p className="text-gray-700 leading-relaxed">
                캐나다 교육의 가치를 한국 가족들에게 전달하는 가장 신뢰받는 파트너가 되어,
                다음 세대의 글로벌 리더를 양성하는 데 기여합니다. 교육을 통해 학생들의
                꿈을 현실로 만드는 든든한 동반자가 되겠습니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="핵심 가치" className="mb-12" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="왜 On & Off New Page인가?" 
            subtitle="15년 이상의 현지 경험과 전문성으로 차별화된 서비스를 제공합니다"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-brand-green mb-2">500+</div>
              <h3 className="text-lg font-black mb-2">성공적인 유학생</h3>
              <p className="text-gray-600 text-sm">지금까지 함께한 학생들의 성공 스토리</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-black text-brand-green mb-2">15+</div>
              <h3 className="text-lg font-black mb-2">년 경험</h3>
              <p className="text-gray-600 text-sm">캐나다 교육 시스템의 깊은 이해</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-black text-brand-green mb-2">24/7</div>
              <h3 className="text-lg font-black mb-2">긴급 지원</h3>
              <p className="text-gray-600 text-sm">언제든 연락 가능한 현지 지원 시스템</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-black text-brand-green mb-2">100%</div>
              <h3 className="text-lg font-black mb-2">무료 상담</h3>
              <p className="text-gray-600 text-sm">입학까지 모든 상담 완전 무료</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-black text-brand-green mb-2">50+</div>
              <h3 className="text-lg font-black mb-2">파트너 학교</h3>
              <p className="text-gray-600 text-sm">캐나다 전역의 우수 교육기관과 협력</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-black text-brand-green mb-2">98%</div>
              <h3 className="text-lg font-black mb-2">만족도</h3>
              <p className="text-gray-600 text-sm">학생과 학부모님의 높은 만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="전문가 팀" 
            subtitle="풍부한 경험과 전문성을 갖춘 팀이 함께합니다"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-brand-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <h3 className="text-xl font-black text-brand-green">{member.name}</h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                  <p className="text-sm text-brand-green font-black mt-1">{member.experience}</p>
                </div>
                <p className="text-gray-700 text-center">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="연락처 및 위치" 
            subtitle="밴쿠버 현지 오피스에서 직접 만나보세요"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-xl font-black text-brand-green mb-6">오피스 정보</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-black text-gray-700 mb-1">주소</p>
                  <p className="text-gray-600">{COMPANY_INFO.address}</p>
                </div>
                <div>
                  <p className="font-black text-gray-700 mb-1">이메일</p>
                  <p className="text-gray-600">{COMPANY_INFO.email}</p>
                </div>
                <div>
                  <p className="font-black text-gray-700 mb-1">운영 시간</p>
                  <p className="text-gray-600">월-금: 9:00 AM - 6:00 PM (PST)</p>
                  <p className="text-gray-600">토: 10:00 AM - 3:00 PM (PST)</p>
                  <p className="text-gray-600">일: 휴무</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg" id="location">
              <h3 className="text-xl font-black text-brand-green mb-6">오시는 길</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  코퀴틀람 Austin Avenue에 위치한 저희 오피스는 
                  스카이트레인 Burquitlam Station에서 도보 10분 거리에 있습니다.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-black text-gray-700 mb-2">대중교통</p>
                  <p className="text-sm text-gray-600">
                    • Millennium Line - Burquitlam Station 하차<br/>
                    • 버스 160, 180 - Austin Ave 정류장 하차
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-black text-gray-700 mb-2">주차</p>
                  <p className="text-sm text-gray-600">
                    건물 내 무료 주차장 이용 가능
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            캐나다 유학의 꿈을 함께 실현해보세요
          </h2>
          <p className="text-xl text-brand-ivory mb-8 max-w-2xl mx-auto">
            전문가와의 무료 상담을 통해 맞춤형 유학 계획을 세워보세요
          </p>
          <Button
            size="lg"
            className="bg-white text-brand-green hover:bg-brand-ivory font-black px-8"
            asChild
          >
            <Link href="/ko/consultation">
              무료 상담 신청하기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}