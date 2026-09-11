import Orb from "./Orb";

// 첨부 목업(홈 화면)을 간추려 재구성한 폰 미리보기.
// 디자인은 290px 폭 기준으로 고정하고, 화면 크기에 따라 scale로 축소해서
// (내부 비율이 흐트러지지 않게) 좌측 텍스트 길이에 맞춘다.
const BASE_W = 290; // 기준 디자인 폭(px). lg 화면에서는 scale로 축소해서 크기만 줄인다.

function Tile({ emoji, v, k, tag, tone }: { emoji: string; v: string; k: string; tag: string; tone: string }) {
  return (
    <div className="rounded-[13px] bg-[var(--card)] p-2 text-center shadow-[var(--shadow-soft)]">
      <div className="text-[14px]">{emoji}</div>
      <div className="mt-0.5 text-[11px] font-extrabold text-[var(--text)]">{v}</div>
      <div className="text-[8.5px] font-semibold text-[var(--text-soft)]">{k}</div>
      <div
        className="mt-1 inline-block rounded-full px-1.5 py-[1px] text-[8px] font-bold"
        style={{ background: `color-mix(in srgb, var(${tone}) 16%, transparent)`, color: `var(${tone})` }}
      >
        {tag}
      </div>
    </div>
  );
}

const AREAS: { nm: string; pc: number; tint: string }[] = [
  { nm: "신체", pc: 80, tint: "--accent-periwinkle" },
  { nm: "정신", pc: 58, tint: "--accent-lilac" },
  { nm: "감정", pc: 55, tint: "--warning" },
  { nm: "사회", pc: 40, tint: "--text-soft" },
  { nm: "환경", pc: 46, tint: "--success" },
];

export default function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto h-[595px] w-[290px] lg:h-[512px] lg:w-[249px] ${className}`}>
      <div className="origin-top-left lg:scale-[0.86]" style={{ width: BASE_W }}>
        <div className="animate-float relative rotate-[7deg]">
          <div
            className="relative overflow-hidden rounded-[34px] bg-[var(--bg)] pb-4"
            style={{
              width: "100%",
              boxShadow: "0 30px 70px rgba(80,50,120,.35), 0 0 0 9px #2b2b30, 0 0 0 11px #47474d",
            }}
          >
            {/* 노치 */}
            <div className="absolute left-1/2 top-[9px] z-20 h-[15px] w-[80px] -translate-x-1/2 rounded-full bg-[#2b2b30]" />

            {/* 상태바 */}
            <div className="flex items-center justify-between px-5 pb-1 pt-3.5 text-[9.5px] font-bold text-[var(--text)]">
              <span>9:41</span>
              <span>●●●</span>
            </div>

            {/* 인사말 */}
            <div className="mt-0.5 flex items-start justify-between px-4">
              <div>
                <p className="text-[12.5px] font-extrabold text-[var(--text)]">
                  안녕하세요, <span style={{ color: "var(--accent-lilac)" }}>LifeDNA</span>님 👋
                </p>
                <p className="mt-0.5 text-[9px] font-semibold text-[var(--text-soft)]">
                  오늘도 나를 조금 더 알아가요
                </p>
              </div>
              <div
                className="flex h-6 w-6 items-center justify-center rounded-[8px] text-[11px]"
                style={{ background: "var(--card)", boxShadow: "var(--shadow-soft)" }}
              >
                🔔
              </div>
            </div>

            {/* 히어로 카드: 오브 + 오늘의 컨디션 점수 */}
            <div
              className="relative mx-3 mt-2 overflow-hidden rounded-[18px] px-3 pb-3 pt-2.5 text-center"
              style={{ background: "var(--card)", boxShadow: "var(--shadow-soft)" }}
            >
              <span
                className="inline-flex items-center gap-1 rounded-full px-2 py-[2.5px] text-[8.5px] font-bold"
                style={{ background: "var(--success-bg)", color: "var(--success)" }}
              >
                ● 안정적으로 성장 중
              </span>
              <div className="mx-auto -my-1 flex h-[126px] items-center justify-center">
                <Orb size={126} />
              </div>
              <p className="text-[9px] font-bold text-[var(--text-soft)]">오늘의 LifeDNA 컨디션</p>
              <p className="mt-0.5 text-[23px] font-extrabold leading-none text-[var(--text)]">
                82<span className="text-[12px] text-[var(--text-soft)]"> 점</span>
              </p>
              <span
                className="mt-1.5 inline-flex items-center rounded-full px-2 py-[2px] text-[9px] font-bold"
                style={{ background: "color-mix(in srgb, var(--accent-periwinkle) 20%, transparent)", color: "var(--accent-periwinkle)" }}
              >
                ▲ 어제보다 +4
              </span>
            </div>

            {/* 지표 3개 */}
            <div className="mx-3 mt-2 grid grid-cols-3 gap-1.5">
              <Tile emoji="😴" v="6.4시간" k="수면" tag="조금 부족" tone="--warning" />
              <Tile emoji="💧" v="1.6L" k="수분" tag="좋아요" tone="--success" />
              <Tile emoji="🔥" v="72%" k="스트레스" tag="높음" tone="--danger" />
            </div>

            {/* 오늘의 일지 CTA */}
            <div className="mx-3 mt-2 rounded-[16px] px-3 py-2.5 text-white" style={{ background: "var(--grad-main)" }}>
              <p className="text-[10.5px] font-extrabold leading-snug">
                오늘 변화가 있었던 DNA, 딱 30초만 기록해요 🧬
              </p>
            </div>

            {/* 5개 영역 밸런스 — 한 줄 막대그래프로 간추림 */}
            <div className="mx-3 mt-2 rounded-[16px] p-2.5" style={{ background: "var(--card)", boxShadow: "var(--shadow-soft)" }}>
              <p className="text-[10px] font-extrabold text-[var(--text)]">5개 영역 밸런스</p>
              <div className="mt-2 flex items-end justify-between gap-1.5 px-0.5">
                {AREAS.map((a) => (
                  <div key={a.nm} className="flex flex-1 flex-col items-center gap-1">
                    <span className="text-[8px] font-extrabold text-[var(--text-soft)]">{a.pc}</span>
                    <span className="flex h-[36px] w-full items-end overflow-hidden rounded-full" style={{ background: "var(--line)" }}>
                      <span className="block w-full rounded-full" style={{ height: `${a.pc}%`, background: `var(${a.tint})` }} />
                    </span>
                    <span className="text-[8px] font-bold text-[var(--text-soft)]">{a.nm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
