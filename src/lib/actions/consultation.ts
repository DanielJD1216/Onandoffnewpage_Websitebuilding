'use server';

import { createClient } from '@/lib/supabase/server';
import { createClient as createServiceClient } from '@supabase/supabase-js';
import { InsertConsultation } from '@/types/database';
import { revalidatePath } from 'next/cache';

interface ConsultationSubmissionData extends Omit<InsertConsultation, 'id' | 'created_at' | 'updated_at' | 'status' | 'consultation_stage' | 'consultant_email' | 'scheduled_at' | 'completed_at'> {}

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