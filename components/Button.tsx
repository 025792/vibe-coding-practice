import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { primaryButtonClass, buttonSecondaryClass } from "@/lib/ui";

// 그라데이션 배경 + 상단 광택(sheen) 하이라이트 — 오브와 같은 글로시 질감을 CTA에도 적용
function Sheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 45%)",
      }}
    />
  );
}

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /** 넓은 공간(히어로 등)에서만 true. 헤더처럼 좁은 공간에선 false로 그림자를 가볍게. */
  glow?: boolean;
};

export function PrimaryButton({
  children,
  className = "",
  glow = true,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`${primaryButtonClass(glow)} ${className}`}
      style={{ background: "var(--grad-main)" }}
    >
      <Sheen />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

type PrimaryLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  glow?: boolean;
};

export function PrimaryLinkButton({
  children,
  className = "",
  glow = false,
  ...props
}: PrimaryLinkProps) {
  return (
    <a
      {...props}
      className={`${primaryButtonClass(glow)} ${className}`}
      style={{ background: "var(--grad-main)" }}
    >
      <Sheen />
      <span className="relative z-10">{children}</span>
    </a>
  );
}

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function SecondaryButton({ children, className = "", ...props }: SecondaryButtonProps) {
  return (
    <button {...props} className={`${buttonSecondaryClass} ${className}`}>
      {children}
    </button>
  );
}
