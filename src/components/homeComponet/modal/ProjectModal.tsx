import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/Project";

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

export default function ProjectModal({ open, onOpenChange, project }: Props) {
  if (!project) return null;

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
        className="text-lg font-bold text-white mt-8 mb-3 first:mt-0"
        {...props}
      />
    ),
    p: (props) => (
      <p className="text-sm leading-relaxed text-slate-300 my-3" {...props} />
    ),
    li: (props) => (
      <li className="text-sm leading-relaxed text-slate-300 ml-1" {...props} />
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

  const details = dedent(project.details);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[94vw] md:max-w-[820px]
          h-auto max-h-[85vh] p-0 overflow-hidden
          rounded-2xl
          border border-white/[0.08]
          bg-[#0c1222] backdrop-blur-2xl
          shadow-2xl shadow-blue-950/50
          flex flex-col
        "
      >
        <div className="relative w-full shrink-0">
          <div className="aspect-[2.2/1] w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/50 to-transparent" />

          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/60 hover:text-white hover:bg-black/60 transition-all"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {project.techs.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-500/15 border border-blue-500/25 text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 min-h-0">
          <div className="px-6 py-5">
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="gradient-divider w-full mb-5" />

            <div className="space-y-1">
              <ReactMarkdown components={markdownComponents}>
                {details}
              </ReactMarkdown>
            </div>
          </div>
        </ScrollArea>

        {(project.github || project.demo) && (
          <div className="shrink-0 border-t border-white/[0.06] px-6 py-4 flex items-center justify-end gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white transition-all"
              >
                <Github size={15} />
                Source Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white"
              >
                <ExternalLink size={15} />
                Live Demo
                <ArrowUpRight size={13} className="opacity-60" />
              </a>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
