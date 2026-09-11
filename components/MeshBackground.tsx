// 화면 전체에 고정되는 은은한 mesh-gradient 배경.
// 블러된 파스텔 블롭 3개가 서로 다른 속도로 아주 느리게 떠다니며 몽환적인 분위기를 만든다.
// prefers-reduced-motion이면 globals.css에서 애니메이션을 정지시킨다.
export default function MeshBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "var(--bg)" }}>
      <div
        className="animate-mesh-a absolute -left-[10%] -top-[8%] h-[46vw] max-h-[520px] min-h-[280px] w-[46vw] max-w-[520px] min-w-[280px] rounded-full blur-3xl"
        style={{ background: "var(--accent-pink)", opacity: 0.15 }}
      />
      <div
        className="animate-mesh-b absolute -right-[12%] top-[6%] h-[50vw] max-h-[560px] min-h-[300px] w-[50vw] max-w-[560px] min-w-[300px] rounded-full blur-3xl"
        style={{ background: "var(--accent-periwinkle)", opacity: 0.18 }}
      />
      <div
        className="animate-mesh-c absolute bottom-[-14%] left-1/3 h-[42vw] max-h-[480px] min-h-[260px] w-[42vw] max-w-[480px] min-w-[260px] rounded-full blur-3xl"
        style={{ background: "var(--accent-lilac)", opacity: 0.14 }}
      />
    </div>
  );
}
