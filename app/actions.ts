"use server";

import { getSupabaseClient } from "@/lib/supabase";

export type SubscribeResult =
  | { status: "success" }
  | { status: "duplicate" }
  | { status: "invalid" }
  | { status: "not_configured" }
  | { status: "error" };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToWaitlist(
  _prevState: SubscribeResult | null,
  formData: FormData
): Promise<SubscribeResult> {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL_REGEX.test(email)) {
    return { status: "invalid" };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    // Supabase 환경변수(.env.local)가 아직 설정되지 않은 상태
    return { status: "not_configured" };
  }

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    // unique 제약 위반 = 이미 신청한 이메일
    if (error.code === "23505") {
      return { status: "duplicate" };
    }
    console.error("waitlist insert error", error);
    return { status: "error" };
  }

  return { status: "success" };
}
