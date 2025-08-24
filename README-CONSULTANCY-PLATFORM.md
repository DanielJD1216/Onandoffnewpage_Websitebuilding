# On & Off New Page - Study Abroad Consultancy Platform

A premium Korean-Canadian education consulting website specializing in Canadian study abroad programs for Korean students (ages 11-18). Built with Next.js 15, Supabase, and optimized for Korean market with KakaoTalk integration.

## Quick Start

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your actual values.

3. **Initialize shadcn/ui**
   ```bash
   npx shadcn-ui@latest init -y
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## Project Overview

**Company**: On & Off New Page (Founded 2024)  
**Market**: Korean families seeking Canadian education opportunities  
**Model**: Hybrid operation (Online + Vancouver-based support)  
**Target**: 30+ monthly consultations, 8-10% conversion rate by 6 months  
**Launch**: October 2025 MVP

### Core Technologies
- **Next.js 15** - App Router with Korean/English SSR optimization
- **TypeScript** - Type safety with Korean character support
- **Tailwind CSS** - Utility-first with Korean typography integration
- **shadcn/ui** - Premium components matching brand aesthetic
- **next-intl** - Korean (primary) / English (secondary) localization

### Korean Market Integration
- **Supabase** - Database with KST timezone support and RLS policies
- **KakaoTalk Channel** - Primary communication method for Korean families
- **Naver Analytics** - SEO and search optimization for Korean market
- **Resend** - Email automation with Korean template support
- **Channel Talk** - Customer support in Korean language
- **Vercel** - Global CDN with optimal Korean network performance

### On & Off New Page Features
- **Regional Program Guides** - BC (Vancouver), Ontario (Toronto), other provinces
- **Multi-step Consultation Booking** - KST/PST timezone handling
- **Success Stories System** - Filtered case studies with Korean testimonials
- **Trust Building Elements** - Vancouver office presence, credentials showcase
- **Korean-First Design** - Mobile-optimized for 80% expected mobile traffic
- **PIPEDA/PIPA Compliance** - Canadian and Korean privacy law adherence

### Brand Identity
- **Logo**: "ON & OFF New Page" with book icon (`/MAIN/Logo/`)
- **Colors**: Deep Green (#114B3F), Ivory (#F4ECDE), Gold accent (#A48242)
- **Typography**: Pretendard/Noto Sans KR (Korean), Inter (English)
- **Design**: Premium minimal aesthetic for trust-building

### Development Tools
- ESLint & Prettier configured for Korean character support
- TypeScript strict mode with Korean type definitions
- Jest/Vitest testing framework with Korean test data
- Playwright E2E testing with timezone simulation
- Husky pre-commit hooks with Korean linting
- GitHub Actions CI/CD pipeline
- Supabase migrations with Korean RLS policies
- Git-ready with Korean-specific .gitignore

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── layout.tsx     # Localized layout
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── portal/        # Student portal
│   │   │   ├── admin/         # Admin dashboard
│   │   │   └── programs/      # University programs
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   ├── students/      # Student management
│   │   │   ├── applications/  # Application tracking
│   │   │   └── webhooks/      # Payment/CMS webhooks
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── forms/            # Form components
│   │   ├── portal/           # Student portal components
│   │   └── admin/            # Admin components
│   ├── lib/                   # Utility functions
│   │   ├── auth.ts           # Authentication helpers
│   │   ├── db.ts             # Database utilities
│   │   ├── validations.ts    # Zod schemas
│   │   └── utils.ts          # General utilities
│   └── types/                 # TypeScript type definitions
├── messages/                  # i18n translation files
│   ├── ko.json               # Korean translations (primary)
│   └── en.json               # English translations (secondary)
├── migrations/                # Database migrations
├── tests/                     # Test files
├── public/                    # Static assets
├── .env.local.example         # Environment template
├── next.config.js             # Next.js config with i18n
├── middleware.ts              # Auth and i18n middleware
├── components.json            # shadcn/ui config
├── tailwind.config.ts         # Tailwind config
└── package.json               # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Check TypeScript types
- `npm run test` - Run unit tests with Jest/Vitest
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run security:scan` - Run security vulnerability scan

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

### Core Services
**Supabase (Database & Auth)**
- Get from: https://supabase.com/dashboard/project/_/settings/api
- Required: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`

**Resend (Email Service)**
- Get from: https://resend.com/api-keys
- Required: `RESEND_API_KEY`

### Korean Market Services
**KakaoTalk Channel**
- Get from: https://channel.kakao.com/
- Required: `KAKAOTALK_CHANNEL_ID`, `KAKAOTALK_API_KEY`

**Naver Analytics**
- Get from: https://analytics.naver.com/
- Required: `NAVER_ANALYTICS_ID`

**Channel Talk (Korean Support)**
- Get from: https://console.channel.io/
- Required: `CHANNEL_TALK_PLUGIN_KEY`

### Analytics & Monitoring
**Vercel Analytics**: Built-in, no additional setup
**Google Analytics 4**: `GA_MEASUREMENT_ID`
**Sentry (Error Tracking)**: `SENTRY_DSN`

### Optional Services (Phase 2+)
**Payment Processing**: Stripe, Toss Payments (Korean market)
**Calendar Integration**: Calendly, Cal.com
**CRM Integration**: HubSpot, Salesforce

## Adding Components

Use shadcn/ui CLI to add components:

```bash
# Core UI components
npx shadcn-ui@latest add button card form input textarea
npx shadcn-ui@latest add dialog sheet tabs table
npx shadcn-ui@latest add select dropdown-menu calendar

# Advanced components for consultancy features
npx shadcn-ui@latest add data-table progress badge
npx shadcn-ui@latest add avatar tooltip alert-dialog
npx shadcn-ui@latest add command navigation-menu
```

## Core Features

### Multi-language Support
- Automatic language detection based on browser/location
- SEO-optimized URLs for each language (`/en/`, `/ko/`, `/zh/`, `/ja/`)
- Dynamic content translation with next-intl
- RTL support preparation

### Student Management Portal
- **Dashboard**: Application progress tracking
- **Document Management**: Secure upload with virus scanning
- **Communication Center**: Chat with consultants, appointment booking
- **Progress Tracking**: Visual timeline of application stages
- **Payment Center**: Fee tracking and invoice management

### Content Management System
- **University Database**: Comprehensive institution profiles
- **Program Catalog**: Course details, requirements, deadlines
- **Blog System**: Educational articles and success stories
- **Resource Library**: Guides, checklists, and templates
- **Event Management**: Webinars and consultation sessions

### Admin Dashboard
- **Student Overview**: Complete student lifecycle management
- **Application Tracking**: Bulk operations and status updates
- **Communication Tools**: Mass messaging and notifications
- **Analytics Dashboard**: Business metrics and reporting
- **Content Management**: CMS integration with approval workflows

### Security & Compliance
- **GDPR Compliance**: Cookie consent, data export/deletion
- **Data Encryption**: Sensitive information protection
- **Role-based Access**: Student/Consultant/Admin permissions
- **Audit Logging**: Complete activity tracking
- **File Security**: Virus scanning and type validation

## Deployment

### Production Deployment (Vercel)
1. **GitHub Setup**
   - Push code to GitHub repository
   - Set up branch protection rules
   - Configure GitHub Actions for CI/CD

2. **Vercel Configuration**
   - Import project to Vercel
   - Add all environment variables
   - Configure domain and SSL certificates
   - Set up preview deployments

3. **Database Setup**
   - Run production migrations on Supabase
   - Configure Row Level Security policies
   - Set up database backups
   - Enable point-in-time recovery

4. **CDN & Performance**
   - Configure Vercel Edge Functions
   - Set up global CDN for file assets
   - Enable compression and optimization
   - Configure caching strategies

5. **Monitoring & Analytics**
   - Set up Vercel Analytics
   - Configure error tracking (Sentry)
   - Enable performance monitoring
   - Set up uptime monitoring

### Security Checklist
- [ ] Environment variables secured
- [ ] API rate limiting configured
- [ ] HTTPS enforced with HSTS
- [ ] Content Security Policy implemented
- [ ] CORS properly configured
- [ ] File upload restrictions active
- [ ] Database backups scheduled
- [ ] Audit logging enabled

## Development Resources

### Core Technologies
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Internationalization
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [ICU Message Format](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
- [CLDR Locale Data](https://cldr.unicode.org/)

### Content Management
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

### Communication & Payments
- [SendBird UIKit React](https://sendbird.com/docs/uikit/v3/react/overview)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Resend Documentation](https://resend.com/docs)

### Security & Compliance
- [GDPR Compliance Guide](https://gdpr.eu/)
- [OWASP Security Guidelines](https://owasp.org/www-project-top-ten/)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/auth/row-level-security)

### Testing & Quality
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [Playwright E2E Testing](https://playwright.dev/docs/intro)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## License

MIT License - see LICENSE file for details.

## Support

For technical support and consultation on implementing this platform for your study abroad consultancy, please contact our development team.