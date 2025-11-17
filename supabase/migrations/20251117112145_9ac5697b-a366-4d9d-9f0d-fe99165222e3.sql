-- Create table for business knowledge base
CREATE TABLE IF NOT EXISTS public.business_knowledge (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  file_url TEXT,
  category TEXT DEFAULT 'general',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.business_knowledge ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public can view active knowledge"
  ON public.business_knowledge
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated can manage knowledge"
  ON public.business_knowledge
  FOR ALL
  USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- Add AI assistant flag to conversations
ALTER TABLE public.chat_conversations 
ADD COLUMN IF NOT EXISTS ai_assisted BOOLEAN DEFAULT false;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_business_knowledge_active ON public.business_knowledge(is_active);
CREATE INDEX IF NOT EXISTS idx_business_knowledge_category ON public.business_knowledge(category);