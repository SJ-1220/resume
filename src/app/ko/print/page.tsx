import type { Metadata } from "next";
import ResumePrint from "@/components/ResumePrint";
import { resume, ui } from "@/content/resume";

export const metadata: Metadata = {
  title: `${resume.ko.name} — 포트폴리오 (인쇄용)`,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ResumePrint data={resume.ko} ui={ui.ko} lang="ko" />;
}
