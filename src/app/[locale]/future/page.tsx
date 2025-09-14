'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, BookOpen, Briefcase, Phone, ArrowRight } from 'lucide-react';

export default function FuturePage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-green mb-6 font-dodum">
            진학 로드맵과 포트폴리오
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            일찍 준비할수록 유리합니다
          </p>
          <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white font-black" asChild>
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              진학 전략 세션 예약
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all">
              <GraduationCap className="h-12 w-12 text-brand-green mb-4" />
              <h2 className="text-2xl font-black text-brand-green mb-4">대학/고등 진학 컨설팅</h2>
              <p className="text-gray-600 mb-6">타깃 설정부터 원서 전략까지</p>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90" asChild>
                <Link href={`/${params.locale}/future/admissions-consulting`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  자세히 보기
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 border-brand-gold/20 hover:border-brand-gold transition-all">
              <BookOpen className="h-12 w-12 text-brand-gold mb-4" />
              <h2 className="text-2xl font-black text-brand-gold mb-4">전공 선택 가이드</h2>
              <p className="text-gray-600 mb-6">적성 분석부터 취업 전망까지</p>
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90" asChild>
                <Link href={`/${params.locale}/future/major-guide`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  자세히 보기
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all">
              <Briefcase className="h-12 w-12 text-brand-green mb-4" />
              <h2 className="text-2xl font-black text-brand-green mb-4">커리어 멘토링 & 포트폴리오</h2>
              <p className="text-gray-600 mb-6">학기별 점검과 활동 추천</p>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90" asChild>
                <Link href={`/${params.locale}/future/career-portfolio`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  자세히 보기
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}