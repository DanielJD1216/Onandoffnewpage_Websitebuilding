# Product Requirements Document (PRD)
## On & Off New Page - Study Abroad Consultancy Website

---

## Executive Summary

**Project**: On & Off New Page Website Redesign
**Type**: Study Abroad Consultancy Platform (Canada-focused)
**Primary Market**: Korean families seeking Canadian education
**Launch Target**: October 2025 (MVP)
**Language**: Korean (Primary) / English (Secondary)

### Vision Statement
To create a premium, trust-building digital platform that guides Korean families through their Canadian study abroad journey with clarity, confidence, and personalized support.

---

## 1. Business Context

### 1.1 Company Overview
- **Name**: On & Off New Page
- **Founded**: 2024
- **Model**: Hybrid (Online consultations + Vancouver-based support)
- **Specialization**: Korean-Canadian education consulting for middle/high school students
- **Team Size**: 2-3 consultants

### 1.2 Current Challenges
1. **Information Architecture**: Abundant content but poor structure and navigation
2. **Platform Limitations**: Squarespace constraints limiting flexibility
3. **Conversion Optimization**: Lack of clear CTAs and user journey paths
4. **Brand Presence**: Need professional digital presence to build trust

### 1.3 Business Objectives
| Objective | Target | Timeline |
|-----------|--------|----------|
| Increase consultation bookings | 30+ monthly | 6 months |
| Build trust & professional image | 8-10% conversion rate | Ongoing |
| Improve content discoverability | 2+ min avg. session | 3 months |
| Establish SEO foundation | 500-1000 monthly visitors | 6 months |

---

## 2. Target Audience

### 2.1 Primary Persona: Korean Parents
**Demographics:**
- Age: 35-50 years old
- Location: South Korea (Seoul, Gyeonggi, major cities)
- Income: Upper-middle class
- Education: University-educated
- Budget: 30-50M KRW/year for education

**Characteristics:**
- High involvement in children's education decisions
- Research-driven, comparing multiple options
- Value trust, credentials, and success stories
- Prefer comprehensive support (visa, homestay, academics)
- Mobile-first users (KakaoTalk, Naver)

**Pain Points:**
- Complex Canadian education system
- Language barriers with Canadian institutions
- Uncertainty about homestay quality
- Lack of on-ground support in Canada

### 2.2 Secondary Persona: Students (11-18)
**Characteristics:**
- Influenced by parents but have personal preferences
- Interested in campus life, activities, location
- Digital natives, Instagram/YouTube users
- English proficiency varies

### 2.3 User Journey
```
Discovery → Research → Initial Contact → Consultation → Decision → Application → Ongoing Support
```
- **Discovery**: Naver/Google search, Instagram, referrals
- **Research**: Compare programs, read success stories, check credentials
- **Contact**: Fill inquiry form or book consultation
- **Consultation**: 1-2 sessions with parents leading
- **Decision**: Family discussion, final commitment
- **Support**: Visa, homestay, arrival, ongoing care

---

## 3. Feature Requirements

### 3.1 MVP Features (Priority 1)

#### 3.1.1 Homepage
- **Hero Section**
  - Clear value proposition in Korean
  - Trust indicators (years of experience, success rate)
  - Primary CTA: "무료 상담 예약" (Book Free Consultation)
  - Secondary CTA: "프로그램 안내" (View Programs)

#### 3.1.2 Program Pages
- **Regional Program Guides**
  - BC (Vancouver, Surrey, Burnaby)
  - Ontario (Toronto area)
  - Other provinces
- **School Type Comparison**
  - Public vs Private schools
  - Elementary vs Secondary
- **Clear Information Architecture**
  - Admission requirements
  - Cost breakdown
  - Timeline
  - Required documents

#### 3.1.3 Consultation Booking System
- **Multi-step Form**
  - Student information
  - Program interest
  - Preferred consultation time
  - Contact preferences (Phone/KakaoTalk/Email)
- **Calendar Integration**
  - Available slots display
  - Timezone handling (KST/PST)
  - Confirmation emails
- **Form Fields**:
  ```
  - Student Name (Korean/English)
  - Current Grade
  - Target Study Period
  - Region Preference
  - Parent Contact Info
  - Consultation Type (Online/Offline)
  - Additional Questions
  ```

#### 3.1.4 Success Stories
- **Case Study Format**
  - Student profile (anonymized)
  - Challenge/Solution/Result
  - School placement details
  - Parent testimonials
  - Visual timeline
- **Filter by**:
  - Region
  - School type
  - Student age

#### 3.1.5 Trust Building Elements
- **About Us Page**
  - Founder story
  - Team credentials
  - Canadian partnerships
  - Office location in Vancouver
- **Service Differentiators**
  - Direct operation in Canada
  - Homestay quality assurance
  - Academic monitoring
  - 24/7 emergency support

### 3.2 Phase 2 Features (Priority 2)

#### 3.2.1 Student Portal
- Application status tracking
- Document upload system
- Visa progress tracker
- Message center

#### 3.2.2 Resource Center
- Downloadable guides (PDF)
- Video testimonials
- Webinar recordings
- FAQ database

#### 3.2.3 Email Automation
- Consultation reminders
- Follow-up sequences
- Newsletter system
- Application milestone notifications

### 3.3 Future Features (Priority 3)

#### 3.3.1 Advanced Tools
- Cost calculator with real-time exchange rates
- School comparison tool
- Virtual campus tours
- AI chatbot for basic inquiries

#### 3.3.2 Payment Integration
- Consultation fee payment
- Service package payments
- Multi-currency support

---

## 4. Design Requirements

### 4.1 Brand Identity

#### 4.1.1 Logo
**Logo Location**: `/MAIN/Logo/On Off New Page jpeg logo.png`

**Logo Components:**
- **Primary Text**: "ON & OFF" in bold serif typography
- **Secondary Text**: "New Page" in elegant script font
- **Icon**: Open book symbol representing education and new beginnings
- **Background Color**: Cream/Ivory (#F4ECDE)
- **Text Color**: Black (#000000)

**Logo Usage Guidelines:**
- Maintain clear space equal to the height of the book icon around logo
- Minimum size: 120px width for digital
- Use on light backgrounds preferably
- Alternative versions needed: Dark background version, Favicon, Mobile header version

#### 4.1.2 Color Palette
**Primary Colors:**
- Deep Green: `#114B3F` (Trust, growth, Canada nature)
- Ivory Background: `#F4ECDE` (From logo, clean, premium)

**Secondary Colors:**
- Soft Beige: `#ECEBE3` (Warmth, approachability)
- Gold Accent: `#A48242` (Premium, success)
- Black: `#000000` (Text, logo)

### 4.2 Design Principles
1. **Premium Minimal**: Clean layouts with generous whitespace
2. **Trust-First**: Professional imagery, clear credentials
3. **Mobile-Optimized**: 80% of traffic expected from mobile
4. **Cultural Sensitivity**: Korean-first design patterns
5. **Accessibility**: WCAG AA+ compliance
6. **Brand Consistency**: Logo prominently displayed, consistent use of brand colors

### 4.3 Typography
- **Headings**: Pretendard or Noto Sans KR (Bold/Black) - matching logo's serif style
- **Body**: Spoqa Han Sans or Apple SD Gothic (Regular/Medium)
- **Script Elements**: Consider using similar script font to "New Page" for special accents
- **English**: Inter or SF Pro Display

### 4.4 UI Components
- **Navigation**: Sticky header with logo on left, mega menu for programs
- **Cards**: Service cards with hover effects matching brand colors
- **Forms**: Multi-step with progress indicators in brand green
- **CTAs**: High contrast buttons using brand green with Korean labels
- **Social Proof**: Floating review widget
- **Chat**: KakaoTalk channel integration with brand colors

### 4.5 Page Templates
1. **Homepage**: Logo-centered hero → Services → Programs → Success Stories → CTA
2. **Program Page**: Overview → Requirements → Process → Cost → FAQ → Book
3. **About**: Story → Team → Credentials → Partners → Contact
4. **Blog/Resource**: Featured → Categories → Archive → Newsletter

---

## 5. Technical Specifications

### 5.1 Technology Stack
**Recommended Approach:**
- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **CMS**: Supabase + Admin Panel
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4 + Naver Analytics

### 5.2 Performance Requirements
- **Page Load**: < 3 seconds on 4G
- **Core Web Vitals**: All green scores
- **Mobile Score**: 90+ on PageSpeed Insights
- **SEO Score**: 95+ on Lighthouse

### 5.3 Internationalization
**Primary Language**: Korean (ko-KR)
**Secondary Language**: English (en-CA)
- URL structure: `/ko/programs` and `/en/programs`
- Hreflang tags for SEO
- Language switcher in header (next to logo)

### 5.4 SEO Requirements
**Target Keywords (Korean)**:
- "캐나다 조기유학"
- "밴쿠버 유학원"
- "캐나다 중학교 유학"
- "캐나다 홈스테이"

**Technical SEO**:
- Schema markup for local business
- XML sitemap
- Meta descriptions in Korean
- Open Graph tags optimized for KakaoTalk (including logo)

### 5.5 Integrations
**Phase 1 (MVP)**:
- Google Analytics 4
- Naver Search Console
- KakaoTalk Channel
- Email service (Resend/SendGrid)

**Phase 2**:
- CRM integration (HubSpot/Salesforce)
- Calendar booking (Calendly/Cal.com)
- WhatsApp Business API

---

## 6. Content Strategy

### 6.1 Content Types
1. **Program Guides**: Detailed, SEO-optimized pages
2. **Success Stories**: 10-15 case studies at launch
3. **Blog Posts**: 2-3 monthly on study abroad topics
4. **Downloadable Resources**: PDF guides with logo, checklists
5. **Video Content**: Testimonials, virtual tours with logo watermark

### 6.2 Content Management
- **Update Frequency**: Weekly for blog, monthly for programs
- **Languages**: All content in Korean, key pages in English
- **Approval Process**: Consultant review → Legal check → Publish
- **Brand Consistency**: All content must include logo and follow brand guidelines

### 6.3 Content Migration
- Audit existing Squarespace content
- Prioritize high-traffic pages
- Rewrite for SEO optimization
- Create 301 redirects
- Ensure logo is properly displayed on all pages

---

## 7. Success Metrics

### 7.1 Business KPIs
| Metric | Current | 3 Month Target | 6 Month Target |
|--------|---------|----------------|----------------|
| Monthly Consultation Bookings | 5-10 | 20 | 30+ |
| Conversion Rate | Unknown | 5% | 8-10% |
| Average Session Duration | < 1 min | 1.5 min | 2+ min |
| Monthly Visitors | < 100 | 300 | 500-1000 |
| Bounce Rate | > 70% | 50% | 40% |

### 7.2 Technical Metrics
- **Uptime**: 99.9%
- **Response Time**: < 200ms
- **Error Rate**: < 1%
- **Mobile Traffic**: > 70%

### 7.3 User Satisfaction
- **CSAT Score**: > 4.5/5
- **Task Completion Rate**: > 80%
- **Support Tickets**: < 5% of users

---

## 8. Risk Analysis

### 8.1 Technical Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| Slow page load | High bounce rate | CDN, optimization, compress logo |
| Mobile compatibility | Lost conversions | Mobile-first design, responsive logo |
| Form abandonment | Lost leads | Progressive disclosure |

### 8.2 Business Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| Low SEO ranking | No organic traffic | Content strategy, backlinks |
| Competitor features | Lost market share | Quarterly feature review |
| Seasonal fluctuation | Revenue impact | Year-round content plan |
| Brand confusion | Lost recognition | Consistent logo usage |

---

## 9. Implementation Timeline

### Phase 1: MVP (Weeks 1-8)
**Week 1-2: Setup & Planning**
- Project setup
- Design system creation (incorporating logo)
- Database schema design

**Week 3-4: Core Development**
- Homepage with logo integration
- Program pages
- Consultation booking

**Week 5-6: Content & Polish**
- Success stories
- About section
- SEO optimization

**Week 7-8: Testing & Launch**
- UAT with stakeholders
- Performance optimization
- Soft launch

### Phase 2: Enhancement (Months 3-4)
- Student portal
- Email automation
- Analytics dashboard

### Phase 3: Scale (Months 5-6)
- Advanced features
- Payment integration
- CRM integration

---

## 10. Compliance & Legal

### 10.1 Privacy Requirements
- **PIPEDA Compliance** (Canadian privacy law)
- **PIPA Compliance** (Korean privacy law)
- Cookie consent banner
- Privacy policy in both languages
- Data retention policy

### 10.2 Accessibility
- **WCAG 2.1 AA** compliance
- Keyboard navigation
- Screen reader support (including logo alt text)
- High contrast mode
- Font size controls

### 10.3 Terms of Service
- Service agreement
- Refund policy
- Disclaimer for visa outcomes
- Homestay terms
- Logo trademark notice

---

## Appendices

### A. Competitor Analysis
**Key Competitors:**
1. **성주유학** (https://canadayouhak.co.kr)
   - Strengths: Established brand, comprehensive content
   - Weaknesses: Dated design, poor mobile experience

2. **IGE 유학** (https://www.ige.kr)
   - Strengths: Clean design, good information architecture
   - Weaknesses: Generic feel, limited personalization

### B. User Research Notes
- Parents prefer phone/KakaoTalk over email
- Trust indicators crucial for conversion
- Success stories most viewed content
- Mobile usage peaks 8-10 PM KST
- Regional program pages highest intent
- Professional logo increases trust perception

### C. Technical Dependencies
- Supabase account with RLS policies
- Vercel deployment setup
- Domain with Korean hosting considerations
- SSL certificate
- Email service provider account
- Logo files in multiple formats (PNG, SVG, ICO)

### D. Asset Inventory
**Existing Assets:**
- Logo: `/MAIN/Logo/On Off New Page jpeg logo.png`
- Brand colors defined
- Content from current Squarespace site
- Instagram content library
- Success story testimonials

**Required Assets:**
- Logo variations (dark mode, favicon, social media)
- Professional photography (Vancouver locations, schools)
- Icon set matching brand style
- Custom illustrations for processes
- Video testimonials

---

## Approval

**Document Version**: 1.0
**Created Date**: December 2024
**Author**: On & Off New Page Product Team
**Status**: READY FOR IMPLEMENTATION

---

*This PRD serves as the single source of truth for the On & Off New Page website development project. All implementation decisions should reference this document.*