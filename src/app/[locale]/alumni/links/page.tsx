'use client';

import React from 'react';
import { ComingSoon } from '@/components/ui/coming-soon';

export default function AlumniLinksPage({ params: _params }: { params: { locale: string } }) {
  return (
    <ComingSoon 
      title="연계 지원 서비스" 
      message="연계 지원 서비스 페이지는 현재 준비 중입니다. 곧 만나보실 수 있습니다." 
      backUrl="/ko"
    />
  );
}