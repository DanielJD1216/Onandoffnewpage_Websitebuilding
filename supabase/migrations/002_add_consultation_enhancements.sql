-- Phase 1 Consultation Enhancements - Add new fields for enhanced form data
-- Migration: 002_add_consultation_enhancements.sql

-- Create ENUMs for new fields
CREATE TYPE service_type_enum AS ENUM ('independent', 'parent-accompanied');
CREATE TYPE budget_range_enum AS ENUM ('under-25k', '25k-35k', '35k-45k', 'over-45k', 'need-breakdown');
CREATE TYPE support_service_enum AS ENUM (
  'visa-support', 
  'guardianship', 
  'homestay-matching', 
  'medical-insurance', 
  'life-setup', 
  'academic-monitoring',
  'university-pathway', 
  'emergency-support', 
  'parent-immigration'
);

-- Add new columns to consultations table
ALTER TABLE consultations 
ADD COLUMN service_type service_type_enum DEFAULT 'independent',
ADD COLUMN support_services support_service_enum[] DEFAULT '{}',
ADD COLUMN budget_range budget_range_enum;

-- Add helpful comments
COMMENT ON COLUMN consultations.service_type IS 'Type of study abroad service: independent student or parent-accompanied';
COMMENT ON COLUMN consultations.support_services IS 'Array of selected support services needed by the client';
COMMENT ON COLUMN consultations.budget_range IS 'Annual budget range in CAD for study abroad expenses';

-- Create indexes for better query performance
CREATE INDEX idx_consultations_service_type ON consultations(service_type);
CREATE INDEX idx_consultations_budget_range ON consultations(budget_range);
CREATE INDEX idx_consultations_support_services ON consultations USING GIN(support_services);

-- Update existing records to have default service_type (optional, since we have DEFAULT)
-- This ensures data consistency for existing consultations
UPDATE consultations 
SET service_type = 'independent' 
WHERE service_type IS NULL;