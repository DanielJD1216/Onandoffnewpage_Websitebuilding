'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';

export default function RegistrationServicePage({ params }: { params: { locale: string } }) {
  const services = [
    '지원서 작성 및 검토',
    '교육청/학교와의 모든 커뮤니케이션',
    '서류 번역 및 공증 지원',
    '납부 안내 및 확인',
    '등록 확인서(LOA/Seat Confirmation) 수령',
    '학교 배정 및 오리엔테이션 연결'
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      <div className="container mx-auto px-4 py-4">
        <Link 
          href={`/${params.locale}/pre-departure`}
          className="inline-flex items-center text-brand-green hover:text-brand-green/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          출발 전 가이드로 돌아가기
        </Link>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-black text-brand-green font-dodum">
              학교 등록 대행 서비스
            </h1>
            <span className="bg-brand-gold text-white px-4 py-2 rounded-full text-lg font-bold">무료</span>
          </div>
          <p className="text-xl text-brand-gold mb-8 font-dodum max-w-3xl mx-auto">
            복잡한 등록 과정을 전문가가 대신 처리해드립니다
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">포함 서비스</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 border-2 border-brand-gold/20">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="font-medium">{service}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="p-8 max-w-2xl mx-auto border-2 border-yellow-200 bg-yellow-50">
            <h3 className="text-xl font-black text-yellow-800 mb-4">중요 안내</h3>
            <div className="text-left space-y-2 text-sm text-yellow-700">
              <p>• 교육청/학교 비용은 실비 별도입니다</p>
              <p>• 당사 등록 대행 서비스는 무료로 제공됩니다</p>
              <p>• 학비 및 기타 학교 관련 비용은 별도입니다</p>
            </div>
          </Card>
          
          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                등록 대행 서비스 상담 신청
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}