'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import { Check, X, Phone, MessageCircle, Star, DollarSign } from 'lucide-react';

export default function PricingPage({ params }: { params: { locale: string } }) {
  const freeServices = [
    {
      category: '유학 준비',
      services: [
        '지역/학교 선택 가이드',
        '입학 절차 안내',
        '학교 등록 대행',
        '무료 1:1 상담'
      ]
    }
  ];

  const paidServices = [
    {
      service: '비자 지원',
      price: '$300/인',
      description: '학생비자/동반부모 비자 신청 지원',
      includes: [
        '필수 서류 체크리스트 제공',
        '외부 행정사/로펌 연계',
        '신청 과정 전반 관리'
      ]
    },
    {
      service: '도착 후 정착 서비스',
      price: '별도 견적',
      description: '공항픽업, 홈스테이, 긴급지원 등',
      includes: [
        '공항 픽업 서비스',
        '홈스테이 배정 및 관리',
        '24/7 긴급 지원',
        '정착 서비스 가이드'
      ]
    },
    {
      service: '캠퍼스 관리 - Basic',
      price: '$299/월',
      description: '기본적인 학업·생활 관리',
      includes: [
        '월간 리포트',
        '주간 소통',
        '기본 학업 모니터링',
        '생활 상담'
      ]
    },
    {
      service: '캠퍼스 관리 - Standard',
      price: '$499/월',
      description: '표준 관리 + 추가 지원',
      includes: [
        'Basic 모든 서비스',
        '학교/학원 Follow-up',
        '분기별 상담',
        '튜터 연계 지원'
      ],
      popular: true
    },
    {
      service: '캠퍼스 관리 - Premium',
      price: '$799/월',
      description: '토탈 케어 시스템',
      includes: [
        'Standard 모든 서비스',
        '병원/기관 동행',
        '시험 대비 플랜',
        '월 1회 화상 미팅'
      ]
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
            투명한 가격 정책
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            무료 서비스와 유료 서비스를 명확하게 안내드립니다
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-green-800 font-bold">💡 숨겨진 수수료 없음 | 모든 비용 사전 안내 | 투명한 가격 정책</p>
          </div>
        </div>
      </section>

      {/* Free Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-4">무료 서비스</h2>
            <p className="text-xl text-gray-600">별도 수수료 없이 제공되는 서비스입니다</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {freeServices[0].services.map((service, index) => (
              <Card key={index} className="p-6 border-2 border-green-200 bg-green-50/50 text-center">
                <div className="bg-green-500 text-white rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-black text-brand-green mb-2">{service}</h3>
                <p className="text-sm text-gray-600">별도 수수료 없음</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Services */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-4">유료 서비스</h2>
            <p className="text-xl text-gray-600">전문적인 관리와 지원이 필요한 서비스입니다</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {paidServices.map((service, index) => (
              <Card key={index} className={`p-6 relative ${service.popular ? 'border-2 border-brand-gold bg-brand-gold/5 scale-105' : 'border-2 border-brand-green/20'} transition-all active:scale-105 md:hover:scale-105`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      인기 서비스
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-brand-green">{service.service}</h3>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-brand-gold mr-1" />
                    <span className="text-2xl font-black text-brand-gold">{service.price}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${service.popular ? 'bg-brand-gold active:bg-brand-gold/90 md:hover:bg-brand-gold/90' : 'bg-brand-green active:bg-brand-green/90 md:hover:bg-brand-green/90'} font-bold`}
                  asChild
                >
                  <Link href={`/${params.locale}/contact`}>
                    상담 신청
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Policy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 border-2 border-brand-green/20">
            <h2 className="text-2xl font-black text-brand-green mb-6 text-center">가격 정책 안내</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-brand-green mb-4 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  포함 사항
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 상담 및 컨설팅 서비스</li>
                  <li>• 문서 작성 및 번역 지원</li>
                  <li>• 교육청/학교와의 커뮤니케이션</li>
                  <li>• 현지 긴급상황 대응</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center">
                  <X className="h-5 w-5 text-red-500 mr-2" />
                  별도 비용
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 교육청/학교 등록비 (실비)</li>
                  <li>• 정부 비자 신청비 (실비)</li>
                  <li>• 번역 공증비 (필요시)</li>
                  <li>• 의료진 동행시 교통비</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>💡 투명 정책:</strong> 모든 비용은 서비스 시작 전 명확히 안내드립니다. 
                예상치 못한 추가 비용이 발생할 경우 사전 동의 후 진행됩니다.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">맞춤형 상담으로 정확한 비용 안내받기</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            학생별 상황에 따라 필요한 서비스와 비용이 달라질 수 있습니다. 
            무료 상담을 통해 정확한 견적을 받아보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-green active:bg-brand-green/90 md:hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                무료 상담 신청
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-brand-gold text-brand-gold active:bg-brand-gold active:text-white md:hover:bg-brand-gold md:hover:text-white font-black"
              asChild
            >
              <Link href="http://pf.kakao.com/_xigxbxmn/chat/" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                카톡으로 빠른 문의
              </Link>
            </Button>
          </div>
          <KoreanPhoneDisplay className="mt-6" />
        </div>
      </section>
    </div>
  );
}