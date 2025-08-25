# NEXT STEPS - Immediate Action Items
**Generated:** January 25, 2025
**Sprint:** Week 5-6 (Consultation Booking System)

> **For Claude Code**: Start here for immediate tasks. These are prioritized, actionable items with specific commands and file paths.

---

## 🔴 CRITICAL: Fix Build Errors First (30 minutes)

These errors are preventing successful builds. Fix immediately:

### 1. Fix Unescaped Quotes
**File:** `src/app/[locale]/success-stories/page.tsx`
**Lines:** 183, 193, 203
**Issue:** Unescaped quotation marks in JSX

```bash
# Open the file
code src/app/[locale]/success-stories/page.tsx

# Replace quotes with:
# " → &quot; or &ldquo;/&rdquo;
# Or wrap in template literals
```

### 2. Replace HTML Anchor with Next Link
**File:** `src/components/consultation/ConsultationBookingForm.tsx`
**Line:** 222
**Issue:** Using `<a>` instead of Next.js `<Link>`

```bash
# Fix the import
import Link from 'next/link'

# Replace:
<a href="/ko/">...</a>

# With:
<Link href="/ko/">...</Link>
```

### 3. Fix Empty Interface
**File:** `src/lib/actions/consultation.ts`
**Line:** 8
**Issue:** Empty interface extends object

```bash
# Either add properties or use type alias:
type ConsultationResult = Record<string, any>
# Or add actual properties to the interface
```

### Verify Fixes:
```bash
npm run build  # Should complete without errors
npm run typecheck  # Should pass
npm run lint  # Should have no errors
```

---

## 🟡 HIGH PRIORITY: Complete Consultation Booking (2-3 hours)

### 1. Calendar Integration
**Files to modify:**
- `src/components/consultation/ConsultationBookingForm.tsx`
- `src/lib/actions/consultation.ts`

**Tasks:**
```bash
# 1. Add availability checking
# Create new file: src/lib/utils/calendar.ts
# Add functions for:
- getAvailableSlots(date: Date, timezone: 'KST' | 'PST')
- isSlotAvailable(datetime: Date): boolean
- convertTimezone(date: Date, from: string, to: string)

# 2. Update form to show available times
# In ConsultationBookingForm.tsx:
- Add time slot selection after date selection
- Show times in user's timezone (KST for Korean users)
- Disable unavailable slots

# 3. Add confirmation system
# Create: src/app/api/send-confirmation/route.ts
- Send email using Resend
- Include consultation details in Korean/English
- Add calendar .ics file attachment
```

### 2. Email Notifications
**Setup Resend:**
```bash
# Install if not already installed
npm install resend @react-email/components

# Create email templates
mkdir -p src/emails
touch src/emails/consultation-confirmation.tsx
touch src/emails/consultation-reminder.tsx
```

**Template structure:**
```tsx
// src/emails/consultation-confirmation.tsx
export const ConsultationConfirmation = ({
  studentName,
  consultationDate,
  consultationType,
  language = 'ko'
}) => {
  // Korean-first email template
}
```

### 3. Test Timezone Handling
```bash
# Create test file
touch __tests__/utils/timezone.test.ts

# Test cases:
- KST to PST conversion
- PST to KST conversion
- Daylight saving time handling
- Available slots display
```

---

## 🟢 STANDARD PRIORITY: Content & Polish (1-2 hours)

### 1. Add Success Stories Content
**File:** `src/app/[locale]/success-stories/page.tsx`

```bash
# Add 5-10 real case studies
# Format:
{
  id: number,
  region: 'BC' | 'Ontario',
  schoolType: 'public' | 'private',
  grade: 'elementary' | 'middle' | 'high',
  challenge: string, // In Korean
  solution: string,  // In Korean
  result: string,    // In Korean
  testimonial: string // Parent quote in Korean
}
```

### 2. Complete Korean Translations
**File:** `messages/ko.json`

```bash
# Add missing translations for:
- Form validation messages
- Email templates
- Success messages
- Error messages
- Calendar-related text
```

### 3. Add FAQ Content
**File:** Create `src/data/faq.ts`

```bash
# Structure:
export const FAQ_DATA = {
  ko: [
    {
      category: '입학 절차',
      questions: [...]
    }
  ],
  en: [...]
}
```

---

## 🔵 TESTING CHECKLIST (1 hour)

### Mobile Testing
```bash
# Start dev server
npm run dev

# Test on mobile viewport (375px)
# Check:
- [ ] Navigation menu works
- [ ] Forms are usable
- [ ] Text is readable
- [ ] Images load properly
- [ ] Buttons are tappable
```

### Form Testing
```bash
# Test consultation form:
- [ ] All fields validate correctly
- [ ] Korean names accepted
- [ ] Phone number formats work
- [ ] Date picker works on mobile
- [ ] Form saves progress
- [ ] Success message shows
- [ ] Email confirmation sent
```

### Performance Check
```bash
# Build and analyze
npm run build
npx next-build-size

# Check bundle size
# Target: < 200KB First Load JS

# Run Lighthouse
# Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100
```

---

## 📋 Daily Workflow Checklist

### Morning Startup
```bash
cd "/Users/admin/Desktop/Vibe coding projects/Website Building (유학원)/MAIN"
git pull  # If using remote
npm run dev  # Start server
```

### Before Each Task
```bash
git status  # Check current state
npm run lint  # Check for issues
```

### After Each Feature
```bash
npm run build  # Verify builds
npm run typecheck  # Check types
git add .
git commit -m "feat: [description]"
```

### End of Day
```bash
# Update PROJECT-CONTEXT.md with:
- Completed tasks
- New issues found
- Tomorrow's priorities

git add .
git commit -m "docs: update project context"
```

---

## 🚦 Decision Points

### Need Decisions On:

1. **KakaoTalk Integration Level**
   - Just channel link? ✓ (Easy)
   - Full API integration? (Complex)
   - AlimTalk templates? (Requires business registration)

2. **Calendar System**
   - Simple time slots? ✓ (Current plan)
   - Google Calendar sync? (Extra complexity)
   - Custom booking system? (Most control)

3. **Email Service**
   - Resend? ✓ (Simple, good for start)
   - SendGrid? (More features)
   - AWS SES? (Most cost-effective at scale)

4. **Payment Integration Timing**
   - Phase 1 (MVP)? (Adds 1 week)
   - Phase 2? ✓ (Recommended)
   - Phase 3? (Too late)

---

## 🎯 Success Criteria for This Sprint

### Must Complete:
- [ ] Build errors fixed
- [ ] Consultation form fully functional
- [ ] Email confirmations working
- [ ] 5+ success stories added
- [ ] Mobile responsive

### Nice to Have:
- [ ] KakaoTalk channel linked
- [ ] Naver Analytics setup
- [ ] Performance optimized
- [ ] All Korean translations complete

### Can Defer:
- Payment integration
- Student portal
- Advanced analytics
- Video testimonials

---

## 📞 Quick Help

### Common Issues & Solutions:

**Port 3000 in use:**
```bash
lsof -ti:3000 | xargs kill
npm run dev
```

**Build failing:**
```bash
rm -rf .next
npm run build
```

**Type errors:**
```bash
npm run typecheck -- --noEmit false
# Check specific file
npx tsc --noEmit src/path/to/file.tsx
```

**Database issues:**
```bash
# Check Supabase connection
npx supabase status
# Reset database
npx supabase db reset
```

---

**Remember:** Focus on shipping MVP. Perfect is the enemy of done. Korean market needs trust and professionalism, but launch speed matters too.