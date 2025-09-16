'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import { GraduationCap, Heart, FileText, Users, Clock, DollarSign } from 'lucide-react';
import '../../components/flipbook/flipbook-styles.css';

// Dynamic import to avoid SSR issues with the flipbook
const FlipbookApp = dynamic(
  () => import('@/components/flipbook/FlipbookApp'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-brand-green font-dodum text-xl animate-pulse">
          스토리북 로딩중...
        </div>
      </div>
    )
  }
);

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen" style={{backgroundImage: 'linear-gradient(to bottom, white 35%, #f8f6f0 100%)'}}>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Journey Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          {/* Interactive Story Flipbook Section */}
          <div className="mt-2 flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="text-center mb-4">
                <p className="text-brand-gold text-lg">당신의 꿈을 현실로 만드는 5단계 스토리</p>
              </div>
              <FlipbookApp />
            </div>
          </div>

          {/* Service Selection Guide */}
          <div className="mt-24 mb-16">
            <div className="w-full max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-brand-green mb-4">나에게 맞는 서비스는?</h2>
                <p className="text-xl text-brand-gold">학생 상황에 맞는 최적의 서비스를 찾아보세요</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {/* Pre-Departure Services */}
                <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-all">
                  <div className="text-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-black text-blue-600 mb-2">출발 전 준비</h3>
                    <p className="text-gray-600 text-sm">아직 유학 결정 전이거나 준비 단계</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>학교 선택 가이드 (무료)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>입학 절차 안내 (무료)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>등록 대행 (무료)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>비자 지원 ($300/인)</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href={`/${params.locale}/pre-departure`}>
                      출발 준비 시작하기
                    </Link>
                  </Button>
                </Card>

                {/* Arrival Services */}
                <Card className="p-6 border-2 border-green-200 hover:border-green-400 transition-all">
                  <div className="text-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-black text-green-600 mb-2">도착 & 정착</h3>
                    <p className="text-gray-600 text-sm">곧 출발하거나 이미 캐나다 도착</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>공항 픽업 (유료)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>정착 서비스 가이드 (유료)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>홈스테이 배정 (유료)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>24/7 긴급 지원 (유료)</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href={`/${params.locale}/arrival`}>
                      정착 서비스 보기
                    </Link>
                  </Button>
                </Card>

                {/* Campus Management */}
                <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
                  <div className="text-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <GraduationCap className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-black text-purple-600 mb-2">학업 관리</h3>
                    <p className="text-gray-600 text-sm">이미 학교 다니고 있지만 관리 필요</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Basic: $299/월</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Standard: $499/월 (인기)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Premium: $799/월</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href={`/${params.locale}/campus`}>
                      관리 프로그램 보기
                    </Link>
                  </Button>
                </Card>
              </div>

              {/* Quick Decision Helper */}
              <Card className="p-8 bg-gradient-to-r from-brand-green/5 to-brand-gold/5 border-2 border-brand-green/20">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-brand-green mb-4">어떤 서비스가 필요한지 모르겠나요?</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    학생의 현재 상황과 계획에 맞는 서비스를 추천해드립니다. 
                    무료 상담으로 정확한 가이드를 받아보세요.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-brand-green hover:bg-brand-green/90" asChild>
                      <Link href={`/${params.locale}/contact`}>
                        무료 상담 신청
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white" asChild>
                      <Link href={`/${params.locale}/pricing`}>
                        가격 정보 보기
                      </Link>
                    </Button>
                  </div>
                  <KoreanPhoneDisplay className="mt-4" />
                </div>
              </Card>
            </div>
          </div>

          {/* Service Type Cards */}
          <div className="flex justify-center mb-16">
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
              {/* Independent Service */}
              <Card className="relative overflow-hidden border-2 border-brand-green/20 hover:border-brand-green transition-all p-8">
              <div className="absolute top-0 right-0 bg-brand-green text-white px-4 py-1 text-sm font-bold">
                인기 프로그램
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-black text-brand-green mb-2">자녀 단독 유학</h3>
                <p className="text-gray-600">중·고등학생 독립형 프로그램</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1">✓</span>
                  <span>홈스테이 배정 및 관리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1">✓</span>
                  <span>가디언십 서비스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1">✓</span>
                  <span>정기 학업 모니터링</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green mt-1">✓</span>
                  <span>24시간 긴급 지원</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white" asChild>
                <Link href={`/${params.locale}/pre-departure/visa-support?type=independent`}>
                  자녀 단독 유학 상담
                </Link>
              </Button>
              <KoreanPhoneDisplay className="mt-3" size="sm" />
              </Card>
            
              {/* Parent-Accompanied Service */}
              <Card className="relative overflow-hidden border-2 border-brand-gold/20 hover:border-brand-gold transition-all p-8">
              <div className="absolute top-0 right-0 bg-brand-gold text-white px-4 py-1 text-sm font-bold">
                프리미엄 케어
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-black text-brand-gold mb-2">부모 동반 유학</h3>
                <p className="text-gray-600">초·중등 가족 이민형 프로그램</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>부모 비자 신청 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>주거지 정착 서비스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>생활 정착 토탈 케어</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>부모 영어 교육 연계</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white" asChild>
                <Link href={`/${params.locale}/pre-departure/visa-support?type=parent-accompanied`}>
                  부모 동반 유학 상담
                </Link>
              </Button>
              <KoreanPhoneDisplay className="mt-3" size="sm" />
              </Card>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}