export interface ExperienceConfig {
  id: string; // "logacode" | "grupomonge" | "freelance"
  stack: string[];
  accent: string;
}

export const experiencesConfig: ExperienceConfig[] = [
  {
    id: "logacode",
    stack: ["React Native", "TypeScript", "Redux", "Reanimated", "TailwindCSS"],
    accent: "#8b5cf6",
  },
  {
    id: "grupomonge",
    stack: ["React", "Blazor", "TypeScript", ".NET 8", "SignalR", "SQL Server", "Azure DevOps"],
    accent: "#3b82f6",
  },
  {
    id: "freelance",
    stack: ["React", "Vite", "TailwindCSS", "Zustand", ".NET", "SQL Server"],
    accent: "#10b981",
  },
];
