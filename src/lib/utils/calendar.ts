import { format, addDays, isWeekend, parse, startOfDay } from 'date-fns';
import { toZonedTime, fromZonedTime } from 'date-fns-tz';
import { ko } from 'date-fns/locale';

export type Timezone = 'KST' | 'PST';
export type ConsultationType = 'online' | 'offline';

export interface TimeSlot {
  value: string; // 'HH:mm' format
  label: string; // Display label with timezone
  isAvailable: boolean;
  datetime: Date; // Full UTC datetime
}

export interface AvailableDate {
  value: string; // 'yyyy-MM-dd' format
  label: string; // Display label in Korean
  date: Date;
  isAvailable: boolean;
}

// Business hours configuration
const BUSINESS_HOURS = {
  online: {
    KST: {
      start: 9, // 9:00 AM KST
      end: 21,  // 9:00 PM KST
      slots: ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '19:00', '20:30']
    },
    PST: {
      start: 9, // 9:00 AM PST
      end: 18, // 6:00 PM PST
      slots: ['09:00', '10:30', '13:00', '14:30', '16:00', '17:30']
    }
  },
  offline: {
    PST: {
      start: 9, // 9:00 AM PST (Vancouver office only)
      end: 17, // 5:00 PM PST
      slots: ['09:00', '10:30', '13:00', '14:30', '16:00']
    }
  }
} as const;

// Mock busy slots (in production, this would come from database)
const MOCK_BUSY_SLOTS = new Set([
  '2025-01-28T17:00:00.000Z', // PST slot
  '2025-01-29T02:30:00.000Z', // KST slot converted to UTC
  '2025-01-30T21:00:00.000Z', // PST slot
]);

/**
 * Convert timezone string to zone name for date-fns-tz
 */
function getTimeZone(timezone: Timezone): string {
  return timezone === 'KST' ? 'Asia/Seoul' : 'America/Vancouver';
}

/**
 * Convert datetime between timezones
 */
export function convertTimezone(
  dateTime: Date, 
  fromTimezone: Timezone, 
  toTimezone: Timezone
): Date {
  if (fromTimezone === toTimezone) return dateTime;
  
  const fromZone = getTimeZone(fromTimezone);
  const toZone = getTimeZone(toTimezone);
  
  // Convert from source timezone to UTC, then to target timezone
  const utcTime = fromZonedTime(dateTime, fromZone);
  return toZonedTime(utcTime, toZone);
}

/**
 * Check if a specific datetime slot is available
 */
export function isSlotAvailable(datetime: Date): boolean {
  const utcISOString = datetime.toISOString();
  return !MOCK_BUSY_SLOTS.has(utcISOString);
}

/**
 * Generate available dates for consultation booking
 */
export function getAvailableDates(
  consultationType: ConsultationType,
  daysAhead: number = 14
): AvailableDate[] {
  const dates: AvailableDate[] = [];
  const today = new Date();
  
  for (let i = 1; i <= daysAhead; i++) {
    const date = addDays(today, i);
    
    // For offline consultations, exclude weekends
    if (consultationType === 'offline' && isWeekend(date)) {
      continue;
    }
    
    // Skip dates with no available slots
    const hasAvailableSlots = getAvailableSlots(date, consultationType, 'PST').length > 0;
    
    dates.push({
      value: format(date, 'yyyy-MM-dd'),
      label: format(date, 'M월 d일 (EEE)', { locale: ko }),
      date: date,
      isAvailable: hasAvailableSlots
    });
  }
  
  return dates.filter(date => date.isAvailable);
}

/**
 * Get available time slots for a specific date
 */
export function getAvailableSlots(
  date: Date,
  consultationType: ConsultationType,
  timezone: Timezone
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  
  // Get business hours for the consultation type and timezone
  let availableSlots: string[] = [];
  
  if (consultationType === 'online') {
    availableSlots = [...(BUSINESS_HOURS.online[timezone]?.slots || [])];
  } else if (consultationType === 'offline') {
    // Offline consultations are only available in PST (Vancouver office)
    availableSlots = [...BUSINESS_HOURS.offline.PST.slots];
    timezone = 'PST'; // Force PST for offline consultations
  }
  
  const dateStart = startOfDay(date);
  
  availableSlots.forEach(timeStr => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    
    // Create the datetime in the specified timezone
    const slotTime = new Date(dateStart);
    slotTime.setHours(hours, minutes, 0, 0);
    
    // Convert to UTC for storage and availability checking
    const utcDateTime = fromZonedTime(slotTime, getTimeZone(timezone));
    
    // Check if this slot is available
    const available = isSlotAvailable(utcDateTime);
    
    // Skip past times (if date is today)
    const now = new Date();
    if (format(date, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd') && slotTime <= now) {
      return; // Skip past times
    }
    
    slots.push({
      value: timeStr,
      label: `${timeStr} (${timezone})`,
      isAvailable: available,
      datetime: utcDateTime
    });
  });
  
  return slots.filter(slot => slot.isAvailable);
}

/**
 * Parse user's date and time selection into UTC datetime
 */
export function parseUserDateTime(
  dateStr: string, // 'yyyy-MM-dd'
  timeStr: string, // 'HH:mm'
  timezone: Timezone
): Date {
  const dateTime = parse(`${dateStr} ${timeStr}`, 'yyyy-MM-dd HH:mm', new Date());
  return fromZonedTime(dateTime, getTimeZone(timezone));
}

/**
 * Format datetime for display in user's timezone
 */
export function formatDisplayDateTime(
  utcDateTime: Date,
  timezone: Timezone,
  locale: 'ko' | 'en' = 'ko'
): string {
  const zonedTime = toZonedTime(utcDateTime, getTimeZone(timezone));
  
  if (locale === 'ko') {
    return format(zonedTime, 'M월 d일 (EEE) HH:mm', { 
      locale: ko 
    }) + ` (${timezone})`;
  } else {
    return format(zonedTime, 'MMM d (EEE) HH:mm') + ` (${timezone})`;
  }
}

/**
 * Calculate consultation duration (default 90 minutes)
 */
export function getConsultationEndTime(startTime: Date, durationMinutes: number = 90): Date {
  return new Date(startTime.getTime() + (durationMinutes * 60 * 1000));
}

/**
 * Generate .ics calendar file content
 */
export function generateCalendarEvent(
  startTime: Date,
  endTime: Date,
  studentName: string,
  consultationType: ConsultationType,
  timezone: Timezone
): string {
  const formatICS = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  const eventTitle = consultationType === 'online' 
    ? `${studentName} 학생 온라인 유학 상담`
    : `${studentName} 학생 오프라인 유학 상담`;
    
  const eventLocation = consultationType === 'online' 
    ? 'Online (Zoom 링크는 별도 안내)'
    : '204-1046 Austin Avenue, Coquitlam, BC, Canada';
    
  const eventDescription = `On & Off New Page 유학 상담\\n\\n` +
    `학생: ${studentName}\\n` +
    `상담 방식: ${consultationType === 'online' ? '온라인' : '오프라인'}\\n` +
    `시간대: ${timezone}\\n\\n` +
    `문의: onf.newpage@gmail.com`;
  
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//On & Off New Page//Consultation//EN',
    'BEGIN:VEVENT',
    `DTSTART:${formatICS(startTime)}`,
    `DTEND:${formatICS(endTime)}`,
    `SUMMARY:${eventTitle}`,
    `DESCRIPTION:${eventDescription}`,
    `LOCATION:${eventLocation}`,
    `UID:consultation-${Date.now()}@newpageonf.com`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}