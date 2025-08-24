import ConsultationForm from '@/components/consultation/ConsultationForm';
import { Card } from '@/components/ui/card';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-ivory/30 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-brand-green mb-6">
              무료 상담 신청
            </h1>
            <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
              캐나다 교육 전문가와 함께 맞춤형 유학 계획을 세워보세요. 
              상담은 완전 무료이며, 온라인 또는 오프라인으로 진행됩니다.
            </p>
          </div>

          {/* Consultation Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-0 shadow-md">
              <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">💰</span>
              </div>
              <h3 className="font-black text-brand-green mb-2">완전 무료</h3>
              <p className="text-sm text-gray-600 font-medium">
                상담부터 입학까지 별도 수수료 없음
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-md">
              <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="font-black text-brand-green mb-2">맞춤형 플랜</h3>
              <p className="text-sm text-gray-600 font-medium">
                학생 개별 상황에 최적화된 유학 계획
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-md">
              <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🇨🇦</span>
              </div>
              <h3 className="font-black text-brand-green mb-2">현지 전문성</h3>
              <p className="text-sm text-gray-600 font-medium">
                밴쿠버 현지 경험과 노하우 제공
              </p>
            </Card>
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
                <span className="font-medium">info@onoffnewpage.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-green">📍</span>
                <span className="font-medium">204-1046 Austin Avenue, Coquitlam, British Columbia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}