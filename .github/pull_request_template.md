# Pull Request

## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Refactoring (no functional changes)

## Form Component Checklist
**Required for PRs with form-related changes:**

### Initial States & Placeholders
- [ ] All dropdown/select components show placeholder text on initial render
- [ ] No accidental pre-selection of values (unless intentionally designed)
- [ ] Input fields have descriptive placeholder text
- [ ] Optional fields clearly indicate they are optional

### Default Value Management  
- [ ] **Single source of defaults**: Only ONE layer defines default values
  - [ ] ✅ React Hook Form `defaultValues` (preferred)
  - [ ] ❌ NOT Zod schema `.default()`
  - [ ] ❌ NOT component `defaultValue` props
- [ ] Undefined values used explicitly for placeholder display
- [ ] Pre-selected values are intentional and documented

### Form Integration Patterns
- [ ] Select components use `onValueChange` with `form.setValue()`
- [ ] Input components use `{...form.register()}` or controlled patterns
- [ ] Error states are properly handled and displayed
- [ ] Form submission handles undefined/optional fields correctly

### Validation & Testing
- [ ] Zod schema matches form structure (no extra `.default()` calls)
- [ ] Form validation messages are user-friendly
- [ ] Initial render tests added for new form components
- [ ] Error scenarios tested (required fields, validation failures)

## Visual & Layout Testing (Critical)
- [ ] **Horizontal Overflow Check**: Confirmed no white gaps appear on right side of pages
- [ ] **No Horizontal Scrolling**: Verified no unwanted horizontal scroll bars appear
- [ ] **Mobile Responsiveness**: Tested on mobile viewport (320px minimum width)
- [ ] **Tablet Layout**: Verified layout works on tablet viewport (768px)
- [ ] **Desktop Layout**: Confirmed proper display on desktop (1440px+)
- [ ] **Cross-browser Testing**: Tested in Chrome, Firefox, and Safari
- [ ] **Layout Integrity**: All content stays within viewport bounds

## Testing Checklist
- [ ] All new/modified components have tests
- [ ] Form initial states tested (placeholder display)
- [ ] Error handling tested
- [ ] Accessibility tested (keyboard navigation, screen readers)
- [ ] Visual regression testing completed

## Code Quality
- [ ] ESLint passes without errors
- [ ] TypeScript compiles without errors
- [ ] No console errors in development
- [ ] Code follows established patterns from `docs/component-patterns.md`

## Korean/English Content
- [ ] Korean translations added to `messages/ko.json`
- [ ] English translations added to `messages/en.json`  
- [ ] Both languages tested in UI
- [ ] Text properly handles Korean character lengths

## Documentation
- [ ] README updated (if needed)
- [ ] Component patterns documented (if new patterns introduced)
- [ ] API documentation updated (if applicable)

## Screenshots/Demo
**Required for UI changes:**

### Desktop (1440px)
<!-- Add screenshot here -->

### Mobile (375px)
<!-- Add screenshot here -->

### Form States (if applicable)
- [ ] Initial state (with placeholders)
- [ ] Filled state
- [ ] Error state
- [ ] Loading/submission state

## Performance Impact
- [ ] Bundle size impact considered
- [ ] No unnecessary re-renders introduced
- [ ] Image optimization applied (if images added)
- [ ] Core Web Vitals impact assessed

## Accessibility
- [ ] Semantic HTML used
- [ ] ARIA labels added where needed
- [ ] Keyboard navigation works
- [ ] Focus management proper
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader compatibility tested

## Security Considerations
- [ ] No sensitive data logged
- [ ] Form inputs properly validated
- [ ] No XSS vulnerabilities introduced
- [ ] File uploads secured (if applicable)

## Related Issues
Closes #[issue number]

## Additional Notes
Any additional context, concerns, or considerations for reviewers.

---

**For Reviewers:**
- Pay special attention to form component integration patterns
- Verify placeholder text displays correctly on initial render
- Check for multiple default value conflicts (schema + form + component)
- Test form functionality across different screen sizes