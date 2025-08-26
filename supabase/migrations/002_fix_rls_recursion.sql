-- Fix infinite recursion in staff_emails RLS policy
-- The original policy tries to query staff_emails from within staff_emails policy

-- Drop the problematic policy
DROP POLICY IF EXISTS "Staff can manage staff emails" ON staff_emails;

-- Create a simpler policy that doesn't cause recursion
-- Only allow authenticated users with admin role to manage staff emails
CREATE POLICY "Admin can manage staff emails" ON staff_emails
  FOR ALL
  USING (
    auth.uid() IS NOT NULL AND 
    auth.jwt()->>'email' = 'onf.newpage@gmail.com'
  );

-- Alternatively, we could disable RLS on staff_emails entirely since it's admin-only
-- ALTER TABLE staff_emails DISABLE ROW LEVEL SECURITY;