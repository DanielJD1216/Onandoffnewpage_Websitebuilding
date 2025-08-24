# Study Abroad Consultancy Platform Project

> A comprehensive Next.js platform for study abroad consultancies with multi-language support, student management, and automated design review workflows.

## 📋 Project Documentation

### Core Platform
- 🏗️ **[Consultancy Platform Guide](./README-CONSULTANCY-PLATFORM.md)** - Complete platform architecture, features, and implementation details
- ⚙️ **[Setup Instructions](./SETUP.md)** - Step-by-step setup guide with database configuration and service integration
- 🎛️ **[Claude Configuration](./CLAUDE.md)** - Claude Code project settings and memory integration

### Development Workflows
- 🎨 **[Design Review Workflow](./Design%20Review/DESIGN-REVIEW-WORKFLOW.md)** - Automated design review system with Playwright integration
- 🧪 **[Testing Framework](./tests/)** - Unit and E2E testing setup (if exists)
- 📊 **[Analytics Setup](./analytics/)** - Performance and business metrics tracking (if exists)

## 🚀 Quick Start

1. **Review Platform Guide**: Start with [README-CONSULTANCY-PLATFORM.md](./README-CONSULTANCY-PLATFORM.md)
2. **Follow Setup**: Complete [SETUP.md](./SETUP.md) instructions
3. **Configure Design Reviews**: Implement [Design Review Workflow](./Design%20Review/DESIGN-REVIEW-WORKFLOW.md)
4. **Initialize Project**: Run your `/init` command once ready

## 🛠️ Tech Stack Overview

- **Framework**: Next.js 15 with App Router
- **Database**: Supabase (PostgreSQL)
- **CMS**: Sanity.io
- **UI**: shadcn/ui + Tailwind CSS
- **Internationalization**: next-intl (EN, KO, ZH, JA)
- **Payments**: Stripe
- **Communication**: SendBird + Zoom integration

## 📁 Project Structure

```
MAIN/
├── README.md                           # This index file
├── README-CONSULTANCY-PLATFORM.md     # Main platform documentation
├── SETUP.md                            # Setup instructions
├── CLAUDE.md                           # Claude Code configuration
├── Design Review/                      # Automated design review system
│   ├── DESIGN-REVIEW-WORKFLOW.md      # Design review workflow guide
│   ├── design-principles-example.md    # Design principles template
│   ├── design-review-agent.md         # Agent configuration
│   └── ... (other design review files)
└── src/                                # Source code
    ├── app/                            # Next.js App Router
    ├── components/                     # React components
    └── lib/                            # Utilities and configurations
```

## 🎯 Business Features

### For Study Abroad Consultancies
- **Multi-language Support** - Serve international students in their preferred language
- **Student Portal** - Application tracking, document management, consultation scheduling
- **CMS Integration** - University/program database with dynamic content management
- **Communication Tools** - Chat, video consultations, automated workflows
- **Payment Processing** - Consultation fees, service packages, invoice management
- **GDPR Compliance** - Data protection and privacy controls for international operations

### For Developers
- **Automated Design Reviews** - Playwright-powered UI/UX validation
- **Type Safety** - Full TypeScript implementation with Zod validation
- **Testing Suite** - Jest unit tests + Playwright E2E testing
- **CI/CD Ready** - GitHub Actions workflows and pre-commit hooks
- **Performance Optimized** - SSR/SSG, image optimization, and caching strategies

## 🔒 Security & Compliance

- **Authentication**: Supabase Auth with role-based access control
- **Data Protection**: Row Level Security policies and audit logging
- **File Security**: Virus scanning and secure document storage
- **GDPR Compliance**: Cookie consent, data export/deletion workflows
- **API Security**: Rate limiting, CORS configuration, and security headers

## 📞 Support

- **Documentation Issues**: Check individual guide files for detailed information
- **Technical Support**: Refer to troubleshooting sections in SETUP.md
- **Design Review Help**: See Design Review workflow documentation

---

**Start Here**: 👉 **[README-CONSULTANCY-PLATFORM.md](./README-CONSULTANCY-PLATFORM.md)** for complete platform overview