import ConsultationForm from '@/components/consultation/ConsultationForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { NoticeBox } from '@/components/ui/notice-box';
import { PageHero, PageSection } from '@/components/layout/PageSection';
import { FeatureGrid } from '@/components/ui/feature-grid';
import { ContactMethods, OfficeInfo } from '@/components/blocks/ContactInfo';
import { COMPANY_INFO, CONSULTATION_BENEFITS } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero containerClassName="max-w-4xl">
        <SectionHeading 
          title="문의하기"
          subtitle="캐나다 교육 전문가와 함께 맞춤형 유학 계획을 세워보세요. 다양한 방법으로 연락하실 수 있습니다."
          level={1}
          className="mb-12"
        />

        {/* Quick Contact Options */}
        <ContactMethods className="mb-12" />

        <NoticeBox
          title="응답 시간 안내"
          message={COMPANY_INFO.consultation.responseTimeKr}
          variant="info"
        />
      </PageHero>

      {/* Consultation Benefits */}
      <PageSection variant="gray">
        <SectionHeading 
          title="상담 서비스 특징" 
          subtitle="왜 On & Off New Page를 선택해야 할까요?"
          className="mb-12"
        />
        
        <FeatureGrid 
          items={[
            {
              icon: CONSULTATION_BENEFITS.free.iconKr,
              title: CONSULTATION_BENEFITS.free.titleKr,
              description: CONSULTATION_BENEFITS.free.descriptionKr,
              variant: 'benefit'
            },
            {
              icon: CONSULTATION_BENEFITS.customized.iconKr,
              title: CONSULTATION_BENEFITS.customized.titleKr,
              description: CONSULTATION_BENEFITS.customized.descriptionKr,
              variant: 'benefit'
            },
            {
              icon: CONSULTATION_BENEFITS.expertise.iconKr,
              title: CONSULTATION_BENEFITS.expertise.titleKr,
              description: CONSULTATION_BENEFITS.expertise.descriptionKr,
              variant: 'benefit'
            }
          ]}
          columns={3}
        />
      </PageSection>

      {/* Consultation Form Section */}
      <PageSection containerClassName="max-w-4xl">
        <SectionHeading 
          title="상세 상담 신청" 
          subtitle="더 자세한 상담을 원하시면 아래 양식을 작성해 주세요"
          className="mb-12"
        />
        
        <Card className="p-8 shadow-lg border-0">
          <ConsultationForm />
        </Card>
      </PageSection>

      {/* Office Information */}
      <PageSection variant="cta" containerClassName="max-w-4xl">
        <SectionHeading 
          title="오피스 정보" 
          subtitle="밴쿠버 현지에서 직접 운영하는 신뢰할 수 있는 서비스"
          className="mb-12 text-white [&>p]:text-brand-ivory"
        />
        
        <OfficeInfo className="mb-12" />
        
        <div className="text-center">
          <p className="text-brand-ivory text-lg">
            {COMPANY_INFO.consultation.ctaKr}
          </p>
          <p className="text-brand-ivory/80 mt-2">
            {COMPANY_INFO.consultation.ctaSubtitleKr}
          </p>
        </div>
      </PageSection>
    </div>
  );
}