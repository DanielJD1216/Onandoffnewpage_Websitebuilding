'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import { Download, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function PreDeparturePage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-green mb-6 font-dodum">
            캐나다 유학, 준비부터 등록까지 한 번에
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            지역·학교 선택, 입학 절차, 비자까지 단계별로 안내드립니다.
          </p>

          {/* Consultation Process Link - Distinctive Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-emerald-50/80 to-green-50/80 border-2 border-emerald-200 rounded-xl p-4 sm:p-6 max-w-xs sm:max-w-md mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <Link
                href={`/${params.locale}/pre-departure/consultation-process`}
                className="block text-center group"
              >
                <div className="flex items-center justify-center mb-2">
                  <span className="text-xl sm:text-2xl mr-2">💡</span>
                  <span className="text-base sm:text-lg font-black text-emerald-700 group-hover:text-emerald-800 transition-colors">
                    상담절차 안내 확인하기
                  </span>
                </div>
                <p className="text-emerald-600 text-xs sm:text-sm font-medium group-hover:text-emerald-700 transition-colors">
                  상담 전에 미리 확인해보세요
                </p>
                <div className="mt-3 inline-flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors">
                  <span className="text-xs sm:text-sm font-semibold">자세히 보기</span>
                  <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              무료 1:1 상담 문의
            </Link>
          </Button>
          <KoreanPhoneDisplay className="mt-4" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* 01. 지역/학교 선택 가이드 */}
            <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all">
              <div className="flex items-center mb-4">
                <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">01</span>
                <h2 className="text-2xl font-black text-brand-green">지역/학교 선택 가이드</h2>
                <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold ml-4">무료</span>
              </div>
              <p className="text-gray-600 mb-6">
                교육청 소개(랭리/서리/코퀴틀람/아보츠포드/버나비 등) + 간단 특징(ELL/강점 과목/IB·AP 여부)
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                  <span>인기 학교/프로그램 한 줄 요약 카드 6–8개</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                  <span>교육청 공식 링크 + 한국어 요약 PDF</span>
                </div>
              </div>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90" asChild>
                <Link href={`/${params.locale}/pre-departure/regions-schools`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  지역/학교 선택 가이드 보기
                </Link>
              </Button>
            </Card>

            {/* 02. 입학 절차 안내 */}
            <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all">
              <div className="flex items-center mb-4">
                <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">02</span>
                <h2 className="text-2xl font-black text-brand-green">입학 절차 안내</h2>
                <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold ml-4">무료</span>
              </div>
              <p className="text-gray-600 mb-6">
                서류 체크리스트부터 등록까지, 3순위까지 지원 가능, 평균 처리 2–8주
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                  <span>여권 사본, 최근 성적표, 예방접종 기록 체크리스트</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                  <span>단계별 진행 과정 안내 (Stepper UI)</span>
                </div>
              </div>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90" asChild>
                <Link href={`/${params.locale}/pre-departure/admissions-steps`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  입학 절차 안내 보기
                </Link>
              </Button>
            </Card>

            {/* 03. 학교 등록 대행 */}
            <Card className="p-8 border-2 border-brand-gold/20 hover:border-brand-gold transition-all">
              <div className="flex items-center mb-4">
                <span className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">03</span>
                <h2 className="text-2xl font-black text-brand-gold">학교 등록 대행</h2>
                <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold ml-4">무료</span>
              </div>
              <p className="text-gray-600 mb-6">
                지원서 작성부터 최종 등록 확인서 수령까지 전 과정 대행
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-gold mr-2" />
                  <span>지원서 작성 및 교육청/학교 커뮤니케이션</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-gold mr-2" />
                  <span>등록 확인서(LOA/Seat Confirmation) 수령</span>
                </div>
              </div>
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90" asChild>
                <Link href={`/${params.locale}/pre-departure/registration-service`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  등록 대행 서비스 보기
                </Link>
              </Button>
            </Card>

            {/* 04. 비자 지원 */}
            <Card className="p-8 border-2 border-brand-gold/20 hover:border-brand-gold transition-all">
              <div className="flex items-center mb-4">
                <span className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">04</span>
                <h2 className="text-2xl font-black text-brand-gold">비자 지원</h2>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold ml-4">+$300/인</span>
              </div>
              <p className="text-gray-600 mb-6">
                학생비자/동반부모(Visitor Record) 개요, 평균 처리 6–12주
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-gold mr-2" />
                  <span>필수 서류 체크리스트 제공</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-gold mr-2" />
                  <span>외부 행정사/로펌 연계 (수임은 파트너)</span>
                </div>
              </div>
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90" asChild>
                <Link href={`/${params.locale}/pre-departure/visa-support`}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  비자 지원 서비스 보기
                </Link>
              </Button>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <Card className="p-8">
              <h2 className="text-3xl font-black text-brand-green mb-8 text-center">자주 묻는 질문</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Q. 입학/비자 소요기간은?</h3>
                  <p className="text-gray-600 mb-4">입학: 평균 2-8주, 비자: 평균 6-12주 (시기별 변동)</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Q. 시험이 필요한가요?</h3>
                  <p className="text-gray-600 mb-4">대부분의 초중고는 별도 시험 없이 성적표로 입학 가능</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Q. 환불·연기 가능한가요?</h3>
                  <p className="text-gray-600 mb-4">교육청 규정에 따라 다르며, 상황별 안내 제공</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green mb-2">Q. 서비스 범위는?</h3>
                  <p className="text-gray-600 mb-4">교육청/학교 비용은 실비 별도, 당사 수수료는 서비스료</p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                무료 상담 문의
              </Link>
            </Button>
            <KoreanPhoneDisplay className="mt-4" />
          </div>
        </div>
      </section>
    </div>
  );
}