'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, Check, Star, Download } from 'lucide-react';

export default function CampusPlansPage({ params }: { params: { locale: string } }) {
  const plans = [
    {
      name: 'Basic',
      price: '$299',
      period: '월',
      description: '기본적인 관리 서비스',
      features: [
        '월간 PDF 리포트 제공',
        '주 1회 카카오톡 소통',
        '기본 학업 모니터링',
        '생활 상황 점검',
        '이메일 지원',
        '긴급 상황 대응'
      ],
      popular: false,
      color: 'brand-green'
    },
    {
      name: 'Standard',
      price: '$499',
      period: '월',
      description: '표준 관리 + 추가 지원',
      features: [
        'Basic 모든 서비스 포함',
        '학교/홈스테이 직접 소통',
        '분기별 화상/전화 상담',
        '튜터 및 학원 연계 지원',
        '병원 동행 서비스 (월 1회)',
        '학부모 요청사항 우선 처리'
      ],
      popular: true,
      color: 'brand-gold'
    },
    {
      name: 'Premium',
      price: '$799',
      period: '월',
      description: '토탈 케어 시스템',
      features: [
        'Standard 모든 서비스 포함',
        '월 1회 화상 미팅 (30분)',
        '병원/기관 동행 무제한',
        '개별 맞춤 시험 대비 플랜',
        '24시간 긴급 연락망',
        '전담 매니저 배정'
      ],
      popular: false,
      color: 'brand-green'
    }
  ];

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
            <span className="text-brand-gold font-medium">요금 플랜</span>
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
            캠퍼스 관리 요금 플랜
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            학생별 맞춤형 관리 서비스 선택
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              플랜 상담 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-4">관리 플랜 비교</h2>
            <p className="text-xl text-brand-gold max-w-3xl mx-auto">
              학생의 상황과 필요에 따라 최적의 플랜을 선택하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 ${plan.popular ? 'border-2 border-brand-gold bg-brand-gold/5 scale-105 shadow-xl' : 'border-2 border-brand-green/20'} relative transition-all hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-black flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      인기 플랜
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-brand-green mb-3">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-4xl font-black text-brand-gold">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-brand-gold hover:bg-brand-gold/90' : 'bg-brand-green hover:bg-brand-green/90'} font-black`}
                  asChild
                >
                  <Link href={`/${params.locale}/contact`}>
                    {plan.name} 플랜 선택
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">플랜 선택 가이드</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-black text-brand-green mb-4">Basic 플랜 추천</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 자립심이 강한 고등학생</li>
                  <li>• 기본적인 모니터링만 필요한 경우</li>
                  <li>• 예산을 고려한 경제적 선택</li>
                  <li>• 단기 유학생 (6개월 미만)</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-brand-gold/20">
                <h3 className="text-xl font-black text-brand-gold mb-4">Standard 플랜 추천</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 대부분의 초·중·고 학생에게 최적</li>
                  <li>• 균형잡힌 관리와 지원 서비스</li>
                  <li>• 안정적인 유학 생활 보장</li>
                  <li>• 가성비 최고의 선택</li>
                </ul>
              </Card>
            </div>
            
            <Card className="p-6 text-center">
              <h3 className="text-xl font-black text-brand-green mb-4">Premium 플랜 추천</h3>
              <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                <div>• 초등학생 또는 어린 중학생</div>
                <div>• 특별한 관리가 필요한 학생</div>
                <div>• 최고 수준의 안심 서비스 원하는 경우</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">지금 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            1개월 체험을 통해 서비스를 직접 경험해보세요. 
            언제든 플랜 변경이 가능합니다.
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
              <Link href={`/${params.locale}/contact`}>
                <Download className="mr-2 h-4 w-4" />
                플랜 비교표 다운로드
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}