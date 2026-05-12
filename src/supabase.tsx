// supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

NEXT_PUBLIC_SUPABASE_URL=https://srymsxhtuiqqcyzrcshk.supabase.co/rest/v1/
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_JaVPKZee-nk3YCfT5_g9Fg_g0apfe61

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)
