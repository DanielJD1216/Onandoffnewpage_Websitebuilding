'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format, addDays, isWeekend } from 'date-fns';
import { ko } from 'date-fns/locale';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Clock, MapPin, Users, Phone, Mail, MessageCircle } from 'lucide-react';
import { submitConsultationBooking } from '@/lib/actions/consultation';

const consultationBookingSchema = z.object({
  // Service Type (NEW)
  serviceType: z.enum(['independent', 'parent-accompanied']),
  
  // Student Information
  studentKoreanName: z.string().min(1, '학생 한글 이름을 입력해주세요'),
  studentEnglishName: z.string().optional(),
  parentName: z.string().optional(),
  currentGrade: z.string().min(1, '현재 학년을 선택해주세요'),
  targetStudyPeriod: z.string().min(1, '유학 예정 시기를 입력해주세요'),
  regionPreference: z.enum(['BC', 'Ontario', 'Alberta', 'Quebec']).optional(),
  
  // Support Services (NEW)
  supportServices: z.array(z.enum([
    'visa-support',
    'guardianship',
    'homestay-matching', 
    'medical-insurance',
    'life-setup',
    'academic-monitoring',
    'university-pathway',
    'emergency-support',
    'parent-immigration'
  ])).optional(),
  
  // Budget Range (NEW)
  budgetRange: z.enum(['under-25k', '25k-35k', '35k-45k', 'over-45k', 'need-breakdown']).optional(),
  
  // Contact Information
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  phone: z.string().optional(),
  kakaoId: z.string().optional(),
  preferredContact: z.enum(['email', 'phone', 'kakao', 'whatsapp']),
  
  // Consultation Scheduling
  consultationType: z.enum(['online', 'offline']),
  preferredDate: z.string().min(1, '상담 희망 날짜를 선택해주세요'),
  preferredTime: z.string().min(1, '상담 희망 시간을 선택해주세요'),
  timezone: z.enum(['KST', 'PST']),
  
  // Additional Information
  message: z.string().optional(),
  urgency: z.enum(['normal', 'urgent']),
  
  // Consent
  consentToContact: z.boolean().refine(val => val === true, '개인정보 수집 및 이용에 동의해주세요')
});

type ConsultationBookingData = z.infer<typeof consultationBookingSchema>;

// Generate available dates (next 14 days, excluding weekends for offline consultations)
const generateAvailableDates = (consultationType: 'online' | 'offline') => {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const date = addDays(today, i);
    
    // For offline consultations, exclude weekends
    if (consultationType === 'offline' && isWeekend(date)) {
      continue;
    }
    
    dates.push({
      value: format(date, 'yyyy-MM-dd'),
      label: format(date, 'M월 d일 (EEE)', { locale: ko }),
      date: date
    });
  }
  
  return dates;
};

// Generate available time slots
const generateTimeSlots = (consultationType: 'online' | 'offline', timezone: 'KST' | 'PST'): Array<{value: string, label: string}> => {
  const slots: Array<{value: string, label: string}> = [];
  
  if (consultationType === 'online') {
    // Online consultations: flexible hours
    const times = timezone === 'KST' 
      ? ['09:00', '10:30', '14:00', '15:30', '19:00', '20:30'] // KST friendly times
      : ['09:00', '10:30', '13:00', '14:30', '16:00', '17:30']; // PST business hours
    
    times.forEach(time => {
      slots.push({
        value: time,
        label: `${time} (${timezone})`
      });
    });
  } else {
    // Offline consultations: Vancouver office hours
    const times = ['09:00', '10:30', '13:00', '14:30', '16:00'];
    
    times.forEach(time => {
      slots.push({
        value: time,
        label: `${time} (PST - 밴쿠버 현지 시간)`
      });
    });
  }
  
  return slots;
};

export default function ConsultationBookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ConsultationBookingData>({
    resolver: zodResolver(consultationBookingSchema),
    defaultValues: {
      supportServices: [],
      preferredContact: 'email',
      consentToContact: false
    }
  });

  const consultationType = watch('consultationType');
  const timezone = watch('timezone');
  const consentToContact = watch('consentToContact');

  const availableDates = generateAvailableDates(consultationType);
  const availableTimeSlots = generateTimeSlots(consultationType, timezone);

  const onSubmit = async (data: ConsultationBookingData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitConsultationBooking({
        student_korean_name: data.studentKoreanName,
        student_english_name: data.studentEnglishName || null,
        parent_name: data.parentName || null,
        email: data.email,
        phone: data.phone || null,
        kakao_id: data.kakaoId || null,
        current_grade: data.currentGrade,
        target_study_period: data.targetStudyPeriod,
        region_preference: data.regionPreference || null,
        consultation_type: data.consultationType,
        preferred_contact: data.preferredContact,
        preferred_date: data.preferredDate,
        preferred_time: data.preferredTime,
        timezone: data.timezone,
        message: data.message || null,
        urgency: data.urgency,
        consent_to_contact: data.consentToContact,
        // Enhanced Phase 1 fields
        service_type: data.serviceType,
        support_services: data.supportServices || [],
        budget_range: data.budgetRange
      });

      if (result.success) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Consultation booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <Card className="p-8 text-center bg-green-50 border-green-200">
        <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Calendar className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-black text-green-700 mb-4">
          상담 예약이 완료되었습니다!
        </h3>
        <div className="bg-white p-6 rounded-xl mb-6">
          <p className="text-green-600 font-bold mb-2">
            📅 예약 확인 이메일을 발송했습니다
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            • 영업일 기준 24시간 내로 상담 확정 안내를 드리겠습니다<br/>
            • 일정 변경이 필요한 경우 즉시 연락드릴 예정입니다<br/>
            • 궁금한 사항이 있으시면 언제든 연락주세요
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button 
            asChild
            className="bg-brand-green hover:bg-brand-green/90"
          >
            <a href="mailto:onf.newpage@gmail.com">이메일 문의</a>
          </Button>
          <Button 
            variant="outline"
            asChild
          >
            <Link href="/ko">홈으로 돌아가기</Link>
          </Button>
        </div>
      </Card>
    );
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
              ${currentStep >= step 
                ? 'bg-brand-green text-white' 
                : 'bg-gray-200 text-gray-500'
              }
            `}>
              {step}
            </div>
            {step < 4 && (
              <div className={`
                w-16 h-1 mx-2
                ${currentStep > step ? 'bg-brand-green' : 'bg-gray-200'}
              `} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Step 1: Service Type & Student Information */}
        {currentStep === 1 && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-brand-green mb-2">
                <Users className="w-8 h-8 inline mr-2" />
                서비스 유형 및 학생 정보
              </h3>
              <p className="text-gray-600 font-medium">
                원하시는 서비스 유형과 학생의 기본 정보를 입력해 주세요
              </p>
            </div>

            {/* Service Type Selection */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-brand-green border-b border-brand-green/20 pb-2">
                서비스 유형 선택 *
              </h4>
              <Select onValueChange={(value: 'independent' | 'parent-accompanied') => setValue('serviceType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="서비스 유형을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="independent">
                    <div className="py-2">
                      <div className="font-semibold">학생 독립 유학</div>
                      <div className="text-sm text-gray-600">만 13세 이상, 학생 혼자 캐나다 유학</div>
                    </div>
                  </SelectItem>
                  <SelectItem value="parent-accompanied">
                    <div className="py-2">
                      <div className="font-semibold">부모 동반 유학</div>
                      <div className="text-sm text-gray-600">전 연령 가능, 가족 이민 포함 종합 서비스</div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="studentKoreanName" className="font-bold text-brand-green">
                  학생 한글 이름 *
                </Label>
                <Input
                  id="studentKoreanName"
                  {...register('studentKoreanName')}
                  placeholder="김학생"
                  className={errors.studentKoreanName ? 'border-red-500' : ''}
                />
                {errors.studentKoreanName && (
                  <p className="text-red-500 text-sm mt-1">{errors.studentKoreanName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="studentEnglishName" className="font-bold text-brand-green">
                  학생 영문 이름
                </Label>
                <Input
                  id="studentEnglishName"
                  {...register('studentEnglishName')}
                  placeholder="Student Kim"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="parentName" className="font-bold text-brand-green">
                보호자 이름
              </Label>
              <Input
                id="parentName"
                {...register('parentName')}
                placeholder="보호자 성명"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="currentGrade" className="font-bold text-brand-green">
                  현재 학년 *
                </Label>
                <Select onValueChange={(value) => setValue('currentGrade', value)}>
                  <SelectTrigger className={errors.currentGrade ? 'border-red-500' : ''}>
                    <SelectValue placeholder="학년을 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {['초등학교 1학년', '초등학교 2학년', '초등학교 3학년', '초등학교 4학년', '초등학교 5학년', '초등학교 6학년',
                      '중학교 1학년', '중학교 2학년', '중학교 3학년',
                      '고등학교 1학년', '고등학교 2학년', '고등학교 3학년'].map((grade) => (
                      <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.currentGrade && (
                  <p className="text-red-500 text-sm mt-1">{errors.currentGrade.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="targetStudyPeriod" className="font-bold text-brand-green">
                  유학 예정 시기 *
                </Label>
                <Input
                  id="targetStudyPeriod"
                  {...register('targetStudyPeriod')}
                  placeholder="예: 2025년 9월"
                  className={errors.targetStudyPeriod ? 'border-red-500' : ''}
                />
                {errors.targetStudyPeriod && (
                  <p className="text-red-500 text-sm mt-1">{errors.targetStudyPeriod.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="regionPreference" className="font-bold text-brand-green">
                선호 지역 (선택사항)
              </Label>
              <Select onValueChange={(value: 'BC' | 'Ontario' | 'Alberta' | 'Quebec') => setValue('regionPreference', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="관심 있는 지역을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BC">브리티시 컬럼비아 (밴쿠버, 버나비)</SelectItem>
                  <SelectItem value="Ontario">온타리오 (토론토 지역)</SelectItem>
                  <SelectItem value="Alberta">알버타 (캘거리, 에드몬턴)</SelectItem>
                  <SelectItem value="Quebec">퀘벡 (몬트리올)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 2: Support Services & Contact Information */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-brand-green mb-2">
                <Phone className="w-8 h-8 inline mr-2" />
                필요 서비스 및 연락처 정보
              </h3>
              <p className="text-gray-600 font-medium">
                필요한 지원 서비스와 연락처 정보를 입력해 주세요
              </p>
            </div>

            {/* Support Services Selection */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-brand-green border-b border-brand-green/20 pb-2">
                관심 있는 지원 서비스 (복수 선택 가능)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'visa-support', label: '학생비자 신청 지원', desc: '비자 서류 준비 및 신청 과정 지원' },
                  { value: 'guardianship', label: '가디언십 서비스', desc: '법적 보호자 역할 및 관리' },
                  { value: 'homestay-matching', label: '홈스테이 매칭 관리', desc: '엄선된 홈스테이 가정 연결 및 관리' },
                  { value: 'medical-insurance', label: '의료보험 가입 지원', desc: '캐나다 의료보험 가입 및 관리' },
                  { value: 'life-setup', label: '현지 생활 정착 지원', desc: '은행 계좌, 핸드폰 개통 등 생활 필수 사항' },
                  { value: 'academic-monitoring', label: '학업 성취도 모니터링', desc: '성적 관리 및 학습 지원' },
                  { value: 'university-pathway', label: '대학 진학 컨설팅', desc: '대학 진학 계획 및 입시 준비' },
                  { value: 'emergency-support', label: '24/7 긴급 지원', desc: '응급상황 시 즉시 대응 서비스' },
                  { value: 'parent-immigration', label: '부모 이민 컨설팅', desc: '부모 동반 이민 절차 지원' }
                ].map((service) => (
                  <label key={service.value} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      onCheckedChange={(checked) => {
                        const currentServices = watch('supportServices') || [];
                        if (checked) {
                          setValue('supportServices', [...currentServices, service.value as 'visa-support' | 'guardianship' | 'homestay-matching' | 'medical-insurance' | 'life-setup' | 'academic-monitoring' | 'university-pathway' | 'emergency-support' | 'parent-immigration']);
                        } else {
                          setValue('supportServices', currentServices.filter(s => s !== service.value));
                        }
                      }}
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-brand-green">{service.label}</div>
                      <div className="text-sm text-gray-600">{service.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-brand-green border-b border-brand-green/20 pb-2">
                연간 예산 범위 (CAD)
              </h4>
              <Select onValueChange={(value: 'under-25k' | '25k-35k' | '35k-45k' | 'over-45k' | 'need-breakdown') => setValue('budgetRange', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="예산 범위를 선택해주세요 (선택사항)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-25k">$25,000 미만</SelectItem>
                  <SelectItem value="25k-35k">$25,000 - $35,000</SelectItem>
                  <SelectItem value="35k-45k">$35,000 - $45,000</SelectItem>
                  <SelectItem value="over-45k">$45,000 이상</SelectItem>
                  <SelectItem value="need-breakdown">상세한 비용 안내 필요</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="email" className="font-bold text-brand-green">
                이메일 *
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="example@email.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="font-bold text-brand-green">
                  전화번호
                </Label>
                <Input
                  id="phone"
                  {...register('phone')}
                  placeholder="010-1234-5678"
                />
              </div>

              <div>
                <Label htmlFor="kakaoId" className="font-bold text-brand-green">
                  카카오톡 ID
                </Label>
                <Input
                  id="kakaoId"
                  {...register('kakaoId')}
                  placeholder="카카오톡 ID"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="preferredContact" className="font-bold text-brand-green">
                선호 연락 방법 *
              </Label>
              <Select onValueChange={(value: 'email' | 'phone' | 'kakao' | 'whatsapp') => setValue('preferredContact', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="연락 방법을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">이메일</SelectItem>
                  <SelectItem value="phone">전화</SelectItem>
                  <SelectItem value="kakao">카카오톡</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 3: Consultation Scheduling */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-brand-green mb-2">
                <Calendar className="w-8 h-8 inline mr-2" />
                상담 일정
              </h3>
              <p className="text-gray-600 font-medium">
                상담 방식과 희망하는 날짜/시간을 선택해 주세요
              </p>
            </div>

            <div>
              <Label htmlFor="consultationType" className="font-bold text-brand-green">
                상담 방식 *
              </Label>
              <Select onValueChange={(value: 'online' | 'offline') => setValue('consultationType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="상담 방식을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      온라인 상담 (Zoom, Google Meet)
                    </div>
                  </SelectItem>
                  <SelectItem value="offline">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      오프라인 상담 (밴쿠버 오피스)
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {consultationType === 'online' && (
              <div>
                <Label htmlFor="timezone" className="font-bold text-brand-green">
                  시간대 *
                </Label>
                <Select onValueChange={(value: 'KST' | 'PST') => setValue('timezone', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="시간대를 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="KST">한국 시간 (KST)</SelectItem>
                    <SelectItem value="PST">밴쿠버 시간 (PST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="preferredDate" className="font-bold text-brand-green">
                  희망 날짜 *
                </Label>
                <Select onValueChange={(value) => setValue('preferredDate', value)}>
                  <SelectTrigger className={errors.preferredDate ? 'border-red-500' : ''}>
                    <SelectValue placeholder="날짜를 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableDates.map((date) => (
                      <SelectItem key={date.value} value={date.value}>
                        {date.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.preferredDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="preferredTime" className="font-bold text-brand-green">
                  희망 시간 *
                </Label>
                <Select onValueChange={(value) => setValue('preferredTime', value)}>
                  <SelectTrigger className={errors.preferredTime ? 'border-red-500' : ''}>
                    <SelectValue placeholder="시간을 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimeSlots.map((slot) => (
                      <SelectItem key={slot.value} value={slot.value}>
                        {slot.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.preferredTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="urgency" className="font-bold text-brand-green">
                상담 긴급도
              </Label>
              <Select onValueChange={(value: 'normal' | 'urgent') => setValue('urgency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="상담 긴급도를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">일반 상담 (정규 일정)</SelectItem>
                  <SelectItem value="urgent">긴급 상담 (빠른 일정 필요)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {consultationType === 'offline' && (
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">밴쿠버 오피스 정보</h4>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      <strong>주소:</strong> 204-1046 Austin Avenue, Coquitlam, BC<br/>
                      <strong>주차:</strong> 무료 주차장 이용 가능<br/>
                      <strong>교통:</strong> 스카이트레인 Burquitlam Station 도보 10분
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Step 4: Additional Information & Consent */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-brand-green mb-2">
                <Mail className="w-8 h-8 inline mr-2" />
                추가 정보 및 동의
              </h3>
              <p className="text-gray-600 font-medium">
                상담을 위한 추가 정보와 개인정보 처리 동의사항
              </p>
            </div>

            <div>
              <Label htmlFor="message" className="font-bold text-brand-green">
                문의 사항 및 특별히 상담받고 싶은 내용
              </Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="예: 특정 학교에 대한 문의, 홈스테이 관련 질문, 비자 관련 궁금한 점 등을 자유롭게 적어주세요."
                rows={5}
                className="resize-none"
              />
            </div>

            <Card className="p-6 bg-gray-50">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="consent"
                  checked={consentToContact}
                  onCheckedChange={(checked) => setValue('consentToContact', checked as boolean)}
                  className={errors.consentToContact ? 'border-red-500' : ''}
                />
                <Label htmlFor="consent" className="text-sm font-medium leading-relaxed">
                  <strong className="text-brand-green">개인정보 수집 및 이용에 동의합니다.</strong><br/>
                  <br/>
                  <strong>수집 항목:</strong> 이름, 연락처, 학년, 상담 관련 정보<br/>
                  <strong>수집 목적:</strong> 유학 상담 제공 및 관련 서비스 안내<br/>
                  <strong>보유 기간:</strong> 상담 완료 후 6개월<br/>
                  <strong>위탁 처리:</strong> 없음 (직접 처리)<br/>
                  <br/>
                  귀하는 개인정보 수집 및 이용 동의를 거부할 권리가 있으나, 
                  동의하지 않을 경우 상담 서비스 제공이 제한될 수 있습니다.
                </Label>
              </div>
              {errors.consentToContact && (
                <p className="text-red-500 text-sm mt-2">{errors.consentToContact.message}</p>
              )}
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">상담 예약 안내</h4>
                  <div className="text-green-700 text-sm space-y-1">
                    <p>• <strong>확정 안내:</strong> 영업일 기준 24시간 내로 상담 확정 이메일을 발송합니다</p>
                    <p>• <strong>일정 변경:</strong> 부득이한 경우 일정 조정 가능 (최소 12시간 전 연락)</p>
                    <p>• <strong>상담 시간:</strong> 약 60-90분 소요 예정</p>
                    <p>• <strong>준비 사항:</strong> 학생 성적표, 관심 학교/지역 정보 (선택사항)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8 border-t">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="px-8"
            >
              이전 단계
            </Button>
          )}

          {currentStep < 4 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="px-8 ml-auto bg-brand-green hover:bg-brand-green/90"
            >
              다음 단계
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-8 ml-auto bg-brand-green hover:bg-brand-green/90 text-lg font-black"
            >
              {isSubmitting ? '예약 중...' : '상담 예약하기'}
            </Button>
          )}
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <Card className="p-6 bg-red-50 border-red-200">
            <p className="text-red-700 font-medium text-center">
              상담 예약 중 오류가 발생했습니다. 다시 시도해 주시거나 직접 연락 주세요.<br/>
              <strong>이메일:</strong> onf.newpage@gmail.com
            </p>
          </Card>
        )}
      </form>
    </div>
  );
}