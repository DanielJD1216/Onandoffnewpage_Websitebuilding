'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import { GraduationCap, Heart, MessageCircle, Users, Calendar, DollarSign, Phone } from 'lucide-react';

export default function CampusPage({ params }: { params: { locale: string } }) {
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

        {/* Program Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-brand-green mb-4">프로그램 개요</h2>
              <p className="text-xl text-brand-gold max-w-3xl mx-auto">
                초·중·고 가디언 필요 학생을 위한 월 구독형 또는 학기 패키지 운영 프로그램
              </p>
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

                    <Button
                      className="w-full bg-brand-green hover:bg-brand-green/90 group-hover:bg-brand-gold transition-all"
                      asChild
                    >
                      <Link href={`/${params.locale}${module.href}`}>
                        자세히 보기
                      </Link>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Service Features */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-brand-green mb-4">프로그램 운영 방식</h2>
              <p className="text-xl text-brand-gold">체계적이고 전문적인 관리 시스템</p>
            </div>

            {/* Operating Schedule */}
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

            {/* Service Quality Guarantees */}
            <div className="max-w-6xl mx-auto mb-16">
              <h3 className="text-2xl font-black text-brand-green mb-8 text-center">서비스 품질 보장</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-2 border-brand-green/20">
                  <h4 className="text-xl font-black text-brand-green mb-6">응답 시간 보장</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">일반 문의</span>
                      <span className="font-bold text-brand-gold">24시간 이내</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">긴급 상황</span>
                      <span className="font-bold text-brand-gold">2시간 이내</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">의료 응급상황</span>
                      <span className="font-bold text-brand-gold">즉시 대응</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-2 border-brand-gold/20">
                  <h4 className="text-xl font-black text-brand-gold mb-6">만족도 보장</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">서비스 만족도</span>
                      <span className="font-bold text-brand-green">95% 이상</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">부모 추천율</span>
                      <span className="font-bold text-brand-green">90% 이상</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">재등록률</span>
                      <span className="font-bold text-brand-green">85% 이상</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Plans & Pricing */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-black text-brand-green mb-4">저학년 토탈 OSC (Out-of-School Care)</h3>
              <p className="text-lg text-brand-gold">개인과외 대비 40~60% 비용 절감</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                    <h3 className="text-2xl font-black text-brand-green mb-2">{plan.name}</h3>
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
                    <Link href={`/${params.locale}/campus/plans`}>
                      {plan.name} 선택
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            {/* High School Tutoring */}
            <div className="max-w-4xl mx-auto mt-16">
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
          </div>
        </section>

        {/* Program Methodology */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-black text-brand-green mb-8 text-center">프로그램 방법론</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="p-8 border-2 border-brand-green/20">
                  <h3 className="text-2xl font-black text-brand-green mb-6">학업 관리 체계</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-bold text-gray-800">ILP (개별 학습 계획)</span>
                        <p className="text-gray-600 text-sm">학생별 맞춤형 학습 목표 설정 및 진도 관리</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-bold text-gray-800">형성평가 시스템</span>
                        <p className="text-gray-600 text-sm">주간 퀴즈 및 월간 종합평가로 학습 성과 측정</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-bold text-gray-800">튜터 연계 서비스</span>
                        <p className="text-gray-600 text-sm">필요시 전문 튜터 및 학원 연결 지원</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-2 border-brand-gold/20">
                  <h3 className="text-2xl font-black text-brand-gold mb-6">생활 관리 체계</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-bold text-gray-800">건강 관리 프로토콜</span>
                        <p className="text-gray-600 text-sm">정기 건강 체크, 병원 동행 서비스</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-bold text-gray-800">생활 습관 코칭</span>
                        <p className="text-gray-600 text-sm">규칙적인 생활패턴 형성 및 자립심 개발</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-bold text-gray-800">홈스테이 관리</span>
                        <p className="text-gray-600 text-sm">홈스테이 가정과의 소통 및 문제 해결</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Communication System */}
              <div className="mb-16">
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
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-brand-green mb-8 text-center">산출물</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center border-2 border-brand-green/20">
                  <Calendar className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-green mb-3">월간 PDF 리포트</h3>
                  <p className="text-sm text-gray-600">출결·성적·행동 코멘트가 포함된 상세 리포트</p>
                </Card>

                <Card className="p-6 text-center border-2 border-brand-gold/20">
                  <MessageCircle className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-gold mb-3">액션아이템 Top 3</h3>
                  <p className="text-sm text-gray-600">다음달 집중 관리할 우선순위 항목</p>
                </Card>

                <Card className="p-6 text-center border-2 border-brand-green/20">
                  <GraduationCap className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-green mb-3">학사 캘린더</h3>
                  <p className="text-sm text-gray-600">시험 및 과제 일정이 포함된 .ics 파일</p>
                </Card>
              </div>
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