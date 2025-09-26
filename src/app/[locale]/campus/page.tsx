'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import {
  GraduationCap,
  Heart,
  MessageCircle,
  Users,
  Calendar,
  DollarSign,
  Phone,
  BookOpen,
  BarChart3,
  Users2,
  Star,
  Clock,
  Check,
  Download,
  Activity,
  UserCheck
} from 'lucide-react';

export default function CampusPage({ params }: { params: { locale: string } }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '프로그램 개요', icon: BookOpen },
    { id: 'academics', label: '학업관리', icon: GraduationCap },
    { id: 'life', label: '생활관리', icon: Heart },
    { id: 'communication', label: '부모 소통', icon: MessageCircle },
    { id: 'mentoring', label: '멘토링', icon: UserCheck },
    { id: 'plans', label: '플랜/요금', icon: DollarSign }
  ];

  const modules = [
    {
      icon: GraduationCap,
      title: '학업관리',
      description: '출결·성적 트래킹부터 튜터 연계까지',
      href: '/campus/academics',
      features: [
        '출결 및 성적 실시간 모니터링',
        '과제 마감일 알림 서비스',
        '튜터/학원 연계 서비스',
        '학습 계획 수립 및 관리'
      ]
    },
    {
      icon: Heart,
      title: '생활관리',
      description: '건강부터 생활 습관까지 토탈 케어',
      href: '/campus/life-management',
      features: [
        '병원 동행 서비스 (필요시)',
        '통학 및 생활 습관 코칭',
        '건강 상태 정기 체크',
        '생활 문제 해결 지원'
      ]
    },
    {
      icon: MessageCircle,
      title: '부모 소통',
      description: '정기적이고 체계적인 소통 시스템',
      href: '/campus/parent-communication',
      features: [
        '월간 PDF 리포트 발송',
        '카톡/이메일 주 1회 요약',
        '실시간 상황 공유',
        '화상 미팅 (프리미엄)'
      ]
    },
    {
      icon: Users,
      title: '멘토링',
      description: '1:1 개별 목표 설정 및 달성 지원',
      href: '/campus/mentoring',
      features: [
        '개별 맞춤 목표 설정',
        '시험 일정 캘린더 관리',
        '진로 상담 및 가이드',
        '동기 부여 및 격려'
      ]
    }
  ];

  const plans = [
    {
      name: '주 2회',
      price: '$650',
      period: '월',
      description: '월 8회 세션',
      features: [
        '1회 2시간 30분',
        '1:4 소그룹 기본',
        '간식 포함',
        '영·수·과 통합',
        '주간 리포트'
      ],
      popular: false
    },
    {
      name: '주 3회',
      price: '$850',
      period: '월',
      description: '월 12회 세션',
      features: [
        '1회 2시간 30분',
        '1:4 소그룹 기본',
        '간식 포함',
        '영·수·과 통합',
        '주간 리포트',
        '우선 배치'
      ],
      popular: true
    },
    {
      name: '주 5회',
      price: '$1,200',
      period: '월',
      description: '월 20회 세션',
      features: [
        '1회 2시간 30분',
        '1:4 소그룹 기본',
        '간식 포함',
        '영·수·과 통합',
        '주간 리포트',
        '전일제 케어'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-gold rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-green mb-6 font-dodum">
            학업·생활·소통을 한 번에 관리
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            온앤오프 캠퍼스 관리 프로그램으로 안심하세요
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                상담 문의
              </Link>
            </Button>
            <KoreanPhoneDisplay />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white/70 sticky top-16 z-40 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-brand-green text-white shadow-lg transform scale-105'
                      : 'bg-white text-brand-green border-2 border-brand-green/30 hover:border-brand-green hover:bg-brand-green/10'
                  }`}
                >
                  <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">프로그램 개요</h2>
                  <p className="text-xl text-brand-gold max-w-3xl mx-auto">
                    초·중·고 가디언 필요 학생을 위한 월 구독형 또는 학기 패키지 운영 프로그램
                  </p>
                </div>

                {/* Campus Photo Section */}
                <div className="max-w-5xl mx-auto mb-16">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/onandoffcampus.png"
                      alt="온앤오프 뉴페이지 캠퍼스 랭귀지 직영 홈스테이"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Core Modules */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {modules.map((module, index) => {
                    const IconComponent = module.icon;
                    return (
                      <Card key={index} className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all group">
                        <div className="flex items-center mb-6">
                          <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                            <IconComponent className="h-8 w-8 text-brand-green" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black text-brand-green">{module.title}</h3>
                            <p className="text-gray-600">{module.description}</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          {module.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Why No-Brainer */}
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-3xl font-black text-brand-green mb-8">★ 왜 No-Brainer 인가</h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="text-lg font-black text-brand-green mb-3">결과 보증형</h3>
                      <p className="text-sm text-gray-600">4주 내 핵심 지표 개선 미달 시 무료 보강 2회 제공</p>
                    </Card>

                    <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                      <div className="text-4xl mb-4">🔄</div>
                      <h3 className="text-lg font-black text-brand-gold mb-3">완전 통합 관리</h3>
                      <p className="text-sm text-gray-600">학업(영·수·과) + 생활 루틴 + 부모 소통 + 멘토링을 한 공간에서</p>
                    </Card>

                    <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                      <div className="text-4xl mb-4">👥</div>
                      <h3 className="text-lg font-black text-brand-green mb-3">1:4 소그룹 + ILP</h3>
                      <p className="text-sm text-gray-600">개별 학습계획 기반 맞춤 진도, 마스터리 보드로 가시화</p>
                    </Card>

                    <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                      <div className="text-4xl mb-4">📊</div>
                      <h3 className="text-lg font-black text-brand-gold mb-3">데이터 투명성</h3>
                      <p className="text-sm text-gray-600">주간 3줄 요약 + 월간 리포트 그래프 + 분기 상담</p>
                    </Card>

                    <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                      <div className="text-4xl mb-4">✅</div>
                      <h3 className="text-lg font-black text-brand-green mb-3">검증된 운영</h3>
                      <p className="text-sm text-gray-600">수석 튜터 QA·관찰, 표준 루브릭, 안전/출결 체계</p>
                    </Card>

                    <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="text-lg font-black text-brand-gold mb-3">가성비</h3>
                      <p className="text-sm text-gray-600">개인과외 대비 40~60% 비용 절감</p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {/* Academics Tab */}
            {activeTab === 'academics' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">학업관리</h2>
                  <p className="text-xl text-brand-gold">
                    영어·수학·과학 핵심 역량을 1:4 소그룹으로 향상
                  </p>
                </div>

                {/* Service Overview */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-6">목표</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    영어(리딩/라이팅)·수학·과학의 핵심 역량을 <strong>개인화 ILP</strong>로 빠르게 끌어올립니다.
                  </p>
                </div>

                {/* Provided Items */}
                <div className="max-w-4xl mx-auto mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">제공 항목</h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                      <GraduationCap className="h-12 w-12 text-brand-green mx-auto mb-4" />
                      <h4 className="text-xl font-black text-brand-green mb-3 text-center">ILP 수립</h4>
                      <p className="text-gray-600 text-center"><strong>ILP(개별 학습계획)</strong> 수립 · 마스터리 보드로 진행 가시화</p>
                    </Card>

                    <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                      <BarChart3 className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                      <h4 className="text-xl font-black text-brand-gold mb-3 text-center">형성평가</h4>
                      <p className="text-gray-600 text-center"><strong>형성평가(매회 5~10분)</strong> + <strong>총괄평가(4·8·12주 차)</strong></p>
                    </Card>

                    <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                      <Calendar className="h-12 w-12 text-brand-green mx-auto mb-4" />
                      <h4 className="text-xl font-black text-brand-green mb-3 text-center">리포트</h4>
                      <p className="text-gray-600 text-center">주간 과제 피드백 + 누적 그래프 리포트</p>
                    </Card>
                  </div>
                </div>

                {/* Weekly Schedule */}
                <div className="max-w-6xl mx-auto mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">주간 샘플 시간표 (고정 템플릿)</h3>

                  <Card className="p-8 bg-white/80 border-2 border-brand-green/20">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b-2 border-brand-green/20">
                            <th className="text-left py-4 px-6 font-black text-brand-green">시간</th>
                            <th className="text-left py-4 px-6 font-black text-brand-green">활동</th>
                            <th className="text-left py-4 px-6 font-black text-brand-green">목적</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 font-bold text-brand-gold">40′</td>
                            <td className="py-4 px-6">세션1 (리딩/개념)</td>
                            <td className="py-4 px-6 text-gray-600">리딩 전략·핵심 개념</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 font-bold text-brand-gold">10′</td>
                            <td className="py-4 px-6">브레이크</td>
                            <td className="py-4 px-6 text-gray-600">휴식·위생</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 font-bold text-brand-gold">50′</td>
                            <td className="py-4 px-6">세션2 (연습/응용)</td>
                            <td className="py-4 px-6 text-gray-600">문제해결·서술 강화</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 font-bold text-brand-gold">10′</td>
                            <td className="py-4 px-6">형성평가</td>
                            <td className="py-4 px-6 text-gray-600">핵심 스킬 퀵 체크</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 font-bold text-brand-gold">10′</td>
                            <td className="py-4 px-6">리뷰/과제</td>
                            <td className="py-4 px-6 text-gray-600">목표·과제 안내</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* Subject Focus */}
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">과목 포커스</h3>

                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-8 border-2 border-brand-green/20">
                      <h4 className="text-2xl font-black text-brand-green mb-6">영어</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• 요약·추론·주제</li>
                        <li>• RACE 구조 글쓰기</li>
                        <li>• 피어 피드백</li>
                      </ul>
                    </Card>

                    <Card className="p-8 border-2 border-brand-gold/20">
                      <h4 className="text-2xl font-black text-brand-gold mb-6">수학</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• 스파이럴 복습</li>
                        <li>• CPA(콘크리트→픽토리얼→추상)</li>
                        <li>• 오류분석</li>
                      </ul>
                    </Card>

                    <Card className="p-8 border-2 border-brand-green/20">
                      <h4 className="text-2xl font-black text-brand-green mb-6">과학</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• 개념→탐구→데이터 해석</li>
                        <li>• CER 보고서</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {/* Life Management Tab */}
            {activeTab === 'life' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">생활관리</h2>
                  <p className="text-xl text-brand-gold">
                    건강부터 생활 습관까지 토탈 케어
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-2 border-brand-green/20">
                      <h3 className="text-2xl font-black text-brand-green mb-6">건강 관리 프로토콜</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">정기 건강 체크</span>
                            <p className="text-gray-600 text-sm">월 1회 기본 건강 상태 확인 및 관리</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">병원 동행 서비스</span>
                            <p className="text-gray-600 text-sm">필요시 병원 방문 동행 및 의료진과의 소통 지원</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">응급상황 대응</span>
                            <p className="text-gray-600 text-sm">24시간 비상연락망 및 응급상황 매뉴얼 제공</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-8 border-2 border-brand-gold/20">
                      <h3 className="text-2xl font-black text-brand-gold mb-6">생활 습관 코칭</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">규칙적인 생활패턴</span>
                            <p className="text-gray-600 text-sm">수면, 식사, 학습 시간 관리 및 루틴 형성 지원</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">통학 및 안전</span>
                            <p className="text-gray-600 text-sm">등하교 루트 확인 및 안전 교육</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">자립심 개발</span>
                            <p className="text-gray-600 text-sm">점진적인 독립성 향상 및 자기관리 능력 배양</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <Card className="p-8 border-2 border-brand-green/20 mt-8">
                    <h3 className="text-2xl font-black text-brand-green mb-6 text-center">홈스테이 관리</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <Activity className="h-12 w-12 text-brand-green mx-auto mb-4" />
                        <h4 className="font-bold text-gray-800 mb-2">정기 점검</h4>
                        <p className="text-gray-600 text-sm">홈스테이 환경 및 관계 상태 모니터링</p>
                      </div>
                      <div className="text-center">
                        <MessageCircle className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                        <h4 className="font-bold text-gray-800 mb-2">소통 중재</h4>
                        <p className="text-gray-600 text-sm">학생과 홈스테이 가족 간 원활한 소통 지원</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-12 w-12 text-brand-green mx-auto mb-4" />
                        <h4 className="font-bold text-gray-800 mb-2">문제 해결</h4>
                        <p className="text-gray-600 text-sm">발생 가능한 갈등이나 문제 상황의 신속한 해결</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">부모 소통</h2>
                  <p className="text-xl text-brand-gold">
                    정기적이고 체계적인 소통 시스템
                  </p>
                </div>

                {/* Communication System */}
                <div className="max-w-6xl mx-auto mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">소통 시스템</h3>

                  <Card className="p-8 bg-white/80 border-2 border-brand-green/20">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="bg-brand-green/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <MessageCircle className="h-8 w-8 text-brand-green" />
                        </div>
                        <h4 className="font-black text-brand-green mb-2">실시간 알림</h4>
                        <p className="text-sm text-gray-600">긴급상황 즉시 연락</p>
                      </div>

                      <div className="text-center">
                        <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Calendar className="h-8 w-8 text-brand-gold" />
                        </div>
                        <h4 className="font-black text-brand-gold mb-2">주간 업데이트</h4>
                        <p className="text-sm text-gray-600">카톡으로 주간 요약</p>
                      </div>

                      <div className="text-center">
                        <div className="bg-brand-green/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <DollarSign className="h-8 w-8 text-brand-green" />
                        </div>
                        <h4 className="font-black text-brand-green mb-2">월간 리포트</h4>
                        <p className="text-sm text-gray-600">상세 PDF 보고서</p>
                      </div>

                      <div className="text-center">
                        <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Users className="h-8 w-8 text-brand-gold" />
                        </div>
                        <h4 className="font-black text-brand-gold mb-2">화상 미팅</h4>
                        <p className="text-sm text-gray-600">프리미엄 플랜 제공</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Monthly Schedule */}
                <div className="max-w-6xl mx-auto mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">월간 운영 스케줄</h3>

                  <Card className="p-8 bg-white/80 border-2 border-brand-green/20">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b-2 border-brand-green/20">
                            <th className="text-left py-4 px-6 font-black text-brand-green">구분</th>
                            <th className="text-left py-4 px-6 font-black text-brand-green">주기</th>
                            <th className="text-left py-4 px-6 font-black text-brand-green">내용</th>
                            <th className="text-left py-4 px-6 font-black text-brand-green">산출물</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 font-bold text-brand-gold">학업 관리</td>
                            <td className="py-4 px-6">주 3회</td>
                            <td className="py-4 px-6 text-gray-600">출결·성적 확인, 과제 진행상황</td>
                            <td className="py-4 px-6 text-gray-600">주간 리포트</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 font-bold text-brand-gold">생활 관리</td>
                            <td className="py-4 px-6">주 2회</td>
                            <td className="py-4 px-6 text-gray-600">홈스테이·건강·생활패턴</td>
                            <td className="py-4 px-6 text-gray-600">생활 체크리스트</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 px-6 font-bold text-brand-gold">부모 소통</td>
                            <td className="py-4 px-6">주 1회</td>
                            <td className="py-4 px-6 text-gray-600">카톡 요약, 상황 업데이트</td>
                            <td className="py-4 px-6 text-gray-600">월간 PDF 리포트</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 font-bold text-brand-gold">멘토링</td>
                            <td className="py-4 px-6">격주 1회</td>
                            <td className="py-4 px-6 text-gray-600">1:1 목표설정, 진로상담</td>
                            <td className="py-4 px-6 text-gray-600">개별 성장 플랜</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* Deliverables */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">산출물</h3>

                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-6 text-center border-2 border-brand-green/20">
                      <Calendar className="h-12 w-12 text-brand-green mx-auto mb-4" />
                      <h4 className="text-lg font-black text-brand-green mb-3">월간 PDF 리포트</h4>
                      <p className="text-sm text-gray-600">출결·성적·행동 코멘트가 포함된 상세 리포트</p>
                    </Card>

                    <Card className="p-6 text-center border-2 border-brand-gold/20">
                      <MessageCircle className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                      <h4 className="text-lg font-black text-brand-gold mb-3">액션아이템 Top 3</h4>
                      <p className="text-sm text-gray-600">다음달 집중 관리할 우선순위 항목</p>
                    </Card>

                    <Card className="p-6 text-center border-2 border-brand-green/20">
                      <GraduationCap className="h-12 w-12 text-brand-green mx-auto mb-4" />
                      <h4 className="text-lg font-black text-brand-green mb-3">학사 캘린더</h4>
                      <p className="text-sm text-gray-600">시험 및 과제 일정이 포함된 .ics 파일</p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {/* Mentoring Tab */}
            {activeTab === 'mentoring' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">멘토링</h2>
                  <p className="text-xl text-brand-gold">
                    1:1 개별 목표 설정 및 달성 지원
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 border-2 border-brand-green/20">
                      <h3 className="text-2xl font-black text-brand-green mb-6">개별 목표 관리</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">SMART 목표 설정</span>
                            <p className="text-gray-600 text-sm">구체적이고 측정 가능한 개인 목표 수립</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">진도 추적</span>
                            <p className="text-gray-600 text-sm">주간 및 월간 목표 달성도 모니터링</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">동기 부여</span>
                            <p className="text-gray-600 text-sm">성취 인정 및 지속적인 격려 제공</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-8 border-2 border-brand-gold/20">
                      <h3 className="text-2xl font-black text-brand-gold mb-6">진로 상담</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">적성 탐색</span>
                            <p className="text-gray-600 text-sm">개인 흥미와 강점 분야 발견 지원</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">대학 진학 가이드</span>
                            <p className="text-gray-600 text-sm">캐나다 대학 시스템 및 입학 요건 안내</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                          <div>
                            <span className="font-bold text-gray-800">포트폴리오 관리</span>
                            <p className="text-gray-600 text-sm">학업 성취 및 활동 이력 체계적 관리</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <Card className="p-8 border-2 border-brand-green/20">
                    <h3 className="text-2xl font-black text-brand-green mb-6 text-center">시험 일정 관리</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <Calendar className="h-12 w-12 text-brand-green mx-auto mb-4" />
                        <h4 className="font-bold text-gray-800 mb-2">시험 캘린더</h4>
                        <p className="text-gray-600 text-sm">모든 시험 일정을 통합 관리하는 개인 캘린더</p>
                      </div>
                      <div className="text-center">
                        <Clock className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                        <h4 className="font-bold text-gray-800 mb-2">준비 계획</h4>
                        <p className="text-gray-600 text-sm">시험별 맞춤 준비 스케줄 및 학습 전략</p>
                      </div>
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-brand-green mx-auto mb-4" />
                        <h4 className="font-bold text-gray-800 mb-2">성과 분석</h4>
                        <p className="text-gray-600 text-sm">시험 결과 분석 및 개선 방안 도출</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Plans Tab */}
            {activeTab === 'plans' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">플랜·요금</h2>
                  <p className="text-xl text-brand-gold">
                    개인과외 대비 40~60% 비용 절감, 결과 보증형 운영
                  </p>
                </div>

                {/* 저학년 토탈 OSC */}
                <div className="max-w-6xl mx-auto mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">저학년 토탈 OSC (Out-of-School Care)</h3>

                  <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                      <Card key={index} className={`p-6 ${plan.popular ? 'border-2 border-brand-gold bg-brand-gold/5 scale-105' : 'border-2 border-brand-green/20'} relative transition-all hover:scale-105`}>
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                              인기 플랜
                            </span>
                          </div>
                        )}

                        <div className="text-center mb-6">
                          <h4 className="text-2xl font-black text-brand-green mb-2">{plan.name}</h4>
                          <div className="flex items-center justify-center mb-2">
                            <span className="text-3xl font-black text-brand-gold">{plan.price}</span>
                            <span className="text-gray-600 ml-1">/{plan.period}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{plan.description}</p>
                        </div>

                        <div className="space-y-3 mb-6">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          className={`w-full ${plan.popular ? 'bg-brand-gold hover:bg-brand-gold/90' : 'bg-brand-green hover:bg-brand-green/90'} font-bold`}
                          asChild
                        >
                          <Link href={`/${params.locale}/contact`}>
                            {plan.name} 선택
                          </Link>
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* 고학년 과목 튜터링 */}
                <div className="max-w-4xl mx-auto mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">고학년 과목 튜터링</h3>

                  <Card className="p-8 bg-white/80 border-2 border-brand-green/20">
                    <div className="text-center mb-8">
                      <h4 className="text-xl font-black text-brand-green mb-4">1회당 요금</h4>
                      <div className="text-5xl font-black text-brand-gold mb-4">$50</div>
                      <p className="text-lg text-gray-600">1인당 / 4인 그룹 기준 / 2시간 30분</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="text-lg font-black text-brand-green mb-4">포함 사항</h5>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700">개별 ILP 수립</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700">마스터리 보드</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700">형성/총괄 평가</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700">주간 과제 피드백</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-lg font-black text-brand-green mb-4">과목 선택</h5>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700">영어 (리딩/라이팅)</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700">수학</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700">과학 (물리·화학·생물)</span>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700">1~2개 과목 집중 가능</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* 보장 정책 */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">보장 정책</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-brand-green/5 border-2 border-brand-green/20">
                      <h4 className="text-lg font-black text-brand-green mb-3">성과 보증</h4>
                      <p className="text-gray-700">4주 내 핵심 지표 1개 이상 개선 미달 시 <strong>무료 보강 2회(소그룹 60′)</strong> 제공</p>
                    </Card>

                    <Card className="p-6 bg-brand-gold/5 border-2 border-brand-gold/20">
                      <h4 className="text-lg font-black text-brand-gold mb-3">결석 보강</h4>
                      <p className="text-gray-700">24시간 전 통보 시 <strong>14일 내 보강</strong> (텀당 1회 무료)</p>
                    </Card>

                    <Card className="p-6 bg-brand-green/5 border-2 border-brand-green/20">
                      <h4 className="text-lg font-black text-brand-green mb-3">공휴일 이월</h4>
                      <p className="text-gray-700">공휴일 수업은 자동 이월, 일정 조정 가능</p>
                    </Card>

                    <Card className="p-6 bg-brand-gold/5 border-2 border-brand-gold/20">
                      <h4 className="text-lg font-black text-brand-gold mb-3">투명 고지</h4>
                      <p className="text-gray-700">교재/시험료 실비, 환불·이월 규정 사전 안내</p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">지금 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            체계적인 관리 시스템으로 자녀의 유학 생활을 안전하게 지원합니다.
            전문 상담을 통해 최적의 관리 플랜을 찾아보세요.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                상담 문의
              </Link>
            </Button>
            <KoreanPhoneDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}