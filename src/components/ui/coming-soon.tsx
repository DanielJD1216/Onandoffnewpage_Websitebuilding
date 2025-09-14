import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
  backUrl?: string;
}

export function ComingSoon({
  title = "Coming Soon",
  message = "이 페이지는 현재 준비 중입니다. 곧 만나보실 수 있습니다.",
  showBackButton = true,
  backUrl = "/ko"
}: ComingSoonProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-brand-green/10 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <Clock className="h-12 w-12 text-brand-green" />
        </div>
        
        <h1 className="text-3xl font-black text-brand-green mb-4">{title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>
        
        {showBackButton && (
          <Button
            className="bg-brand-green hover:bg-brand-green/90 text-white font-bold"
            asChild
          >
            <Link href={backUrl}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              홈으로 돌아가기
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}