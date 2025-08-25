# Troubleshooting Guide

## Critical Issue: Email Logos Not Displaying (2025-08-25)

### Problem
- Email logos show as broken images (question mark icons) in sent emails
- Logo displays correctly in browser preview but fails in actual email clients
- Recipients see broken image placeholders instead of company logo

### Root Cause
- Email clients can't access localhost URLs (`http://localhost:3000/logo.png`)
- CID attachment references (`cid:logo`) are unreliable across different email clients
- Email client limitations with external image loading and processing

### Solution Applied
```typescript
// Base64 SVG embedding with PNG fallback
let logoBase64 = '';
try {
  const logoPath = join(process.cwd(), 'Logo', 'On Off New Page_logo.svg');
  const logoBuffer = readFileSync(logoPath, 'utf8');
  logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoBuffer).toString('base64')}`;
} catch (logoError) {
  // PNG fallback
  const pngBuffer = readFileSync(join(process.cwd(), 'public', 'logo.png'));
  logoBase64 = `data:image/png;base64,${pngBuffer.toString('base64')}`;
}

// Replace URLs in email HTML
const emailHtml = originalHtml
  .replace(/src="[^"]*logo\.(?:png|svg)"/g, `src="${logoBase64}"`)
  .replace(/href="[^"]*logo\.(?:png|svg)"/g, `href="${logoBase64}"`)
  .replace(/url\([^)]*logo\.(?:png|svg)\)/g, `url(${logoBase64})`);
```

### Prevention Checklist
- [ ] ✅ Always use base64 embedding for email images
- [ ] ❌ Never use localhost URLs in email templates
- [ ] ❌ Avoid relying on cid: attachments for critical images
- [ ] 🧪 Test emails in actual email clients (Gmail, Outlook, Apple Mail)

## Critical Issue: Next.js 15 + next-intl Routing Failures (2025-01-24)

### Problem
- Website returns 404 for all locale routes (`/ko`, `/en`)
- Server compiles successfully but routes not accessible
- Complex middleware + plugin interactions fail

### Root Cause
- Next.js 15 routing changes (params now Promises)
- next-intl plugin not fully compatible with Next.js 15
- Middleware conflicts between next-intl and other plugins

### Solution Applied
1. **Downgrade to Next.js 14**: `npm install next@14 react@18 react-dom@18`
2. **Simplify routing**: Remove complex middleware temporarily
3. **Remove next-intl plugin**: Strip from next.config.js during debugging
4. **Fix params handling**: Change from `await params` back to direct destructuring

### Prevention Checklist
- [ ] ✅ Use Next.js 14.x for client projects
- [ ] ⚠️ Avoid Next.js 15.x until plugin ecosystem matures
- [ ] 🔍 Check plugin compatibility before starting projects
- [ ] 📦 Test basic routing before adding complexity

## General Debugging Process

### When Routes Return 404:
1. **Strip back to basics**:
   ```bash
   # Remove middleware temporarily
   mv middleware.ts middleware.ts.bak
   
   # Simplify next.config.js
   # Remove all plugins, keep basic config only
   
   # Test basic route
   curl http://localhost:3000/ko
   ```

2. **Add complexity incrementally**:
   - Get basic `[locale]` route working
   - Add back simple middleware
   - Add back plugins one by one
   - Test at each step

3. **Framework version debugging**:
   ```bash
   # Check versions
   npm list next react react-dom
   
   # Downgrade if needed
   npm install next@14 react@18 react-dom@18
   
   # Clear cache
   rm -rf .next && npm run dev
   ```

## Version Compatibility Matrix

### ✅ TESTED & WORKING
- Next.js 14.2.x + next-intl 3.x + React 18.x
- Supabase + Next.js 14.x
- shadcn/ui + Next.js 14.x

### ❌ KNOWN ISSUES  
- Next.js 15.x + next-intl (routing failures)
- Complex middleware on Next.js 15.x
- Bleeding-edge versions in general

## Emergency Recovery Commands

```bash
# If project completely broken, recover to working state:
npm install next@14 react@18 react-dom@18
rm -rf .next node_modules package-lock.json
npm install
mv middleware.ts middleware.ts.bak  # if middleware exists
npm run dev
```

## Lessons for Future Projects

1. **Start with LTS versions** - Don't be early adopters for client work
2. **Test incrementally** - One feature at a time  
3. **Document working combinations** - Keep compatibility notes
4. **Have rollback plan** - Know how to revert to working state
5. **Clean up dependencies properly** - When removing plugins, search for all references
6. **Understand RLS policies** - Avoid circular dependencies, use service role for admin operations
7. **Test basic routing first** - Before adding internationalization or complex middleware

## Prevention Checklist for New Projects

- [ ] Choose LTS framework versions (Next.js 14.x, React 18.x)
- [ ] Test basic page routing before adding plugins
- [ ] Design RLS policies without circular dependencies
- [ ] Keep emergency downgrade commands documented
- [ ] Clean up all references when removing packages
- [ ] Test anonymous operations separately from authenticated ones

Last Updated: 2025-08-24