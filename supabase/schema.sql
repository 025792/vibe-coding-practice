-- Supabase 대시보드 → SQL Editor 에서 이 파일 내용을 실행하면
-- 사전예약 이메일을 저장할 테이블과 접근 권한이 만들어집니다.

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- RLS(Row Level Security) 켜기: 기본적으로 아무도 못 읽고/못 쓰게 막은 뒤,
-- "이메일 추가(insert)"만 누구나 할 수 있도록 허용합니다.
alter table waitlist enable row level security;

create policy "누구나 신청 가능 (insert only)"
  on waitlist
  for insert
  to anon
  with check (true);

-- select/update/delete 정책은 만들지 않았기 때문에,
-- 웹사이트(anon key)로는 신청만 가능하고 목록 조회는 불가능합니다.
-- 신청자 목록은 Supabase 대시보드 → Table Editor 에서 직접 확인하세요.
