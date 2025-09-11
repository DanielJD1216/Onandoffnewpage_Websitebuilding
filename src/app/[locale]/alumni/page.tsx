'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Heart, Briefcase, Phone, ArrowRight } from 'lucide-react';

export default function AlumniPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-green mb-6 font-dodum">
            동문 네트워킹과 진로 연계
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            졸업 후에도 지속적으로 함께합니다
          </p>
          <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white font-black" asChild>
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              동문 커뮤니티 가입
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all">
              <Users className="h-12 w-12 text-brand-green mb-4" />
              <h2 className="text-2xl font-black text-brand-green mb-4">동문 네트워킹</h2>
              <p className="text-gray-600 mb-6">지역별 카톡 채널과 정기 모임</p>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90" asChild>
                <Link href={`/${params.locale}/alumni/network`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  자세히 보기
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 border-brand-gold/20 hover:border-brand-gold transition-all">
              <Heart className="h-12 w-12 text-brand-gold mb-4" />
              <h2 className="text-2xl font-black text-brand-gold mb-4">커뮤니티 활동</h2>
              <p className="text-gray-600 mb-6">멘토-멘티 매칭과 정보 공유</p>
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90" asChild>
                <Link href={`/${params.locale}/alumni/community`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  자세히 보기
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all">
              <Briefcase className="h-12 w-12 text-brand-green mb-4" />
              <h2 className="text-2xl font-black text-brand-green mb-4">연계 지원</h2>
              <p className="text-gray-600 mb-6">코업/취업/이민 파트너 소개</p>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90" asChild>
                <Link href={`/${params.locale}/alumni/links`}>
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