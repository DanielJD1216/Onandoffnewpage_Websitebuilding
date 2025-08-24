# On & Off New Page - Korean-Canadian Study Abroad Platform Setup

Complete setup guide for the On & Off New Page study abroad consultancy website, specializing in Canadian education for Korean students with KakaoTalk integration and Korean market optimization.

## 1. Install Dependencies

### Core Dependencies
```bash
# Install base dependencies
npm install

# Korean market specific packages
npm install next-intl @supabase/supabase-js
npm install react-hook-form @hookform/resolvers zod
npm install @tanstack/react-query date-fns date-fns-tz
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install resend @react-email/components @react-email/render
```

### Korean Market Integration
```bash
# Install Korean-specific services
npm install kakaotalk-js-sdk
npm install @sendbird/chat @sendbird/uikit-react
npm install react-channel-plugin # Channel Talk
```

### Development Dependencies
```bash
# Install testing and development tools
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm install --save-dev playwright vitest @vitejs/plugin-react
npm install --save-dev husky lint-staged @types/node
npm install --save-dev @types/react @types/react-dom typescript
```

## 2. Environment Variables

1. **Copy the example file:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Configure core services:**

   ### Supabase (Database & Authentication)
   ```bash
   # Get from: https://supabase.com/dashboard/project/_/settings/api
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

   ### Email Service (Resend)
   ```bash
   # Get from: https://resend.com/api-keys
   RESEND_API_KEY=re_...
   ```

   ### Korean Market Services
   ```bash
   # KakaoTalk Channel - https://channel.kakao.com/
   NEXT_PUBLIC_KAKAOTALK_CHANNEL_ID=your_channel_id
   KAKAOTALK_API_KEY=your_api_key
   
   # Channel Talk (Korean Support) - https://console.channel.io/
   NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY=your_plugin_key
   
   # Naver Analytics - https://analytics.naver.com/
   NEXT_PUBLIC_NAVER_ANALYTICS_ID=your_analytics_id
   ```

   ### Analytics & Monitoring
   ```bash
   # Google Analytics 4
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
   
   # Sentry (Error tracking) - https://sentry.io
   SENTRY_DSN=https://your_sentry_dsn
   
   # Vercel Analytics (Built-in, no additional setup needed)
   ```

   ### Optional Services (Phase 2+)
   ```bash
   # Stripe (Payment Processing) - https://dashboard.stripe.com/apikeys
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   
   # Cal.com (Calendar Integration) - https://cal.com/
   CALCOM_API_KEY=your_api_key
   ```

## 3. Initialize Core Services

### shadcn/ui Components
```bash
# Initialize shadcn/ui with default config
npx shadcn-ui@latest init -y

# Add essential components for consultancy platform
npx shadcn-ui@latest add button card form input textarea
npx shadcn-ui@latest add dialog sheet tabs table data-table
npx shadcn-ui@latest add select calendar badge progress avatar
```

### Korean-First Internationalization Setup
```bash
# Create translation directories
mkdir -p messages
touch messages/ko.json messages/en.json

# Initialize middleware for Korean/English i18n
touch middleware.ts

# Set up Korean typography and fonts
npm install @next/font
```

### Logo and Brand Assets Setup
```bash
# Create logo directory structure
mkdir -p public/images/logo
mkdir -p src/components/brand

# Copy logo files to public directory
# Logo location: /MAIN/Logo/On Off New Page jpeg logo.png
```

## 4. Database Setup (Supabase)

### Initial Schema Migration
1. **Go to Supabase SQL Editor**
2. **Enable required extensions:**
   ```sql
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   CREATE EXTENSION IF NOT EXISTS "pgcrypto";
   CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For full-text search
   ```

3. **Create On & Off New Page specific tables:**
   ```sql
   -- Profiles table (Korean students and parents)
   CREATE TABLE profiles (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
     korean_name TEXT NOT NULL,
     english_name TEXT,
     email TEXT UNIQUE NOT NULL,
     phone TEXT,
     kakaotalk_id TEXT,
     date_of_birth DATE,
     current_grade TEXT,
     target_study_period TEXT,
     region_preference TEXT, -- BC, Ontario, etc.
     consultation_type TEXT DEFAULT 'online', -- online, offline
     parent_contact JSONB, -- parent information
     preferred_language TEXT DEFAULT 'ko',
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Consultations table (KST/PST timezone support)
   CREATE TABLE consultations (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
     consultant_email TEXT NOT NULL,
     consultation_type TEXT NOT NULL, -- initial, follow-up
     scheduled_at_kst TIMESTAMP WITH TIME ZONE NOT NULL,
     scheduled_at_pst TIMESTAMP WITH TIME ZONE NOT NULL,
     duration_minutes INTEGER DEFAULT 60,
     meeting_link TEXT,
     kakaotalk_room_id TEXT,
     status TEXT DEFAULT 'scheduled',
     notes TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Programs table (Canadian regional programs)
   CREATE TABLE programs (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     region TEXT NOT NULL, -- BC, Ontario, Alberta, etc.
     program_type TEXT NOT NULL, -- public, private
     school_level TEXT NOT NULL, -- elementary, secondary
     school_name TEXT NOT NULL,
     program_name TEXT NOT NULL,
     description_ko TEXT NOT NULL,
     description_en TEXT,
     admission_requirements JSONB,
     cost_breakdown JSONB, -- tuition, homestay, etc.
     timeline JSONB,
     is_featured BOOLEAN DEFAULT false,
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Success Stories table
   CREATE TABLE success_stories (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     student_profile JSONB NOT NULL, -- anonymized student info
     challenge_ko TEXT NOT NULL,
     solution_ko TEXT NOT NULL,
     result_ko TEXT NOT NULL,
     challenge_en TEXT,
     solution_en TEXT,
     result_en TEXT,
     school_placement TEXT NOT NULL,
     region TEXT NOT NULL,
     school_type TEXT NOT NULL,
     student_age INTEGER,
     testimonial_ko TEXT,
     testimonial_en TEXT,
     is_published BOOLEAN DEFAULT false,
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Inquiries table (contact form submissions)
   CREATE TABLE inquiries (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     korean_name TEXT NOT NULL,
     english_name TEXT,
     email TEXT NOT NULL,
     phone TEXT,
     kakaotalk_id TEXT,
     current_grade TEXT,
     target_study_period TEXT,
     region_preference TEXT,
     consultation_preference TEXT, -- online, offline
     additional_questions TEXT,
     preferred_contact_method TEXT, -- phone, kakaotalk, email
     status TEXT DEFAULT 'new',
     created_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Content Pages table (CMS-like functionality)
   CREATE TABLE content_pages (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     slug TEXT UNIQUE NOT NULL,
     title_ko TEXT NOT NULL,
     title_en TEXT,
     content_ko TEXT NOT NULL,
     content_en TEXT,
     meta_description_ko TEXT,
     meta_description_en TEXT,
     page_type TEXT NOT NULL, -- about, service, blog, etc.
     is_published BOOLEAN DEFAULT false,
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Analytics Events table
   CREATE TABLE analytics_events (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     event_type TEXT NOT NULL,
     event_data JSONB,
     user_id UUID REFERENCES auth.users(id),
     session_id TEXT,
     ip_address INET,
     user_agent TEXT,
     page_url TEXT,
     referrer TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

4. **Set up Row Level Security (RLS):**
   ```sql
   -- Enable RLS on all tables
   ALTER TABLE students ENABLE ROW LEVEL SECURITY;
   ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
   ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
   ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
   ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
   
   -- Students can only access their own data
   CREATE POLICY "Students can view own data" ON students
     FOR SELECT USING (auth.uid() = user_id);
   
   CREATE POLICY "Students can update own data" ON students
     FOR UPDATE USING (auth.uid() = user_id);
   
   -- Applications policies
   CREATE POLICY "Students can manage own applications" ON applications
     FOR ALL USING (
       student_id IN (
         SELECT id FROM students WHERE user_id = auth.uid()
       )
     );
   
   -- Documents policies
   CREATE POLICY "Students can manage own documents" ON documents
     FOR ALL USING (
       student_id IN (
         SELECT id FROM students WHERE user_id = auth.uid()
       )
     );
   
   -- Consultations policies
   CREATE POLICY "Students can view own consultations" ON consultations
     FOR SELECT USING (
       student_id IN (
         SELECT id FROM students WHERE user_id = auth.uid()
       )
     );
   
   -- Payments policies
   CREATE POLICY "Students can view own payments" ON payments
     FOR SELECT USING (
       student_id IN (
         SELECT id FROM students WHERE user_id = auth.uid()
       )
     );
   ```

5. **Create indexes for performance:**
   ```sql
   CREATE INDEX idx_students_user_id ON students(user_id);
   CREATE INDEX idx_applications_student_id ON applications(student_id);
   CREATE INDEX idx_documents_student_id ON documents(student_id);
   CREATE INDEX idx_consultations_student_id ON consultations(student_id);
   CREATE INDEX idx_payments_student_id ON payments(student_id);
   CREATE INDEX idx_applications_status ON applications(application_status);
   ```

## 5. Initialize Git and Pre-commit Hooks

```bash
# Initialize git repository (if not already done)
git init

# Set up Husky for pre-commit hooks
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"

# Create lint-staged configuration in package.json
# Add this to your package.json:
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,css,md}": ["prettier --write"]
  }
}
```

## 6. Configure Next.js for Internationalization

Create/update `next.config.js`:
```javascript
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@sanity/client']
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
```

## 7. Run Development Server

```bash
# Start development server with all services
npm run dev

# Run database migrations (if you have any)
npm run db:migrate

# Seed database with sample data (optional)
npm run db:seed
```

Visit http://localhost:3000

**Multi-language URLs will be available at:**
- English: http://localhost:3000/en
- Korean: http://localhost:3000/ko  
- Chinese: http://localhost:3000/zh
- Japanese: http://localhost:3000/ja

## Common Issues & Troubleshooting

### Authentication Issues

**Supabase Auth Not Working:**
- Check Site URL in Supabase Auth settings: `http://localhost:3000`
- Add redirect URLs: `http://localhost:3000/auth/callback`
- Verify JWT secret is correctly configured
- Check RLS policies are properly set up

**Multi-language Auth Redirects:**
```bash
# Add these redirect URLs to Supabase Auth settings:
http://localhost:3000/en/auth/callback
http://localhost:3000/ko/auth/callback
http://localhost:3000/zh/auth/callback
http://localhost:3000/ja/auth/callback
```

### Payment Integration Issues

**Stripe Webhooks in Development:**
```bash
# Install Stripe CLI
stripe login

# Forward webhooks to local development
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Test webhook endpoint
stripe trigger payment_intent.succeeded
```

**Missing Webhook Events:**
Ensure these events are selected in Stripe Dashboard:
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`

### CMS Integration Issues

**Sanity Schema Not Loading:**
```bash
# Verify Sanity configuration
sanity graphql deploy
sanity cors add http://localhost:3000 --credentials
```

**Missing Content Types:**
Ensure your Sanity schema includes these document types:
- `university`
- `program`  
- `blogPost`
- `page`
- `author`

### File Upload Issues

**File Upload Failing:**
- Check Supabase Storage bucket policies
- Verify file size limits (default: 50MB)
- Ensure virus scanning service is configured
- Check CORS settings for file uploads

**Storage Bucket Setup:**
```sql
-- Create storage bucket for documents
INSERT INTO storage.buckets (id, name, public) 
VALUES ('documents', 'documents', false);

-- Set up bucket policies
CREATE POLICY "Students can upload own documents" ON storage.objects 
  FOR INSERT WITH CHECK (
    bucket_id = 'documents' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Students can view own documents" ON storage.objects 
  FOR SELECT USING (
    bucket_id = 'documents' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );
```

### Development Environment Issues

**Environment Variables Not Loading:**
- Ensure `.env.local` file is in root directory
- Restart development server after changes
- Check for typos in variable names
- Verify no trailing spaces in values

**TypeScript Errors:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check TypeScript configuration
npm run typecheck
```

**i18n Not Working:**
- Check middleware.ts configuration
- Verify translation files exist in `/messages`
- Ensure locale is properly set in URL structure
- Restart development server after i18n changes

### Database Issues

**Migration Failures:**
```bash
# Reset database (development only)
supabase db reset

# Apply migrations manually
supabase db push
```

**RLS Policies Too Restrictive:**
```sql
-- Temporarily disable RLS for debugging (development only)
ALTER TABLE table_name DISABLE ROW LEVEL SECURITY;

-- Re-enable after fixing policies
ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;
```

## Next Steps

### Phase 1: Core Setup (Week 1)
1. **Complete component library setup:**
   ```bash
   npx shadcn-ui@latest add button card form input textarea
   npx shadcn-ui@latest add dialog sheet tabs table data-table
   npx shadcn-ui@latest add select calendar badge progress
   ```

2. **Set up translation files:**
   - Create comprehensive translation files for all 4 languages
   - Include common UI elements, form labels, error messages
   - Add business-specific terms (consultancy, applications, etc.)

3. **Configure authentication flow:**
   - Implement sign-up/sign-in pages for all locales
   - Set up role-based redirects (student portal, admin dashboard)
   - Configure password reset and email verification

### Phase 2: Student Portal (Week 2)
1. **Dashboard development:**
   - Application progress tracking
   - Upcoming deadlines and tasks
   - Quick access to documents and consultations

2. **Document management system:**
   - Secure file upload with progress indicators
   - Document categorization and organization
   - Version control for document updates

3. **Communication center:**
   - Message inbox with consultants
   - Consultation scheduling interface
   - Notification system setup

### Phase 3: Content Management (Week 3)
1. **Sanity CMS configuration:**
   - University and program schemas
   - Blog and resource content types
   - Multi-language content support

2. **Public website pages:**
   - Homepage with language switching
   - University/program listing pages
   - About us and services pages
   - Blog and resource sections

### Phase 4: Admin Features (Week 4)
1. **Admin dashboard:**
   - Student overview and management
   - Application tracking and status updates
   - Communication tools and bulk messaging

2. **Analytics and reporting:**
   - Business metrics dashboard
   - Student progress reports
   - Revenue and consultation tracking

### Phase 5: Testing & Deployment (Week 5-6)
1. **Comprehensive testing:**
   ```bash
   # Run all tests
   npm run test
   npm run test:e2e
   npm run security:scan
   ```

2. **Performance optimization:**
   - Image optimization and lazy loading
   - Database query optimization
   - Caching strategy implementation

3. **Production deployment:**
   - Environment setup on Vercel
   - Domain configuration and SSL
   - Monitoring and error tracking setup

### Development Checklist

**Before Starting Development:**
- [ ] All environment variables configured
- [ ] Database schema and RLS policies set up
- [ ] Sanity CMS project initialized
- [ ] Translation files created for all languages
- [ ] Git repository initialized with pre-commit hooks

**Security Checklist:**
- [ ] Content Security Policy configured
- [ ] Rate limiting implemented on API routes
- [ ] File upload security measures in place
- [ ] GDPR compliance components ready
- [ ] Authentication flows tested
- [ ] Database access controls verified

**Performance Checklist:**
- [ ] Image optimization configured
- [ ] Database indexes created
- [ ] Caching strategy implemented
- [ ] Bundle size optimization
- [ ] Core Web Vitals monitoring set up

**Accessibility Checklist:**
- [ ] Semantic HTML structure
- [ ] ARIA labels and roles
- [ ] Keyboard navigation support
- [ ] Color contrast compliance
- [ ] Screen reader compatibility
- [ ] Multi-language accessibility features

## Support Resources

**Technical Documentation:**
- [Platform Architecture Guide](./ARCHITECTURE.md)
- [API Documentation](./API.md) 
- [Deployment Guide](./DEPLOYMENT.md)
- [Security Guidelines](./SECURITY.md)

**Community Support:**
- GitHub Issues for bug reports
- Discord community for real-time help
- Weekly developer office hours
- Comprehensive video tutorials