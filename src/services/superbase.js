import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://twnbsrkijbausplwmwzp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bmJzcmtpamJhdXNwbHdtd3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNDE2NzAsImV4cCI6MjAwNTkxNzY3MH0.Vuq9SXmuWXTLBxZMTo8bjSrodbeTb_oyn0qItiHA4hI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
