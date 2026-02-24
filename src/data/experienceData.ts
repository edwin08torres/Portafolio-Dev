export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    type: string;
    bullets: string[];
    stack: string[];
    accent: string;
}

export const experiences: Experience[] = [
    {
        company: "LogaCode",
        role: "React Native Developer",
        period: "Aug 2025 – Present",
        location: "Remote",
        type: "Part-time Contract",
        bullets: [
            "Developing a social app with React Native, focusing on the Community Module (Reels) with optimized video preloading.",
            "Implemented complex animations using Reanimated, ensuring 60fps performance across iOS and Android.",
            "Built a local-first Profile system allowing users to manage playlists and settings with immediate UI feedback.",
        ],
        stack: ["React Native", "TypeScript", "Redux", "Reanimated", "TailwindCSS"],
        accent: "#8b5cf6",
    },
    {
        company: "Grupo Monge",
        role: "Software Engineer",
        period: "Jan 2023 – Present",
        location: "Managua, Nicaragua",
        type: "Hybrid",
        bullets: [
            "Engineered modular Blazor and React interfaces for AI assistants, implementing standard UI components to speed up development.",
            "Built real-time features using SignalR and integrated .NET 6/8 APIs with robust logging and security.",
            "Deployed a headless Strapi CMS strategy, allowing non-technical teams to manage content independently.",
        ],
        stack: ["React", "Blazor", "TypeScript", ".NET 8", "SignalR", "SQL Server", "Azure DevOps"],
        accent: "#3b82f6",
    },
];
