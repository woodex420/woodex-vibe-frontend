-- Add conversation recordings and transcriptions tables
CREATE TABLE IF NOT EXISTS public.conversation_recordings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  recording_url TEXT,
  duration_seconds INTEGER,
  recorded_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.conversation_transcriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  recording_id UUID REFERENCES public.conversation_recordings(id) ON DELETE CASCADE,
  transcription_text TEXT NOT NULL,
  language TEXT DEFAULT 'en',
  confidence_score DECIMAL(3,2),
  speaker_labels JSONB,
  timestamps JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_recordings_conversation ON public.conversation_recordings(conversation_id);
CREATE INDEX IF NOT EXISTS idx_transcriptions_conversation ON public.conversation_transcriptions(conversation_id);
CREATE INDEX IF NOT EXISTS idx_transcriptions_recording ON public.conversation_transcriptions(recording_id);

-- Enable RLS
ALTER TABLE public.conversation_recordings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversation_transcriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for conversation_recordings
CREATE POLICY "Agents can view all recordings"
  ON public.conversation_recordings FOR SELECT
  USING (true);

CREATE POLICY "System can insert recordings"
  ON public.conversation_recordings FOR INSERT
  WITH CHECK (true);

-- RLS Policies for conversation_transcriptions
CREATE POLICY "Agents can view all transcriptions"
  ON public.conversation_transcriptions FOR SELECT
  USING (true);

CREATE POLICY "System can insert transcriptions"
  ON public.conversation_transcriptions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "System can update transcriptions"
  ON public.conversation_transcriptions FOR UPDATE
  USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_transcriptions_updated_at
  BEFORE UPDATE ON public.conversation_transcriptions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add analytics fields to chat_conversations for service quality tracking
ALTER TABLE public.chat_conversations 
  ADD COLUMN IF NOT EXISTS customer_satisfaction_score INTEGER CHECK (customer_satisfaction_score >= 1 AND customer_satisfaction_score <= 5),
  ADD COLUMN IF NOT EXISTS resolution_time_minutes INTEGER,
  ADD COLUMN IF NOT EXISTS agent_response_time_seconds INTEGER,
  ADD COLUMN IF NOT EXISTS has_recording BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS has_transcription BOOLEAN DEFAULT false;