-- Create table for pilot access submissions
CREATE TABLE public.pilot_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  design_codes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.pilot_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit pilot request"
  ON public.pilot_submissions
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated admins could view submissions (you'll access via Cloud dashboard)
-- For now, no SELECT policy means submissions are write-only from the frontend