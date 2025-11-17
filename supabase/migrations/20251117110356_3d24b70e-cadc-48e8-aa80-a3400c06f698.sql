-- Create chat conversations table
CREATE TABLE IF NOT EXISTS public.chat_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_name TEXT,
  visitor_email TEXT,
  visitor_phone TEXT,
  status TEXT DEFAULT 'waiting' CHECK (status IN ('waiting', 'active', 'resolved', 'closed')),
  assigned_agent_id UUID,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  last_message_at TIMESTAMPTZ DEFAULT now()
);

-- Create chat messages table
CREATE TABLE IF NOT EXISTS public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('visitor', 'agent', 'system')),
  sender_id UUID,
  message_text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  read_at TIMESTAMPTZ
);

-- Create chat agents table
CREATE TABLE IF NOT EXISTS public.chat_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  status TEXT DEFAULT 'offline' CHECK (status IN ('online', 'offline', 'busy')),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_chat_conversations_status ON public.chat_conversations(status);
CREATE INDEX IF NOT EXISTS idx_chat_conversations_agent ON public.chat_conversations(assigned_agent_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_conversation ON public.chat_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON public.chat_messages(created_at);

-- Enable Row Level Security
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_agents ENABLE ROW LEVEL SECURITY;

-- RLS Policies for chat_conversations
CREATE POLICY "Anyone can create conversations"
  ON public.chat_conversations
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own conversations"
  ON public.chat_conversations
  FOR SELECT
  USING (true);

CREATE POLICY "Agents can update conversations"
  ON public.chat_conversations
  FOR UPDATE
  USING (true);

-- RLS Policies for chat_messages
CREATE POLICY "Anyone can create messages"
  ON public.chat_messages
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view messages"
  ON public.chat_messages
  FOR SELECT
  USING (true);

-- RLS Policies for chat_agents
CREATE POLICY "Anyone can view agents"
  ON public.chat_agents
  FOR SELECT
  USING (true);

CREATE POLICY "Agents can update their own status"
  ON public.chat_agents
  FOR ALL
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_chat_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for chat_conversations
CREATE TRIGGER update_chat_conversations_updated_at
  BEFORE UPDATE ON public.chat_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_chat_updated_at();