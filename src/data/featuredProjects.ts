/**
 * Proyectos que se muestran en la página (secciones "Cosas que construí" y "Más proyectos").
 * Los datos reales de cada proyecto (enlaces, capturas, galería, casos) siguen en `projects.ts`;
 * aquí solo se define cómo se presentan. Los proyectos de `projects.ts` que no aparecen aquí
 * quedan ocultos en la página, pero no se borran.
 */

export type CardAction = "case" | "gallery" | "playstore" | "appstore" | "demo";

export interface FeaturedCard {
  slug: string;
  /** Nombre de la tarjeta (nombre propio, no se traduce) */
  name: string;
  /** Clases de fondo y color de texto de la tarjeta */
  surface: string;
  /** Color del número grande con contorno */
  numberColor: string;
  /** Inclinación de la tarjeta */
  tilt: string;
  /** Baja la tarjeta 48 px en la segunda columna (solo en escritorio) */
  offset: boolean;
  /** Fondo del botón "Ver caso" */
  caseButton: string;
  /** Etiquetas de stack (texto técnico, no se traduce) */
  stack: readonly string[];
  actions: readonly CardAction[];
}

export const featuredCards: readonly FeaturedCard[] = [
  {
    slug: "legal-track-usa",
    name: "Legal Track USA",
    surface: "bg-cobalt text-white",
    numberColor: "text-sun",
    tilt: "-rotate-[1.2deg]",
    offset: false,
    caseButton: "bg-sun",
    stack: ["React Native", "Redux", "Firebase", "TypeScript"],
    actions: ["case", "playstore", "appstore"],
  },
  {
    slug: "trackdeli-pos",
    name: "NEXOL POS",
    surface: "bg-sun text-ink",
    numberColor: "text-cobalt",
    tilt: "rotate-1",
    offset: true,
    caseButton: "pop-btn-dark",
    stack: ["Electron", "React", "SQLite", "NestJS", "Prisma", "PostgreSQL"],
    actions: ["case", "gallery"],
  },
  {
    slug: "dulces-momentos",
    name: "Dulces Momentos",
    surface: "bg-tomato text-ink",
    numberColor: "text-white",
    tilt: "rotate-[1.4deg]",
    offset: false,
    caseButton: "pop-btn-dark",
    stack: ["React", "TypeScript", "Tailwind", "SQL", ".NET"],
    actions: ["case", "gallery"],
  },
  {
    slug: "mopetco-grooming",
    name: "MoPetCo Grooming",
    surface: "bg-bubble text-ink",
    numberColor: "text-mint",
    tilt: "-rotate-1",
    offset: true,
    caseButton: "pop-btn-dark",
    stack: ["React", "Tailwind", "TypeScript", "SQL", ".NET"],
    actions: ["case", "demo"],
  },
];

export type MoreRow =
  | { kind: "case"; slug: string }
  | { kind: "link"; id: string; href: string };

export const moreProjects: readonly MoreRow[] = [
  { kind: "case", slug: "trackdeli-web" },
  { kind: "case", slug: "trackdeli-app" },
  { kind: "case", slug: "mimas-tatas-foundation" },
  { kind: "case", slug: "silent-hill-tribute" },
  { kind: "case", slug: "logic-tkl-915" },
  { kind: "case", slug: "coffee-shop-landing" },
  { kind: "case", slug: "mopetco-booking" },
  {
    kind: "link",
    id: "itinia",
    href: "https://play.google.com/store/apps/details?id=com.app_turismo.app_turismo",
  },
];

/** Orden de los casos de estudio: el mismo orden del sitio (destacados y luego "Más proyectos"). */
export const caseOrder: readonly string[] = [
  ...featuredCards.map((c) => c.slug),
  ...moreProjects.flatMap((r) => (r.kind === "case" ? [r.slug] : [])),
];

/** Color de la columna izquierda del caso de estudio (el de la tarjeta; menta para los demás). */
export const caseTheme: Record<string, { surface: string; light: boolean }> = {
  "legal-track-usa": { surface: "bg-cobalt text-white", light: false },
  "trackdeli-pos": { surface: "bg-sun text-ink", light: true },
  "dulces-momentos": { surface: "bg-tomato text-ink", light: true },
  "mopetco-grooming": { surface: "bg-bubble text-ink", light: true },
  "trackdeli-web": { surface: "bg-mint text-ink", light: true },
  "trackdeli-app": { surface: "bg-sun text-ink", light: true },
  "mimas-tatas-foundation": { surface: "bg-bubble text-ink", light: true },
  "silent-hill-tribute": { surface: "bg-cobalt text-white", light: false },
  "logic-tkl-915": { surface: "bg-sun text-ink", light: true },
  "coffee-shop-landing": { surface: "bg-tomato text-ink", light: true },
  "mopetco-booking": { surface: "bg-mint text-ink", light: true },
};
export const defaultCaseTheme = { surface: "bg-mint text-ink", light: true };