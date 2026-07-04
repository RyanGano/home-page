export interface TagGroup {
  label: string;
  tags: string[];
}

// Explicit ordering/grouping for known tags. Any project tag not listed here
// falls into an "Other" bucket at render time so nothing is silently hidden.
export const TAG_GROUPS: TagGroup[] = [
  {
    label: "Tech stack",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      ".NET",
      ".NET Aspire",
      "ASP.NET Core",
      "Entity Framework Core",
      "Azure Cosmos DB",
      "Azure Static Web Apps",
      "Azure Key Vault",
      "Azure OpenAI",
      "Microsoft Entra ID",
      "Serverless",
      "Weather API",
    ],
  },
  {
    label: "Project type",
    tags: [
      "AI/LLM",
      "AI/OCR",
      "Fintech",
      "Game Companion",
      "Multiplayer",
      "Travel & Utility",
      "Books & Publishing",
      "Content-Driven",
      "Developer Tools",
    ],
  },
];
