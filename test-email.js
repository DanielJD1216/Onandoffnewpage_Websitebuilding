#!/usr/bin/env node

/**
 * Test script for email consultation booking
 * This will submit a test consultation and verify email sending
 */

const testConsultationData = {
  // Client Information
  student_korean_name: "김테스트",
  student_english_name: "Test Kim",
  parent_name: "김부모",
  email: "test@example.com",
  phone: "+1-604-123-4567",
  kakao_id: "test_kakao_id",
  
  // Consultation Details
  current_grade: "고등학교 2학년",
  target_study_period: "2025년 9월",
  region_preference: "BC",
  consultation_type: "online",
  preferred_contact: "email",
  message: "테스트 상담 신청입니다. 이메일 시스템 테스트 중입니다.",
  consent_to_contact: true,
  
  // Enhanced Phase 1 fields
  preferred_date: "2025-02-15",
  preferred_time: "14:00",
  timezone: "KST",
  urgency: "normal",
  service_type: "parent-accompanied",
  support_services: ["homestay-matching", "academic-monitoring"],
  budget_range: "35k-45k"
};

async function testEmailSubmission() {
  console.log("🧪 Testing Consultation Email System...\n");
  console.log("📧 Test email will be sent to:", testConsultationData.email);
  console.log("📧 Admin notification will be sent to: onf.newpage@gmail.com\n");
  
  try {
    // Import the server action
    const { submitConsultationBooking } = require('./src/lib/actions/consultation');
    
    console.log("📤 Submitting test consultation...");
    const result = await submitConsultationBooking(testConsultationData);
    
    if (result.success) {
      console.log("✅ Consultation submitted successfully!");
      console.log("📧 Check the following email addresses:");
      console.log("  1. Client email:", testConsultationData.email);
      console.log("  2. Admin email: onf.newpage@gmail.com");
      console.log("\n🎉 Email test completed!");
      console.log("\nNote: With test API key 're_123456789', emails won't actually send.");
      console.log("To send real emails, update RESEND_API_KEY in .env.local with your actual key.");
    } else {
      console.error("❌ Submission failed:", result.error);
    }
  } catch (error) {
    console.error("❌ Test failed:", error);
    console.log("\n💡 Tip: Make sure the dev server is running (npm run dev)");
  }
}

// Run the test
testEmailSubmission();