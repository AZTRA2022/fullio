import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL?.toString() || "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.toString() || "");

export default supabase;