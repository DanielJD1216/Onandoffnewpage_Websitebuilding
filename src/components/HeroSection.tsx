'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const mainTextRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainTextRef.current || !subTextRef.current || !mainContainerRef.current) return;

    // Split text into spans for character-by-character animation
    const splitText = (element: HTMLElement) => {
      const text = element.textContent || '';
      // Split by words and add spacing between them
      const words = text.split(/\s+/);
      element.innerHTML = words
        .map((word, wordIndex) => {
          const wordSpans = word
            .split('')
            .map(char => `<span style="display: inline-block; opacity: 0; transform: translateY(30px) rotateX(-90deg);">${char}</span>`)
            .join('');
          
          // Add spacing after each word except the last one
          const spacing = wordIndex < words.length - 1 
            ? `<span style="display: inline-block; width: 0.6em;">&nbsp;</span>` 
            : '';
          
          return wordSpans + spacing;
        })
        .join('');
      return element.querySelectorAll('span');
    };

    // Split main text into characters
    const mainChars = splitText(mainTextRef.current);
    
    // Set initial state for main container (flag + title) and sub text
    gsap.set(mainContainerRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.95
    });
    
    gsap.set(subTextRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.95
    });

    // Create timeline
    const tl = gsap.timeline({ delay: 0.3 });

    // First animate the main container (flag + title appears together)
    tl.to(mainContainerRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    });

    // Then animate main text characters with stagger
    tl.to(mainChars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      stagger: {
        amount: 0.8,
        from: "start"
      },
      ease: "back.out(1.2)"
    }, "-=0.3");

    // Finally animate sub text
    tl.to(subTextRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-ivory via-white to-brand-ivory/50 py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-gold rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div ref={mainContainerRef} className="flex items-center justify-center gap-6 mb-1">
          {/* Canadian Flag Emoji */}
          <div className="flex-shrink-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            🇨🇦
          </div>
          
          <h1 
            ref={mainTextRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-brand-green tracking-wide font-dodum"
            style={{ letterSpacing: '0.15em', wordSpacing: '0.3em' }}
          >
            밴쿠버  유학  파트너스
          </h1>
        </div>
        
        <p 
          ref={subTextRef}
          className="text-lg md:text-xl lg:text-2xl text-brand-gold font-medium tracking-wide font-dodum mb-6"
        >
          Your complete study abroad solution in Vancouver
        </p>
        
        {/* Decorative line */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
}