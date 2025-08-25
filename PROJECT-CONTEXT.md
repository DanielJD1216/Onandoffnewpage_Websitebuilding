# PROJECT CONTEXT - On & Off New Page Study Abroad Platform
**Last Updated:** January 25, 2025
**Version:** 2.0
**Status:** MVP Development - Week 5 (Consultation Booking System)

> **CRITICAL FOR CLAUDE CODE**: This is the master context file. Always read this first when resuming work on this project. It contains the current state, pending tasks, and critical information needed to continue development.

---

## 🎯 Project Overview

### Business Context
- **Company:** On & Off New Page (온앤오프 뉴페이지)
- **Founded:** 2024
- **Type:** Korean-Canadian study abroad consultancy
- **Target Market:** Korean families seeking Canadian education (ages 11-18)
- **Primary Language:** Korean (80% of content)
- **Business Goal:** 30+ monthly consultations, 8-10% conversion rate by October 2025
- **Unique Value:** Direct Vancouver office operation + KakaoTalk integration

### Current Platform Status
- **Framework:** Next.js 14.2.32 (App Router)
- **Database:** Supabase (PostgreSQL)
- **UI:** shadcn/ui + Tailwind CSS
- **Deployment:** Local development (production target: Vercel)
- **Dev Server:** Running on http://localhost:3000 or 3001

---

## 📊 Implementation Progress

### ✅ Completed Features (What's Working)

#### 1. Project Infrastructure
- [x] Next.js 14 with TypeScript configured
- [x] Tailwind CSS + shadcn/ui integrated
- [x] Korean/English i18n with next-intl
- [x] Brand colors implemented (#114B3F, #F4ECDE, #A48242)
- [x] Logo integration complete
- [x] ESLint with custom form validation rules

#### 2. Database & Backend
- [x] Supabase project connected
- [x] 7 core tables created (profiles, consultations, programs, etc.)
- [x] RLS policies configured
- [x] TypeScript types generated from database
- [x] Server actions for consultation booking

#### 3. Core Pages
- [x] Homepage with hero section
- [x] About page with company story
- [x] Services page with offerings
- [x] Programs page with regional guides
- [x] Success stories page with case studies
- [x] Contact page with consultation form

#### 4. Components
- [x] Multi-step consultation booking form
- [x] Feature cards and grids
- [x] Announcement banner
- [x] Trust badges
- [x] Section headings with Korean/English support
- [x] Collapsible cards for FAQs
- [x] Success story cards with filtering

#### 5. Form System
- [x] React Hook Form + Zod validation
- [x] Multi-step form navigation
- [x] Korean/English timezone handling (KST/PST)
- [x] Form state management
- [x] Consultation type selection (independent/parent-accompanied)

#### 6. Documentation & Process
- [x] Component pattern documentation
- [x] ESLint rules for form validation
- [x] PR review checklist
- [x] Issue documentation prompt template
- [x] Development guide with Korean market considerations

### 🚧 In Progress (Current Sprint)

#### Week 5-6: Consultation Booking System Enhancement
- [ ] **Calendar Integration**
  - [ ] Available slots display with timezone support
  - [ ] Real-time availability checking
  - [ ] Booking confirmation system
  - [ ] Email notifications setup
  
- [ ] **Korean Market Integrations**
  - [ ] KakaoTalk Channel integration
  - [ ] Naver Analytics setup
  - [ ] Channel Talk for support
  - [ ] KakaoTalk AlimTalk templates

- [ ] **Form Improvements**
  - [ ] Fix dropdown placeholder issues (partially complete)
  - [ ] Add form progress indicator
  - [ ] Implement auto-save functionality
  - [ ] Add validation error messages in Korean

### 📋 Pending Tasks (Next Up)

#### Immediate Next Steps (This Week)
1. **Complete Consultation Booking**
   - Fix remaining form validation issues
   - Add calendar availability checking
   - Implement email confirmation system
   - Test KST/PST timezone conversion

2. **Content Population**
   - Add 10-15 success stories
   - Create program detail pages for BC/Ontario
   - Write service descriptions in Korean
   - Add FAQ content

3. **Performance & SEO**
   - Optimize Korean font loading
   - Implement image lazy loading
   - Add meta tags for Naver SEO
   - Configure Open Graph for KakaoTalk

#### Week 7-8: Testing & Launch Prep
- [ ] Mobile responsiveness testing
- [ ] Cross-browser compatibility
- [ ] Korean translation review
- [ ] Performance optimization (target: 90+ PageSpeed)
- [ ] Security audit
- [ ] Production deployment setup

---

## 🔧 Technical Configuration

### Environment Setup
```bash
# Development
cd "/Users/admin/Desktop/Vibe coding projects/Website Building (유학원)/MAIN"
npm run dev  # Runs on http://localhost:3000 or 3001

# Testing
npm run lint       # ESLint with custom form rules
npm run typecheck  # TypeScript validation
npm run build      # Production build test
```

### Key Environment Variables Required
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email Service
RESEND_API_KEY=

# Korean Services (Phase 2)
NEXT_PUBLIC_KAKAOTALK_CHANNEL_ID=
NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY=
NEXT_PUBLIC_NAVER_ANALYTICS_ID=
```

### Database Schema
```sql
-- Core tables created:
profiles            -- User profiles with Korean/English names
consultations       -- Booking records with timezone support
programs           -- Regional program information
success_stories    -- Case studies with filtering
inquiries          -- Contact form submissions
content_pages      -- CMS functionality
analytics_events   -- Conversion tracking
```

### File Structure
```
MAIN/
├── src/
│   ├── app/[locale]/        # Internationalized pages
│   ├── components/          # Reusable components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── consultation/   # Booking forms
│   │   └── layout/         # Layout components
│   ├── lib/                # Utilities
│   │   ├── actions/        # Server actions
│   │   └── supabase/       # Database client
│   └── types/              # TypeScript definitions
├── messages/               # i18n translations
│   ├── ko.json            # Korean
│   └── en.json            # English
├── docs/                   # Documentation
│   ├── component-patterns.md
│   └── issue-documentation-prompt.md
└── supabase/migrations/    # Database migrations
```

---

## ⚠️ Known Issues & Blockers

### Critical Issues
1. **Build Errors**
   - Unescaped quotes in success-stories/page.tsx (lines 183-203)
   - HTML anchor tag instead of Next Link in ConsultationBookingForm.tsx (line 222)
   - Empty interface in consultation.ts

### Non-Critical Issues
1. **Warnings**
   - Multiple unused imports across components
   - TypeScript 'any' types in several files
   - Missing dependencies in useEffect hooks

### Resolved Issues
1. ✅ Dropdown placeholder not showing (fixed with single source of defaults)
2. ✅ Next.js 15 routing issues (downgraded to 14.2.32)
3. ✅ Form state management conflicts (implemented pattern documentation)

---

## 🎯 Business Metrics & KPIs

### Current Status (Baseline)
- Monthly Consultations: 5-10
- Conversion Rate: Unknown
- Monthly Visitors: <100
- Average Session: <1 minute
- Bounce Rate: >70%

### Target Metrics (6 Months)
- Monthly Consultations: 30+
- Conversion Rate: 8-10%
- Monthly Visitors: 500-1000
- Average Session: 2+ minutes
- Bounce Rate: <40%

---

## 🚀 Deployment Information

### Current Environment
- **Development:** Local only
- **Preview:** Not configured yet
- **Production:** Not deployed

### Deployment Checklist (When Ready)
```bash
# Pre-deployment
npm run build      # Ensure no build errors
npm run typecheck  # Validate TypeScript
npm run lint       # Check code quality

# Vercel Deployment
vercel --prod      # Deploy to production
```

### Required for Production
1. Domain configuration (Korean-friendly hosting)
2. SSL certificate
3. Environment variables in Vercel
4. Supabase production instance
5. Email service configuration
6. Analytics setup (GA4 + Naver)

---

## 📝 Quick Reference Commands

### Common Development Tasks
```bash
# Start development
npm run dev

# Add new UI component
npx shadcn-ui@latest add [component-name]

# Check for issues
npm run lint
npm run typecheck

# Database migrations
supabase migration new [migration-name]
supabase db push

# Git workflow
git status
git add .
git commit -m "feat: [description]"
```

### Troubleshooting
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Reset Supabase
supabase db reset

# Check running processes
lsof -ti:3000  # Check port 3000
ps aux | grep next  # Find Next.js processes
```

---

## 👥 Team & Resources

### Key Contacts
- **Project Owner:** On & Off New Page Team
- **Target Users:** Korean parents (35-50) + Students (11-18)
- **Primary Language:** Korean (한국어)

### Documentation Links
- [Full PRD](./PRD.md) - Complete product requirements
- [Setup Guide](./SETUP.md) - Environment setup instructions
- [Development Guide](./DEVELOPMENT-GUIDE.md) - Best practices
- [Component Patterns](./docs/component-patterns.md) - Form implementation
- [Todo List](./tasks/todo.md) - Detailed task breakdown

### External Resources
- [Supabase Dashboard](https://supabase.com/dashboard)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Next.js Docs](https://nextjs.org/docs)

---

## 🔄 Session Handoff Protocol

### When Starting a New Claude Code Session

1. **Read This File First** - Get current context
2. **Check Running Services**
   ```bash
   cd "/Users/admin/Desktop/Vibe coding projects/Website Building (유학원)/MAIN"
   npm run dev  # Start if not running
   ```
3. **Review Recent Changes**
   ```bash
   git log --oneline -10
   git status
   ```
4. **Check Current Sprint** - See "In Progress" section above
5. **Continue From Last Task** - Pick up where previous session left off

### Before Ending a Session

1. **Update This File** - Mark completed tasks, add new issues
2. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: [what was completed]"
   ```
3. **Document Any Blockers** - Add to Known Issues section
4. **Update Next Steps** - Clear instructions for next session

---

## 📌 Priority Action Items

### Do These First (When Resuming Work):

1. **Fix Build Errors**
   - Fix unescaped quotes in success-stories/page.tsx
   - Replace HTML anchor with Next Link in ConsultationBookingForm.tsx
   - Fix empty interface in consultation.ts

2. **Complete Consultation Booking**
   - Implement calendar availability
   - Add email confirmations
   - Test timezone conversions

3. **Add Content**
   - Create 5+ success stories
   - Write program descriptions
   - Add Korean translations

4. **Prepare for Testing**
   - Mobile responsiveness check
   - Form validation testing
   - Performance optimization

---

**Remember:** This is a Korean-first platform. All UI text should prioritize Korean language, with English as secondary. Test all features with Korean content and consider Korean UX patterns (right-to-left reading for certain elements, KakaoTalk integration importance, mobile-first design).