'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, BookOpen, Users, Calendar, Star } from 'lucide-react';

export default function CampusOverviewPage({ params }: { params: { locale: string } }) {
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
            <span className="text-brand-gold font-medium">프로그램 개요</span>
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
            학업·생활·소통을 한 번에 끝내는 No‑Brainer 관리 프로그램
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            주 1~5회, 1:4 소그룹 + ILP + 주간/월간 리포트. 4주 내 성과 미달 시 무료 보강 2회
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <Phone className="mr-2 h-5 w-5" />
                상담 문의
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
          {/* Campus Photo Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/onandoffcampus.png"
                alt="온앤오프 뉴페이지 캠퍼스 랭귀지 직영 홈스테이"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Why This Program */}
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8">★ 왜 No-Brainer 인가</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-black text-brand-green mb-3">결과 보증형</h3>
                <p className="text-sm text-gray-600">4주 내 핵심 지표 개선 미달 시 무료 보강 2회 제공</p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-lg font-black text-brand-gold mb-3">완전 통합 관리</h3>
                <p className="text-sm text-gray-600">학업(영·수·과) + 생활 루틴 + 부모 소통 + 멘토링을 한 공간에서</p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-black text-brand-green mb-3">1:4 소그룹 + ILP</h3>
                <p className="text-sm text-gray-600">개별 학습계획 기반 맞춤 진도, 마스터리 보드로 가시화</p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-black text-brand-gold mb-3">데이터 투명성</h3>
                <p className="text-sm text-gray-600">주간 3줄 요약 + 월간 리포트 그래프 + 분기 상담</p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-black text-brand-green mb-3">검증된 운영</h3>
                <p className="text-sm text-gray-600">수석 튜터 QA·관찰, 표준 루브릭, 안전/출결 체계</p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-black text-brand-gold mb-3">가성비</h3>
                <p className="text-sm text-gray-600">개인과외 대비 40~60% 비용 절감</p>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">작동 방식 (3단계)</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/80 border-2 border-brand-green/20 text-center">
                <div className="bg-brand-green text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-black">1</div>
                <h3 className="text-xl font-black text-brand-green mb-3">진단/배치</h3>
                <p className="text-gray-600">레벨·목표 설정</p>
              </Card>

              <Card className="p-8 bg-white/80 border-2 border-brand-gold/20 text-center">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-black">2</div>
                <h3 className="text-xl font-black text-brand-gold mb-3">주간 실행</h3>
                <p className="text-gray-600">수업·과제·형성평가</p>
              </Card>

              <Card className="p-8 bg-white/80 border-2 border-brand-green/20 text-center">
                <div className="bg-brand-green text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-black">3</div>
                <h3 className="text-xl font-black text-brand-green mb-3">리포트/보정</h3>
                <p className="text-gray-600">월간 그래프·보정 세션</p>
              </Card>
            </div>
          </div>

          {/* Class Structure */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">수업 구조</h2>

            <Card className="p-8 bg-white/80 border-2 border-brand-green/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-black text-brand-green mb-4">세션 구성</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 1회 <strong>150분(2시간 30분)</strong></li>
                    <li>• 1:4 표준(최대 1:6)</li>
                    <li>• 저학년(방과후형) / 고학년(과목 튜터링) 트랙</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black text-brand-green mb-4">프로그램 기간</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 8주(저학년) · 12주(고학년) 텀</li>
                    <li>• <strong>쇼케이스·포트폴리오</strong> 운영</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Pricing Comparison */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">가치/가격 비교</h2>

            <Card className="p-8 bg-white/80 border-2 border-brand-green/20">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-brand-green/20">
                      <th className="text-left py-4 px-6 font-black text-brand-green">항목</th>
                      <th className="text-left py-4 px-6 font-black text-gray-600">전통형 학원</th>
                      <th className="text-left py-4 px-6 font-black text-gray-600">개인 과외</th>
                      <th className="text-left py-4 px-6 font-black text-brand-gold">본 프로그램</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold">지도 형태</td>
                      <td className="py-4 px-6 text-gray-600">1:8~1:12</td>
                      <td className="py-4 px-6 text-gray-600">1:1</td>
                      <td className="py-4 px-6 font-bold text-brand-gold">1:4(표준), 개인화 ILP</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold">시간/회</td>
                      <td className="py-4 px-6 text-gray-600">60~90′</td>
                      <td className="py-4 px-6 text-gray-600">60′</td>
                      <td className="py-4 px-6 font-bold text-brand-gold">150′(2h30m)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold">과목 통합</td>
                      <td className="py-4 px-6 text-gray-600">제한적</td>
                      <td className="py-4 px-6 text-gray-600">단일 과목</td>
                      <td className="py-4 px-6 font-bold text-brand-gold">영·수·과 + 생활·멘토링</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold">데이터/리포트</td>
                      <td className="py-4 px-6 text-gray-600">시험 위주</td>
                      <td className="py-4 px-6 text-gray-600">비정형</td>
                      <td className="py-4 px-6 font-bold text-brand-gold">주간 요약 + 월간 그래프 + 분기 상담</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-bold">결과 보증</td>
                      <td className="py-4 px-6 text-gray-600">없음</td>
                      <td className="py-4 px-6 text-gray-600">없음</td>
                      <td className="py-4 px-6 font-bold text-brand-gold">4주 개선 미달 시 무료 보강 2회</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-bold">시간당 비용</td>
                      <td className="py-4 px-6 text-gray-600">중간</td>
                      <td className="py-4 px-6 text-gray-600">높음</td>
                      <td className="py-4 px-6 font-bold text-brand-gold">개인과외 대비 40~60% 절감</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Included Services */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">포함 범위</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <h3 className="text-xl font-black text-brand-green mb-4">과목</h3>
                <p className="text-gray-600"><strong>영어(리딩/라이팅) · 수학 · 과학</strong></p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                <h3 className="text-xl font-black text-brand-gold mb-4">생활 루틴</h3>
                <p className="text-gray-600">입실 체크 → 세션1/2 → 리뷰 → 퇴실</p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-green/20">
                <h3 className="text-xl font-black text-brand-green mb-4">소통</h3>
                <p className="text-gray-600">주간 3줄·월간 리포트·분기 상담</p>
              </Card>

              <Card className="p-6 bg-white/80 border-2 border-brand-gold/20">
                <h3 className="text-xl font-black text-brand-gold mb-4">보장·정책</h3>
                <p className="text-gray-600"><strong>4주 개선 목표</strong> + 출결/과제 준수 시 <strong>보정 세션 2회</strong></p>
              </Card>
            </div>
          </div>

          {/* Guarantees & Policies */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">보장·정책 (리스크 리버설)</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-brand-green/5 border-2 border-brand-green/20">
                <h3 className="text-lg font-black text-brand-green mb-3">성과 보증</h3>
                <p className="text-gray-600">사전 진단 대비 4주 내 핵심 지표 1개 이상 개선 미달 시 <strong>무료 보강 2회(소그룹 60′)</strong> 제공</p>
              </Card>

              <Card className="p-6 bg-brand-gold/5 border-2 border-brand-gold/20">
                <h3 className="text-lg font-black text-brand-gold mb-3">첫 주 체험 보장</h3>
                <p className="text-gray-600">첫 주 종료 후 만족도 미흡 시 <strong>다음 주 수강료 크레딧</strong></p>
              </Card>

              <Card className="p-6 bg-brand-green/5 border-2 border-brand-green/20">
                <h3 className="text-lg font-black text-brand-green mb-3">결석 보강</h3>
                <p className="text-gray-600">24시간 전 통보 시 <strong>14일 내 보강</strong>(텀당 1회 무료), 공휴일 자동 이월</p>
              </Card>

              <Card className="p-6 bg-brand-gold/5 border-2 border-brand-gold/20">
                <h3 className="text-lg font-black text-brand-gold mb-3">투명 고지</h3>
                <p className="text-gray-600">교재/시험료 실비, 환불·이월 규정 사전안내</p>
              </Card>
            </div>
          </div>

          {/* Next Steps */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-brand-green mb-8">다음 단계</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-black h-auto p-6"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  상담 문의하기
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black h-auto p-6"
                asChild
              >
                <Link href={`/${params.locale}/campus/plans`}>
                  플랜·요금 보기
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-black h-auto p-6"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  월간 리포트 샘플 보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">지금 시작하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            자녀의 안전하고 성공적인 유학 생활을 위한 첫걸음을 내딛어 보세요.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                무료 상담 신청
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