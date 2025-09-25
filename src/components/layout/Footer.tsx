import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/constants';

const footerPages = [
  { title: 'Page 0 출발 전 가이드', href: '/ko/pre-departure' },
  { title: 'Page 1 밴쿠버 정착 서비스', href: '/ko/arrival' },
  { title: 'Page 2 온앤오프 캠퍼스 관리 프로그램', href: '/ko/campus' },
  { title: 'Page 3 미래 설계', href: '/ko/future' },
  { title: 'Page 4 졸업 후 새로운 여정', href: '/ko/alumni' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#114b3f] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.svg"
              alt="On & Off New Page"
              width={250}
              height={83}
              className="h-16 w-auto mb-4"
              priority
            />
            <p className="text-gray-300 mb-6 text-base">
              밴쿠버 전문 유학원
            </p>
            
            {/* Vancouver Office */}
            <div className="mb-6">
              <h4 className="font-black text-white mb-3 text-sm">밴쿠버 오피스 (본사)</h4>
              <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
                <p className="flex items-start gap-2">
                  <span>📍</span>
                  <span>{COMPANY_INFO.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <span>{COMPANY_INFO.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+1 (778) 889-8235</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>🕒</span>
                  <span>월-금 9:00-18:00 (PST)</span>
                </p>
              </div>
            </div>

            {/* Korean Office */}
            <div className="mb-6">
              <h4 className="font-black text-white mb-3 text-sm">한국 사무소</h4>
              <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
                <p className="flex items-start gap-2">
                  <span>📍</span>
                  <span>{COMPANY_INFO.koreaOffice.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>👤</span>
                  <span>{COMPANY_INFO.koreaOffice.manager} ({COMPANY_INFO.koreaOffice.managerTitle})</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <span>{COMPANY_INFO.koreaOffice.phoneFormatted}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>💬</span>
                  <span>{COMPANY_INFO.koreaOffice.description}</span>
                </p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="http://pf.kakao.com/_xigxbxmn/chat/" 
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
                href="https://www.instagram.com/onnoff.newpage/?utm_source=ig_web_button_share_sheet"
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
            <h4 className="font-black text-white mb-6 text-lg">빠른 링크</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/ko/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1 leading-relaxed hover:translate-x-1 transform transition-transform"
                >
                  무료 상담 신청
                </Link>
              </li>
              <li>
                <Link 
                  href="/ko/pricing" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1 leading-relaxed hover:translate-x-1 transform transition-transform"
                >
                  요금 안내
                </Link>
              </li>
              <li>
                <Link 
                  href="/ko/pre-departure/consultation-process" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1 leading-relaxed hover:translate-x-1 transform transition-transform"
                >
                  상담 진행 과정
                </Link>
              </li>
            </ul>
          </div>

          {/* Page Navigation */}
          <div className="lg:col-span-1">
            <h4 className="font-black text-white mb-6 text-lg">서비스 페이지</h4>
            <ul className="space-y-4">
              {footerPages.map((page) => (
                <li key={page.title}>
                  <Link
                    href={page.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm leading-relaxed block py-1 hover:translate-x-1 transform transition-transform whitespace-nowrap"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Details */}
          <div className="lg:col-span-1">
            <h4 className="font-black text-white mb-6 text-lg">사업자 정보</h4>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p className="py-1">대표: 이승연 (Cindy)</p>
              <p className="py-1">
                <a 
                  href="https://maps.google.com/?q=204-1046+Austin+Avenue+Coquitlam+BC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-white transition-colors duration-200 flex items-center gap-2 hover:translate-x-1 transform transition-transform"
                >
                  <span>📍</span>
                  <span>지도에서 보기</span>
                </a>
              </p>
            </div>
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