import type { Metadata } from "next";
import Resume from "@/components/Resume";
import { resume, ui } from "@/content/resume";

export const metadata: Metadata = {
  title: `${resume.ko.name} — 개발자`,
  description: resume.ko.tagline,
  alternates: { languages: { "en-US": "/" } },
};

export default function Page() {
  return <Resume data={resume.ko} ui={ui.ko} lang="ko" />;
}
