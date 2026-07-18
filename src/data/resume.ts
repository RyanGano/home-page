// Structured source of truth for the web resume at /resume.
// Keep this in sync with the downloadable copies in public/
// (Ryan_Gano_Resume.docx / .pdf).

export type ResumeJob = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ResumeLink = {
  label: string;
  href: string;
  note: string;
};

export const resume = {
  name: "Ryan Gano",
  title: "Senior Software Engineer",
  github: "https://github.com/ryangano",
  site: "https://ryangano.com/resume",
  siteLabel: "ryangano.com/resume",

  overview:
    "Senior Software Engineer with deep experience building scalable, cross-platform " +
    "applications and developer tooling. A proven track record modernizing legacy systems, " +
    "improving engineering velocity, and delivering high-impact features across web, desktop, " +
    "and mobile platforms. Passionate about empowering developers through automation, clean " +
    "architecture, and cloud-native solutions.",

  impact: [
    {
      label: "Legacy system modernization",
      text: "Leading a team transitioning a 16-year-old desktop application to a modern web/mobile architecture, delivering ahead of schedule.",
    },
    {
      label: "Codebase simplification",
      text: "Orchestrated the deprecation of 16 legacy features, removing 545k lines of code with zero major regressions.",
    },
    {
      label: "Release engineering",
      text: "Designed a branching strategy and release cadence still in use 10+ years later, enabling consistent and reliable product delivery.",
    },
  ],

  skills: [
    {
      label: "Languages",
      items: ["C#", "C++", "TypeScript", "Python", "JavaScript", "SQL", "KQL"],
    },
    {
      label: "Backends & APIs",
      items: [
        "Node.js",
        ".NET",
        "RESTful APIs",
        "Minimal API",
        "Azure App Services",
        "Microservices",
        "Redis (Caching)",
      ],
    },
    {
      label: "Frontend & UI",
      items: [
        "React",
        "Web Components",
        "HTML5",
        "CSS3",
        "WPF",
        "WinForms",
        "Performance Optimization",
      ],
    },
    {
      label: "Tools",
      items: ["Git", "GitHub Actions", "Copilot (AI)", "Terraform", "Puppet"],
    },
    {
      label: "Cloud & DevOps",
      items: [
        "Azure",
        "CI/CD",
        "Microservices",
        "Containers",
        "Monitoring & Alerting",
      ],
    },
    {
      label: "Practices",
      items: [
        "Agile",
        "Scrum",
        "Kanban",
        "Test-Driven Development",
        "Security Best Practices",
      ],
    },
    {
      label: "Soft skills",
      items: [
        "Leadership",
        "Collaboration",
        "Growth Mindset",
        "Problem Solving",
        "Creative Thinking",
      ],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      company: "Logos Bible Software",
      title: "Senior Software Engineer",
      dates: "Dec 2021 – Present",
      location: "Remote",
      highlights: [
        "Leading a team converting 16 years of product design/delivery from a local desktop application into a Web/Desktop/Mobile implementation, building for scale and performance with TypeScript/React and many custom microservices.",
        "My team holds the highest sprint velocity per person and the lowest bug count across our dev organization.",
        "Led a team tasked with shutting down 16 deeply integrated products/features — deleted 545k lines of code in a live, customer-facing product with zero major user-facing consequences.",
        "Improved sprint velocity per person from 6.9 to 11.3 while leading; helped resolve severe morale issues, with zero attrition during my time in leadership.",
        "Recognized as a key contributor on flagship Logos Bible Software: “Ryan single-handedly improved per-person velocity by joining the team.”",
      ],
    },
    {
      company: "LIFEchurch360",
      title: "Executive Pastor",
      dates: "Oct 2020 – Nov 2021",
      highlights: [
        "Designed and championed a policy change extending vacation and holiday pay to many part-time employees.",
        "Instrumental in creating two years of budgets during a time of uncertainty.",
        "Led a team of 7 and owned strategy and planning for the $1M+ business side of the organization.",
      ],
    },
    {
      company: "Logos Bible Software",
      title: "Software Developer",
      dates: "Aug 2011 – Oct 2020",
      highlights: [
        "Led a development team of ~12 (responsible for 80–90% of company revenue) through 2 major product releases.",
        "Architected and implemented a branching and release strategy that improved release cadence and reduced integration issues.",
        "Devised and implemented a plan to ship a minor version update every six weeks using a hybrid of Agile/Scrum and Kanban.",
      ],
    },
  ] satisfies ResumeJob[],

  personal: [
    {
      label: "goalreacher.app",
      href: "https://goalreacher.app",
      note: "Secure personal finance tracker built on Azure Cosmos DB and Minimal API; deepened cloud-native architecture and authentication expertise.",
    },
    {
      label: "codereviewtrainer.com",
      href: "https://codereviewtrainer.com",
      note: "App to help developers improve their code-review skills, built with GitHub Copilot to explore AI-assisted development and prompt engineering.",
    },
    {
      label: "skullk.ing",
      href: "https://skullk.ing",
      note: "Real-time scoring system with live updates and backend data consistency; grew skills in distributed systems and state management.",
    },
  ] satisfies ResumeLink[],

  education: {
    school: "City University",
    degree: "BS in Computer Science",
    year: "2005",
  },

  downloads: {
    pdf: "/Ryan_Gano_Resume.pdf",
    docx: "/Ryan_Gano_Resume.docx",
  },
};
