# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is **On & Off New Page** - a Korean-Canadian study abroad consultancy website specializing in Canadian education for Korean students (ages 11-18). Founded in 2024, operates hybrid model with online consultations and Vancouver-based support. Target: 30+ monthly consultations, 8-10% conversion rate by October 2025.

**Business Model:**
- Primary Market: Korean families seeking Canadian education
- Secondary Support: English-speaking families  
- Languages: Korean (primary) / English (secondary)
- Regions: BC (Vancouver), Ontario (Toronto), other provinces
- School Levels: Elementary and Secondary education focus

**Key Differentiators:**
- Direct Vancouver office operation
- KakaoTalk integration for Korean families
- Timezone handling (KST/PST)
- Canadian homestay quality assurance
- Korean-first mobile experience (80% mobile traffic expected)

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production  
- `npm run typecheck` - TypeScript validation
- `npm run lint` - ESLint validation
- `npm run format` - Format with Prettier
- `npm run setup` - Install dependencies and initialize shadcn/ui
- `npx shadcn-ui@latest add [component]` - Add UI components

## ⚠️ CRITICAL: Framework Version Guidelines

**NEVER use bleeding-edge framework versions for client projects:**

### ✅ SAFE VERSIONS (Use These):
- **Next.js**: 14.2.x (stable, plugin ecosystem mature)
- **React**: 18.x (widely supported)
- **TypeScript**: 5.x (stable)

### ❌ AVOID (Too New/Unstable):
- **Next.js 15.x**: Plugin incompatibilities (next-intl, middleware conflicts)
- **React 19.x**: Ecosystem not ready
- **Any framework < 6 months old**

### 🔍 Pre-Project Checklist:
1. **Check plugin compatibility** with chosen framework version
2. **Start simple** - basic routing first, then add complexity
3. **Test incrementally** - one feature at a time
4. **Use LTS/stable versions** for client work

### 📚 Lessons Learned:
- Next.js 15 + next-intl caused routing failures (2025-01-24)
- Complex middleware setups fail on new framework versions
- Always strip back to basics when debugging routing issues

### 🚨 When Debugging Routing Issues:
1. Remove middleware.ts temporarily
2. Remove plugins from next.config.js
3. Simplify layouts (remove i18n dependencies)
4. Get basic [locale] routing working first
5. Add back features incrementally

## Visual Development & Design Review

### Design Standards
- Follow S-Tier SaaS standards (Stripe/Airbnb/Linear quality)
- Comprehensive design checklist in `Design Review/design-principles-example.md`
- Korean-first UI considerations with English secondary support
- WCAG AA+ accessibility compliance required
- Premium minimal aesthetic for trust-building

**Brand Identity:**
- Logo: "ON & OFF New Page" with book icon (`/MAIN/Logo/`)
- Colors: Deep Green (#114B3F), Ivory (#F4ECDE), Gold accent (#A48242)  
- Typography: Pretendard/Noto Sans KR (Korean), Inter (English)
- Mobile-first design for 80% Korean mobile users

### Quick Visual Check (After Any UI Change)
**IMMEDIATELY after implementing front-end changes:**
1. **Navigate to affected pages** - `mcp__playwright__browser_navigate` to each changed view
2. **Verify design compliance** - Compare against design principles
3. **Capture evidence** - `mcp__playwright__browser_take_screenshot` at 1440px viewport
4. **Check for errors** - `mcp__playwright__browser_console_messages`
5. **Test responsive** - Verify mobile (375px) and tablet (768px) viewports

### Comprehensive Design Review
**Before finalizing PRs with UI changes:**
- Use `@agent-design-review` for systematic 7-phase analysis:
  - Phase 1: Interaction flows and user experience
  - Phase 2: Responsive design (desktop/tablet/mobile)
  - Phase 3: Visual polish and hierarchy
  - Phase 4: Accessibility (keyboard nav, contrast, focus states)
  - Phase 5: Robustness (error states, edge cases)
  - Phase 6: Code quality and component reuse
  - Phase 7: Content clarity and console errors

### Design Review Automation
- `/design-review` slash command for git diff analysis
- Automated review triggers on PR creation
- Live environment testing with Playwright integration
- Structured feedback with priority levels: [Blocker], [High-Priority], [Medium-Priority], [Nitpick]

## Development Guidelines

### 1. Project Analysis & Planning

- **First step**: Thoroughly analyze the problem statement and review all relevant codebase files
- **Document**: Create a comprehensive plan in `tasks/todo.md`

### 2. Todo List Structure

- Create checkbox items (`[ ]`) that can be marked complete (`[x]`)
- Each item should be specific and measurable

### 3. Plan Approval

- **Requirement**: Present the complete plan and wait for explicit approval before starting implementation
- Do not proceed with coding until receiving confirmation

### 4. Task Organization

- **Major Checkpoints**: Define high-level milestones for each feature
- **Subtasks**: Break down each checkpoint into specific, small actionable items
- Example structure:
    
    ```
    - [ ] User Authentication (Checkpoint)
      - [ ] Set up Supabase auth configuration  
      - [ ] Create login form component  
      - [ ] Implement auth context
    
    ```
    

### 5. Development Phases (Sequential Order)

1. **Project Setup**: Initialize repository, install dependencies, configure environment
2. **Basic UI Structure**: Create layout components, routing, and navigation
3. **Database Schema**: Design and implement Supabase tables and relationships
4. **Backend Logic**: API routes, server actions, and business logic
5. **UI Enhancement**: Styling refinements, animations, and user experience improvements
6. **Deployment**: Configure Vercel, environment variables, and production settings

### 6. Technology Stack (Base Tools)

- **Database & Auth**: Supabase (use for database, authentication, and file storage)
- **Deployment**: Vercel
- **Version Control**: Git
- **Email Service**: Resend
- **Note**: These are the primary tools. Only use additional tools if functionality cannot be achieved within this stack.
- **Architecture Principle**: Maintain minimal complexity - avoid unnecessary abstractions or layers

### 7. Design Specifications

- **Framework**: Next.js with shadcn/ui components
- **Design System**: Follow shadcn/ui default design patterns
- **Typography**:
    - Titles: Font-weight 900 (Black)
    - Body text: Font-weight 500 (Medium)
    - Create strong visual hierarchy through weight contrast

### 8. Development Workflow

- Complete tasks sequentially
- Update todo items immediately upon completion: `Task completed`

### 9. Communication Protocol

- **After each task**: Provide a brief summary (2-3 sentences) explaining:
    - What was changed
    - Why the change was made
    - Impact on the system

### 10. Code Quality Standards

- **Simplicity First**: Each change should modify the minimum number of files
- **Single Responsibility**: Each function/component should do one thing well
- **Avoid**: Large refactors, complex abstractions, or over-engineering
- **Prefer**: Direct solutions, explicit code, and standard patterns

### 11. Form Component Implementation Standards

**Critical: Prevent Dropdown Placeholder Issues**

To prevent the recurring issue where dropdowns show pre-selected values instead of placeholder text:

#### ✅ Required Pattern for All Form Components:

```tsx
// 1. Zod Schema - NO .default() for form fields
const schema = z.object({
  serviceType: z.enum(['independent', 'parent-accompanied']), // No .default()
});

// 2. React Hook Form - Single source of defaults
const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: {
    // Only add intentional pre-selections here
    // serviceType: undefined, // Explicit undefined for placeholders
  },
});

// 3. Component - No defaultValue prop
<Select onValueChange={(value) => form.setValue('serviceType', value)}>
  <SelectTrigger>
    <SelectValue placeholder="Please select service type" />
  </SelectTrigger>
</Select>
```

#### Form Implementation Rules:
- **Single Source of Truth**: Only React Hook Form `defaultValues` should set defaults
- **Explicit Undefined**: Use `undefined` in defaultValues for placeholder display  
- **No Schema Defaults**: Never use `.default()` in Zod schemas for form fields
- **No Component Defaults**: Never use `defaultValue` props on form components
- **Meaningful Placeholders**: Always provide descriptive placeholder text

#### Required Files to Check:
- Form component patterns: `docs/component-patterns.md`
- ESLint validation: Custom rules prevent multiple defaults
- Testing: `__tests__/components/forms/FormInitialStates.test.tsx`
- PR checklist: `.github/pull_request_template.md` includes form validation

### 12. Project Completion

- Add a `## Review` section at the end of `todo.md` containing:
    - Summary of all implemented features
    - List of any deviations from the original plan
    - Known limitations or future improvements
    - Final deployment URL and access instructions