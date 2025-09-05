import { SectionHeading } from '@/components/ui/section-heading';
import { Accordion } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/feature-card';
import { NoticeBox } from '@/components/ui/notice-box';
import { CollapsibleCard } from '@/components/ui/collapsible-card';
import { PROGRAMS } from '@/lib/constants';
import { Home, Target, BookOpen, Star, Megaphone } from 'lucide-react';
import Link from 'next/link';

const journeyPathways = {
  id: 'pathways',
  title: '세 가지 성장의 길',
  defaultOpen: true,
  content: (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed text-lg text-center font-medium">
        모든 위대한 여정은 선택에서 시작됩니다. 당신의 꿈과 상황에 맞는 길을 선택하고, 
        그 길에서 만날 새로운 도전과 성장을 함께 만들어가세요.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* BC Path - The Explorer */}
        <Card className="group relative p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full transform translate-x-8 -translate-y-8" />
          <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-gold to-brand-gold/80 text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">
            가장 인기있는 길
          </div>
          
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-xl">
              <span className="text-white text-3xl">🏔️</span>
            </div>
            <h3 className="text-2xl font-black text-blue-700 mb-2">탐험가의 길</h3>
            <p className="text-blue-600 font-medium">브리티시 컬럼비아</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 font-medium text-sm">
                "새로운 환경에서 도전하며 성장하는 여정"
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-500">🌊</span>
                <span className="text-sm">자연과 함께하는 교육 환경</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-500">🏙️</span>
                <span className="text-sm">밴쿠버 도시 문화 체험</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-500">⭐</span>
                <span className="text-sm">다양성을 존중하는 환경</span>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Ontario Path - The Achiever */}
        <Card className="group relative p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/30 to-transparent rounded-full transform translate-x-8 -translate-y-8" />
          
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-600 to-green-700 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-xl">
              <span className="text-white text-3xl">🏛️</span>
            </div>
            <h3 className="text-2xl font-black text-green-700 mb-2">성취자의 길</h3>
            <p className="text-green-600 font-medium">온타리오</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 font-medium text-sm">
                "학문적 우수성과 리더십을 키우는 여정"
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">📚</span>
                <span className="text-sm">우수한 교육 시스템</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">🏙️</span>
                <span className="text-sm">토론토 국제도시 경험</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">🎯</span>
                <span className="text-sm">명문대 진학 집중 지원</span>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Other Provinces Path - The Pioneer */}
        <Card className="group relative p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full transform translate-x-8 -translate-y-8" />
          
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-xl">
              <span className="text-white text-3xl">🌟</span>
            </div>
            <h3 className="text-2xl font-black text-purple-700 mb-2">개척자의 길</h3>
            <p className="text-purple-600 font-medium">기타 특별한 지역들</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-800 font-medium text-sm">
                "나만의 독특한 경험을 만들어가는 여정"
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-purple-500">🏞️</span>
                <span className="text-sm">특색있는 지역 문화</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-purple-500">💡</span>
                <span className="text-sm">개인 맞춤형 프로그램</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-purple-500">🚀</span>
                <span className="text-sm">혁신적인 교육 기회</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
};

const journeySupports = {
  id: 'supports',
  title: '여정에서 만날 동반자들',
  content: (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          혹독한 여정에서 당신을 지지하고 함께 걸어갈 동반자들이 있습니다. 
          각자의 역할로 당신의 꿈을 현실로 만들어갑니다.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <div className="text-4xl mb-4">🧗‍♀️</div>
          <h3 className="text-lg font-black text-blue-700 mb-3">길잡이</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            당신의 꿈과 상황에 맞는 최적의 길을 함께 찾아드립니다
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-lg font-black text-green-700 mb-3">학습 동반자</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            모든 학습 과정에서 지속적인 지도와 격려를 제공합니다
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="text-lg font-black text-purple-700 mb-3">생활 보호자</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            안전하고 따뜻한 생활 환경에서 편안하게 지낼 수 있도록
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-lg font-black text-orange-700 mb-3">미래 설계자</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            오늘의 선택이 내일의 꿈으로 이어지도록 함께 계획합니다
          </p>
        </div>
      </div>
    </div>
  )
};

const secondFamily = {
  id: 'homestay',
  title: '나의 두 번째 가족',
  content: (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-pink-50 to-white">
          <h3 className="text-xl font-black text-pink-700 mb-4">따뜻한 가족을 만나는 방법</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">범죄 기록 조회 및 백그라운드 체크 완료</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">안전하고 쾌적한 주거 환경 보장</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">학생 케어 경험 및 교육적 마인드</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">학교와의 접근성 및 교통편 고려</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-white">
          <h3 className="text-xl font-black text-yellow-700 mb-4">가족과 함께 누리는 일상</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">🍽️</span>
              <span className="text-gray-700">영양 균형잡힌 3식 식사 제공</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">🏠</span>
              <span className="text-gray-700">개인 침실 및 학습 공간 제공</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">🌐</span>
              <span className="text-gray-700">Wi-Fi 및 생활에 필요한 기본 시설</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-green text-xl flex-shrink-0">🚌</span>
              <span className="text-gray-700">등하교 교통편 정보 및 지원</span>
            </li>
          </ul>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-pink-100 to-yellow-100 p-6 rounded-xl border-l-4 border-pink-400">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🌈</div>
          <div>
            <h4 className="font-black text-pink-700 mb-2">운명적인 만남을 만들어가는 과정</h4>
            <p className="text-gray-700 leading-relaxed">
              당신의 성격, 취향, 꿈을 깊이 이해하고, 그에 맞는 최적의 호스트 가족과의 소중한 인연을 만들어드립니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

const guardianAngels = {
  id: 'care',
  title: '수호천사들의 보살핌',
  content: (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          언제나 당신 곁에서 지켜보며 도와주는 마음 같은 보호자들이 있습니다. 
          어떤 어려움이 있어도 혼자 극복하지 않도록 함께 도와드립니다.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-lg text-center bg-gradient-to-br from-red-50 to-white hover:shadow-xl transition-all duration-300">
          <span className="text-3xl mb-3 block">🚑</span>
          <h3 className="text-lg font-black text-red-600 mb-3">긴급상황 수호천사</h3>
          <p className="text-gray-700 text-sm">
            24시간 언제든지, 어떤 어려움이든 즉시 도와드립니다
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all duration-300">
          <span className="text-3xl mb-3 block">👩‍⚕️</span>
          <h3 className="text-lg font-black text-blue-600 mb-3">건강 보호 동반자</h3>
          <p className="text-gray-700 text-sm">
            아플 때마다 곁에서 보살피며 건강을 책겨드립니다
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all duration-300">
          <span className="text-3xl mb-3 block">📊</span>
          <h3 className="text-lg font-black text-brand-green mb-3">성장 기록 전달자</h3>
          <p className="text-gray-700 text-sm">
            월간 학습 리포트 및 생활 상황 부모님께 정기 전달
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all duration-300">
          <span className="text-3xl mb-3 block">🎓</span>
          <h3 className="text-lg font-black text-purple-600 mb-3">학업 성장 안내자</h3>
          <p className="text-gray-700 text-sm">
            정기적인 학업 상담 및 미래 진로 지도
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center bg-gradient-to-br from-orange-50 to-white hover:shadow-xl transition-all duration-300">
          <span className="text-3xl mb-3 block">💳</span>
          <h3 className="text-lg font-black text-orange-600 mb-3">생활 정착 도우미</h3>
          <p className="text-gray-700 text-sm">
            은행 계좌 개설, 핸드폰 개통 등 캐나다 생활 정착 지원
          </p>
        </Card>

        <Card className="p-6 border-0 shadow-lg text-center bg-gradient-to-br from-teal-50 to-white hover:shadow-xl transition-all duration-300">
          <span className="text-3xl mb-3 block">📋</span>
          <h3 className="text-lg font-black text-teal-600 mb-3">법적 절차 전문가</h3>
          <p className="text-gray-700 text-sm">
            학생비자 연장 및 가디언십 서류 전문 처리
          </p>
        </Card>
      </div>
    </div>
  )
};

const journeyPreparation = {
  id: 'journey-preparation',
  title: '여정을 위한 준비',
  content: (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-gray-700 leading-relaxed text-lg font-medium">
          모든 위대한 여정은 준비에서 시작됩니다. 함께 차근차근 준비하며, 
          캐나다라는 새로운 세계로 향하는 문을 열어보세요.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
          <h4 className="text-xl font-black text-brand-green mb-4 flex items-center gap-2">
            <span className="text-blue-600">📋</span> 여정의 동반자들
          </h4>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            새로운 여정에는 믿을 수 있는 동반자가 필요합니다. 이 서류들이 여러분의 꿈을 현실로 만드는 열쇠가 될 것입니다.
          </p>
          <ul className="space-y-3">
            {['여권 사본 (새로운 세계로의 티켓)', '학교 성적증명서 (지금까지의 성장 기록)', '영어 성적 증명서 (소통의 다리)', '가족관계증명서 (사랑의 증명)', '재정증명서 (꿈을 실현할 든든한 뒷받침)'].map((doc, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
          <h4 className="text-xl font-black text-brand-green mb-4 flex items-center gap-2">
            <span className="text-green-600">🗺️</span> 5단계 여정 로드맵
          </h4>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            모든 단계마다 여러분과 함께 걸으며, 각각의 순간을 소중한 성장의 기회로 만들어갑니다.
          </p>
          <div className="space-y-4">
            {[
              { step: '꿈의 발견', desc: '상담을 통해 진정한 목표를 찾아요' },
              { step: '준비의 시작', desc: '서류와 마음을 차근차근 준비해요' },
              { step: '선택의 순간', desc: '학교 승인으로 꿈이 현실이 돼요' },
              { step: '도약의 허가', desc: '비자 발급으로 날개를 펼쳐요' },
              { step: '새로운 시작', desc: '캐나다에서의 첫 걸음을 내딛어요' }
            ].map((phase, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{phase.step}</p>
                  <p className="text-gray-600 text-xs">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

const dreamInvestment = {
  id: 'dream-investment',
  title: '꿈에 대한 투자',
  content: (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-gray-700 leading-relaxed text-lg font-medium">
          교육은 미래에 대한 가장 확실한 투자입니다. 투명하고 합리적인 비용으로, 
          평생의 자산이 될 경험을 선물하세요.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-brand-ivory/50 to-brand-gold/20 p-8 rounded-xl">
        <h4 className="text-2xl font-black text-brand-green mb-6 text-center">투명한 투자 계획</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="text-blue-500 text-3xl mb-3 text-center">🎓</div>
            <h5 className="font-black text-brand-green mb-3 text-center">교육비</h5>
            <p className="text-sm text-gray-600 text-center mb-2">꿈을 현실로 만드는 투자</p>
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              학교별, 학년별 맞춤 안내<br/>
              무료 상담에서 정확한 견적 제공
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="text-purple-500 text-3xl mb-3 text-center">🏡</div>
            <h5 className="font-black text-brand-green mb-3 text-center">생활비</h5>
            <p className="text-sm text-gray-600 text-center mb-2">새로운 일상을 위한 준비</p>
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              지역과 라이프스타일 고려<br/>
              홈스테이부터 기숙사까지 다양한 옵션
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="text-green-500 text-3xl mb-3 text-center">🤝</div>
            <h5 className="font-black text-brand-green mb-3 text-center">컨설팅비</h5>
            <p className="text-sm text-gray-600 text-center mb-2">전문가와 함께하는 여정</p>
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              패키지별 합리적 가격<br/>
              성공까지 함께하는 든든한 파트너십
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 italic">
            "가격보다는 가치를, 비용보다는 미래를 생각합니다"
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
        <h3 className="text-lg font-black text-brand-green mb-3 flex items-center gap-2">
          <span className="text-2xl">🎁</span> 무료로 드리는 소중한 선물
        </h3>
        <p className="text-gray-700 mb-4">
          On & Off New Page와 함께라면, 모든 컨설팅 서비스를 무료로 받으실 수 있습니다.
        </p>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-brand-green">✨</span>
            꿈 발견 상담 및 최적 학교 매칭
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-green">✨</span>
            입학 서류 완벽 준비 지원
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-green">✨</span>
            비자 신청 전 과정 동행
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-green">✨</span>
            출국 전 마음 준비 오리엔테이션
          </li>
        </ul>
      </div>
    </div>
  )
};

const beginJourney = {
  id: 'begin-journey',
  title: '여정의 시작',
  content: (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-br from-brand-green/10 via-brand-ivory/30 to-brand-gold/20 p-8 rounded-2xl">
        <div className="text-6xl mb-4">✨</div>
        <h4 className="text-3xl font-black text-brand-green mb-6">
          당신만의 이야기를 시작하세요
        </h4>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          모든 위대한 이야기에는 용기 있는 첫 걸음이 있습니다. 
          지금 이 순간이 바로 여러분의 캐나다 유학 스토리가 시작되는 특별한 순간입니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link 
            href="/ko/contact"
            className="bg-brand-green text-brand-ivory font-batang font-black py-4 px-8 rounded-xl shadow-lg hover:bg-brand-green/90 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-lg group"
          >
            <span className="flex items-center justify-center gap-2">
              첫 걸음 내딛기
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
          <Link 
            href="/ko/success-stories"
            className="bg-white text-brand-green border-2 border-brand-green font-batang font-black py-4 px-8 rounded-xl shadow-lg hover:bg-brand-ivory hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-lg group"
          >
            <span className="flex items-center justify-center gap-2">
              선배들의 이야기 보기
              <span className="group-hover:translate-x-1 transition-transform">👥</span>
            </span>
          </Link>
        </div>
        
        <div className="bg-white/70 p-4 rounded-lg max-w-md mx-auto">
          <p className="text-sm text-gray-600 italic">
            "천 리 길도 한 걸음부터 시작됩니다"
          </p>
        </div>
      </div>
    </div>
  )
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen" style={{backgroundImage: 'linear-gradient(to bottom, white 35%, #f8f6f0 100%)'}}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-ivory/30 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="나만의 길 찾기"
            subtitle="각자의 꿈과 목표에 맞는 세 가지 여정 중 당신의 이야기를 시작하세요"
            level={1}
          />

          {/* Quick Access Buttons */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mt-12">
            <Button variant="outline" size="lg" className="font-black" asChild>
              <Link href="/ko/services#independent">학생 단독 유학</Link>
            </Button>
            <Button variant="outline" size="lg" className="font-black" asChild>
              <Link href="/ko/services#parent-accompanied">부모 동반 유학</Link>
            </Button>
            <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 font-black" asChild>
              <Link href="/ko/contact">무료 상담 신청</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            <CollapsibleCard
              title="세 가지 성장의 길"
              defaultOpen={true}
              variant="premium"
              headerIcon={<Target className="w-5 h-5" />}
            >
              {journeyPathways.content}
            </CollapsibleCard>

            <CollapsibleCard
              title="여정에서 만날 동반자들"
              variant="accent"
              headerIcon={<Star className="w-5 h-5" />}
            >
              {journeySupports.content}
            </CollapsibleCard>

            <CollapsibleCard
              title="나의 두 번째 가족"
              variant="default"
              headerIcon={<Home className="w-5 h-5" />}
            >
              {secondFamily.content}
            </CollapsibleCard>

            <CollapsibleCard
              title="수호천사들의 보살핌"
              variant="accent"
              headerIcon={<BookOpen className="w-5 h-5" />}
            >
              {guardianAngels.content}
            </CollapsibleCard>

            <CollapsibleCard
              title="여정을 위한 준비"
              variant="default"
            >
              {journeyPreparation.content}
            </CollapsibleCard>

            <CollapsibleCard
              title="꿈에 대한 투자"
              variant="premium"
            >
              {dreamInvestment.content}
            </CollapsibleCard>

            <CollapsibleCard
              title="여정의 시작"
              variant="accent"
              headerIcon={<Megaphone className="w-5 h-5" />}
            >
              {beginJourney.content}
            </CollapsibleCard>
          </div>
        </div>
      </section>

      {/* Education Board Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="교육청 바로가기" 
            subtitle="파트너 교육청의 공식 웹사이트에서 더 자세한 정보를 확인하세요"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-lg font-black text-brand-green mb-4">브리티시 컬럼비아</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.surreyschools.ca" target="_blank" rel="noopener noreferrer">
                    써리 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.sd43.bc.ca" target="_blank" rel="noopener noreferrer">
                    코퀴틀람 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.sd45.bc.ca" target="_blank" rel="noopener noreferrer">
                    웨스트 밴쿠버 교육청 →
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-lg font-black text-brand-green mb-4">온타리오</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.tdsb.on.ca" target="_blank" rel="noopener noreferrer">
                    토론토 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.yrdsb.ca" target="_blank" rel="noopener noreferrer">
                    요크 지역 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.hdsb.ca" target="_blank" rel="noopener noreferrer">
                    할튼 지역 교육청 →
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-lg font-black text-brand-green mb-4">기타 주요 지역</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.cbe.ab.ca" target="_blank" rel="noopener noreferrer">
                    캘거리 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.emsb.qc.ca" target="_blank" rel="noopener noreferrer">
                    몬트리올 교육청 →
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link href="/ko/contact">
                    맞춤 상담 신청 →
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            완벽한 유학 계획을 세워보세요
          </h2>
          <p className="text-xl text-brand-ivory mb-8 max-w-2xl mx-auto">
            전문가의 무료 상담으로 학생에게 최적화된 유학 프로그램을 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-green hover:bg-brand-ivory font-black px-8"
              asChild
            >
              <Link href="/ko/contact">
                무료 상담 신청하기
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-green font-black px-8"
              asChild
            >
              <Link href="/ko/success-stories">
                성공 사례 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}