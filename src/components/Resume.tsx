import type { ReactNode } from "react";
import Link from "next/link";
import type {
  ProjectBlock as ProjectBlockType,
  ResumeData,
  UIStrings,
} from "@/content/types";

// Renders `backtick`-wrapped spans as inline <code>; everything else stays text.
function withCode(text: string): ReactNode[] {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code key={i} className="code">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  );
}

function ProjectBlock({
  project,
  labels,
}: {
  project: ProjectBlockType;
  labels: UIStrings["labels"];
}) {
  return (
    <article className="resume__project">
      <h4>{project.title}</h4>
      <p className="resume__project-meta">
        <span className="period">{project.period}</span>
        {project.status ? <span className="status">{project.status}</span> : null}
      </p>

      <div className="block">
        <p className="label">{labels.overview}</p>
        <p>{withCode(project.overview)}</p>
      </div>

      <div className="block">
        <p className="label">{labels.contributions}</p>
        <ul>
          {project.contributions.map((item) => (
            <li key={item}>{withCode(item)}</li>
          ))}
        </ul>
      </div>

      {project.problemSolving && project.problemSolving.length > 0 ? (
        <div className="block">
          <p className="label">{labels.problemSolving}</p>
          {project.problemSolving.map((ps) => (
            <p key={ps.title} className="ps-item">
              <b>{ps.title}.</b> {withCode(ps.body)}
            </p>
          ))}
        </div>
      ) : null}

      <div className="block">
        <p className="label">{labels.stack}</p>
        <ul className="stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      {project.links && project.links.length > 0 ? (
        <div className="block">
          <ul className="links">
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

export default function Resume({
  data,
  ui,
  lang,
}: {
  data: ResumeData;
  ui: UIStrings;
  lang: string;
}) {
  return (
    <div className="resume" lang={lang}>
      <header className="resume__header">
        <span className="resume__wordmark">{data.name}</span>
        <nav className="resume__nav">
          <Link href={ui.toggleHref}>{ui.toggle}</Link>
        </nav>
      </header>

      <div className="resume__hero">
        <h1>{data.name}</h1>
        <p>{data.tagline}</p>
      </div>

      <section aria-labelledby="experience">
        <h2 id="experience">{ui.sections.experience}</h2>
        {data.experience.map((exp) => (
          <div className="resume__row" key={exp.org}>
            <div className="resume__meta">
              <h3>{exp.org}</h3>
              <span className="role">{exp.role}</span>
              <span className="period">{exp.period}</span>
            </div>
            <div className="resume__projects">
              {exp.summary ? <p className="resume__summary">{exp.summary}</p> : null}
              {exp.projects.map((project) => (
                <ProjectBlock
                  key={project.title}
                  project={project}
                  labels={ui.labels}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section aria-labelledby="projects">
        <h2 id="projects">{ui.sections.projects}</h2>
        <div className="resume__projects resume__projects--personal">
          {data.projects.map((project) => (
            <ProjectBlock
              key={project.title}
              project={project}
              labels={ui.labels}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="skills">
        <h2 id="skills">{ui.sections.skills}</h2>
        <div className="resume__skills">
          {data.skills.map((group) => (
            <div className="resume__row resume__row--skill" key={group.label}>
              <div className="resume__meta">
                <h3>{group.label}</h3>
              </div>
              <ul className="stack">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="education">
        <h2 id="education">{ui.sections.education}</h2>
        {data.education.map((item) => (
          <div className="resume__row resume__row--skill" key={item.org}>
            <div className="resume__meta">
              <h3>{item.org}</h3>
            </div>
            <div>
              <span className="role">{item.detail}</span>
              <span className="period">{item.period}</span>
            </div>
          </div>
        ))}
      </section>

      <section aria-labelledby="contact" className="contact">
        <h2 id="contact">{ui.sections.contact}</h2>
        <ul>
          {data.contact.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value ?? item.label}
                </a>
              ) : (
                item.value ?? item.label
              )}
            </li>
          ))}
        </ul>
      </section>

      <footer className="resume__footer">
        <p>
          {ui.credit.beforeLink}
          <a href={ui.credit.href} target="_blank" rel="noopener noreferrer">
            {ui.credit.linkText}
          </a>
          {ui.credit.afterLink}
        </p>
      </footer>
    </div>
  );
}
