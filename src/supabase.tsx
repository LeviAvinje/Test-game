// supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://srymsxhtuiqqcyzrcshk.supabase.co'
const supabaseAnonKey = 'sb_publishable_JaVPKZee-nk3YCfT5_g9Fg_g0apfe61'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
