import type {
  ProjectBlock as ProjectBlockType,
  ResumeData,
  UIStrings,
} from "@/content/types";
import { withCode } from "@/lib/with-code";

function shortUrl(href: string): string {
  let s = href.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
  try {
    s = decodeURIComponent(s);
  } catch {
    // leave encoded
  }
  return s;
}

function PrintProject({
  project,
  labels,
}: {
  project: ProjectBlockType;
  labels: UIStrings["labels"];
}) {
  return (
    <article className="rp-project">
      <h3>{project.title}</h3>
      <p className="rp-meta">
        <span>{project.period}</span>
        {project.status ? <span className="rp-status">{project.status}</span> : null}
      </p>

      {project.images && project.images.length > 0 ? (
        <div className="rp-shots">
          {project.images.slice(0, 2).map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={img.src} src={img.src} alt={img.alt} />
          ))}
        </div>
      ) : null}

      <p className="rp-overview">{withCode(project.overview)}</p>

      <p className="rp-label">{labels.contributions}</p>
      <ul className="rp-list">
        {project.contributions.map((item) => (
          <li key={item}>{withCode(item)}</li>
        ))}
      </ul>

      {project.problemSolving && project.problemSolving.length > 0 ? (
        <>
          <p className="rp-label">{labels.problemSolving}</p>
          {project.problemSolving.map((ps) => (
            <p key={ps.title} className="rp-ps">
              <b>{ps.title}.</b> {withCode(ps.body)}
            </p>
          ))}
        </>
      ) : null}

      <p className="rp-stack">
        <span className="rp-label rp-label--inline">{labels.stack}</span>{" "}
        {project.stack.join(" · ")}
      </p>

      {project.links && project.links.length > 0 ? (
        <div className="rp-links">
          {project.links.map((link) => (
            <div key={link.href} className="rp-link">
              <a href={link.href}>{link.label}</a>{" "}
              <span className="rp-url">{shortUrl(link.href)}</span>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ResumePrint({
  data,
  ui,
  lang,
}: {
  data: ResumeData;
  ui: UIStrings;
  lang: string;
}) {
  return (
    <div className="resume-print" lang={lang}>
      <p className="rp-hint">
        {lang === "ko"
          ? "Ctrl / ⌘ + P → 대상을 “PDF로 저장”"
          : "Ctrl / ⌘ + P → choose “Save as PDF”"}
      </p>

      <header className="rp-header">
        <h1>{data.name}</h1>
        <p className="rp-contact">
          {data.contact.map((item, i) => {
            const text = item.value ?? item.label;
            return (
              <span key={item.label}>
                {i > 0 ? "   ·   " : ""}
                {item.href ? (
                  <>
                    <a href={item.href}>{text}</a>{" "}
                    <span className="rp-url">{shortUrl(item.href)}</span>
                  </>
                ) : (
                  text
                )}
              </span>
            );
          })}
        </p>
        <p className="rp-tagline">{data.tagline}</p>
      </header>

      <section>
        <h2>{ui.sections.experience}</h2>
        {data.experience.map((exp) => (
          <div key={exp.org} className="rp-exp">
            <p className="rp-exp-head">
              <b>{exp.org}</b> — {exp.role}{" "}
              <span className="rp-url">{exp.period}</span>
            </p>
            {exp.projects.map((project) => (
              <PrintProject
                key={project.title}
                project={project}
                labels={ui.labels}
              />
            ))}
          </div>
        ))}
      </section>

      <section>
        <h2>{ui.sections.projects}</h2>
        {data.projects.map((project) => (
          <PrintProject
            key={project.title}
            project={project}
            labels={ui.labels}
          />
        ))}
      </section>

      <section className="rp-skills">
        <h2>{ui.sections.skills}</h2>
        {data.skills.map((group) => (
          <p key={group.label}>
            <b>{group.label}</b>  {group.items.join(" · ")}
          </p>
        ))}
      </section>

      <section>
        <h2>{ui.sections.education}</h2>
        {data.education.map((item) => (
          <p key={item.org}>
            <b>{item.org}</b> — {item.detail}{" "}
            <span className="rp-url">{item.period}</span>
          </p>
        ))}
      </section>
    </div>
  );
}
