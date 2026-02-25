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
  | "Angular"
  | "Bootstrap"
  | "WeatherBit API"
  | "GSAP";

export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  techs: readonly Tech[];
  image: string;
  detailImage?: string;
  github?: string;
  demo?: string;
  note?: string;
}

