"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const FROM = {
  up: "translate-y-6 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
  scale: "scale-95 opacity-0",
} as const;

/**
 * 스크롤해서 화면에 들어오면 방향에 따라 살짝 움직이며 페이드인.
 * 섹션마다 다른 방향을 줘서 스크롤 리듬에 변화를 준다.
 * 첫 화면(히어로)엔 사용하지 않는다 — 로드 즉시 보여야 하는 콘텐츠는 감싸지 않는다.
 * prefers-reduced-motion이면 motion-reduce: 변형으로 애니메이션 없이 바로 보여준다.
 */
export default function Reveal({
  children,
  className = "",
  from = "up",
}: {
  children: ReactNode;
  className?: string;
  from?: keyof typeof FROM;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 transition-all duration-700 ease-out ${
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : FROM[from]
      } ${className}`}
    >
      {children}
    </div>
  );
}
