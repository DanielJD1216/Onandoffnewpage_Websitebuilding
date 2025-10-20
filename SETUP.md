# Setup Guide - On & Off Study Abroad Website

Complete step-by-step setup instructions for developers taking over this project.

## Prerequisites

Before you begin, ensure you have:
- **Node.js** 18.x or higher ([download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** (for version control)
- A code editor (VS Code recommended)

## 1. Install Dependencies

```bash
# Navigate to the project directory
cd MAIN

# Install all dependencies (takes a few minutes)
npm install
```

All required packages are already defined in `package.json`.

## 2. Environment Variables Setup

### Step 1: Copy the Example File

```bash
cp .env.local.example .env.local
```

### Step 2: Get Your API Keys

You'll need accounts and API keys from these services:

#### A. Supabase (Database & Authentication)

**What it's used for**: Stores school data, contact forms, bookings, and user authentication

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project (or ask the client for access to their existing project)
3. Go to Project Settings → API
4. Copy these three values to your `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
```

#### B. Stripe (Payment Processing)

**What it's used for**: Consultation booking payments

1. Go to [stripe.com](https://stripe.com) and create an account
2. Go to Developers → API keys
3. **Use test mode** for development (toggle in top right)
4. Copy these values:

```bash
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Setting up webhooks**:
1. In Stripe Dashboard, go to Developers → Webhooks
2. Add endpoint: `http://localhost:3000/api/webhooks/stripe` (for local dev)
3. Select these events: `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy the webhook secret to `STRIPE_WEBHOOK_SECRET`

#### C. Resend (Email Service)

**What it's used for**: Sending contact form notifications and booking confirmations

1. Go to [resend.com](https://resend.com) and create an account
2. Go to API Keys and create a new key
3. Copy the key:

```bash
RESEND_API_KEY=re_...
```

4. Add and verify your domain (or use their test domain for development)

#### D. Application Settings

```bash
# For local development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# For production (update after deployment)
# NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

#### E. Optional Services

```bash
# Google Analytics (optional - for tracking visitors)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...

# Anthropic Claude (optional - if using AI features)
ANTHROPIC_API_KEY=sk-ant-...
```

### Step 3: Verify Your .env.local

Your complete `.env.local` should look like this:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# Stripe
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx

# Resend
RESEND_API_KEY=re_xxxxx

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-xxxxx
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

**Security**: Never commit `.env.local` to Git! It's already in `.gitignore`.

## 3. Database Setup (Supabase)

You have two options:

### Option A: Use Client's Existing Database (Recommended)

If the client already has a Supabase project with data:
1. Ask the client to add you as a team member to their Supabase project
2. Use their database credentials in your `.env.local`
3. Done! All the data and tables are already there.

### Option B: Set Up Fresh Database

If you need to create a new database from scratch:

1. In your Supabase dashboard, go to SQL Editor
2. Check if there are migration files in `/supabase` folder
3. If not, ask the client for their database schema or export
4. Run the SQL to create tables

**Key tables the app uses**:
- `schools` - Canadian school listings
- `inquiries` - Contact form submissions
- `consultations` - Booking records
- `profiles` - User accounts

## 4. Run Development Server

```bash
npm run dev
```

The website should now be running at:
- **Korean**: [http://localhost:3000/ko](http://localhost:3000/ko)
- **English**: [http://localhost:3000/en](http://localhost:3000/en)

## 5. Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
npm run format       # Auto-format code
npm run typecheck    # Check TypeScript types
```

## Common Issues & Solutions

### "Cannot connect to database"

**Problem**: Supabase credentials are wrong or missing

**Solution**:
1. Check your `.env.local` has all three Supabase variables
2. Verify the values match your Supabase dashboard (Project Settings → API)
3. Restart the dev server after changing `.env.local`

### "Module not found" errors

**Problem**: Dependencies not installed correctly

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Stripe webhook errors in development

**Problem**: Stripe webhooks can't reach localhost

**Solution**:
```bash
# Install Stripe CLI: https://stripe.com/docs/stripe-cli
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### TypeScript errors

**Problem**: Type checking fails

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Run type check to see specific errors
npm run typecheck
```

### Changes not appearing

**Problem**: Next.js cache

**Solution**:
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

## Next Steps

Once everything is running:

1. **Read** [DEPLOYMENT.md](./DEPLOYMENT.md) - Learn how to deploy to production
2. **Read** [MAINTENANCE.md](./MAINTENANCE.md) - Learn how to update content, images, and manage the site
3. **Explore** the codebase:
   - `/src/app/[locale]` - All pages (homepage, about, schools, etc.)
   - `/src/components` - Reusable UI components
   - `/messages` - Korean and English translations

## Getting Help

- Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for more solutions
- Review [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md) for architecture details
- Contact the previous developer or client for specific questions

## Important Notes

1. **Always use test mode** for Stripe during development
2. **Never commit** `.env.local` or any file with API keys
3. **Ask the client** for access to their existing services (Supabase, Stripe, etc.) rather than creating new ones
4. **Test both languages** (Korean and English) when making changes
5. **Check mobile view** - the site is mobile-first

---

**Ready to deploy?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment instructions.
