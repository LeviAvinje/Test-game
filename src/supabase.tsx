// supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://obtgicxyyygzkgofrsts.supabase.co' // bytt ut med din
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idGdpY3h5eXlnemtnb2Zyc3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTAxNzAsImV4cCI6MjA2MjE4NjE3MH0.Mh-ZnA_Y6OLZWyYAUxIMUVg2Iv7a5_s3YFvhpcM3HEk' // bytt ut med din

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
