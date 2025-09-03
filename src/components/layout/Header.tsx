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
    name: '유학 서비스', 
    href: '/ko/services',
    submenu: [
      { name: '학생 단독 유학', href: '/ko/services#independent' },
      { name: '부모 동반 유학', href: '/ko/services#parent-accompanied' }
    ]
  },
  { name: '프로그램', href: '/ko/program' },
  { name: '프로그램 안내', href: '/ko/programs' },
  { name: '성공 사례', href: '/ko/success-stories' },
  { name: '문의하기', href: '/ko/contact' },
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
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] rounded-lg p-1 ml-[150px]"
          >
            <Image
              src="/logo.svg"
              alt="On & Off New Page"
              width={300}
              height={100}
              className="h-14 w-auto -mt-2"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 -mt-2 mr-[100px]">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-lg font-semibold transition-colors hover:text-white flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] rounded px-3 py-2 ${
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
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-inset"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              size="default"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black text-lg px-6 py-3"
              asChild
            >
              <Link href="/ko/contact">
                무료 상담
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f]"
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
                    className={`text-lg font-semibold py-3 block transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] rounded px-3 ${
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
                          className="block py-1 px-2 text-sm text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#114b3f] rounded"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          • {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                className="bg-brand-green hover:bg-brand-green/90 text-white font-black w-full"
                asChild
              >
                <Link href="/ko/contact" onClick={() => setMobileMenuOpen(false)}>
                  무료 상담 신청하기
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}