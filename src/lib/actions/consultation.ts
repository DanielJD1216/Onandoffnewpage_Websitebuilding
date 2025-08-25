'use server';

import { createClient } from '@/lib/supabase/server';
import { createClient as createServiceClient } from '@supabase/supabase-js';
import { InsertConsultation } from '@/types/database';
import { revalidatePath } from 'next/cache';

interface ConsultationSubmissionData extends Omit<InsertConsultation, 'id' | 'created_at' | 'updated_at' | 'status' | 'consultation_stage' | 'consultant_email' | 'scheduled_at' | 'completed_at'> {}

interface ConsultationBookingData extends ConsultationSubmissionData {
  preferred_date: string;
  preferred_time: string;
  timezone: 'KST' | 'PST';
  urgency: 'normal' | 'urgent';
  service_type: 'independent' | 'parent-accompanied';
  support_services: string[];
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
        status: urgency === 'urgent' ? 'urgent' : 'pending',
        consultation_stage: 'scheduled',
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

    // TODO: Send confirmation email
    // TODO: Add to calendar system
    // TODO: Notify admin/consultants

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