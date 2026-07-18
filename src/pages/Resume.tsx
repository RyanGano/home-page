import { Link } from "react-router-dom";
import { resume } from "../data/resume";
import { ObfuscatedEmail } from "../components/ObfuscatedEmail";

export function Resume() {
  return (
    <main className="resume">
      <Link to="/" className="back-link">
        ← Back to projects
      </Link>

      <header className="resume-header">
        <div className="resume-headline">
          <h1>{resume.name}</h1>
          <p className="resume-title">{resume.title}</p>
        </div>
        <div className="resume-contact">
          <ObfuscatedEmail className="resume-contact-link" />
          <a
            className="resume-contact-link"
            href={resume.github}
            target="_blank"
            rel="noreferrer"
          >
            github.com/ryangano
          </a>
        </div>
      </header>

      <div className="resume-downloads">
        <a className="btn btn-primary" href={resume.downloads.pdf} download>
          Download PDF
        </a>
        <a className="btn btn-secondary" href={resume.downloads.docx} download>
          Download DOCX
        </a>
      </div>

      <section className="resume-section">
        <p className="resume-overview">{resume.overview}</p>
      </section>

      <section className="resume-section">
        <h2>Key Projects &amp; Impact</h2>
        <ul className="resume-impact">
          {resume.impact.map((item) => (
            <li key={item.label}>
              <strong>{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <dl className="resume-skills">
          {resume.skills.map((group) => (
            <div className="resume-skill-row" key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        {resume.experience.map((job, i) => (
          <article className="resume-job" key={`${job.company}-${i}`}>
            <div className="resume-job-head">
              <h3>
                {job.title} <span className="resume-job-company">·</span>{" "}
                {job.company}
              </h3>
              <span className="resume-job-dates">{job.dates}</span>
            </div>
            <ul className="resume-job-highlights">
              {job.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resume-section">
        <h2>Personal Projects</h2>
        <ul className="resume-personal">
          {resume.personal.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>{" "}
              — {item.note}
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <p>
          <strong>{resume.education.school}</strong> — {resume.education.degree}
        </p>
      </section>
    </main>
  );
}
