'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Users, ArrowLeft, Phone } from 'lucide-react';

export default function VisaSupportPage({ params }: { params: { locale: string } }) {
  const searchParams = useSearchParams();
  const visaType = searchParams.get('type');
  const visaTypes = [
    {
      id: 'independent',
      type: '자녀 단독 유학 비자 (Study Permit)',
      description: '캐나다에서 6개월 이상 학업을 위한 필수 비자',
      processing: '6-12주',
      fee: '$300',
      requirements: [
        '입학허가서(LOA)',
        '재정증명서',
        '건강검진서',
        '범죄기록증명서'
      ]
    },
    {
      id: 'parent-accompanied',
      type: '부모 동반 유학 비자 (Visitor Record)',
      description: '미성년 자녀와 함께 체류하는 부모를 위한 비자',
      processing: '4-8주',
      fee: '$300',
      requirements: [
        '자녀의 학생비자',
        '관계증명서',
        '재정증명서',
        '체류계획서'
      ]
    }
  ];

  const supportServices = [
    '비자 유형 및 요건 안내',
    '필수 서류 체크리스트 제공',
    '서류 준비 가이드라인',
    '파트너 행정사/로펌 연계',
    '신청 진행 상황 모니터링',
    '거절 시 재신청 지원'
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
          <h1 className="text-4xl md:text-5xl font-black text-brand-green mb-4 font-dodum">
            비자 지원 서비스
          </h1>
          <p className="text-xl text-brand-gold mb-8 font-dodum max-w-3xl mx-auto">
            전문 파트너와 함께 안전하고 확실한 비자 신청
          </p>
          <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-700 font-semibold">서비스 수수료: 1인당 $300 (CAD)</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-brand-green mb-8 text-center">비자 유형별 안내</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {visaTypes.map((visa, index) => (
              <Card 
                key={index} 
                className={`p-6 border-2 transition-all ${
                  visaType === visa.id 
                    ? 'border-brand-gold bg-brand-gold/5 shadow-lg' 
                    : 'border-brand-green/20'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-brand-green">{visa.type}</h3>
                  <div className="text-right">
                    <div className="bg-brand-gold/10 px-3 py-1 rounded-full mb-2">
                      <span className="text-brand-gold font-semibold text-sm">{visa.processing}</span>
                    </div>
                    <div className="text-brand-green font-bold">{visa.fee}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{visa.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">필수 서류</h4>
                    <div className="space-y-1">
                      {visa.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-brand-green mb-8 text-center">지원 서비스 내용</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportServices.map((service, index) => (
              <Card key={index} className="p-4 border-2 border-brand-gold/20">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-gold mr-3 flex-shrink-0 mt-1" />
                  <span className="font-medium">{service}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 border-2 border-yellow-200 bg-yellow-50">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-yellow-800 mb-3">중요 안내사항</h3>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• 실제 비자 신청 수임은 제휴 행정사/로펌에서 진행합니다</li>
                    <li>• 처리 시간은 캐나다 이민청 상황에 따라 변동될 수 있습니다</li>
                    <li>• 정부 수수료는 별도입니다 (학생비자: $150, 동반비자: $100)</li>
                    <li>• 거절 시에도 정부 수수료는 환불되지 않습니다</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-brand-green/20">
              <h3 className="text-xl font-black text-brand-green mb-4">파트너 소개</h3>
              <p className="text-gray-600 mb-4">
                캐나다 이민법무사(RCIC) 자격을 보유한 전문가들과 파트너십을 통해 
                안전하고 신뢰할 수 있는 비자 서비스를 제공합니다.
              </p>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-sm text-gray-600">RCIC 공인 이민법무사 네트워크</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-brand-green mb-6">비자 신청 상담 받기</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            개별 상황에 맞는 비자 전략과 필요 서류를 안내해드립니다. 
            전문가와의 상담을 통해 성공적인 비자 신청을 준비하세요.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              비자 지원 서비스 상담 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}