'use server';

import { createClient } from '@/lib/supabase/server';
import { createClient as createServiceClient } from '@supabase/supabase-js';
import { InsertConsultation } from '@/types/database';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ConsultationConfirmationEmail } from '@/emails/consultation-confirmation';
import { AdminConsultationNotification } from '@/emails/admin-consultation-notification';
import { createConsultationCalendarEvent, generateICSFile } from '@/lib/utils/calendar-generator';

const resend = new Resend(process.env.RESEND_API_KEY);

type ConsultationSubmissionData = Omit<InsertConsultation, 'id' | 'created_at' | 'updated_at' | 'status' | 'consultation_stage' | 'consultant_email' | 'scheduled_at' | 'completed_at'>;

interface ConsultationBookingData extends ConsultationSubmissionData {
  preferred_date: string;
  preferred_time: string;
  timezone: 'KST' | 'PST';
  urgency: 'normal' | 'urgent';
  service_type: 'independent' | 'parent-accompanied';
  support_services: ('visa-support' | 'guardianship' | 'homestay-matching' | 'medical-insurance' | 'life-setup' | 'academic-monitoring' | 'university-pathway' | 'emergency-support' | 'parent-immigration')[];
  budget_range?: 'under-25k' | '25k-35k' | '35k-45k' | 'over-45k' | 'need-breakdown';
}

export async function submitConsultation(data: ConsultationSubmissionData) {
  try {
    // Use service role client to bypass RLS for anonymous submissions
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    const { data: insertedData, error } = await supabase
      .from('consultations')
      .insert([{
        ...data,
        status: 'pending',
        consultation_stage: 'initial'
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase consultation insert error:', error);
      return {
        success: false,
        error: 'Failed to submit consultation request'
      };
    }

    // Revalidate relevant pages
    revalidatePath('/consultation');
    revalidatePath('/admin/consultations');

    return {
      success: true,
      data: insertedData
    };

  } catch (error) {
    console.error('Consultation submission error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred'
    };
  }
}

export async function submitConsultationBooking(data: ConsultationBookingData) {
  try {
    // Convert date and time to proper scheduled_at timestamp
    const { preferred_date, preferred_time, timezone, urgency, service_type, support_services, budget_range, ...consultationData } = data;
    
    // Parse the date and time
    const [year, month, day] = preferred_date.split('-').map(Number);
    const [hours, minutes] = preferred_time.split(':').map(Number);
    
    // Create date in the specified timezone
    let scheduledDate = new Date(year, month - 1, day, hours, minutes);
    
    // If timezone is KST, convert to UTC (KST is UTC+9)
    if (timezone === 'KST') {
      scheduledDate = new Date(scheduledDate.getTime() - (9 * 60 * 60 * 1000));
    } 
    // If timezone is PST, convert to UTC (PST is UTC-8, PDT is UTC-7)
    // For simplicity, using PST offset. In production, consider daylight saving time
    else if (timezone === 'PST') {
      scheduledDate = new Date(scheduledDate.getTime() + (8 * 60 * 60 * 1000));
    }

    // Use service role client to bypass RLS for anonymous submissions
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    const { data: insertedData, error } = await supabase
      .from('consultations')
      .insert([{
        ...consultationData,
        status: 'scheduled', // Changed from urgency check to 'scheduled' since we have a date/time
        consultation_stage: 'initial', // This is the first consultation
        scheduled_at: scheduledDate.toISOString(),
        // Enhanced Phase 1 fields with proper database columns
        service_type,
        support_services,
        budget_range: budget_range || null
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase consultation booking error:', error);
      return {
        success: false,
        error: 'Failed to book consultation'
      };
    }

    // Send confirmation emails (both client and admin)
    try {
      // Generate calendar event
      const calendarEvent = createConsultationCalendarEvent({
        clientName: consultationData.parent_name || consultationData.student_korean_name,
        clientEmail: consultationData.email,
        consultationType: service_type,
        preferredDate: preferred_date,
        preferredTime: preferred_time,
        language: 'ko' // Default to Korean for this market
      });
      
      const icsFile = generateICSFile(calendarEvent);

      // Prepare email data for both templates
      const emailData = {
        clientName: consultationData.parent_name || consultationData.student_korean_name,
        clientEmail: consultationData.email,
        clientPhone: consultationData.phone || undefined,
        kakaoId: consultationData.kakao_id || undefined,
        studentName: consultationData.student_korean_name || undefined,
        studentAge: undefined, // Not in current schema
        currentGrade: consultationData.current_grade || undefined,
        consultationType: service_type,
        serviceType: service_type,
        interestedPrograms: [], // Not in current schema
        supportServices: support_services || [],
        budgetRange: budget_range || undefined,
        preferredDate: preferred_date,
        preferredTime: preferred_time,
        contactMethod: (consultationData.preferred_contact as 'email' | 'phone' | 'kakao') || 'email',
        additionalInfo: consultationData.message || undefined,
        submittedAt: new Date(),
        language: 'ko' as 'ko' | 'en' // Korean market focus
      };

      // Send client confirmation email
      const clientEmailHtml = await render(ConsultationConfirmationEmail(emailData));
      
      // Send admin notification email  
      const adminEmailHtml = await render(AdminConsultationNotification(emailData));

      // Send both emails in parallel
      const [clientEmailResult, adminEmailResult] = await Promise.allSettled([
        // Client confirmation email with calendar attachment
        resend.emails.send({
          from: 'On & Off New Page <noreply@onoffnewpage.com>',
          to: consultationData.email,
          subject: emailData.language === 'ko' 
            ? `상담 예약 확정 - ${emailData.clientName}님` 
            : `Consultation Confirmed - ${emailData.clientName}`,
          html: clientEmailHtml,
          attachments: [
            {
              filename: 'consultation-appointment.ics',
              content: Buffer.from(icsFile, 'utf-8'),
              contentType: 'text/calendar',
            },
          ],
        }),
        
        // Admin notification email
        resend.emails.send({
          from: 'On & Off New Page System <system@onoffnewpage.com>',
          to: 'onf.newpage@gmail.com',
          subject: `🔔 New Consultation: ${emailData.clientName} (${service_type})`,
          html: adminEmailHtml,
          replyTo: consultationData.email, // Allow admin to reply directly to client
        })
      ]);

      // Log email results (don't fail the whole operation if emails fail)
      if (clientEmailResult.status === 'fulfilled') {
        console.log('✅ Client confirmation email sent:', clientEmailResult.value.data?.id);
      } else {
        console.error('❌ Failed to send client email:', clientEmailResult.reason);
      }

      if (adminEmailResult.status === 'fulfilled') {
        console.log('✅ Admin notification email sent:', adminEmailResult.value.data?.id);
      } else {
        console.error('❌ Failed to send admin email:', adminEmailResult.reason);
      }

    } catch (emailError) {
      // Log email errors but don't fail the consultation booking
      console.error('Email sending error (non-blocking):', emailError);
    }

    // Revalidate relevant pages
    revalidatePath('/consultation');
    revalidatePath('/admin/consultations');

    return {
      success: true,
      data: insertedData
    };

  } catch (error) {
    console.error('Consultation booking error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred while booking'
    };
  }
}