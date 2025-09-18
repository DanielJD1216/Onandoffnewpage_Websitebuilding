'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, Check, Star, Clock, Users, Download } from 'lucide-react';

export default function CampusPlansPage({ params }: { params: { locale: string } }) {

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
            <span className="text-brand-gold font-medium">플랜·요금</span>
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
            플랜·요금
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            개인과외 대비 40~60% 비용 절감, 결과 보증형 운영
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                상담 문의하기
              </Link>
            </Button>
            <p className="text-brand-green font-bold">
              📞 한국 상담 전화번호: 010-4517-1770
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* 저학년 토탈 OSC */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">저학년 토탈 OSC (Out-of-School Care)</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/80 border-2 border-brand-green/20 relative">
                <div className="text-center mb-6">
                  <Users className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-brand-green mb-2">주 2회</h3>
                  <div className="text-4xl font-black text-brand-gold mb-2">$650</div>
                  <p className="text-gray-600">월 8회 세션</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">1회 2시간 30분</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">1:4 소그룹 기본</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">간식 포함</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">영·수·과 통합</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">주간 리포트</span>
                  </li>
                </ul>

                <Button className="w-full bg-brand-green hover:bg-brand-green/90" asChild>
                  <Link href={`/${params.locale}/contact`}>선택하기</Link>
                </Button>
              </Card>

              <Card className="p-8 bg-white/80 border-2 border-brand-gold/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-bold">
                    인기
                  </div>
                </div>

                <div className="text-center mb-6">
                  <Star className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-brand-gold mb-2">주 3회</h3>
                  <div className="text-4xl font-black text-brand-gold mb-2">$850</div>
                  <p className="text-gray-600">월 12회 세션</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold mr-2 mt-0.5" />
                    <span className="text-gray-700">1회 2시간 30분</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold mr-2 mt-0.5" />
                    <span className="text-gray-700">1:4 소그룹 기본</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold mr-2 mt-0.5" />
                    <span className="text-gray-700">간식 포함</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold mr-2 mt-0.5" />
                    <span className="text-gray-700">영·수·과 통합</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold mr-2 mt-0.5" />
                    <span className="text-gray-700">주간 리포트</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold mr-2 mt-0.5" />
                    <span className="text-gray-700"><strong>우선 배치</strong></span>
                  </li>
                </ul>

                <Button className="w-full bg-brand-gold hover:bg-brand-gold/90" asChild>
                  <Link href={`/${params.locale}/contact`}>선택하기</Link>
                </Button>
              </Card>

              <Card className="p-8 bg-white/80 border-2 border-brand-green/20 relative">
                <div className="text-center mb-6">
                  <Clock className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-brand-green mb-2">주 5회</h3>
                  <div className="text-4xl font-black text-brand-gold mb-2">$1,200</div>
                  <p className="text-gray-600">월 20회 세션</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">1회 2시간 30분</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">1:4 소그룹 기본</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">간식 포함</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">영·수·과 통합</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700">주간 리포트</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-gray-700"><strong>전일제 케어</strong></span>
                  </li>
                </ul>

                <Button className="w-full bg-brand-green hover:bg-brand-green/90" asChild>
                  <Link href={`/${params.locale}/contact`}>선택하기</Link>
                </Button>
              </Card>
            </div>
          </div>

          {/* 고학년 과목 튜터링 */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">고학년 과목 튜터링</h2>

            <Card className="p-8 bg-white/80 border-2 border-brand-green/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-brand-green mb-4">1회당 요금</h3>
                <div className="text-6xl font-black text-brand-gold mb-4">$50</div>
                <p className="text-lg text-gray-600">1인당 / 4인 그룹 기준 / 2시간 30분</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                <div className="mx-auto md:mx-0">
                  <h4 className="text-xl font-black text-brand-green mb-4">포함 사항</h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">개별 ILP 수립</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">마스터리 보드</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">형성/총괄 평가</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">주간 과제 피드백</span>
                    </li>
                  </ul>
                </div>

                <div className="mx-auto md:mx-0">
                  <h4 className="text-xl font-black text-brand-green mb-4">과목 선택</h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">영어 (리딩/라이팅)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">수학</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">과학 (물리·화학·생물)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">1~2개 과목 집중 가능</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-brand-green hover:bg-brand-green/90" asChild>
                  <Link href={`/${params.locale}/contact`}>상담 신청하기</Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* 보장 정책 */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">보장 정책</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-brand-green/5 border-2 border-brand-green/20">
                <h3 className="text-lg font-black text-brand-green mb-3">성과 보증</h3>
                <p className="text-gray-700">4주 내 핵심 지표 1개 이상 개선 미달 시 <strong>무료 보강 2회(소그룹 60′)</strong> 제공</p>
              </Card>

              <Card className="p-6 bg-brand-gold/5 border-2 border-brand-gold/20">
                <h3 className="text-lg font-black text-brand-gold mb-3">결석 보강</h3>
                <p className="text-gray-700">24시간 전 통보 시 <strong>14일 내 보강</strong> (텀당 1회 무료)</p>
              </Card>

              <Card className="p-6 bg-brand-green/5 border-2 border-brand-green/20">
                <h3 className="text-lg font-black text-brand-green mb-3">공휴일 이월</h3>
                <p className="text-gray-700">공휴일 수업은 자동 이월, 일정 조정 가능</p>
              </Card>

              <Card className="p-6 bg-brand-gold/5 border-2 border-brand-gold/20">
                <h3 className="text-lg font-black text-brand-gold mb-3">투명 고지</h3>
                <p className="text-gray-700">교재/시험료 실비, 환불·이월 규정 사전 안내</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">플랜 선택 가이드</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-black text-brand-green mb-4">Basic 플랜 추천</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 자립심이 강한 고등학생</li>
                  <li>• 기본적인 모니터링만 필요한 경우</li>
                  <li>• 예산을 고려한 경제적 선택</li>
                  <li>• 단기 유학생 (6개월 미만)</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-brand-gold/20">
                <h3 className="text-xl font-black text-brand-gold mb-4">Standard 플랜 추천</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 대부분의 초·중·고 학생에게 최적</li>
                  <li>• 균형잡힌 관리와 지원 서비스</li>
                  <li>• 안정적인 유학 생활 보장</li>
                  <li>• 가성비 최고의 선택</li>
                </ul>
              </Card>
            </div>
            
            <Card className="p-6 text-center">
              <h3 className="text-xl font-black text-brand-green mb-4">Premium 플랜 추천</h3>
              <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                <div>• 초등학생 또는 어린 중학생</div>
                <div>• 특별한 관리가 필요한 학생</div>
                <div>• 최고 수준의 안심 서비스 원하는 경우</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">지금 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            전문 상담을 통해 최적의 관리 플랜을 찾아보세요. 
            언제든 플랜 변경이 가능합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                상담 문의
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Download className="mr-2 h-4 w-4" />
                플랜 비교표 다운로드
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}