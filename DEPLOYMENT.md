# Deployment Guide - On & Off Study Abroad Website

This guide explains how to deploy the website to production. We recommend **Vercel** as it's the easiest and has excellent Next.js support.

## Prerequisites

Before deploying, ensure:
- ✅ The website works locally (`npm run dev`)
- ✅ All environment variables are set up
- ✅ You have access to the GitHub repository
- ✅ You have a custom domain (optional, can use free Vercel domain)

## Recommended: Deploy to Vercel

Vercel is made by the creators of Next.js and offers the best experience.

### Why Vercel?

- ✅ **Free tier** is generous (perfect for this site)
- ✅ **Automatic deployments** from GitHub
- ✅ **Built-in CDN** for fast global access
- ✅ **Easy environment variables** management
- ✅ **Automatic HTTPS** certificates
- ✅ **Zero configuration** needed for Next.js

### Step-by-Step Deployment

#### 1. Push Code to GitHub

```bash
cd MAIN

# Make sure all changes are committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

#### 2. Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. **Sign up with GitHub** (recommended - makes deployment easier)

#### 3. Import Your Project

1. After signing in, click "Add New" → "Project"
2. Select "Import Git Repository"
3. Find your repository and click "Import"
4. Vercel will auto-detect it's a Next.js project

#### 4. Configure Project Settings

**Framework Preset**: Next.js (auto-detected)
**Root Directory**: `./MAIN` (or leave as `.` if the repo root is MAIN)
**Build Command**: `npm run build` (auto-filled)
**Output Directory**: `.next` (auto-filled)

Click "Deploy" - but it will fail because environment variables aren't set yet!

#### 5. Add Environment Variables

1. Go to your project settings → Environment Variables
2. Add **all** variables from your `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# Stripe
STRIPE_SECRET_KEY=sk_live_...  # Use LIVE keys for production!
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Resend
RESEND_API_KEY=re_...

# Application
NEXT_PUBLIC_APP_URL=https://yourdomain.com  # Your actual domain

# Optional
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
ANTHROPIC_API_KEY=sk-ant-...
```

**Important**:
- Use **production** (live) keys for Stripe, not test keys
- Set `NEXT_PUBLIC_APP_URL` to your actual domain
- Select "Production" environment for all variables

#### 6. Redeploy

After adding environment variables:
1. Go to "Deployments" tab
2. Click the three dots (...) on the latest deployment
3. Click "Redeploy"
4. Select "Use existing Build Cache" unchecked
5. Click "Redeploy"

Your site should now deploy successfully!

#### 7. Configure Custom Domain (Optional)

If you have a custom domain like `onoffstudyabroad.com`:

1. Go to your project → Settings → Domains
2. Enter your domain name
3. Vercel will show you DNS records to add
4. Go to your domain provider (GoDaddy, Namecheap, etc.)
5. Add the DNS records Vercel shows you
6. Wait 24-48 hours for DNS to propagate
7. Vercel will automatically provision SSL certificate

**Free Vercel Domain**: If you don't have a domain, you can use the free one: `your-project.vercel.app`

#### 8. Update Service Configurations

Now that you have a production URL, update these services:

**Supabase**:
1. Go to Authentication → URL Configuration
2. Add your production URL: `https://yourdomain.com`
3. Add callback URLs:
   - `https://yourdomain.com/auth/callback`
   - `https://yourdomain.com/en/auth/callback`
   - `https://yourdomain.com/ko/auth/callback`

**Stripe**:
1. Switch to "Live mode" (toggle in top right)
2. Go to Developers → Webhooks
3. Add new endpoint: `https://yourdomain.com/api/webhooks/stripe`
4. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
5. Copy the new webhook secret
6. Update `STRIPE_WEBHOOK_SECRET` in Vercel environment variables
7. Redeploy

**Resend**:
1. Verify your domain for email sending
2. Update "From" email addresses to use your domain

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:
- Push to `main` branch → Deploys to production
- Push to other branches → Creates preview deployment

## Alternative: Deploy to Netlify

Netlify is another great option, similar to Vercel.

### Step-by-Step for Netlify

#### 1. Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub

#### 2. Create New Site

1. Click "Add new site" → "Import an existing project"
2. Choose GitHub and select your repository
3. Configure build settings:
   - **Base directory**: `MAIN` (if needed)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

#### 3. Add Environment Variables

Go to Site settings → Environment variables and add all your `.env.local` variables.

#### 4. Configure Next.js

Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### 5. Deploy

Commit and push the `netlify.toml` file. Netlify will automatically deploy.

## Production Checklist

Before going live, verify:

### Security
- [ ] All API keys are production keys, not test keys
- [ ] `.env.local` is NOT committed to Git
- [ ] Supabase Row Level Security (RLS) is enabled
- [ ] Stripe is in live mode
- [ ] HTTPS is working (automatic with Vercel/Netlify)

### Functionality
- [ ] Both Korean (`/ko`) and English (`/en`) sites work
- [ ] Contact forms send emails successfully
- [ ] Payment/booking system works with real Stripe account
- [ ] Images load correctly
- [ ] All links work (no 404 errors)
- [ ] Mobile view works properly

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test loading speed on mobile
- [ ] Images are optimized

### SEO
- [ ] Google Analytics is tracking (if set up)
- [ ] Meta descriptions are set for all pages
- [ ] Social media preview images work
- [ ] Sitemap is generated

### Services
- [ ] Supabase production URL is configured
- [ ] Stripe webhooks point to production URL
- [ ] Resend domain is verified
- [ ] Custom domain is working (if applicable)

## Monitoring After Deployment

### 1. Set Up Error Tracking (Optional but Recommended)

Use Vercel's built-in analytics or add Sentry:

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

### 2. Monitor Performance

- Use Vercel Analytics (free, built-in)
- Or Google Analytics (if you added the GA_MEASUREMENT_ID)

### 3. Check Logs

View logs in Vercel dashboard:
- Go to your project → Logs
- Filter by errors
- Check for any issues after deployment

## Updating the Live Site

### Method 1: Automatic (Recommended)

Just push to GitHub:
```bash
git add .
git commit -m "Update content"
git push origin main
```

Vercel automatically detects the push and redeploys (takes 2-3 minutes).

### Method 2: Manual Redeploy

In Vercel dashboard:
1. Go to Deployments
2. Click "..." on any deployment
3. Click "Redeploy"

## Rollback to Previous Version

If something breaks:

1. Go to Vercel dashboard → Deployments
2. Find a working previous deployment
3. Click "..." → "Promote to Production"

Your site instantly reverts to that version!

## Common Deployment Issues

### Build fails with "Module not found"

**Solution**: Make sure all dependencies are in `package.json`, not just `devDependencies`.

```bash
# Move a package from devDependencies to dependencies
npm install package-name --save
```

### Environment variables not working

**Solution**:
1. Check spelling and values in Vercel
2. Make sure you selected "Production" environment
3. Redeploy after adding variables

### Images not loading

**Solution**: Check `next.config.js` has correct image domains:

```javascript
images: {
  domains: ['yourdomain.com', 'supabase.co'],
}
```

### Stripe webhooks failing

**Solution**:
1. Make sure webhook URL is exactly: `https://yourdomain.com/api/webhooks/stripe`
2. Copy the webhook secret from Stripe live mode
3. Update `STRIPE_WEBHOOK_SECRET` in Vercel
4. Redeploy

### 404 errors on page refresh

**Solution**: This shouldn't happen with Vercel, but if it does:
- Check your `next.config.js` configuration
- Make sure Vercel is set to "Next.js" framework preset

## Cost Breakdown

### Free Tier (Perfect for This Site)

**Vercel Free**:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domain
- ✅ Good for most small businesses

**Supabase Free**:
- ✅ 500MB database
- ✅ 1GB file storage
- ✅ 50,000 monthly active users
- ✅ 2 million edge function invocations

**Resend Free**:
- ✅ 100 emails/day
- ✅ 3,000 emails/month

**Stripe**:
- ✅ No monthly fee
- 💳 2.9% + $0.30 per successful payment

### When to Upgrade

You'll likely never need to upgrade, but if you do:

- **Vercel Pro** ($20/mo): Needed if traffic exceeds 100GB/month
- **Supabase Pro** ($25/mo): If database grows beyond 500MB
- **Resend Pro** ($20/mo): If sending more than 3,000 emails/month

## Support After Deployment

### For the Client

Share these URLs with the client:
- **Live website**: https://yourdomain.com
- **Admin panel**: https://yourdomain.com/dashboard (if applicable)
- **Vercel dashboard**: https://vercel.com (for deployment logs)

### For Future Developers

Make sure the next developer has access to:
1. GitHub repository
2. Vercel account (add as team member)
3. Supabase project (add as team member)
4. Stripe account
5. Domain registrar (if custom domain)

---

**Deployment complete?** Now read [MAINTENANCE.md](./MAINTENANCE.md) to learn how to update content and manage the site!
