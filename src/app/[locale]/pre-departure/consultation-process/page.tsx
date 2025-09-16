'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  MessageCircle, 
  Calendar,
  CheckCircle,
  Clock,
  Users,
  FileText,
  ArrowRight,
  Star,
  Shield,
  Zap
} from 'lucide-react';

export default function ConsultationProcessPage({ params }: { params: { locale: string } }) {
  const [activeStep, setActiveStep] = useState(1);

  const consultationSteps = [
    {
      step: 1,
      title: '초기 상담 신청',
      duration: '5-10분',
      description: '온라인 양식 작성 또는 카카오톡/전화로 간편 신청',
      details: [
        '기본 정보 입력 (학생 정보, 학부모 연락처)',
        '관심 지역 및 학교 유형 선택',
        '예상 출국 시기 및 예산 범위',
        '특별 요구사항 또는 궁금한 점'
      ],
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      step: 2,
      title: '전문가 매칭 & 일정 조율',
      duration: '카톡/전화: 당일 · 이메일: 1-2일',
      description: '학생 상황에 맞는 전문 컨설턴트 배정 및 상담 일정 확정',
      details: [
        '학생 성향 및 목표에 따른 컨설턴트 매칭',
        '온라인/오프라인 상담 방식 선택',
        '한국 시간 또는 밴쿠버 시간 중 편한 시간 선택',
        '상담 전 준비사항 안내'
      ],
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      step: 3,
      title: '1차 심층 상담',
      duration: '60-90분',
      description: '학생과 학부모님을 위한 맞춤형 유학 계획 수립',
      details: [
        '학생 학업 능력 및 적성 파악',
        '지역별 교육 시스템 및 학교 소개',
        '예산에 맞는 최적의 옵션 제시',
        '비자, 홈스테이, 가디언십 등 전반적 안내'
      ],
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      step: 4,
      title: '맞춤 계획서 제공',
      duration: '3-5일',
      description: '상담 내용을 바탕으로 한 개인별 맞춤 유학 계획서 작성',
      details: [
        '추천 학교 리스트 및 상세 정보',
        '단계별 진행 일정 및 준비사항',
        '예상 비용 및 예산 계획',
        '입학 요건 및 필요 서류 안내'
      ],
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-orange-500',
      textColor: 'text-orange-600'
    },
    {
      step: 5,
      title: '후속 상담 & 서비스 진행',
      duration: '지속적',
      description: '계획 확정 후 입학부터 출국까지 전 과정 지원',
      details: [
        '학교 지원서 작성 및 제출 대행',
        '비자 신청 서류 준비 및 신청',
        '홈스테이 배정 및 공항 픽업 준비',
        '출국 전 오리엔테이션 및 현지 정착 지원'
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'bg-brand-green',
      textColor: 'text-brand-green'
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundImage: 'linear-gradient(to bottom, white 35%, #f8f6f0 100%)'}}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-green mb-6 font-dodum">
            상담 절차 안내
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            체계적이고 전문적인 5단계 상담 프로세스
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 bg-white/80 p-4 rounded-lg">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-black text-brand-green">100% 무료 상담</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/80 p-4 rounded-lg">
              <Zap className="w-6 h-6 text-brand-gold" />
              <span className="font-black text-brand-gold">맞춤형 계획 수립</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/80 p-4 rounded-lg">
              <Star className="w-6 h-6 text-purple-600" />
              <span className="font-black text-purple-600">전문가 1:1 매칭</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-4">상담 진행 과정</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              체계적인 5단계 프로세스를 통해 학생에게 최적화된 유학 계획을 수립합니다
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {consultationSteps.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeStep === step.step
                    ? 'bg-brand-green text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                Step {step.step}
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="max-w-4xl mx-auto">
            {consultationSteps.map((step) => (
              <Card 
                key={step.step}
                className={`p-8 transition-all duration-300 ${
                  activeStep === step.step ? 'block' : 'hidden'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`${step.color} text-white p-4 rounded-full flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-black text-gray-800">{step.title}</h3>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    <div className="grid gap-3">
                      {step.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 mt-0.5 ${step.textColor}`} />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700 text-sm text-center">
                💡 상담 전에 <Link href={`/${params.locale}/pre-departure/regions-schools`} className="underline font-semibold">지역/학교 선택 가이드</Link>를 확인해보세요
              </p>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-black text-center text-brand-green mb-8">전체 프로세스 타임라인</h3>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {consultationSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                      <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                        {step.icon}
                      </div>
                      <h4 className="font-black text-sm mb-2">{step.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{step.duration}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                    </Card>
                    {index < consultationSteps.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-4">자주 묻는 질문</h2>
            <p className="text-gray-600">상담 과정에서 궁금해하시는 내용들을 모았습니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: '상담 비용이 정말 무료인가요?',
                a: '네, 초기 상담부터 학교 등록까지 모든 과정이 완전 무료입니다. 별도의 수수료나 숨겨진 비용이 일체 없습니다.'
              },
              {
                q: '상담은 얼마나 걸리나요?',
                a: '1차 상담은 보통 60-90분 정도 소요됩니다. 학생의 상황과 질문에 따라 시간이 조정될 수 있으며, 충분한 시간을 갖고 상담을 진행합니다.'
              },
              {
                q: '온라인 상담도 가능한가요?',
                a: '네, 화상회의를 통한 온라인 상담이 가능합니다. 거리나 시간 제약이 있으신 분들도 편리하게 상담받으실 수 있습니다.'
              },
              {
                q: '상담 후 바로 결정해야 하나요?',
                a: '전혀 그렇지 않습니다. 충분한 시간을 갖고 가족과 상의한 후 결정하시면 됩니다. 추가 질문이 있으시면 언제든 연락 주세요.'
              },
              {
                q: '어떤 서류를 준비해야 하나요?',
                a: '초기 상담 시에는 특별한 서류가 필요하지 않습니다. 학생의 현재 성적표나 관심 학교가 있다면 도움이 될 수 있습니다.'
              },
              {
                q: '상담 예약은 어떻게 하나요?',
                a: '홈페이지 상담 신청 양식, 카카오톡, 또는 전화로 예약하실 수 있습니다. 보통 1-2일 내에 일정 조율이 가능합니다.'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-black text-brand-green mb-3">Q. {item.q}</h3>
                <p className="text-gray-600 text-sm">A. {item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-6">지금 바로 상담을 시작해보세요</h2>
            <p className="text-gray-600 mb-8 text-lg">
              전문 컨설턴트가 학생의 꿈을 현실로 만들어드리겠습니다
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  <Calendar className="mr-2 h-5 w-5" />
                  무료 상담 예약하기
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black text-lg px-8 py-4"
                asChild
              >
                <Link href="http://pf.kakao.com/_xigxbxmn/chat/" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  카카오톡 상담 바로 신청하기
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-black text-lg px-8 py-4"
                asChild
              >
                <Link href="tel:010-4517-1770">
                  <Phone className="mr-2 h-5 w-5" />
                  전화 상담 (한국)
                </Link>
              </Button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                📞 한국 상담 전화번호: <a href="tel:010-4517-1770" className="font-semibold text-blue-600 hover:underline">010-4517-1770</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}