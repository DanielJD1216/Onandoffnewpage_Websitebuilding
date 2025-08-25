import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface ConsultationConfirmationEmailProps {
  clientName: string;
  studentName?: string;
  consultationType: 'independent' | 'parent-accompanied';
  serviceType: 'independent' | 'parent-accompanied';
  preferredDate: string;
  preferredTime: string;
  contactMethod: 'email' | 'phone' | 'kakao';
  language: 'ko' | 'en';
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const ConsultationConfirmationEmail = ({
  clientName = '홍길동',
  studentName = '홍학생',
  consultationType = 'parent-accompanied',
  serviceType = 'parent-accompanied',
  preferredDate = '2025-02-01',
  preferredTime = '오후 2시',
  contactMethod = 'kakao',
  language = 'ko',
}: ConsultationConfirmationEmailProps) => {
  const isKorean = language === 'ko';
  
  // Format date to Korean format: 2025년 9월 15일
  const formatDateKorean = (dateStr: string) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };
  
  // Format time to Korean format: 오후 2시
  const formatTimeKorean = (timeStr: string) => {
    if (timeStr.includes('오전') || timeStr.includes('오후')) {
      return timeStr;
    }
    // If it's in 24-hour format like "14:00", convert to Korean
    const [hours, minutes] = timeStr.split(':').map(Number);
    if (hours >= 12) {
      const displayHour = hours > 12 ? hours - 12 : hours;
      return `오후 ${displayHour}시`;
    } else {
      return `오전 ${hours}시`;
    }
  };
  
  const translations = {
    ko: {
      preview: '온앤오프 뉴페이지 상담 예약이 확정되었습니다',
      title: '상담 예약 확정 안내',
      greeting: `안녕하세요, ${clientName}.`,
      confirmation: '캐나다 유학 상담 예약이 성공적으로 접수되었습니다.\n아래 상담 상세 정보를 확인해 주세요.',
      consultationDetails: '상담 상세 정보',
      clientLabel: '신청자',
      studentLabel: '학생 이름',
      consultationTypeLabel: '상담 방식',
      serviceTypeLabel: '서비스 유형',
      dateLabel: '희망 날짜',
      timeLabel: '희망 시간',
      contactLabel: '연락 방법',
      consultationTypes: {
        independent: '학생 단독 상담',
        'parent-accompanied': '학부모 동반 상담'
      },
      serviceTypes: {
        independent: '독립형 유학',
        'parent-accompanied': '학부모 동반형 유학'
      },
      contactMethods: {
        email: '이메일',
        phone: '전화',
        kakao: '카카오톡'
      },
      nextSteps: '다음 단계',
      step1: '상담원이 24시간 이내에 연락드려서 구체적인 상담 일정을 조율해 드려요.',
      step2: '상담 전 준비할 서류나 궁금한 점이 있으시면 미리 정리해 주시면 감사드려요.',
      step3: '캘린더 일정 추가를 위해 첨부 파일을 확인해 주세요.',
      contact: '문의사항이 있으시면 언제든 아래 연락처로 연락주시기 바랍니다:',
      vancouverOffice: '밴쿠버 현지 사무소',
      phone: '전화: +1 (778) 889-8235',
      email: '이메일: onf.newpage@gmail.com',
      kakaoId: '카카오톡: OnOffNewPage',
      footer: '온앤오프 뉴페이지는 성공적인 캐나다 유학을 응원합니다.',
      regards: '감사합니다.',
      signature: '온앤오프 뉴페이지 팀 드림'
    },
    en: {
      preview: 'Your consultation with On & Off New Page has been confirmed',
      title: 'Consultation Booking Confirmed',
      greeting: `Hello ${clientName},`,
      confirmation: 'Your Canadian study abroad consultation has been successfully booked.',
      consultationDetails: 'Consultation Details',
      clientLabel: 'Client Name',
      studentLabel: 'Student Name',
      consultationTypeLabel: 'Consultation Type',
      serviceTypeLabel: 'Service Type',
      dateLabel: 'Preferred Date',
      timeLabel: 'Preferred Time',
      contactLabel: 'Contact Method',
      consultationTypes: {
        independent: 'Student Independent Consultation',
        'parent-accompanied': 'Parent-Accompanied Consultation'
      },
      serviceTypes: {
        independent: 'Independent Study Program',
        'parent-accompanied': 'Parent-Accompanied Program'
      },
      contactMethods: {
        email: 'Email',
        phone: 'Phone',
        kakao: 'KakaoTalk'
      },
      nextSteps: 'Next Steps',
      step1: 'Our consultant will contact you within 24 hours to schedule the consultation.',
      step2: 'Please prepare any documents or questions you have before the consultation.',
      step3: 'Check the attached calendar file to add this appointment to your calendar.',
      contact: 'If you have any questions, please feel free to contact us',
      vancouverOffice: 'Vancouver Local Office',
      phone: 'Phone: +1 (604) 123-4567',
      email: 'Email: onf.newpage@gmail.com',
      kakaoId: 'KakaoTalk: OnOffNewPage',
      footer: 'We look forward to supporting your successful journey to Canada!',
      regards: 'Best regards,',
      signature: 'On & Off New Page Team'
    }
  };

  const t = translations[language];

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo Section */}
          <Section style={logoSection}>
            <Img
              src={`${baseUrl}/logo.svg`}
              width="160"
              height="53"
              alt="On & Off New Page"
              style={logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>{t.title}</Heading>
            
            <Text style={paragraph}>{t.greeting}</Text>
            <Text style={paragraph}>{t.confirmation}</Text>

            {/* Consultation Details Box */}
            <Section style={detailsBox}>
              <Text style={detailsTitle}>**{t.consultationDetails}**</Text>
              
              <Text style={detailItem}>- {t.clientLabel}: {clientName}</Text>
              
              {studentName && (
                <Text style={detailItem}>- {t.studentLabel}: {studentName}</Text>
              )}
              
              <Text style={detailItem}>- {t.consultationTypeLabel}: {t.consultationTypes[consultationType]}</Text>
              
              <Text style={detailItem}>- {t.serviceTypeLabel}: {t.serviceTypes[serviceType]}</Text>
              
              <Text style={detailItem}>- {t.dateLabel}: {formatDateKorean(preferredDate)}</Text>
              
              <Text style={detailItem}>- {t.timeLabel}: {formatTimeKorean(preferredTime)}</Text>
              
              <Text style={detailItem}>- {t.contactLabel}: {t.contactMethods[contactMethod]}</Text>
            </Section>

            {/* Next Steps */}
            <Section style={{ marginTop: '32px' }}>
              <Text style={detailsTitle}>**{t.nextSteps}**</Text>
              <Text style={stepText}>1. {t.step1}</Text>
              <Text style={stepText}>2. {t.step2}</Text>
              <Text style={stepText}>3. {t.step3}</Text>
            </Section>

            <Hr style={hr} />

            {/* Contact Information */}
            <Section>
              <Text style={paragraph}>{t.contact}:</Text>
              <Text style={contactInfo}>
                <strong>{t.vancouverOffice}</strong><br />
                {t.phone}<br />
                {t.email}<br />
                {t.kakaoId}
              </Text>
            </Section>

            <Text style={footer}>{t.footer}</Text>
            
            <Text style={regards}>
              {t.regards}<br />
              {t.signature}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ConsultationConfirmationEmail;

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const logoSection = {
  padding: '32px 0',
  textAlign: 'center' as const,
  backgroundColor: '#F4ECDE',
  borderRadius: '8px 8px 0 0',
};

const logo = {
  margin: '0 auto',
};

const content = {
  padding: '32px',
  backgroundColor: '#ffffff',
  border: '1px solid #eaeaea',
  borderRadius: '0 0 8px 8px',
};

const h1 = {
  color: '#114B3F',
  fontSize: '28px',
  fontWeight: '900',
  lineHeight: '1.3',
  margin: '0 0 24px',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#114B3F',
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '1.4',
  margin: '0 0 16px',
};

const paragraph = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
};

const detailsBox = {
  backgroundColor: '#F8F9FA',
  border: '1px solid #E9ECEF',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
};

const detailRow = {
  margin: '0 0 12px',
};

const detailLabel = {
  color: '#6C757D',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0 0 4px',
  display: 'inline-block',
  width: '140px',
};

const detailValue = {
  color: '#333333',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
  display: 'inline-block',
};

const stepText = {
  color: '#333333',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 12px',
};

const hr = {
  borderColor: '#E9ECEF',
  margin: '32px 0',
};

const contactInfo = {
  color: '#333333',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '16px 0',
  padding: '16px',
  backgroundColor: '#F8F9FA',
  borderLeft: '4px solid #114B3F',
  borderRadius: '4px',
};

const footer = {
  color: '#A48242',
  fontSize: '16px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '32px 0 24px',
  padding: '16px',
  backgroundColor: '#F4ECDE',
  borderRadius: '8px',
};

const regards = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '24px 0 0',
  textAlign: 'right' as const,
};

const detailsTitle = {
  color: '#114B3F',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '1.4',
  margin: '0 0 16px',
};

const detailItem = {
  color: '#333333',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 8px',
};