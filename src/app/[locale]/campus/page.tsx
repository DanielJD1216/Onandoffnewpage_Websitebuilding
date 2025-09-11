'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
      name: 'Basic',
      price: '$299',
      period: '월',
      description: '기본적인 관리 서비스',
      features: [
        '월간 리포트',
        '주간 소통',
        '기본 학업 모니터링',
        '생활 상담'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '$499',
      period: '월',
      description: '표준 관리 + 추가 지원',
      features: [
        'Basic 모든 서비스',
        '학교/학원 Follow-up',
        '분기별 상담',
        '튜터 연계 지원'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$799',
      period: '월',
      description: '토탈 케어 시스템',
      features: [
        'Standard 모든 서비스',
        '병원/기관 동행',
        '시험 대비 플랜',
        '월 1회 화상 미팅'
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-green mb-6 font-dodum">
            학업·생활·소통을 한 번에 관리
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            온앤오프 캠퍼스 관리 프로그램으로 안심하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                1개월 체험 문의
              </Link>
            </Button>
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

      {/* Plans & Pricing */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-4">권장 플랜</h2>
            <p className="text-xl text-brand-gold">학생별 맞춤형 관리 서비스</p>
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
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
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
            1개월 체험을 통해 서비스를 직접 경험해보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                1개월 체험 문의
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/campus/plans`}>
                플랜 비교표 다운로드
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}