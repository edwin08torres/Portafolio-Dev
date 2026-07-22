import { Dialog, DialogContent } from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import {
  ExternalLink,
  Github,
  X,
  ArrowUpRight,
  Layers,
  ChevronLeft,
  Apple,
} from "lucide-react";
import type { Project } from "@/types/Project";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

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

const markdownComponents: Components = {
  a: (props) => (
    <a
      className="text-[#a3e635] underline decoration-[#a3e635]/40 underline-offset-2 hover:decoration-[#a3e635] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-sm font-mono font-bold text-[#a3e635] tracking-widest uppercase mt-6 mb-3.5 first:mt-0 flex items-center gap-2 border-b border-zinc-800 pb-1.5"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-sm leading-relaxed text-zinc-300 my-2" {...props} />
  ),
  li: (props) => (
    <li
      className="text-sm leading-relaxed text-zinc-300 pl-5 relative my-1.5 before:absolute before:left-0 before:top-0 before:text-[#a3e635] before:content-['■'] before:text-[10px]"
      {...props}
    />
  ),
  ul: (props) => <ul className="space-y-1.5 my-3 list-none" {...props} />,
  strong: (props) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  code: (props) => {
    const { inline, ...rest } = props as any;
    return inline ? (
      <code
        className="px-1.5 py-0.5 rounded-[2px] bg-zinc-900 border border-zinc-800 text-[#a3e635] text-[0.85em] font-mono break-words"
        {...rest}
      />
    ) : (
      <pre className="overflow-x-auto rounded-[2px] bg-[#121212] border border-zinc-800 p-4 my-3">
        <code className="font-mono text-sm text-zinc-200" {...rest} />
      </pre>
    );
  },
};

export default function ProjectModal({ open, onOpenChange, project }: Props) {
  if (!project) return null;

  const { t } = useLanguage();
  const title = t(`projects.items.${project.slug}.title`);
  const description = t(`projects.items.${project.slug}.description`);
  const details = dedent(t(`projects.items.${project.slug}.details`));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[94vw] max-w-[900px] h-[88vh] max-h-[calc(100vh-2rem)] p-0 overflow-hidden rounded-[2px] border border-zinc-800 bg-[#080808] shadow-none flex flex-col [&>button]:hidden">
        {/* Mobile Header */}
        <div className="md:hidden shrink-0 flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-[#0c0c0c]">
          <button
            onClick={() => onOpenChange(false)}
            className="p-1.5 rounded-[2px] bg-zinc-900 border border-zinc-700 text-zinc-300 transition-all"
            aria-label={t("nav.goBack")}
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex-1 flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 bg-[#a3e635] shrink-0" />
            <span className="text-sm font-mono font-bold text-white truncate uppercase tracking-wider">
              {title}
            </span>
          </div>
        </div>

        {/* Desktop Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="hidden md:flex absolute top-4 right-4 z-50 p-2 rounded-[2px] bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-[#a3e635] hover:text-[#a3e635] transition-all"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col md:flex-row w-full h-full overflow-hidden"
          >
            {/* Left preview & actions */}
            <div className="relative md:w-[42%] shrink-0 flex flex-col overflow-hidden bg-[#0c0c0c] border-r border-zinc-800">
              {/* Project Image Background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={project.image}
                  alt={`${title} preview`}
                  className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent" />
              </div>

              <div className="relative h-48 md:h-full flex flex-col justify-between p-6 z-10">
                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-[#a3e635] tracking-widest uppercase mb-2 block">
                    CASE STUDY
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-white uppercase leading-tight tracking-tight mb-4">
                    {title}
                  </h2>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-[2px] text-[10px] font-mono uppercase tracking-wider border border-zinc-800 bg-[#050505] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex flex-col gap-2 relative z-10">
                  {project.playstore && (
                    <a
                      href={project.playstore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-[2px] text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border border-emerald-600/50 bg-emerald-950/20 hover:bg-emerald-900/30 transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.397-1.127V2.941c0-.422.13-.807.397-1.127zM14.78 12.99l2.766 2.766-3.754 2.164-3.805-3.806 4.793-4.124zm5.823-1.42l-2.023-1.164-3.007 2.594 3.007 2.594 2.023-1.164a2 2 0 0 0 0-2.86zM13.792 12L3.61 1.814C3.882 1.488 4.302 1.28 4.78 1.28c.36 0 .703.096 1.008.27l12.775 7.35-4.771 3.1zm0 0L8.793 16.9l4.999-4.9zm0 0" />
                      </svg>
                      Google Play
                    </a>
                  )}
                  {project.appstore && (
                    <a
                      href={project.appstore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-[2px] text-xs font-mono font-bold uppercase tracking-wider text-white border border-zinc-700 bg-zinc-900 hover:border-zinc-500 transition-all"
                    >
                      <Apple size={14} className="-mt-0.5" />
                      App Store
                    </a>
                  )}
                  {!project.playstore && !project.appstore && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-[2px] text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#a3e635] border border-[#a3e635] hover:bg-[#b5ff14] transition-all"
                    >
                      <ExternalLink size={14} />
                      {t("projects.liveDemo")}
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-[2px] text-xs font-mono font-medium text-zinc-300 bg-[#080808] border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all"
                    >
                      <Github size={14} />
                      {t("projects.sourceCode")}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Markdown details */}
            <div className="flex-1 flex flex-col min-h-0 min-w-0 bg-[#080808]">
              <div className="shrink-0 px-6 py-4 border-b border-zinc-800 flex items-center gap-2 bg-[#0c0c0c]">
                <Layers size={14} className="text-[#a3e635]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                  {t("nav.caseStudy")}
                </span>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-1 modal-scroll">
                <p className="text-sm text-zinc-400 leading-relaxed pb-4 border-b border-zinc-800 mb-4">
                  {description}
                </p>

                <ReactMarkdown components={markdownComponents}>
                  {details}
                </ReactMarkdown>
              </div>

              {/* Mobile Actions */}
              <div className="md:hidden shrink-0 border-t border-zinc-800 px-6 py-4 flex flex-col gap-2 bg-[#0c0c0c]">
                <div className="flex gap-3 w-full">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-[2px] text-xs font-mono font-medium text-zinc-300 bg-[#080808] border border-zinc-800 hover:border-zinc-600 transition-all"
                    >
                      <Github size={14} /> {t("projects.sourceCode")}
                    </a>
                  )}
                  {!project.playstore && !project.appstore && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-[2px] text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#a3e635] border border-[#a3e635] transition-all"
                    >
                      <ExternalLink size={14} /> {t("projects.liveDemo")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
