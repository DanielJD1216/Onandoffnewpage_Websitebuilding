import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NoticeBox } from '@/components/ui/notice-box';
import { SuccessStoryCard } from '@/components/ui/success-story-card';
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
    <div className="min-h-screen" style={{backgroundImage: 'linear-gradient(to bottom, white 35%, #f8f6f0 100%)'}}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-ivory/30 to-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">✨</div>
            <SectionHeading
              title="꿈을 현실로 만든 이야기들"
              subtitle="용기 있는 첫 걸음이 만들어낸 아름다운 변화의 순간들을 함께 나누어요"
              level={1}
            />
            
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                이곳에는 진짜 학생들의 진짜 이야기가 담겨있습니다.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-brand-green/10 via-brand-ivory/30 to-brand-gold/10 p-6 rounded-2xl max-w-4xl mx-auto mt-12 border-l-4 border-brand-green shadow-lg">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="font-black text-brand-green mb-2">소중한 이야기를 지키는 약속</h3>
                <p className="text-gray-800 leading-relaxed">
                  모든 이야기는 학생과 가족분들의 따뜻한 동의 하에, 개인정보를 안전하게 보호하며 공유됩니다. 
                  각각의 경험이 다른 가족들에게 희망과 용기가 되기를 바라는 마음으로 나누어집니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🌈</div>
            <SectionHeading 
              title="함께 만들어온 소중한 결실들" 
              subtitle="숫자 하나하나에 담긴 진실한 이야기들"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              통계는 차가운 숫자일 수 있지만, 우리에게는 한 명 한 명의 학생과 가족이 이루어낸 
              따뜻한 성공의 증거입니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {statisticsData.map((stat, index) => {
              const colors = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600', 
                'from-purple-500 to-purple-600',
                'from-orange-500 to-orange-600'
              ];
              const icons = ['😊', '🏡', '🎯', '⏰'];
              
              return (
                <Card key={index} className="group p-8 border-0 shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{icons[index]}</div>
                    <div className={`text-5xl font-black mb-3 text-brand-green group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-black text-gray-800 mb-3 group-hover:text-brand-green transition-colors duration-300">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
              <p className="text-gray-700 italic leading-relaxed">
                "모든 통계의 뒤에는 용감하게 새로운 도전을 시작한 학생들과 
                그들을 믿고 지지해주신 가족들의 이야기가 있습니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Chronicles */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-brand-ivory/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6">📖</div>
            <SectionHeading 
              title="변화의 연대기" 
              subtitle="각자의 특별한 여정에서 피어난 성장과 꿈의 이야기들"
              className="mb-6"
            />
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                모든 이야기는 작은 용기에서 시작되었습니다. 낯선 땅에서의 첫 걸음, 
                새로운 도전 앞에서의 떨림, 그리고 그 모든 순간들을 함께 한 우리의 여정.
              </p>
              <p className="text-base text-gray-600 italic">
                "Every great story begins with a single step of courage."
              </p>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-12">
            {successStories.map((story, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={story.id} className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Story Number & Icon */}
                  <div className="flex-shrink-0 text-center">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-brand-green via-brand-gold to-brand-green rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl">
                        <div className="text-5xl">{story.icon}</div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                        {story.id}
                      </div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full shadow-md">
                      <p className="text-sm font-bold text-brand-green">{story.year} 여정</p>
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="flex-1">
                    <SuccessStoryCard 
                      story={{
                        ...story,
                        challenge: `🌪️ 도전의 순간: ${story.challenge}`,
                        solution: `💡 함께한 해결책: ${story.solution}`,
                        result: `🌟 아름다운 결실: ${story.result}`,
                        quote: `💭 진심어린 고백: "${story.quote}"`
                      }} 
                      variant={index % 3 === 0 ? 'premium' : 'default'}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-brand-green/10 via-white to-brand-gold/10 p-8 rounded-2xl max-w-4xl mx-auto shadow-lg">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-black text-brand-green mb-4">
                다음 이야기의 주인공은 바로 당신입니다
              </h3>
              <p className="text-gray-700 leading-relaxed">
                위의 모든 학생들도 처음에는 불안하고 설레는 마음으로 시작했습니다. 
                중요한 것은 시작하는 용기와 함께 걸어갈 든든한 동반자가 있다는 것입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heart to Heart Messages */}
      <section className="py-16 bg-gradient-to-br from-brand-green via-brand-green to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6">💕</div>
            <SectionHeading 
              title="부모님들의 마음속 이야기" 
              subtitle="아이를 보내며 느끼신 진솔한 감정들과 따뜻한 감사의 말씀들"
              className="mb-6 text-white [&>p]:text-white"
            />
            <p className="text-white max-w-3xl mx-auto leading-relaxed">
              가장 소중한 보물인 아이를 먼 곳으로 보내는 부모님의 마음을 우리는 압니다. 
              그 걱정과 사랑이 안심과 자부심으로 변하는 순간들을 함께 나누어봅니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group p-8 bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30 transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="text-white">
                <div className="text-4xl mb-6 group-hover:animate-pulse">💝</div>
                <div className="bg-white/20 p-4 rounded-lg mb-4 border border-white/30">
                  <p className="mb-4 italic leading-relaxed text-white">
                    &ldquo;아이가 혼자 머나먼 캐나다로 떠날 때의 그 마음... 부모라면 모두 아실 겁니다. 
                    하지만 담당 선생님께서 마치 가족처럼 정기적으로 안부를 물어봐 주시고, 
                    아이의 작은 변화까지도 세심하게 전달해 주셔서 정말 든든했어요.&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-sm text-white font-medium">중학생 어머니의 진심</p>
                </div>
              </div>
            </Card>

            <Card className="group p-8 bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30 transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="text-white">
                <div className="text-4xl mb-6 group-hover:animate-pulse">🙏</div>
                <div className="bg-white/20 p-4 rounded-lg mb-4 border border-white/30">
                  <p className="mb-4 italic leading-relaxed text-white">
                    &ldquo;가족 전체가 새로운 인생을 시작하는 것이어서 막막하고 두려웠습니다. 
                    하지만 비자 준비부터 집 구하기, 아이 학교 등록까지... 
                    A부터 Z까지 모든 과정을 옆에서 함께해 주셔서 꿈같은 캐나다 생활이 현실이 되었어요.&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-sm text-white font-medium">초등학생 아버지의 감사</p>
                </div>
              </div>
            </Card>

            <Card className="group p-8 bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30 transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="text-white">
                <div className="text-4xl mb-6 group-hover:animate-pulse">⭐</div>
                <div className="bg-white/20 p-4 rounded-lg mb-4 border border-white/30">
                  <p className="mb-4 italic leading-relaxed text-white">
                    &ldquo;단순히 학교에 보내는 것이 아니라, 우리 아이의 꿈과 적성을 정말 깊이 이해하고 
                    미래를 함께 설계해 주시는 모습에 깊이 감동했습니다. 
                    아이가 스스로 자신의 길을 찾아가는 모습이 너무 자랑스러워요.&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-sm text-white font-medium">고등학생 어머니의 자랑</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white/25 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto border border-white/40">
              <p className="text-white italic leading-relaxed text-lg font-medium">
                "부모의 사랑과 걱정을 이해하고, 그 마음을 안심과 기쁨으로 바꿔드리는 것이 
                우리의 가장 소중한 사명입니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Story Begins Here */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-brand-ivory/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-7xl mb-8 animate-pulse">📝</div>
            <h2 className="text-4xl font-black text-brand-green mb-8 leading-tight">
              이제 당신의 이야기를 시작할 차례입니다
            </h2>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                위의 모든 학생들처럼, 당신도 지금 이 순간부터 새로운 챕터를 열어갈 수 있습니다. 
                작은 용기가 만들어낼 큰 변화를 함께 그려보아요.
              </p>
              <p className="text-lg text-gray-600 italic">
                "모든 위대한 여정은 한 번의 대화로부터 시작됩니다"
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-black text-brand-green mb-2">맞춤형 상담</h3>
                <p className="text-sm text-gray-600">당신만의 독특한 상황과 꿈을 깊이 이해합니다</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="font-black text-brand-green mb-2">함께하는 여정</h3>
                <p className="text-sm text-gray-600">처음부터 끝까지, 모든 순간을 함께 걸어갑니다</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">🌟</div>
                <h3 className="font-black text-brand-green mb-2">성공의 약속</h3>
                <p className="text-sm text-gray-600">당신의 성공이 바로 우리의 가장 큰 보람입니다</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="group bg-brand-green hover:bg-brand-green/90 text-white font-black px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <Link href="/ko/contact" className="flex items-center gap-2">
                  첫 걸음 내딛기
                  <span className="group-hover:translate-x-1 transition-transform">✨</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-black px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <Link href="/ko/programs" className="flex items-center gap-2">
                  여정 로드맵 보기
                  <span className="group-hover:translate-x-1 transition-transform">🗺️</span>
                </Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-r from-brand-green/10 via-white to-brand-gold/10 p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💌</div>
              <h3 className="text-2xl font-black text-brand-green mb-6">마음편히 대화를 나누어요</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-black text-gray-800 mb-3">💝 완전 무료 상담</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    어떤 부담도 없이, 궁금한 모든 것들을 편안하게 물어보세요. 
                    상담비는 물론 없으며, 무엇보다 진심 어린 조언을 드립니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-gray-800 mb-3">⚡ 빠른 응답 약속</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    onf.newpage@gmail.com으로 연락 주시면 
                    영업일 기준 1-2일 내에 정성스러운 답변을 드립니다.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/70 rounded-lg">
                <p className="text-gray-600 italic text-sm">
                  "첫 문의를 보내시는 그 순간부터, 당신은 이미 꿈에 한 발 더 가까워지고 있습니다"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}