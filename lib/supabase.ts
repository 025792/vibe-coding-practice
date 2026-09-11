import { createClient } from "@supabase/supabase-js";

// Supabase 프로젝트 URL과 anon key. .env.local 에 설정해야 동작합니다.
// (자세한 설정 방법: docs/spec.md 참고)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}
