'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, Users, Target, Compass, Trophy } from 'lucide-react';

export default function CampusMentoringPage({ params }: { params: { locale: string } }) {
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
            <span className="text-brand-gold font-medium">멘토링</span>
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
            개별 멘토링 서비스
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            1:1 맞춤형 목표 달성 지원
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              멘토링 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">개별 맞춤형 멘토링</h2>
            <p className="text-lg text-gray-600 mb-8">
              각 학생의 개성과 목표에 맞춘 1:1 멘토링을 통해 
              성공적인 유학 생활과 미래 준비를 지원합니다.
            </p>
          </div>

          {/* Mentoring Focus Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Target,
                title: "목표 설정",
                description: "개인별 단기·장기 목표 수립 및 계획"
              },
              {
                icon: Compass,
                title: "진로 상담",
                description: "적성 분석 및 진로 방향 설정"
              },
              {
                icon: Trophy,
                title: "동기 부여",
                description: "지속적인 격려 및 성취감 제고"
              },
              {
                icon: Users,
                title: "생활 코칭",
                description: "자립심 및 문제해결 능력 개발"
              }
            ].map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="p-6 text-center bg-white/80 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                  <IconComponent className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-green mb-3">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Detailed Mentoring Services */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">멘토링 프로그램 내용</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "개인별 목표 설정 및 관리",
                  features: [
                    "학생 개별 상담을 통한 목표 발굴",
                    "단기(월간), 중기(학기별), 장기(년간) 목표 수립",
                    "목표 달성을 위한 구체적 액션 플랜 작성",
                    "정기적 진도 점검 및 계획 수정"
                  ]
                },
                {
                  title: "학습 동기 및 습관 관리",
                  features: [
                    "개인별 학습 스타일 파악 및 최적화",
                    "효과적인 공부 방법 및 시간 관리 지도",
                    "시험 대비 전략 수립 및 실행",
                    "성취 과정에서 지속적 격려 및 동기 부여"
                  ]
                },
                {
                  title: "진로 탐색 및 상담",
                  features: [
                    "적성 검사 및 흥미 분야 탐색",
                    "캐나다 교육 시스템 및 진학 정보 제공",
                    "대학 전공 선택 및 입시 전략 상담",
                    "장기적 커리어 패스 설계 지원"
                  ]
                },
                {
                  title: "생활 및 정서적 지원",
                  features: [
                    "문화 적응 및 언어 향상 전략",
                    "대인관계 및 소통 능력 개발",
                    "스트레스 관리 및 정서적 안정",
                    "자립심 및 책임감 배양"
                  ]
                }
              ].map((program, index) => (
                <Card key={index} className="p-8 border-2 border-brand-green/20">
                  <h3 className="text-2xl font-black text-brand-green mb-6">{program.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.features.map((feature, idx) => (
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
          <h2 className="text-3xl font-black text-brand-green mb-6">개별 맞춤 멘토링을 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            전문적이고 체계적인 1:1 멘토링을 통해 자녀의 잠재력을 
            최대한 발휘할 수 있도록 지원합니다.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              멘토링 상담 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}