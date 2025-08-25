import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface AdminConsultationNotificationProps {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  kakaoId?: string;
  studentName?: string;
  studentAge?: number;
  currentGrade?: string;
  consultationType: 'independent' | 'parent-accompanied';
  serviceType: 'independent' | 'parent-accompanied';
  interestedPrograms?: string[];
  supportServices?: string[];
  budgetRange?: string;
  preferredDate: string;
  preferredTime: string;
  contactMethod: 'email' | 'phone' | 'kakao';
  additionalInfo?: string;
  submittedAt: Date;
  language: 'ko' | 'en';
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const AdminConsultationNotification = ({
  clientName = '홍길동',
  clientEmail = 'client@example.com',
  clientPhone = '+1-604-123-4567',
  kakaoId = 'client_kakao',
  studentName = '홍학생',
  studentAge = 16,
  currentGrade = '고등학교 1학년',
  consultationType = 'parent-accompanied',
  serviceType = 'parent-accompanied',
  interestedPrograms = ['BC - Vancouver', 'Ontario - Toronto'],
  supportServices = ['Airport Pickup', 'Homestay Arrangement'],
  budgetRange = 'CAD $30,000 - $50,000',
  preferredDate = '2025-02-01',
  preferredTime = 'Afternoon',
  contactMethod = 'kakao',
  additionalInfo = 'Looking for programs starting in September 2025',
  submittedAt = new Date(),
  language = 'ko',
}: AdminConsultationNotificationProps) => {
  const formatDateTime = (date: Date) => {
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Seoul',
    });
  };

  const consultationTypeLabels = {
    independent: 'Student Independent Consultation (학생 단독 상담)',
    'parent-accompanied': 'Parent-Accompanied Consultation (학부모 동반 상담)',
  };

  const serviceTypeLabels = {
    independent: 'Independent Study Program (독립형 유학)',
    'parent-accompanied': 'Parent-Accompanied Program (학부모 동반형 유학)',
  };

  const contactMethodLabels = {
    email: 'Email (이메일)',
    phone: 'Phone (전화)',
    kakao: 'KakaoTalk (카카오톡)',
  };

  return (
    <Html>
      <Head />
      <Preview>🔔 New Consultation Booking: {clientName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src={`${baseUrl}/logo.png`}
              width="120"
              height="40"
              alt="On & Off New Page"
              style={logo}
            />
            <Heading style={title}>🔔 New Consultation Booking</Heading>
            <Text style={alertText}>
              Submitted on {formatDateTime(submittedAt)} (KST)
            </Text>
          </Section>

          {/* Client Information */}
          <Section style={section}>
            <Heading as="h2" style={sectionTitle}>👤 Client Information</Heading>
            
            <Row style={infoRow}>
              <Text style={label}>Name / 이름:</Text>
              <Text style={value}>{clientName}</Text>
            </Row>
            
            <Row style={infoRow}>
              <Text style={label}>Email:</Text>
              <Text style={value}>{clientEmail}</Text>
            </Row>
            
            {clientPhone && (
              <Row style={infoRow}>
                <Text style={label}>Phone / 전화:</Text>
                <Text style={value}>{clientPhone}</Text>
              </Row>
            )}
            
            {kakaoId && (
              <Row style={infoRow}>
                <Text style={label}>KakaoTalk ID:</Text>
                <Text style={value}>{kakaoId}</Text>
              </Row>
            )}
            
            <Row style={infoRow}>
              <Text style={label}>Preferred Contact:</Text>
              <Text style={value}>{contactMethodLabels[contactMethod]}</Text>
            </Row>
          </Section>

          {/* Student Information */}
          <Section style={section}>
            <Heading as="h2" style={sectionTitle}>👨‍🎓 Student Information</Heading>
            
            {studentName && (
              <Row style={infoRow}>
                <Text style={label}>Student Name / 학생 이름:</Text>
                <Text style={value}>{studentName}</Text>
              </Row>
            )}
            
            {studentAge && (
              <Row style={infoRow}>
                <Text style={label}>Age / 나이:</Text>
                <Text style={value}>{studentAge} years old</Text>
              </Row>
            )}
            
            {currentGrade && (
              <Row style={infoRow}>
                <Text style={label}>Current Grade / 현재 학년:</Text>
                <Text style={value}>{currentGrade}</Text>
              </Row>
            )}
          </Section>

          {/* Consultation Details */}
          <Section style={section}>
            <Heading as="h2" style={sectionTitle}>📋 Consultation Details</Heading>
            
            <Row style={infoRow}>
              <Text style={label}>Consultation Type:</Text>
              <Text style={value}>{consultationTypeLabels[consultationType]}</Text>
            </Row>
            
            <Row style={infoRow}>
              <Text style={label}>Service Type:</Text>
              <Text style={value}>{serviceTypeLabels[serviceType]}</Text>
            </Row>
            
            <Row style={infoRow}>
              <Text style={label}>Preferred Date / 희망 날짜:</Text>
              <Text style={value}>{preferredDate}</Text>
            </Row>
            
            <Row style={infoRow}>
              <Text style={label}>Preferred Time / 희망 시간:</Text>
              <Text style={value}>{preferredTime}</Text>
            </Row>
            
            <Row style={infoRow}>
              <Text style={label}>Language / 언어:</Text>
              <Text style={value}>{language === 'ko' ? 'Korean (한국어)' : 'English'}</Text>
            </Row>
          </Section>

          {/* Program Interests */}
          {interestedPrograms && interestedPrograms.length > 0 && (
            <Section style={section}>
              <Heading as="h2" style={sectionTitle}>🏫 Interested Programs</Heading>
              {interestedPrograms.map((program, index) => (
                <Text key={index} style={listItem}>• {program}</Text>
              ))}
            </Section>
          )}

          {/* Support Services */}
          {supportServices && supportServices.length > 0 && (
            <Section style={section}>
              <Heading as="h2" style={sectionTitle}>🛠️ Requested Support Services</Heading>
              {supportServices.map((service, index) => (
                <Text key={index} style={listItem}>• {service}</Text>
              ))}
            </Section>
          )}

          {/* Budget Information */}
          {budgetRange && (
            <Section style={section}>
              <Heading as="h2" style={sectionTitle}>💰 Budget Range</Heading>
              <Text style={value}>{budgetRange}</Text>
            </Section>
          )}

          {/* Additional Information */}
          {additionalInfo && (
            <Section style={section}>
              <Heading as="h2" style={sectionTitle}>📝 Additional Information</Heading>
              <Text style={additionalText}>{additionalInfo}</Text>
            </Section>
          )}

          {/* Action Required */}
          <Section style={actionSection}>
            <Heading as="h2" style={actionTitle}>⚡ Action Required</Heading>
            <Text style={actionText}>
              1. Contact client within 24 hours via preferred method: <strong>{contactMethodLabels[contactMethod]}</strong>
            </Text>
            <Text style={actionText}>
              2. Schedule consultation based on preferred date/time
            </Text>
            <Text style={actionText}>
              3. Prepare consultation materials for {serviceTypeLabels[serviceType]}
            </Text>
            <Text style={actionText}>
              4. Send calendar invitation with consultation details
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              On & Off New Page Admin System<br />
              Vancouver Local Office | onf.newpage@gmail.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminConsultationNotification;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '700px',
};

const header = {
  backgroundColor: '#114B3F',
  padding: '32px',
  textAlign: 'center' as const,
  borderRadius: '8px 8px 0 0',
};

const logo = {
  margin: '0 auto',
  filter: 'brightness(0) invert(1)',
};

const title = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '700',
  margin: '16px 0 8px',
};

const alertText = {
  color: '#F4ECDE',
  fontSize: '14px',
  margin: '0',
};

const section = {
  backgroundColor: '#ffffff',
  padding: '24px',
  margin: '0',
  borderLeft: '1px solid #e6ebf1',
  borderRight: '1px solid #e6ebf1',
  borderBottom: '1px solid #e6ebf1',
};

const sectionTitle = {
  color: '#114B3F',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
  borderBottom: '2px solid #F4ECDE',
  paddingBottom: '8px',
};

const infoRow = {
  margin: '0 0 12px',
  display: 'flex',
  alignItems: 'flex-start',
};

const label = {
  color: '#6c757d',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
  width: '180px',
  display: 'inline-block',
};

const value = {
  color: '#333333',
  fontSize: '15px',
  fontWeight: '600',
  margin: '0',
  flex: '1',
};

const listItem = {
  color: '#333333',
  fontSize: '15px',
  margin: '0 0 8px',
  paddingLeft: '16px',
};

const additionalText = {
  color: '#333333',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0',
  padding: '16px',
  backgroundColor: '#f8f9fa',
  borderRadius: '4px',
  borderLeft: '4px solid #A48242',
};

const actionSection = {
  backgroundColor: '#fff3cd',
  padding: '24px',
  border: '1px solid #ffeaa7',
  borderTop: 'none',
};

const actionTitle = {
  color: '#856404',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const actionText = {
  color: '#856404',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 12px',
};

const footer = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  textAlign: 'center' as const,
  borderRadius: '0 0 8px 8px',
  border: '1px solid #e6ebf1',
  borderTop: 'none',
};

const footerText = {
  color: '#6c757d',
  fontSize: '12px',
  margin: '0',
};