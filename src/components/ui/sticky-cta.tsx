'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function StickyCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed right-3 sm:right-6 top-20 z-50">
      {/* Main CTA Button */}
      {!isExpanded && (
        <div className="space-y-2">
          {/* Enhanced premium badge - moved outside and above */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg border-2 border-white transform rotate-3 animate-bounce">
              <div className="flex items-center space-x-1">
                <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span className="text-xs">100% 무료</span>
              </div>
            </div>
          </div>

          {/* Main button container */}
          <div className="relative group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-emerald-600 rounded-xl sm:rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Main button */}
            <Button
              onClick={() => setIsExpanded(true)}
              className="relative bg-gradient-to-r from-brand-green to-emerald-600 hover:from-emerald-600 hover:to-brand-green text-white shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border-2 border-white/20 backdrop-blur-sm group transform hover:scale-105"
              size="lg"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  {/* Sparkle effect */}
                  <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 absolute -top-1 -right-1 text-yellow-300 opacity-80" />
                </div>
                <div className="text-left">
                  <div className="font-black text-base sm:text-lg leading-tight">무료 상담</div>
                  <div className="text-xs opacity-90 font-medium hidden sm:block">지금 문의하세요</div>
                </div>
              </div>
            </Button>
          </div>

        </div>
      )}

      {/* Expanded Options */}
      {isExpanded && (
        <div className="relative">
          {/* Glowing background for panel */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-emerald-600/20 rounded-xl sm:rounded-2xl blur-xl"></div>

          <div className="relative bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl border-2 border-emerald-200/50 p-4 sm:p-5 w-64 sm:w-72 transition-all duration-500">
            {/* Premium Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <div>
                <h3 className="font-black text-brand-green text-lg sm:text-xl flex items-center">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2" />
                  무료 상담 문의
                </h3>
                <p className="text-xs text-gray-600 mt-1">📞 즉시 연결 가능</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Enhanced Contact Options */}
            <div className="space-y-2 sm:space-y-3">
              <Link href="tel:010-4517-1770">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white justify-start p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base">🇰🇷 한국 전화 상담</div>
                      <div className="text-xs opacity-90">010-4517-1770</div>
                    </div>
                  </div>
                </Button>
              </Link>

              <Link href="tel:+17788898235">
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white justify-start p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base">🇨🇦 밴쿠버 오피스</div>
                      <div className="text-xs opacity-90">+1 (778) 889-8235</div>
                    </div>
                  </div>
                </Button>
              </Link>

              <Link href="http://pf.kakao.com/_xigxbxmn/chat/" target="_blank">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white justify-start p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base">💬 카카오톡 상담</div>
                      <div className="text-xs opacity-90">실시간 즉시 연결</div>
                    </div>
                  </div>
                </Button>
              </Link>

            </div>

            {/* Premium Footer */}
            <div className="mt-5 text-center bg-gradient-to-r from-emerald-50 to-green-50 p-3 rounded-xl border border-emerald-200">
              <p className="text-sm text-gray-700 font-medium">
                ✨ 모든 상담은 <span className="font-black text-brand-green bg-yellow-100 px-2 py-1 rounded-full">100% 무료</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">전문 상담사가 직접 답변드립니다</p>
            </div>
          </div>
        </div>
      )}

      {/* Close button when expanded */}
      {isExpanded && (
        <Button
          onClick={() => setIsVisible(false)}
          variant="ghost"
          size="sm"
          className="absolute -top-10 right-0 bg-white/80 hover:bg-white text-gray-600 rounded-full h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}