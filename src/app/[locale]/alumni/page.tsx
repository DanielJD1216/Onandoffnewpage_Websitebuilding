'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FeatureCard } from '@/components/ui/feature-card';
import { ContactMethodCard } from '@/components/ui/contact-method-card';
import {
  Users,
  Heart,
  Briefcase,
  BookOpen,
  GraduationCap,
  Building2,
  Globe,
  Target,
  CheckCircle,
  Award,
  MessageCircle,
  Calendar,
  Handshake,
  MapPin,
  Coffee,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

function TabButton({ isActive, onClick, icon: Icon, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
        isActive
          ? 'bg-brand-green text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-green border border-gray-200'
      }`}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );
}

export default function AlumniPage({ params: _params }: { params: { locale: string } }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '동문 네트워크 개요', icon: Users },
    { id: 'network', label: '동문 네트워킹', icon: Handshake },
    { id: 'community', label: '커뮤니티 활동', icon: Heart },
    { id: 'links', label: '연계 지원', icon: Briefcase }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <Users className="w-5 h-5" />
                <span>졸업 후 새로운 여정</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-brand-green leading-tight">
                동문 네트워크와 함께하는<br />
                <span className="text-brand-gold">평생 파트너십</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                졸업이 끝이 아닙니다. On & Off New Page와 함께한 여정은 졸업 후에도 계속됩니다.
                동문 네트워크를 통해 지속적인 성장과 기회를 만나보세요.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon="👥"
                title="동문 네트워킹"
                description="캐나다 전역의 동문들과 연결되어 정보 공유, 멘토링, 취업 기회를 얻을 수 있습니다."
                variant="premium"
              />
              <FeatureCard
                icon="❤️"
                title="커뮤니티 활동"
                description="정기적인 모임, 워크샵, 문화 행사를 통해 지속적인 관계를 유지하고 새로운 인연을 만들어갑니다."
                variant="premium"
              />
              <FeatureCard
                icon="💼"
                title="연계 지원 서비스"
                description="코업, 취업, 이민 전문 파트너사와의 연계를 통해 졸업 후 목표 달성을 지원합니다."
                variant="premium"
              />
            </div>

            {/* Alumni Network Stats */}
            <Card className="p-8 bg-gradient-to-r from-brand-green to-brand-green/90 text-white">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black mb-2">500+</div>
                  <div className="text-lg font-semibold opacity-90">졸업생</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">85%</div>
                  <div className="text-lg font-semibold opacity-90">대학 진학률</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">60+</div>
                  <div className="text-lg font-semibold opacity-90">협력 기업</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">15+</div>
                  <div className="text-lg font-semibold opacity-90">연간 네트워킹 이벤트</div>
                </div>
              </div>
            </Card>

            {/* Alumni Success Stories */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-brand-green text-center">동문 성공 스토리</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-white to-brand-ivory/20">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-brand-green mb-2">김○○ 학생</h3>
                      <p className="text-gray-600 mb-3">UBC 경영학과 진학 → 글로벌 컨설팅 회사 취업</p>
                      <p className="text-sm text-gray-700">
                        "On & Off의 체계적인 관리 덕분에 캐나다 생활에 빠르게 적응할 수 있었고,
                        동문 네트워크를 통해 소중한 멘토를 만날 수 있었습니다."
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-white to-brand-ivory/20">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-brand-green mb-2">박○○ 학생</h3>
                      <p className="text-gray-600 mb-3">BCIT 컴퓨터 공학 → 테크 스타트업 창업</p>
                      <p className="text-sm text-gray-700">
                        "동문 네트워크에서 만난 선배들의 조언과 지원으로 캐나다에서 성공적으로
                        스타트업을 창업할 수 있었습니다."
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <Handshake className="w-5 h-5" />
                <span>동문 네트워킹</span>
              </div>
              <h1 className="text-4xl font-black text-brand-green">
                동문들과 함께 성장하는<br />
                <span className="text-brand-gold">네트워킹 플랫폼</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                On & Off New Page 졸업생들이 서로 연결되어 정보를 공유하고,
                멘토링을 주고받으며, 새로운 기회를 창출하는 공간입니다.
              </p>
            </div>

            {/* Networking Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon="💬"
                title="온라인 커뮤니티"
                description="전용 온라인 플랫폼에서 24/7 동문들과 소통하고 정보를 공유할 수 있습니다."
                variant="benefit"
              />
              <FeatureCard
                icon="🤝"
                title="멘토-멘티 매칭"
                description="경험이 풍부한 선배 동문과 신입 동문을 연결하여 1:1 멘토링을 제공합니다."
                variant="benefit"
              />
              <FeatureCard
                icon="📅"
                title="정기 모임"
                description="월 1회 정기 모임을 통해 오프라인에서도 깊이 있는 관계를 형성합니다."
                variant="benefit"
              />
              <FeatureCard
                icon="💼"
                title="취업 정보 공유"
                description="채용 공고, 인턴십 기회, 업계 트렌드 등 취업 관련 정보를 실시간으로 공유합니다."
                variant="benefit"
              />
              <FeatureCard
                icon="🎯"
                title="분야별 네트워킹"
                description="전공 분야, 관심사별로 소그룹을 형성하여 더욱 전문적인 네트워킹이 가능합니다."
                variant="benefit"
              />
              <FeatureCard
                icon="🌍"
                title="글로벌 네트워크"
                description="캐나다뿐만 아니라 한국 및 기타 국가 동문들과도 연결됩니다."
                variant="benefit"
              />
            </div>

            {/* Networking Process */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-brand-green text-center">네트워킹 참여 방법</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="p-6 text-center bg-gradient-to-br from-white to-blue-50/50 border border-blue-200/50">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">1</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-green mb-2">회원 등록</h3>
                  <p className="text-sm text-gray-700">졸업과 동시에 자동으로 동문 네트워크에 가입됩니다.</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-to-br from-white to-green-50/50 border border-green-200/50">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">2</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-green mb-2">프로필 작성</h3>
                  <p className="text-sm text-gray-700">관심사, 전공, 목표 등을 포함한 프로필을 작성합니다.</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-to-br from-white to-yellow-50/50 border border-yellow-200/50">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">3</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-green mb-2">매칭 & 연결</h3>
                  <p className="text-sm text-gray-700">AI 매칭 시스템으로 최적의 멘토나 네트워킹 파트너를 찾습니다.</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-to-br from-white to-purple-50/50 border border-purple-200/50">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">4</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-green mb-2">활발한 소통</h3>
                  <p className="text-sm text-gray-700">온라인/오프라인 활동에 참여하여 지속적인 관계를 구축합니다.</p>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <Heart className="w-5 h-5" />
                <span>커뮤니티 활동</span>
              </div>
              <h1 className="text-4xl font-black text-brand-green">
                함께하는 즐거움,<br />
                <span className="text-brand-gold">따뜻한 커뮤니티</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                단순한 동문 모임을 넘어, 서로를 응원하고 성장을 함께하는
                따뜻한 커뮤니티에서 평생의 인연을 만들어가세요.
              </p>
            </div>

            {/* Community Activities */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon="☕"
                title="월간 커피챗"
                description="매월 다양한 카페에서 만나 근황을 나누고 서로의 이야기를 공유하는 시간입니다."
                variant="large"
              />
              <FeatureCard
                icon="🎓"
                title="스킬 워크샵"
                description="동문들이 직접 진행하는 전문 스킬 워크샵으로 함께 성장합니다."
                variant="large"
              />
              <FeatureCard
                icon="🌸"
                title="문화 행사"
                description="한국 전통 문화를 캐나다에서 함께 즐기는 특별한 문화 행사들을 개최합니다."
                variant="large"
              />
              <FeatureCard
                icon="🏃‍♂️"
                title="스포츠 모임"
                description="축구, 농구, 하이킹 등 다양한 스포츠 활동으로 건강한 네트워킹을 즐깁니다."
                variant="large"
              />
              <FeatureCard
                icon="📚"
                title="독서 클럽"
                description="월 1권의 책을 함께 읽고 토론하며 지적 성장을 함께합니다."
                variant="large"
              />
              <FeatureCard
                icon="🎤"
                title="토크 콘서트"
                description="성공한 동문들의 경험담과 인사이트를 공유하는 영감적인 시간입니다."
                variant="large"
              />
            </div>

            {/* Upcoming Events */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-brand-green text-center">다가오는 이벤트</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 font-bold mb-1">2024년 3월 15일</div>
                      <h3 className="text-xl font-black text-brand-green mb-2">춘계 네트워킹 데이</h3>
                      <p className="text-gray-700 mb-3">새 학기를 맞아 신입 동문들을 환영하는 대규모 네트워킹 이벤트</p>
                      <div className="text-sm text-gray-600">📍 벤쿠버 컨벤션 센터</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-green-600 font-bold mb-1">2024년 3월 22일</div>
                      <h3 className="text-xl font-black text-brand-green mb-2">창업 워크샵</h3>
                      <p className="text-gray-700 mb-3">성공한 동문 창업가가 전하는 캐나다 창업 노하우</p>
                      <div className="text-sm text-gray-600">📍 온라인 & 오프라인 동시 진행</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Community Guidelines */}
            <Card className="p-8 bg-gradient-to-r from-brand-green to-brand-green/90 text-white">
              <h2 className="text-2xl font-black mb-6 text-center">커뮤니티 가치</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">상호 존중</h3>
                  <p className="text-sm opacity-90">다양한 배경과 경험을 가진 모든 동문을 존중합니다</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">함께 성장</h3>
                  <p className="text-sm opacity-90">개인의 성공을 넘어 함께 성장하는 것을 지향합니다</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">나눔과 기여</h3>
                  <p className="text-sm opacity-90">배운 것을 나누고 커뮤니티에 기여하는 문화를 만듭니다</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'links':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 rounded-full px-6 py-2 text-brand-green font-bold">
                <Briefcase className="w-5 h-5" />
                <span>연계 지원 서비스</span>
              </div>
              <h1 className="text-4xl font-black text-brand-green">
                졸업 후 성공을 위한<br />
                <span className="text-brand-gold">전문 파트너 연계</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                코업, 취업, 이민까지 졸업 후 모든 단계에서 검증된 전문 파트너사와의
                연계를 통해 여러분의 목표 달성을 지원합니다.
              </p>
            </div>

            {/* Partner Categories */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 group hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-green mb-4">코업 & 인턴십</h3>
                <p className="text-gray-700 mb-6">캐나다 주요 기업들과의 파트너십을 통해 실무 경험 기회를 제공합니다.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>대기업 코업 프로그램</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>스타트업 인턴십</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>정부 기관 프로그램</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50 group hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-green mb-4">취업 지원</h3>
                <p className="text-gray-700 mb-6">전문 헤드헌터 및 HR 컨설팅 회사와 연계하여 취업을 지원합니다.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>이력서 & 커버레터 작성</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>면접 준비 & 코칭</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>채용 정보 우선 제공</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/50 group hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-green mb-4">이민 컨설팅</h3>
                <p className="text-gray-700 mb-6">RCIC 자격을 갖춘 전문 이민 컨설턴트와의 연계로 안전한 이민을 지원합니다.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>영주권 신청 지원</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>PGWP 연장 컨설팅</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Express Entry 전략</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Featured Partners */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-brand-green text-center">주요 파트너사</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-black text-brand-green mb-2">테크 기업</h3>
                  <p className="text-sm text-gray-600">Amazon, Microsoft, Shopify 등</p>
                </Card>
                <Card className="p-6 text-center bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-black text-brand-green mb-2">교육 기관</h3>
                  <p className="text-sm text-gray-600">UBC, SFU, BCIT 등</p>
                </Card>
                <Card className="p-6 text-center bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-black text-brand-green mb-2">이민법무법인</h3>
                  <p className="text-sm text-gray-600">RCIC 공인 컨설턴트 그룹</p>
                </Card>
                <Card className="p-6 text-center bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-black text-brand-green mb-2">헤드헌팅</h3>
                  <p className="text-sm text-gray-600">Robert Half, Randstad 등</p>
                </Card>
              </div>
            </div>

            {/* Support Process */}
            <Card className="p-8 bg-gradient-to-r from-brand-green to-brand-green/90 text-white">
              <h2 className="text-2xl font-black mb-8 text-center">연계 지원 프로세스</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-black">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">상담 신청</h3>
                  <p className="text-sm opacity-90">목표와 현재 상황을 상담을 통해 파악합니다</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-black">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">파트너 매칭</h3>
                  <p className="text-sm opacity-90">최적의 전문 파트너사를 연결해드립니다</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-black">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">지원 프로그램</h3>
                  <p className="text-sm opacity-90">맞춤형 지원 프로그램에 참여합니다</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-black">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">목표 달성</h3>
                  <p className="text-sm opacity-90">지속적인 지원으로 목표를 달성합니다</p>
                </div>
              </div>
            </Card>

            {/* Contact CTA */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-black text-brand-green">연계 지원이 필요하신가요?</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                졸업 후 진로에 대해 고민이 있으시거나 전문적인 지원이 필요하시다면
                언제든지 연락주세요. 맞춤형 솔루션을 제공해드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green/90 text-white font-black px-8 py-4 rounded-full shadow-lg"
                  asChild
                >
                  <a href="/ko/contact">무료 상담 신청</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-black px-8 py-4 rounded-full"
                  asChild
                >
                  <a href="http://pf.kakao.com/_xigxbxmn/chat/" target="_blank" rel="noopener noreferrer">
                    카카오톡 문의
                  </a>
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-green to-brand-green/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-2 text-sm font-bold">
              <Users className="w-4 h-4" />
              <span>Page 4</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black">Alumni Network</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              졸업 후 새로운 여정 · 평생 파트너십
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-4 py-6 scrollbar-hide">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                icon={tab.icon}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-12">
        {renderTabContent()}
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-black text-brand-green">동문 네트워크에 참여하고 싶으신가요?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              졸업생이시라면 언제든지 동문 네트워크에 참여하실 수 있습니다.
              새로운 기회와 인연을 만들어보세요.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <ContactMethodCard
                method="kakao"
                title="카카오톡 문의"
                subtitle="빠른 상담"
                description="카카오톡으로 빠르고 편리하게 문의하실 수 있습니다."
                contact="@onnoff_newpage"
                action="http://pf.kakao.com/_xigxbxmn/chat/"
                buttonText="카톡 상담하기"
                external={true}
                variant="premium"
              />
              <ContactMethodCard
                method="email"
                title="이메일 문의"
                subtitle="자세한 상담"
                description="자세한 내용과 함께 문의사항을 보내주세요."
                contact="info@onnoffnewpage.com"
                action="mailto:info@onnoffnewpage.com"
                buttonText="이메일 보내기"
                external={true}
                variant="premium"
              />
              <ContactMethodCard
                method="whatsapp"
                title="전화 상담"
                subtitle="직접 상담"
                description="직접 통화를 통해 상세한 상담을 받아보세요."
                contact="+1 (604) 123-4567"
                action="tel:+16041234567"
                buttonText="전화하기"
                external={false}
                variant="premium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}