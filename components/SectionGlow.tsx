// 섹션마다 다른 위치·색의 은은한 블롭을 깔아 스크롤할 때 색 구역이 바뀌는 리듬을 만든다.
// (배경 전체의 MeshBackground와 별개로, 섹션 로컬 강조용.)
export default function SectionGlow({
  tint,
  position = "left",
  animate = "animate-mesh-a",
}: {
  tint: string;
  position?: "left" | "right";
  animate?: "animate-mesh-a" | "animate-mesh-b" | "animate-mesh-c";
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute top-[-12%] h-[420px] w-[420px] rounded-full blur-3xl ${animate} ${
          position === "left" ? "-left-[10%]" : "-right-[10%]"
        }`}
        style={{ background: `var(${tint})`, opacity: 0.16 }}
      />
    </div>
  );
}
