'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  locale: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const particles = particlesRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    if (!container || !title || !subtitle || !cta || !particles || !scrollIndicator) return;

    // Set initial states
    gsap.set([title, subtitle, cta, scrollIndicator], { opacity: 0 });
    gsap.set(title, { y: 100, rotationX: 45 });
    gsap.set(subtitle, { y: 50, filter: 'blur(10px)' });
    gsap.set(cta, { y: 30, scale: 0.8 });
    gsap.set(scrollIndicator, { y: -20 });

    // Create timeline for entrance animations
    const tl = gsap.timeline({ delay: 0.5 });

    // Split title into characters for staggered animation
    const titleText = title.innerText;
    title.innerHTML = titleText.split('').map(char => 
      char === ' ' ? '<span class="space"> </span>' : `<span class="char">${char}</span>`
    ).join('');

    const chars = title.querySelectorAll('.char');
    const spaces = title.querySelectorAll('.space');

    // Smooth wave text animation - cleaner without distortion
    tl.to(title, { opacity: 1, duration: 0.01 })
      .fromTo(chars, 
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out'
        }
      )
      .fromTo(spaces, 
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05
        }, '-=0.6')
      // Animate subtitle with refined timing
      .to(subtitle, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.3')
      // Animate CTA buttons with smooth entrance
      .to(cta, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.2')
      // Animate scroll indicator
      .to(scrollIndicator, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.2');

    // Create floating particles
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: linear-gradient(45deg, #114B3F, #A48242);
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.1};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
      `;
      particles.appendChild(particle);

      // Animate particles
      gsap.to(particle, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        rotation: 360,
        duration: `random(10, 20)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Infinite bounce animation for scroll indicator
    gsap.to(scrollIndicator, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Parallax effect on scroll
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(particles, {
          y: progress * 100,
          duration: 0.3,
          ease: 'none'
        });
        gsap.to([title, subtitle], {
          y: progress * -50,
          opacity: 1 - progress * 0.5,
          duration: 0.3,
          ease: 'none'
        });
      }
    });

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50"
    >
      {/* Animated Background */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(17,75,63,0.05) 0%, rgba(164,130,66,0.03) 50%, transparent 70%)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-dodum font-black text-brand-green mb-6 leading-tight"
        >
          밴쿠버 유학 토탈 솔루션
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-brand-gold mb-8 font-dodum font-medium max-w-4xl mx-auto"
        >
          On & Off New Page와 함께하는 성공적인 캐나다 유학
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href={`/${locale}/contact`}>
            <button
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-brand-green text-brand-ivory font-dodum font-black py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 will-change-transform"
            >
              무료 상담 시작하기
            </button>
          </Link>
          
          <Link href={`/${locale}/programs`}>
            <button
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-white text-brand-green border-3 border-brand-green font-dodum font-black py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 will-change-transform"
            >
              프로그램 자세히 보기
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-brand-green opacity-70"
      >
        <span className="text-sm font-dodum mb-2">아래로 스크롤</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;