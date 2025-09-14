'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, GraduationCap, Target, FileText, CheckCircle } from 'lucide-react';

export default function FutureAdmissionsConsultingPage({ params }: { params: { locale: string } }) {
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
            <span className="text-brand-gold font-medium">진학 컨설팅</span>
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
            대학/고등학교 진학 컨설팅
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            타깃 설정부터 합격까지 전략적 접근
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              진학 컨설팅 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">전략적 진학 컨설팅</h2>
            <p className="text-lg text-gray-600 mb-8">
              캐나다 교육 시스템에 대한 깊은 이해를 바탕으로 
              학생 개개인에게 최적화된 진학 전략을 수립합니다.
            </p>
          </div>

          {/* Key Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Target,
                title: "목표 설정",
                description: "개인 역량 분석 및 현실적 목표 대학 선정"
              },
              {
                icon: FileText,
                title: "전략 수립",
                description: "맞춤형 진학 로드맵 및 준비 계획 작성"
              },
              {
                icon: GraduationCap,
                title: "입시 준비",
                description: "원서 작성, 에세이, 면접 등 종합 지원"
              },
              {
                icon: CheckCircle,
                title: "합격 관리",
                description: "합격 후 등록 절차 및 준비 사항 안내"
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
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">컨설팅 프로세스</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "개인 역량 분석 및 목표 설정",
                  features: [
                    "학업 성취도, 특기, 관심 분야 종합 분석",
                    "캐나다 대학 시스템 및 입학 요건 설명",
                    "현실적이고 도전적인 목표 대학 선정",
                    "단계별 준비 타임라인 수립"
                  ]
                },
                {
                  title: "학업 및 활동 계획 수립",
                  features: [
                    "필수 과목 및 선택 과목 전략적 선택",
                    "성적 향상을 위한 구체적 실행 방안",
                    "과외 활동 및 봉사 활동 기획",
                    "리더십 경험 및 특별 활동 개발"
                  ]
                },
                {
                  title: "입시 서류 준비 지원",
                  features: [
                    "대학 원서 작성 전략 및 검토",
                    "개인 에세이 주제 선정 및 작성 지도",
                    "추천서 요청 및 관리 지원",
                    "포트폴리오 구성 및 완성도 향상"
                  ]
                },
                {
                  title: "입학 절차 및 사후 관리",
                  features: [
                    "원서 제출 일정 관리 및 확인",
                    "면접 준비 및 연습 (해당 시)",
                    "합격 통지 후 등록 절차 안내",
                    "장학금 및 기숙사 신청 지원"
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

      {/* Success Statistics */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-brand-green mb-8">성공 실적</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "95%", label: "목표 대학 합격률" },
                { number: "87%", label: "1지망 대학 합격률" },
                { number: "100+", label: "성공 진학 사례" },
                { number: "24개월", label: "평균 준비 기간" }
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-4xl font-black text-brand-gold mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">성공적인 진학을 위한 첫걸음</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            전문적이고 체계적인 진학 컨설팅을 통해 꿈의 대학 합격을 
            현실로 만들어보세요.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              진학 컨설팅 상담 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}