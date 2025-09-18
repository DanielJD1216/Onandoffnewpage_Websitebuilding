'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, GraduationCap, BarChart3, Calendar, Users2 } from 'lucide-react';

export default function CampusAcademicsPage({ params }: { params: { locale: string } }) {
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
            <span className="text-brand-gold font-medium">학업 관리</span>
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
            학업관리
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            영어·수학·과학 핵심 역량을 1:4 소그룹으로 향상
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                학업 관리 문의
              </Link>
            </Button>
            <p className="text-brand-green font-bold">
              📞 한국 상담 전화번호: 010-4517-1770
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">목표</h2>
            <p className="text-lg text-gray-600 mb-8">
              영어(리딩/라이팅)·수학·과학의 핵심 역량을 <strong>개인화 ILP</strong>로 빠르게 끌어올립니다.
            </p>
          </div>

          {/* Provided Items */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">제공 항목</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <GraduationCap className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-black text-brand-green mb-3 text-center">ILP 수립</h3>
                <p className="text-gray-600 text-center"><strong>ILP(개별 학습계획)</strong> 수립 · 마스터리 보드로 진행 가시화</p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                <BarChart3 className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-xl font-black text-brand-gold mb-3 text-center">형성평가</h3>
                <p className="text-gray-600 text-center"><strong>형성평가(매회 5~10분)</strong> + <strong>총괄평가(4·8·12주 차)</strong></p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <Calendar className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-black text-brand-green mb-3 text-center">리포트</h3>
                <p className="text-gray-600 text-center">주간 과제 피드백 + 누적 그래프 리포트</p>
              </Card>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">주간 샘플 시간표 (고정 템플릿)</h2>

            <Card className="p-8 bg-white/80 border-2 border-brand-green/20">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-brand-green/20">
                      <th className="text-left py-4 px-6 font-black text-brand-green">시간</th>
                      <th className="text-left py-4 px-6 font-black text-brand-green">활동</th>
                      <th className="text-left py-4 px-6 font-black text-brand-green">목적</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold text-brand-gold">40′</td>
                      <td className="py-4 px-6">세션1 (리딩/개념)</td>
                      <td className="py-4 px-6 text-gray-600">리딩 전략·핵심 개념</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold text-brand-gold">10′</td>
                      <td className="py-4 px-6">브레이크</td>
                      <td className="py-4 px-6 text-gray-600">휴식·위생</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold text-brand-gold">50′</td>
                      <td className="py-4 px-6">세션2 (연습/응용)</td>
                      <td className="py-4 px-6 text-gray-600">문제해결·서술 강화</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold text-brand-gold">10′</td>
                      <td className="py-4 px-6">형성평가</td>
                      <td className="py-4 px-6 text-gray-600">핵심 스킬 퀵 체크</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-bold text-brand-gold">10′</td>
                      <td className="py-4 px-6">리뷰/과제</td>
                      <td className="py-4 px-6 text-gray-600">목표·과제 안내</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Subject Focus */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">과목 포커스</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-2 border-brand-green/20">
                <h3 className="text-2xl font-black text-brand-green mb-6">영어</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 요약·추론·주제</li>
                  <li>• RACE 구조 글쓰기</li>
                  <li>• 피어 피드백</li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-brand-gold/20">
                <h3 className="text-2xl font-black text-brand-gold mb-6">수학</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 스파이럴 복습</li>
                  <li>• CPA(콘크리트→픽토리얼→추상)</li>
                  <li>• 오류분석</li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-brand-green/20">
                <h3 className="text-2xl font-black text-brand-green mb-6">과학</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 개념→탐구→데이터 해석</li>
                  <li>• CER 보고서</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Next Steps */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-brand-green mb-8">다음 단계</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-black h-auto p-6"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  상담 예약하기
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black h-auto p-6"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  리포트 샘플 보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">전문적인 학업 관리를 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            체계적인 학업 관리를 통해 자녀의 학업 성취도를 높이고, 
            성공적인 캐나다 교육 과정을 완주할 수 있도록 지원합니다.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                학업 관리 상담 신청
              </Link>
            </Button>
            <p className="text-brand-green font-bold">
              📞 한국 상담 전화번호: 010-4517-1770
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}