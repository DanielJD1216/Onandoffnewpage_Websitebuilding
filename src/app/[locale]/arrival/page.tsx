'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plane, School, Home, Shield, Phone, ArrowRight } from 'lucide-react';

export default function ArrivalPage({ params }: { params: { locale: string } }) {
  const services = [
    {
      icon: Plane,
      title: '공항 픽업',
      description: '스터디 퍼밋 수령부터 홈스테이 체크인까지',
      href: '/arrival/airport-pickup',
      features: [
        '입국 심사 가이드',
        '스터디 퍼밋 수령 지원',
        '세관 통과 도움',
        '홈스테이까지 안전 이동'
      ]
    },
    {
      icon: School,
      title: '학교 OT F/U',
      description: '첫 등교부터 과목 선택까지 완벽 지원',
      href: '/arrival/school-orientation',
      features: [
        '첫 등교 동행 (선택)',
        'My Education BC 계정 세팅',
        '과목 변경/ESL 등록',
        '오리엔테이션 확인'
      ]
    },
    {
      icon: Home,
      title: '정착 패키지',
      description: '생활 필수품부터 각종 등록까지',
      href: '/arrival/settling-in',
      features: [
        '통신·은행·교통카드 개통',
        '학용품 구매 동행',
        '비상연락망 구축',
        '생활용품 쇼핑 가이드'
      ]
    },
    {
      icon: Shield,
      title: '안전·소통 체계',
      description: '24시간 안전망과 정기 소통',
      href: '/arrival/safety-comms',
      features: [
        '24시간 비상 연락',
        '주간 체크인 리포트',
        '위기 대응 프로토콜',
        '부모님과의 정기 소통'
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
            공항 착륙 순간부터 안정적 정착까지
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            밴쿠버 도착 첫날부터 학교 적응까지, 모든 과정을 함께합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                정착 서비스 상담 신청
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all group">
                  <div className="flex items-center mb-6">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <IconComponent className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-brand-green">{service.title}</h2>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-brand-green hover:bg-brand-green/90 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all"
                    asChild
                  >
                    <Link href={`/${params.locale}${service.href}`}>
                      <ArrowRight className="mr-2 h-4 w-4" />
                      자세히 보기
                    </Link>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Homestay Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-brand-green mb-4">On&Off 인증 홈스테이</h2>
              <p className="text-xl text-brand-gold">엄선된 홈스테이 가정과 직영 토탈케어 서비스</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-2 border-brand-green/20">
                <h3 className="text-xl font-black text-brand-green mb-4">On&Off 인증 홈스테이</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>기본 홈스테이</span>
                    <span className="font-bold text-brand-green">$1,500/월</span>
                  </div>
                  <div className="flex justify-between">
                    <span>프리미엄 케어</span>
                    <span className="font-bold text-brand-green">$2,200/월</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토탈 케어 패키지</span>
                    <span className="font-bold text-brand-green">$3,000/월</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 등교·하교 동행 서비스</li>
                  <li>• 주1회 청소·빨래 서비스</li>
                  <li>• 학원 라이드 서비스</li>
                  <li>• 24시간 케어 시스템</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-brand-gold/20 bg-brand-gold/5">
                <h3 className="text-xl font-black text-brand-gold mb-4">On&Off 직영 홈스테이</h3>
                <div className="bg-brand-gold/10 p-4 rounded-lg mb-4">
                  <p className="text-brand-gold font-semibold text-center">토탈 케어 시스템</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 한국인 매니저 상주</li>
                  <li>• 개별 맞춤형 케어</li>
                  <li>• 학습 환경 최적화</li>
                  <li>• 실시간 부모 소통</li>
                  <li>• 응급상황 즉시 대응</li>
                </ul>
                <Button className="w-full mt-4 bg-brand-gold hover:bg-brand-gold/90" asChild>
                  <Link href={`/${params.locale}/arrival/homestay`}>
                    직영 홈스테이 상담
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-brand-green mb-12 text-center">케이스별 정착 서비스</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all">
              <h3 className="text-2xl font-black text-brand-green mb-4">아이 혼자 유학</h3>
              <p className="text-gray-600 mb-6">중·고등학생 단독 유학생을 위한 완벽한 생활 지원</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                  <span>통신·은행·교통카드 개통 대행</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                  <span>학용품 구매 및 생활용품 쇼핑</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                  <span>비상연락망 구축 및 안전 교육</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                  <span>홈스테이 적응 지원</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 border-2 border-brand-gold/20 hover:border-brand-gold transition-all">
              <h3 className="text-2xl font-black text-brand-gold mb-4">부모 동반 유학</h3>
              <p className="text-gray-600 mb-6">가족 이민형 정착을 위한 종합 지원 서비스</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  <span>렌트 계약 및 정착 지원</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  <span>가구 픽업 및 생활용품 조율</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  <span>각종 관공서 등록 지원</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  <span>지역 커뮤니티 연결</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">안전하고 편안한 정착을 약속드립니다</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            캐나다 도착 첫날부터 학교 적응까지, 전 과정을 체계적으로 지원합니다. 
            개인별 맞춤 정착 플랜을 상담받아보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                정착 패키지 견적 요청
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/arrival/homestay`}>
                홈스테이 리스트 받아보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}