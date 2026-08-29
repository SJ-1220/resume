import type { Metadata } from "next";
import ResumePrint from "@/components/ResumePrint";
import { resume, ui } from "@/content/resume";

export const metadata: Metadata = {
  title: `${resume.en.name} — Portfolio (print)`,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ResumePrint data={resume.en} ui={ui.en} lang="en" />;
}
