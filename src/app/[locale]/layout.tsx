import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: 'On & Off New Page - 캐나다 유학 전문 컨설팅',
  description: '밴쿠버 현지에서 직접 운영하는 신뢰할 수 있는 캐나다 교육 컨설팅',
};

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}