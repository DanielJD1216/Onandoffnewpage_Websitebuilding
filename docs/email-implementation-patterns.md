# Email Implementation Patterns & Best Practices

**Last Updated:** August 25, 2025  
**Issue Prevention:** Email logo display problems and attachment issues  
**Priority:** HIGH - Critical for client communications  

> **CRITICAL FOR DEVELOPERS**: This document prevents recurring email logo/attachment issues that can break client communications. Always follow these patterns when implementing email features.

---

## 🚨 Core Problem Solved

**Issue Type:** Email Integration  
**Severity:** High  
**Problem:** Email logos showing as broken images (question mark icons) in actual sent emails  
**Root Cause:** Email clients can't access localhost URLs or process cid: attachments reliably  

**How It Was Fixed:** Base64 SVG embedding with multi-fallback system  

---

## ✅ Required Pattern: Email Logo Implementation

### DO ✅ - Reliable Base64 Embedding

```typescript
// ✅ CORRECT: Base64 SVG embedding with fallback
export async function sendEmailWithLogo() {
  // Read SVG and convert to base64
  let logoBase64 = '';
  try {
    const logoPath = join(process.cwd(), 'Logo', 'On Off New Page_logo.svg');
    const logoBuffer = readFileSync(logoPath, 'utf8');
    logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoBuffer).toString('base64')}`;
  } catch (logoError) {
    // Fallback to PNG
    try {
      const pngPath = join(process.cwd(), 'public', 'logo.png');
      const pngBuffer = readFileSync(pngPath);
      logoBase64 = `data:image/png;base64,${pngBuffer.toString('base64')}`;
    } catch (pngError) {
      console.error('No logo available:', pngError);
    }
  }

  // Replace URLs in email HTML
  const emailHtml = originalHtml
    .replace(/src="[^"]*logo\.(?:png|svg)"/g, `src="${logoBase64}"`)
    .replace(/href="[^"]*logo\.(?:png|svg)"/g, `href="${logoBase64}"`)
    .replace(/url\([^)]*logo\.(?:png|svg)\)/g, `url(${logoBase64})`);

  // Send email (no logo attachments needed)
  await resend.emails.send({
    from: 'Company <noreply@company.com>',
    to: recipient,
    subject: 'Subject',
    html: emailHtml, // Logo is embedded directly
    attachments: [
      // Only include non-logo attachments like calendar files
    ],
  });
}
```

### DON'T ❌ - Common Mistakes

```typescript
// ❌ WRONG: Using localhost URLs
const emailHtml = `<img src="http://localhost:3000/logo.png" />`;

// ❌ WRONG: Using cid: attachments (unreliable)
const emailHtml = `<img src="cid:logo" />`;
attachments: [
  { filename: 'logo.png', content: logoBuffer, cid: 'logo' }
];

// ❌ WRONG: Using production URLs in development
const baseUrl = process.env.VERCEL_URL ? 'https://domain.com' : 'http://localhost:3000';
// This breaks dev testing and creates environment dependencies
```

---

## 🔧 Implementation Checklist

### Required Steps for Any Email Feature:

- [ ] **Logo Embedding**: Use base64 SVG with PNG fallback
- [ ] **URL Replacement**: Replace all logo references with base64 data URLs
- [ ] **Multi-Environment**: Works in both development and production
- [ ] **Error Handling**: Graceful fallback when logo files are missing
- [ ] **Debugging**: Console logging for email delivery status
- [ ] **Testing**: Test email page at `/test-email` route

### Email Template Requirements:

- [ ] **Logo Size**: Appropriate dimensions (200x67 for header, 160x53 for admin)
- [ ] **Brand Colors**: Use current brand colors (#33251b, #F4ECDE, #A48242)
- [ ] **Language Support**: Korean primary, English secondary
- [ ] **Mobile Responsive**: Email clients vary in CSS support
- [ ] **Attachment Optimization**: Only include necessary files (calendar, not logos)

### Testing Requirements:

- [ ] **Development Testing**: Use test API key for safe development
- [ ] **Real Email Testing**: Send actual emails to verify logo display
- [ ] **Cross-Client Testing**: Test in Gmail, Outlook, Apple Mail
- [ ] **Mobile Testing**: Check email rendering on mobile devices

---

## 🚀 Email Service Configuration

### Environment Variables Pattern:

```env
# Development - Use test API key
RESEND_API_KEY=re_123456789

# Production - Use real API key  
RESEND_API_KEY=re_[actual_api_key]
```

### API Configuration:

```typescript
// ✅ CORRECT: Resend configuration
const resend = new Resend(process.env.RESEND_API_KEY);

// Email sending with proper error handling
const [clientResult, adminResult] = await Promise.allSettled([
  resend.emails.send(clientEmailConfig),
  resend.emails.send(adminEmailConfig)
]);

// Log results (don't fail booking if emails fail)
if (clientResult.status === 'fulfilled') {
  console.log('✅ Client email sent:', clientResult.value);
} else {
  console.error('❌ Client email failed:', clientResult.reason);
}
```

---

## 🧪 Testing & Development

### Test Email Page Pattern:

```typescript
// Create /test-email route for development testing
export default function TestEmailPage() {
  const [result, setResult] = useState(null);
  
  const testEmailSend = async () => {
    const result = await submitConsultationBooking(testData);
    setResult(result);
  };

  return (
    <div>
      <h1>Email System Test</h1>
      <Button onClick={testEmailSend}>Send Test Email</Button>
      {/* Display results with debugging info */}
    </div>
  );
}
```

### Development Workflow:

1. **Use Test API Key**: Prevents accidental email sending
2. **Console Logging**: Track email delivery status  
3. **Browser Testing**: Preview emails in browser first
4. **Real Email Testing**: Send to test email address
5. **Logo Verification**: Check logo displays correctly in actual emails

---

## ⚠️ Common Pitfalls to Avoid

### 1. Environment-Dependent URLs
```typescript
// ❌ WRONG: URLs that break in different environments
const baseUrl = process.env.VERCEL_URL || 'http://localhost:3000';
```

### 2. Over-Relying on CID Attachments
```typescript
// ❌ WRONG: cid: attachments are unreliable across email clients
attachments: [{ cid: 'logo', ... }]
```

### 3. Missing Fallback Systems
```typescript
// ❌ WRONG: No fallback if logo file is missing
const logoBuffer = readFileSync(logoPath); // Throws if file missing
```

### 4. Ignoring Email Client Limitations
- Email clients have limited CSS support
- JavaScript doesn't work in emails  
- Image loading can be blocked by default
- HTML rendering varies significantly

---

## 📊 Success Metrics

### Email Delivery Success:
- ✅ Logo displays correctly in Gmail, Outlook, Apple Mail
- ✅ Emails send successfully in both development and production
- ✅ Calendar attachments work properly
- ✅ Korean/English content renders correctly
- ✅ Mobile email clients display properly

### Development Efficiency:
- ✅ Test email system allows safe development iteration
- ✅ Console debugging provides clear delivery status
- ✅ Error handling prevents email failures from breaking bookings
- ✅ Multi-fallback system ensures logos always work

---

## 🔄 Future Email Features

### When Adding New Email Types:
1. **Follow Base64 Logo Pattern**: Always embed logos as base64
2. **Use Email Template Components**: Reuse styling and layout patterns  
3. **Add to Test Email Page**: Include new email types in testing system
4. **Update Error Handling**: Ensure new emails don't break core functionality

### Scaling Considerations:
- **Email Queue System**: For high-volume sending
- **Template Management**: Database-driven email templates
- **A/B Testing**: Multiple email variants
- **Analytics Integration**: Email open/click tracking

---

**Remember:** Email clients are restrictive environments. Always prioritize reliability over advanced features. Base64 embedding works consistently across all major email clients.