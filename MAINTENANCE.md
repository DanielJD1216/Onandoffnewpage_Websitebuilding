# Maintenance Guide - On & Off Study Abroad Website

This guide explains common tasks for maintaining and updating the website. No advanced coding skills required for most tasks!

## Table of Contents

1. [Updating Text Content](#updating-text-content)
2. [Managing School Listings](#managing-school-listings)
3. [Updating Images](#updating-images)
4. [Managing Contact Form Submissions](#managing-contact-form-submissions)
5. [Managing Bookings](#managing-bookings)
6. [Updating Translations](#updating-translations)
7. [Adding New Pages](#adding-new-pages)
8. [Common Maintenance Tasks](#common-maintenance-tasks)

---

## Updating Text Content

Content is stored in two places: **translation files** for reusable text and **components** for page-specific content.

### Updating Translations (Korean/English)

Translation files store all text that appears on multiple pages (like buttons, form labels, navigation).

**Location**: `/messages/ko.json` (Korean) and `/messages/en.json` (English)

**Example - Update a button text**:

1. Open `/messages/ko.json`
2. Find the text you want to change:

```json
{
  "navigation": {
    "home": "홈",
    "about": "회사소개",
    "schools": "학교 정보"
  }
}
```

3. Edit the text
4. Do the same for `/messages/en.json`
5. Save and the changes appear immediately (in dev mode)

**Important**: Both Korean and English files must have the same structure/keys!

### Updating Page Content

Page-specific content is in the page files.

**Homepage content**: `/src/app/[locale]/page.tsx`

**Example - Change homepage hero text**:

```typescript
// Find this section in page.tsx
<h1>
  한국 학생들을 위한 캐나다 유학 전문
</h1>

// Change the text
<h1>
  캐나다 조기유학의 모든 것
</h1>
```

**Other pages**:
- About page: `/src/app/[locale]/about/page.tsx`
- Schools: `/src/app/[locale]/schools/page.tsx`
- Services: `/src/app/[locale]/services/page.tsx`

### After Making Changes

```bash
# Test locally
npm run dev

# If it looks good, deploy
git add .
git commit -m "Update homepage text"
git push
```

Vercel will automatically deploy the changes in 2-3 minutes.

---

## Managing School Listings

School information is stored in the **Supabase database**.

### Option 1: Update Via Supabase Dashboard (Easiest)

1. Go to [supabase.com](https://supabase.com) and sign in
2. Select your project
3. Click "Table Editor" in sidebar
4. Select the `schools` table
5. Click on any row to edit
6. Update the information
7. Click "Save"

Changes appear on the website immediately!

### Option 2: Update Via Code

If there's no database admin panel, school data might be in:

**Location**: Look for `/src/lib/data/schools.ts` or similar

```typescript
export const schools = [
  {
    id: 1,
    name: "Vancouver Secondary School",
    location: "Vancouver, BC",
    type: "Public",
    description: "Excellent STEM programs...",
    // ... more fields
  },
  // Add or edit schools here
];
```

### Adding a New School

In Supabase:
1. Go to Table Editor → `schools` table
2. Click "Insert" → "Insert row"
3. Fill in all fields:
   - Name (English and Korean)
   - Location
   - Type (Public/Private)
   - Description
   - Tuition costs
   - Image URL
4. Save

The new school appears on the schools page immediately!

---

## Updating Images

### Where Images Are Stored

**Local images**: `/public/images/`

Structure:
```
public/
├── images/
│   ├── hero/          # Homepage hero images
│   ├── schools/       # School photos
│   ├── about/         # About page images
│   └── services/      # Service page images
├── icons/             # Icons and logos
└── fonts/             # Custom fonts
```

### Replacing an Image

1. **Find the current image**:
   ```bash
   # Example: Homepage hero image is probably at:
   /public/images/hero/hero-image.jpg
   ```

2. **Replace with new image**:
   - Use the SAME filename, OR
   - Update the reference in the code

3. **If changing filename**, find where it's used:
   ```bash
   # Search for the image filename in code
   grep -r "hero-image.jpg" src/
   ```

4. **Update the reference**:
   ```typescript
   // In the component file
   <Image
     src="/images/hero/hero-image.jpg"  // Change this path
     alt="Hero image"
   />
   ```

### Image Best Practices

- **Format**: Use `.webp` or `.jpg` for photos, `.png` for logos
- **Size**: Optimize images before uploading
  - Homepage hero: Max 1920px wide
  - School photos: Max 800px wide
  - Thumbnails: Max 400px wide
- **File names**: Use descriptive names like `vancouver-secondary-front.jpg`

### Using Supabase Storage for Images

If images are stored in Supabase:

1. Go to Supabase dashboard → Storage
2. Select the bucket (e.g., `school-images`)
3. Upload new image
4. Copy the public URL
5. Update the image URL in the database or code

---

## Managing Contact Form Submissions

Contact form submissions are stored in Supabase.

### Viewing Submissions

1. Go to Supabase dashboard
2. Table Editor → `inquiries` or `contact_submissions` table
3. View all submissions with:
   - Name
   - Email
   - Phone
   - Message
   - Submission date
   - Status

### Marking as Responded

1. Click on a submission row
2. Change `status` field from `new` to `responded` or `completed`
3. Save

### Exporting to Excel

1. In Table Editor, click the three dots (...)
2. Select "Download as CSV"
3. Open in Excel or Google Sheets

### Setting Up Email Notifications

Email notifications are sent via Resend to the email specified in the code.

**Find the recipient email**:
```bash
# Search for email in API route
grep -r "to:" src/app/api/contact/
```

**Update recipient**:
```typescript
// In /src/app/api/contact/route.ts
await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'your-email@example.com',  // Change this
  subject: 'New Contact Form Submission',
  // ...
});
```

---

## Managing Bookings

Consultation bookings are handled via Stripe and stored in Supabase.

### Viewing Bookings

**In Supabase**:
1. Table Editor → `consultations` or `bookings` table
2. View all bookings with:
   - Customer name and email
   - Booking date/time
   - Payment status
   - Consultation type

**In Stripe Dashboard**:
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Payments → All payments
3. See payment details and customer info

### Refunding a Booking

1. Go to Stripe Dashboard → Payments
2. Find the payment
3. Click "Refund"
4. Enter refund amount (full or partial)
5. Confirm refund

The refund processes in 5-10 business days to customer's card.

### Changing Booking Times

If a customer needs to reschedule:

1. Go to Supabase → `consultations` table
2. Find the booking
3. Update the `scheduled_at` field
4. Save
5. Send customer a confirmation email

---

## Updating Translations

The website supports Korean and English.

### Translation Files

- **Korean**: `/messages/ko.json`
- **English**: `/messages/en.json`

### Structure

Both files must have identical structure:

```json
{
  "homepage": {
    "hero": {
      "title": "한국 학생들을 위한 캐나다 유학",
      "subtitle": "믿을 수 있는 유학 파트너"
    }
  }
}
```

```json
{
  "homepage": {
    "hero": {
      "title": "Study Abroad in Canada",
      "subtitle": "Your Trusted Study Partner"
    }
  }
}
```

### Adding New Translations

1. Add to both `ko.json` and `en.json`
2. Use the same key structure
3. Example - Add a new section:

```json
// ko.json
{
  "services": {
    "newService": {
      "title": "새로운 서비스",
      "description": "서비스 설명"
    }
  }
}

// en.json
{
  "services": {
    "newService": {
      "title": "New Service",
      "description": "Service description"
    }
  }
}
```

4. Use in code:

```typescript
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('services');

  return <h2>{t('newService.title')}</h2>;
}
```

---

## Adding New Pages

### Simple Pages (Just Content)

1. Create new file in `/src/app/[locale]/your-page/page.tsx`

```typescript
export default function YourPage() {
  return (
    <div>
      <h1>Your New Page</h1>
      <p>Content goes here...</p>
    </div>
  );
}
```

2. Add navigation link in `/src/components/Navigation.tsx` (or wherever nav is)

3. Add translations for the page title and content

4. Test: `npm run dev` then visit `/ko/your-page` and `/en/your-page`

### Pages with Dynamic Content

For pages that fetch data from Supabase:

```typescript
import { createClient } from '@/lib/supabase/server';

export default async function DynamicPage() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('your_table')
    .select('*');

  return (
    <div>
      {data?.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

---

## Common Maintenance Tasks

### Update Footer Information

**Location**: `/src/components/Footer.tsx` or similar

Update contact info, addresses, social links, etc.

### Change Logo

1. Replace `/public/icons/logo.png` (or similar)
2. If filename changed, update references in:
   - Navigation component
   - Footer component
   - `public/favicon.ico`

### Update Meta Tags (SEO)

**Each page** has metadata at the top:

```typescript
export const metadata = {
  title: 'Page Title - On & Off Study Abroad',
  description: 'Page description for Google...',
};
```

Update these for better SEO.

### Update Colors/Styling

Main styling configuration:

**Tailwind config**: `/tailwind.config.ts`

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

**CSS variables**: `/src/app/globals.css`

```css
:root {
  --primary-color: #your-color;
}
```

### Check for Broken Links

```bash
# Install broken link checker
npm install -g broken-link-checker

# Run check
blc http://localhost:3000 -ro
```

### Update Dependencies

Every few months, update packages:

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Or update specific package
npm install package-name@latest
```

**Test thoroughly** after updating!

### Backup the Database

In Supabase dashboard:
1. Go to Database → Backups
2. Click "Create backup"
3. Download backup files

Or use SQL export:
1. SQL Editor
2. Run: `SELECT * FROM your_table;`
3. Export results as CSV

---

## Getting Help

### Logs and Debugging

**Vercel Logs**:
1. Go to [vercel.com](https://vercel.com)
2. Select your project
3. Click "Logs"
4. Filter by errors

**Browser Console**:
1. Open website
2. Press F12 (or Cmd+Option+I on Mac)
3. Go to "Console" tab
4. Look for red error messages

### Common Error Messages

**"Module not found"**
- Run: `npm install`

**"Environment variable not defined"**
- Check `.env.local` has all required variables
- Restart dev server

**"Database connection failed"**
- Check Supabase credentials in `.env.local`

### When to Call a Developer

Call a developer if you need to:
- Add complex new features
- Integrate third-party services
- Fix broken payment/booking system
- Make major structural changes
- Deal with security issues

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

## Maintenance Schedule

### Weekly
- [ ] Check contact form submissions
- [ ] Review new bookings
- [ ] Respond to customer inquiries

### Monthly
- [ ] Review website analytics
- [ ] Check for broken links
- [ ] Update school information if needed
- [ ] Backup database

### Quarterly
- [ ] Update dependencies (`npm update`)
- [ ] Review and update content
- [ ] Check SEO performance
- [ ] Review and optimize images

### Annually
- [ ] Renew domain (if applicable)
- [ ] Review hosting costs
- [ ] Major content refresh
- [ ] Security audit

---

**Need more help?** Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) or contact your development team!
