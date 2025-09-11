'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, GraduationCap, BarChart3, Calendar, Users2 } from 'lucide-react';

export default function CampusAcademicsPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Breadcrumb */}
      <nav className="bg-white/80 border-b border-brand-green/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link 
              href={`/${params.locale}/campus`}
              className="flex items-center text-brand-green hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              캠퍼스 관리
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-gold font-medium">학업 관리</span>
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-green mb-6 font-dodum">
            학업 관리 서비스
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            출결부터 성적까지 체계적인 학습 지원
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              학업 관리 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">전문적인 학업 관리</h2>
            <p className="text-lg text-gray-600 mb-8">
              학생의 학업 성취도를 체계적으로 모니터링하고, 개별 맞춤형 학습 계획을 수립하여 
              최적의 학업 성과를 이끌어냅니다.
            </p>
          </div>

          {/* Key Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: BarChart3,
                title: "실시간 성적 모니터링",
                description: "온라인 포털을 통한 실시간 성적 확인 및 분석"
              },
              {
                icon: Calendar,
                title: "출결 관리",
                description: "매일 출결 상황 확인 및 지각·결석 시 즉시 알림"
              },
              {
                icon: GraduationCap,
                title: "과제 관리",
                description: "과제 마감일 알림 및 제출 상황 체크"
              },
              {
                icon: Users2,
                title: "튜터 연계",
                description: "필요시 전문 튜터 매칭 및 학원 추천"
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
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">세부 서비스 내용</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "학업 성취도 분석",
                  features: [
                    "주간/월간 성적 트렌드 분석",
                    "과목별 강점/약점 파악",
                    "개선 방안 제시 및 실행 계획 수립",
                    "부모님께 정기 리포트 제공"
                  ]
                },
                {
                  title: "학습 계획 수립",
                  features: [
                    "개별 학습 스타일 분석",
                    "목표 설정 및 단계별 계획 수립",
                    "시험 대비 전략 및 일정 관리",
                    "진도 점검 및 계획 수정"
                  ]
                },
                {
                  title: "학교 소통 관리",
                  features: [
                    "담임교사와의 정기적 소통",
                    "학교 행사 및 중요 공지 전달",
                    "학부모 면담 일정 조율 및 참석",
                    "문제 상황 발생 시 즉시 대응"
                  ]
                },
                {
                  title: "추가 학습 지원",
                  features: [
                    "믿을 만한 튜터/학원 추천",
                    "보충 학습 프로그램 선별",
                    "학습 자료 및 도구 추천",
                    "학습 환경 최적화 조언"
                  ]
                }
              ].map((section, index) => (
                <Card key={index} className="p-8 border-2 border-brand-green/20">
                  <h3 className="text-2xl font-black text-brand-green mb-6">{section.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.features.map((feature, idx) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">전문적인 학업 관리를 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            체계적인 학업 관리를 통해 자녀의 학업 성취도를 높이고, 
            성공적인 캐나다 교육 과정을 완주할 수 있도록 지원합니다.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              학업 관리 상담 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}