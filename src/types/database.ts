// Generated TypeScript types for On & Off New Page database schema

export type UserRole = 'student' | 'parent' | 'staff' | 'admin';
export type Gender = 'male' | 'female' | 'other' | 'prefer_not_to_say';
export type Region = 'BC' | 'Ontario' | 'Alberta' | 'Quebec';
export type SchoolType = 'public' | 'private';
export type SchoolLevel = 'elementary' | 'secondary' | 'post_secondary';
export type ConsultationType = 'online' | 'offline';
export type ConsultationStage = 'initial' | 'follow_up';
export type ConsultationStatus = 'pending' | 'scheduled' | 'completed' | 'cancelled';
export type InquiryStatus = 'new' | 'in_progress' | 'resolved' | 'closed';
export type ContactMethod = 'email' | 'phone' | 'kakao' | 'whatsapp';
export type ContentStatus = 'draft' | 'published' | 'archived';

// Phase 1 Enhancement Types
export type ServiceType = 'independent' | 'parent-accompanied';
export type BudgetRange = 'under-25k' | '25k-35k' | '35k-45k' | 'over-45k' | 'need-breakdown';
export type SupportService = 'visa-support' | 'guardianship' | 'homestay-matching' | 'medical-insurance' | 'life-setup' | 'academic-monitoring' | 'university-pathway' | 'emergency-support' | 'parent-immigration';

export interface Database {
  public: {
    Tables: {
      staff_emails: {
        Row: {
          email: string;
          is_active: boolean;
          role: UserRole;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          email: string;
          is_active?: boolean;
          role?: UserRole;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          is_active?: boolean;
          role?: UserRole;
          created_at?: string;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          auth_id: string | null;
          email: string;
          role: UserRole;
          korean_name: string | null;
          english_name: string | null;
          phone: string | null;
          kakao_id: string | null;
          preferred_contact: ContactMethod;
          current_grade: string | null;
          birth_year: number | null;
          gender: Gender | null;
          student_korean_name: string | null;
          student_english_name: string | null;
          preferred_language: string;
          timezone: string;
          consent_to_contact: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          auth_id?: string | null;
          email: string;
          role?: UserRole;
          korean_name?: string | null;
          english_name?: string | null;
          phone?: string | null;
          kakao_id?: string | null;
          preferred_contact?: ContactMethod;
          current_grade?: string | null;
          birth_year?: number | null;
          gender?: Gender | null;
          student_korean_name?: string | null;
          student_english_name?: string | null;
          preferred_language?: string;
          timezone?: string;
          consent_to_contact?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          auth_id?: string | null;
          email?: string;
          role?: UserRole;
          korean_name?: string | null;
          english_name?: string | null;
          phone?: string | null;
          kakao_id?: string | null;
          preferred_contact?: ContactMethod;
          current_grade?: string | null;
          birth_year?: number | null;
          gender?: Gender | null;
          student_korean_name?: string | null;
          student_english_name?: string | null;
          preferred_language?: string;
          timezone?: string;
          consent_to_contact?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      programs: {
        Row: {
          id: string;
          name_en: string;
          name_ko: string;
          region: Region;
          city: string;
          school_type: SchoolType;
          school_level: SchoolLevel;
          description_en: string | null;
          description_ko: string | null;
          tuition_cad: number | null;
          application_fee_cad: number | null;
          minimum_grade_requirement: string | null;
          language_requirements: string | null;
          special_programs: string[] | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name_en: string;
          name_ko: string;
          region: Region;
          city: string;
          school_type: SchoolType;
          school_level: SchoolLevel;
          description_en?: string | null;
          description_ko?: string | null;
          tuition_cad?: number | null;
          application_fee_cad?: number | null;
          minimum_grade_requirement?: string | null;
          language_requirements?: string | null;
          special_programs?: string[] | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name_en?: string;
          name_ko?: string;
          region?: Region;
          city?: string;
          school_type?: SchoolType;
          school_level?: SchoolLevel;
          description_en?: string | null;
          description_ko?: string | null;
          tuition_cad?: number | null;
          application_fee_cad?: number | null;
          minimum_grade_requirement?: string | null;
          language_requirements?: string | null;
          special_programs?: string[] | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      consultations: {
        Row: {
          id: string;
          student_korean_name: string;
          student_english_name: string | null;
          parent_name: string | null;
          email: string;
          phone: string | null;
          kakao_id: string | null;
          current_grade: string;
          target_study_period: string;
          region_preference: Region | null;
          consultation_type: ConsultationType;
          consultation_stage: ConsultationStage;
          status: ConsultationStatus;
          preferred_contact: ContactMethod;
          message: string | null;
          consultant_email: string | null;
          scheduled_at: string | null;
          completed_at: string | null;
          consent_to_contact: boolean;
          // Phase 1 Enhancement Fields
          service_type: ServiceType;
          support_services: SupportService[];
          budget_range: BudgetRange | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          student_korean_name: string;
          student_english_name?: string | null;
          parent_name?: string | null;
          email: string;
          phone?: string | null;
          kakao_id?: string | null;
          current_grade: string;
          target_study_period: string;
          region_preference?: Region | null;
          consultation_type: ConsultationType;
          consultation_stage?: ConsultationStage;
          status?: ConsultationStatus;
          preferred_contact?: ContactMethod;
          message?: string | null;
          consultant_email?: string | null;
          scheduled_at?: string | null;
          completed_at?: string | null;
          consent_to_contact?: boolean;
          // Phase 1 Enhancement Fields
          service_type?: ServiceType;
          support_services?: SupportService[];
          budget_range?: BudgetRange | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          student_korean_name?: string;
          student_english_name?: string | null;
          parent_name?: string | null;
          email?: string;
          phone?: string | null;
          kakao_id?: string | null;
          current_grade?: string;
          target_study_period?: string;
          region_preference?: Region | null;
          consultation_type?: ConsultationType;
          consultation_stage?: ConsultationStage;
          status?: ConsultationStatus;
          preferred_contact?: ContactMethod;
          message?: string | null;
          consultant_email?: string | null;
          scheduled_at?: string | null;
          completed_at?: string | null;
          consent_to_contact?: boolean;
          // Phase 1 Enhancement Fields
          service_type?: ServiceType;
          support_services?: SupportService[];
          budget_range?: BudgetRange | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          preferred_contact: ContactMethod;
          subject: string;
          message: string;
          category: string;
          status: InquiryStatus;
          assigned_to_email: string | null;
          response: string | null;
          consent_to_contact: boolean;
          created_at: string;
          updated_at: string;
          responded_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          preferred_contact?: ContactMethod;
          subject: string;
          message: string;
          category?: string;
          status?: InquiryStatus;
          assigned_to_email?: string | null;
          response?: string | null;
          consent_to_contact?: boolean;
          created_at?: string;
          updated_at?: string;
          responded_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          preferred_contact?: ContactMethod;
          subject?: string;
          message?: string;
          category?: string;
          status?: InquiryStatus;
          assigned_to_email?: string | null;
          response?: string | null;
          consent_to_contact?: boolean;
          created_at?: string;
          updated_at?: string;
          responded_at?: string | null;
        };
      };
      content_pages: {
        Row: {
          id: string;
          slug: string;
          title_en: string;
          title_ko: string;
          content_en: string | null;
          content_ko: string | null;
          excerpt_en: string | null;
          excerpt_ko: string | null;
          meta_description_en: string | null;
          meta_description_ko: string | null;
          featured_image_url: string | null;
          status: ContentStatus;
          published_at: string | null;
          author_email: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title_en: string;
          title_ko: string;
          content_en?: string | null;
          content_ko?: string | null;
          excerpt_en?: string | null;
          excerpt_ko?: string | null;
          meta_description_en?: string | null;
          meta_description_ko?: string | null;
          featured_image_url?: string | null;
          status?: ContentStatus;
          published_at?: string | null;
          author_email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title_en?: string;
          title_ko?: string;
          content_en?: string | null;
          content_ko?: string | null;
          excerpt_en?: string | null;
          excerpt_ko?: string | null;
          meta_description_en?: string | null;
          meta_description_ko?: string | null;
          featured_image_url?: string | null;
          status?: ContentStatus;
          published_at?: string | null;
          author_email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      success_stories: {
        Row: {
          id: string;
          student_initials: string;
          graduation_year: number | null;
          origin_country: string;
          program_region: Region | null;
          school_type: SchoolType | null;
          school_level: SchoolLevel | null;
          title_en: string;
          title_ko: string;
          story_en: string;
          story_ko: string;
          quote_en: string | null;
          quote_ko: string | null;
          photo_url: string | null;
          is_featured: boolean;
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          student_initials: string;
          graduation_year?: number | null;
          origin_country?: string;
          program_region?: Region | null;
          school_type?: SchoolType | null;
          school_level?: SchoolLevel | null;
          title_en: string;
          title_ko: string;
          story_en: string;
          story_ko: string;
          quote_en?: string | null;
          quote_ko?: string | null;
          photo_url?: string | null;
          is_featured?: boolean;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          student_initials?: string;
          graduation_year?: number | null;
          origin_country?: string;
          program_region?: Region | null;
          school_type?: SchoolType | null;
          school_level?: SchoolLevel | null;
          title_en?: string;
          title_ko?: string;
          story_en?: string;
          story_ko?: string;
          quote_en?: string | null;
          quote_ko?: string | null;
          photo_url?: string | null;
          is_featured?: boolean;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_role_enum: UserRole;
      gender_enum: Gender;
      region_enum: Region;
      school_type_enum: SchoolType;
      school_level_enum: SchoolLevel;
      consultation_type_enum: ConsultationType;
      consultation_stage_enum: ConsultationStage;
      consultation_status_enum: ConsultationStatus;
      inquiry_status_enum: InquiryStatus;
      contact_method_enum: ContactMethod;
      content_status_enum: ContentStatus;
      service_type_enum: ServiceType;
      budget_range_enum: BudgetRange;
      support_service_enum: SupportService;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

// Utility types for easier usage
export type StaffEmail = Database['public']['Tables']['staff_emails']['Row'];
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Program = Database['public']['Tables']['programs']['Row'];
export type Consultation = Database['public']['Tables']['consultations']['Row'];
export type Inquiry = Database['public']['Tables']['inquiries']['Row'];
export type ContentPage = Database['public']['Tables']['content_pages']['Row'];
export type SuccessStory = Database['public']['Tables']['success_stories']['Row'];

export type InsertStaffEmail = Database['public']['Tables']['staff_emails']['Insert'];
export type InsertProfile = Database['public']['Tables']['profiles']['Insert'];
export type InsertProgram = Database['public']['Tables']['programs']['Insert'];
export type InsertConsultation = Database['public']['Tables']['consultations']['Insert'];
export type InsertInquiry = Database['public']['Tables']['inquiries']['Insert'];
export type InsertContentPage = Database['public']['Tables']['content_pages']['Insert'];
export type InsertSuccessStory = Database['public']['Tables']['success_stories']['Insert'];

export type UpdateStaffEmail = Database['public']['Tables']['staff_emails']['Update'];
export type UpdateProfile = Database['public']['Tables']['profiles']['Update'];
export type UpdateProgram = Database['public']['Tables']['programs']['Update'];
export type UpdateConsultation = Database['public']['Tables']['consultations']['Update'];
export type UpdateInquiry = Database['public']['Tables']['inquiries']['Update'];
export type UpdateContentPage = Database['public']['Tables']['content_pages']['Update'];
export type UpdateSuccessStory = Database['public']['Tables']['success_stories']['Update'];