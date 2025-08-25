'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitConsultationBooking } from '@/lib/actions/consultation';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function TestEmailPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    error?: string;
    data?: any;
  } | null>(null);

  const testData = {
    // Client Information
    student_korean_name: "김테스트",
    student_english_name: "Test Kim",
    parent_name: "김부모님",
    email: "test@example.com",
    phone: "+1-604-123-4567",
    kakao_id: "test_kakao_id",
    
    // Consultation Details
    current_grade: "고등학교 2학년",
    target_study_period: "2025년 9월",
    region_preference: "BC" as const,
    consultation_type: "online" as const,
    preferred_contact: "email" as const,
    message: "테스트 상담 신청입니다. 이메일 시스템 테스트 중입니다.",
    consent_to_contact: true,
    
    // Enhanced Phase 1 fields
    preferred_date: "2025-09-15", // Future date
    preferred_time: "14:00",
    timezone: "KST" as const,
    urgency: "normal" as const,
    service_type: "parent-accompanied" as const,
    support_services: ["homestay-matching", "academic-monitoring"] as const,
    budget_range: "35k-45k" as const
  };

  const handleTestSubmit = async () => {
    setIsSubmitting(true);
    setResult(null);
    
    try {
      const submitResult = await submitConsultationBooking(testData);
      setResult(submitResult);
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">📧 Email System Test</CardTitle>
          <CardDescription>
            Test the consultation booking email system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Data Display */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Test Data:</h3>
            <div className="text-sm space-y-1">
              <p><strong>Client Name:</strong> {testData.parent_name}</p>
              <p><strong>Student:</strong> {testData.student_korean_name} ({testData.student_english_name})</p>
              <p><strong>Email:</strong> {testData.email}</p>
              <p><strong>Service Type:</strong> Parent-Accompanied Program</p>
              <p><strong>Date:</strong> {testData.preferred_date} at {testData.preferred_time}</p>
            </div>
          </div>

          {/* Email Recipients */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">📬 Emails will be sent to:</h3>
            <ul className="text-sm space-y-1">
              <li>✉️ <strong>Client:</strong> {testData.email} (confirmation + calendar)</li>
              <li>✉️ <strong>Admin:</strong> onf.newpage@gmail.com (notification)</li>
            </ul>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleTestSubmit}
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Test Emails...
              </>
            ) : (
              'Send Test Consultation Emails'
            )}
          </Button>

          {/* Result Display */}
          {result && (
            <div className={`p-4 rounded-lg ${
              result.success 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              {result.success ? (
                <>
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-900">Success!</h3>
                  </div>
                  <p className="text-sm text-green-800 mb-2">
                    Consultation booked and emails queued for sending.
                  </p>
                  <div className="text-xs text-green-700 space-y-1">
                    <p>✅ Database record created</p>
                    <p>✅ Client email queued (check {testData.email})</p>
                    <p>✅ Admin email queued (check onf.newpage@gmail.com)</p>
                    <p className="mt-2 font-semibold">
                      Note: With test API key, emails won&apos;t actually send. 
                      Check console logs for details.
                    </p>
                  </div>
                  {result.data && (
                    <details className="mt-2">
                      <summary className="text-xs text-green-700 cursor-pointer">
                        View submission data
                      </summary>
                      <pre className="text-xs mt-2 p-2 bg-white rounded">
                        {JSON.stringify(result.data, null, 2)}
                      </pre>
                    </details>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-900">Error</h3>
                  </div>
                  <p className="text-sm text-red-800">
                    {result.error || 'Failed to submit consultation'}
                  </p>
                </>
              )}
            </div>
          )}

          {/* Instructions */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-semibold mb-2 flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              Testing Instructions:
            </h3>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>Click &quot;Send Test Consultation Emails&quot; button above</li>
              <li>Check the browser console (F12) for email logs</li>
              <li>With test API key (re_123456789), emails won&apos;t actually send</li>
              <li>To send real emails, update RESEND_API_KEY in .env.local</li>
              <li>Real Resend API keys start with &quot;re_&quot; followed by random characters</li>
            </ol>
          </div>

          {/* API Key Status */}
          <div className="text-xs text-gray-500 text-center">
            Current API Key: {process.env.RESEND_API_KEY?.substring(0, 10)}...
            {process.env.RESEND_API_KEY === 're_123456789' && ' (Test Mode)'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}