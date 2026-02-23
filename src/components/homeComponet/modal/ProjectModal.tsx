import { Dialog, DialogContent } from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { ExternalLink, Github, X, ArrowUpRight, Layers } from "lucide-react";
import type { Project } from "@/types/Project";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  project: Project | null;
}

function dedent(text: string): string {
  const lines = text.split("\n");
  const nonEmpty = lines.filter((l) => l.trim().length > 0);
  const indent = nonEmpty.reduce((min, l) => {
    const match = l.match(/^(\s*)/);
    return match ? Math.min(min, match[1].length) : min;
  }, Infinity);
  return lines
    .map((l) => l.slice(indent))
    .join("\n")
    .trim();
}

const accentColors: Record<
  number,
  { from: string; to: string; text: string; badge: string }
> = {
  0: {
    from: "#3b82f6",
    to: "#6366f1",
    text: "#60a5fa",
    badge: "rgba(59,130,246,0.15)",
  },
  1: {
    from: "#f59e0b",
    to: "#ef4444",
    text: "#fbbf24",
    badge: "rgba(251,191,36,0.12)",
  },
  2: {
    from: "#8b5cf6",
    to: "#ec4899",
    text: "#a78bfa",
    badge: "rgba(139,92,246,0.15)",
  },
  3: {
    from: "#ec4899",
    to: "#f43f5e",
    text: "#f472b6",
    badge: "rgba(236,72,153,0.12)",
  },
  4: {
    from: "#14b8a6",
    to: "#3b82f6",
    text: "#2dd4bf",
    badge: "rgba(20,184,166,0.12)",
  },
};

const markdownComponents: Components = {
  a: (props) => (
    <a
      className="text-blue-400 underline decoration-blue-500/30 underline-offset-2 hover:decoration-blue-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-base font-bold text-white mt-7 mb-2.5 first:mt-0 flex items-center gap-2"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-sm leading-relaxed text-slate-400 my-2" {...props} />
  ),
  li: (props) => (
    <li
      className="text-sm leading-relaxed text-slate-400 flex items-start gap-2 before:content-['▸'] before:text-blue-500 before:shrink-0 before:mt-0.5"
      {...props}
    />
  ),
  ul: (props) => <ul className="space-y-2 my-3 list-none" {...props} />,
  strong: (props) => (
    <strong className="text-blue-300 font-semibold" {...props} />
  ),
  code: (props) => {
    const { inline, ...rest } = props as any;
    return inline ? (
      <code
        className="px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-300 text-[0.85em] font-mono"
        {...rest}
      />
    ) : (
      <pre className="overflow-x-auto rounded-xl bg-[#0a0f1e] border border-white/[0.06] p-4 my-3">
        <code className="font-mono text-sm" {...rest} />
      </pre>
    );
  },
};

export default function ProjectModal({ open, onOpenChange, project }: Props) {
  if (!project) return null;

  const details = dedent(project.details);
  const projectIndex = project.slug
    ? [
        "mopetco-grooming",
        "coffee-shop-landing",
        "logic-tkl-915",
        "pokedex",
        "WeatherBit",
      ].indexOf(project.slug)
    : 0;
  const accent = accentColors[projectIndex >= 0 ? projectIndex : 0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[96vw] max-w-[900px] h-[90vh] p-0 overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d1a] shadow-2xl shadow-black/60 flex flex-col [&>button]:hidden">
        {/* ── CLOSE BUTTON ── */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.12] transition-all backdrop-blur-md"
          aria-label="Close"
        >
          <X size={15} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row w-full h-full overflow-hidden"
          >
            {/* ──────────── LEFT PANEL ──────────── */}
            <div className="relative md:w-[42%] shrink-0 flex flex-col overflow-hidden">
              {/* Portrait image */}
              <div className="relative h-52 md:h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top scale-105"
                  style={{ filter: "brightness(0.55)" }}
                />

                {/* Gradient overlays */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 30%, #080d1a 100%)`,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${accent.from}22 0%, transparent 60%)`,
                  }}
                />

                {/* Left panel content (pinned to bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
                  {/* Accent line */}
                  <div
                    className="w-10 h-0.5 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
                    }}
                  />

                  <h2 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight">
                    {project.title}
                  </h2>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border"
                        style={{
                          color: accent.text,
                          borderColor: `${accent.from}55`,
                          background: accent.badge,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA buttons in left panel for desktop */}
                  <div className="hidden md:flex flex-col gap-2 mt-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                        style={{
                          background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                          boxShadow: `0 4px 20px ${accent.from}44`,
                        }}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                        <ArrowUpRight size={13} className="opacity-70" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.09] hover:text-white transition-all"
                      >
                        <Github size={14} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ──────────── RIGHT PANEL ──────────── */}
            <div className="flex-1 flex flex-col min-h-0 border-l border-white/[0.05]">
              {/* Header stripe */}
              <div className="shrink-0 px-6 py-4 border-b border-white/[0.05] flex items-center gap-2">
                <Layers size={14} style={{ color: accent.text }} />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: accent.text }}
                >
                  Case Study
                </span>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-1 modal-scroll">
                <p className="text-sm text-slate-400 leading-relaxed pb-3 border-b border-white/[0.05] mb-4">
                  {project.description}
                </p>

                <ReactMarkdown components={markdownComponents}>
                  {details}
                </ReactMarkdown>
              </div>

              {/* Footer (mobile CTAs) */}
              <div className="md:hidden shrink-0 border-t border-white/[0.05] px-6 py-4 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.09] transition-all"
                  >
                    <Github size={14} /> Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                    }}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
