import ConsultationForm from '@/components/consultation/ConsultationForm';
import { Card } from '@/components/ui/card';
import { FeatureCard } from '@/components/ui/feature-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { COMPANY_INFO, CONSULTATION_BENEFITS } from '@/lib/constants';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-ivory/30 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <SectionHeading 
            title="무료 상담 신청"
            subtitle="캐나다 교육 전문가와 함께 맞춤형 유학 계획을 세워보세요. 상담은 완전 무료이며, 온라인 또는 오프라인으로 진행됩니다."
            level={1}
            className="mb-12"
          />

          {/* Consultation Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon={CONSULTATION_BENEFITS.free.iconKr}
              title={CONSULTATION_BENEFITS.free.titleKr}
              description={CONSULTATION_BENEFITS.free.descriptionKr}
              variant="benefit"
              className="shadow-md"
            />
            <FeatureCard
              icon={CONSULTATION_BENEFITS.customized.iconKr}
              title={CONSULTATION_BENEFITS.customized.titleKr}
              description={CONSULTATION_BENEFITS.customized.descriptionKr}
              variant="benefit"
              className="shadow-md"
            />
            <FeatureCard
              icon={CONSULTATION_BENEFITS.expertise.iconKr}
              title={CONSULTATION_BENEFITS.expertise.titleKr}
              description={CONSULTATION_BENEFITS.expertise.descriptionKr}
              variant="benefit"
              className="shadow-md"
            />
          </div>

          {/* Consultation Form */}
          <Card className="p-8 shadow-lg border-0">
            <ConsultationForm />
          </Card>

          {/* Contact Info */}
          <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-black text-brand-green mb-4">문의사항이 있으시면 언제든지 연락주세요</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-brand-green">📧</span>
                <span className="font-medium">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-green">📍</span>
                <span className="font-medium">{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}