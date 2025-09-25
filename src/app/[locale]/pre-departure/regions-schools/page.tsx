'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, MapPin, School, Users, Award, ArrowLeft, ExternalLink, Star, Globe, Video } from 'lucide-react';

export default function RegionsSchoolsPage({ params }: { params: { locale: string } }) {
  const educationDistricts = [
    {
      name: '랭리 교육청',
      location: '랭리 (Langley)',
      features: ['ELL 프로그램 우수', 'AP/IB/Langley Fine Arts 제공', '소규모 클래스', '국제학생 전용 프로그램'],
      schools: '40+',
      highlight: '🏆 추천 1순위',
      subheading: '"글로벌 시민으로 학생들 변화시키기"',
      website: 'https://www.sd35.bc.ca/studyinlangley',
      mainWebsite: 'https://www.sd35.bc.ca',
      isRecommended: true,
      specialPrograms: ['Advanced Placement', 'Langley Fine Arts', 'Homestay Program', '24,600명 학생 규모'],
      internationalContact: 'ISP@sd35.bc.ca',
      totalStudents: '24,600명',
      description: '밴쿠버 전문 유학원이 가장 추천하는 교육청으로, 국제학생을 위한 체계적인 지원 시스템과 우수한 교육 프로그램을 제공합니다.'
    },
    {
      name: '서리 교육청',
      location: '서리 (Surrey)',
      features: ['다양한 프로그램', '최신 시설', '교통 편리'],
      schools: 28,
      highlight: '가성비 우수',
      website: 'https://www.surreyschools.ca',
      mainWebsite: 'https://www.surreyschools.ca',
      isRecommended: false
    },
    {
      name: '코퀴틀람 교육청',
      location: '코퀴틀람 (Coquitlam)',
      features: ['학업 수준 높음', 'IB 프로그램', '대학 진학률 우수', 'French Immersion'],
      schools: 18,
      highlight: '명문 학군',
      website: 'https://www.internationaled.com',
      mainWebsite: 'https://www.sd43.bc.ca',
      specialPrograms: ['International Baccalaureate', 'French Immersion', 'Mandarin Bilingual', 'Career & Trades'],
      isRecommended: false
    },
    {
      name: '아보츠포드 교육청',
      location: '아보츠포드 (Abbotsford)',
      features: ['소도시 환경', '안전한 지역', '개별 케어', 'IB 프로그램'],
      schools: 12,
      highlight: '조용한 학습 환경',
      website: 'https://www.abbyschools.ca/programs/international-education',
      mainWebsite: 'https://www.abbyschools.ca',
      specialPrograms: ['International Baccalaureate', 'French Immersion', 'Sports Academies'],
      isRecommended: false
    }
  ];

  const popularSchools = [
    {
      name: 'Walnut Grove Secondary',
      district: '랭리',
      program: 'AP (Advanced Placement)',
      specialty: 'AP 강점 (수학, 과학, 영어 등) + 다양한 과목',
      rating: '★★★★★',
      isLangley: true,
      highlights: ['광범위한 AP 과목 (과학 포함)', '최신 과학 실험실', '교육청 국제학생 지원']
    },
    {
      name: 'R.E. Mountain Secondary',
      district: '랭리',
      program: 'IB (International Baccalaureate)',
      specialty: 'IB 디플로마 + 예술 및 과외활동 강점',
      rating: '★★★★★',
      isLangley: true,
      highlights: ['IB World School (풀 디플로마)', 'Pre-IB 준비 과정 (9-10학년)', '시각 및 공연 예술 기회']
    },
    {
      name: 'Brookswood Secondary',
      district: '랭리',
      program: 'AP, French Immersion',
      specialty: '다양한 선택 과목 + 실습 중심',
      rating: '★★★★☆',
      isLangley: true,
      highlights: ['AP 시험 기회', 'French Immersion 프로그램', '특별 선택과목 (연극, 영화, 자동차 정비 등)']
    },
    {
      name: 'Lord Tweedsmuir Secondary',
      district: '서리',
      specialty: '대규모 종합 학교 + 운동/과외활동 강점',
      rating: '★★★★☆',
      isLangley: false,
      highlights: ['강력한 운동 프로그램', '다양한 선택 과목']
    },
    {
      name: 'Pinetree Secondary',
      district: '코퀴틀람',
      program: 'IB, French Immersion',
      specialty: 'IB 디플로마 + French Immersion 중심',
      rating: '★★★★★',
      isLangley: false,
      highlights: ['IB 디플로마 프로그램', 'French Immersion', '균형잡힌 학업 및 과외활동']
    },
    {
      name: 'Robert Bateman Secondary',
      district: '아보츠포드',
      program: 'AP, Arts, Athletics',
      specialty: '개인 맞춤 학습 + 다양한 선택과목',
      rating: '★★★★☆',
      isLangley: false,
      highlights: ['AP 옵션 제공', '강력한 예술 및 운동 프로그램', '유연한 개인 맞춤 학습 경로']
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
              <Card 
                key={index} 
                className={`relative p-6 border-2 transition-all hover:shadow-lg ${
                  district.isRecommended 
                    ? 'border-brand-gold bg-gradient-to-br from-brand-gold/5 to-brand-green/5 hover:border-brand-gold' 
                    : 'border-brand-green/20 hover:border-brand-green'
                }`}
              >
                {/* Recommended Badge */}
                {district.isRecommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-gold to-yellow-400 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg font-bold text-sm flex items-center gap-1 shadow-lg animate-pulse">
                    <Star className="h-4 w-4 animate-bounce" />
                    추천
                  </div>
                )}

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className={`text-xl font-black mb-1 ${district.isRecommended ? 'text-brand-gold' : 'text-brand-green'}`}>
                      {district.name}
                    </h3>
                    {district.isRecommended && <Star className="h-5 w-5 text-brand-gold" />}
                  </div>
                  {district.subheading && (
                    <p className="text-sm text-gray-600 italic mb-2">{district.subheading}</p>
                  )}
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{district.location}</span>
                  </div>
                </div>

                {/* Description for recommended district */}
                {district.description && (
                  <div className="mb-4 p-3 bg-white/50 rounded-lg border-l-4 border-brand-gold">
                    <p className="text-sm text-gray-700 leading-relaxed">{district.description}</p>
                  </div>
                )}
                
                <div className="mb-4">
                  <div className={`px-3 py-2 rounded-lg mb-3 ${
                    district.isRecommended ? 'bg-brand-gold/20' : 'bg-brand-gold/10'
                  }`}>
                    <span className={`font-semibold text-sm ${
                      district.isRecommended ? 'text-brand-gold' : 'text-brand-gold'
                    }`}>
                      {district.highlight}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {district.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          district.isRecommended ? 'bg-brand-gold' : 'bg-brand-green'
                        }`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Special Programs */}
                  {district.specialPrograms && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">특별 프로그램:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {district.specialPrograms.map((program, idx) => (
                          <div key={idx} className="text-xs bg-white/50 px-2 py-1 rounded">
                            {program}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact info for Langley */}
                  {district.internationalContact && (
                    <div className="mb-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <span>📧 국제학생 담당:</span>
                        <span className="font-medium">{district.internationalContact}</span>
                      </div>
                      {district.totalStudents && (
                        <div className="flex items-center gap-1 mt-1">
                          <Users className="h-3 w-3" />
                          <span>총 학생 수: {district.totalStudents}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Website Links */}
                  <div className="flex gap-2">
                    <a
                      href={district.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-xs px-3 py-2 rounded-lg border transition-colors ${
                        district.isRecommended 
                          ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white' 
                          : 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white'
                      }`}
                    >
                      <Globe className="h-3 w-3" />
                      국제학생 프로그램
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    
                    {district.mainWebsite !== district.website && (
                      <a
                        href={district.mainWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <School className="h-3 w-3" />
                        교육청 홈페이지
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
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
          <h2 className="text-3xl font-black text-brand-green mb-4 text-center">인기 학교 한 줄 요약</h2>
          <p className="text-center text-gray-600 mb-8">🏆 표시는 랭리 교육청 추천 학교입니다</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSchools.map((school, index) => (
              <Card 
                key={index} 
                className={`relative p-6 border-2 transition-all hover:shadow-lg ${
                  school.isLangley 
                    ? 'border-brand-gold/50 bg-gradient-to-br from-brand-gold/5 to-brand-green/5 hover:border-brand-gold' 
                    : 'border-brand-green/20 hover:border-brand-green'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-lg font-black ${school.isLangley ? 'text-brand-gold' : 'text-brand-green'}`}>
                    {school.name}
                  </h3>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-brand-gold text-sm">{school.rating}</span>
                    {/* Langley Badge */}
                    {school.isLangley && (
                      <div className="bg-brand-gold text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                        🏆 추천
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <span className={`${school.isLangley ? 'text-brand-gold font-medium' : 'text-gray-600'}`}>
                      {school.district} 교육청
                    </span>
                  </div>
                  
                  {school.program && (
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-600">{school.program}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">{school.specialty}</span>
                  </div>
                </div>

                {/* Langley School Highlights */}
                {school.highlights && (
                  <div className="mt-4 p-3 bg-white/50 rounded-lg border-l-4 border-brand-gold">
                    <h4 className="font-semibold text-sm text-brand-gold mb-2">주요 특징:</h4>
                    <div className="space-y-1">
                      {school.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Langley Schools Spotlight */}
          <div className="mt-12">
            <Card className="p-8 bg-gradient-to-r from-brand-gold/10 via-brand-green/5 to-brand-gold/10 border-2 border-brand-gold/30">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-brand-gold mb-2">🏆 랭리 교육청 특별 추천</h3>
                <p className="text-gray-600">
                  온앤오프 뉴페이지가 가장 추천하는 랭리 교육청의 우수한 국제학생 프로그램과 지원 시스템
                </p>
              </div>
              
              {/* Featured Video */}
              <div className="mb-8">
                <div className="bg-white/50 rounded-lg p-6 border-2 border-brand-gold/20">
                  <h4 className="text-lg font-bold text-brand-green mb-4 text-center flex items-center justify-center gap-2">
                    <Video className="h-5 w-5" />
                    랭리 교육청 공식 소개 영상
                  </h4>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/_ijWaYB-RmQ"
                      title="Langley School District Introduction"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-3">
                    랭리 교육청의 국제학생 프로그램과 교육 환경을 직접 확인해보세요
                  </p>
                </div>
              </div>

              {/* Official Resources */}
              <div className="mb-8">
                <div className="bg-white/70 rounded-lg p-6 border-2 border-brand-gold/30">
                  <h4 className="text-lg font-bold text-brand-green mb-4 text-center flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    랭리 교육청 공식 자료 다운로드
                  </h4>
                  <p className="text-center text-sm text-gray-600 mb-6">
                    랭리 교육청에서 제공하는 한국어 공식 자료를 확인해보세요
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Korean Brochure */}
                    <a
                      href="https://media.sd35.bc.ca/media/Default/medialib/korean-brochure-single-page.3c96f75479.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-brand-gold text-white p-4 rounded-lg font-bold hover:bg-brand-gold/90 transition-colors"
                    >
                      <Download className="h-6 w-6" />
                      <span className="text-center text-sm">프로그램 안내 브로셔</span>
                      <span className="text-xs opacity-80">(한국어)</span>
                    </a>
                    
                    {/* 2025-26 Program */}
                    <a
                      href="https://media.sd35.bc.ca/media/Default/medialib/korean-25-26.06d9f95486.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-brand-green text-white p-4 rounded-lg font-bold hover:bg-brand-green/90 transition-colors"
                    >
                      <Download className="h-6 w-6" />
                      <span className="text-center text-sm">2025-26 프로그램</span>
                      <span className="text-xs opacity-80">(한국어)</span>
                    </a>
                    
                    {/* 2026-27 Program */}
                    <a
                      href="https://media.sd35.bc.ca/media/Default/medialib/korean-26-27.33a5f15493.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-brand-gold text-white p-4 rounded-lg font-bold hover:bg-brand-gold/90 transition-colors"
                    >
                      <Download className="h-6 w-6" />
                      <span className="text-center text-sm">2026-27 프로그램</span>
                      <span className="text-xs opacity-80">(한국어)</span>
                    </a>
                    
                    {/* District Activities */}
                    <a
                      href="https://media.sd35.bc.ca/media/Default/medialib/district-trips-2025-26-2.4e4b2f10643.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-white border-2 border-brand-gold text-brand-gold p-4 rounded-lg font-bold hover:bg-brand-gold hover:text-white transition-colors"
                    >
                      <Users className="h-6 w-6" />
                      <span className="text-center text-sm">현장학습 & 활동</span>
                      <span className="text-xs opacity-80">2025-26</span>
                    </a>
                    
                    {/* School Calendar */}
                    <a
                      href="https://media.sd35.bc.ca/media/Default/medialib/isp-school-calendar-2025-2026-secondary-isp2.3815c510892.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-white border-2 border-brand-green text-brand-green p-4 rounded-lg font-bold hover:bg-brand-green hover:text-white transition-colors"
                    >
                      <Award className="h-6 w-6" />
                      <span className="text-center text-sm">학사 일정표</span>
                      <span className="text-xs opacity-80">2025-26</span>
                    </a>
                    
                    {/* Contact Info */}
                    <div className="flex flex-col items-center gap-2 bg-gray-100 text-gray-700 p-4 rounded-lg">
                      <Globe className="h-6 w-6" />
                      <span className="text-center text-sm font-bold">공식 연락처</span>
                      <div className="text-xs text-center">
                        <div>📧 ISP@sd35.bc.ca</div>
                        <div>📞 604-534-7891</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-brand-green flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    국제학생 전용 서비스
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      전담 국제학생 상담사 (ISP@sd35.bc.ca)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      체계적인 홈스테이 관리 프로그램
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      24,600명 규모의 안정적인 교육 환경
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-brand-green flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    특별 교육 프로그램
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      Langley Fine Arts 예술 특성화
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      Advanced Placement (AP) 대학 준비
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      ELL 프로그램으로 영어 실력 향상
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.sd35.bc.ca/studyinlangley"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-gold/90 transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    랭리 국제학생 프로그램 보기
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  
                  <Button 
                    className="bg-brand-green hover:bg-brand-green/90 text-white"
                    asChild
                  >
                    <Link href={`/${params.locale}/contact`}>
                      랭리 교육청 맞춤 상담 받기
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
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