export interface SolutionItem {
  title?: string;
  text: string;
}

export interface ParsedCase {
  challenge?: string;
  solutionIntro: string[];
  solution: SolutionItem[];
  impact?: string;
}

export function dedent(text: string): string {
  const lines = text.split("\n");
  const nonEmpty = lines.filter((l) => l.trim().length > 0);
  const indent = nonEmpty.reduce((min, l) => {
    const match = l.match(/^(\s*)/);
    return match ? Math.min(min, match[1].length) : min;
  }, Infinity);
  return lines
    .map((l) => l.slice(indent === Infinity ? 0 : indent))
    .join("\n")
    .trim();
}

/**
 * Parte el texto `details` (markdown con secciones `###`) en desafío, solución e impacto.
 * Los datos no cambian: solo se lee el mismo texto de siempre. Se usa el orden de las
 * secciones (desafío, solución, impacto), que es el mismo en todos los proyectos y en ES y EN.
 */
export function parseCase(details: string): ParsedCase {
  const parts = dedent(details)
    .split(/^###\s.*$/m)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
  const [challenge, solutionRaw, impact] = parts;

  const solutionIntro: string[] = [];
  const solution: SolutionItem[] = [];
  for (const raw of (solutionRaw ?? "").split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("- ")) {
      const body = line.slice(2).trim();
      const m = body.match(/^\*\*(.+?)\*\*\s*(.*)$/);
      if (m) solution.push({ title: m[1].replace(/:\s*$/, ""), text: m[2].trim() });
      else solution.push({ text: body });
    } else {
      solutionIntro.push(line);
    }
  }
  return { challenge, solutionIntro, solution, impact };
}

