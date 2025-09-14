'use client';

import React from 'react';
import { ComingSoon } from '@/components/ui/coming-soon';

export default function AlumniNetworkPage({ params: _params }: { params: { locale: string } }) {
  return (
    <ComingSoon 
      title="동문 네트워킹" 
      message="동문 네트워킹 페이지는 현재 준비 중입니다. 곧 만나보실 수 있습니다." 
      backUrl="/ko"
    />
  );
}