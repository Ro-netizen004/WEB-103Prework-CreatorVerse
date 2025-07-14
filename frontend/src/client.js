import { createClient } from '@supabase/supabase-js';
const URL = 'https://dwlrqjzhnoixpffaoslv.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3bHJxanpobm9peHBmZmFvc2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzkwNzgsImV4cCI6MjA2Nzc1NTA3OH0.OVcvf7fPZcLzb31a62sYFRobyFvIL_ZzFnstNOhF6xc";

export const supabase = createClient(URL, supabaseAnonKey);
