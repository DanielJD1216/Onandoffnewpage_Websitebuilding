'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const mainTextRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const koreanPointsRef = useRef<HTMLDivElement>(null);
  const bracketRefs = useRef<HTMLSpanElement[]>([]);
  
  const [animationState, setAnimationState] = useState({
    mainLoaded: false,
    subLoaded: false,
    koreanVisible: false,
    korean1Visible: false,
    korean2Visible: false,
    korean3Visible: false,
    bracketsHighlighted: false
  });

  useEffect(() => {
    // Initial page load animations with timeouts
    setTimeout(() => setAnimationState(prev => ({ ...prev, mainLoaded: true })), 300);
    setTimeout(() => setAnimationState(prev => ({ ...prev, subLoaded: true })), 600);
    setTimeout(() => setAnimationState(prev => ({ ...prev, koreanVisible: true })), 900);
    
    // Sequential Korean text points animation
    setTimeout(() => setAnimationState(prev => ({ ...prev, korean1Visible: true })), 1200);
    setTimeout(() => setAnimationState(prev => ({ ...prev, korean2Visible: true })), 1700);
    setTimeout(() => setAnimationState(prev => ({ ...prev, korean3Visible: true })), 2200);

    // Set up intersection observer for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationState.bracketsHighlighted) {
            setAnimationState(prev => ({ ...prev, bracketsHighlighted: true }));
            
            // Animate brackets with staggered timing and enhanced effects
            bracketRefs.current.forEach((bracket, index) => {
              if (bracket) {
                setTimeout(() => {
                  const colors = ['#059669', '#d97706', '#4f46e5']; // emerald, amber, indigo
                  const glowColors = ['rgba(5, 150, 105, 0.8)', 'rgba(217, 119, 6, 0.8)', 'rgba(79, 70, 229, 0.8)'];
                  
                  bracket.style.backgroundColor = colors[index];
                  bracket.style.boxShadow = `0 0 20px ${glowColors[index]}, 0 4px 12px rgba(0, 0, 0, 0.15)`;
                  bracket.style.transform = 'scale(1.15) rotate(2deg)';
                  bracket.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                  
                  setTimeout(() => {
                    bracket.style.transform = 'scale(1) rotate(0deg)';
                    bracket.style.boxShadow = `0 0 10px ${glowColors[index]}, 0 2px 8px rgba(0, 0, 0, 0.1)`;
                  }, 600);
                }, index * 150);
              }
            });
          }
        });
      },
      { threshold: 0.7 }
    );

    if (koreanPointsRef.current) {
      observer.observe(koreanPointsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50 py-16 lg:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/1.png)'
        }}
      />
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-gold rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div 
          ref={mainContainerRef} 
          className={`mb-3 transition-all duration-700 ease-out ${
            animationState.mainLoaded 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h1 
            ref={mainTextRef}
            className="font-black text-brand-green tracking-tight md:tracking-wide font-dodum text-2xl md:text-4xl lg:text-5xl"
            style={{ 
              letterSpacing: '0.08em', 
              wordSpacing: '0.12em' 
            }}
          >
            밴쿠버  유학  파트너스
          </h1>
        </div>
        
        <p 
          ref={subTextRef}
          className={`text-sm md:text-xl lg:text-2xl text-brand-gold font-bold tracking-wide font-dodum mb-6 whitespace-nowrap transition-all duration-700 ease-out ${
            animationState.subLoaded 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-5 scale-95'
          }`}
        >
          Your complete study abroad solution in Vancouver
        </p>
        
        {/* Korean Points Section */}
        <div 
          ref={koreanPointsRef} 
          className={`mt-8 mb-8 space-y-4 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            animationState.koreanVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}
        >
          <Link href="/ko/pre-departure/consultation-process" className="block">
            <div className={`text-sm md:text-lg lg:text-xl text-gray-800 font-semibold font-dodum tracking-wide transition-all duration-700 ease-out bg-gradient-to-r from-emerald-50/80 to-green-50/80 p-4 rounded-lg border-l-4 border-emerald-500 shadow-sm active:shadow-lg cursor-pointer transform active:scale-[1.02] active:bg-gradient-to-r active:from-emerald-100/90 active:to-green-100/90 md:hover:shadow-lg md:hover:scale-[1.02] md:hover:bg-gradient-to-r md:hover:from-emerald-100/90 md:hover:to-green-100/90 ${
              animationState.korean1Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}>
              <span className="text-emerald-800">상담과 학교 등록</span> — <span 
                ref={el => { if (el) bracketRefs.current[0] = el; }}
                className="bg-emerald-500 text-white font-black px-3 py-1 rounded-full text-sm md:text-base shadow-md transition-all duration-300 active:bg-emerald-600 md:hover:bg-emerald-600"
              >
                전액 무료
              </span>
            </div>
          </Link>
          <Link href="/ko/arrival" className="block">
            <div className={`text-sm md:text-lg lg:text-xl text-gray-800 font-semibold font-dodum tracking-wide transition-all duration-700 ease-out bg-gradient-to-r from-amber-50/80 to-yellow-50/80 p-4 rounded-lg border-l-4 border-amber-500 shadow-sm active:shadow-lg cursor-pointer transform active:scale-[1.02] active:bg-gradient-to-r active:from-amber-100/90 active:to-yellow-100/90 md:hover:shadow-lg md:hover:scale-[1.02] md:hover:bg-gradient-to-r md:hover:from-amber-100/90 md:hover:to-yellow-100/90 ${
              animationState.korean2Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}>
              <span className="text-amber-800">밴쿠버 도착 순간부터</span> — <span 
                ref={el => { if (el) bracketRefs.current[1] = el; }}
                className="bg-amber-500 text-white font-black px-3 py-1 rounded-full text-sm md:text-base shadow-md transition-all duration-300 active:bg-amber-600 md:hover:bg-amber-600"
              >
                정착 지원
              </span>
            </div>
          </Link>
          <Link href="/ko/campus" className="block">
            <div className={`text-sm md:text-lg lg:text-xl text-gray-800 font-semibold font-dodum tracking-wide transition-all duration-700 ease-out bg-gradient-to-r from-indigo-50/80 to-blue-50/80 p-4 rounded-lg border-l-4 border-indigo-500 shadow-sm active:shadow-lg cursor-pointer transform active:scale-[1.02] active:bg-gradient-to-r active:from-indigo-100/90 active:to-blue-100/90 md:hover:shadow-lg md:hover:scale-[1.02] md:hover:bg-gradient-to-r md:hover:from-indigo-100/90 md:hover:to-blue-100/90 ${
              animationState.korean3Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}>
              <span className="text-indigo-800">온·오프 캠퍼스</span> — <span 
                ref={el => { if (el) bracketRefs.current[2] = el; }}
                className="bg-indigo-500 text-white font-black px-3 py-1 rounded-full text-sm md:text-base shadow-md transition-all duration-300 active:bg-indigo-600 md:hover:bg-indigo-600"
              >
                학업 풀케어
              </span>
            </div>
          </Link>
        </div>
        
        {/* Decorative line */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
}