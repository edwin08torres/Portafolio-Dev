export type Tech =
  | "React"
  | "TailwindCSS"
  | "typescript"
  | ".NET"
  | "SQL"
  | "Html"
  | "CSS"
  | "Javascript"
  | "AOS"
  | "Marquee";

export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string; 
  techs: readonly Tech[];
  image: string;
  github?: string;
  demo?: string;
  note?: string;
}
