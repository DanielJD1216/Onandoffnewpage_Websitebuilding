# CSS Layout Patterns & Overflow Prevention

This document contains critical CSS patterns to prevent common layout issues encountered in the project.

## Horizontal Overflow Prevention

### Problem
Horizontal overflow creates white gaps/spaces on the right side of pages, causing horizontal scrolling and unprofessional appearance.

### Root Cause
Content extending beyond viewport width due to:
- Fixed-width elements wider than container
- Incorrect box-sizing calculations
- Missing responsive breakpoints
- Absolute positioned elements extending beyond bounds

### Solution Pattern

**Always include in global CSS:**
```css
html, body {
  overflow-x: hidden;
}
```

**For responsive containers:**
```css
.container {
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;
}
```

### Before/After Example

**❌ Before (causes overflow):**
```css
.hero-section {
  width: 1200px; /* Fixed width */
  margin: 0 auto;
}

.content-box {
  width: 100%;
  padding: 20px;
  /* box-sizing defaults to content-box */
}
```

**✅ After (prevents overflow):**
```css
html, body {
  overflow-x: hidden;
}

.hero-section {
  max-width: 1200px; /* Responsive width */
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.content-box {
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
```

## Responsive Width Patterns

### Safe Container Pattern
```css
.safe-container {
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}
```

### Full-Width Section Pattern
```css
.full-width-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
}
```

### Responsive Grid Pattern
```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  max-width: 100%;
  overflow: hidden;
}
```

## Detection & Prevention

### CSS Custom Properties for Consistent Spacing
```css
:root {
  --max-container-width: 1200px;
  --container-padding: 1rem;
  --safe-area-inset: env(safe-area-inset-left, 0px);
}

.container {
  max-width: var(--max-container-width);
  padding-left: max(var(--container-padding), var(--safe-area-inset));
  padding-right: max(var(--container-padding), var(--safe-area-inset));
  margin: 0 auto;
  box-sizing: border-box;
}
```

### Debugging Overflow Issues
```css
/* Temporary debug styles - remove in production */
.debug-overflow * {
  outline: 1px solid red !important;
  background: rgba(255, 0, 0, 0.1) !important;
}

/* Check for elements extending beyond viewport */
.debug-overflow *:not(html):not(body) {
  max-width: 100vw !important;
}
```

## Testing Checklist

- [ ] Test on mobile viewport (320px minimum)
- [ ] Test on tablet viewport (768px)
- [ ] Test on desktop viewport (1440px+)
- [ ] Check horizontal scrolling doesn't occur
- [ ] Verify no white gaps on right edge
- [ ] Test with browser dev tools device emulation

## Common Gotchas

1. **Fixed widths**: Always use `max-width` instead of `width` for containers
2. **Box-sizing**: Set `box-sizing: border-box` for predictable sizing
3. **Absolute positioning**: Ensure positioned elements don't extend beyond container
4. **Third-party components**: Override CSS for libraries that don't follow responsive patterns
5. **Dynamic content**: Test with various content lengths

## Emergency Fix

If horizontal overflow appears in production:

```css
/* Emergency fix - add to globals.css */
html, body {
  overflow-x: hidden !important;
}

* {
  max-width: 100% !important;
  box-sizing: border-box !important;
}
```

Then investigate and fix the root cause by identifying which elements are causing the overflow.