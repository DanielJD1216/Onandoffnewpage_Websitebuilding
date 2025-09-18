'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import { ArrowLeft, Phone, BookOpen, TrendingUp, Users, Lightbulb } from 'lucide-react';

export default function FutureMajorGuidePage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Breadcrumb */}
      <nav className="bg-white/80 border-b border-brand-green/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link 
              href={`/${params.locale}/future`}
              className="flex items-center text-brand-green hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              진학 로드맵
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-gold font-medium">전공 선택 가이드</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-green mb-6 font-dodum">
            전공 선택 가이드
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            적성 분석부터 취업 전망까지
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                전공 상담 문의
              </Link>
            </Button>
            <KoreanPhoneDisplay />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">체계적인 전공 선택 지원</h2>
            <p className="text-lg text-gray-600 mb-8">
              학생의 적성, 관심사, 미래 목표를 종합적으로 분석하여 
              최적의 전공을 선택할 수 있도록 전문적인 가이드를 제공합니다.
            </p>
          </div>

          {/* Key Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Lightbulb,
                title: "적성 분석",
                description: "과학적 진단을 통한 개인 적성 및 성향 파악"
              },
              {
                icon: BookOpen,
                title: "전공 정보",
                description: "캐나다 대학별 전공 커리큘럼 및 특징 분석"
              },
              {
                icon: TrendingUp,
                title: "취업 전망",
                description: "전공별 취업률, 평균 연봉, 성장성 분석"
              },
              {
                icon: Users,
                title: "멘토 연결",
                description: "해당 전공 졸업생 및 현직자와의 멘토링"
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 text-center bg-white/80 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                  <IconComponent className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-green mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Detailed Services */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">전공 선택 프로세스</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "개인 적성 및 관심사 분석",
                  features: [
                    "표준화된 적성 검사 및 진로 탐색 도구 활용",
                    "학업 성취도 패턴 및 선호 과목 분석",
                    "취미, 특기, 관심 분야 종합 평가",
                    "성격 유형 및 학습 스타일 파악"
                  ]
                },
                {
                  title: "캐나다 전공 정보 제공",
                  features: [
                    "주요 대학별 전공 커리큘럼 상세 분석",
                    "전공별 입학 요건 및 경쟁률 정보",
                    "Co-op 프로그램 및 실습 기회 안내",
                    "전공 관련 자격증 및 면허 취득 가이드"
                  ]
                },
                {
                  title: "취업 전망 및 시장 분석",
                  features: [
                    "전공별 취업률 및 평균 연봉 데이터",
                    "캐나다 노동 시장 동향 및 성장 분야",
                    "이민 정책과 연계된 유망 직종 분석",
                    "산업별 미래 전망 및 기술 트렌드"
                  ]
                },
                {
                  title: "맞춤형 전공 추천 및 계획",
                  features: [
                    "종합 분석을 통한 최적 전공 3-5개 추천",
                    "1지망 전공 중심의 준비 전략 수립",
                    "대안 전공 및 복수 전공 옵션 제시",
                    "전공별 대학 선택 및 입학 전략 안내"
                  ]
                }
              ].map((process, index) => (
                <Card key={index} className="p-8 border-2 border-brand-green/20">
                  <h3 className="text-2xl font-black text-brand-green mb-6">{process.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {process.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Majors */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">인기 전공 분야</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: "비즈니스 & 경제",
                  majors: ["경영학", "회계학", "경제학", "마케팅", "국제통상"]
                },
                {
                  category: "공학 & IT",
                  majors: ["컴퓨터공학", "소프트웨어공학", "전기공학", "기계공학", "AI/데이터사이언스"]
                },
                {
                  category: "보건 & 의료",
                  majors: ["간호학", "약학", "물리치료", "의료기술", "공중보건"]
                },
                {
                  category: "교육 & 인문",
                  majors: ["교육학", "심리학", "언어학", "사회복지", "커뮤니케이션"]
                },
                {
                  category: "자연과학",
                  majors: ["생물학", "화학", "물리학", "수학", "환경과학"]
                },
                {
                  category: "예술 & 디자인",
                  majors: ["그래픽디자인", "영화제작", "음악", "미술", "건축학"]
                }
              ].map((field, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-black text-brand-green mb-4">{field.category}</h3>
                  <div className="space-y-2">
                    {field.majors.map((major, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{major}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">나에게 맞는 전공을 찾아보세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            전문적인 분석과 상담을 통해 미래를 결정하는 중요한 선택을 
            현명하게 하실 수 있도록 도와드립니다.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                전공 상담 신청
              </Link>
            </Button>
            <KoreanPhoneDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}