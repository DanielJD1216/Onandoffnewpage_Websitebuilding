'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Phone,
  Target,
  FileText,
  CheckCircle,
  TrendingUp,
  Users,
  Lightbulb,
  Award,
  Calendar
} from 'lucide-react';

export default function FuturePage({ params }: { params: { locale: string } }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '진로 설계 개요', icon: GraduationCap },
    { id: 'admissions', label: '진학 컨설팅', icon: Target },
    { id: 'majors', label: '전공 선택', icon: BookOpen },
    { id: 'portfolio', label: '포트폴리오', icon: Briefcase }
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
            진학 로드맵과 포트폴리오
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            일찍 준비할수록 유리합니다
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green active:bg-brand-green/90 md:hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                진학 전략 세션 예약
              </Link>
            </Button>
            <KoreanPhoneDisplay />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white/70 sticky top-16 z-40 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-brand-green text-white shadow-lg transform scale-105'
                      : 'bg-white text-brand-green border-2 border-brand-green/30 active:border-brand-green active:bg-brand-green/10 md:hover:border-brand-green md:hover:bg-brand-green/10'
                  }`}
                >
                  <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">진로 설계 서비스</h2>
                  <p className="text-xl text-brand-gold max-w-3xl mx-auto">
                    캐나다 교육 시스템에 최적화된 진학 전략과 포트폴리오 관리
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <Card className="p-8 border-2 border-brand-green/20 active:border-brand-green md:hover:border-brand-green transition-all">
                    <GraduationCap className="h-12 w-12 text-brand-green mb-4" />
                    <h3 className="text-2xl font-black text-brand-green mb-4">대학/고등 진학 컨설팅</h3>
                    <p className="text-gray-600 mb-6">타깃 설정부터 원서 전략까지</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 개인 역량 분석 및 목표 설정</li>
                      <li>• 맞춤형 진학 로드맵 수립</li>
                      <li>• 원서 작성 및 에세이 지도</li>
                      <li>• 합격 후 등록 절차 안내</li>
                    </ul>
                  </Card>

                  <Card className="p-8 border-2 border-brand-gold/20 active:border-brand-gold md:hover:border-brand-gold transition-all">
                    <BookOpen className="h-12 w-12 text-brand-gold mb-4" />
                    <h3 className="text-2xl font-black text-brand-gold mb-4">전공 선택 가이드</h3>
                    <p className="text-gray-600 mb-6">적성 분석부터 취업 전망까지</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 과학적 적성 분석</li>
                      <li>• 캐나다 전공 정보 제공</li>
                      <li>• 취업 전망 및 시장 분석</li>
                      <li>• 현직자 멘토링 연결</li>
                    </ul>
                  </Card>

                  <Card className="p-8 border-2 border-brand-green/20 active:border-brand-green md:hover:border-brand-green transition-all">
                    <Briefcase className="h-12 w-12 text-brand-green mb-4" />
                    <h3 className="text-2xl font-black text-brand-green mb-4">커리어 멘토링 & 포트폴리오</h3>
                    <p className="text-gray-600 mb-6">학기별 점검과 활동 추천</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 포트폴리오 체계적 관리</li>
                      <li>• 과외활동 기획 및 지원</li>
                      <li>• 리더십 경험 개발</li>
                      <li>• 진로별 맞춤 멘토링</li>
                    </ul>
                  </Card>
                </div>

                {/* Success Statistics */}
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl font-black text-brand-green mb-8">성공 실적</h3>

                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { number: "95%", label: "목표 대학 합격률" },
                      { number: "87%", label: "1지망 대학 합격률" },
                      { number: "100+", label: "성공 진학 사례" },
                      { number: "24개월", label: "평균 준비 기간" }
                    ].map((stat, index) => (
                      <Card key={index} className="p-6 text-center border-2 border-brand-green/20">
                        <div className="text-4xl font-black text-brand-gold mb-2">{stat.number}</div>
                        <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Admissions Consulting Tab */}
            {activeTab === 'admissions' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">대학/고등학교 진학 컨설팅</h2>
                  <p className="text-xl text-brand-gold">
                    타깃 설정부터 합격까지 전략적 접근
                  </p>
                </div>

                {/* Service Overview */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-6">전략적 진학 컨설팅</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    캐나다 교육 시스템에 대한 깊은 이해를 바탕으로
                    학생 개개인에게 최적화된 진학 전략을 수립합니다.
                  </p>
                </div>

                {/* Key Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {[
                    {
                      icon: Target,
                      title: "목표 설정",
                      description: "개인 역량 분석 및 현실적 목표 대학 선정"
                    },
                    {
                      icon: FileText,
                      title: "전략 수립",
                      description: "맞춤형 진학 로드맵 및 준비 계획 작성"
                    },
                    {
                      icon: GraduationCap,
                      title: "입시 준비",
                      description: "원서 작성, 에세이, 면접 등 종합 지원"
                    },
                    {
                      icon: CheckCircle,
                      title: "합격 관리",
                      description: "합격 후 등록 절차 및 준비 사항 안내"
                    }
                  ].map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Card key={index} className="p-6 text-center bg-white/80 border-2 border-brand-green/20 active:border-brand-green md:hover:border-brand-green transition-all">
                        <IconComponent className="h-12 w-12 text-brand-green mx-auto mb-4" />
                        <h4 className="text-lg font-black text-brand-green mb-3">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </Card>
                    );
                  })}
                </div>

                {/* Detailed Process */}
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">컨설팅 프로세스</h3>

                  <div className="space-y-8">
                    {[
                      {
                        title: "개인 역량 분석 및 목표 설정",
                        features: [
                          "학업 성취도, 특기, 관심 분야 종합 분석",
                          "캐나다 대학 시스템 및 입학 요건 설명",
                          "현실적이고 도전적인 목표 대학 선정",
                          "단계별 준비 타임라인 수립"
                        ]
                      },
                      {
                        title: "학업 및 활동 계획 수립",
                        features: [
                          "필수 과목 및 선택 과목 전략적 선택",
                          "성적 향상을 위한 구체적 실행 방안",
                          "과외 활동 및 봉사 활동 기획",
                          "리더십 경험 및 특별 활동 개발"
                        ]
                      },
                      {
                        title: "입시 서류 준비 지원",
                        features: [
                          "대학 원서 작성 전략 및 검토",
                          "개인 에세이 주제 선정 및 작성 지도",
                          "추천서 요청 및 관리 지원",
                          "포트폴리오 구성 및 완성도 향상"
                        ]
                      },
                      {
                        title: "입학 절차 및 사후 관리",
                        features: [
                          "원서 제출 일정 관리 및 확인",
                          "면접 준비 및 연습 (해당 시)",
                          "합격 통지 후 등록 절차 안내",
                          "장학금 및 기숙사 신청 지원"
                        ]
                      }
                    ].map((process, index) => (
                      <Card key={index} className="p-8 border-2 border-brand-green/20">
                        <h4 className="text-xl font-black text-brand-green mb-6">{process.title}</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {process.features.map((feature, idx) => (
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
            )}

            {/* Major Selection Tab */}
            {activeTab === 'majors' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">전공 선택 가이드</h2>
                  <p className="text-xl text-brand-gold">
                    적성 분석부터 취업 전망까지
                  </p>
                </div>

                {/* Service Overview */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h3 className="text-2xl font-black text-brand-green mb-6">체계적인 전공 선택 지원</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    학생의 적성, 관심사, 미래 목표를 종합적으로 분석하여
                    최적의 전공을 선택할 수 있도록 전문적인 가이드를 제공합니다.
                  </p>
                </div>

                {/* Key Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {[
                    {
                      icon: Lightbulb,
                      title: "적성 분석",
                      description: "과학적 진단을 통한 개인 적성 및 성향 파악"
                    },
                    {
                      icon: BookOpen,
                      title: "전공 정보",
                      description: "캐나다 대학별 전공 커리큘럼 및 특징 분석"
                    },
                    {
                      icon: TrendingUp,
                      title: "취업 전망",
                      description: "전공별 취업률, 평균 연봉, 성장성 분석"
                    },
                    {
                      icon: Users,
                      title: "멘토 연결",
                      description: "해당 전공 졸업생 및 현직자와의 멘토링"
                    }
                  ].map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Card key={index} className="p-6 text-center bg-white/80 border-2 border-brand-green/20 active:border-brand-green md:hover:border-brand-green transition-all">
                        <IconComponent className="h-12 w-12 text-brand-green mx-auto mb-4" />
                        <h4 className="text-lg font-black text-brand-green mb-3">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </Card>
                    );
                  })}
                </div>

                {/* Popular Majors */}
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-2xl font-black text-brand-green mb-8 text-center">인기 전공 분야</h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        category: "비즈니스 & 경제",
                        majors: ["경영학", "회계학", "경제학", "마케팅", "국제통상"]
                      },
                      {
                        category: "공학 & IT",
                        majors: ["컴퓨터공학", "소프트웨어공학", "전기공학", "기계공학", "AI/데이터사이언스"]
                      },
                      {
                        category: "보건 & 의료",
                        majors: ["간호학", "약학", "물리치료", "의료기술", "공중보건"]
                      },
                      {
                        category: "교육 & 인문",
                        majors: ["교육학", "심리학", "언어학", "사회복지", "커뮤니케이션"]
                      },
                      {
                        category: "자연과학",
                        majors: ["생물학", "화학", "물리학", "수학", "환경과학"]
                      },
                      {
                        category: "예술 & 디자인",
                        majors: ["그래픽디자인", "영화제작", "음악", "미술", "건축학"]
                      }
                    ].map((field, index) => (
                      <Card key={index} className="p-6 active:shadow-lg md:hover:shadow-lg transition-shadow border-2 border-brand-green/20">
                        <h4 className="text-xl font-black text-brand-green mb-4">{field.category}</h4>
                        <div className="space-y-2">
                          {field.majors.map((major, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></div>
                              <span className="text-sm text-gray-700">{major}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-brand-green mb-4">커리어 멘토링 & 포트폴리오</h2>
                  <p className="text-xl text-brand-gold">
                    학기별 점검과 활동 추천
                  </p>
                </div>

                {/* Portfolio Management */}
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 border-2 border-brand-green/20">
                      <h3 className="text-2xl font-black text-brand-green mb-6">포트폴리오 체계적 관리</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Briefcase className="w-6 h-6 text-brand-gold mr-3 mt-1" />
                          <div>
                            <span className="font-bold text-gray-800">학업 성취 기록</span>
                            <p className="text-gray-600 text-sm">성적 관리, 수상 경력, 학술 프로젝트 정리</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Award className="w-6 h-6 text-brand-gold mr-3 mt-1" />
                          <div>
                            <span className="font-bold text-gray-800">과외활동 기록</span>
                            <p className="text-gray-600 text-sm">동아리, 봉사활동, 인턴십 경험 체계화</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="w-6 h-6 text-brand-gold mr-3 mt-1" />
                          <div>
                            <span className="font-bold text-gray-800">정기 검토</span>
                            <p className="text-gray-600 text-sm">학기별 포트폴리오 점검 및 업데이트</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-8 border-2 border-brand-gold/20">
                      <h3 className="text-2xl font-black text-brand-gold mb-6">활동 기획 및 지원</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Users className="w-6 h-6 text-brand-green mr-3 mt-1" />
                          <div>
                            <span className="font-bold text-gray-800">리더십 개발</span>
                            <p className="text-gray-600 text-sm">학생회, 동아리 임원 등 리더십 경험 기회</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Briefcase className="w-6 h-6 text-brand-green mr-3 mt-1" />
                          <div>
                            <span className="font-bold text-gray-800">진로 체험</span>
                            <p className="text-gray-600 text-sm">인턴십, 직업 체험, 현장 견학 연결</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Target className="w-6 h-6 text-brand-green mr-3 mt-1" />
                          <div>
                            <span className="font-bold text-gray-800">특별 프로젝트</span>
                            <p className="text-gray-600 text-sm">전공 관련 개인 프로젝트 기획 및 실행</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Management */}
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-black text-brand-green mb-8 text-center">학기별 관리 계획</h3>

                    <div className="space-y-6">
                      {[
                        {
                          period: "9학년 (Grade 9)",
                          focus: "기초 탐색 및 적응",
                          activities: ["적성 검사 및 진로 탐색", "기본 과외활동 참여", "학습 습관 형성", "포트폴리오 기초 구축"]
                        },
                        {
                          period: "10-11학년 (Grade 10-11)",
                          focus: "심화 활동 및 전문성 개발",
                          activities: ["전공 관련 심화 과목 선택", "리더십 활동 참여", "봉사활동 확대", "인턴십 기회 탐색"]
                        },
                        {
                          period: "12학년 (Grade 12)",
                          focus: "진학 준비 완성",
                          activities: ["대학 원서 작성", "에세이 완성", "포트폴리오 최종 정리", "면접 준비"]
                        }
                      ].map((phase, index) => (
                        <Card key={index} className="p-6 border-2 border-brand-green/20">
                          <div className="flex items-center mb-4">
                            <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="text-lg font-black text-brand-green">{phase.period}</h4>
                              <p className="text-brand-gold font-medium">{phase.focus}</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></div>
                                <span className="text-sm text-gray-700">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">미래를 설계하는 첫걸음</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            체계적인 진학 계획과 포트폴리오 관리를 통해 꿈의 대학 진학을
            현실로 만들어보세요.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green active:bg-brand-green/90 md:hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                진학 전략 상담
              </Link>
            </Button>
            <KoreanPhoneDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}