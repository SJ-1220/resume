import Link from "next/link";
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
  org,
}: {
  project: ProjectBlockType;
  labels: UIStrings["labels"];
  org?: { name: string; role: string };
}) {
  return (
    <article className="rp-project">
      <h3 className="rp-title">{project.title}</h3>

      <div className="rp-grid">
        <aside className="rp-side">
          {org ? (
            <p className="rp-side-org">
              <b>{org.name}</b>
              <span>{org.role}</span>
            </p>
          ) : null}
          <p className="rp-side-period">{project.period}</p>
          {project.status ? <p className="rp-status">{project.status}</p> : null}

          <p className="rp-side-label">{labels.stack}</p>
          <ul className="rp-side-stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          {project.links && project.links.length > 0 ? (
            <div className="rp-side-links">
              {project.links.map((link) => (
                <p key={link.href} className="rp-link">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                  <span className="rp-linkurl">{shortUrl(link.href)}</span>
                </p>
              ))}
            </div>
          ) : null}
        </aside>

        <div className="rp-main">
          {project.images && project.images.length > 0 ? (
            <div className="rp-shots">
              {project.images.slice(0, 3).map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img.src}
                  className={img.wide ? "shot shot--wide" : "shot"}
                  src={img.src}
                  alt={img.alt}
                />
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
        </div>
      </div>
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
      <div className="rp-hint">
        <Link href={ui.backHref} className="rp-back">
          {ui.backLabel}
        </Link>
        <span className="rp-hint__tip">
          {lang === "ko"
            ? "Ctrl / ⌘ + P → “PDF로 저장” · “머리글 및 바닥글” 해제"
            : "Ctrl / ⌘ + P → “Save as PDF” · turn off “Headers and footers”"}
        </span>
      </div>

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
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {text}
                    </a>{" "}
                    <span className="rp-linkurl">{shortUrl(item.href)}</span>
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
              <b>{exp.org}</b>
              <span className="rp-exp-role">{exp.role}</span>
              <span className="rp-url">{exp.period}</span>
            </p>
            {exp.projects.map((project) => (
              <PrintProject
                key={project.title}
                project={project}
                labels={ui.labels}
                org={{ name: exp.org, role: exp.role }}
              />
            ))}
          </div>
        ))}
      </section>

      <section className="rp-section--projects">
        <h2>{ui.sections.projects}</h2>
        {data.projects.map((project) => (
          <PrintProject
            key={project.title}
            project={project}
            labels={ui.labels}
          />
        ))}
      </section>

      <div className="rp-tail">
        <section className="rp-tail-row">
          <h2>{ui.sections.skills}</h2>
          <div>
            {data.skills.map((group) => (
              <p key={group.label}>
                <b>{group.label}</b>  {group.items.join(" · ")}
              </p>
            ))}
          </div>
        </section>

        <section className="rp-tail-row">
          <h2>{ui.sections.education}</h2>
          <div>
            {data.education.map((item) => (
              <p key={item.org}>
                <b>{item.org}</b> — {item.detail}{" "}
                <span className="rp-url">{item.period}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="rp-tail-row">
          <h2>{ui.sections.certifications}</h2>
          <div>
            {data.certifications.map((group) => (
              <p key={group.label} className="rp-cert-row">
                <b>{group.label}</b>{" "}
                {group.items.map((item, i) => (
                  <span key={item.label}>
                    {i > 0 ? " · " : ""}
                    <span className="rp-nowrap">
                      {item.label} ({item.period})
                    </span>
                  </span>
                ))}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
