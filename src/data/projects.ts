export interface ProjectLinks {
  repo?: string;
  live?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  technicalDescription: string;
  tags: string[];
  techStack: string[];
  links: ProjectLinks;
}

export const projects: Project[] = [
  {
    slug: "ai-mysteries",
    name: "AI Mysteries",
    tagline:
      "A growing library of interactive mystery stories with multiple endings",
    description:
      "A growing library of original mystery short stories, started as the payoff site for the novel Within Tolerance, whose unresolved ending points readers here. Each story is readable online with several alternate endings that change from read to read, clues that tie back to their earlier foreshadowing, and a rare hidden ending for anyone who looks closely enough.",
    technicalDescription:
      "Every book is entirely data-driven with no book-specific content in the code, so new stories ship without a redeploy, backed by an author-facing tooling pipeline that syncs local content into Cosmos DB.",
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
      "A personal finance app for managing bank accounts, savings goals, spending categories, and recurring or scheduled bills. Supports shared household access for multiple people, forecasting charts to see where your money is headed, snapping a photo of a receipt to log it automatically, and a no-login 'Try It Out' mode so visitors can explore before creating an account.",
    technicalDescription:
      "Receipt photos are parsed via Azure Document Intelligence, data lives in Cosmos DB, and shared household access is secured through Microsoft Entra ID.",
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
    name: "When to Drive",
    tagline: "Live road and weather conditions for a specific mountain drive",
    description:
      "A travel-planning utility that shows live road and weather conditions, webcams, and forecasts for the mountain passes along a chosen driving route, so you can decide when it's actually a good time to hit the road.",
    technicalDescription:
      "Aggregates state DOT traffic data and weather APIs into a single real-time dashboard, orchestrated with .NET Aspire.",
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
      "A digital scoring companion for the physical Skull King card game. Tracks players, bids, tricks, and scores across the game's fixed 10-round structure, with support for the expansion pack, difficulty options, and a random-bid mode. Everyone at the table sees score updates on their own device in near real time.",
    technicalDescription:
      "Multiple players stay in sync via short polling with hash-based change detection, without needing a persistent backend connection.",
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
      "A training tool for practicing code review. AI generates code samples with intentionally hidden issues for you to review, then evaluates your review and gives feedback on what you caught and what you missed.",
    technicalDescription:
      "Azure OpenAI both generates the flawed code samples and evaluates the quality of submitted reviews.",
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
  {
    slug: "catandomizer",
    name: "Catandomizer",
    tagline: "Generates random, valid board layouts for Settlers of Catan",
    description:
      "A companion tool for the Settlers of Catan tabletop game that builds a randomized but valid board layout, including harbors and number tokens, so players don't have to shuffle tiles by hand. Layouts can be recalculated on demand, reproduced later from a shareable ID, or reset to the game's standard beginner layout.",
    technicalDescription:
      "A Blazor WebAssembly frontend renders the hex board client-side from JSON returned by a separate ASP.NET Core minimal API, which owns the board generation and validation logic.",
    tags: [".NET", "Blazor", "Azure App Service", "Game Companion"],
    techStack: [
      "Blazor WebAssembly",
      "ASP.NET Core minimal API",
      "Azure App Service",
    ],
    links: {
      repo: "https://github.com/RyanGano/Catandomizer",
      live: "https://catandomizer.azurewebsites.net/",
    },
  },
];
