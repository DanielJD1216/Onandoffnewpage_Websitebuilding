'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  { name: '프로그램 안내', href: '/ko/programs' },
  { name: '성공 사례', href: '/ko/success-stories' },
  { name: '문의하기', href: '/ko/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/ko' && pathname === '/ko') return true;
    if (href !== '/ko' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/ko" className="flex items-center">
            <span className="text-2xl font-black text-brand-green">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-colors hover:text-brand-green flex items-center gap-1 ${
                    isActive(item.href)
                      ? 'text-brand-green border-b-2 border-brand-green'
                      : 'text-gray-700'
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
                        className="block px-4 py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              size="sm"
              className="bg-brand-green hover:bg-brand-green/90 text-white font-black"
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
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`font-medium py-2 block transition-colors ${
                      isActive(item.href)
                        ? 'text-brand-green font-black'
                        : 'text-gray-700'
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
                          className="block py-1 text-sm text-gray-600 hover:text-brand-green"
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