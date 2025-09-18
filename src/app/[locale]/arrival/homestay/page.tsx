'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import { ArrowLeft, Phone } from 'lucide-react';

export default function HomestayPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      <div className="container mx-auto px-4 py-4">
        <Link 
          href={`/${params.locale}/arrival`}
          className="inline-flex items-center text-brand-green hover:text-brand-green/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          밴쿠버 정착 서비스로 돌아가기
        </Link>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-brand-green mb-4 font-dodum">
            홈스테이 배정
          </h1>
          <p className="text-xl text-brand-gold mb-8 font-dodum max-w-3xl mx-auto">
            On&Off 인증 홈스테이와 직영 토탈케어 시스템
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                홈스테이 상담 신청하기
              </Link>
            </Button>
            <KoreanPhoneDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}