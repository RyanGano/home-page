export interface ProjectLinks {
  repo?: string;
  live?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  techStack: string[];
  links: ProjectLinks;
}

export const projects: Project[] = [
  {
    slug: "ai-mysteries",
    name: "AI Mysteries",
    tagline: "Interactive alternate endings for the novel Within Tolerance",
    description:
      "A companion site for the novel Within Tolerance: the printed book directs readers here for its 'real' ending. The site hosts an interactive library of mystery short stories, each with multiple weighted-random alternate endings, cross-referenced clues, and a rare hidden ending. Content is entirely data-driven, so new stories can be added without touching code, backed by an author-facing tooling pipeline that syncs local content into Cosmos DB.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      ".NET",
      "Azure Cosmos DB",
      "Azure Static Web Apps",
      "Serverless",
      "Content-Driven",
      "Books & Publishing",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      ".NET 10 minimal API",
      "Azure Cosmos DB",
      "Azure Static Web Apps",
      "Azure App Service",
      "Managed identity (passwordless auth)",
      "Custom .NET console tooling for content sync/seed/diff",
    ],
    links: {
      repo: "https://github.com/RyanGano/ai-mysteries",
      live: "https://ai-mysteries.ryangano.com/",
    },
  },
  {
    slug: "goal-reacher",
    name: "Goal Reacher",
    tagline: "Financial tracking with shared household budgets and receipt OCR",
    description:
      "A personal financial-tracking app for managing bank accounts (registers), nested sub-registers for sinking funds, spending categories, and recurring or scheduled transactions. Supports shared multi-user household access, forecasting charts, and a no-login 'Try It Out' trial mode so visitors can explore before creating an account.",
    tags: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "Entity Framework Core",
      "Azure Cosmos DB",
      "Microsoft Entra ID",
      "Fintech",
      "AI/OCR",
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Bootstrap 5",
      "Recharts",
      "Axios",
      "Decimal.js for money math",
      "ASP.NET Core minimal API",
      "Entity Framework Core",
      "Azure Cosmos DB",
      "Microsoft Entra ID (MSAL / JWT auth)",
      "Azure Key Vault",
      "Azure Document Intelligence (receipt OCR)",
      "Azure Static Web Apps + App Service",
    ],
    links: {
      live: "https://goalreacher.app/",
    },
  },
  {
    slug: "route-weather-tracker",
    name: "Route Weather Tracker",
    tagline: "Live road and weather conditions for a specific mountain drive",
    description:
      "A travel-planning utility that shows live road and weather conditions, webcams, and forecasts for the mountain passes along a specific driving route (Stanwood, WA to Kalispell, MT). Aggregates state DOT traffic data and weather APIs into a single real-time dashboard for trip planning.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      ".NET",
      ".NET Aspire",
      "Azure Key Vault",
      "Weather API",
      "Travel & Utility",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Vite 7",
      "React Bootstrap",
      "React Router v7",
      "Axios",
      ".NET 10 Web API",
      ".NET Aspire (AppHost / ServiceDefaults orchestration)",
      "Azure Key Vault (DefaultAzureCredential)",
      "WSDOT Traffic API",
      "OpenWeatherMap API",
      "xUnit tests",
    ],
    links: {
      repo: "https://github.com/RyanGano/route-weather-tracker",
      live: "https://www.whentodrive.com/",
    },
  },
  {
    slug: "skull-king",
    name: "Skull King Scorer",
    tagline: "Digital scorekeeper for the Skull King card game",
    description:
      "A digital scoring companion for the physical Skull King card game. Tracks players, bids, tricks, and scores across the game's fixed 10-round structure, with support for the expansion pack, difficulty options, and a random-bid mode. Multiple players see near-real-time updates via short polling with hash-based change detection, without needing a persistent backend.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      ".NET",
      "Game Companion",
      "Multiplayer",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      ".NET 10 minimal API",
      "Entity Framework Core (in-memory, intentionally ephemeral)",
      "Azure Static Web Apps + App Service",
      "xUnit unit + integration tests (WebApplicationFactory)",
    ],
    links: {
      repo: "https://github.com/RyanGano/skull-king",
      live: "https://skullk.ing/",
    },
  },
  {
    slug: "code-review-trainer",
    name: "Code Review Trainer",
    tagline: "AI-generated code samples for practicing code review skills",
    description:
      "An AI-assisted training tool that helps developers practice and sharpen code-review skills. Azure OpenAI generates code samples with intentional issues for the user to review and critique, then evaluates the quality of that review to give feedback.",
    tags: [
      "React",
      "TypeScript",
      ".NET",
      "Azure OpenAI",
      "AI/LLM",
      "Developer Tools",
    ],
    techStack: [
      "React",
      "TypeScript",
      "C# .NET minimal API",
      "Azure OpenAI",
      "Azure Static Web Apps",
    ],
    links: {
      repo: "https://github.com/RyanGano/code-review-trainer",
      live: "https://codereviewtrainer.com/",
    },
  },
];
