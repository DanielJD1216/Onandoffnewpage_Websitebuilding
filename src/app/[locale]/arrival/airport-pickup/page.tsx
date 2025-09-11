'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plane, Clock, FileText, ArrowLeft, Phone, CheckCircle } from 'lucide-react';

export default function AirportPickupPage({ params }: { params: { locale: string } }) {
  const pickupProcess = [
    {
      step: '입국 심사',
      details: [
        '여권 및 스터디 퍼밋 서류 준비',
        '입국 목적 및 체류 기간 답변 준비',
        '입국 심사관과의 간단한 영어 대화'
      ],
      tips: '침착하게 서류를 제시하고 정직하게 답변하세요'
    },
    {
      step: '스터디 퍼밋 수령',
      details: [
        'Immigration Office에서 실제 스터디 퍼밋 발급',
        '서류 확인 및 정보 검토',
        '비자 조건 및 주의사항 안내'
      ],
      tips: '서류에 오타나 정보 오류가 없는지 반드시 확인하세요'
    },
    {
      step: '세관 통과',
      details: [
        '짐 찾기 및 세관 신고서 작성',
        '신고할 물품이 있는 경우 정확한 신고',
        '면세 한도 내 물품 확인'
      ],
      tips: '의약품이나 식품은 미리 영문으로 목록을 준비해두세요'
    },
    {
      step: '픽업 및 이동',
      details: [
        '지정된 픽업 장소에서 담당자와 만남',
        '짐 정리 및 차량 이동',
        '홈스테이 또는 숙소까지 안전 이동'
      ],
      tips: '픽업 담당자의 연락처를 미리 저장해두세요'
    }
  ];

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
            공항 픽업 서비스
          </h1>
          <p className="text-xl text-brand-gold mb-8 font-dodum max-w-3xl mx-auto">
            입국부터 첫 숙소 도착까지, 전 과정을 안전하게 지원합니다
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-brand-green mb-8 text-center">공항 입국 과정 가이드</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {pickupProcess.map((process, index) => (
              <Card key={index} className="p-6 border-2 border-brand-green/20">
                <div className="flex items-start">
                  <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-brand-green mb-3">{process.step}</h3>
                    
                    <div className="space-y-2 mb-4">
                      {process.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-brand-green mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-brand-gold/10 p-3 rounded-lg">
                      <p className="text-brand-gold font-semibold text-sm">
                        💡 {process.tips}
                      </p>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">픽업 서비스 상세</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-black text-brand-green mb-4">서비스 포함사항</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    <span>공항 도착 게이트 픽업</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    <span>입국 과정 전담 가이드</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    <span>스터디 퍼밋 수령 지원</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    <span>홈스테이/숙소까지 이동</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    <span>체크인 및 첫날 오리엔테이션</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-black text-brand-green mb-4">준비사항</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 text-brand-gold mr-2" />
                    <span>여권 및 비자 서류</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 text-brand-gold mr-2" />
                    <span>입학허가서 (LOA)</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 text-brand-gold mr-2" />
                    <span>숙소 주소 및 연락처</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 text-brand-gold mr-2" />
                    <span>긴급연락처 정보</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 text-brand-gold mr-2" />
                    <span>픽업 담당자 연락처</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="p-8 max-w-3xl mx-auto text-center border-2 border-brand-green/20">
            <Plane className="h-12 w-12 text-brand-green mx-auto mb-4" />
            <h3 className="text-2xl font-black text-brand-green mb-4">픽업 서비스 예약</h3>
            <p className="text-gray-600 mb-6">
              항공편 정보를 알려주시면 담당자가 정확한 시간에 공항에서 기다리고 있겠습니다. 
              입국 과정부터 숙소 도착까지 안전하게 모시겠습니다.
            </p>
            
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>서비스 시간: 24시간 운영</span>
                </div>
                <p>항공편 지연 시에도 추가 요금 없이 대기해드립니다</p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  픽업 서비스 예약하기
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}