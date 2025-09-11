'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
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
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl lg:text-5xl font-dodum text-brand-green mb-4 font-black">유학 성공 여정</h1>
                <p className="text-brand-gold text-lg">당신의 꿈을 현실로 만드는 5단계 스토리</p>
              </div>
              <FlipbookApp />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-24 mb-12 md:mb-8 flex justify-center">
            <div className="w-full max-w-6xl text-center">
              <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href={`/${params.locale}/contact`}
                className="bg-brand-green text-brand-ivory font-dodum font-black py-3 px-8 rounded-lg shadow-md hover:bg-brand-green/90 hover:-translate-y-1 transition-all duration-300"
              >
                무료 상담 신청
              </Link>
              <Link 
                href={`/${params.locale}/programs`}
                className="bg-white text-brand-green border-2 border-brand-green font-dodum font-black py-3 px-8 rounded-lg shadow-md hover:bg-brand-ivory hover:-translate-y-1 transition-all duration-300"
              >
                상세 프로그램 안내
              </Link>
              </div>
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
                <Link href={`/${params.locale}/contact?type=independent`}>
                  자녀 단독 유학 상담
                </Link>
              </Button>
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
                <Link href={`/${params.locale}/contact?type=parent-accompanied`}>
                  부모 동반 유학 상담
                </Link>
              </Button>
              </Card>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}