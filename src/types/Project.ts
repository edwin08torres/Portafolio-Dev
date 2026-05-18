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
  | "Firebase";

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

