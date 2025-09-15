// Company and Application Constants
export const COMPANY_INFO = {
  name: 'On & Off New Page',
  nameKr: '온앤오프 뉴페이지',
  taglineKr: '캐나다 유학, 꿈을 현실로',
  subtitleKr: '밴쿠버 현지에서 직접 운영하는 신뢰할 수 있는 교육 컨설팅',
  
  // Vancouver Office (Primary)
  address: '204-1046 Austin Avenue, Coquitlam, British Columbia',
  email: 'onf.newpage@gmail.com',
  phone: '778-889-8235',
  
  // Korean Office
  koreaOffice: {
    address: '대구광역시 수성구 수성로69길 65, 상가7동 301호(수성동1가)',
    manager: '박주향',
    managerTitle: '한국사무소 사무장',
    phone: '010-4517-1770',
    phoneFormatted: '+82 10-4517-1770',
    description: '상담 전문'
  },
  
  consultation: {
    responseTimeKr: '영업일 기준 1-2일 내로 연락드리겠습니다. 감사합니다!',
    completionMessageKr: '상담 신청이 완료되었습니다. 곧 연락드리겠습니다.',
    ctaKr: '캐나다 유학의 첫 걸음을 함께 하세요',
    ctaSubtitleKr: '무료 상담을 통해 학생에게 최적의 유학 계획을 세워보세요',
  }
} as const;

export const FEATURES = {
  local: {
    iconKr: '🏢',
    titleKr: '밴쿠버 현지 직접 운영',
    descriptionKr: '밴쿠버 현지 오피스에서 직접 관리하는 신뢰할 수 있는 서비스'
  },
  homestay: {
    iconKr: '🏠', 
    titleKr: '검증된 홈스테이 관리',
    descriptionKr: '엄선된 홈스테이 가정과 지속적인 품질 관리'
  },
  support: {
    iconKr: '🚨',
    titleKr: '24/7 긴급 지원', 
    descriptionKr: '현지에서 24시간 긴급상황 대응 및 학생 케어'
  },
  visa: {
    iconKr: '📋',
    titleKr: '비자 신청 지원 서비스',
    descriptionKr: '학생비자부터 가디언십까지 원스톱 지원'
  }
} as const;

export const CONSULTATION_BENEFITS = {
  free: {
    iconKr: '💰',
    titleKr: '완전 무료',
    descriptionKr: '상담부터 입학까지 별도 수수료 없음'
  },
  customized: {
    iconKr: '🎯', 
    titleKr: '맞춤형 플랜',
    descriptionKr: '학생 개별 상황에 최적화된 유학 계획'
  },
  expertise: {
    iconKr: '🇨🇦',
    titleKr: '현지 전문성',
    descriptionKr: '밴쿠버 현지 경험과 노하우 제공'
  }
} as const;

export const PROGRAMS = {
  bc: {
    iconKr: '🎓',
    titleKr: '브리티시 컬럼비아 (BC)',
    schools: ['버나비 교육청', '코퀴틀람 교육청', '웨스트 밴쿠버 교육청']
  },
  ontario: {
    iconKr: '🏫', 
    titleKr: '온타리오 (Toronto)',
    schools: ['토론토 교육청', '요크 지역 교육청', '할튼 지역 교육청']
  },
  other: {
    iconKr: '🌲',
    titleKr: '기타 주요 지역', 
    schools: ['알버타주 캘거리', '퀘벡주 몬트리올', '맞춤형 지역 상담']
  }
} as const;

export const GRADE_OPTIONS = [
  '초등학교 1학년', '초등학교 2학년', '초등학교 3학년', '초등학교 4학년', '초등학교 5학년', '초등학교 6학년',
  '중학교 1학년', '중학교 2학년', '중학교 3학년', 
  '고등학교 1학년', '고등학교 2학년', '고등학교 3학년'
] as const;

export const CONTACT_METHODS = {
  email: '이메일',
  phone: '전화', 
  kakao: '카카오톡',
  whatsapp: 'WhatsApp'
} as const;

export const CONSULTATION_TYPES = {
  online: '온라인 상담',
  offline: '오프라인 상담 (밴쿠버 지역)'
} as const;

export const REGIONS = {
  BC: '브리티시 컬럼비아',
  Ontario: '온타리오',
  Alberta: '알버타',
  Quebec: '퀘벡'
} as const;