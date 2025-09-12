// src/components/homeComponent/modal/ProjectModal.tsx
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types/Project";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  project: Project | null;
}

export default function ProjectModal({ open, onOpenChange, project }: Props) {
  if (!project) return null;

  const hasImpact =
    Array.isArray((project as any)?.impact) &&
    (project as any).impact.length > 0;

  const markdownComponents: Components = {
    a: (props) => (
      <a
        className="break-all underline decoration-slate-500 hover:decoration-slate-300"
        {...props}
      />
    ),
    code: (props) => {
      const { inline, ...rest } = props as any;
      return inline ? (
        <code
          className="break-all whitespace-pre-wrap px-1 py-0.5 rounded bg-slate-900/60"
          {...rest}
        />
      ) : (
        <pre className="max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-lg bg-slate-900/70 p-4">
          <code {...rest} />
        </pre>
      );
    },
    img: (props) => <img className="max-w-full rounded-lg" {...props} />,
    table: (props) => (
      <div className="w-full overflow-x-auto">
        <table className="w-full" {...props} />
      </div>
    ),
    p: (props) => (
      <p className="text-[clamp(0.95rem,1.1vw,1rem)] last:mb-0" {...props} />
    ),
    li: (props) => (
      <li className="text-[clamp(0.95rem,1.1vw,1rem)]" {...props} />
    ),
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[94vw] md:max-w-[980px]
          h-[88vh] p-0 overflow-hidden
          rounded-2xl border border-slate-800
          bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-slate-950/75
          grid grid-rows-[auto,1fr,auto] min-h-0
        "
      >
        <header className="relative w-full aspect-[21/9] max-h-[28vh] min-h-[160px]">
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            {/* <div className="min-w-0">
              <DialogHeader className="p-0">
                <DialogTitle className="text-white font-semibold leading-tight text-[clamp(1.25rem,2.2vw,2rem)] text-balance">
                  {project.title}
                </DialogTitle>
              </DialogHeader>
              {(project as any)?.subtitle && (
                <p className="text-slate-300/90 mt-1 truncate">
                  {(project as any).subtitle}
                </p>
              )}
            </div> */}

            {project.techs?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <ScrollArea className="min-h-0 overflow-x-hidden">
          <div className="pt-6 pb-2 text-slate-200 w-full max-w-full" lang="es">
            <section
              className={`min-w-0 ${
                hasImpact
                  ? "grid gap-8 items-start md:grid-cols-[minmax(0,1fr)_280px]"
                  : ""
              }`}
            >
              <article className="min-w-0">
                <div
                  className="
                    prose prose-invert md:prose-base
                    lg:max-w-[140ch] leading-relaxed break-words
                    prose-headings:tracking-tight
                    prose-h3:mt-6 prose-h3:mb-2
                    prose-p:my-2 prose-ul:my-2 prose-ol:my-2
                    prose-li:my-0 prose-li:marker:text-slate-400
                    text-sm
                  "
                >
                  <ReactMarkdown components={markdownComponents}>
                    {project.details}
                  </ReactMarkdown>
                </div>
              </article>

              {/* KPIs / Impacto */}
              {hasImpact && (
                <aside className="min-w-0">
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                    {(project as any).impact.map(
                      (k: { label: string; value: string }) => (
                        <div
                          key={k.label}
                          className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
                        >
                          <div className="text-sm text-slate-400">
                            {k.label}
                          </div>
                          <div className="text-2xl font-semibold">
                            {k.value}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </aside>
              )}
            </section>

            {project.techs?.length ? (
              <>
                <Separator className="my-6 bg-slate-800" />
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {project.techs.map((t) => (
                    <span
                      key={`footer-${t}`}
                      className="rounded-md bg-white/10 px-2 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </ScrollArea>

        <div className="border-t border-slate-800 bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
          <div className="flex items-center justify-between gap-3 px-6 py-4 flex-col">
            <span className="text-xs text-slate-400">
              ¿Quieres ver el proyecto?
            </span>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm hover:bg-slate-800 text-white"
                  aria-label="Abrir código en GitHub"
                >
                  <Github className="h-4 w-4" />
                  Código
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
                  aria-label="Abrir demo en vivo"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo en vivo
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
