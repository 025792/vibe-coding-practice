import type { Metadata } from "next";
import MeshBackground from "@/components/MeshBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeDNA — 사전예약",
  description: "매일의 기록으로 나를 유전자처럼 읽어내는 웰니스 앱, LifeDNA 사전예약",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* Pretendard 웹폰트 (한글 본문용, 새 npm 패키지 없이 CDN으로만) */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body className="min-h-full min-w-0 flex flex-col">
        <MeshBackground />
        {children}
      </body>
    </html>
  );
}
