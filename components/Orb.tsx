// 로고 무드의 글로시 젤리 오브: 핑크 → 라일락 → 페리윙클 방사형 그라데이션,
// 상단 흰 하이라이트, 뒤편 블러 글로우, 반짝이는 별 입자, 느린 부유·호흡·궤도 회전.
const SPARKLES = [
  { top: "16%", left: "70%", size: 8, delay: "0s" },
  { top: "72%", left: "20%", size: 5, delay: "0.7s" },
  { top: "44%", left: "85%", size: 4, delay: "1.5s" },
  { top: "10%", left: "28%", size: 4, delay: "2.2s" },
  { top: "62%", left: "58%", size: 5, delay: "3s" },
];

export default function Orb({ size = 220 }: { size?: number }) {
  const orbSize = Math.round(size * 0.72);

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* 뒤편 블러 글로우 (핑크 + 페리윙클) */}
      <div
        aria-hidden
        className="absolute rounded-full blur-2xl"
        style={{
          width: size * 0.9,
          height: size * 0.9,
          background:
            "radial-gradient(circle, var(--accent-pink) 0%, var(--accent-periwinkle) 55%, transparent 72%)",
          opacity: 0.45,
        }}
      />

      {/* 얇은 궤도 링 */}
      <div
        aria-hidden
        className="animate-spin-slow absolute rounded-full border border-dashed"
        style={{ width: size * 0.92, height: size * 0.92, borderColor: "rgba(255,255,255,.45)" }}
      />
      <div
        aria-hidden
        className="animate-spin-slow-reverse absolute rounded-full border border-dashed"
        style={{ width: size * 0.78, height: size * 0.78, borderColor: "rgba(166,182,242,.35)" }}
      />

      {/* 반짝이는 별 입자 */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          aria-hidden
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px rgba(255,255,255,.9)",
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* 젤리·글라스 구체 */}
      <div
        className="animate-float relative"
        style={{ width: orbSize, height: orbSize }}
      >
        <div
          className="animate-breathe h-full w-full rounded-[46%_54%_55%_45%/50%_45%_55%_50%]"
          style={{
            background:
              "radial-gradient(circle at 32% 26%, #ffffff 0%, var(--accent-pink) 28%, var(--accent-lilac) 62%, var(--accent-periwinkle) 100%)",
            boxShadow:
              "inset -16px -20px 34px rgba(120,70,150,.28), inset 14px 16px 22px rgba(255,255,255,.65), 0 22px 46px rgba(166,142,232,.45)",
          }}
        >
          {/* 상단 광택 하이라이트 — 또렷하게 */}
          <div
            aria-hidden
            className="ml-[16%] mt-[10%] h-[34%] w-[46%] rounded-full blur-[1.5px]"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,1), transparent 68%)" }}
          />
          {/* 하단 옅은 컬러 반사 */}
          <div
            aria-hidden
            className="ml-[30%] mt-[62%] h-[18%] w-[42%] rounded-full blur-[6px]"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,.35), transparent 72%)" }}
          />
        </div>
      </div>
    </div>
  );
}
