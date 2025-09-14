'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle, Mail, Video, Calendar } from 'lucide-react';

export default function CampusParentCommunicationPage({ params }: { params: { locale: string } }) {
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
            <span className="text-brand-gold font-medium">부모 소통</span>
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
            부모 소통 시스템
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            투명하고 체계적인 소통으로 안심을
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              소통 시스템 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">체계적인 부모 소통</h2>
            <p className="text-lg text-gray-600 mb-8">
              정기적이고 투명한 소통을 통해 부모님이 자녀의 유학 생활을 
              생생하게 파악할 수 있도록 지원합니다.
            </p>
          </div>

          {/* Communication Channels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Mail,
                title: "월간 PDF 리포트",
                description: "종합적인 학업·생활 상황 보고서"
              },
              {
                icon: MessageCircle,
                title: "주간 카톡 소통",
                description: "실시간 상황 공유 및 질의응답"
              },
              {
                icon: Video,
                title: "화상 미팅",
                description: "프리미엄 플랜 월 1회 화상 상담"
              },
              {
                icon: Calendar,
                title: "긴급 상황 알림",
                description: "중요 사안 발생 시 즉시 연락"
              }
            ].map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <Card key={index} className="p-6 text-center bg-white/80 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                  <IconComponent className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-green mb-3">{channel.title}</h3>
                  <p className="text-sm text-gray-600">{channel.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Detailed Communication Details */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">소통 내용 및 방식</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "월간 종합 리포트 (PDF)",
                  features: [
                    "학업 성취도 및 출결 현황 상세 분석",
                    "생활 패턴 및 건강 상태 리포트",
                    "교사 및 홈스테이 가정 피드백",
                    "다음 달 목표 설정 및 액션 플랜"
                  ]
                },
                {
                  title: "주간 실시간 소통",
                  features: [
                    "카카오톡을 통한 주 1회 요약 보고",
                    "특별한 상황 발생 시 즉시 알림",
                    "부모님 질문에 대한 신속한 답변",
                    "사진 및 영상을 통한 생생한 현황 공유"
                  ]
                },
                {
                  title: "정기 상담 및 미팅",
                  features: [
                    "분기별 종합 상담 (전화 또는 화상)",
                    "프리미엄 플랜: 월 1회 화상 미팅",
                    "학부모 요청 시 추가 상담 가능",
                    "중요 결정 사항에 대한 사전 협의"
                  ]
                },
                {
                  title: "긴급 상황 대응",
                  features: [
                    "응급 의료 상황 시 즉시 연락",
                    "학교나 숙소에서 문제 발생 시 실시간 알림",
                    "24시간 긴급 연락망 운영",
                    "상황 해결 과정 및 결과 상세 보고"
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
          <h2 className="text-3xl font-black text-brand-green mb-6">투명한 소통을 경험하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            체계적이고 정기적인 소통을 통해 자녀의 유학 생활을 
            생생하게 함께할 수 있습니다.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              소통 시스템 상담 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}