// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vnkqoowcuaiirrhtpqlc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZua3Fvb3djdWFpaXJyaHRwcWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MzkyNDcsImV4cCI6MjA1MzUxNTI0N30.ygLGw-YFTGxc1lrXLKYViWuAY_HORu1cbrHqO6CELxI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);