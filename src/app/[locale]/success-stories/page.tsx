import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NoticeBox } from '@/components/ui/notice-box';
import Link from 'next/link';

const successStories = [
  {
    id: 1,
    studentGrade: '중학교 2학년',
    destination: '브리티시 컬럼비아 - 웨스트 밴쿠버',
    year: '2023년',
    challenge: '영어 실력이 부족한 상태에서 유학 시작',
    solution: '체계적인 ESL 프로그램과 홈스테이 가정의 지속적인 지원',
    result: '1년 만에 정규 과정 진입, 현재 우수한 성적 유지',
    quote: '처음엔 영어가 너무 어려웠지만, 선생님들과 홈스테이 가족들이 많이 도와주셔서 빨리 적응할 수 있었어요.',
    icon: '🎓'
  },
  {
    id: 2,
    studentGrade: '고등학교 1학년',
    destination: '온타리오 - 토론토',
    year: '2022년',
    challenge: '새로운 환경에 대한 불안감과 향수병',
    solution: '정기적인 상담과 한국 학생들과의 네트워킹 프로그램',
    result: '학교 학생회 활동 참여, 다수의 친구들과 좋은 관계 형성',
    quote: '담당 선생님께서 매주 안부를 물어봐 주시고, 친구들도 많이 사귈 수 있도록 도움을 주셔서 정말 감사해요.',
    icon: '🌟'
  },
  {
    id: 3,
    studentGrade: '고등학교 3학년',
    destination: '브리티시 컬럼비아 - 코퀴틀람',
    year: '2021년',
    challenge: '대학 진학을 위한 진로 설계 고민',
    solution: '개인별 맞춤 진로 상담 및 대학 입시 준비 지원',
    result: 'UBC (브리티시 컬럼비아 대학교) 공학부 진학 성공',
    quote: '선생님들이 제 관심사와 적성을 파악해서 최적의 진로를 제시해 주셔서 꿈의 대학에 합격할 수 있었습니다.',
    icon: '🚀'
  },
  {
    id: 4,
    studentGrade: '초등학교 6학년 + 부모님',
    destination: '브리티시 컬럼비아 - 버나비',
    year: '2023년',
    challenge: '가족 전체의 이민 및 정착에 대한 종합적인 지원 필요',
    solution: '부모 비자 처리부터 아이 학교 등록, 주거 지원까지 원스톱 서비스',
    result: '현재 안정적으로 정착하여 가족 모두 만족스러운 캐나다 생활 중',
    quote: '처음 이민 계획을 세울 때 막막했는데, A부터 Z까지 모든 것을 도와주셔서 성공적으로 정착할 수 있었습니다.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 5,
    studentGrade: '중학교 3학년',
    destination: '브리티시 컬럼비아 - 써리',
    year: '2022년',
    challenge: '특별한 관심사(음악)를 살릴 수 있는 학교 찾기',
    solution: '학생의 재능을 고려한 음악 특화 프로그램이 있는 학교 매칭',
    result: '학교 오케스트라 단원으로 활동하며 음악 장학금 수혜',
    quote: '제가 좋아하는 음악을 계속 할 수 있는 학교를 찾아주셔서 너무 행복하게 유학 생활을 하고 있어요.',
    icon: '🎵'
  },
  {
    id: 6,
    studentGrade: '고등학교 2학년',
    destination: '온타리오 - 요크 지역',
    year: '2021년',
    challenge: '코로나19로 인한 온라인 수업 적응과 사회적 고립',
    solution: '온라인 학습 지원과 안전한 소규모 활동 프로그램 제공',
    result: '성적 향상과 함께 건전한 친구 관계 형성, 리더십 역량 개발',
    quote: '어려운 시기였지만 선생님들의 세심한 관리 덕분에 오히려 더 성장할 수 있었던 것 같아요.',
    icon: '💪'
  }
];

const statisticsData = [
  {
    number: '95%',
    label: '학생 만족도',
    description: '유학 프로그램 전반에 대한 학생 만족도'
  },
  {
    number: '100%',
    label: '안전한 정착',
    description: '모든 학생들의 안전한 캐나다 정착'
  },
  {
    number: '90%',
    label: '진학 성공률',
    description: '원하는 상급학교 진학 성공률'
  },
  {
    number: '3년',
    label: '평균 케어 기간',
    description: '학생 1인당 평균 관리 기간'
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-ivory/30 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="성공 사례"
            subtitle="On & Off New Page와 함께 캐나다 유학 꿈을 이룬 학생들의 이야기"
            level={1}
          />
          
          <NoticeBox
            title="개인정보 보호 안내"
            message="모든 사례는 학생과 가족의 동의 하에 개인정보를 익명화하여 공유합니다."
            variant="info"
            className="max-w-4xl mx-auto mt-12"
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="성과 통계" 
            subtitle="숫자로 보는 우리의 성과"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {statisticsData.map((stat, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg text-center">
                <div className="text-4xl font-black text-brand-green mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-black text-gray-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="학생들의 생생한 이야기" 
            subtitle="실제 경험을 바탕으로 한 성공 사례들"
            className="mb-12"
          />
          
          <div className="max-w-6xl mx-auto space-y-8">
            {successStories.map((story, index) => (
              <Card key={story.id} className="p-8 border-0 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Story Icon & Info */}
                  <div className="lg:w-1/4">
                    <div className="text-center mb-4">
                      <span className="text-4xl mb-2 block">{story.icon}</span>
                      <div className="text-sm text-gray-600">
                        <div className="font-black">{story.studentGrade}</div>
                        <div>{story.destination}</div>
                        <div>{story.year}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="lg:w-3/4 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-black text-red-800 mb-2">😟 도전 상황</h3>
                        <p className="text-sm text-gray-700">{story.challenge}</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-black text-blue-800 mb-2">💡 해결 방안</h3>
                        <p className="text-sm text-gray-700">{story.solution}</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-black text-green-800 mb-2">✨ 성과</h3>
                        <p className="text-sm text-gray-700">{story.result}</p>
                      </div>
                    </div>
                    
                    {/* Student Quote */}
                    <div className="bg-brand-ivory/30 p-6 rounded-lg border-l-4 border-brand-green">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl text-brand-green flex-shrink-0">"</span>
                        <div>
                          <p className="text-gray-700 italic mb-2">{story.quote}</p>
                          <p className="text-sm font-black text-brand-green">- 익명의 학생</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlights */}
      <section className="py-16 bg-brand-green">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="학부모님들의 감사 인사" 
            subtitle="함께 해주신 가족분들의 진심어린 후기"
            className="mb-12 text-white [&>p]:text-brand-ivory"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 bg-white/10 border-0 backdrop-blur-sm">
              <div className="text-white">
                <div className="text-3xl mb-4">💝</div>
                <p className="mb-4 italic">
                  "아이가 혼자 유학을 떠나는 것이 걱정되었지만, 담당자분께서 정기적으로 연락을 주셔서 안심할 수 있었습니다."
                </p>
                <p className="text-sm text-brand-ivory">- 중학생 학부모</p>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 border-0 backdrop-blur-sm">
              <div className="text-white">
                <div className="text-3xl mb-4">🙏</div>
                <p className="mb-4 italic">
                  "가족 이민부터 아이 교육까지 모든 것을 도와주셔서 성공적으로 정착할 수 있었습니다. 정말 감사드립니다."
                </p>
                <p className="text-sm text-brand-ivory">- 초등생 학부모</p>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 border-0 backdrop-blur-sm">
              <div className="text-white">
                <div className="text-3xl mb-4">⭐</div>
                <p className="mb-4 italic">
                  "단순히 학교만 보내는 것이 아니라, 아이의 적성과 미래를 고려해서 진로 상담까지 해주시니 든든합니다."
                </p>
                <p className="text-sm text-brand-ivory">- 고등학생 학부모</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-brand-green mb-6">
              당신도 성공 스토리의 주인공이 되세요
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              전문가의 맞춤 상담으로 학생만의 성공적인 유학 계획을 세워보세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-black px-8"
                asChild
              >
                <Link href="/ko/contact">
                  무료 상담 신청하기
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-black px-8"
                asChild
              >
                <Link href="/ko/programs">
                  프로그램 자세히 보기
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-black text-brand-green mb-4">📞 지금 바로 연락하세요!</h3>
              <p className="text-gray-700 mb-4">
                상담은 완전 무료이며, 부담 없이 궁금한 점을 문의하실 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-black">이메일:</span>
                  <span className="text-brand-green">info@onoffnewpage.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-black">응답 시간:</span>
                  <span className="text-gray-600">영업일 기준 1-2일 내</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}