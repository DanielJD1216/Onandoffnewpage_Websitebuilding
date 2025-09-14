'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, Briefcase, Building, MapPin, ExternalLink } from 'lucide-react';

export default function AlumniLinksPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50">
      {/* Breadcrumb */}
      <nav className="bg-white/80 border-b border-brand-green/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link 
              href={`/${params.locale}/alumni`}
              className="flex items-center text-brand-green hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              동문 네트워크
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-gold font-medium">연계 지원</span>
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
            연계 지원 서비스
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            Co-op, 취업, 이민까지 전문 파트너 연결
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              연계 서비스 문의
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">전문 기관 연계 지원</h2>
            <p className="text-lg text-gray-600 mb-8">
              Co-op 프로그램, 취업, 이민에 이르기까지 각 분야의 전문 파트너들과 연결하여 
              동문들의 성공적인 캐나다 정착을 지원합니다.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Briefcase,
                title: "Co-op & 인턴십",
                description: "실무 경험을 쌓을 수 있는 Co-op 및 인턴십 기회 연결",
                color: "border-brand-green"
              },
              {
                icon: Building,
                title: "취업 지원",
                description: "전문 취업 컨설팅 및 우수 기업 채용 연계",
                color: "border-brand-gold"
              },
              {
                icon: MapPin,
                title: "이민 서비스",
                description: "신뢰할 수 있는 이민 전문가 및 법무법인 소개",
                color: "border-brand-green"
              }
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className={`p-8 text-center bg-white/80 border-2 ${category.color}/20 hover:${category.color} transition-all`}>
                  <IconComponent className="h-16 w-16 text-brand-green mx-auto mb-6" />
                  <h3 className="text-xl font-black text-brand-green mb-4">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Detailed Services */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">연계 서비스 상세</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Co-op & 인턴십 프로그램",
                  description: "실무 경험과 네트워킹 기회를 제공하는 Co-op 및 인턴십 프로그램 연결",
                  partners: [
                    { name: "Tech Startup Incubator", type: "기술 스타트업", location: "밴쿠버" },
                    { name: "Global Consulting Group", type: "경영 컨설팅", location: "토론토" },
                    { name: "Digital Marketing Agency", type: "디지털 마케팅", location: "밴쿠버" },
                    { name: "Financial Services Corp", type: "금융 서비스", location: "토론토" },
                    { name: "Engineering Solutions", type: "엔지니어링", location: "캘거리" },
                    { name: "Healthcare Innovation", type: "헬스케어", location: "몬트리올" }
                  ]
                },
                {
                  title: "취업 지원 전문 기관",
                  description: "이력서 작성부터 면접 준비, 취업 알선까지 종합적인 취업 지원 서비스",
                  partners: [
                    { name: "Career Success Center", type: "종합 취업 컨설팅", location: "밴쿠버/토론토" },
                    { name: "Tech Recruitment Partners", type: "IT 전문 헤드헌팅", location: "전국" },
                    { name: "Executive Search Firm", type: "임원급 채용", location: "토론토" },
                    { name: "Healthcare Staffing", type: "의료 분야 전문", location: "전국" },
                    { name: "Finance Career Hub", type: "금융 분야 전문", location: "토론토/밴쿠버" },
                    { name: "Engineering Jobs Network", type: "엔지니어링 전문", location: "앨버타/BC" }
                  ]
                },
                {
                  title: "이민 전문 서비스",
                  description: "영주권 신청부터 시민권 취득까지 이민 전 과정을 지원하는 전문 기관",
                  partners: [
                    { name: "Immigration Law Associates", type: "이민 전문 법무법인", location: "토론토" },
                    { name: "Visa & Immigration Experts", type: "비자 전문 컨설팅", location: "밴쿠버" },
                    { name: "Provincial Nominee Advisors", type: "PNP 전문", location: "전국" },
                    { name: "Express Entry Consultants", type: "Express Entry 전문", location: "온라인" },
                    { name: "Family Immigration Services", type: "가족 이민 전문", location: "토론토/밴쿠버" },
                    { name: "Business Immigration Group", type: "사업 이민 전문", location: "밴쿠버/몬트리올" }
                  ]
                }
              ].map((service, index) => (
                <Card key={index} className="p-8 border-2 border-brand-green/20">
                  <h3 className="text-2xl font-black text-brand-green mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.partners.map((partner, idx) => (
                      <Card key={idx} className="p-4 bg-white/50 border border-brand-green/10 hover:shadow-md transition-shadow">
                        <h4 className="font-black text-brand-green text-sm mb-2">{partner.name}</h4>
                        <p className="text-xs text-gray-600 mb-1">{partner.type}</p>
                        <p className="text-xs text-brand-gold font-medium">{partner.location}</p>
                      </Card>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-6">연계 지원 성과</h2>
            <p className="text-lg text-gray-600">
              전문 파트너들과의 협력을 통해 이뤄낸 실제 성과들입니다
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { number: "250+", label: "Co-op 연결 성공" },
              { number: "180+", label: "정규직 취업 달성" },
              { number: "120+", label: "영주권 취득 지원" },
              { number: "98%", label: "서비스 만족도" }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-black text-brand-gold mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-brand-green">
              <h3 className="text-xl font-black text-brand-green mb-4">높은 성공률</h3>
              <p className="text-gray-600">
                &quot;전문 파트너를 통한 Co-op 및 취업 연결 성공률이 85% 이상을 유지하고 있어, 
                동문들의 캐나다 정착에 실질적인 도움을 제공하고 있습니다.&quot;
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-brand-gold">
              <h3 className="text-xl font-black text-brand-gold mb-4">빠른 연결</h3>
              <p className="text-gray-600">
                &quot;평균 2주 이내에 적합한 파트너 기관과 연결되며, 
                긴급한 경우 48시간 내 1차 상담이 가능합니다.&quot;
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">서비스 이용 절차</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "상담 신청", desc: "필요한 서비스 유형 선택 및 상담 신청" },
                { step: "02", title: "파트너 매칭", desc: "개인 상황에 맞는 최적 파트너 기관 추천" },
                { step: "03", title: "전문 상담", desc: "해당 분야 전문가와의 심화 상담 진행" },
                { step: "04", title: "지속 지원", desc: "성공적인 결과까지 지속적인 사후 관리" }
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-black text-brand-green/30 mb-3">{item.step}</div>
                  <h3 className="font-black text-lg text-brand-green mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">전문 파트너와 함께 성공하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            각 분야 최고의 전문가들과 연결되어 Co-op, 취업, 이민까지 
            성공적인 캐나다 정착을 이뤄보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                연계 서비스 신청
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black"
              asChild
            >
              <Link href={`/${params.locale}/contact`}>
                <ExternalLink className="mr-2 h-4 w-4" />
                파트너 기관 정보
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}