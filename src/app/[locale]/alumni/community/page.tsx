'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, Heart, Users2, Lightbulb, Gift } from 'lucide-react';

export default function AlumniCommunityPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Breadcrumb */}
      <nav className="bg-white/80 border-b border-brand-green/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link 
              href={`/${params.locale}/alumni`}
              className="flex items-center text-brand-green hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              동문 네트워크
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-gold font-medium">커뮤니티 활동</span>
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
            커뮤니티 활동
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            함께 성장하고 나누는 따뜻한 커뮤니티
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              커뮤니티 참여 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">활발한 동문 커뮤니티</h2>
            <p className="text-lg text-gray-600 mb-8">
              서로 돕고 격려하며 함께 성장하는 동문 커뮤니티에서 
              멘토-멘티 관계를 맺고 소중한 정보를 나누세요.
            </p>
          </div>

          {/* Community Activities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Users2,
                title: "멘토-멘티 매칭",
                description: "선후배 간 1:1 멘토링 프로그램"
              },
              {
                icon: Lightbulb,
                title: "정보 공유",
                description: "취업, 학업, 생활 정보 실시간 교환"
              },
              {
                icon: Heart,
                title: "상호 지원",
                description: "어려움 해결을 위한 동문 간 도움"
              },
              {
                icon: Gift,
                title: "특별 혜택",
                description: "동문 전용 이벤트 및 할인 혜택"
              }
            ].map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={index} className="p-6 text-center bg-white/80 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                  <IconComponent className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-green mb-3">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Detailed Community Programs */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">커뮤니티 프로그램</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "멘토-멘티 프로그램",
                  description: "선후배 간의 체계적인 멘토링을 통해 지식과 경험을 전수합니다.",
                  features: [
                    "전공별 전문 멘토 매칭",
                    "월 1회 정기 멘토링 세션",
                    "취업 준비 및 이력서 첨삭",
                    "인터뷰 연습 및 코칭",
                    "캐나다 생활 적응 가이드",
                    "네트워킹 이벤트 참여 기회"
                  ]
                },
                {
                  title: "정보 공유 플랫폼",
                  description: "실시간으로 유용한 정보를 공유하고 질문에 답변을 받을 수 있습니다.",
                  features: [
                    "취업 정보 및 채용 공고",
                    "장학금 및 인턴십 기회",
                    "생활 꿀팁 및 할인 정보",
                    "부동산 및 렌트 정보",
                    "여행 및 맛집 추천",
                    "비자/이민 관련 최신 정보"
                  ]
                },
                {
                  title: "상호 지원 네트워크",
                  description: "동문들이 서로 도움을 주고받는 따뜻한 지원 시스템입니다.",
                  features: [
                    "응급 상황 시 도움 요청",
                    "이사/정착 지원 서비스",
                    "카풀 및 공동 구매",
                    "임시 숙박 제공",
                    "물품 대여 및 나눔",
                    "심리적 지원 및 상담"
                  ]
                },
                {
                  title: "동문 전용 혜택",
                  description: "커뮤니티 멤버만을 위한 특별한 혜택과 이벤트를 제공합니다.",
                  features: [
                    "동문 할인 제휴 업체",
                    "전문 서비스 특가 제공",
                    "정기 네트워킹 이벤트",
                    "워크샵 및 세미나 우선 참여",
                    "선물 이벤트 및 경품 행사",
                    "VIP 멤버십 프로그램"
                  ]
                }
              ].map((program, index) => (
                <Card key={index} className="p-8 border-2 border-brand-green/20">
                  <h3 className="text-2xl font-black text-brand-green mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.features.map((feature, idx) => (
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

      {/* Community Statistics */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-6">커뮤니티 현황</h2>
            <p className="text-lg text-gray-600">
              활발하고 건강한 커뮤니티의 실제 수치들을 확인해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { number: "500+", label: "활성 멤버" },
              { number: "150+", label: "멘토-멘티 매칭" },
              { number: "1,200+", label: "월간 정보 공유" },
              { number: "50+", label: "제휴 업체" }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-black text-brand-gold mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-brand-green">
              <h3 className="text-xl font-black text-brand-green mb-4">활발한 정보 공유</h3>
              <p className="text-gray-600">
                매월 1,200건 이상의 유용한 정보가 공유되며, 
                취업 관련 정보가 가장 높은 관심을 받고 있습니다.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-brand-gold">
              <h3 className="text-xl font-black text-brand-gold mb-4">성공적인 매칭률</h3>
              <p className="text-gray-600">
                멘토-멘티 프로그램 참여자의 95%가 만족도 조사에서 
                &apos;매우 만족&apos; 또는 &apos;만족&apos;으로 응답했습니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">커뮤니티 가이드라인</h2>
            
            <Card className="p-8 border-2 border-brand-green/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-black text-brand-green mb-4">환영받는 활동</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 건설적인 정보 공유</li>
                    <li>• 진심어린 조언과 격려</li>
                    <li>• 적극적인 도움 제공</li>
                    <li>• 긍정적인 커뮤니티 분위기 조성</li>
                    <li>• 다양성과 포용성 존중</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black text-brand-gold mb-4">금지된 활동</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 상업적 목적의 스팸</li>
                    <li>• 개인 정보 무단 공유</li>
                    <li>• 비방 및 차별적 발언</li>
                    <li>• 허위 정보 유포</li>
                    <li>• 커뮤니티 분위기 해치는 행위</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">따뜻한 커뮤니티에 참여하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            함께 성장하고 서로 돕는 온앤오프 동문 커뮤니티에서 
            평생의 인연과 소중한 지원을 받아보세요.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              커뮤니티 가입 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}