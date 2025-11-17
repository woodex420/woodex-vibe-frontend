import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.81.1';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { conversationId, message, messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch business knowledge for context
    const { data: knowledge } = await supabase
      .from('business_knowledge')
      .select('title, content')
      .eq('is_active', true);

    const knowledgeContext = knowledge?.map(k => `${k.title}: ${k.content}`).join('\n\n') || '';

    const systemPrompt = `You are a professional customer support AI assistant for WoodEx, a premium office furniture manufacturer and supplier in Pakistan.

Business Context:
${knowledgeContext}

Your role:
- Provide helpful, accurate information about WoodEx products and services
- Assist customers with inquiries about furniture, custom designs, quotations, and showrooms
- Maintain a professional, friendly tone
- If you don't know something, be honest and suggest contacting a live agent
- Help with product recommendations, pricing inquiries, and order-related questions
- Guide customers through the quotation and ordering process

Key Services:
- Factory Direct Sales
- Custom Design & Manufacturing
- Space Planning
- Delivery & Installation
- Project Quoting for B2B clients
- Showroom visits across Pakistan

Always be concise and helpful. If the query is complex or requires human expertise, suggest speaking with a live agent.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...(messages || [{ role: "user", content: message }])
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service requires credits. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

    // Save AI response to database
    if (conversationId) {
      await supabase.from('chat_messages').insert({
        conversation_id: conversationId,
        sender_type: 'agent',
        message_text: aiMessage,
      });

      // Mark conversation as AI-assisted
      await supabase
        .from('chat_conversations')
        .update({ 
          ai_assisted: true,
          last_message_at: new Date().toISOString()
        })
        .eq('id', conversationId);
    }

    return new Response(
      JSON.stringify({ message: aiMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("AI chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});