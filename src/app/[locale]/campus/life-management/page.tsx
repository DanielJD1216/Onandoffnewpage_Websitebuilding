'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, Heart, Shield, Home, Utensils } from 'lucide-react';

export default function CampusLifeManagementPage({ params }: { params: { locale: string } }) {
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
            <span className="text-brand-gold font-medium">생활 관리</span>
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
            생활 관리 서비스
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            건강부터 일상까지 토탈 생활 케어
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              생활 관리 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">전인적 생활 관리</h2>
            <p className="text-lg text-gray-600 mb-8">
              학생의 건강한 신체와 정신, 올바른 생활 습관 형성을 위해 
              부모님의 마음으로 세심하게 관리합니다.
            </p>
          </div>

          {/* Key Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Shield,
                title: "건강 관리",
                description: "정기 건강 체크 및 병원 동행 서비스"
              },
              {
                icon: Home,
                title: "숙소 관리",
                description: "홈스테이/기숙사 생활 모니터링 및 지원"
              },
              {
                icon: Utensils,
                title: "식생활 관리",
                description: "영양 균형 및 올바른 식습관 지도"
              },
              {
                icon: Heart,
                title: "정서적 지원",
                description: "정신 건강 케어 및 상담 서비스"
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
                  title: "건강 및 의료 지원",
                  features: [
                    "정기적인 건강 상태 체크 및 상담",
                    "병원 방문 시 동행 및 통역 서비스",
                    "처방전 관리 및 복용법 안내",
                    "응급 상황 시 24시간 긴급 대응"
                  ]
                },
                {
                  title: "생활 습관 관리",
                  features: [
                    "규칙적인 생활 패턴 형성 지도",
                    "적절한 수면 시간 관리",
                    "운동 및 여가 활동 권장",
                    "스마트폰/게임 사용 시간 관리"
                  ]
                },
                {
                  title: "숙소 환경 관리",
                  features: [
                    "홈스테이 가정과의 원활한 소통 지원",
                    "생활 규칙 준수 상황 모니터링",
                    "개인 공간 정리정돈 습관 지도",
                    "문제 상황 발생 시 중재 및 해결"
                  ]
                },
                {
                  title: "정서적 케어",
                  features: [
                    "정기적인 심리 상태 점검",
                    "향수병 및 적응 스트레스 관리",
                    "친구 관계 및 사회성 발달 지원",
                    "필요시 전문 상담사 연계"
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
          <h2 className="text-3xl font-black text-brand-green mb-6">건강한 유학 생활을 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            체계적인 생활 관리를 통해 자녀가 건강하고 안전한 환경에서 
            성장할 수 있도록 지원합니다.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              생활 관리 상담 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}