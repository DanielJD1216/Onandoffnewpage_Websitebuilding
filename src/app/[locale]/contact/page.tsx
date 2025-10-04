'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { KoreanPhoneDisplay } from '@/components/ui/korean-phone-display';
import { AnnouncementBanner } from '@/components/ui/announcement-banner';
import { PageHero, PageSection } from '@/components/layout/PageSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Users,
  Globe,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('quick');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{backgroundImage: 'linear-gradient(to bottom, white 35%, #f8f6f0 100%)'}}>
      {/* Hero Section */}
      <PageHero containerClassName="max-w-6xl">
        <SectionHeading 
          title="문의하기"
          subtitle="캐나다 교육 전문가와 함께 맞춤형 유학 계획을 세워보세요"
          level={1}
          className="mb-8"
        />


        <AnnouncementBanner
          title="빠른 연락 방법"
          message="카카오톡 ID: newpageonf | 긴급 문의: +1 (778) 889-8235"
          variant="info"
        />
      </PageHero>

      {/* Main Contact Section with Tabs */}
      <PageSection containerClassName="max-w-7xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
            <TabsTrigger value="quick" className="font-black flex items-center justify-center px-2 py-2">
              <img src="/kakao-icon.svg" alt="KakaoTalk" className="w-5 h-5 mr-2" />
              빠른 문의
            </TabsTrigger>
            <TabsTrigger value="office" className="font-black flex items-center justify-center px-2 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              오피스 방문
            </TabsTrigger>
          </TabsList>

          {/* Direct Contact Introduction */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-brand-green mb-3">
              무료 상담 안내
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              학생의 상황과 목표에 맞는 최적의 교육 경로를 제안해 드립니다.
              상담부터 입학까지 모든 과정이 완전 무료입니다.
            </p>
            <KoreanPhoneDisplay className="mt-4" />

            {/* Consultation Benefits */}
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 text-brand-green mx-auto mb-2" />
                <h4 className="font-black text-sm mb-1">완전 무료</h4>
                <p className="text-xs text-gray-600">수수료 없는 서비스</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-brand-green mx-auto mb-2" />
                <h4 className="font-black text-sm mb-1">맞춤형 플랜</h4>
                <p className="text-xs text-gray-600">개인별 유학 계획</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Globe className="w-8 h-8 text-brand-green mx-auto mb-2" />
                <h4 className="font-black text-sm mb-1">현지 전문성</h4>
                <p className="text-xs text-gray-600">5년+ 밴쿠버 경험</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Clock className="w-8 h-8 text-brand-green mx-auto mb-2" />
                <h4 className="font-black text-sm mb-1">24시간 지원</h4>
                <p className="text-xs text-gray-600">언제든 연락 가능</p>
              </Card>
            </div>
          </div>

          {/* Quick Contact Tab */}
          <TabsContent value="quick" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-brand-green mb-3">
                상담 연락 방법
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                상담 신청이나 문의사항이 있으신 경우 아래 방법으로 연락주세요
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Email */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-lg mb-2">이메일 상담</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      상담 신청 및 자세한 문의사항
                    </p>
                    <p className="font-medium text-brand-green mb-3">
                      onf.newpage@gmail.com
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                    >
                      <a href="mailto:onf.newpage@gmail.com?subject=무료 상담 신청&body=안녕하세요. 무료 상담을 신청하고 싶습니다.%0D%0A%0D%0A학생 정보:%0D%0A- 이름:%0D%0A- 나이:%0D%0A- 현재 학년:%0D%0A- 희망 지역:%0D%0A%0D%0A문의사항:%0D%0A">상담 신청하기</a>
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">응답: 1-2일</p>
                  </div>
                </div>
              </Card>

              {/* KakaoTalk */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-yellow-200 bg-yellow-50/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/kakao-icon.svg" alt="KakaoTalk" className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-lg mb-2">카카오톡 상담</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      빠른 실시간 상담 신청
                    </p>
                    <p className="font-medium text-yellow-600 mb-3">
                      ID: newpageonf
                    </p>
                    <Button
                      asChild
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                    >
                      <a href="http://pf.kakao.com/_xigxbxmn/chat/">카카오톡 상담 신청</a>
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">응답: 즉시</p>
                  </div>
                </div>
              </Card>

              {/* WhatsApp */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-green-200 bg-green-50/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-lg mb-2">WhatsApp 상담</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      해외에서도 편리한 상담 신청
                    </p>
                    <p className="font-medium text-green-600 mb-3">
                      +1 (778) 889-8235
                    </p>
                    <Button
                      asChild
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <a href="https://wa.me/17788898235?text=안녕하세요.%20무료%20상담을%20신청하고%20싶습니다.">WhatsApp 상담 신청</a>
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">응답: 빠른</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Response Time Notice */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h4 className="font-black text-blue-700 mb-2">응답 시간 안내</h4>
              <p className="text-blue-600 text-sm">
                평일 오전 9시 - 오후 6시 (밴쿠버 시간) | 주말 및 공휴일은 응답이 지연될 수 있습니다
              </p>
            </Card>
          </TabsContent>

          {/* Office Visit Tab */}
          <TabsContent value="office" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-brand-green mb-3">
                오피스 방문 상담
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                한국과 캐나다 현지에서 직접 운영하는 신뢰할 수 있는 서비스
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Vancouver Office */}
              <Card className="p-6 border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h3 className="font-black text-lg text-blue-600">밴쿠버 오피스 (본사)</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-green mt-0.5" />
                    <div>
                      <p className="font-medium">주소</p>
                      <p className="text-gray-600">
                        204-1046 Austin Avenue,<br />
                        Coquitlam, British Columbia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-green mt-0.5" />
                    <div>
                      <p className="font-medium">영업 시간 (PST)</p>
                      <p className="text-gray-600">
                        평일: 오전 9시 - 오후 6시<br />
                        토요일: 오전 10시 - 오후 3시<br />
                        일요일: 휴무
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-green mt-0.5" />
                    <div>
                      <p className="font-medium">전화</p>
                      <p className="text-gray-600">+1 (778) 889-8235</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-green mt-0.5" />
                    <div>
                      <p className="font-medium">이메일</p>
                      <p className="text-gray-600">onf.newpage@gmail.com</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Korean Office */}
              <Card className="p-6 border-2 border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <h3 className="font-black text-lg text-red-600">한국 사무소</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-green mt-0.5" />
                    <div>
                      <p className="font-medium">주소</p>
                      <p className="text-gray-600">
                        대구광역시 수성구 수성로69길 65,<br />
                        상가7동 301호(수성동1가)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-brand-green mt-0.5" />
                    <div>
                      <p className="font-medium">담당자</p>
                      <p className="text-gray-600">
                        박주향 (한국사무소 사무장)<br />
                        <span className="text-sm text-brand-green font-medium">상담 전문</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-green mt-0.5" />
                    <div>
                      <p className="font-medium">전화</p>
                      <p className="text-gray-600">
                        010-4517-1770<br />
                        <span className="text-sm text-gray-500">(+82 10-4517-1770)</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-green mt-0.5" />
                    <div>
                      <p className="font-medium">상담 시간 (KST)</p>
                      <p className="text-gray-600">
                        평일: 오전 9시 - 오후 6시<br />
                        토요일: 오전 10시 - 오후 2시<br />
                        일요일: 휴무
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Visit Guidelines */}
            <Card className="p-6 bg-amber-50 border-amber-200">
              <h4 className="font-black text-amber-700 mb-3">방문 상담 안내</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-amber-700 mb-2">밴쿠버 오피스</h5>
                  <ul className="text-amber-600 text-sm space-y-1">
                    <li>• 방문 상담은 사전 예약을 권장합니다</li>
                    <li>• 주차 공간이 제공됩니다</li>
                    <li>• 대중교통: Coquitlam Central Station에서 도보 10분</li>
                    <li>• 코로나19 방역 수칙을 준수합니다</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-amber-700 mb-2">한국 사무소</h5>
                  <ul className="text-amber-600 text-sm space-y-1">
                    <li>• 반드시 사전 예약 후 방문해주세요</li>
                    <li>• 박주향 사무장과 1:1 상담 가능</li>
                    <li>• 대중교통: 대구 지하철 2호선 수성구청역 인근</li>
                    <li>• 초기 상담 및 유학 준비 전문</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </PageSection>

      {/* Consultation Process Link */}
      <PageSection variant="gray">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 border-2 border-brand-green/20 hover:border-brand-green transition-all hover:shadow-lg">
            <h2 className="text-2xl font-black text-brand-green mb-4">상담 진행 과정</h2>
            <p className="text-gray-600 mb-6">상담 신청부터 유학 시작까지의 전체 과정을 자세히 확인해보세요</p>
            <Button 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href="/ko/pre-departure/consultation-process">
                상담 과정 자세히 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </div>
      </PageSection>

      {/* FAQ Section */}
      <PageSection>
        <SectionHeading 
          title="자주 묻는 질문"
          subtitle="상담과 관련하여 자주 문의하시는 내용들"
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: '상담 비용이 정말 무료인가요?',
              a: '네, 상담부터 입학까지 모든 과정이 완전 무료입니다. 별도의 수수료나 숨겨진 비용이 일체 없습니다.'
            },
            {
              q: '온라인 상담과 오프라인 상담 중 어떤 것이 좋을까요?',
              a: '두 방식 모두 동일한 품질의 상담을 제공합니다. 거리나 시간 제약이 있으시면 온라인 상담을, 직접 만나서 상담받고 싶으시면 밴쿠버 오피스 방문 상담을 선택하세요.'
            },
            {
              q: '상담 후 바로 결정해야 하나요?',
              a: '전혀 그렇지 않습니다. 충분한 시간을 갖고 가족과 상의한 후 결정하시면 됩니다. 추가 질문이 있으시면 언제든 연락 주세요.'
            },
            {
              q: '학부모만 상담받을 수 있나요?',
              a: '학부모님과 학생이 함께 상담받으시는 것을 권장하지만, 상황에 따라 학부모님만 또는 학생만 상담받으실 수도 있습니다.'
            },
            {
              q: '상담 시간은 얼마나 걸리나요?',
              a: '개별 상황에 따라 다르지만, 보통 60-90분 정도 소요됩니다. 충분한 시간을 갖고 세밀한 상담을 진행합니다.'
            },
            {
              q: '어떤 서류를 준비해야 하나요?',
              a: '초기 상담 시에는 특별한 서류가 필요하지 않습니다. 상담 후 필요한 서류를 안내해 드립니다.'
            }
          ].map((item, index) => {
            const isOpen = openFAQIndex === index;
            return (
              <Card key={index} className="border-2 border-gray-200 hover:border-brand-green transition-colors">
                <button
                  onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-inset rounded-lg"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-brand-green text-lg pr-4">Q. {item.q}</h3>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-brand-green flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-brand-green flex-shrink-0" aria-hidden="true" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-2"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="text-gray-600 text-base leading-relaxed">A. {item.a}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </PageSection>
    </div>
  );
}