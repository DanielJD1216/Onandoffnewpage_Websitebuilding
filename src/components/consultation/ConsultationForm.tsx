'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GRADE_OPTIONS, CONTACT_METHODS, CONSULTATION_TYPES, REGIONS, COMPANY_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { submitConsultation } from '@/lib/actions/consultation';

const consultationSchema = z.object({
  studentKoreanName: z.string().min(1, '학생 한글 이름을 입력해주세요'),
  studentEnglishName: z.string().optional(),
  parentName: z.string().optional(),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  phone: z.string().optional(),
  kakaoId: z.string().optional(),
  currentGrade: z.string().min(1, '현재 학년을 선택해주세요'),
  targetStudyPeriod: z.string().min(1, '유학 예정 시기를 입력해주세요'),
  regionPreference: z.enum(['BC', 'Ontario', 'Alberta', 'Quebec']).optional(),
  consultationType: z.enum(['online', 'offline']),
  preferredContact: z.enum(['email', 'phone', 'kakao', 'whatsapp']),
  message: z.string().optional(),
  consentToContact: z.boolean().refine(val => val === true, '개인정보 수집 및 이용에 동의해주세요')
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      consultationType: 'online',
      preferredContact: 'email',
      consentToContact: false
    }
  });

  const consultationType = watch('consultationType');
  const consentToContact = watch('consentToContact');

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitConsultation({
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
        message: data.message || null,
        consent_to_contact: data.consentToContact
      });

      if (result.success) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Consultation submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <Card className="p-8 text-center bg-green-50 border-green-200">
        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-black text-green-700 mb-2">
          {COMPANY_INFO.consultation.completionMessageKr}
        </h3>
        <p className="text-green-600 font-medium">
          {COMPANY_INFO.consultation.responseTimeKr}
        </p>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Student Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-brand-green border-b border-brand-green/20 pb-2">
          학생 정보
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="studentKoreanName" className="font-black text-brand-green">
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
            <Label htmlFor="studentEnglishName" className="font-black text-brand-green">
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
          <Label htmlFor="parentName" className="font-black text-brand-green">
            보호자 이름
          </Label>
          <Input
            id="parentName"
            {...register('parentName')}
            placeholder="보호자 성명"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="currentGrade" className="font-black text-brand-green">
              현재 학년 *
            </Label>
            <Select onValueChange={(value) => setValue('currentGrade', value)}>
              <SelectTrigger className={errors.currentGrade ? 'border-red-500' : ''}>
                <SelectValue placeholder="현재 학년을 선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="초등학교 1학년">초등학교 1학년</SelectItem>
                <SelectItem value="초등학교 2학년">초등학교 2학년</SelectItem>
                <SelectItem value="초등학교 3학년">초등학교 3학년</SelectItem>
                <SelectItem value="초등학교 4학년">초등학교 4학년</SelectItem>
                <SelectItem value="초등학교 5학년">초등학교 5학년</SelectItem>
                <SelectItem value="초등학교 6학년">초등학교 6학년</SelectItem>
                <SelectItem value="중학교 1학년">중학교 1학년</SelectItem>
                <SelectItem value="중학교 2학년">중학교 2학년</SelectItem>
                <SelectItem value="중학교 3학년">중학교 3학년</SelectItem>
                <SelectItem value="고등학교 1학년">고등학교 1학년</SelectItem>
                <SelectItem value="고등학교 2학년">고등학교 2학년</SelectItem>
                <SelectItem value="고등학교 3학년">고등학교 3학년</SelectItem>
              </SelectContent>
            </Select>
            {errors.currentGrade && (
              <p className="text-red-500 text-sm mt-1">{errors.currentGrade.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="targetStudyPeriod" className="font-black text-brand-green">
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
          <Label htmlFor="regionPreference" className="font-black text-brand-green">
            선호 지역
          </Label>
          <Select onValueChange={(value: keyof typeof REGIONS) => setValue('regionPreference', value)}>
            <SelectTrigger>
              <SelectValue placeholder="선호 지역을 선택해주세요 (선택사항)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BC">브리티시 컬럼비아</SelectItem>
              <SelectItem value="Ontario">온타리오</SelectItem>
              <SelectItem value="Alberta">알버타</SelectItem>
              <SelectItem value="Quebec">퀘벡</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-brand-green border-b border-brand-green/20 pb-2">
          연락처 정보
        </h3>

        <div>
          <Label htmlFor="email" className="font-black text-brand-green">
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

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="font-black text-brand-green">
              전화번호
            </Label>
            <Input
              id="phone"
              {...register('phone')}
              placeholder="010-1234-5678"
            />
          </div>

          <div>
            <Label htmlFor="kakaoId" className="font-black text-brand-green">
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
          <Label htmlFor="preferredContact" className="font-black text-brand-green">
            선호 연락 방법 *
          </Label>
          <Select onValueChange={(value: keyof typeof CONTACT_METHODS) => setValue('preferredContact', value)}>
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

      {/* Consultation Preferences */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-brand-green border-b border-brand-green/20 pb-2">
          상담 방식
        </h3>

        <div>
          <Label htmlFor="consultationType" className="font-black text-brand-green">
            상담 방식 *
          </Label>
          <Select onValueChange={(value: keyof typeof CONSULTATION_TYPES) => setValue('consultationType', value)} defaultValue="online">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="online">온라인 상담</SelectItem>
              <SelectItem value="offline">오프라인 상담 (밴쿠버 지역)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="font-black text-brand-green">
            문의 사항
          </Label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="궁금한 사항이나 특별히 상담받고 싶은 내용이 있으시면 적어주세요."
            rows={4}
          />
        </div>
      </div>

      {/* Consent */}
      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Checkbox 
            id="consent"
            checked={consentToContact}
            onCheckedChange={(checked) => setValue('consentToContact', checked as boolean)}
            className={errors.consentToContact ? 'border-red-500' : ''}
          />
          <Label htmlFor="consent" className="text-sm font-medium leading-relaxed">
            개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 
            상담 완료 후 6개월 이내에 파기됩니다.
          </Label>
        </div>
        {errors.consentToContact && (
          <p className="text-red-500 text-sm">{errors.consentToContact.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-brand-green hover:bg-brand-green/90 text-white py-4 text-lg font-black"
          disabled={isSubmitting}
        >
          {isSubmitting ? '신청 중...' : '무료 상담 신청하기'}
        </Button>
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 font-medium">
            상담 신청 중 오류가 발생했습니다. 다시 시도해 주세요.
          </p>
        </div>
      )}
    </form>
  );
}