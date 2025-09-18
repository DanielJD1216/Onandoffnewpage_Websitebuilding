'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import { Plane, Phone, ArrowRight } from 'lucide-react';

export default function ArrivalPage({ params }: { params: { locale: string } }) {
  const services = [
    {
      icon: Plane,
      title: '공항 픽업',
      description: '스터디 퍼밋 수령부터 홈스테이 체크인까지',
      href: '/arrival/airport-pickup',
      features: [
        '입국 심사 가이드',
        '스터디 퍼밋 수령 지원',
        '세관 통과 도움',
        '홈스테이까지 안전 이동'
      ]
    },
  ];

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
            공항 착륙 순간부터 안정적 정착까지
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            밴쿠버 도착 첫날부터 학교 적응까지, 모든 과정을 함께합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  정착 서비스 상담 신청
                </Link>
              </Button>
              <KoreanPhoneDisplay />
            </div>
          </div>
        </div>
      </section>

      {/* Settlement Services Table */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-brand-green mb-4">밴쿠버 정착 서비스 타임라인</h2>
              <p className="text-xl text-brand-gold mb-4">도착부터 성공적인 정착까지 단계별 지원</p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-4xl mx-auto">
                <p className="text-sm text-amber-800">
                  <strong>⚠️ 중요 안내:</strong> 공휴일, 주말, 또는 은행/정부기관 휴무일의 경우, 일정은 다음 영업일에 진행됩니다. 모든 필수 업무가 효율적으로 완료될 수 있도록 서비스 일정이 그에 맞춰 조정될 수 있습니다.
                </p>
              </div>
            </div>
            
            {/* Common Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-brand-green mb-8">공통 (단독 / 부모동반)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden table-fixed min-w-[1200px] sm:min-w-[1400px]">
                  <thead>
                    <tr className="bg-brand-green text-white">
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-24">단계</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-48">서비스</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base">상세 내용</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-32">대상</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-40">준비물</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-24">예상 소요</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 0</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">공항 픽업 & 숙소 입주 지원</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">YVR 픽업 후 사전 확정된 홈스테이/렌트 이동, 체크인, 하우스룰 및 계약 조건 확인</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권, 비자서류</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">2–3h</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 0</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">입국 서류 검수</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">스터디 퍼밋 조건(근로시간, Co-op 여부 등) 확인, 오류 시 즉시 대응 안내</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">스터디 퍼밋, LOA</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">20–40m</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 1</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">통신/데이터 개통</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">eSIM/USIM 개통, 요금제 추천, 한국 번호 보관 설정</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">1–2h</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 1</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">교통카드 & 대중교통 안내</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">Compass 카드 구매·충전, SkyTrain/버스/SeaBus 노선 및 환승 규칙 안내</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">30–45m</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 2–3</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">캐나다 은행 계좌 개설</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">TD, RBC, BMO 등 주요 은행 계좌 개설, 직불카드 발급 신청, 온라인 뱅킹 설정</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권, 스터디퍼밋, LOA, 주소증명</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">1–2h</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 3–5</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">SIN 번호 신청</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">Service Canada 방문하여 Social Insurance Number 신청 (근로 필수)</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권, 스터디퍼밋</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">30–60m</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 5–7</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">첫 학교 등교 지원</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">첫 등교 동행 (선택), 교무실 방문, 사물함·ID 카드 발급, 수업 일정 확인</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권, LOA</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">2–3h</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 7–10</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">필수 생활용품 구매 동행</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">Superstore, Costco 등에서 생필품, 학용품, 의류 구매 가이드</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">직불카드</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">2–4h</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Week 1</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">정착 점검 & F/U 미팅</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">생활 적응 상황 점검, 추가 필요 서비스 확인, 향후 케어 플랜 수립</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">단독 / 부모동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">없음</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">1–1.5h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Minor Independent Study */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-brand-gold mb-8">미성년 단독 유학</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden table-fixed min-w-[1200px] sm:min-w-[1400px]">
                  <thead>
                    <tr className="bg-brand-gold text-white">
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-24">단계</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-48">서비스</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base">상세 내용</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-32">대상</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-40">준비물</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-24">예상 소요</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-gold">Day 3–5</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">가디언 서류 준비 & 공증</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">Custodianship Declaration 작성, 공증인 방문하여 가디언 서류 공증</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">미성년 단독</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권, 가디언 동의서, ID</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">1–2h</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-gold">Day 5–7</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">MSP (의료보험) 신청</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">BC 의료보험(MSP) 신청서 작성 및 제출, CareCard 신청 (3개월 대기기간)</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">미성년 단독</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권, 스터디퍼밋, 주소증명, 가디언서류</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">45–60m</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-gold">Week 1</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">응급상황 대응 체계 구축</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">24시간 비상연락망, 병원·클리닉 정보 제공, 응급상황 매뉴얼 전달</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">미성년 단독</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">없음</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">30–45m</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-gold">Week 2</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">정기 케어 일정 수립</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">주 1-2회 정기 체크인 일정 확정, 학습·생활 모니터링 시스템 가동</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">미성년 단독</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">없음</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">45–60m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Parent Accompanied Study */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-brand-green mb-8">부모 동반 유학</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden table-fixed min-w-[1200px] sm:min-w-[1400px]">
                  <thead>
                    <tr className="bg-brand-green text-white">
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-24">단계</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-48">서비스</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base">상세 내용</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-32">대상</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-40">준비물</th>
                      <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 text-left font-bold text-sm sm:text-base w-24">예상 소요</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 3–5</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">부모 관광비자 연장 신청</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">IRCC 온라인 포털을 통한 관광비자 연장 신청 (최대 6개월)</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">부모 동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">부모 여권, 입국도장, 재정증명</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">1–2h</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Day 5–7</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">자녀 학교 등록 지원</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">교무실 방문, 입학서류 제출, 과목 선택 상담, 교복·학용품 구매 안내</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">부모 동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">자녀 여권, LOA, 예방접종기록</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">2–3h</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Week 1</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">렌트 하우스 계약 지원</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">MLS 매물 검색, 하우스 투어 동행, 리스 계약서 검토, 유틸리티 연결</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">부모 동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">여권, 은행잔고증명, 소득증명</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">4–8h</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Week 1–2</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">차량 구매/리스 지원</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">중고차 딜러 소개, 차량 검사 동행, 보험 가입, BC 운전면허 취득 안내</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">부모 동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">한국 면허증, 여권, 은행계좌</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">3–6h</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-semibold text-brand-green">Week 2</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base font-medium">가족 정착 완료 점검</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">전체 정착 과정 점검, 추가 필요 서비스 확인, 장기 거주 계획 상담</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">부모 동반</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">없음</td>
                      <td className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 align-top break-words text-sm sm:text-base">1–1.5h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all group">
                  <div className="flex items-center mb-6">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <IconComponent className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-brand-green">{service.title}</h2>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-brand-green hover:bg-brand-green/90 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all"
                    asChild
                  >
                    <Link href={`/${params.locale}${service.href}`}>
                      <ArrowRight className="mr-2 h-4 w-4" />
                      자세히 보기
                    </Link>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Homestay Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-brand-green mb-4">On&Off 인증 홈스테이</h2>
              <p className="text-xl text-brand-gold">엄선된 홈스테이 가정과 직영 토탈케어 서비스</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-2 border-brand-green/20">
                <h3 className="text-xl font-black text-brand-green mb-4">On&Off 인증 홈스테이</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>기본 홈스테이</span>
                    <span className="font-bold text-brand-green">$1,500/월</span>
                  </div>
                  <div className="flex justify-between">
                    <span>프리미엄 케어</span>
                    <span className="font-bold text-brand-green">$2,200/월</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토탈 케어 패키지</span>
                    <span className="font-bold text-brand-green">$3,000/월</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 등교·하교 동행 서비스</li>
                  <li>• 주1회 청소·빨래 서비스</li>
                  <li>• 학원 라이드 서비스</li>
                  <li>• 24시간 케어 시스템</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-brand-gold/20 bg-brand-gold/5">
                <h3 className="text-xl font-black text-brand-gold mb-4">On&Off 직영 홈스테이</h3>
                <div className="bg-brand-gold/10 p-4 rounded-lg mb-4">
                  <p className="text-brand-gold font-semibold text-center">토탈 케어 시스템</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 한국인 매니저 상주</li>
                  <li>• 개별 맞춤형 케어</li>
                  <li>• 학습 환경 최적화</li>
                  <li>• 실시간 부모 소통</li>
                  <li>• 응급상황 즉시 대응</li>
                </ul>
                <Button className="w-full mt-4 bg-brand-gold hover:bg-brand-gold/90" asChild>
                  <Link href={`/${params.locale}/arrival/homestay`}>
                    직영 홈스테이 상담
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">안전하고 편안한 정착을 약속드립니다</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            캐나다 도착 첫날부터 학교 적응까지, 전 과정을 체계적으로 지원합니다. 
            개인별 맞춤 정착 플랜을 상담받아보세요.
          </p>
          
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
                asChild
              >
                <Link href={`/${params.locale}/contact`}>
                  정착 서비스 견적 요청
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black"
                asChild
              >
                <Link href={`/${params.locale}/arrival/homestay`}>
                  홈스테이 리스트 받아보기
                </Link>
              </Button>
            </div>
            <KoreanPhoneDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}