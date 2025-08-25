# Post-Issue Documentation & Prevention Prompt

Use this prompt after encountering any development issue to systematically document and prevent recurrence.

---

## Prompt Template

**Copy and paste this prompt after resolving any issue:**

```
I just resolved an issue in my project. Please help me implement systematic documentation and prevention measures for this specific problem.

## Issue Details

**Issue Type:** [e.g., Form UX, API Integration, Build Error, Runtime Error, etc.]
**Severity:** [Critical/High/Medium/Low]
**Time to Resolve:** [e.g., 30 minutes, 2 hours]

**Problem Description:**
[Describe what went wrong in 2-3 sentences]

**Root Cause:**
[What actually caused the issue - be specific]

**How It Was Fixed:**
[Brief description of the solution]

**Code Before (if applicable):**
```[language]
[Problematic code snippet]
```

**Code After (if applicable):**
```[language]
[Fixed code snippet]
```

## Required Actions

Based on this issue, please:

1. **Analyze Impact & Prevention**
   - Identify what documentation/processes would have prevented this
   - Determine if this is a pattern issue or knowledge gap
   - Assess if similar issues might exist elsewhere

2. **Create/Update Documentation**
   Please create or update ONLY the files that would actually prevent this issue:
   
   - [ ] Component pattern documentation (`docs/component-patterns.md`) - if it's a component integration issue
   - [ ] ESLint rules (`.eslintrc.json` or custom plugin) - if it can be automatically detected
   - [ ] Test files (`__tests__/`) - if it needs test coverage
   - [ ] PR checklist (`.github/pull_request_template.md`) - if reviewers should check for this
   - [ ] CLAUDE.md - if it's a critical pattern for AI assistance
   - [ ] DEVELOPMENT-GUIDE.md - if it's a development process issue
   - [ ] TROUBLESHOOTING.md - if it's a common runtime/deployment issue
   - [ ] Configuration files - if it's a configuration issue

3. **Skip Unnecessary Updates**
   DO NOT update:
   - General API documentation (unless the issue was API-specific)
   - Deployment guides (unless it was a deployment issue)
   - README files (unless it affects project setup)
   - Version control docs (unless it was a git/merge issue)

4. **Implementation Priority**
   Focus on HIGH-IMPACT solutions only:
   - Automated detection (linting, tests) > Manual processes
   - Pattern documentation > General guidelines
   - Specific examples > Abstract concepts

5. **Time-box the Solution**
   - Spend maximum 4-6 hours on prevention measures
   - If it takes longer, it's probably over-engineered

Please be brutally honest about what will actually help vs. what just sounds good.
```

---

## Quick Reference: When to Update What

### Update `docs/component-patterns.md` when:
- Component integration issues (React Hook Form + library conflicts)
- Prop usage confusion
- State management patterns
- UI component implementation issues

### Create ESLint Rules when:
- The issue can be detected via code patterns
- Multiple conflicting implementations exist
- Specific anti-patterns need prevention
- It's a recurring code style issue

### Add Tests when:
- Initial state issues (like placeholder problems)
- Edge cases weren't covered
- User interaction flows break
- Data transformation errors

### Update PR Checklist when:
- Human review could catch the issue
- It's a UX/visual issue
- It requires manual testing
- It's about code organization

### Update CLAUDE.md when:
- It's a critical pattern that AI should always follow
- It prevents major architectural issues
- It's a project-specific convention
- It would confuse AI assistants

### Update DEVELOPMENT-GUIDE.md when:
- It's a development process issue
- It's about tool configuration
- It's a debugging strategy
- It's about performance optimization

### Create TROUBLESHOOTING.md when:
- It's a runtime error with specific solutions
- It's an environment setup issue
- It's a third-party service integration problem
- It's a deployment/build issue

---

## Example Usage

### Example 1: Form Dropdown Issue (What We Just Did)

```
Issue Type: Form UX
Severity: Medium
Problem: Dropdowns showing pre-selected values instead of placeholders
Root Cause: Triple-layered defaults (Zod + React Hook Form + Component)

Actions Taken:
✅ Created component-patterns.md (component integration issue)
✅ Added ESLint rules (automatically detectable)
✅ Created form state tests (initial state issue)
✅ Updated PR checklist (reviewable issue)
✅ Updated CLAUDE.md (critical pattern)
✅ Updated DEVELOPMENT-GUIDE.md (development pattern)

❌ Skipped API docs (not an API issue)
❌ Skipped deployment guide (not a deployment issue)
❌ Skipped README (not a setup issue)
```

### Example 2: Build Error

```
Issue Type: Build Error
Severity: High
Problem: TypeScript compilation fails due to missing types
Root Cause: Incorrect import statements and missing type definitions

Actions Taken:
✅ Updated TROUBLESHOOTING.md (common build issue)
✅ Added ESLint rule for import validation
✅ Updated tsconfig.json documentation

❌ Skipped component patterns (not a component issue)
❌ Skipped PR checklist (caught by build process)
```

### Example 3: API Rate Limiting

```
Issue Type: API Integration
Severity: High
Problem: Hitting third-party API rate limits
Root Cause: Individual API calls instead of batch operations

Actions Taken:
✅ Updated DEVELOPMENT-GUIDE.md (API integration pattern)
✅ Created docs/api-patterns.md (specific API patterns)
✅ Added rate limiting utilities

❌ Skipped component patterns (not a UI issue)
❌ Skipped ESLint rules (not a code style issue)
```

---

## Red Flags: Over-Documentation

You're over-documenting if:
- You're writing more than 4-6 hours worth of documentation
- You're creating documents "just in case"
- The documentation is more complex than the original issue
- You're documenting things that existing tools already catch
- You're writing general best practices instead of specific solutions

---

## The 80/20 Rule

Focus on the 20% of documentation that prevents 80% of issues:
1. **Automated detection** (ESLint, tests)
2. **Copy-paste examples** (pattern docs)
3. **Checklists** (PR templates)
4. **Specific error solutions** (troubleshooting)

Skip the 80% that only helps 20%:
1. General best practices
2. Theoretical explanations
3. Architecture diagrams (unless the issue was architectural)
4. Comprehensive guides (unless really needed)

---

## Quick Decision Tree

```
Is it automatically detectable?
  YES → ESLint rule or test
  NO → Continue

Will reviewers catch it?
  YES → PR checklist
  NO → Continue

Is it a common pattern issue?
  YES → Component/API patterns doc
  NO → Continue

Is it a runtime/build error?
  YES → TROUBLESHOOTING.md
  NO → Continue

Is it critical for AI/developers?
  YES → CLAUDE.md or DEVELOPMENT-GUIDE.md
  NO → Probably doesn't need documentation
```

---

**Remember:** The goal is PREVENTION, not comprehensive documentation. If the documentation won't actually prevent the issue from recurring, don't create it.