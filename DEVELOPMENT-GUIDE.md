# Development Guide - On & Off New Page Korean-Canadian Platform

> Essential development practices and lessons learned for building Korean-market-optimized study abroad consultancy platforms with Next.js 15, Supabase, and KakaoTalk integration.

## 🏗️ Foundation Principles

### 1. Configuration First, Hardcoding Never

**❌ Avoid Hardcoding:**
```jsx
// Scattered hardcoded values (common mistake)
const API_TIMEOUT = 5000
const MAX_FILE_SIZE = 10485760
const PAGINATION_SIZE = 20
```

**✅ On & Off New Page Configuration:**
```jsx
// config/app.config.ts (Korean-market specific)
export const APP_CONFIG = {
  api: {
    timeout: parseInt(process.env.API_TIMEOUT!) || 5000,
    retryAttempts: 3,
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  },
  onOffNewPage: {
    maxConsultationsPerMonth: 100, // Business capacity
    consultationDuration: 60, // minutes
    supportedLanguages: ['ko', 'en'], // Korean primary
    businessHours: {
      KST: { start: '09:00', end: '18:00' },
      PST: { start: '17:00', end: '02:00' } // Vancouver office hours
    },
    regions: ['BC', 'Ontario', 'Alberta', 'Quebec'],
    schoolTypes: ['public', 'private'],
    schoolLevels: ['elementary', 'secondary']
  },
  korean: {
    kakaoTalkIntegration: process.env.NEXT_PUBLIC_KAKAOTALK_CHANNEL_ID,
    channelTalkPlugin: process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY,
    naverAnalytics: process.env.NEXT_PUBLIC_NAVER_ANALYTICS_ID
  },
  files: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['.pdf', '.doc', '.docx', '.jpg', '.png'],
    documentTypes: ['transcript', 'recommendation', 'essay', 'passport']
  }
}
```

### 2. Database Schema and Code Synchronization

**Critical Rule:** Database schema must always match application expectations.

```sql
-- On & Off New Page specific schema with Korean market requirements
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Korean-specific fields
  korean_name TEXT NOT NULL,
  english_name TEXT,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  kakaotalk_id TEXT, -- Essential for Korean communication
  current_grade TEXT NOT NULL,
  target_study_period TEXT,
  region_preference TEXT CHECK (region_preference IN ('BC', 'Ontario', 'Alberta', 'Quebec')),
  
  -- Business requirements
  consultation_type TEXT DEFAULT 'online' CHECK (consultation_type IN ('online', 'offline')),
  parent_contact JSONB, -- Korean parents are primary decision makers
  
  -- Timezone handling (KST/PST)
  timezone TEXT DEFAULT 'Asia/Seoul',
  
  -- Metadata (always include)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Audit trail for PIPEDA/PIPA compliance
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  consent_given_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'graduated'))
);
```

## ⚠️ Critical Performance Pitfalls

### 1. React useEffect Infinite Loops (Major Issue)

**❌ DANGER - Infinite Loop with Korean Data:**
```jsx
useEffect(() => {
  fetchKoreanStudentData(); // Updates state
}, [koreanStudentData]); // Triggers when state changes = DISASTER
```

**✅ SAFE - On & Off New Page Pattern:**
```jsx
useEffect(() => {
  fetchKoreanStudentData();
}, [profileId]); // Only when profile ID changes

// For Korean timezone-specific data
const timezoneOptions = useMemo(() => ({ 
  timezone: 'Asia/Seoul',
  region: selectedRegion 
}), [selectedRegion]);

useEffect(() => {
  fetchConsultationSlots(timezoneOptions);
}, [timezoneOptions]);

// For KakaoTalk integration
const kakaoTalkConfig = useMemo(() => ({
  channelId: process.env.NEXT_PUBLIC_KAKAOTALK_CHANNEL_ID,
  language: 'ko'
}), []);

useEffect(() => {
  initializeKakaoTalk(kakaoTalkConfig);
}, [kakaoTalkConfig]);
```

### 2. Timer Components Kill Performance

**❌ Timer in Parent Component (Korean Dashboard):**
```jsx
const KoreanStudentDashboard = () => {
  const [currentTimeKST, setCurrentTimeKST] = useState(new Date())
  
  useEffect(() => {
    // Updates every second = entire component tree re-renders
    const timer = setInterval(() => {
      setCurrentTimeKST(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <ProgramsList />          {/* Re-renders every second! */}
      <ConsultationBooking />   {/* Re-renders every second! */}
      <SuccessStories />        {/* Re-renders every second! */}
      <div>한국 시간: {currentTimeKST.toLocaleTimeString('ko-KR', { timeZone: 'Asia/Seoul' })}</div>
    </div>
  )
}
```

**✅ Isolated Korean Timezone Clock:**
```jsx
const KoreanTimezoneClock = () => {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div>
      <div>한국 시간: {time.toLocaleTimeString('ko-KR', { timeZone: 'Asia/Seoul' })}</div>
      <div>밴쿠버 시간: {time.toLocaleTimeString('en-CA', { timeZone: 'America/Vancouver' })}</div>
    </div>
  )
}

const KoreanStudentDashboard = () => {
  return (
    <div>
      <ProgramsList />          {/* Never re-renders from timer! */}
      <ConsultationBooking />   {/* Never re-renders from timer! */}
      <SuccessStories />        {/* Never re-renders from timer! */}
      <KoreanTimezoneClock />   {/* Only this updates */}
    </div>
  )
}
```

## 🎯 Data Flow Best Practices

### Single Source of Truth for Student Data

**❌ Don't Duplicate Student Information:**
```jsx
// Bad: Storing full student objects everywhere
const applications = [
  { 
    id: 1, 
    student: { id: 1, name: "Kim Min-jun", email: "min@email.com" },
    university: "Stanford"
  }
]
```

**✅ Reference by ID Only:**
```jsx
// Good: Store student ID, fetch student data centrally
const applications = [
  { id: 1, student_id: 1, university: "Stanford" }
]

// Centralized student data fetching
const useStudentData = (studentId) => {
  return useQuery(['student', studentId], () => 
    supabase.from('students').select('*').eq('id', studentId).single()
  )
}
```

### API Integration for External Services

**❌ Individual API Calls (Quota Killer):**
```jsx
// This approach quickly hits rate limits
for (const application of applications) {
  await universityAPI.checkStatus(application.id) // 100+ API calls!
}
```

**✅ Batch Operations:**
```jsx
// Batch operations reduce calls from 100+ to 1-3
const applicationIds = applications.map(app => app.id)
const statusUpdates = await universityAPI.batchCheckStatus(applicationIds)

// With proper error handling and retries
const batchCheckApplications = async (applications, batchSize = 10) => {
  const batches = chunk(applications, batchSize)
  
  for (const batch of batches) {
    try {
      await universityAPI.batchUpdate(batch)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Rate limiting
    } catch (error) {
      if (error.code === 'QUOTA_EXCEEDED') {
        console.log('Quota exceeded, implementing backoff...')
        await exponentialBackoff(error.retryAfter)
      }
      throw error
    }
  }
}
```

## 🎯 Component Integration Patterns

### Critical: Form Component Implementation

**Problem:** Dropdown placeholder issues where multiple default values conflict, causing pre-selected values instead of guiding placeholder text.

#### ✅ Correct Integration Pattern

```tsx
// Step 1: Zod Schema - NO .default() for form fields
const consultationSchema = z.object({
  serviceType: z.enum(['independent', 'parent-accompanied']), // Clean enum
  studentName: z.string().min(1, 'Name is required'),
  consultationDate: z.date().optional(),
});

// Step 2: React Hook Form Setup - Single source of defaults
const form = useForm<ConsultationFormData>({
  resolver: zodResolver(consultationSchema),
  defaultValues: {
    // Only set intentional pre-selections here
    studentName: '', // Empty string for text inputs
    // serviceType: undefined, // Explicit undefined for placeholder display
    // consultationDate: undefined, // Undefined for optional fields
  },
});

// Step 3: Component Implementation - No defaultValue props
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

#### ❌ Wrong Pattern (Causes Issues)

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

### Component Integration Rules

1. **Single Source of Truth**: Only React Hook Form `defaultValues` should manage defaults
2. **Explicit Undefined**: Use `undefined` in defaultValues for placeholder display
3. **No Schema Defaults**: Never use `.default()` in Zod schemas for form fields
4. **No Component Defaults**: Never use `defaultValue` props on form components
5. **Meaningful Placeholders**: Always provide descriptive, helpful placeholder text

### Form State Testing Requirements

All form components must pass these tests:

```tsx
// Required test pattern
it('should display placeholder text on initial render', () => {
  render(
    <FormWrapper defaultValues={{ serviceType: undefined }}>
      <Select onValueChange={() => {}}>
        <SelectTrigger>
          <SelectValue placeholder="Please select service type" />
        </SelectTrigger>
      </Select>
    </FormWrapper>
  );

  expect(screen.getByText('Please select service type')).toBeInTheDocument();
  expect(screen.queryByText('Independent Student')).not.toBeInTheDocument();
});
```

### ESLint Prevention

Custom rules automatically catch these issues:

```json
// .eslintrc.json
{
  "rules": {
    "form-validation/no-multiple-form-defaults": "error",
    "form-validation/prefer-placeholder-over-defaults": "warn"
  }
}
```

### Korean Market Form Considerations

- **Placeholder text** should guide Korean users clearly
- **Error messages** must be culturally appropriate
- **Input validation** should handle Korean characters properly
- **Date/time inputs** must consider KST/PST timezone differences

## 🔍 Debugging Strategies for Consultancy Apps

### Systematic Data Flow Tracking

**Use Structured Logging:**
```jsx
// Track student application lifecycle
console.log('📋 [APPLICATION_CREATE] Student application:', {
  studentId,
  university,
  program,
  timestamp: new Date().toISOString()
})

console.log('💾 [DATABASE_STORE] Storing application:', dbData)

console.log('📧 [NOTIFICATION] Sending emails:', {
  toStudent: studentEmail,
  toConsultant: consultantEmail
})

console.log('🎯 [COMPLETE] Application submitted:', {
  applicationId,
  nextSteps: ['document_upload', 'consultant_review']
})
```

### Business Logic Debugging

**For Complex Consultancy Rules:**
```jsx
// Debug application eligibility calculations
const checkApplicationEligibility = (student, program) => {
  const debug = {
    gpaRequirement: program.minGpa,
    studentGpa: student.gpa,
    gpaEligible: student.gpa >= program.minGpa,
    
    languageRequirement: program.languageTest,
    studentScore: student.languageScore,
    languageEligible: student.languageScore >= program.minLanguageScore,
    
    deadline: program.applicationDeadline,
    currentDate: new Date(),
    deadlineEligible: new Date() < new Date(program.applicationDeadline)
  }
  
  console.log('🎓 [ELIGIBILITY_CHECK]', debug)
  
  return debug.gpaEligible && debug.languageEligible && debug.deadlineEligible
}
```

## 📊 State Management for Multi-User Apps

### Context Separation for Different User Types

```jsx
// Separate contexts for different concerns
// auth-context.tsx - Only authentication
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState(null) // 'student' | 'consultant' | 'admin'
  
  const value = useMemo(() => ({
    user, userType, login, logout
  }), [user, userType])
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// student-context.tsx - Student-specific data
const StudentDataProvider = ({ children }) => {
  const { user } = useAuth()
  const [applications, setApplications] = useState([])
  const [consultations, setConsultations] = useState([])
  
  // Only load if user is a student
  if (user?.user_type !== 'student') {
    return <>{children}</>
  }
  
  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
}
```

## 🔒 Security Best Practices

### Row Level Security for Multi-User Data

```sql
-- Students can only see their own data
CREATE POLICY "Students access own data" ON applications
  FOR ALL USING (
    student_id IN (
      SELECT id FROM students WHERE user_id = auth.uid()
    )
  );

-- Consultants can see assigned students
CREATE POLICY "Consultants access assigned students" ON applications
  FOR ALL USING (
    consultant_id = auth.uid() OR
    consultant_id IN (
      SELECT id FROM consultants WHERE user_id = auth.uid()
    )
  );
```

### API Rate Limiting and Quota Management

```jsx
// Rate limiting for external university APIs
const createRateLimiter = (requests, windowMs) => {
  const calls = []
  
  return async (fn) => {
    const now = Date.now()
    const windowStart = now - windowMs
    
    // Remove old calls
    while (calls.length && calls[0] < windowStart) {
      calls.shift()
    }
    
    if (calls.length >= requests) {
      const oldestCall = calls[0]
      const waitTime = oldestCall + windowMs - now
      await new Promise(resolve => setTimeout(resolve, waitTime))
    }
    
    calls.push(now)
    return await fn()
  }
}

// Usage for university API calls
const universityAPILimiter = createRateLimiter(100, 60000) // 100 calls per minute

const checkUniversityStatus = async (applicationId) => {
  return await universityAPILimiter(() => 
    universityAPI.getApplicationStatus(applicationId)
  )
}
```

## 🚀 Development Workflow

### Testing Strategy for Consultancy Features

```jsx
// Test different user types and scenarios
describe('Student Application Flow', () => {
  test('should allow eligible student to apply', async () => {
    const student = createMockStudent({ gpa: 3.8, languageScore: 110 })
    const program = createMockProgram({ minGpa: 3.5, minLanguageScore: 100 })
    
    const result = await submitApplication(student, program)
    expect(result.success).toBe(true)
  })
  
  test('should reject ineligible student', async () => {
    const student = createMockStudent({ gpa: 3.0, languageScore: 90 })
    const program = createMockProgram({ minGpa: 3.5, minLanguageScore: 100 })
    
    const result = await submitApplication(student, program)
    expect(result.success).toBe(false)
    expect(result.reasons).toContain('GPA_TOO_LOW')
  })
  
  test('should handle multiple language requirements', async () => {
    // Test Korean student applying to English program
    // Test Chinese student applying to Korean program
    // etc.
  })
})
```

## 📈 Performance Monitoring

### Monitor Business-Critical Metrics

```jsx
// Track consultancy-specific metrics
const trackBusinessMetric = (metricName, value, context = {}) => {
  // Send to analytics service
  analytics.track(metricName, {
    value,
    timestamp: new Date().toISOString(),
    user_type: context.userType,
    ...context
  })
}

// Usage examples
trackBusinessMetric('application_submitted', 1, { 
  university: 'Stanford', 
  program: 'MBA',
  student_country: 'Korea' 
})

trackBusinessMetric('consultation_booked', 1, {
  consultation_type: 'initial',
  consultant_id: consultantId
})

trackBusinessMetric('document_uploaded', 1, {
  document_type: 'transcript',
  file_size: fileSize
})
```

## 🎯 Key Takeaways

1. **Configuration First**: Make business rules (application deadlines, GPA requirements, etc.) configurable from Day 1
2. **Performance Awareness**: Timer components and infinite loops are performance killers - isolate and debug systematically
3. **Single Source of Truth**: Student data should be fetched from one place, referenced everywhere else
4. **Batch Operations**: External university/program APIs have quotas - always batch operations
5. **User Type Separation**: Different contexts and permissions for students, consultants, and admins
6. **Business Logic Debugging**: Complex eligibility and requirement calculations need detailed logging
7. **Security by Design**: Row Level Security ensures data isolation between students and consultants

**Remember**: Consultancy platforms have complex business rules, multiple user types, and external integrations. Plan for these complexities from Day 1 rather than refactoring later.