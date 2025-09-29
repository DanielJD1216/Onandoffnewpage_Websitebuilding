'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Users,
  Globe,
  Star,
  Heart,
  ArrowRight,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function SimpleLandingPage() {
  const coreValues = [
    {
      icon: Users,
      title: '소수 정예, 깊이 있는 관리',
      subtitle: '내 아이에게 꼭 맞는 맞춤 유학',
      description: '대량 송출이 아닌, 한 명 한 명에게 집중하는 1:1 맞춤 케어',
      color: 'from-emerald-500/10 to-emerald-600/5',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Globe,
      title: '한국 & 캐나다 현지 직접 케어',
      subtitle: '밴쿠버 현지 오피스 직접 운영',
      description: '한국에서의 준비부터 캐나다 현지 적응까지 직접 관리합니다',
      color: 'from-blue-500/10 to-blue-600/5',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Star,
      title: '한 명, 한 명이 우리의 브랜드',
      subtitle: '대량 송출이 아닌 개별 맞춤 관리',
      description: '각 학생의 성공이 곧 우리의 성공입니다',
      color: 'from-amber-500/10 to-amber-600/5',
      iconColor: 'text-amber-600',
      borderColor: 'border-amber-200'
    },
    {
      icon: Heart,
      title: '함께 걷는 동반자',
      subtitle: '출발부터 졸업까지 함께합니다',
      description: '단순한 유학원이 아닌, 캐나다에서의 든든한 가족이 되어드립니다',
      color: 'from-rose-500/10 to-rose-600/5',
      iconColor: 'text-rose-600',
      borderColor: 'border-rose-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-brand-ivory/30 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-green mb-8 leading-tight animate-fade-in">
            유학, 보내는게 아니라<br />
            <span className="text-brand-gold">함께 걷는 길</span>입니다
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-fade-in-delay-1">
            소수 정예, 깊이 있는 관리
          </p>

          <p className="text-lg text-gray-600 animate-fade-in-delay-2">
            내 아이에게 꼭 맞는 맞춤 유학
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-green mb-4">
              우리가 다른 이유
            </h2>
            <p className="text-lg text-gray-600">
              온앤오프 뉴페이지만의 특별한 약속
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden border-2 ${value.borderColor} p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color}`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 ${value.iconColor}`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-black text-brand-green mb-2">
                      {value.title}
                    </h3>

                    <p className="text-lg font-bold text-brand-gold mb-3">
                      {value.subtitle}
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute -bottom-2 -right-2 w-20 h-20 ${value.iconColor} opacity-5`}>
                    <Sparkles className="w-full h-full" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-brand-green/90">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">100%</div>
              <div className="text-brand-ivory text-sm md:text-base">학부모 만족도</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-brand-ivory text-sm md:text-base">현지 긴급 지원</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">1:1</div>
              <div className="text-brand-ivory text-sm md:text-base">맞춤 관리</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">365</div>
              <div className="text-brand-ivory text-sm md:text-base">일 함께합니다</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-green mb-6">
            지금 시작하세요
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            대형 유학원과는 다른, 진짜 케어를 경험하세요
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <Link href="/ko">
                <span className="mr-2">온앤오프 뉴페이지 바로가기</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-black text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <Link href="/ko/contact">
                무료 상담 신청
              </Link>
            </Button>
          </div>

          {/* Location Info */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-green" />
              <span>서울 본사</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-green" />
              <span>밴쿠버 현지 오피스</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2024 온앤오프 뉴페이지. All rights reserved.</p>
          <p className="mt-2">한 명, 한 명이 우리의 브랜드입니다</p>
        </div>
      </footer>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
}