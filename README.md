# On & Off Study Abroad Consultancy Website

> A modern, bilingual (Korean/English) website for On & Off study abroad consultancy, specializing in Canadian education for Korean students.

## 🌟 Overview

This website provides comprehensive information about study abroad programs, school listings, settlement services, and consultation booking for students looking to study in Canada.

### Key Features

- **Bilingual Support**: Full Korean (ko) and English (en) language support with Next.js internationalization
- **Interactive School Database**: Browse and filter Canadian schools with detailed information
- **Consultation Booking**: Integrated booking system with Stripe payment processing
- **Settlement Services**: Information about accommodation, banking, and settlement support
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Contact Forms**: Multiple contact forms with email integration via Resend
- **Admin Dashboard**: Manage bookings, consultations, and content (requires authentication)

## 📋 Documentation for Developers

### Getting Started
- ⚙️ **[SETUP.md](./SETUP.md)** - Complete installation and setup instructions
- 🚀 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - How to deploy to production (Vercel, Netlify, etc.)
- 🔧 **[MAINTENANCE.md](./MAINTENANCE.md)** - Common tasks for updating content, images, and forms
- 🐛 **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues and solutions

### Advanced Documentation
- 🏗️ **[PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md)** - Full project architecture and technical details
- 📖 **[DEVELOPMENT-GUIDE.md](./DEVELOPMENT-GUIDE.md)** - Development best practices
- 🎯 **[PRD.md](./PRD.md)** - Product requirements and specifications
- 🎛️ **[CLAUDE.md](./CLAUDE.md)** - Claude Code project settings

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your actual credentials

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **UI Components**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Internationalization**: next-intl (Korean/English)
- **Payments**: Stripe
- **Email**: Resend
- **Forms**: React Hook Form + Zod validation

## 📁 Project Structure

```
MAIN/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── [locale]/          # Internationalized routes (ko/en)
│   │   │   ├── about/         # About page
│   │   │   ├── booking/       # Consultation booking
│   │   │   ├── contact/       # Contact page
│   │   │   ├── dashboard/     # Admin dashboard
│   │   │   ├── process/       # Process information
│   │   │   ├── schools/       # School listings
│   │   │   ├── services/      # Services pages
│   │   │   └── page.tsx       # Homepage
│   │   └── api/               # API routes (contact forms, webhooks)
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui base components
│   │   └── ...               # Custom components (Hero, SchoolCard, etc.)
│   ├── lib/                  # Utility functions and configs
│   │   ├── supabase/         # Supabase client setup
│   │   ├── stripe/           # Stripe integration
│   │   └── utils.ts          # Helper functions
│   ├── types/                # TypeScript type definitions
│   └── i18n.ts               # Internationalization config
├── public/                   # Static assets
│   ├── images/               # Images and graphics
│   ├── fonts/                # Custom fonts
│   └── icons/                # Icons and logos
├── messages/                 # Translation files
│   ├── en.json              # English translations
│   └── ko.json              # Korean translations
├── supabase/                # Supabase schemas and migrations
├── docs/                    # Additional documentation
├── .env.local.example       # Environment variables template
├── package.json             # Dependencies and scripts
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 📜 Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint to check code quality
npm run format       # Format code with Prettier
npm run typecheck    # Type check with TypeScript
```

## 📝 Environment Variables

The following environment variables are required (see `.env.local.example`):

### Supabase (Database & Authentication)
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (server-side only)

### Stripe (Payment Processing)
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key

### Resend (Email Service)
- `RESEND_API_KEY` - Resend API key for sending emails

### Application Settings
- `NEXT_PUBLIC_APP_URL` - Your application URL (production URL or localhost)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID (optional)

## 🔐 Security Notes

- **Never commit `.env.local`** to version control (already in .gitignore)
- Keep all API keys and secrets secure
- Service role key should only be used server-side, never expose to client
- Use environment variables for all sensitive configuration

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to:
- Vercel (recommended)
- Netlify
- Other hosting platforms

## 🔧 Maintenance & Updates

See [MAINTENANCE.md](./MAINTENANCE.md) for instructions on:
- Updating content and translations
- Managing school listings
- Changing images and assets
- Handling contact form submissions
- Managing bookings and payments

## 🐛 Troubleshooting

If you encounter issues, check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common problems and solutions.

## 📞 Support

For technical support:
1. Check the documentation files listed above
2. Review [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
3. Contact the development team

## 📄 License

Private - All rights reserved by On & Off Study Abroad Consultancy

---

**Next Steps**:
1. Read [SETUP.md](./SETUP.md) for installation instructions
2. Read [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guide
3. Read [MAINTENANCE.md](./MAINTENANCE.md) for content management