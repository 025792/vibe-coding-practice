import Image from "next/image";
import { PrimaryLinkButton } from "./Button";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-[var(--line)] backdrop-blur-md"
      style={{ background: "color-mix(in srgb, var(--bg) 78%, transparent)" }}
    >
      <div className="mx-auto flex max-w-[1040px] items-center justify-between px-5 py-3">
        <span className="flex items-center gap-2">
          <Image src="/logo.png" alt="LifeDNA 로고" width={32} height={32} className="rounded-[10px]" />
          <span className="text-[17px] font-extrabold tracking-tight">
            Life
            <span
              className="animate-grad-shift bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--grad-main)" }}
            >
              DNA
            </span>
          </span>
        </span>
        <PrimaryLinkButton href="#waitlist-form">사전예약</PrimaryLinkButton>
      </div>
    </header>
  );
}
