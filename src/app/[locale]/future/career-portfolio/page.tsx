'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, Briefcase, Star, Calendar, Award } from 'lucide-react';

export default function FutureCareerPortfolioPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Breadcrumb */}
      <nav className="bg-white/80 border-b border-brand-green/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link 
              href={`/${params.locale}/future`}
              className="flex items-center text-brand-green hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              진학 로드맵
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-gold font-medium">커리어 포트폴리오</span>
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
            커리어 멘토링 & 포트폴리오
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            체계적인 경험 관리와 미래 준비
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              포트폴리오 상담 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">체계적인 커리어 포트폴리오 구축</h2>
            <p className="text-lg text-gray-600 mb-8">
              학기별 목표 설정부터 활동 추천, 경험 관리까지 
              체계적인 포트폴리오 구축을 통해 미래를 준비합니다.
            </p>
          </div>

          {/* Key Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Calendar,
                title: "학기별 계획",
                description: "단계적 목표 설정 및 활동 계획 수립"
              },
              {
                icon: Star,
                title: "활동 추천",
                description: "개인 목표에 맞는 최적 활동 기회 제안"
              },
              {
                icon: Award,
                title: "경험 관리",
                description: "모든 활동과 성취를 체계적으로 기록 관리"
              },
              {
                icon: Briefcase,
                title: "포트폴리오",
                description: "대학 입시 및 취업용 전문 포트폴리오 제작"
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 text-center bg-white/80 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                  <IconComponent className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-green mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Detailed Services */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">포트폴리오 구축 프로세스</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "개인별 커리어 목표 설정",
                  features: [
                    "장기 커리어 비전 및 목표 대학/전공 설정",
                    "개인 강점 및 관심 분야 심화 탐구",
                    "학년별, 학기별 구체적 목표 수립",
                    "목표 달성을 위한 로드맵 작성"
                  ]
                },
                {
                  title: "맞춤형 활동 기회 제공",
                  features: [
                    "학교 내 동아리 및 학생회 활동 추천",
                    "지역 사회 봉사활동 및 인턴십 연결",
                    "경연대회, 올림피아드 등 학술 활동",
                    "리더십 개발 프로그램 및 워크샵"
                  ]
                },
                {
                  title: "경험 및 성취 체계적 관리",
                  features: [
                    "모든 활동 내용 및 성과 상세 기록",
                    "수상 경력, 자격증 취득 등 성취 관리",
                    "활동별 배운 점 및 성장 포인트 정리",
                    "포트폴리오 작성용 스토리텔링 개발"
                  ]
                },
                {
                  title: "전문 포트폴리오 제작",
                  features: [
                    "대학 입학원서용 포트폴리오 구성",
                    "장학금 신청서 및 자기소개서 작성",
                    "취업용 이력서 및 커버레터 준비",
                    "온라인 포트폴리오 웹사이트 구축"
                  ]
                }
              ].map((process, index) => (
                <Card key={index} className="p-8 border-2 border-brand-green/20">
                  <h3 className="text-2xl font-black text-brand-green mb-6">{process.title}</h3>
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
      </section>

      {/* Activity Categories */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">주요 활동 분야</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "학술 활동",
                  activities: ["과학 올림피아드", "수학 경진대회", "디베이트 클럽", "학술 연구 프로젝트", "학술지 논문 발표"]
                },
                {
                  category: "리더십 활동",
                  activities: ["학생회 임원", "동아리 회장", "또래 튜터링", "신입생 멘토", "행사 기획 위원"]
                },
                {
                  category: "봉사 활동",
                  activities: ["지역사회 봉사", "환경 보호 활동", "노인복지 봉사", "교육 봉사", "국제 봉사 활동"]
                },
                {
                  category: "예술 & 창작",
                  activities: ["음악/미술 활동", "연극/뮤지컬", "창작 활동", "전시회 참여", "예술 경연대회"]
                },
                {
                  category: "스포츠 & 건강",
                  activities: ["교내 운동팀", "지역 스포츠 클럽", "마라톤/사이클링", "아웃도어 활동", "헬스케어 봉사"]
                },
                {
                  category: "직업 체험",
                  activities: ["인턴십 프로그램", "잡 섀도잉", "직업 박람회", "멘토십 프로그램", "창업 동아리"]
                }
              ].map((field, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-black text-brand-green mb-4">{field.category}</h3>
                  <div className="space-y-2">
                    {field.activities.map((activity, idx) => (
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">차별화된 포트폴리오를 만들어보세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            체계적인 계획과 전문적인 관리를 통해 대학 입시와 미래 커리어에서 
            경쟁력 있는 포트폴리오를 구축하세요.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              포트폴리오 상담 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}