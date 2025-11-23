export type Tech =
  | "React"
  | "React Native"
  | "TailwindCSS"
  | "typescript"
  | ".NET"
  | "SQL"
  | "Html"
  | "CSS"
  | "Javascript"
  | "Expo"
  | "Angular"
  | "Bootstrap"
  | "WeatherBit API";

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
