'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, MapPin, School, Users, Award, ArrowLeft } from 'lucide-react';

export default function RegionsSchoolsPage({ params }: { params: { locale: string } }) {
  const educationDistricts = [
    {
      name: '랭리 교육청',
      location: '랭리 (Langley)',
      features: ['ELL 프로그램 우수', 'AP/IB 제공', '소규모 클래스'],
      schools: 15,
      highlight: '한인 학생 비율 적정'
    },
    {
      name: '서리 교육청',
      location: '서리 (Surrey)',
      features: ['다양한 프로그램', '최신 시설', '교통 편리'],
      schools: 28,
      highlight: '가성비 우수'
    },
    {
      name: '코퀴틀람 교육청',
      location: '코퀴틀람 (Coquitlam)',
      features: ['학업 수준 높음', 'IB 프로그램', '대학 진학률 우수'],
      schools: 18,
      highlight: '명문 학군'
    },
    {
      name: '아보츠포드 교육청',
      location: '아보츠포드 (Abbotsford)',
      features: ['소도시 환경', '안전한 지역', '개별 케어'],
      schools: 12,
      highlight: '조용한 학습 환경'
    }
  ];

  const popularSchools = [
    {
      name: 'Walnut Grove Secondary',
      district: '랭리',
      program: 'IB, AP',
      specialty: '수학/과학 강점',
      rating: '★★★★★'
    },
    {
      name: 'Lord Tweedsmuir Secondary',
      district: '서리',
      program: 'AP, Career Programs',
      specialty: '예술/기술 우수',
      rating: '★★★★☆'
    },
    {
      name: 'Pinetree Secondary',
      district: '코퀴틀람',
      program: 'IB, French Immersion',
      specialty: '언어/인문학 강점',
      rating: '★★★★★'
    },
    {
      name: 'Robert Bateman Secondary',
      district: '아보츠포드',
      program: 'AP, Arts',
      specialty: '개별 맞춤형 교육',
      rating: '★★★★☆'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          href={`/${params.locale}/pre-departure`}
          className="inline-flex items-center text-brand-green hover:text-brand-green/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          출발 전 가이드로 돌아가기
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-brand-green mb-4 font-dodum">
            지역/학교 선택 가이드
          </h1>
          <p className="text-xl text-brand-gold mb-8 font-dodum max-w-3xl mx-auto">
            BC주 주요 교육청별 특징과 인기 학교 정보를 한눈에 비교해보세요
          </p>
        </div>
      </section>

      {/* Education Districts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-brand-green mb-8 text-center">주요 교육청 소개</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {educationDistricts.map((district, index) => (
              <Card key={index} className="p-6 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-black text-brand-green mb-2">{district.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{district.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-600">
                      <School className="h-4 w-4 mr-1" />
                      <span>{district.schools}개 학교</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="bg-brand-gold/10 px-3 py-2 rounded-lg mb-3">
                    <span className="text-brand-gold font-semibold text-sm">{district.highlight}</span>
                  </div>
                  <div className="space-y-2">
                    {district.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Schools */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-brand-green mb-8 text-center">인기 학교 한 줄 요약</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularSchools.map((school, index) => (
              <Card key={index} className="p-6 border-2 border-brand-gold/20 hover:border-brand-gold transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-black text-brand-green">{school.name}</h3>
                  <span className="text-brand-gold text-sm">{school.rating}</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">{school.district} 교육청</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">{school.program}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">{school.specialty}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-brand-green mb-6">학교 선택 자료 다운로드</h2>
            <p className="text-gray-600 mb-8">
              상세한 교육청 정보와 학교 비교표, 지원 체크리스트를 제공합니다.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-bold"
              >
                <Download className="mr-2 h-5 w-5" />
                교육청 공식 링크 + 한국어 요약 PDF
              </Button>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Button 
                  variant="outline"
                  className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-bold"
                >
                  학교 비교표 다운로드
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-bold"
                >
                  지원 체크리스트
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-brand-green mb-4">더 자세한 상담이 필요하신가요?</h2>
          <p className="text-gray-600 mb-8">개별 상황에 맞는 학교 추천과 지원 전략을 상담해드립니다.</p>
          <Button 
            size="lg" 
            className="bg-brand-gold hover:bg-brand-gold/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              무료 학교 선택 상담 받기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}