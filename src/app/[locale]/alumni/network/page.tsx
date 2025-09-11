'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Phone, Users, MapPin, MessageCircle, Calendar } from 'lucide-react';

export default function AlumniNetworkPage({ params }: { params: { locale: string } }) {
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
            <span className="text-brand-gold font-medium">동문 네트워킹</span>
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-green mb-6 font-dodum">
            동문 네트워킹
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum">
            전 세계 곳곳의 동문들과 연결되는 특별한 네트워크
          </p>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-8 py-4"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" />
              동문 네트워크 가입
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-brand-green mb-6">글로벌 동문 커뮤니티</h2>
            <p className="text-lg text-gray-600 mb-8">
              온앤오프를 통해 캐나다 유학을 성공적으로 마친 동문들과 연결되어 
              지속적인 관계를 유지하고 서로 도움을 주고받을 수 있습니다.
            </p>
          </div>

          {/* Network Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: MapPin,
                title: "지역별 네트워크",
                description: "캐나다 주요 도시별 동문 모임 및 네트워크"
              },
              {
                icon: MessageCircle,
                title: "온라인 커뮤니티",
                description: "카카오톡, 디스코드 등 실시간 소통 채널"
              },
              {
                icon: Calendar,
                title: "정기 모임",
                description: "월간/분기별 오프라인 만남 및 행사"
              },
              {
                icon: Users,
                title: "멘토-멘티",
                description: "선후배 간 멘토링 및 경험 공유"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 text-center bg-white/80 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                  <IconComponent className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-black text-brand-green mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Regional Networks */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">지역별 동문 네트워크</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  region: "밴쿠버 (Vancouver)",
                  members: "120+ 동문",
                  activities: ["월 1회 정기 모임", "BBQ 파티", "하이킹 클럽", "취업 정보 공유"]
                },
                {
                  region: "토론토 (Toronto)",
                  members: "85+ 동문",
                  activities: ["분기별 네트워킹", "문화 행사", "스터디 그룹", "창업 모임"]
                },
                {
                  region: "캘거리 (Calgary)",
                  members: "45+ 동문",
                  activities: ["스키 트립", "오일샌드 투어", "비즈니스 모임", "가족 피크닉"]
                },
                {
                  region: "몬트리올 (Montreal)",
                  members: "30+ 동문",
                  activities: ["프렌치 스터디", "문화 체험", "축제 참여", "미식 탐방"]
                },
                {
                  region: "오타와 (Ottawa)",
                  members: "25+ 동문",
                  activities: ["공무원 준비반", "폴리틱스 토론", "박물관 탐방", "겨울 스포츠"]
                },
                {
                  region: "한국 (Seoul)",
                  members: "200+ 동문",
                  activities: ["귀국 동문 모임", "취업 정보 공유", "유학 후기 세션", "가족 모임"]
                }
              ].map((network, index) => (
                <Card key={index} className="p-6 border-2 border-brand-green/20 hover:border-brand-green transition-all">
                  <h3 className="text-xl font-black text-brand-green mb-3">{network.region}</h3>
                  <p className="text-brand-gold font-bold mb-4">{network.members}</p>
                  <div className="space-y-2">
                    {network.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3 mt-2"></div>
                        <span className="text-sm text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Online Platforms */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-brand-green mb-8 text-center">온라인 커뮤니티</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-2 border-yellow-200 bg-yellow-50">
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-black text-yellow-700 mb-2">카카오톡 오픈채팅</h3>
                <p className="text-sm text-gray-600 mb-4">실시간 정보 공유 및 질의응답</p>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  채팅방 참여
                </Button>
              </Card>

              <Card className="p-6 text-center border-2 border-blue-200 bg-blue-50">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-black text-blue-700 mb-2">페이스북 그룹</h3>
                <p className="text-sm text-gray-600 mb-4">공식 소식 및 이벤트 공지</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  그룹 가입
                </Button>
              </Card>

              <Card className="p-6 text-center border-2 border-purple-200 bg-purple-50">
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-black text-purple-700 mb-2">디스코드 서버</h3>
                <p className="text-sm text-gray-600 mb-4">게임 및 취미 활동 커뮤니티</p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  서버 참여
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-black text-brand-green mb-6">네트워킹 성공 사례</h2>
            <p className="text-lg text-gray-600">
              동문 네트워크를 통해 이루어진 실제 성공 스토리들을 만나보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-brand-green">
              <h3 className="text-xl font-black text-brand-green mb-4">취업 연계 성공</h3>
              <p className="text-gray-600 mb-4">
                &quot;토론토 동문 네트워크를 통해 현재 직장의 팀리더를 만났고, 
                그분의 추천으로 지금의 회사에 입사할 수 있었습니다.&quot;
              </p>
              <p className="text-sm text-brand-gold font-medium">- 김○○, UBC 졸업생</p>
            </Card>

            <Card className="p-8 border-l-4 border-brand-gold">
              <h3 className="text-xl font-black text-brand-gold mb-4">창업 파트너 발견</h3>
              <p className="text-gray-600 mb-4">
                &quot;밴쿠버 동문 모임에서 만난 친구와 의기투합해서 함께 스타트업을 
                창업했습니다. 지금은 직원 20명 규모로 성장했어요.&quot;
              </p>
              <p className="text-sm text-brand-green font-medium">- 박○○, SFU 졸업생</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-green mb-6">글로벌 동문 네트워크에 참여하세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            전 세계에 퍼져있는 온앤오프 동문들과 연결되어 
            평생에 걸친 소중한 인맥을 만들어나가세요.
          </p>
          
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
            asChild
          >
            <Link href={`/${params.locale}/contact`}>
              동문 네트워크 가입 신청
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}