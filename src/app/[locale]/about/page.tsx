import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrustBadges } from '@/components/ui/trust-badges';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { MapPin, Clock, Mail, Phone, Award, Users, Building, CheckCircle } from 'lucide-react';

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
    name: '이승연 대표',
    role: 'CEO & 교육 컨설턴트',
    experience: '5년+ 캐나다 교육 경험',
    credentials: '교육 컨설팅 전문가',
    specialization: 'BC 및 온타리오 교육청 전문',
    description: '2020년부터 밴쿠버 현지에서 100명 이상의 한국 학생들의 성공적인 유학을 지원해왔습니다. 특히 BC주 교육청과의 긴밀한 파트너십을 통해 최적의 학교 배치를 제공합니다.',
    achievements: ['교육 컨설팅 전문가', '밴쿠버 교육청 협력', '100+ 학생 성공 배치']
  },
  {
    name: '임혜린 매니저',
    role: '학생 케어 & 홈스테이 매니저',
    experience: '8년+ 학생 관리 경험',
    credentials: '학생 케어 전문가',
    specialization: '학생 생활 관리 및 응급 대응',
    description: '24시간 학생 케어 시스템을 운영하며, 홈스테이 품질 관리와 학생들의 현지 적응을 전담합니다. 응급 상황 대응 및 학부모 소통을 책임집니다.',
    achievements: ['학생 케어 전문가', '응급 대응 자격증', '8년 무사고 관리']
  },
  {
    name: '박상우 컨설턴트',
    role: '프로그램 & 입학 컨설턴트',
    experience: '6년+ 입학 컨설팅 경험',
    credentials: 'UBC 교육학 석사',
    specialization: '대학 진학 및 프로그램 설계',
    description: 'UBC에서 교육학을 전공하고 캐나다 교육 시스템에 대한 깊은 이해를 바탕으로 학생별 맞춤형 교육 계획을 수립합니다.',
    achievements: ['UBC 교육학 석사', '100+ 대학 진학 성공', '맞춤형 커리큘럼 설계']
  }
];

const partnerships = [
  {
    name: '브리티시 컬럼비아 교육청',
    type: '공식 파트너',
    description: 'BC주 내 주요 교육청과의 직접적인 파트너십',
    regions: ['버나비', '코퀴틀람', '웨스트 밴쿠버', '리치몬드']
  },
  {
    name: '온타리오 교육청',
    type: '공식 파트너', 
    description: '토론토 및 주변 지역 교육청과의 협력 관계',
    regions: ['토론토', '요크 지역', '할튼 지역']
  }
];

const officeFeatures = [
  {
    icon: Building,
    title: '현대적 오피스 환경',
    description: '학생과 부모님이 편안하게 상담받을 수 있는 모던한 공간'
  },
  {
    icon: Users,
    title: '다국어 지원',
    description: '한국어, 영어 상담 지원'
  },
  {
    icon: MapPin,
    title: '교통 접근성',
    description: '스카이트레인 및 주요 버스 노선 접근 용이'
  },
  {
    icon: CheckCircle,
    title: '무료 주차',
    description: '방문 고객을 위한 충분한 무료 주차 공간'
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
            variant="premium"
          />
          
          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              On & Off New Page는 밴쿠버 현지에서 직접 운영되는 교육 컨설팅 회사로,
              한국 학생들의 성공적인 캐나다 유학을 위해 전문적이고 체계적인 서비스를 제공합니다.
              우리는 단순한 유학원이 아닌, 학생과 가족의 든든한 현지 파트너입니다.
            </p>
            
            {/* Founding Story */}
            <div className="bg-white/80 rounded-2xl p-8 border border-brand-green/10 shadow-lg">
              <h3 className="text-2xl font-black text-brand-green mb-4">창립 스토리</h3>
              <p className="text-gray-700 leading-relaxed">
                2020년, 코로나19로 인한 어려운 상황에서도 캐나다 유학의 꿈을 포기하지 않는 
                한국 학생들과 가족들을 보며 시작되었습니다. 현지에서 직접 경험한 어려움들을 
                바탕으로 더 나은 지원 시스템을 만들고자 하는 마음으로 설립되었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <TrustBadges className="max-w-6xl mx-auto" />
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
              <div className="text-4xl font-black text-brand-green mb-2">100+</div>
              <h3 className="text-lg font-black mb-2">성공적인 유학생</h3>
              <p className="text-gray-600 text-sm">지금까지 함께한 학생들의 성공 스토리</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-black text-brand-green mb-2">5+</div>
              <h3 className="text-lg font-black mb-2">년 경험</h3>
              <p className="text-gray-600 text-sm">2020년부터 축적된 전문 노하우</p>
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
              <div className="text-4xl font-black text-brand-green mb-2">20+</div>
              <h3 className="text-lg font-black mb-2">파트너 학교</h3>
              <p className="text-gray-600 text-sm">BC 및 온타리오주 우수 교육기관과 협력</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-black text-brand-green mb-2">95%</div>
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
            variant="premium"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="group relative p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-brand-ivory/10 overflow-hidden">
                {/* Korean-style decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-green/10 to-transparent rounded-full transform translate-x-6 -translate-y-6" />
                
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-brand-green/25 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-black text-brand-green mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-brand-green font-black">{member.experience}</p>
                  
                  {/* Credentials Badge */}
                  <div className="inline-block bg-brand-green/10 rounded-full px-3 py-1 mt-2">
                    <p className="text-xs font-black text-brand-green">{member.credentials}</p>
                  </div>
                </div>
                
                {/* Specialization */}
                <div className="mb-4 p-3 bg-brand-ivory/30 rounded-lg border border-brand-green/10">
                  <p className="text-xs font-black text-brand-green mb-1">전문 분야</p>
                  <p className="text-sm text-gray-700">{member.specialization}</p>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                
                {/* Achievements */}
                <div className="space-y-2">
                  {member.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span className="text-xs text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
                
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="파트너십 & 인증" 
            subtitle="신뢰할 수 있는 기관들과의 공식적인 협력 관계"
            variant="premium"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partnerships.map((partner, index) => (
              <Card key={index} className="group p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-green/5">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-black text-brand-green">{partner.name}</h3>
                      <span className="bg-brand-green/10 text-brand-green text-xs font-black px-2 py-1 rounded-full">
                        {partner.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-3">{partner.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {partner.regions.map((region, regionIndex) => (
                        <span key={regionIndex} className="bg-brand-ivory/50 text-brand-green text-xs px-2 py-1 rounded">
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="밴쿠버 오피스" 
            subtitle="현지에서 직접 운영하는 전문적인 상담 공간"
            variant="premium"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {officeFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon="🏢"
                title={feature.title}
                description={feature.description}
                variant="premium"
              />
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-green/5 relative overflow-hidden">
              {/* Korean decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-green/10 to-transparent rounded-full transform translate-x-6 -translate-y-6" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-green">오피스 정보</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-black text-gray-700 mb-1">주소</p>
                    <p className="text-gray-600 leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-black text-gray-700 mb-1">이메일</p>
                    <p className="text-gray-600">{COMPANY_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-black text-gray-700 mb-2">운영 시간</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">월-금: 9:00 AM - 6:00 PM (PST)</p>
                      <p className="text-gray-600">토: 10:00 AM - 3:00 PM (PST)</p>
                      <p className="text-gray-600">일: 휴무</p>
                    </div>
                  </div>
                </div>
                
                {/* Emergency contact */}
                <div className="bg-brand-ivory/30 p-4 rounded-xl border border-brand-green/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-brand-green" />
                    <p className="font-black text-brand-green text-sm">긴급 상황 24시간 연락</p>
                  </div>
                  <p className="text-xs text-gray-600">학생 응급 상황 시 언제든 연락 가능</p>
                </div>
              </div>
            </Card>
            
            <Card className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-ivory/20 relative overflow-hidden" id="location">
              {/* Korean decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full transform translate-x-6 -translate-y-6" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-green">오시는 길</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  코퀴틀람 Austin Avenue에 위치한 저희 오피스는 
                  스카이트레인 Burquitlam Station에서 도보 10분 거리에 있습니다.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-5 rounded-xl border border-blue-200/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">🚇</span>
                    </div>
                    <p className="font-black text-blue-800 text-sm">대중교통</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Millennium Line - Burquitlam Station 하차</p>
                    <p>• 버스 160, 180 - Austin Ave 정류장 하차</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100/50 p-5 rounded-xl border border-green-200/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">🚗</span>
                    </div>
                    <p className="font-black text-green-800 text-sm">주차 안내</p>
                  </div>
                  <p className="text-sm text-gray-700">건물 내 무료 주차장 이용 가능</p>
                </div>
                
                {/* Appointment reminder */}
                <div className="bg-brand-green/10 p-4 rounded-xl border border-brand-green/20">
                  <p className="text-xs font-black text-brand-green mb-1">방문 예약 안내</p>
                  <p className="text-xs text-gray-600">원활한 상담을 위해 사전 예약을 권장합니다</p>
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
            <Link href="/ko/contact">
              무료 상담 신청하기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}