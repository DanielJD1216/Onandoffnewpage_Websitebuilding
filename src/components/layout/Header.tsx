'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/lib/constants';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: '홈', href: '/ko' },
  { 
    name: 'Page 0', 
    href: '/ko/pre-departure',
    hoverTitle: '인생의 새로운 페이지 · 출발 전 가이드',
    submenu: [
      { name: '인생의 새로운 페이지 (출발 전 가이드)', href: '/ko/pre-departure' },
      { name: '상담 절차 안내', href: '/ko/pre-departure/consultation-process' },
      { name: '지역/학교 선택 (무료)', href: '/ko/pre-departure/regions-schools' },
      { name: '입학 절차 안내 (무료)', href: '/ko/pre-departure/admissions-steps' },
      { name: '학교 등록 대행 (무료)', href: '/ko/pre-departure/registration-service' },
      { name: '비자 지원 (+$300/인)', href: '/ko/pre-departure/visa-support' }
    ]
  },
  { 
    name: 'Page 1', 
    href: '/ko/arrival',
    hoverTitle: '전환점 & 도약의 페이지 · 밴쿠버 정착 서비스',
    submenu: [
      { name: '공항 픽업', href: '/ko/arrival/airport-pickup' },
      { name: '홈스테이 배정', href: '/ko/arrival/homestay' },
    ]
  },
  { 
    name: 'Page 2', 
    href: '/ko/campus',
    hoverTitle: '성장의 페이지 · 온앤오프 캠퍼스 관리 프로그램',
    submenu: [
      { name: '프로그램 개요', href: '/ko/campus/overview' },
      { name: '학업관리', href: '/ko/campus/academics' },
      { name: '생활관리', href: '/ko/campus/life-management' },
      { name: '부모 소통', href: '/ko/campus/parent-communication' },
      { name: '멘토링', href: '/ko/campus/mentoring' },
      { name: '플랜/요금', href: '/ko/campus/plans' }
    ]
  },
  { 
    name: 'Page 3', 
    href: '/ko/future',
    hoverTitle: '진로의 페이지 · 미래 설계',
    submenu: [
      { name: '대학/고등 진학 컨설팅', href: '/ko/future/admissions-consulting' },
      { name: '전공 선택 가이드', href: '/ko/future/major-guide' },
      { name: '커리어 멘토링 & 포트폴리오', href: '/ko/future/career-portfolio' }
    ]
  },
  { 
    name: 'Page 4', 
    href: '/ko/alumni',
    hoverTitle: '졸업 후 새로운 여정',
    submenu: [
      { name: '동문 네트워킹', href: '/ko/alumni/network' },
      { name: '커뮤니티 활동', href: '/ko/alumni/community' },
      { name: '연계 지원 (코업/취업/이민 파트너 소개)', href: '/ko/alumni/links' }
    ]
  },
  { 
    name: '문의하기', 
    href: '/ko/contact',
    submenu: [
      { name: '무료 상담 문의', href: '/ko/contact' },
      { name: '가격 안내', href: '/ko/pricing' }
    ]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle keyboard navigation for mobile menu
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (href === '/ko' && pathname === '/ko') return true;
    if (href !== '/ko' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-[#114b3f] shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/ko" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] rounded-lg p-1 md:ml-[150px]"
          >
            <Image
              src="/logo.svg"
              alt="On & Off New Page"
              width={250}
              height={83}
              className="h-10 w-auto mt-1"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 mr-[100px]">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-base font-semibold transition-colors hover:text-white flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] rounded px-3 py-2 ${
                    isActive(item.href)
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-80 z-50">
                    <div className="bg-white rounded-lg shadow-lg border p-4">
                    {item.hoverTitle && (
                      <div className="mb-3 pb-2 border-b border-gray-200">
                        <h4 className="text-sm font-semibold text-brand-green">{item.hoverTitle}</h4>
                      </div>
                    )}
                    {item.submenu.map((subitem, index) => {
                      const isFree = subitem.name.includes('(무료)');
                      
                      if (isFree) {
                        // Split the text to style only the (무료) part
                        const parts = subitem.name.split('(무료)');
                        return (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-inset"
                          >
                            {parts[0]}<span className="text-green-600 font-black text-base"> (무료)</span>{parts[1] || ''}
                          </Link>
                        );
                      }
                      
                      return (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-inset"
                        >
                          {subitem.name}
                        </Link>
                      );
                    })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a 
                href="http://pf.kakao.com/_xigxbxmn/chat/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/kakao-icon.svg"
                  alt="KakaoTalk"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </a>
              <a 
                href="https://instagram.com/your_instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/instagram-icon.svg"
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </a>
            </div>
            
            <Button
              size="default"
              className="bg-brand-gold hover:bg-brand-gold/90 text-white font-black text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 border-2 border-brand-gold hover:border-white"
              asChild
            >
              <Link href="/ko/contact">
                무료 상담 문의
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-3 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden py-4 border-t border-gray-200"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
            onKeyDown={handleKeyDown}
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={`text-lg font-semibold py-4 px-4 block transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] rounded min-h-[44px] flex items-center ${
                      isActive(item.href)
                        ? 'text-white font-black'
                        : 'text-gray-300'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          role="menuitem"
                          className="block py-3 px-4 text-sm text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] rounded min-h-[44px] flex items-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          • {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Social Media Icons for Mobile */}
              <div className="flex items-center justify-center space-x-4 py-4">
                <a 
                  href="http://pf.kakao.com/_xigxbxmn/chat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/kakao-icon.svg"
                    alt="KakaoTalk"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </a>
                <a 
                  href="https://instagram.com/your_instagram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/instagram-icon.svg"
                    alt="Instagram"
                    width={56}
                    height={56}
                    className="w-14 h-14"
                  />
                </a>
              </div>
              
              <Button
                className="bg-brand-gold hover:bg-brand-gold/90 text-white font-black w-full rounded-full shadow-lg py-4 text-lg border-2 border-brand-gold"
                asChild
              >
                <Link href="/ko/contact" onClick={() => setMobileMenuOpen(false)}>
                  무료 상담 문의하기
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}