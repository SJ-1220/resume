export type Locale = "en" | "ko";

export interface LinkItem {
  label: string;
  href: string;
}

export interface ContactItem {
  label: string;
  value?: string;
  href?: string;
}

export interface ProblemSolvingItem {
  title: string;
  body: string;
}

export interface ProjectImage {
  /** Path under public/, WITH the basePath, e.g. "/resume/projects/manda-grid.png" */
  src: string;
  alt: string;
  /** Landscape figure (e.g. a diagram): render full-width instead of in the thumbnail row. */
  wide?: boolean;
}

export interface ProjectBlock {
  title: string;
  period: string;
  status?: string;
  overview: string;
  contributions: string[];
  problemSolving?: ProblemSolvingItem[];
  stack: string[];
  links?: LinkItem[];
  images?: ProjectImage[];
}

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  summary?: string;
  projects: ProjectBlock[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  org: string;
  detail: string;
  period: string;
}

export interface ResumeData {
  name: string;
  tagline: string;
  experience: ExperienceItem[];
  projects: ProjectBlock[];
  skills: SkillGroup[];
  education: EducationItem[];
  contact: ContactItem[];
}

export interface Credit {
  beforeLink: string;
  linkText: string;
  href: string;
  afterLink: string;
}

export interface UIStrings {
  toggle: string;
  toggleHref: string;
  /** Header link to the print/PDF view. */
  pdfHref: string;
  pdfLabel: string;
  /** Print view: link back to the main portfolio page. */
  backHref: string;
  backLabel: string;
  credit: Credit;
  sections: {
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
  };
  labels: {
    overview: string;
    contributions: string;
    problemSolving: string;
    stack: string;
  };
}
