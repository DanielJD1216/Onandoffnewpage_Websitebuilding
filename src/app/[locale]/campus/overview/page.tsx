'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, BookOpen, Users, Calendar, Star } from 'lucide-react';

export default function CampusOverviewPage({ params }: { params: { locale: string } }) {
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
            <span className="text-brand-gold font-medium">프로그램 개요</span>
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
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-green mb-6 font-dodum">
            캠퍼스 관리 프로그램 개요
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            체계적이고 전문적인 학생 관리 서비스
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              상담 예약
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">체계적인 학생 관리 시스템</h2>
            <p className="text-lg text-gray-600 mb-8">
              캐나다 유학 중인 초·중·고 학생들을 위한 전문적인 가디언 서비스입니다. 
              학업부터 생활까지, 부모님의 마음으로 세심하게 관리합니다.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <BookOpen className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-black text-brand-green mb-2">학업 관리</h3>
                <p className="text-gray-600">출결·성적 모니터링부터 학습 계획까지</p>
              </Card>
              
              <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                <Users className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-xl font-black text-brand-gold mb-2">생활 지원</h3>
                <p className="text-gray-600">건강 관리부터 일상 생활 코칭까지</p>
              </Card>
              
              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <Calendar className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-black text-brand-green mb-2">정기 소통</h3>
                <p className="text-gray-600">체계적인 부모 소통 시스템 운영</p>
              </Card>
            </div>
          </div>

          {/* Key Features */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">핵심 특징</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "전문성",
                  description: "5년 이상의 캐나다 교육 시스템 경험을 바탕으로 한 전문적인 서비스",
                  icon: Star
                },
                {
                  title: "체계성",
                  description: "월간 리포트와 주간 소통으로 체계적이고 투명한 관리",
                  icon: Calendar
                },
                {
                  title: "개별화",
                  description: "각 학생의 특성과 목표에 맞춘 개별 맞춤형 관리 계획",
                  icon: Users
                },
                {
                  title: "신뢰성",
                  description: "현지에서 직접 운영하며 24시간 긴급 상황 대응 가능",
                  icon: Phone
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-green/10 p-3 rounded-full">
                        <IconComponent className="h-8 w-8 text-brand-green" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-brand-green mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">지금 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            자녀의 안전하고 성공적인 유학 생활을 위한 첫걸음을 내딛어 보세요.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              무료 상담 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}