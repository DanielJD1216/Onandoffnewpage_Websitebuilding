'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, FileText, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';

export default function AdmissionsStepsPage({ params }: { params: { locale: string } }) {
  const steps = [
    {
      number: 1,
      title: '상담 및 학교 선택',
      description: '학생 상황과 목표에 맞는 지역 및 학교 선택',
      timeframe: '1-2주',
      details: [
        '학생 학업 수준 및 관심 분야 파악',
        '지역별 특성 및 학교 정보 제공',
        '최대 3순위까지 지원 가능 학교 확정'
      ]
    },
    {
      number: 2,
      title: '서류 준비',
      description: '지원에 필요한 모든 서류 준비 및 검토',
      timeframe: '1-2주',
      details: [
        '여권 사본 및 사진',
        '최근 2년간 성적표 (영문 번역)',
        '재학증명서 또는 졸업증명서',
        '예방접종 기록 (영문)',
        '가디언십 서류 (필요시)'
      ]
    },
    {
      number: 3,
      title: '교육청 접수',
      description: '준비된 서류로 교육청에 정식 지원',
      timeframe: '즉시',
      details: [
        '온라인 지원서 작성 및 제출',
        '서류 업로드 및 검토',
        '지원 확인 및 접수번호 발급'
      ]
    },
    {
      number: 4,
      title: 'LOA 발급',
      description: '교육청 심사 후 입학허가서 발급',
      timeframe: '2-8주',
      details: [
        '교육청 내부 심사 진행',
        '입학허가서(Letter of Acceptance) 발급',
        '학비 납부 안내서 함께 발송'
      ]
    },
    {
      number: 5,
      title: '등록 및 학비 납부',
      description: '학비 납부 후 최종 등록 완료',
      timeframe: '1주',
      details: [
        '학비 및 등록비 납부',
        '최종 등록 확인서 수령',
        '학교 배정 및 오리엔테이션 안내'
      ]
    }
  ];

  const documents = [
    { name: '여권 사본', required: true, note: '유효기간 확인' },
    { name: '최근 성적표 (영문)', required: true, note: '최근 2년간' },
    { name: '재학증명서', required: true, note: '영문 번역 필수' },
    { name: '예방접종 기록', required: true, note: '영문 번역 필수' },
    { name: '가디언십 서류', required: false, note: '미성년자 필수' },
    { name: '은행잔고증명서', required: false, note: '비자 신청시' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          href={`/${params.locale}/pre-departure`}
          className="inline-flex items-center text-brand-green hover:text-brand-green/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          출발 전 가이드로 돌아가기
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-brand-green mb-4 font-dodum">
            입학 절차 안내
          </h1>
          <p className="text-xl text-brand-gold mb-8 font-dodum max-w-3xl mx-auto">
            상담부터 등록까지 5단계 과정을 상세히 안내드립니다
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-brand-green mr-2" />
              <span className="text-gray-600">총 소요기간: 2-8주</span>
            </div>
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-brand-gold mr-2" />
              <span className="text-gray-600">3순위까지 지원 가능</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-black text-lg mr-6">
                      {step.number}
                    </div>
                  </div>
                  
                  <Card className="flex-1 p-6 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-black text-brand-green">{step.title}</h3>
                      <div className="bg-brand-gold/10 px-3 py-1 rounded-full">
                        <span className="text-brand-gold font-semibold text-sm">{step.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-8 bg-brand-green/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">서류 체크리스트</h2>
            
            <Card className="p-6">
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      {doc.required ? (
                        <div className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center mr-3 text-xs font-bold">
                          필수
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-400 text-white rounded flex items-center justify-center mr-3 text-xs font-bold">
                          옵션
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-gray-900">{doc.name}</h4>
                        <p className="text-sm text-gray-600">{doc.note}</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 border-2 border-yellow-200 bg-yellow-50">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-yellow-800 mb-3">중요 안내사항</h3>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• 처리 시간은 시기별로 변동될 수 있습니다 (9월 입학: 4-6개월 전 지원 권장)</li>
                    <li>• 모든 한국어 서류는 반드시 영문 번역이 필요합니다</li>
                    <li>• 1순위 학교가 만석인 경우 2, 3순위 학교로 배정됩니다</li>
                    <li>• 학비는 교육청별로 상이하며, 환율에 따라 변동됩니다</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-brand-green mb-6">지금 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            전문 컨설턴트와 함께 체계적인 입학 준비를 시작해보세요. 
            무료 상담을 통해 개인별 맞춤 로드맵을 제공해드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                무료 입학 상담 신청
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/pre-departure/registration-service`}>
                <ArrowRight className="mr-2 h-4 w-4" />
                등록 대행 서비스 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}