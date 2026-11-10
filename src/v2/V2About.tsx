import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { resume } from "../data/resume";
import { ObfuscatedEmail } from "../components/ObfuscatedEmail";
import { SKILLS } from "./skills";

interface V2AboutProps {
  activeSkill: string | null;
  onSelectSkill: (label: string) => void;
}

function projectCount(tags: string[]) {
  return projects.filter((project) =>
    project.tags.some((tag) => tags.includes(tag)),
  ).length;
}

export function V2About({ activeSkill, onSelectSkill }: V2AboutProps) {
  return (
    <section className="v2-about" id="about" aria-labelledby="v2-about-title">
      <div className="v2-about-col">
        <h2 id="v2-about-title">About me</h2>
        <p className="v2-about-bio">
          I&apos;m a senior software engineer at Logos Bible Software, where I
          lead a team moving a 16-year-old desktop application to the web and
          mobile. The projects above are what I build in my own time.
        </p>

        <ul className="v2-jobs">
          {resume.experience.map((job, index) => (
            <li key={`${job.company}-${index}`}>
              <span className="v2-jobs-dates">{job.dates}</span>
              <span>
                <strong>{job.title}</strong>, {job.company}
              </span>
            </li>
          ))}
        </ul>

        <div className="v2-about-links">
          <Link to="/v2/resume" className="v2-btn v2-btn-secondary">
            Full résumé
          </Link>
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-link"
          >
            GitHub
          </a>
          <ObfuscatedEmail className="v2-link" />
        </div>
      </div>

      <div className="v2-about-col">
        <h3 className="v2-about-subtitle">
          What these projects are built with
        </h3>
        <p className="v2-about-hint">Pick one to see the projects using it.</p>
        <div className="v2-skills">
          {SKILLS.map((skill) => (
            <button
              key={skill.label}
              type="button"
              className={`v2-chip${activeSkill === skill.label ? " v2-chip-active" : ""}`}
              aria-pressed={activeSkill === skill.label}
              onClick={() => onSelectSkill(skill.label)}
            >
              {skill.label}
              <span className="v2-chip-count">{projectCount(skill.tags)}</span>
            </button>
          ))}
        </div>
        <p className="v2-about-more">
          At work I also use C#, C++, Python and SQL. The{" "}
          <Link to="/v2/resume">résumé</Link> has the full list.
        </p>
      </div>
    </section>
  );
}
