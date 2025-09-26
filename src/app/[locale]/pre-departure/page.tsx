'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FeatureCard } from '@/components/ui/feature-card';
import { ContactMethodCard } from '@/components/ui/contact-method-card';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import {
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  FileText,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Download,
  MapPin,
  School,
  Award,
  ExternalLink,
  Globe,
  Video,
  BookOpen,
  GraduationCap,
  Target,
  Briefcase,
  Home,
  Plane,
  Building2
} from 'lucide-react';

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

function TabButton({ isActive, onClick, icon: Icon, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${
        isActive
          ? 'bg-brand-green text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-green border border-gray-200'
      }`}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );
}

export default function PreDeparturePage({ params }: { params: { locale: string } }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '인생의 새로운 페이지', icon: BookOpen },
    { id: 'consultation', label: '상담 절차 안내', icon: MessageCircle },
    { id: 'regions', label: '지역/학교 선택', icon: MapPin },
    { id: 'admissions', label: '입학 절차 안내', icon: GraduationCap },
    { id: 'registration', label: '학교 등록 대행', icon: FileText },
    { id: 'visa', label: '비자 지원', icon: Plane }
  ];

  const consultationSteps = [
    {
      step: 1,
      title: '초기 상담 신청',
      duration: '5-10분',
      description: '카카오톡, 전화, 또는 이메일로 간편 신청',
      details: [
        '카카오톡/전화/이메일을 통한 간편 연락',
        '기본 정보 문의 (학생 정보, 학부모 연락처)',
        '관심 지역 및 학교 유형 상담',
        '예상 출국 시기 및 예산 범위 논의'
      ],
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      step: 2,
      title: '전문가 매칭 & 일정 조율',
      duration: '카톡/전화: 당일 · 이메일: 1-2일',
      description: '학생 상황에 맞는 전문 컨설턴트 배정 및 상담 일정 확정',
      details: [
        '학생 성향 및 목표에 따른 컨설턴트 매칭',
        '온라인/오프라인 상담 방식 선택',
        '한국 시간 또는 밴쿠버 시간 중 편한 시간 선택',
        '상담 전 준비사항 안내'
      ],
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      step: 3,
      title: '1차 심층 상담',
      duration: '60-90분',
      description: '학생과 학부모님을 위한 맞춤형 유학 계획 수립',
      details: [
        '학생 학업 능력 및 적성 파악',
        '지역별 교육 시스템 및 학교 소개',
        '예산에 맞는 최적의 옵션 제시',
        '비자, 홈스테이, 가디언십 등 전반적 안내'
      ],
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      step: 4,
      title: '맞춤 계획서 제공',
      duration: '3-5일',
      description: '상담 내용을 바탕으로 한 개인별 맞춤 유학 계획서 작성',
      details: [
        '추천 학교 리스트 및 상세 정보',
        '단계별 진행 일정 및 준비사항',
        '예상 비용 및 예산 계획',
        '입학 요건 및 필요 서류 안내'
      ],
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-orange-500',
      textColor: 'text-orange-600'
    },
    {
      step: 5,
      title: '후속 상담 & 서비스 진행',
      duration: '지속적',
      description: '계획 확정 후 입학부터 출국까지 전 과정 지원',
      details: [
        '학교 지원서 작성 및 제출 대행',
        '비자 신청 서류 준비 및 신청',
        '홈스테이 배정 및 공항 픽업 준비',
        '출국 전 오리엔테이션 및 현지 정착 지원'
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'bg-brand-green',
      textColor: 'text-brand-green'
    }
  ];

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
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <BookOpen className="w-5 h-5" />
                <span>Page 0 · 출발 전 가이드</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-brand-green leading-tight">
                캐나다 유학,<br />
                <span className="text-brand-gold">준비부터 등록까지 한 번에</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                지역·학교 선택, 입학 절차, 비자까지 단계별로 안내드립니다.
                전문 컨설턴트와 함께 체계적으로 준비하세요.
              </p>
            </div>

            {/* Main Services Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 01. 지역/학교 선택 가이드 */}
              <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all group hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">01</span>
                  <h2 className="text-2xl font-black text-brand-green">지역/학교 선택 가이드</h2>
                  <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold ml-4">무료</span>
                </div>
                <p className="text-gray-600 mb-6">
                  교육청 소개(랭리/서리/코퀴틀람/아보츠포드/버나비 등) + 간단 특징(ELL/강점 과목/IB·AP 여부)
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>인기 학교/프로그램 한 줄 요약 카드 6–8개</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>교육청 공식 링크 + 한국어 요약 PDF</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-brand-green hover:bg-brand-green/90 group-hover:scale-105 transition-all duration-300"
                  onClick={() => setActiveTab('regions')}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  지역/학교 선택 가이드 보기
                </Button>
              </Card>

              {/* 02. 입학 절차 안내 */}
              <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all group hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">02</span>
                  <h2 className="text-2xl font-black text-brand-green">입학 절차 안내</h2>
                  <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold ml-4">무료</span>
                </div>
                <p className="text-gray-600 mb-6">
                  서류 체크리스트부터 등록까지, 3순위까지 지원 가능, 평균 처리 2–8주
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>여권 사본, 최근 성적표, 예방접종 기록 체크리스트</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>단계별 진행 과정 안내 (Stepper UI)</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-brand-green hover:bg-brand-green/90 group-hover:scale-105 transition-all duration-300"
                  onClick={() => setActiveTab('admissions')}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  입학 절차 안내 보기
                </Button>
              </Card>

              {/* 03. 학교 등록 대행 */}
              <Card className="p-8 border-2 border-brand-gold/20 hover:border-brand-gold transition-all group hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">03</span>
                  <h2 className="text-2xl font-black text-brand-gold">학교 등록 대행</h2>
                  <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold ml-4">무료</span>
                </div>
                <p className="text-gray-600 mb-6">
                  지원서 작성부터 최종 등록 확인서 수령까지 전 과정 대행
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold mr-2" />
                    <span>지원서 작성 및 교육청/학교 커뮤니케이션</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold mr-2" />
                    <span>등록 확인서(LOA/Seat Confirmation) 수령</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-brand-gold hover:bg-brand-gold/90 group-hover:scale-105 transition-all duration-300"
                  onClick={() => setActiveTab('registration')}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  등록 대행 서비스 보기
                </Button>
              </Card>

              {/* 04. 비자 지원 */}
              <Card className="p-8 border-2 border-brand-gold/20 hover:border-brand-gold transition-all group hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">04</span>
                  <h2 className="text-2xl font-black text-brand-gold">비자 지원</h2>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold ml-4">+$300/인</span>
                </div>
                <p className="text-gray-600 mb-6">
                  학생비자/동반부모(Visitor Record) 개요, 평균 처리 6–12주
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold mr-2" />
                    <span>필수 서류 체크리스트 제공</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold mr-2" />
                    <span>외부 행정사/로펌 연계 (수임은 파트너)</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-brand-gold hover:bg-brand-gold/90 group-hover:scale-105 transition-all duration-300"
                  onClick={() => setActiveTab('visa')}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  비자 지원 서비스 보기
                </Button>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <Card className="p-8">
                <h2 className="text-3xl font-black text-brand-green mb-8 text-center">자주 묻는 질문</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">Q. 입학/비자 소요기간은?</h3>
                    <p className="text-gray-600 mb-4">입학: 평균 2-8주, 비자: 평균 6-12주 (시기별 변동)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">Q. 시험이 필요한가요?</h3>
                    <p className="text-gray-600 mb-4">대부분의 초중고는 별도 시험 없이 성적표로 입학 가능</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">Q. 환불·연기 가능한가요?</h3>
                    <p className="text-gray-600 mb-4">교육청 규정에 따라 다르며, 상황별 안내 제공</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-green mb-2">Q. 서비스 범위는?</h3>
                    <p className="text-gray-600 mb-4">교육청/학교 비용은 실비 별도, 당사 수수료는 서비스료</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'consultation':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <MessageCircle className="w-5 h-5" />
                <span>상담 절차 안내</span>
              </div>
              <h1 className="text-4xl font-black text-brand-green">
                체계적이고 전문적인<br />
                <span className="text-brand-gold">5단계 상담 프로세스</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                학생에게 최적화된 유학 계획을 수립하는 단계별 상담 과정을 안내드립니다.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Shield className="w-8 h-8 text-brand-green" />
                <span className="font-black text-brand-green text-lg">100% 무료 상담</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Zap className="w-8 h-8 text-brand-gold" />
                <span className="font-black text-brand-gold text-lg">맞춤형 계획 수립</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Star className="w-8 h-8 text-purple-600" />
                <span className="font-black text-purple-600 text-lg">전문가 1:1 매칭</span>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-black text-center text-brand-green mb-8">전체 프로세스 타임라인</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {consultationSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
                      <div className={`${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        {step.icon}
                      </div>
                      <h4 className="font-black text-lg mb-2">{step.title}</h4>
                      <Badge variant="secondary" className="mb-3">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.duration}
                      </Badge>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </Card>
                    {index < consultationSteps.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-center text-brand-green">상세 프로세스</h3>
              {consultationSteps.map((step) => (
                <Card key={step.step} className="p-6">
                  <div className="flex items-start gap-6">
                    <div className={`${step.color} text-white p-4 rounded-full flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-black text-gray-800">{step.title}</h3>
                        <Badge variant="secondary">
                          <Clock className="w-4 h-4 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4 text-lg">{step.description}</p>
                      <div className="grid gap-2">
                        {step.details.map((detail, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 mt-0.5 ${step.textColor}`} />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* FAQ */}
            <Card className="p-8">
              <h3 className="text-2xl font-black text-brand-green mb-6 text-center">상담 관련 FAQ</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: '상담 비용이 정말 무료인가요?',
                    a: '네, 초기 상담부터 학교 등록까지 모든 과정이 완전 무료입니다. 별도의 수수료나 숨겨진 비용이 일체 없습니다.'
                  },
                  {
                    q: '상담은 얼마나 걸리나요?',
                    a: '1차 상담은 보통 60-90분 정도 소요됩니다. 학생의 상황과 질문에 따라 시간이 조정될 수 있으며, 충분한 시간을 갖고 상담을 진행합니다.'
                  },
                  {
                    q: '온라인 상담도 가능한가요?',
                    a: '네, 화상회의를 통한 온라인 상담이 가능합니다. 거리나 시간 제약이 있으신 분들도 편리하게 상담받으실 수 있습니다.'
                  },
                  {
                    q: '상담 후 바로 결정해야 하나요?',
                    a: '전혀 그렇지 않습니다. 충분한 시간을 갖고 가족과 상의한 후 결정하시면 됩니다. 추가 질문이 있으시면 언제든 연락 주세요.'
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="font-black text-brand-green mb-2">Q. {item.q}</h4>
                    <p className="text-gray-600 text-sm">A. {item.a}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case 'regions':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <MapPin className="w-5 h-5" />
                <span>지역/학교 선택 가이드</span>
              </div>
              <h1 className="text-4xl font-black text-brand-green">
                BC주 주요 교육청별 특징과<br />
                <span className="text-brand-gold">인기 학교 정보</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                교육청별 프로그램과 특징을 한눈에 비교하고 최적의 선택을 하세요.
              </p>
            </div>

            {/* Education Districts */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-brand-green text-center">주요 교육청 소개</h2>
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
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-gold to-yellow-400 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg font-bold text-sm flex items-center gap-1 shadow-lg">
                        <Star className="h-4 w-4" />
                        추천 1순위
                      </div>
                    )}

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`text-2xl font-black mb-1 ${district.isRecommended ? 'text-brand-gold' : 'text-brand-green'}`}>
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
                      <div className="mb-4 p-4 bg-white/50 rounded-lg border-l-4 border-brand-gold">
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
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Popular Schools */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-brand-green text-center">인기 학교 한 줄 요약</h2>
              <p className="text-center text-gray-600">🏆 표시는 랭리 교육청 추천 학교입니다</p>

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
                          <div className="bg-brand-gold text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
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
              <Card className="p-8 bg-gradient-to-r from-brand-gold/10 via-brand-green/5 to-brand-gold/10 border-2 border-brand-gold/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-brand-gold mb-2">🏆 랭리 교육청 특별 추천</h3>
                  <p className="text-gray-600">
                    온앤오프 뉴페이지가 가장 추천하는 랭리 교육청의 우수한 국제학생 프로그램과 지원 시스템
                  </p>
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
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'admissions':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <GraduationCap className="w-5 h-5" />
                <span>입학 절차 안내</span>
              </div>
              <h1 className="text-4xl font-black text-brand-green">
                서류 체크리스트부터 등록까지<br />
                <span className="text-brand-gold">단계별 입학 가이드</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                3순위까지 지원 가능하며, 평균 처리 기간은 2-8주입니다.
                체계적인 준비로 성공적인 입학을 보장합니다.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center bg-gradient-to-br from-white to-blue-50/50 border border-blue-200/50">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <h3 className="text-lg font-black text-brand-green mb-2">서류 준비</h3>
                <p className="text-sm text-gray-700">필수 서류 체크리스트 확인 및 준비</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-white to-green-50/50 border border-green-200/50">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <h3 className="text-lg font-black text-brand-green mb-2">지원서 작성</h3>
                <p className="text-sm text-gray-700">교육청 온라인 시스템을 통한 지원서 제출</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-white to-yellow-50/50 border border-yellow-200/50">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <h3 className="text-lg font-black text-brand-green mb-2">심사 대기</h3>
                <p className="text-sm text-gray-700">교육청 검토 및 학교 배정 (2-8주)</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-white to-purple-50/50 border border-purple-200/50">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <h3 className="text-lg font-black text-brand-green mb-2">등록 확인</h3>
                <p className="text-sm text-gray-700">LOA 수령 및 학비 납부</p>
              </Card>
            </div>

            {/* Document Checklist */}
            <Card className="p-8">
              <h2 className="text-2xl font-black text-brand-green mb-6 text-center">필수 서류 체크리스트</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-4">기본 서류</h3>
                  <div className="space-y-3">
                    {[
                      '여권 사본 (유효기간 6개월 이상)',
                      '최근 2년 성적표 (영문)',
                      '재학증명서 또는 졸업증명서',
                      '예방접종 기록 (영문)',
                      '보호자 신원보증서'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-4">추가 서류 (해당시)</h3>
                  <div className="space-y-3">
                    {[
                      '영어 능력 증명서 (IELTS, TOEFL 등)',
                      '특별활동 증명서',
                      '수상 경력 증명서',
                      '포트폴리오 (예술 관련 프로그램)',
                      '추천서 (특정 프로그램)'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Timeline */}
            <Card className="p-8 bg-gradient-to-r from-brand-green/10 to-brand-gold/10">
              <h2 className="text-2xl font-black text-brand-green mb-6 text-center">처리 기간 안내</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">2-4주</h3>
                  <p className="text-sm text-gray-600">일반적인 처리 기간</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">4-6주</h3>
                  <p className="text-sm text-gray-600">성수기 (9월, 2월 입학)</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">6-8주</h3>
                  <p className="text-sm text-gray-600">서류 보완 필요시</p>
                </div>
              </div>
            </Card>

            {/* Important Notes */}
            <Card className="p-6 bg-yellow-50 border border-yellow-200">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">⚠️ 중요 안내사항</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• 입학 신청은 선착순으로 처리되므로 조기 신청을 권장합니다</li>
                <li>• 모든 서류는 영문 또는 공증번역본이어야 합니다</li>
                <li>• 학기 시작 최소 3개월 전에 신청을 완료해야 합니다</li>
                <li>• 교육청별로 요구사항이 다를 수 있으니 사전 확인이 필요합니다</li>
              </ul>
            </Card>
          </div>
        );

      case 'registration':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <FileText className="w-5 h-5" />
                <span>학교 등록 대행</span>
              </div>
              <h1 className="text-4xl font-black text-brand-green">
                지원서 작성부터 최종 등록까지<br />
                <span className="text-brand-gold">전 과정 무료 대행</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                복잡한 등록 절차를 전문가가 대신 처리해드립니다.
                등록 확인서(LOA) 수령까지 완벽하게 지원합니다.
              </p>
            </div>

            {/* Service Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon="📝"
                title="지원서 작성 대행"
                description="교육청별 지원서 양식에 맞춰 정확하고 완벽한 지원서를 작성해드립니다."
                variant="premium"
              />
              <FeatureCard
                icon="💬"
                title="교육청 소통 대행"
                description="교육청 및 학교와의 모든 커뮤니케이션을 대신 처리하여 신속한 진행을 보장합니다."
                variant="premium"
              />
              <FeatureCard
                icon="📋"
                title="LOA 수령 관리"
                description="등록 확인서(Letter of Acceptance) 수령까지 모든 과정을 추적 관리합니다."
                variant="premium"
              />
            </div>

            {/* Process */}
            <Card className="p-8">
              <h2 className="text-2xl font-black text-brand-green mb-8 text-center">등록 대행 프로세스</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">1</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-green mb-2">서류 검토</h3>
                  <p className="text-sm text-gray-700">제출 서류 완성도 검토 및 보완</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">2</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-green mb-2">지원서 작성</h3>
                  <p className="text-sm text-gray-700">교육청 시스템에 정확한 정보 입력</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">3</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-green mb-2">제출 및 추적</h3>
                  <p className="text-sm text-gray-700">지원서 제출 후 진행 상황 모니터링</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">4</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-green mb-2">LOA 수령</h3>
                  <p className="text-sm text-gray-700">등록 확인서 수령 및 학부모 전달</p>
                </div>
              </div>
            </Card>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-black text-brand-green mb-4">포함 서비스</h3>
                <div className="space-y-3">
                  {[
                    '교육청별 지원서 양식 작성',
                    '온라인 시스템 계정 생성 및 관리',
                    '서류 업로드 및 제출',
                    '지원 현황 실시간 모니터링',
                    '교육청 담당자와 직접 소통',
                    'LOA 수령 및 번역 서비스',
                    '학비 납부 가이드 제공'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-brand-gold/10 border border-brand-gold/30">
                <h3 className="text-xl font-black text-brand-gold mb-4">특별 혜택</h3>
                <div className="space-y-3">
                  {[
                    '100% 무료 서비스 (숨겨진 비용 없음)',
                    '3순위까지 동시 지원 가능',
                    '실시간 진행 상황 알림',
                    '교육청 공식 파트너 우대 혜택',
                    '입학 후 정착 지원 연계',
                    '홈스테이 및 가디언 연결',
                    '24시간 카카오톡 상담 지원'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-brand-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* FAQ */}
            <Card className="p-8 bg-gray-50">
              <h2 className="text-2xl font-black text-brand-green mb-6 text-center">등록 대행 FAQ</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: '정말 무료로 서비스를 제공하나요?',
                    a: '네, 학교 등록 대행 서비스는 100% 무료입니다. 교육청이나 학교에 지불하는 실제 비용만 부담하시면 됩니다.'
                  },
                  {
                    q: '몇 개 학교까지 지원할 수 있나요?',
                    a: '일반적으로 1순위부터 3순위까지 지원 가능합니다. 교육청별로 정책이 다를 수 있어 사전 상담을 통해 확인해드립니다.'
                  },
                  {
                    q: '지원 후 언제 결과를 알 수 있나요?',
                    a: '평균 2-8주 소요되며, 실시간으로 진행 상황을 모니터링하여 업데이트해드립니다.'
                  },
                  {
                    q: '만약 입학이 거절되면 어떻게 되나요?',
                    a: '대안 학교 추천 및 재지원 전략을 제시해드립니다. 경험상 95% 이상의 성공률을 유지하고 있습니다.'
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="font-black text-brand-green mb-2">Q. {item.q}</h4>
                    <p className="text-gray-600 text-sm">A. {item.a}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case 'visa':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <Plane className="w-5 h-5" />
                <span>비자 지원 서비스</span>
              </div>
              <h1 className="text-4xl font-black text-brand-green">
                학생비자 & 동반부모 비자<br />
                <span className="text-brand-gold">전문 파트너 연계 지원</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                평균 처리 기간 6-12주, 검증된 전문 파트너와 함께
                안전하고 신속한 비자 신청을 지원합니다.
              </p>
            </div>

            {/* Pricing Notice */}
            <Card className="p-6 bg-red-50 border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">!</span>
                </div>
                <h3 className="text-lg font-bold text-red-700">비용 안내</h3>
              </div>
              <p className="text-red-700">
                비자 지원 서비스는 <strong>$300/인</strong>의 수수료가 발생합니다.
                외부 전문 행정사/로펌과의 연계 서비스로, 실제 비자 신청 및 처리는 파트너가 담당합니다.
              </p>
            </Card>

            {/* Visa Types */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-brand-green/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-green">학생비자 (Study Permit)</h3>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-700">필수 서류:</h4>
                  {[
                    'LOA (Letter of Acceptance)',
                    '재정증명서 (은행잔고증명)',
                    '학업계획서 (Statement of Purpose)',
                    '건강검진서 (지정병원)',
                    '무범죄증명서',
                    '여권 및 사진'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-green" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-2 border-brand-gold/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-gold">동반부모 비자 (Visitor Record)</h3>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-700">필수 서류:</h4>
                  {[
                    '자녀의 학생비자 승인서',
                    '가족관계증명서',
                    '재정증명서 (충분한 체류비용)',
                    '왕복항공권 예약증명',
                    '여행보험 가입증명',
                    '캐나다 체류계획서'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-gold" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Service Process */}
            <Card className="p-8">
              <h2 className="text-2xl font-black text-brand-green mb-8 text-center">비자 지원 프로세스</h2>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-black text-white">1</span>
                  </div>
                  <h4 className="font-bold text-sm mb-1">상담 및 서류 안내</h4>
                  <p className="text-xs text-gray-600">개별 상황 분석 및 맞춤 서류 리스트 제공</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-black text-white">2</span>
                  </div>
                  <h4 className="font-bold text-sm mb-1">전문가 매칭</h4>
                  <p className="text-xs text-gray-600">검증된 행정사/로펌 파트너 연결</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-black text-white">3</span>
                  </div>
                  <h4 className="font-bold text-sm mb-1">서류 준비</h4>
                  <p className="text-xs text-gray-600">전문가 검토 하에 서류 완성</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-black text-white">4</span>
                  </div>
                  <h4 className="font-bold text-sm mb-1">비자 신청</h4>
                  <p className="text-xs text-gray-600">온라인 시스템을 통한 정식 신청</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-black text-white">5</span>
                  </div>
                  <h4 className="font-bold text-sm mb-1">승인 & 출국</h4>
                  <p className="text-xs text-gray-600">비자 승인 확인 및 출국 준비</p>
                </div>
              </div>
            </Card>

            {/* Partner Information */}
            <Card className="p-8 bg-gradient-to-r from-brand-green/10 to-brand-gold/10">
              <h2 className="text-2xl font-black text-brand-green mb-6 text-center">전문 파트너 정보</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-4">RCIC 공인 컨설턴트</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      캐나다 정부 공인 이민 컨설턴트
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-500" />
                      10년 이상 전문 경험
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      95% 이상 승인률 보장
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-4">서비스 보장</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      실시간 진행 상황 업데이트
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                      한국어 완벽 소통 가능
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-500" />
                      긴급 상황 24시간 대응
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Timeline & Costs */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-black text-brand-green mb-4">예상 처리 기간</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>학생비자 (Study Permit)</span>
                    <span className="font-bold text-brand-green">6-8주</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>동반부모 비자 (Visitor)</span>
                    <span className="font-bold text-brand-green">4-6주</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>건강검진 (Medical Exam)</span>
                    <span className="font-bold text-brand-green">2-3주</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>무범죄증명서</span>
                    <span className="font-bold text-brand-green">1-2주</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-yellow-50 border border-yellow-200">
                <h3 className="text-xl font-black text-yellow-800 mb-4">예상 비용</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>On&Off 서비스 수수료</span>
                    <span className="font-bold text-red-600">$300/인</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>정부 비자 신청료</span>
                    <span className="font-bold">$150-235</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>건강검진 비용</span>
                    <span className="font-bold">$200-400</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>서류 번역/공증 비용</span>
                    <span className="font-bold">$100-300</span>
                  </div>
                  <hr className="border-yellow-300" />
                  <div className="flex justify-between items-center text-lg font-black">
                    <span>총 예상 비용</span>
                    <span className="text-yellow-800">$750-1,235</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Important Notice */}
            <Card className="p-6 bg-blue-50 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-3">💡 중요 안내사항</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• 비자 신청은 LOA 수령 후 즉시 진행하는 것을 권장합니다</li>
                <li>• 모든 서류는 원본 또는 공증본이어야 하며, 영문 번역이 필요합니다</li>
                <li>• 건강검진은 캐나다 정부 지정 병원에서만 유효합니다</li>
                <li>• 비자 거절 시 재신청 전략 및 대안을 제시해드립니다</li>
                <li>• 출국 전 오리엔테이션을 통해 입국 절차를 안내해드립니다</li>
              </ul>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-green to-brand-green/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-2 text-sm font-bold">
              <BookOpen className="w-4 h-4" />
              <span>Page 0</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black">인생의 새로운 페이지</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              출발 전 가이드 · 캐나다 유학 준비부터 등록까지
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-4 py-6 scrollbar-hide">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                icon={tab.icon}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-12">
        {renderTabContent()}
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-black text-brand-green">캐나다 유학 준비를 시작하고 싶으신가요?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              전문 컨설턴트와 함께 체계적으로 준비하여 성공적인 유학을 만들어보세요.
              모든 상담은 무료로 진행됩니다.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <ContactMethodCard
                method="kakao"
                title="카카오톡 상담"
                subtitle="즉시 상담"
                description="카카오톡으로 빠르고 편리하게 상담받으세요."
                contact="@onnoff_newpage"
                action="http://pf.kakao.com/_xigxbxmn/chat/"
                buttonText="카톡 상담하기"
                external={true}
                variant="premium"
              />
              <ContactMethodCard
                method="email"
                title="이메일 상담"
                subtitle="자세한 상담"
                description="자세한 내용과 함께 문의사항을 보내주세요."
                contact="info@onnoffnewpage.com"
                action="mailto:info@onnoffnewpage.com"
                buttonText="이메일 보내기"
                external={true}
                variant="premium"
              />
              <ContactMethodCard
                method="whatsapp"
                title="전화 상담"
                subtitle="직접 상담"
                description="직접 통화를 통해 상세한 상담을 받아보세요."
                contact="010-4517-1770"
                action="tel:01045171770"
                buttonText="전화하기"
                external={false}
                variant="premium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}