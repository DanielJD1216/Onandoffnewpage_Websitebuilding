import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'On & Off New Page - 캐나다 유학 전문 컨설팅',
  description: '밴쿠버 현지에서 직접 운영하는 신뢰할 수 있는 캐나다 교육 컨설팅',
}

// This layout only applies to non-localized routes (like the redirect page)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}