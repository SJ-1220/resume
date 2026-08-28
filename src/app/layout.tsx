import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://SJ-1220.github.io/resume"),
  title: "Developer Portfolio",
  description: "Full-stack developer — web, mobile, and real-time integrations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSansKr.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
