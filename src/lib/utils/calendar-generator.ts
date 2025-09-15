/**
 * Calendar .ics file generator for consultation appointments
 */

interface CalendarEventData {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location?: string;
  organizer: {
    name: string;
    email: string;
  };
  attendee: {
    name: string;
    email: string;
  };
}

/**
 * Generates a .ics calendar file content for consultation appointment
 */
export function generateICSFile(eventData: CalendarEventData): string {
  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const escapeText = (text: string): string => {
    return text
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//On & Off New Page//Consultation Booking//EN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(eventData.startDate)}`,
    `DTEND:${formatDate(eventData.endDate)}`,
    `DTSTAMP:${formatDate(new Date())}`,
    `UID:consultation-${Date.now()}@onoffnewpage.com`,
    `SUMMARY:${escapeText(eventData.title)}`,
    `DESCRIPTION:${escapeText(eventData.description)}`,
    ...(eventData.location ? [`LOCATION:${escapeText(eventData.location)}`] : []),
    `ORGANIZER;CN=${escapeText(eventData.organizer.name)}:mailto:${eventData.organizer.email}`,
    `ATTENDEE;CN=${escapeText(eventData.attendee.name)};RSVP=TRUE:mailto:${eventData.attendee.email}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  return icsContent;
}

/**
 * Creates consultation calendar event data
 */
export function createConsultationCalendarEvent({
  clientName,
  clientEmail,
  consultationType,
  preferredDate,
  preferredTime,
  language = 'ko'
}: {
  clientName: string;
  clientEmail: string;
  consultationType: 'independent' | 'parent-accompanied';
  preferredDate: string;
  preferredTime: string;
  language?: 'ko' | 'en';
}): CalendarEventData {
  
  // Parse date and time (this is a simplified version - you might want to improve this)
  const consultationDate = new Date(preferredDate);
  
  // Add time parsing logic based on preferredTime
  // This is a simplified implementation - you might want to make this more robust
  let hour = 14; // Default to 2 PM
  if (preferredTime.includes('오전') || preferredTime.toLowerCase().includes('morning')) {
    hour = 10;
  } else if (preferredTime.includes('오후') || preferredTime.toLowerCase().includes('afternoon')) {
    hour = 14;
  } else if (preferredTime.includes('저녁') || preferredTime.toLowerCase().includes('evening')) {
    hour = 18;
  }

  const startDate = new Date(consultationDate);
  startDate.setHours(hour, 0, 0, 0);
  
  const endDate = new Date(startDate);
  endDate.setHours(hour + 1, 0, 0, 0); // 1 hour consultation

  const isKorean = language === 'ko';
  
  const consultationTypeLabels = {
    ko: {
      independent: '학생 단독 상담',
      'parent-accompanied': '학부모 동반 상담'
    },
    en: {
      independent: 'Student Independent Consultation',
      'parent-accompanied': 'Parent-Accompanied Consultation'
    }
  };

  const title = isKorean 
    ? `캐나다 유학 상담 - ${consultationTypeLabels.ko[consultationType]}`
    : `Canadian Study Abroad Consultation - ${consultationTypeLabels.en[consultationType]}`;

  const description = isKorean
    ? `온앤오프 뉴페이지와의 캐나다 유학 상담\n\n상담자: ${clientName}\n상담 유형: ${consultationTypeLabels.ko[consultationType]}\n\n준비사항:\n- 학생 성적표 및 졸업증명서\n- 여권 사본\n- 궁금한 사항 목록\n\n연락처: onf.newpage@gmail.com\n전화: +1 (778) 889-8235\n카카오톡: newpageonf`
    : `Canadian Study Abroad Consultation with On & Off New Page\n\nClient: ${clientName}\nConsultation Type: ${consultationTypeLabels.en[consultationType]}\n\nPlease prepare:\n- Student transcripts and certificates\n- Passport copy\n- List of questions\n\nContact: onf.newpage@gmail.com\nPhone: +1 (778) 889-8235\nKakaoTalk: newpageonf`;

  return {
    title,
    startDate,
    endDate,
    description,
    location: 'Online Consultation (Details to be provided)',
    organizer: {
      name: 'On & Off New Page',
      email: 'onf.newpage@gmail.com'
    },
    attendee: {
      name: clientName,
      email: clientEmail
    }
  };
}