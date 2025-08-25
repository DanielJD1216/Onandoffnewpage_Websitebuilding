# Component Integration Patterns

This document provides copy-paste examples of correct component implementations to prevent common integration issues.

## Form Components with React Hook Form + Zod + shadcn/ui

### ✅ Correct Select Component Pattern

**Problem Prevented:** Multiple default values causing placeholder text to not display

```tsx
// 1. Schema Definition (NO defaults here)
const consultationSchema = z.object({
  serviceType: z.enum(['independent', 'parent-accompanied']), // No .default()
  region: z.enum(['bc', 'ontario', 'alberta']),
  studentGrade: z.enum(['elementary', 'middle', 'high'])
});

// 2. Form Setup (Only set defaults when intentionally pre-selecting)
const form = useForm<z.infer<typeof consultationSchema>>({
  resolver: zodResolver(consultationSchema),
  defaultValues: {
    // Only add defaults when you want pre-selection
    // serviceType: undefined, // Explicit undefined for placeholder display
  },
});

// 3. Component Implementation
<Select onValueChange={(value) => form.setValue('serviceType', value)}>
  <SelectTrigger>
    <SelectValue placeholder="Please select service type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="independent">Independent Student</SelectItem>
    <SelectItem value="parent-accompanied">Parent Accompanied</SelectItem>
  </SelectContent>
</Select>
```

### ❌ Wrong Pattern (Causes Issues)

```tsx
// DON'T DO THIS - Triple defaults cause conflicts
const schema = z.object({
  serviceType: z.enum(['independent', 'parent-accompanied']).default('independent'), // ❌
});

const form = useForm({
  defaultValues: {
    serviceType: 'independent', // ❌ Conflicts with schema
  },
});

<Select defaultValue="independent"> {/* ❌ Third conflict */}
  <SelectTrigger>
    <SelectValue placeholder="This won't show!" />
  </SelectTrigger>
</Select>
```

## Date/Time Components

### ✅ Correct DateTime Pattern

```tsx
const schema = z.object({
  consultationDate: z.date().optional(), // Optional for initial state
  consultationTime: z.string().optional(),
});

// Form setup - no defaults for date/time selection
const form = useForm({
  resolver: zodResolver(schema),
  // No defaultValues for date/time fields
});

// Component
<Input
  type="datetime-local"
  placeholder="Select consultation date and time"
  onChange={(e) => form.setValue('consultationDate', new Date(e.target.value))}
/>
```

## Input Components

### ✅ Correct Input Pattern

```tsx
const schema = z.object({
  studentName: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
});

const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: {
    studentName: '', // Empty string for text inputs
    email: '',
  },
});

<Input
  placeholder="Enter student's Korean name"
  {...form.register('studentName')}
/>
```

## Checkbox/Radio Components

### ✅ Correct Checkbox Pattern

```tsx
const schema = z.object({
  agreeToTerms: z.boolean(),
  newsletterSubscription: z.boolean().optional(),
});

const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: {
    agreeToTerms: false, // Explicit false for required checkboxes
    // newsletterSubscription: undefined, // Undefined for optional
  },
});

<Checkbox
  checked={form.watch('agreeToTerms')}
  onCheckedChange={(checked) => form.setValue('agreeToTerms', checked === true)}
/>
```

## Form Validation Patterns

### ✅ Proper Error Handling

```tsx
// In your form component
const {
  formState: { errors },
  handleSubmit,
} = form;

// Display errors
{errors.serviceType && (
  <p className="text-sm text-destructive">
    {errors.serviceType.message}
  </p>
)}

// Form submission
const onSubmit = async (data: FormData) => {
  try {
    // Process form data
    console.log('Form data:', data);
  } catch (error) {
    // Handle submission errors
    console.error('Submission failed:', error);
  }
};
```

## Common Patterns Checklist

Before submitting a PR with form components, verify:

- [ ] **Single source of defaults**: Only one layer (form, schema, OR component) defines defaults
- [ ] **Placeholder text displays**: Initial render shows helpful placeholder text
- [ ] **Explicit undefined**: Optional fields use `undefined` in defaultValues
- [ ] **Proper validation**: Error states are handled and displayed
- [ ] **Consistent patterns**: All similar components use the same integration approach

## Testing Form Components

### Required Test Pattern

```tsx
// __tests__/components/forms/SelectComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

describe('Select Component Initial State', () => {
  it('should display placeholder text on initial render', () => {
    const TestWrapper = () => {
      const form = useForm({
        defaultValues: {
          serviceType: undefined, // Key: undefined for placeholder
        },
      });

      return (
        <FormProvider {...form}>
          <Select onValueChange={(value) => form.setValue('serviceType', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Please select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="independent">Independent</SelectItem>
            </SelectContent>
          </Select>
        </FormProvider>
      );
    };

    render(<TestWrapper />);
    
    // Verify placeholder is visible
    expect(screen.getByText('Please select service type')).toBeInTheDocument();
    
    // Verify no pre-selected value
    expect(screen.queryByText('Independent')).not.toBeInTheDocument();
  });
});
```

## Debugging Form Issues

### Common Problems & Solutions

1. **Placeholder not showing**: Check for conflicting default values
2. **Form not submitting**: Verify Zod schema matches form structure
3. **Validation errors not displaying**: Check error state handling
4. **Values not updating**: Ensure proper `setValue` or `register` usage

### Debug Steps

1. Check React DevTools for form state
2. Add `console.log(form.watch())` to see current values
3. Verify schema validation with manual data
4. Test component in isolation

---

**Last Updated:** January 2025
**Next Review:** When new form patterns are needed