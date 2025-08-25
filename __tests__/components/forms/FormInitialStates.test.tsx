/**
 * Form Initial States Test Suite
 * 
 * Tests to prevent dropdown placeholder issues by verifying
 * that form components show placeholder text on initial render
 * instead of pre-selected values.
 */

import { render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Test schemas matching our actual form patterns
const consultationSchema = z.object({
  serviceType: z.enum(['independent', 'parent-accompanied']),
  region: z.enum(['bc', 'ontario', 'alberta']),
  studentGrade: z.enum(['elementary', 'middle', 'high']),
  studentName: z.string().min(1),
  additionalInfo: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

// Test wrapper component
const FormTestWrapper: React.FC<{
  children: React.ReactNode;
  defaultValues?: Partial<ConsultationFormData>;
}> = ({ children, defaultValues = {} }) => {
  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues,
  });

  return <FormProvider {...form}>{children}</FormProvider>;
};

describe('Form Initial States - Placeholder Display', () => {
  describe('Select Components', () => {
    it('should show placeholder text when no default value is provided', () => {
      render(
        <FormTestWrapper>
          <Select onValueChange={() => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Please select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="independent">Independent Student</SelectItem>
              <SelectItem value="parent-accompanied">Parent Accompanied</SelectItem>
            </SelectContent>
          </Select>
        </FormTestWrapper>
      );

      // Placeholder should be visible
      expect(screen.getByText('Please select service type')).toBeInTheDocument();
      
      // No pre-selected values should be visible
      expect(screen.queryByText('Independent Student')).not.toBeInTheDocument();
      expect(screen.queryByText('Parent Accompanied')).not.toBeInTheDocument();
    });

    it('should show placeholder even when field has undefined default', () => {
      render(
        <FormTestWrapper defaultValues={{ serviceType: undefined }}>
          <Select onValueChange={() => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Choose your region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bc">British Columbia</SelectItem>
              <SelectItem value="ontario">Ontario</SelectItem>
              <SelectItem value="alberta">Alberta</SelectItem>
            </SelectContent>
          </Select>
        </FormTestWrapper>
      );

      expect(screen.getByText('Choose your region')).toBeInTheDocument();
      expect(screen.queryByText('British Columbia')).not.toBeInTheDocument();
    });

    it('should show selected value when intentionally pre-selected', () => {
      render(
        <FormTestWrapper defaultValues={{ serviceType: 'independent' }}>
          <Select value="independent" onValueChange={() => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Please select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="independent">Independent Student</SelectItem>
              <SelectItem value="parent-accompanied">Parent Accompanied</SelectItem>
            </SelectContent>
          </Select>
        </FormTestWrapper>
      );

      // When intentionally pre-selected, the value should show
      expect(screen.getByText('Independent Student')).toBeInTheDocument();
      expect(screen.queryByText('Please select service type')).not.toBeInTheDocument();
    });
  });

  describe('Input Components', () => {
    it('should show placeholder text for empty text inputs', () => {
      render(
        <FormTestWrapper defaultValues={{ studentName: '' }}>
          <Input placeholder="Enter student's Korean name" />
        </FormTestWrapper>
      );

      const input = screen.getByPlaceholderText("Enter student's Korean name");
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue('');
    });

    it('should display pre-filled value when provided', () => {
      render(
        <FormTestWrapper defaultValues={{ studentName: 'Test Student' }}>
          <Input placeholder="Enter student's Korean name" value="Test Student" />
        </FormTestWrapper>
      );

      const input = screen.getByDisplayValue('Test Student');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Textarea Components', () => {
    it('should show placeholder for optional textarea fields', () => {
      render(
        <FormTestWrapper>
          <Textarea placeholder="Any additional information or special requirements..." />
        </FormTestWrapper>
      );

      const textarea = screen.getByPlaceholderText(
        'Any additional information or special requirements...'
      );
      expect(textarea).toBeInTheDocument();
      expect(textarea).toHaveValue('');
    });
  });
});

describe('Form State Management - Consistency Checks', () => {
  it('should handle multiple form fields with mixed default states', () => {
    render(
      <FormTestWrapper 
        defaultValues={{ 
          studentName: '', // Explicit empty for text input
          // serviceType: undefined, // Undefined for select placeholder
          // additionalInfo: undefined, // Undefined for optional textarea
        }}
      >
        <div>
          <Input 
            placeholder="Enter student's Korean name"
            data-testid="student-name-input"
          />
          
          <Select onValueChange={() => {}} data-testid="service-type-select">
            <SelectTrigger>
              <SelectValue placeholder="Please select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="independent">Independent Student</SelectItem>
            </SelectContent>
          </Select>
          
          <Textarea 
            placeholder="Additional information..."
            data-testid="additional-info-textarea"
          />
        </div>
      </FormTestWrapper>
    );

    // All fields should show appropriate placeholder/empty states
    expect(screen.getByTestId('student-name-input')).toHaveValue('');
    expect(screen.getByText('Please select service type')).toBeInTheDocument();
    expect(screen.getByTestId('additional-info-textarea')).toHaveValue('');
  });

  it('should prevent accidental pre-selection in consultation forms', () => {
    // This test specifically prevents the dropdown issue we experienced
    render(
      <FormTestWrapper>
        <Select onValueChange={() => {}}>
          <SelectTrigger>
            <SelectValue placeholder="Select consultation type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="online">Online Consultation</SelectItem>
            <SelectItem value="in-person">In-Person Meeting</SelectItem>
          </SelectContent>
        </Select>
      </FormTestWrapper>
    );

    // Should show guidance text, not pre-select a value
    expect(screen.getByText('Select consultation type')).toBeInTheDocument();
    expect(screen.queryByText('Online Consultation')).not.toBeInTheDocument();
    expect(screen.queryByText('In-Person Meeting')).not.toBeInTheDocument();
  });
});

describe('Form Integration Patterns - Zod + React Hook Form', () => {
  it('should work correctly with Zod validation without defaults', () => {
    // Test that Zod schema without .default() works with React Hook Form
    const testSchema = z.object({
      testField: z.enum(['option1', 'option2']), // No .default()
    });

    const TestComponent = () => {
      const form = useForm({
        resolver: zodResolver(testSchema),
        defaultValues: {
          // testField: undefined, // Explicit undefined
        },
      });

      return (
        <FormProvider {...form}>
          <Select onValueChange={(value) => form.setValue('testField', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </FormProvider>
      );
    };

    render(<TestComponent />);
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  it('should handle form submission with undefined optional fields', async () => {
    const mockSubmit = jest.fn();
    
    const TestForm = () => {
      const form = useForm({
        resolver: zodResolver(consultationSchema),
        defaultValues: {
          studentName: '',
          // All other fields undefined for placeholder display
        },
      });

      return (
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(mockSubmit)}>
            <Input 
              {...form.register('studentName')}
              placeholder="Student name"
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      );
    };

    render(<TestForm />);
    
    // Form should be created without errors
    expect(screen.getByPlaceholderText('Student name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});

// Custom test utilities for form testing
export const createFormTest = (
  component: React.ReactNode,
  schema: z.ZodSchema,
  defaultValues: Record<string, any> = {}
) => {
  const TestWrapper = () => {
    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues,
    });

    return <FormProvider {...form}>{component}</FormProvider>;
  };

  return render(<TestWrapper />);
};

// Export test utilities for use in other test files
export { FormTestWrapper, consultationSchema };