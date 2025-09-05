import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/constants';

const footerNavigation = {
  services: {
    title: '서비스',
    links: [
      { name: '유학 상담', href: '/ko/contact' },
      { name: '프로그램 안내', href: '/ko/programs' },
      { name: '홈스테이', href: '/ko/programs#homestay' },
      { name: '비자 지원', href: '/ko/programs#visa' },
    ],
  },
  company: {
    title: '회사',
    links: [
      { name: '회사 소개', href: '/ko/about' },
      { name: '연락처', href: '/ko/about#contact' },
      { name: '오시는 길', href: '/ko/about#location' },
    ],
  },
  programs: {
    title: '주요 프로그램',
    links: [
      { name: 'BC주 프로그램', href: '/ko/programs#bc' },
      { name: '온타리오 프로그램', href: '/ko/programs#ontario' },
      { name: '알버타 프로그램', href: '/ko/programs#alberta' },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#114b3f] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-white mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-300 mb-4">
              {COMPANY_INFO.subtitleKr}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 {COMPANY_INFO.address}</p>
              <p>📧 {COMPANY_INFO.email}</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="https://pf.kakao.com/_your_kakao_id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/kakao-icon.svg"
                  alt="KakaoTalk"
                  width={44}
                  height={44}
                  className="w-11 h-11"
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
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-white mb-4">
              {footerNavigation.services.title}
            </h4>
            <ul className="space-y-2">
              {footerNavigation.services.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black text-white mb-4">
              {footerNavigation.company.title}
            </h4>
            <ul className="space-y-2">
              {footerNavigation.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-black text-white mb-4">
              {footerNavigation.programs.title}
            </h4>
            <ul className="space-y-2">
              {footerNavigation.programs.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/ko/privacy"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/ko/terms"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}