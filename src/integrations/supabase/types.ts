export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      access_records: {
        Row: {
          action: string
          granted: boolean
          id: string
          resource_id: string
          resource_type: string
          subject_id: string
          timestamp: string | null
        }
        Insert: {
          action: string
          granted: boolean
          id?: string
          resource_id: string
          resource_type: string
          subject_id: string
          timestamp?: string | null
        }
        Update: {
          action?: string
          granted?: boolean
          id?: string
          resource_id?: string
          resource_type?: string
          subject_id?: string
          timestamp?: string | null
        }
        Relationships: []
      }
      activity_logs: {
        Row: {
          action_type: string
          admin_user_id: string | null
          created_at: string | null
          details: Json | null
          entity_id: number | null
          entity_type: string
          id: number
          ip_address: string | null
          user_agent: string | null
        }
        Insert: {
          action_type: string
          admin_user_id?: string | null
          created_at?: string | null
          details?: Json | null
          entity_id?: number | null
          entity_type: string
          id?: number
          ip_address?: string | null
          user_agent?: string | null
        }
        Update: {
          action_type?: string
          admin_user_id?: string | null
          created_at?: string | null
          details?: Json | null
          entity_id?: number | null
          entity_type?: string
          id?: number
          ip_address?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      addresses: {
        Row: {
          address_line1: string
          address_line2: string | null
          address_type: string | null
          city: string
          created_at: string | null
          full_name: string
          id: string
          is_default: boolean | null
          phone: string
          postal_code: string | null
          province: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          address_line1: string
          address_line2?: string | null
          address_type?: string | null
          city: string
          created_at?: string | null
          full_name: string
          id?: string
          is_default?: boolean | null
          phone: string
          postal_code?: string | null
          province: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          address_line1?: string
          address_line2?: string | null
          address_type?: string | null
          city?: string
          created_at?: string | null
          full_name?: string
          id?: string
          is_default?: boolean | null
          phone?: string
          postal_code?: string | null
          province?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean | null
          last_login: string | null
          permissions: Json | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          last_login?: string | null
          permissions?: Json | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          last_login?: string | null
          permissions?: Json | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      analytics: {
        Row: {
          active_contacts: number | null
          avg_response_time: number | null
          conversion_count: number | null
          conversion_rate: number | null
          created_at: string | null
          date: string
          id: string
          leads_generated: number | null
          messages_received: number | null
          messages_sent: number | null
          metrics_data: Json | null
          responses_count: number | null
        }
        Insert: {
          active_contacts?: number | null
          avg_response_time?: number | null
          conversion_count?: number | null
          conversion_rate?: number | null
          created_at?: string | null
          date: string
          id?: string
          leads_generated?: number | null
          messages_received?: number | null
          messages_sent?: number | null
          metrics_data?: Json | null
          responses_count?: number | null
        }
        Update: {
          active_contacts?: number | null
          avg_response_time?: number | null
          conversion_count?: number | null
          conversion_rate?: number | null
          created_at?: string | null
          date?: string
          id?: string
          leads_generated?: number | null
          messages_received?: number | null
          messages_sent?: number | null
          metrics_data?: Json | null
          responses_count?: number | null
        }
        Relationships: []
      }
      analytics_daily: {
        Row: {
          active_users: number | null
          created_at: string | null
          date: string
          id: string
          leads_generated: number | null
          messages_received: number | null
          messages_sent: number | null
          orders_created: number | null
          quotations_accepted: number | null
          quotations_created: number | null
          revenue: number | null
        }
        Insert: {
          active_users?: number | null
          created_at?: string | null
          date: string
          id?: string
          leads_generated?: number | null
          messages_received?: number | null
          messages_sent?: number | null
          orders_created?: number | null
          quotations_accepted?: number | null
          quotations_created?: number | null
          revenue?: number | null
        }
        Update: {
          active_users?: number | null
          created_at?: string | null
          date?: string
          id?: string
          leads_generated?: number | null
          messages_received?: number | null
          messages_sent?: number | null
          orders_created?: number | null
          quotations_accepted?: number | null
          quotations_created?: number | null
          revenue?: number | null
        }
        Relationships: []
      }
      analytics_metrics: {
        Row: {
          id: string
          metadata: Json | null
          metric_name: string
          metric_type: string | null
          metric_value: number | null
          timestamp: string | null
        }
        Insert: {
          id?: string
          metadata?: Json | null
          metric_name: string
          metric_type?: string | null
          metric_value?: number | null
          timestamp?: string | null
        }
        Update: {
          id?: string
          metadata?: Json | null
          metric_name?: string
          metric_type?: string | null
          metric_value?: number | null
          timestamp?: string | null
        }
        Relationships: []
      }
      analytics_reports: {
        Row: {
          created_at: string | null
          data: Json | null
          id: string
          report_name: string
          report_type: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          data?: Json | null
          id?: string
          report_name: string
          report_type?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          data?: Json | null
          id?: string
          report_name?: string
          report_type?: string | null
          status?: string | null
        }
        Relationships: []
      }
      api_integrations: {
        Row: {
          api_endpoint: string
          created_at: string | null
          health_status: string
          id: string
          last_called_at: string | null
          method: string
          request_payload: Json | null
          response_payload: Json | null
          service_name: string
          status_code: number | null
        }
        Insert: {
          api_endpoint: string
          created_at?: string | null
          health_status?: string
          id?: string
          last_called_at?: string | null
          method?: string
          request_payload?: Json | null
          response_payload?: Json | null
          service_name: string
          status_code?: number | null
        }
        Update: {
          api_endpoint?: string
          created_at?: string | null
          health_status?: string
          id?: string
          last_called_at?: string | null
          method?: string
          request_payload?: Json | null
          response_payload?: Json | null
          service_name?: string
          status_code?: number | null
        }
        Relationships: []
      }
      attachments: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          file_hash: string
          file_uri: string
          id: string
          linked_entity_id: string
          linked_entity_type: string
          mime_type: string
          size: number
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          file_hash: string
          file_uri: string
          id?: string
          linked_entity_id: string
          linked_entity_type: string
          mime_type: string
          size: number
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          file_hash?: string
          file_uri?: string
          id?: string
          linked_entity_id?: string
          linked_entity_type?: string
          mime_type?: string
          size?: number
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          details: Json | null
          event_time: string | null
          event_type: string
          id: string
          resource_id: string | null
          subject_id: string | null
        }
        Insert: {
          details?: Json | null
          event_time?: string | null
          event_type: string
          id?: string
          resource_id?: string | null
          subject_id?: string | null
        }
        Update: {
          details?: Json | null
          event_time?: string | null
          event_type?: string
          id?: string
          resource_id?: string | null
          subject_id?: string | null
        }
        Relationships: []
      }
      automation_rules: {
        Row: {
          action_config: Json | null
          action_type: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          last_run_at: string | null
          name: string
          priority: number | null
          run_count: number | null
          trigger_conditions: Json | null
          trigger_type: string
          updated_at: string | null
        }
        Insert: {
          action_config?: Json | null
          action_type: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          last_run_at?: string | null
          name: string
          priority?: number | null
          run_count?: number | null
          trigger_conditions?: Json | null
          trigger_type: string
          updated_at?: string | null
        }
        Update: {
          action_config?: Json | null
          action_type?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          last_run_at?: string | null
          name?: string
          priority?: number | null
          run_count?: number | null
          trigger_conditions?: Json | null
          trigger_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      b2b_companies: {
        Row: {
          billing_address: string | null
          company_name: string
          company_type: string | null
          contact_email: string | null
          contact_person: string | null
          contact_phone: string | null
          created_at: string | null
          credit_limit: number | null
          discount_tier: string | null
          id: string
          is_active: boolean | null
          payment_terms: string | null
          registration_number: string | null
          shipping_address: string | null
          tax_id: string | null
          updated_at: string | null
        }
        Insert: {
          billing_address?: string | null
          company_name: string
          company_type?: string | null
          contact_email?: string | null
          contact_person?: string | null
          contact_phone?: string | null
          created_at?: string | null
          credit_limit?: number | null
          discount_tier?: string | null
          id?: string
          is_active?: boolean | null
          payment_terms?: string | null
          registration_number?: string | null
          shipping_address?: string | null
          tax_id?: string | null
          updated_at?: string | null
        }
        Update: {
          billing_address?: string | null
          company_name?: string
          company_type?: string | null
          contact_email?: string | null
          contact_person?: string | null
          contact_phone?: string | null
          created_at?: string | null
          credit_limit?: number | null
          discount_tier?: string | null
          id?: string
          is_active?: boolean | null
          payment_terms?: string | null
          registration_number?: string | null
          shipping_address?: string | null
          tax_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      b2b_users: {
        Row: {
          approval_limit: number | null
          can_approve_orders: boolean | null
          can_place_orders: boolean | null
          can_view_pricing: boolean | null
          company_id: string
          created_at: string | null
          department: string | null
          id: string
          is_active: boolean | null
          role: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          approval_limit?: number | null
          can_approve_orders?: boolean | null
          can_place_orders?: boolean | null
          can_view_pricing?: boolean | null
          company_id: string
          created_at?: string | null
          department?: string | null
          id?: string
          is_active?: boolean | null
          role: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          approval_limit?: number | null
          can_approve_orders?: boolean | null
          can_place_orders?: boolean | null
          can_view_pricing?: boolean | null
          company_id?: string
          created_at?: string | null
          department?: string | null
          id?: string
          is_active?: boolean | null
          role?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string | null
          category: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          id: string
          published_at: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          category?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          category?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      business_knowledge: {
        Row: {
          category: string | null
          content: string
          created_at: string | null
          file_url: string | null
          id: string
          is_active: boolean | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          content: string
          created_at?: string | null
          file_url?: string | null
          id?: string
          is_active?: boolean | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          content?: string
          created_at?: string | null
          file_url?: string | null
          id?: string
          is_active?: boolean | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      cart: {
        Row: {
          created_at: string | null
          customization_details: Json | null
          id: string
          product_id: string
          quantity: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          customization_details?: Json | null
          id?: string
          product_id: string
          quantity?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          customization_details?: Json | null
          id?: string
          product_id?: string
          quantity?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          quantity: number
          session_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          quantity?: number
          session_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          quantity?: number
          session_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          id: string
          image_url: string | null
          is_active: boolean | null
          name: string
          parent_id: string | null
          slug: string
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name: string
          parent_id?: string | null
          slug: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name?: string
          parent_id?: string | null
          slug?: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      chat_agents: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          id: string
          name: string
          status: string | null
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          id?: string
          name: string
          status?: string | null
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          status?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      chat_conversations: {
        Row: {
          agent_response_time_seconds: number | null
          ai_assisted: boolean | null
          assigned_agent_id: string | null
          created_at: string | null
          customer_satisfaction_score: number | null
          has_recording: boolean | null
          has_transcription: boolean | null
          id: string
          last_message_at: string | null
          resolution_time_minutes: number | null
          status: string | null
          updated_at: string | null
          visitor_email: string | null
          visitor_name: string | null
          visitor_phone: string | null
        }
        Insert: {
          agent_response_time_seconds?: number | null
          ai_assisted?: boolean | null
          assigned_agent_id?: string | null
          created_at?: string | null
          customer_satisfaction_score?: number | null
          has_recording?: boolean | null
          has_transcription?: boolean | null
          id?: string
          last_message_at?: string | null
          resolution_time_minutes?: number | null
          status?: string | null
          updated_at?: string | null
          visitor_email?: string | null
          visitor_name?: string | null
          visitor_phone?: string | null
        }
        Update: {
          agent_response_time_seconds?: number | null
          ai_assisted?: boolean | null
          assigned_agent_id?: string | null
          created_at?: string | null
          customer_satisfaction_score?: number | null
          has_recording?: boolean | null
          has_transcription?: boolean | null
          id?: string
          last_message_at?: string | null
          resolution_time_minutes?: number | null
          status?: string | null
          updated_at?: string | null
          visitor_email?: string | null
          visitor_name?: string | null
          visitor_phone?: string | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          conversation_id: string | null
          created_at: string | null
          id: string
          message_text: string
          read_at: string | null
          sender_id: string | null
          sender_type: string
        }
        Insert: {
          conversation_id?: string | null
          created_at?: string | null
          id?: string
          message_text: string
          read_at?: string | null
          sender_id?: string | null
          sender_type: string
        }
        Update: {
          conversation_id?: string | null
          created_at?: string | null
          id?: string
          message_text?: string
          read_at?: string | null
          sender_id?: string | null
          sender_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "chat_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      collaboration_sessions: {
        Row: {
          active_users: Json | null
          created_at: string | null
          expires_at: string
          id: string
          resource_id: string
          resource_type: string
          session_name: string
        }
        Insert: {
          active_users?: Json | null
          created_at?: string | null
          expires_at: string
          id?: string
          resource_id: string
          resource_type: string
          session_name: string
        }
        Update: {
          active_users?: Json | null
          created_at?: string | null
          expires_at?: string
          id?: string
          resource_id?: string
          resource_type?: string
          session_name?: string
        }
        Relationships: []
      }
      command_metrics: {
        Row: {
          entity_id: string | null
          entity_type: string | null
          id: string
          metric_name: string
          metric_type: string
          metric_value: number
          timestamp: string | null
        }
        Insert: {
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          metric_name: string
          metric_type: string
          metric_value: number
          timestamp?: string | null
        }
        Update: {
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          metric_name?: string
          metric_type?: string
          metric_value?: number
          timestamp?: string | null
        }
        Relationships: []
      }
      command_projects: {
        Row: {
          created_at: string | null
          deadline: string | null
          description: string | null
          id: string
          name: string
          owner_id: string
          priority: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          id?: string
          name: string
          owner_id: string
          priority?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          priority?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      command_tasks: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          created_by: string
          deadline: string | null
          description: string | null
          id: string
          metadata: Json | null
          priority: string | null
          project_id: string | null
          status: string
          task_type: string
          template_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          created_by: string
          deadline?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          priority?: string | null
          project_id?: string | null
          status?: string
          task_type: string
          template_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string
          deadline?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          priority?: string | null
          project_id?: string | null
          status?: string
          task_type?: string
          template_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      command_users: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          id: string
          name: string
          role: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          id?: string
          name: string
          role?: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      companies: {
        Row: {
          address: string
          city: string
          contact_email: string
          contact_person: string
          contact_phone: string
          created_at: string | null
          credit_limit: number | null
          id: string
          industry: string | null
          is_verified: boolean | null
          name: string
          payment_terms: string | null
          registration_number: string | null
          tax_number: string | null
          updated_at: string | null
        }
        Insert: {
          address: string
          city: string
          contact_email: string
          contact_person: string
          contact_phone: string
          created_at?: string | null
          credit_limit?: number | null
          id?: string
          industry?: string | null
          is_verified?: boolean | null
          name: string
          payment_terms?: string | null
          registration_number?: string | null
          tax_number?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string
          city?: string
          contact_email?: string
          contact_person?: string
          contact_phone?: string
          created_at?: string | null
          credit_limit?: number | null
          id?: string
          industry?: string | null
          is_verified?: boolean | null
          name?: string
          payment_terms?: string | null
          registration_number?: string | null
          tax_number?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      company_users: {
        Row: {
          can_approve_orders: boolean | null
          company_id: string
          created_at: string | null
          id: string
          role: string | null
          user_id: string
        }
        Insert: {
          can_approve_orders?: boolean | null
          company_id: string
          created_at?: string | null
          id?: string
          role?: string | null
          user_id: string
        }
        Update: {
          can_approve_orders?: boolean | null
          company_id?: string
          created_at?: string | null
          id?: string
          role?: string | null
          user_id?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          last_contact_at: string | null
          lead_score: number | null
          name: string
          notes: string | null
          phone: string
          source: string | null
          status: string | null
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          last_contact_at?: string | null
          lead_score?: number | null
          name: string
          notes?: string | null
          phone: string
          source?: string | null
          status?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          last_contact_at?: string | null
          lead_score?: number | null
          name?: string
          notes?: string | null
          phone?: string
          source?: string | null
          status?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      conversation_recordings: {
        Row: {
          conversation_id: string
          created_at: string | null
          duration_seconds: number | null
          id: string
          recorded_at: string | null
          recording_url: string | null
        }
        Insert: {
          conversation_id: string
          created_at?: string | null
          duration_seconds?: number | null
          id?: string
          recorded_at?: string | null
          recording_url?: string | null
        }
        Update: {
          conversation_id?: string
          created_at?: string | null
          duration_seconds?: number | null
          id?: string
          recorded_at?: string | null
          recording_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_recordings_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "chat_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      conversation_transcriptions: {
        Row: {
          confidence_score: number | null
          conversation_id: string
          created_at: string | null
          id: string
          language: string | null
          recording_id: string | null
          speaker_labels: Json | null
          timestamps: Json | null
          transcription_text: string
          updated_at: string | null
        }
        Insert: {
          confidence_score?: number | null
          conversation_id: string
          created_at?: string | null
          id?: string
          language?: string | null
          recording_id?: string | null
          speaker_labels?: Json | null
          timestamps?: Json | null
          transcription_text: string
          updated_at?: string | null
        }
        Update: {
          confidence_score?: number | null
          conversation_id?: string
          created_at?: string | null
          id?: string
          language?: string | null
          recording_id?: string | null
          speaker_labels?: Json | null
          timestamps?: Json | null
          transcription_text?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_transcriptions_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "chat_conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_transcriptions_recording_id_fkey"
            columns: ["recording_id"]
            isOneToOne: false
            referencedRelation: "conversation_recordings"
            referencedColumns: ["id"]
          },
        ]
      }
      custom_app_activities: {
        Row: {
          action: string | null
          created_at: string | null
          details: Json | null
          id: string
          user_id: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          user_id?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      custom_app_settings: {
        Row: {
          category: string | null
          id: string
          key: string
          updated_at: string | null
          value: string | null
        }
        Insert: {
          category?: string | null
          id?: string
          key: string
          updated_at?: string | null
          value?: string | null
        }
        Update: {
          category?: string | null
          id?: string
          key?: string
          updated_at?: string | null
          value?: string | null
        }
        Relationships: []
      }
      custom_app_users: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          last_login: string | null
          role: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          last_login?: string | null
          role?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          last_login?: string | null
          role?: string | null
          status?: string | null
        }
        Relationships: []
      }
      customer_addresses: {
        Row: {
          address_line1: string
          address_line2: string | null
          city: string
          country: string | null
          created_at: string | null
          full_name: string
          id: string
          is_default: boolean | null
          phone: string
          postal_code: string | null
          state: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address_line1: string
          address_line2?: string | null
          city: string
          country?: string | null
          created_at?: string | null
          full_name: string
          id?: string
          is_default?: boolean | null
          phone: string
          postal_code?: string | null
          state?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address_line1?: string
          address_line2?: string | null
          city?: string
          country?: string | null
          created_at?: string | null
          full_name?: string
          id?: string
          is_default?: boolean | null
          phone?: string
          postal_code?: string | null
          state?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      customer_interactions: {
        Row: {
          content: string | null
          created_at: string | null
          created_by: string | null
          customer_id: string
          id: string
          interaction_type: string
          subject: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_id: string
          id?: string
          interaction_type: string
          subject?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_id?: string
          id?: string
          interaction_type?: string
          subject?: string | null
        }
        Relationships: []
      }
      customer_journey_events: {
        Row: {
          customer_id: string | null
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown
          page_url: string | null
          referrer_url: string | null
          session_id: string | null
          timestamp: string | null
          user_agent: string | null
        }
        Insert: {
          customer_id?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown
          page_url?: string | null
          referrer_url?: string | null
          session_id?: string | null
          timestamp?: string | null
          user_agent?: string | null
        }
        Update: {
          customer_id?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown
          page_url?: string | null
          referrer_url?: string | null
          session_id?: string | null
          timestamp?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_journey_events_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          address: Json | null
          assigned_to: string | null
          company_name: string | null
          created_at: string | null
          customer_type: string | null
          email: string | null
          full_name: string
          id: string
          lead_score: number | null
          lead_source: string | null
          notes: string | null
          phone: string
          status: string | null
          tags: string[] | null
          tax_id: string | null
          updated_at: string | null
          whatsapp_number: string | null
        }
        Insert: {
          address?: Json | null
          assigned_to?: string | null
          company_name?: string | null
          created_at?: string | null
          customer_type?: string | null
          email?: string | null
          full_name: string
          id?: string
          lead_score?: number | null
          lead_source?: string | null
          notes?: string | null
          phone: string
          status?: string | null
          tags?: string[] | null
          tax_id?: string | null
          updated_at?: string | null
          whatsapp_number?: string | null
        }
        Update: {
          address?: Json | null
          assigned_to?: string | null
          company_name?: string | null
          created_at?: string | null
          customer_type?: string | null
          email?: string | null
          full_name?: string
          id?: string
          lead_score?: number | null
          lead_source?: string | null
          notes?: string | null
          phone?: string
          status?: string | null
          tags?: string[] | null
          tax_id?: string | null
          updated_at?: string | null
          whatsapp_number?: string | null
        }
        Relationships: []
      }
      data_processing_jobs: {
        Row: {
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          id: string
          input_data: Json | null
          operation_type: string
          output_data: Json | null
          status: string
          task_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          input_data?: Json | null
          operation_type: string
          output_data?: Json | null
          status?: string
          task_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          input_data?: Json | null
          operation_type?: string
          output_data?: Json | null
          status?: string
          task_id?: string
        }
        Relationships: []
      }
      deliverables: {
        Row: {
          created_at: string | null
          description: string | null
          due_date: string | null
          file_url: string | null
          id: string
          name: string
          status: string
          task_id: string
          updated_at: string | null
          validated_at: string | null
          validated_by: string | null
          validation_status: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          file_url?: string | null
          id?: string
          name: string
          status?: string
          task_id: string
          updated_at?: string | null
          validated_at?: string | null
          validated_by?: string | null
          validation_status?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          file_url?: string | null
          id?: string
          name?: string
          status?: string
          task_id?: string
          updated_at?: string | null
          validated_at?: string | null
          validated_by?: string | null
          validation_status?: string | null
        }
        Relationships: []
      }
      deliveries: {
        Row: {
          courier_name: string | null
          created_at: string | null
          delivered_date: string | null
          delivery_address: Json
          delivery_cost: number
          delivery_instructions: string | null
          delivery_notes: string | null
          delivery_type: string
          delivery_zone_id: string | null
          id: string
          order_id: string
          pickup_date: string | null
          proof_of_delivery_url: string | null
          recipient_name: string | null
          recipient_phone: string | null
          scheduled_date: string | null
          scheduled_time_slot: string | null
          status: string | null
          tracking_number: string | null
          updated_at: string | null
        }
        Insert: {
          courier_name?: string | null
          created_at?: string | null
          delivered_date?: string | null
          delivery_address: Json
          delivery_cost?: number
          delivery_instructions?: string | null
          delivery_notes?: string | null
          delivery_type?: string
          delivery_zone_id?: string | null
          id?: string
          order_id: string
          pickup_date?: string | null
          proof_of_delivery_url?: string | null
          recipient_name?: string | null
          recipient_phone?: string | null
          scheduled_date?: string | null
          scheduled_time_slot?: string | null
          status?: string | null
          tracking_number?: string | null
          updated_at?: string | null
        }
        Update: {
          courier_name?: string | null
          created_at?: string | null
          delivered_date?: string | null
          delivery_address?: Json
          delivery_cost?: number
          delivery_instructions?: string | null
          delivery_notes?: string | null
          delivery_type?: string
          delivery_zone_id?: string | null
          id?: string
          order_id?: string
          pickup_date?: string | null
          proof_of_delivery_url?: string | null
          recipient_name?: string | null
          recipient_phone?: string | null
          scheduled_date?: string | null
          scheduled_time_slot?: string | null
          status?: string | null
          tracking_number?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deliveries_delivery_zone_id_fkey"
            columns: ["delivery_zone_id"]
            isOneToOne: false
            referencedRelation: "delivery_zones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliveries_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_zones: {
        Row: {
          base_delivery_cost: number
          city: string
          created_at: string | null
          estimated_delivery_days: number | null
          express_delivery_cost: number
          express_delivery_days: number | null
          id: string
          is_active: boolean | null
          postal_codes: string[] | null
          same_day_delivery_cost: number
          updated_at: string | null
          zone_name: string
        }
        Insert: {
          base_delivery_cost?: number
          city: string
          created_at?: string | null
          estimated_delivery_days?: number | null
          express_delivery_cost?: number
          express_delivery_days?: number | null
          id?: string
          is_active?: boolean | null
          postal_codes?: string[] | null
          same_day_delivery_cost?: number
          updated_at?: string | null
          zone_name: string
        }
        Update: {
          base_delivery_cost?: number
          city?: string
          created_at?: string | null
          estimated_delivery_days?: number | null
          express_delivery_cost?: number
          express_delivery_days?: number | null
          id?: string
          is_active?: boolean | null
          postal_codes?: string[] | null
          same_day_delivery_cost?: number
          updated_at?: string | null
          zone_name?: string
        }
        Relationships: []
      }
      development_links: {
        Row: {
          build_status: string | null
          created_at: string | null
          deployment_url: string
          environment: string | null
          id: string
          last_deployed_at: string | null
          metadata: Json | null
          status: string
          task_id: string
        }
        Insert: {
          build_status?: string | null
          created_at?: string | null
          deployment_url: string
          environment?: string | null
          id?: string
          last_deployed_at?: string | null
          metadata?: Json | null
          status?: string
          task_id: string
        }
        Update: {
          build_status?: string | null
          created_at?: string | null
          deployment_url?: string
          environment?: string | null
          id?: string
          last_deployed_at?: string | null
          metadata?: Json | null
          status?: string
          task_id?: string
        }
        Relationships: []
      }
      ecom_cart_items: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          quantity: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          quantity?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          quantity?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      ecom_orders: {
        Row: {
          created_at: string | null
          id: string
          shipping_address: string | null
          status: string | null
          total_amount: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          shipping_address?: string | null
          status?: string | null
          total_amount?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          shipping_address?: string | null
          status?: string | null
          total_amount?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      ecom_portfolio: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          project_url: string | null
          title: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          project_url?: string | null
          title: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          project_url?: string | null
          title?: string
        }
        Relationships: []
      }
      ecom_products: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          name: string
          price: number
          stock: number | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          name: string
          price: number
          stock?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          stock?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string | null
          event_name: string
          id: string
          payload: Json
          published_at: string | null
          template_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_name: string
          id?: string
          payload: Json
          published_at?: string | null
          template_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_name?: string
          id?: string
          payload?: Json
          published_at?: string | null
          template_id?: string | null
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          question: string
          updated_at: string | null
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          question: string
          updated_at?: string | null
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          question?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      integrated_systems: {
        Row: {
          config: Json | null
          connection_status: string | null
          created_at: string | null
          id: string
          last_sync_at: string | null
          name: string
          system_type: string
          updated_at: string | null
        }
        Insert: {
          config?: Json | null
          connection_status?: string | null
          created_at?: string | null
          id?: string
          last_sync_at?: string | null
          name: string
          system_type: string
          updated_at?: string | null
        }
        Update: {
          config?: Json | null
          connection_status?: string | null
          created_at?: string | null
          id?: string
          last_sync_at?: string | null
          name?: string
          system_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      inventory: {
        Row: {
          id: string
          last_updated: string | null
          location: string | null
          low_stock_threshold: number | null
          product_id: string | null
          stock_quantity: number | null
          variant_id: string | null
        }
        Insert: {
          id?: string
          last_updated?: string | null
          location?: string | null
          low_stock_threshold?: number | null
          product_id?: string | null
          stock_quantity?: number | null
          variant_id?: string | null
        }
        Update: {
          id?: string
          last_updated?: string | null
          location?: string | null
          low_stock_threshold?: number | null
          product_id?: string | null
          stock_quantity?: number | null
          variant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          last_followup_at: string | null
          lead_data: Json | null
          lead_score: number | null
          name: string
          phone: string
          qualification_status: string | null
          source: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          last_followup_at?: string | null
          lead_data?: Json | null
          lead_score?: number | null
          name: string
          phone: string
          qualification_status?: string | null
          source: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          last_followup_at?: string | null
          lead_data?: Json | null
          lead_score?: number | null
          name?: string
          phone?: string
          qualification_status?: string | null
          source?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      lineage_events: {
        Row: {
          created_at: string | null
          event_time: string
          event_type: string
          id: string
          metadata: Json | null
          source_entity: string
          target_entity: string
          version: string
        }
        Insert: {
          created_at?: string | null
          event_time: string
          event_type: string
          id?: string
          metadata?: Json | null
          source_entity: string
          target_entity: string
          version: string
        }
        Update: {
          created_at?: string | null
          event_time?: string
          event_type?: string
          id?: string
          metadata?: Json | null
          source_entity?: string
          target_entity?: string
          version?: string
        }
        Relationships: []
      }
      location_queries: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          location_data: Json | null
          query_params: Json
          query_type: string
          result_data: Json | null
          status: string
          task_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          location_data?: Json | null
          query_params: Json
          query_type: string
          result_data?: Json | null
          status?: string
          task_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          location_data?: Json | null
          query_params?: Json
          query_type?: string
          result_data?: Json | null
          status?: string
          task_id?: string
        }
        Relationships: []
      }
      media_assets: {
        Row: {
          created_at: string | null
          file_size: number
          file_type: string
          id: string
          metadata: Json | null
          mime_type: string
          name: string
          public_url: string
          storage_path: string
          tags: string[] | null
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string | null
          file_size: number
          file_type: string
          id?: string
          metadata?: Json | null
          mime_type: string
          name: string
          public_url: string
          storage_path: string
          tags?: string[] | null
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string | null
          file_size?: number
          file_type?: string
          id?: string
          metadata?: Json | null
          mime_type?: string
          name?: string
          public_url?: string
          storage_path?: string
          tags?: string[] | null
          uploaded_by?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          contact_id: string
          created_at: string | null
          direction: string
          id: string
          message_text: string
          message_type: string | null
          metadata: Json | null
          response_text: string | null
          status: string | null
        }
        Insert: {
          contact_id: string
          created_at?: string | null
          direction: string
          id?: string
          message_text: string
          message_type?: string | null
          metadata?: Json | null
          response_text?: string | null
          status?: string | null
        }
        Update: {
          contact_id?: string
          created_at?: string | null
          direction?: string
          id?: string
          message_text?: string
          message_type?: string | null
          metadata?: Json | null
          response_text?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string | null
          customization_details: Json | null
          customizations: Json | null
          id: string
          order_id: string
          product_id: string
          product_image: string | null
          product_name: string
          product_sku: string
          production_status: string | null
          quantity: number
          total_price: number
          unit_price: number
          variant_id: string | null
        }
        Insert: {
          created_at?: string | null
          customization_details?: Json | null
          customizations?: Json | null
          id?: string
          order_id: string
          product_id: string
          product_image?: string | null
          product_name: string
          product_sku: string
          production_status?: string | null
          quantity: number
          total_price: number
          unit_price: number
          variant_id?: string | null
        }
        Update: {
          created_at?: string | null
          customization_details?: Json | null
          customizations?: Json | null
          id?: string
          order_id?: string
          product_id?: string
          product_image?: string | null
          product_name?: string
          product_sku?: string
          production_status?: string | null
          quantity?: number
          total_price?: number
          unit_price?: number
          variant_id?: string | null
        }
        Relationships: []
      }
      order_status_history: {
        Row: {
          change_reason: string | null
          changed_by: string | null
          created_at: string | null
          id: string
          new_status: string
          notes: string | null
          old_status: string | null
          order_id: string
        }
        Insert: {
          change_reason?: string | null
          changed_by?: string | null
          created_at?: string | null
          id?: string
          new_status: string
          notes?: string | null
          old_status?: string | null
          order_id: string
        }
        Update: {
          change_reason?: string | null
          changed_by?: string | null
          created_at?: string | null
          id?: string
          new_status?: string
          notes?: string | null
          old_status?: string | null
          order_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_status_history_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          admin_notes: string | null
          auth_user_id: string | null
          billing_address: Json | null
          company_id: string | null
          confirmed_date: string | null
          created_at: string | null
          currency: string | null
          customer_email: string | null
          customer_name: string | null
          customer_notes: string | null
          customer_phone: string | null
          delivered_at: string | null
          discount_amount: number | null
          estimated_delivery_date: string | null
          id: string
          notes: string | null
          order_number: string
          payment_method: string | null
          payment_status: string | null
          quotation_id: string | null
          shipped_date: string | null
          shipping_address: Json
          shipping_fee: number | null
          status: string | null
          stripe_payment_id: string | null
          stripe_session_id: string | null
          subtotal: number
          tax: number | null
          total: number
          tracking_number: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          auth_user_id?: string | null
          billing_address?: Json | null
          company_id?: string | null
          confirmed_date?: string | null
          created_at?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_notes?: string | null
          customer_phone?: string | null
          delivered_at?: string | null
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_number: string
          payment_method?: string | null
          payment_status?: string | null
          quotation_id?: string | null
          shipped_date?: string | null
          shipping_address: Json
          shipping_fee?: number | null
          status?: string | null
          stripe_payment_id?: string | null
          stripe_session_id?: string | null
          subtotal: number
          tax?: number | null
          total: number
          tracking_number?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          auth_user_id?: string | null
          billing_address?: Json | null
          company_id?: string | null
          confirmed_date?: string | null
          created_at?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_notes?: string | null
          customer_phone?: string | null
          delivered_at?: string | null
          discount_amount?: number | null
          estimated_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          payment_method?: string | null
          payment_status?: string | null
          quotation_id?: string | null
          shipped_date?: string | null
          shipping_address?: Json
          shipping_fee?: number | null
          status?: string | null
          stripe_payment_id?: string | null
          stripe_session_id?: string | null
          subtotal?: number
          tax?: number | null
          total?: number
          tracking_number?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      pricing_rules: {
        Row: {
          category_id: string | null
          created_at: string | null
          discount_type: string
          discount_value: number
          id: string
          is_active: boolean | null
          max_quantity: number | null
          min_quantity: number
          priority: number | null
          product_id: string | null
          rule_name: string
          rule_type: string
          updated_at: string | null
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          discount_type: string
          discount_value: number
          id?: string
          is_active?: boolean | null
          max_quantity?: number | null
          min_quantity: number
          priority?: number | null
          product_id?: string | null
          rule_name: string
          rule_type: string
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          discount_type?: string
          discount_value?: number
          id?: string
          is_active?: boolean | null
          max_quantity?: number | null
          min_quantity?: number
          priority?: number | null
          product_id?: string | null
          rule_name?: string
          rule_type?: string
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: []
      }
      product_images: {
        Row: {
          alt_text: string | null
          created_at: string | null
          display_order: number | null
          id: string
          image_url: string
          is_primary: boolean | null
          product_id: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_primary?: boolean | null
          product_id: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_primary?: boolean | null
          product_id?: string
        }
        Relationships: []
      }
      product_reviews: {
        Row: {
          created_at: string | null
          id: string
          is_approved: boolean | null
          is_verified_purchase: boolean | null
          order_id: string | null
          product_id: string
          rating: number
          review_text: string | null
          title: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_approved?: boolean | null
          is_verified_purchase?: boolean | null
          order_id?: string | null
          product_id: string
          rating: number
          review_text?: string | null
          title?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_approved?: boolean | null
          is_verified_purchase?: boolean | null
          order_id?: string | null
          product_id?: string
          rating?: number
          review_text?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      product_variants: {
        Row: {
          color: string | null
          created_at: string | null
          finish: string | null
          id: string
          images: Json | null
          is_active: boolean | null
          material: string | null
          price_adjustment: number | null
          product_id: string
          sku: string
          variant_name: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          finish?: string | null
          id?: string
          images?: Json | null
          is_active?: boolean | null
          material?: string | null
          price_adjustment?: number | null
          product_id: string
          sku: string
          variant_name: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          finish?: string | null
          id?: string
          images?: Json | null
          is_active?: boolean | null
          material?: string | null
          price_adjustment?: number | null
          product_id?: string
          sku?: string
          variant_name?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          category_id: string | null
          compare_at_price: number | null
          cost_price: number | null
          created_at: string | null
          customization_options: Json | null
          description: string | null
          dimensions: Json | null
          features: string[] | null
          finishes: Json | null
          focus_keyword: string | null
          gallery_images: string[] | null
          id: string
          image: string | null
          images: Json | null
          is_active: boolean | null
          is_customizable: boolean | null
          is_featured: boolean | null
          lead_time_days: number | null
          materials: string[] | null
          min_order_quantity: number | null
          name: string
          panorama_image: string | null
          price: number
          product_line: string | null
          secondary_keyword: string | null
          seo_title: string | null
          sku: string
          slug: string
          specifications: Json | null
          stock_quantity: number | null
          stock_status: string | null
          updated_at: string | null
          warranty_period: string | null
          weight: number | null
        }
        Insert: {
          category_id?: string | null
          compare_at_price?: number | null
          cost_price?: number | null
          created_at?: string | null
          customization_options?: Json | null
          description?: string | null
          dimensions?: Json | null
          features?: string[] | null
          finishes?: Json | null
          focus_keyword?: string | null
          gallery_images?: string[] | null
          id?: string
          image?: string | null
          images?: Json | null
          is_active?: boolean | null
          is_customizable?: boolean | null
          is_featured?: boolean | null
          lead_time_days?: number | null
          materials?: string[] | null
          min_order_quantity?: number | null
          name: string
          panorama_image?: string | null
          price: number
          product_line?: string | null
          secondary_keyword?: string | null
          seo_title?: string | null
          sku: string
          slug: string
          specifications?: Json | null
          stock_quantity?: number | null
          stock_status?: string | null
          updated_at?: string | null
          warranty_period?: string | null
          weight?: number | null
        }
        Update: {
          category_id?: string | null
          compare_at_price?: number | null
          cost_price?: number | null
          created_at?: string | null
          customization_options?: Json | null
          description?: string | null
          dimensions?: Json | null
          features?: string[] | null
          finishes?: Json | null
          focus_keyword?: string | null
          gallery_images?: string[] | null
          id?: string
          image?: string | null
          images?: Json | null
          is_active?: boolean | null
          is_customizable?: boolean | null
          is_featured?: boolean | null
          lead_time_days?: number | null
          materials?: string[] | null
          min_order_quantity?: number | null
          name?: string
          panorama_image?: string | null
          price?: number
          product_line?: string | null
          secondary_keyword?: string | null
          seo_title?: string | null
          sku?: string
          slug?: string
          specifications?: Json | null
          stock_quantity?: number | null
          stock_status?: string | null
          updated_at?: string | null
          warranty_period?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          created_at: string | null
          department: string | null
          email: string | null
          full_name: string | null
          id: string
          is_admin: boolean | null
          phone: string | null
          preferences: Json | null
          role: string | null
          shipping_address: Json | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          created_at?: string | null
          department?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          is_admin?: boolean | null
          phone?: string | null
          preferences?: Json | null
          role?: string | null
          shipping_address?: Json | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          created_at?: string | null
          department?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          is_admin?: boolean | null
          phone?: string | null
          preferences?: Json | null
          role?: string | null
          shipping_address?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          lifecycle_stage: string
          name: string
          owner_id: string
          slug: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          lifecycle_stage?: string
          name: string
          owner_id: string
          slug: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          lifecycle_stage?: string
          name?: string
          owner_id?: string
          slug?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      quotation_activities: {
        Row: {
          activity_type: string
          created_at: string | null
          description: string | null
          id: string
          ip_address: string | null
          metadata: Json | null
          quotation_id: string
          user_id: string | null
          user_name: string | null
        }
        Insert: {
          activity_type: string
          created_at?: string | null
          description?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          quotation_id: string
          user_id?: string | null
          user_name?: string | null
        }
        Update: {
          activity_type?: string
          created_at?: string | null
          description?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          quotation_id?: string
          user_id?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      quotation_items: {
        Row: {
          created_at: string | null
          customizations: Json | null
          description: string | null
          id: string
          item_name: string
          line_total: number
          product_id: string | null
          quantity: number
          quotation_id: string
          unit_price: number
          variant_id: string | null
        }
        Insert: {
          created_at?: string | null
          customizations?: Json | null
          description?: string | null
          id?: string
          item_name: string
          line_total: number
          product_id?: string | null
          quantity: number
          quotation_id: string
          unit_price: number
          variant_id?: string | null
        }
        Update: {
          created_at?: string | null
          customizations?: Json | null
          description?: string | null
          id?: string
          item_name?: string
          line_total?: number
          product_id?: string | null
          quantity?: number
          quotation_id?: string
          unit_price?: number
          variant_id?: string | null
        }
        Relationships: []
      }
      quotation_templates: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          discount_percentage: number | null
          id: string
          is_active: boolean | null
          items: Json
          name: string
          template_type: string
          total_amount: number | null
          updated_at: string | null
          usage_count: number | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          discount_percentage?: number | null
          id?: string
          is_active?: boolean | null
          items: Json
          name: string
          template_type: string
          total_amount?: number | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          discount_percentage?: number | null
          id?: string
          is_active?: boolean | null
          items?: Json
          name?: string
          template_type?: string
          total_amount?: number | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Relationships: []
      }
      quotations: {
        Row: {
          created_at: string | null
          created_by: string | null
          currency: string | null
          customer_id: string
          discount_amount: number | null
          id: string
          notes: string | null
          pdf_url: string | null
          quote_number: string
          shipping_cost: number | null
          status: string | null
          subtotal: number
          tax_amount: number | null
          terms_conditions: string | null
          total_amount: number
          updated_at: string | null
          valid_until: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id: string
          discount_amount?: number | null
          id?: string
          notes?: string | null
          pdf_url?: string | null
          quote_number: string
          shipping_cost?: number | null
          status?: string | null
          subtotal: number
          tax_amount?: number | null
          terms_conditions?: string | null
          total_amount: number
          updated_at?: string | null
          valid_until?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id?: string
          discount_amount?: number | null
          id?: string
          notes?: string | null
          pdf_url?: string | null
          quote_number?: string
          shipping_cost?: number | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          terms_conditions?: string | null
          total_amount?: number
          updated_at?: string | null
          valid_until?: string | null
        }
        Relationships: []
      }
      quotes: {
        Row: {
          admin_response: string | null
          approved_at: string | null
          auth_user_id: string | null
          company_id: string | null
          created_at: string | null
          estimated_total: number | null
          id: string
          items: Json
          quantity_total: number
          quote_number: string
          requirements: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
          valid_until: string | null
        }
        Insert: {
          admin_response?: string | null
          approved_at?: string | null
          auth_user_id?: string | null
          company_id?: string | null
          created_at?: string | null
          estimated_total?: number | null
          id?: string
          items: Json
          quantity_total: number
          quote_number: string
          requirements?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          valid_until?: string | null
        }
        Update: {
          admin_response?: string | null
          approved_at?: string | null
          auth_user_id?: string | null
          company_id?: string | null
          created_at?: string | null
          estimated_total?: number | null
          id?: string
          items?: Json
          quantity_total?: number
          quote_number?: string
          requirements?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          valid_until?: string | null
        }
        Relationships: []
      }
      returns: {
        Row: {
          admin_notes: string | null
          approved_date: string | null
          created_at: string | null
          customer_notes: string | null
          exchange_product_id: string | null
          id: string
          images: string[] | null
          inspection_notes: string | null
          order_id: string
          order_item_id: string | null
          pickup_scheduled_date: string | null
          pickup_tracking_number: string | null
          reason: string
          reason_category: string | null
          received_date: string | null
          refund_amount: number | null
          refunded_date: string | null
          return_number: string
          return_type: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          admin_notes?: string | null
          approved_date?: string | null
          created_at?: string | null
          customer_notes?: string | null
          exchange_product_id?: string | null
          id?: string
          images?: string[] | null
          inspection_notes?: string | null
          order_id: string
          order_item_id?: string | null
          pickup_scheduled_date?: string | null
          pickup_tracking_number?: string | null
          reason: string
          reason_category?: string | null
          received_date?: string | null
          refund_amount?: number | null
          refunded_date?: string | null
          return_number: string
          return_type?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_notes?: string | null
          approved_date?: string | null
          created_at?: string | null
          customer_notes?: string | null
          exchange_product_id?: string | null
          id?: string
          images?: string[] | null
          inspection_notes?: string | null
          order_id?: string
          order_item_id?: string | null
          pickup_scheduled_date?: string | null
          pickup_tracking_number?: string | null
          reason?: string
          reason_category?: string | null
          received_date?: string | null
          refund_amount?: number | null
          refunded_date?: string | null
          return_number?: string
          return_type?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "returns_exchange_product_id_fkey"
            columns: ["exchange_product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "returns_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      room_packages: {
        Row: {
          base_price: number
          created_at: string | null
          customization_options: Json | null
          description: string | null
          discount_percentage: number | null
          display_order: number | null
          featured_image: string | null
          gallery_images: Json | null
          id: string
          included_products: Json
          is_active: boolean | null
          is_featured: boolean | null
          name: string
          package_type: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          base_price: number
          created_at?: string | null
          customization_options?: Json | null
          description?: string | null
          discount_percentage?: number | null
          display_order?: number | null
          featured_image?: string | null
          gallery_images?: Json | null
          id?: string
          included_products: Json
          is_active?: boolean | null
          is_featured?: boolean | null
          name: string
          package_type: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          base_price?: number
          created_at?: string | null
          customization_options?: Json | null
          description?: string | null
          discount_percentage?: number | null
          display_order?: number | null
          featured_image?: string | null
          gallery_images?: Json | null
          id?: string
          included_products?: Json
          is_active?: boolean | null
          is_featured?: boolean | null
          name?: string
          package_type?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      rooms: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          hotspot_data: Json | null
          id: string
          name: string
          panorama_url: string | null
          thumbnail_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          hotspot_data?: Json | null
          id?: string
          name: string
          panorama_url?: string | null
          thumbnail_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          hotspot_data?: Json | null
          id?: string
          name?: string
          panorama_url?: string | null
          thumbnail_url?: string | null
        }
        Relationships: []
      }
      services: {
        Row: {
          created_at: string | null
          description: string
          display_order: number | null
          features: string[] | null
          icon: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          display_order?: number | null
          features?: string[] | null
          icon?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          display_order?: number | null
          features?: string[] | null
          icon?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      stock_movements: {
        Row: {
          created_at: string | null
          id: string
          movement_type: string
          notes: string | null
          performed_by: string | null
          product_id: string
          quantity: number
          reference_id: string | null
          reference_type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          movement_type: string
          notes?: string | null
          performed_by?: string | null
          product_id: string
          quantity: number
          reference_id?: string | null
          reference_type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          movement_type?: string
          notes?: string | null
          performed_by?: string | null
          product_id?: string
          quantity?: number
          reference_id?: string | null
          reference_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_movements_performed_by_fkey"
            columns: ["performed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_movements_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      system_metrics: {
        Row: {
          id: string
          labels: Json | null
          metric_name: string
          metric_type: string
          metric_value: number
          timestamp: string | null
        }
        Insert: {
          id?: string
          labels?: Json | null
          metric_name: string
          metric_type: string
          metric_value: number
          timestamp?: string | null
        }
        Update: {
          id?: string
          labels?: Json | null
          metric_name?: string
          metric_type?: string
          metric_value?: number
          timestamp?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          category: string
          color: string | null
          created_at: string | null
          deleted_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          category: string
          color?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          color?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      task_activity: {
        Row: {
          action: string
          created_at: string | null
          details: Json | null
          id: string
          task_id: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          details?: Json | null
          id?: string
          task_id?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          details?: Json | null
          id?: string
          task_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      task_attachments: {
        Row: {
          created_at: string | null
          file_name: string
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          task_id: string
          uploaded_by: string
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          task_id: string
          uploaded_by: string
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          task_id?: string
          uploaded_by?: string
        }
        Relationships: []
      }
      task_dependencies: {
        Row: {
          created_at: string | null
          dependency_type: string | null
          depends_on_task_id: string
          id: string
          task_id: string
        }
        Insert: {
          created_at?: string | null
          dependency_type?: string | null
          depends_on_task_id: string
          id?: string
          task_id: string
        }
        Update: {
          created_at?: string | null
          dependency_type?: string | null
          depends_on_task_id?: string
          id?: string
          task_id?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assignee_id: string | null
          created_at: string | null
          deleted_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          project_id: string
          status: string
          task_type: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          assignee_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          project_id: string
          status?: string
          task_type?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          assignee_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          project_id?: string
          status?: string
          task_type?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author_name: string
          author_role: string | null
          company: string | null
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          rating: number | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          author_name: string
          author_role?: string | null
          company?: string | null
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          rating?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          author_name?: string
          author_role?: string | null
          company?: string | null
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          rating?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      text_processing_jobs: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          input_text: string | null
          nlp_metadata: Json | null
          operation_type: string
          output_text: string | null
          status: string
          task_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          input_text?: string | null
          nlp_metadata?: Json | null
          operation_type: string
          output_text?: string | null
          status?: string
          task_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          input_text?: string | null
          nlp_metadata?: Json | null
          operation_type?: string
          output_text?: string | null
          status?: string
          task_id?: string
        }
        Relationships: []
      }
      unified_metrics: {
        Row: {
          id: string
          metric_data: Json | null
          metric_name: string
          metric_value: number | null
          system_id: string | null
          timestamp: string | null
        }
        Insert: {
          id?: string
          metric_data?: Json | null
          metric_name: string
          metric_value?: number | null
          system_id?: string | null
          timestamp?: string | null
        }
        Update: {
          id?: string
          metric_data?: Json | null
          metric_name?: string
          metric_value?: number | null
          system_id?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      user_activity_log: {
        Row: {
          action: string
          created_at: string | null
          id: string
          ip_address: string | null
          metadata: Json | null
          resource_id: string | null
          resource_type: string | null
          user_id: string
        }
        Insert: {
          action: string
          created_at?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          resource_id?: string | null
          resource_type?: string | null
          user_id: string
        }
        Update: {
          action?: string
          created_at?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          resource_id?: string | null
          resource_type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_permissions: {
        Row: {
          can_create: boolean | null
          can_delete: boolean | null
          can_edit: boolean | null
          can_view: boolean | null
          created_at: string | null
          id: string
          module: string
          user_id: string
        }
        Insert: {
          can_create?: boolean | null
          can_delete?: boolean | null
          can_edit?: boolean | null
          can_view?: boolean | null
          created_at?: string | null
          id?: string
          module: string
          user_id: string
        }
        Update: {
          can_create?: boolean | null
          can_delete?: boolean | null
          can_edit?: boolean | null
          can_view?: boolean | null
          created_at?: string | null
          id?: string
          module?: string
          user_id?: string
        }
        Relationships: []
      }
      user_presence: {
        Row: {
          cursor_position: Json | null
          id: string
          is_active: boolean | null
          last_activity: string | null
          session_id: string
          user_id: string
        }
        Insert: {
          cursor_position?: Json | null
          id?: string
          is_active?: boolean | null
          last_activity?: string | null
          session_id: string
          user_id: string
        }
        Update: {
          cursor_position?: Json | null
          id?: string
          is_active?: boolean | null
          last_activity?: string | null
          session_id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          email: string
          id: string
          name: string
          pii_flags: Json | null
          role: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          email: string
          id?: string
          name: string
          pii_flags?: Json | null
          role?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          email?: string
          id?: string
          name?: string
          pii_flags?: Json | null
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      virtual_rooms: {
        Row: {
          configuration_data: Json
          created_at: string | null
          dimensions: Json | null
          id: string
          is_public: boolean | null
          is_saved: boolean | null
          products_placed: Json | null
          room_name: string
          room_type: string | null
          thumbnail_url: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          configuration_data: Json
          created_at?: string | null
          dimensions?: Json | null
          id?: string
          is_public?: boolean | null
          is_saved?: boolean | null
          products_placed?: Json | null
          room_name: string
          room_type?: string | null
          thumbnail_url?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          configuration_data?: Json
          created_at?: string | null
          dimensions?: Json | null
          id?: string
          is_public?: boolean | null
          is_saved?: boolean | null
          products_placed?: Json | null
          room_name?: string
          room_type?: string | null
          thumbnail_url?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      warranty_claims: {
        Row: {
          admin_notes: string | null
          claim_number: string
          claim_type: string
          created_at: string | null
          description: string
          id: string
          images: Json | null
          order_id: string
          product_id: string
          resolution: string | null
          resolved_at: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          claim_number: string
          claim_type: string
          created_at?: string | null
          description: string
          id?: string
          images?: Json | null
          order_id: string
          product_id: string
          resolution?: string | null
          resolved_at?: string | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          claim_number?: string
          claim_type?: string
          created_at?: string | null
          description?: string
          id?: string
          images?: Json | null
          order_id?: string
          product_id?: string
          resolution?: string | null
          resolved_at?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      website_templates: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          estimated_hours: number | null
          features: Json | null
          id: string
          is_active: boolean | null
          name: string
          tech_stack: Json | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          estimated_hours?: number | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          tech_stack?: Json | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          estimated_hours?: number | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          tech_stack?: Json | null
        }
        Relationships: []
      }
      whatsapp_analytics: {
        Row: {
          active_conversations: number | null
          avg_response_time_minutes: number | null
          conversion_count: number | null
          created_at: string | null
          id: string
          metric_date: string
          response_rate: number | null
          revenue_attributed: number | null
          total_conversations: number | null
          total_messages_received: number | null
          total_messages_sent: number | null
        }
        Insert: {
          active_conversations?: number | null
          avg_response_time_minutes?: number | null
          conversion_count?: number | null
          created_at?: string | null
          id?: string
          metric_date: string
          response_rate?: number | null
          revenue_attributed?: number | null
          total_conversations?: number | null
          total_messages_received?: number | null
          total_messages_sent?: number | null
        }
        Update: {
          active_conversations?: number | null
          avg_response_time_minutes?: number | null
          conversion_count?: number | null
          created_at?: string | null
          id?: string
          metric_date?: string
          response_rate?: number | null
          revenue_attributed?: number | null
          total_conversations?: number | null
          total_messages_received?: number | null
          total_messages_sent?: number | null
        }
        Relationships: []
      }
      whatsapp_appointments: {
        Row: {
          appointment_type: string
          cancelled_at: string | null
          confirmed_at: string | null
          created_at: string | null
          customer_id: string | null
          duration_minutes: number | null
          id: string
          location: string | null
          notes: string | null
          reminder_sent_at: string | null
          scheduled_at: string
          status: string | null
          updated_at: string | null
          virtual_meeting_link: string | null
        }
        Insert: {
          appointment_type: string
          cancelled_at?: string | null
          confirmed_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          duration_minutes?: number | null
          id?: string
          location?: string | null
          notes?: string | null
          reminder_sent_at?: string | null
          scheduled_at: string
          status?: string | null
          updated_at?: string | null
          virtual_meeting_link?: string | null
        }
        Update: {
          appointment_type?: string
          cancelled_at?: string | null
          confirmed_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          duration_minutes?: number | null
          id?: string
          location?: string | null
          notes?: string | null
          reminder_sent_at?: string | null
          scheduled_at?: string
          status?: string | null
          updated_at?: string | null
          virtual_meeting_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_automation_rules: {
        Row: {
          action_config: Json
          action_type: string
          created_at: string | null
          id: string
          is_active: boolean | null
          name: string
          trigger_type: string
          trigger_value: string
        }
        Insert: {
          action_config: Json
          action_type: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          trigger_type: string
          trigger_value: string
        }
        Update: {
          action_config?: Json
          action_type?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          trigger_type?: string
          trigger_value?: string
        }
        Relationships: []
      }
      whatsapp_campaigns: {
        Row: {
          created_at: string | null
          created_by: string | null
          delivered_count: number | null
          description: string | null
          id: string
          message_content: string
          message_template_id: string | null
          name: string
          read_count: number | null
          response_count: number | null
          scheduled_at: string | null
          sent_count: number | null
          status: string | null
          target_segment: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          delivered_count?: number | null
          description?: string | null
          id?: string
          message_content: string
          message_template_id?: string | null
          name: string
          read_count?: number | null
          response_count?: number | null
          scheduled_at?: string | null
          sent_count?: number | null
          status?: string | null
          target_segment?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          delivered_count?: number | null
          description?: string | null
          id?: string
          message_content?: string
          message_template_id?: string | null
          name?: string
          read_count?: number | null
          response_count?: number | null
          scheduled_at?: string | null
          sent_count?: number | null
          status?: string | null
          target_segment?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_campaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "whatsapp_campaigns_message_template_id_fkey"
            columns: ["message_template_id"]
            isOneToOne: false
            referencedRelation: "whatsapp_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_conversations: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          customer_id: string | null
          customer_stage: string | null
          id: string
          last_message_at: string | null
          lead_score: number | null
          metadata: Json | null
          status: string | null
          total_messages: number | null
          updated_at: string | null
          whatsapp_number: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          customer_id?: string | null
          customer_stage?: string | null
          id?: string
          last_message_at?: string | null
          lead_score?: number | null
          metadata?: Json | null
          status?: string | null
          total_messages?: number | null
          updated_at?: string | null
          whatsapp_number: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          customer_id?: string | null
          customer_stage?: string | null
          id?: string
          last_message_at?: string | null
          lead_score?: number | null
          metadata?: Json | null
          status?: string | null
          total_messages?: number | null
          updated_at?: string | null
          whatsapp_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_conversations_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "whatsapp_conversations_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_messages: {
        Row: {
          automation_triggered: boolean | null
          content: string | null
          created_at: string | null
          customer_id: string | null
          direction: string
          id: string
          media_url: string | null
          message_id: string | null
          message_type: string | null
          phone_number: string
          response_to: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          automation_triggered?: boolean | null
          content?: string | null
          created_at?: string | null
          customer_id?: string | null
          direction: string
          id?: string
          media_url?: string | null
          message_id?: string | null
          message_type?: string | null
          phone_number: string
          response_to?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          automation_triggered?: boolean | null
          content?: string | null
          created_at?: string | null
          customer_id?: string | null
          direction?: string
          id?: string
          media_url?: string | null
          message_id?: string | null
          message_type?: string | null
          phone_number?: string
          response_to?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      whatsapp_notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string | null
          recipient: string | null
          sent_at: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message?: string | null
          recipient?: string | null
          sent_at?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string | null
          recipient?: string | null
          sent_at?: string | null
          status?: string | null
        }
        Relationships: []
      }
      whatsapp_templates: {
        Row: {
          category: string
          content: string
          created_at: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string | null
          usage_count: number | null
          variables: Json | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string | null
          usage_count?: number | null
          variables?: Json | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
          usage_count?: number | null
          variables?: Json | null
        }
        Relationships: []
      }
      wishlist: {
        Row: {
          created_at: string | null
          id: string
          product_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string
          user_id?: string
        }
        Relationships: []
      }
      woodex_task_links: {
        Row: {
          created_at: string | null
          id: string
          metadata: Json | null
          sync_status: string | null
          task_id: string | null
          updated_at: string | null
          woodex_entity_id: string | null
          woodex_entity_type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          sync_status?: string | null
          task_id?: string | null
          updated_at?: string | null
          woodex_entity_id?: string | null
          woodex_entity_type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          sync_status?: string | null
          task_id?: string | null
          updated_at?: string | null
          woodex_entity_id?: string | null
          woodex_entity_type?: string | null
        }
        Relationships: []
      }
      workflows: {
        Row: {
          config: Json | null
          created_at: string | null
          id: string
          linked_entity_id: string
          linked_entity_type: string
          name: string
          status: string
          triggered_by_event_id: string | null
          updated_at: string | null
        }
        Insert: {
          config?: Json | null
          created_at?: string | null
          id?: string
          linked_entity_id: string
          linked_entity_type: string
          name: string
          status?: string
          triggered_by_event_id?: string | null
          updated_at?: string | null
        }
        Update: {
          config?: Json | null
          created_at?: string | null
          id?: string
          linked_entity_id?: string
          linked_entity_type?: string
          name?: string
          status?: string
          triggered_by_event_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
