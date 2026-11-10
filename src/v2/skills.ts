/** A skill shown in the v2 "About" section. Clicking one filters the project
 * list to projects carrying any of its tags (tags come from projects.ts). */
export interface Skill {
  label: string;
  tags: string[];
}

export const SKILLS: Skill[] = [
  { label: "React", tags: ["React"] },
  { label: "TypeScript", tags: ["TypeScript"] },
  {
    label: ".NET",
    tags: [
      ".NET",
      "ASP.NET Core",
      "Blazor",
      ".NET Aspire",
      "Entity Framework Core",
    ],
  },
  {
    label: "Azure",
    tags: [
      "Azure Cosmos DB",
      "Azure Static Web Apps",
      "Azure App Service",
      "Azure Key Vault",
      "Azure OpenAI",
      "Microsoft Entra ID",
    ],
  },
  { label: "AI", tags: ["AI/LLM", "AI/OCR", "Azure OpenAI"] },
  {
    label: "Databases",
    tags: ["Azure Cosmos DB", "PostgreSQL", "Entity Framework Core"],
  },
  { label: "Canvas", tags: ["Canvas"] },
];
