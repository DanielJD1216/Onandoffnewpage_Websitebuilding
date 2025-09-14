import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/constants';

const footerPages = [
  { title: 'Page 0 인생의 새로운 페이지 · 출발 전 가이드', href: '/ko/pre-departure' },
  { title: 'Page 1 전환점 & 도약의 페이지 · 밴쿠버 정착 서비스', href: '/ko/arrival' },
  { title: 'Page 2 성장의 페이지 · 온앤오프 캠퍼스 관리 프로그램', href: '/ko/campus' },
  { title: 'Page 3 진로의 페이지 · 미래 설계', href: '/ko/future' },
  { title: 'Page 4 졸업 후 새로운 여정', href: '/ko/alumni' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#114b3f] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black text-white mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-300 mb-4">
              밴쿠버 전문 유학원
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 {COMPANY_INFO.address}</p>
              <p>📧 {COMPANY_INFO.email}</p>
              <p>📞 +1 (604) 123-4567</p>
              <p>🕒 월-금 9:00-18:00 (PST)</p>
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

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-black text-white mb-4 text-lg">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ko/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  무료 상담 신청
                </Link>
              </li>
              <li>
                <Link href="/ko/programs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  프로그램 안내
                </Link>
              </li>
              <li>
                <Link href="/ko/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/ko/success-stories" className="text-gray-300 hover:text-white transition-colors text-sm">
                  성공 사례
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Details */}
          <div className="lg:col-span-1">
            <h4 className="font-black text-white mb-4 text-lg">사업자 정보</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>대표: 이승연 (Cindy)</p>
              <p>
                <a 
                  href="https://maps.google.com/?q=204-1046+Austin+Avenue+Coquitlam+BC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-white transition-colors"
                >
                  📍 지도에서 보기
                </a>
              </p>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-white mb-4 text-lg">서비스 페이지</h4>
            <ul className="space-y-3">
              {footerPages.map((page) => (
                <li key={page.title}>
                  <Link
                    href={page.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed block"
                  >
                    {page.title}
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