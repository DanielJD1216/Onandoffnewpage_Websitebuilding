-- On & Off New Page - Initial Database Schema (Fixed)
-- Korean-Canadian Study Abroad Consultancy Platform

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "citext";

-- Create custom types (ENUMs)
CREATE TYPE user_role_enum AS ENUM ('student', 'parent', 'staff', 'admin');
CREATE TYPE gender_enum AS ENUM ('male', 'female', 'other', 'prefer_not_to_say');
CREATE TYPE region_enum AS ENUM ('BC', 'Ontario', 'Alberta', 'Quebec');
CREATE TYPE school_type_enum AS ENUM ('public', 'private');
CREATE TYPE school_level_enum AS ENUM ('elementary', 'secondary', 'post_secondary');
CREATE TYPE consultation_type_enum AS ENUM ('online', 'offline');
CREATE TYPE consultation_stage_enum AS ENUM ('initial', 'follow_up');
CREATE TYPE consultation_status_enum AS ENUM ('pending', 'scheduled', 'completed', 'cancelled');
CREATE TYPE inquiry_status_enum AS ENUM ('new', 'in_progress', 'resolved', 'closed');
CREATE TYPE contact_method_enum AS ENUM ('email', 'phone', 'kakao', 'whatsapp');
CREATE TYPE content_status_enum AS ENUM ('draft', 'published', 'archived');

-- Staff emails whitelist (for RLS policies)
CREATE TABLE staff_emails (
  email CITEXT PRIMARY KEY,
  is_active BOOLEAN DEFAULT true,
  role user_role_enum DEFAULT 'staff',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert initial staff email BEFORE enabling RLS (fixes bootstrap issue)
INSERT INTO staff_emails (email, role) VALUES 
('admin@onoffnewpage.com', 'admin');

-- User profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email CITEXT UNIQUE NOT NULL,
  role user_role_enum DEFAULT 'student',
  
  -- Personal Information
  korean_name TEXT,
  english_name TEXT,
  phone TEXT,
  kakao_id TEXT,
  preferred_contact contact_method_enum DEFAULT 'email',
  
  -- Student-specific fields
  current_grade TEXT,
  birth_year INTEGER,
  gender gender_enum,
  
  -- Parent-specific fields (when role = 'parent')
  student_korean_name TEXT,
  student_english_name TEXT,
  
  -- Preferences and consent
  preferred_language TEXT DEFAULT 'ko',
  timezone TEXT DEFAULT 'America/Vancouver',
  consent_to_contact BOOLEAN DEFAULT false,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_birth_year CHECK (birth_year >= 1950 AND birth_year <= 2020),
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Programs/Schools table
CREATE TABLE programs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_en TEXT NOT NULL,
  name_ko TEXT NOT NULL,
  
  -- Location and type
  region region_enum NOT NULL,
  city TEXT NOT NULL,
  school_type school_type_enum NOT NULL,
  school_level school_level_enum NOT NULL,
  
  -- Program details
  description_en TEXT,
  description_ko TEXT,
  tuition_cad DECIMAL(10,2),
  application_fee_cad DECIMAL(10,2),
  
  -- Requirements and features
  minimum_grade_requirement TEXT,
  language_requirements TEXT,
  special_programs TEXT[],
  
  -- Administrative
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Search optimization (fixed Korean text search)
  search_vector tsvector GENERATED ALWAYS AS (
    to_tsvector('english', name_en || ' ' || COALESCE(description_en, '') || ' ' || city) ||
    to_tsvector('simple', name_ko || ' ' || COALESCE(description_ko, ''))
  ) STORED
);

-- Consultations table (anonymous forms, staff-only view)
CREATE TABLE consultations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Student Information
  student_korean_name TEXT NOT NULL,
  student_english_name TEXT,
  parent_name TEXT,
  email CITEXT NOT NULL,
  phone TEXT,
  kakao_id TEXT,
  
  -- Academic Information
  current_grade TEXT NOT NULL,
  target_study_period TEXT NOT NULL,
  region_preference region_enum,
  
  -- Consultation Details
  consultation_type consultation_type_enum NOT NULL,
  consultation_stage consultation_stage_enum DEFAULT 'initial',
  status consultation_status_enum DEFAULT 'pending',
  preferred_contact contact_method_enum DEFAULT 'email',
  message TEXT,
  
  -- Assignment and scheduling
  consultant_email CITEXT,
  scheduled_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  
  -- Compliance (enforced at insert)
  consent_to_contact BOOLEAN NOT NULL DEFAULT true,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_consultation_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_scheduled_future CHECK (scheduled_at IS NULL OR scheduled_at > created_at),
  CONSTRAINT valid_completion CHECK (completed_at IS NULL OR completed_at >= created_at),
  CONSTRAINT consultations_consent CHECK (consent_to_contact = true)
);

-- General inquiries table (anonymous forms, staff-only view)
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Contact Information
  name TEXT NOT NULL,
  email CITEXT NOT NULL,
  phone TEXT,
  preferred_contact contact_method_enum DEFAULT 'email',
  
  -- Inquiry Details
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  
  -- Status tracking
  status inquiry_status_enum DEFAULT 'new',
  assigned_to_email CITEXT,
  response TEXT,
  
  -- Compliance (enforced at insert)
  consent_to_contact BOOLEAN NOT NULL DEFAULT true,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  responded_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT valid_inquiry_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT inquiries_consent CHECK (consent_to_contact = true)
);

-- Content pages for CMS
CREATE TABLE content_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  
  -- Content
  title_en TEXT NOT NULL,
  title_ko TEXT NOT NULL,
  content_en TEXT,
  content_ko TEXT,
  excerpt_en TEXT,
  excerpt_ko TEXT,
  
  -- SEO and metadata
  meta_description_en TEXT,
  meta_description_ko TEXT,
  featured_image_url TEXT,
  
  -- Publishing
  status content_status_enum DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  author_email CITEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_slug CHECK (slug ~ '^[a-z0-9\-]+$')
);

-- Success stories table
CREATE TABLE success_stories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Student information (anonymized)
  student_initials TEXT NOT NULL,
  graduation_year INTEGER,
  origin_country TEXT DEFAULT 'South Korea',
  
  -- Journey details
  program_region region_enum,
  school_type school_type_enum,
  school_level school_level_enum,
  
  -- Story content
  title_en TEXT NOT NULL,
  title_ko TEXT NOT NULL,
  story_en TEXT NOT NULL,
  story_ko TEXT NOT NULL,
  quote_en TEXT,
  quote_ko TEXT,
  
  -- Media
  photo_url TEXT,
  
  -- Publishing
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_graduation_year CHECK (graduation_year >= 2020 AND graduation_year <= 2030)
);

-- Create indexes for performance
CREATE INDEX idx_profiles_auth_id ON profiles(auth_id);
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_role ON profiles(role);

CREATE INDEX idx_programs_region ON programs(region);
CREATE INDEX idx_programs_school_type ON programs(school_type);
CREATE INDEX idx_programs_school_level ON programs(school_level);
CREATE INDEX idx_programs_active ON programs(is_active) WHERE is_active = true;
CREATE INDEX idx_programs_search ON programs USING gin(search_vector);

CREATE INDEX idx_consultations_email ON consultations(email);
CREATE INDEX idx_consultations_status ON consultations(status);
CREATE INDEX idx_consultations_consultant ON consultations(consultant_email) WHERE consultant_email IS NOT NULL;
CREATE INDEX idx_consultations_created_at ON consultations(created_at);

CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_inquiries_assigned ON inquiries(assigned_to_email) WHERE assigned_to_email IS NOT NULL;
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at);

CREATE INDEX idx_content_pages_slug ON content_pages(slug);
CREATE INDEX idx_content_pages_status ON content_pages(status);
CREATE INDEX idx_content_pages_published ON content_pages(published_at) WHERE published_at IS NOT NULL;

CREATE INDEX idx_success_stories_published ON success_stories(is_published, published_at) WHERE is_published = true;
CREATE INDEX idx_success_stories_featured ON success_stories(is_featured) WHERE is_featured = true;

CREATE INDEX idx_staff_emails_active ON staff_emails(email, is_active) WHERE is_active = true;

-- Add Foreign Keys for data integrity
ALTER TABLE consultations ADD CONSTRAINT fk_consultant_email 
  FOREIGN KEY (consultant_email) REFERENCES staff_emails(email);

ALTER TABLE inquiries ADD CONSTRAINT fk_assigned_to_email 
  FOREIGN KEY (assigned_to_email) REFERENCES staff_emails(email);

ALTER TABLE content_pages ADD CONSTRAINT fk_author_email 
  FOREIGN KEY (author_email) REFERENCES staff_emails(email);

-- Enable Row Level Security on all tables (AFTER seeding staff_emails)
ALTER TABLE staff_emails ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Staff emails: Only staff can manage
CREATE POLICY "Staff can manage staff emails" ON staff_emails
  FOR ALL
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

-- Profiles: Users can manage their own, staff can manage all
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT
  USING (auth.uid() = auth_id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE
  USING (auth.uid() = auth_id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = auth_id);

CREATE POLICY "Staff can view all profiles" ON profiles
  FOR SELECT
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

CREATE POLICY "Staff can update all profiles" ON profiles
  FOR UPDATE
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

-- Programs: Public read, staff manage
CREATE POLICY "Anyone can view active programs" ON programs
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Staff can manage programs" ON programs
  FOR ALL
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

CREATE POLICY "Staff can insert programs" ON programs
  FOR INSERT
  WITH CHECK (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

-- Consultations: Anonymous insert, staff-only view/manage
CREATE POLICY "Anyone can create consultations" ON consultations
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Staff can view all consultations" ON consultations
  FOR SELECT
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

CREATE POLICY "Staff can update all consultations" ON consultations
  FOR UPDATE
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

CREATE POLICY "Staff can insert consultations" ON consultations
  FOR INSERT
  WITH CHECK (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

-- Inquiries: Anonymous insert, staff-only view/manage
CREATE POLICY "Anyone can create inquiries" ON inquiries
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Staff can view all inquiries" ON inquiries
  FOR SELECT
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

CREATE POLICY "Staff can update all inquiries" ON inquiries
  FOR UPDATE
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

CREATE POLICY "Staff can insert inquiries" ON inquiries
  FOR INSERT
  WITH CHECK (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

-- Content pages: Public read published, staff manage all
CREATE POLICY "Anyone can view published content" ON content_pages
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Staff can manage content" ON content_pages
  FOR ALL
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

CREATE POLICY "Staff can insert content" ON content_pages
  FOR INSERT
  WITH CHECK (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

-- Success stories: Public read published, staff manage all
CREATE POLICY "Anyone can view published success stories" ON success_stories
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Staff can manage success stories" ON success_stories
  FOR ALL
  USING (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

CREATE POLICY "Staff can insert success stories" ON success_stories
  FOR INSERT
  WITH CHECK (auth.jwt()->>'email' IN (SELECT email FROM staff_emails WHERE is_active = true));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers to all tables
CREATE TRIGGER update_staff_emails_updated_at BEFORE UPDATE ON staff_emails FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_consultations_updated_at BEFORE UPDATE ON consultations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_content_pages_updated_at BEFORE UPDATE ON content_pages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_success_stories_updated_at BEFORE UPDATE ON success_stories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample programs
INSERT INTO programs (name_en, name_ko, region, city, school_type, school_level, description_en, description_ko, tuition_cad) VALUES
('Burnaby School District', '버나비 교육청', 'BC', 'Burnaby', 'public', 'secondary', 'Top-rated public school district in Metro Vancouver', '밴쿠버 광역권 최고 수준의 공립 교육청', 15000.00),
('Coquitlam School District', '코퀴틀람 교육청', 'BC', 'Coquitlam', 'public', 'secondary', 'Excellent academic programs and ESL support', '우수한 학업 프로그램과 ESL 지원', 14500.00),
('West Vancouver School District', '웨스트 밴쿠버 교육청', 'BC', 'West Vancouver', 'public', 'secondary', 'Premium education in affluent community', '고급 지역의 프리미엄 교육', 16500.00);