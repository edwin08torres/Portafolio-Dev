export type Tech =
  | "React"
  | "React Native"
  | "TailwindCSS"
  | "TypeScript"
  | ".NET"
  | "SQL"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "Expo"
  | "GSAP"
  | "Redux"
  | "Firebase"
  | "Next.js"
  | "GraphQL"
  | "Zustand"
  | "i18n"
  | "NestJS"
  | "Prisma"
  | "PostgreSQL"
  | "Socket.IO"
  | "Mapbox"
  | "Flutter"
  | "Dart"
  | "Riverpod"
  | "Electron";

export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  techs: readonly Tech[];
  image: string;
  detailImage?: string;
  gallery?: string[];
  github?: string;
  demo?: string;
  playstore?: string;
  appstore?: string;
  note?: string;
}

