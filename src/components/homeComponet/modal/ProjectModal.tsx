import { useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Apple,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import type { Project } from "@/types/Project";
import { projects as allProjects } from "@/data/projects";
import {
  caseOrder,
  caseTheme,
  defaultCaseTheme,
  featuredCards,
} from "@/data/featuredProjects";
import { parseCase } from "@/lib/caseStudy";
import { useLanguage } from "../../../context/LanguageContext";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  project: Project | null;
  /** Cambia el proyecto mostrado (Anterior / Siguiente) */
  onNavigate?: (project: Project) => void;
}

const inlineComponents: Components = {
  p: ({ children }) => <>{children}</>,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  code: ({ children }) => (
    <code className="rounded-lg border-2 border-ink bg-cream px-1.5 py-px font-mono text-[13px] text-ink [overflow-wrap:anywhere]">
      {children}
    </code>
  ),
};

const blockComponents: Components = {
  ...inlineComponents,
  p: ({ children }) => <p className="text-[17px] leading-[1.6]">{children}</p>,
};

const numberColors = ["bg-cobalt text-white", "bg-bubble", "bg-sun", "bg-mint"];

const HIDE_SOURCE_CODE_SLUGS = new Set([
  "trackdeli-pos",
  "trackdeli-web",
  "trackdeli-app",
]);

const PlayIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[18px] w-[18px] fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M5 3l14 9-14 9z" />
  </svg>
);

export default function ProjectModal({
  open,
  onOpenChange,
  project,
  onNavigate,
}: Props) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("resumen");

  const slug = project?.slug;
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    setActiveTab("resumen");
  }, [slug]);

  const content = project ? renderBody() : null;

  function renderBody() {
    if (!project) return null;
    const title = t(`projects.items.${project.slug}.title`);
    const description = t(`projects.items.${project.slug}.description`);
    const parsed = parseCase(t(`projects.items.${project.slug}.details`));
    const theme = caseTheme[project.slug] ?? defaultCaseTheme;
    const index = Math.max(0, caseOrder.indexOf(project.slug));
    const total = caseOrder.length;
    const pad = (n: number) => String(n).padStart(2, "0");
    const bySlug = (s: string) => allProjects.find((p) => p.slug === s);
    const prevProject = bySlug(caseOrder[(index - 1 + total) % total]);
    const nextProject = bySlug(caseOrder[(index + 1) % total]);
    const displayName = (p?: Project) => {
      if (!p) return "";
      return (
        featuredCards.find((c) => c.slug === p.slug)?.name ??
        t(`projects.items.${p.slug}.title`)
      );
    };

    let type = t(`projects.cards.${project.slug}.type`);
    if (typeof type !== "string" || type.startsWith("projects."))
      type = t(`projects.rows.${project.slug}.type`);

    const images = Array.from(
      new Set([project.image, ...(project.gallery ?? [])]),
    ).slice(0, 2);
    const hasStores = Boolean(project.playstore || project.appstore);

    const tabs = [
      { id: "resumen", label: t("projects.modal.tabs.overview") },
      parsed.challenge
        ? { id: "desafio", label: t("projects.modal.tabs.challenge") }
        : null,
      parsed.solution.length || parsed.solutionIntro.length
        ? { id: "solucion", label: t("projects.modal.tabs.solution") }
        : null,
      parsed.impact
        ? { id: "impacto", label: t("projects.modal.tabs.impact") }
        : null,
    ].filter(Boolean) as { id: string; label: string }[];

    const goTo = (id: string) => {
      setActiveTab(id);
      scrollRef.current
        ?.querySelector(`#${id}`)
        ?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
    };

    const storeBtn = "pop-btn min-h-[52px] justify-center";

    return (
      <>
        <div className="sticky top-3 z-20 h-0 lg:hidden">
          <DialogPrimitive.Close
            aria-label={t("projects.modal.close")}
            className="absolute right-3 top-0 flex h-[52px] w-[52px] items-center justify-center rounded-full border-[3px] border-ink bg-tomato shadow-pop-sm"
          >
            <X size={22} strokeWidth={3} aria-hidden="true" />
          </DialogPrimitive.Close>
        </div>

        {/* Izquierda */}
        <div
          className={`relative flex shrink-0 flex-col gap-[22px] overflow-hidden border-b-[3px] border-ink p-6 sm:p-9 lg:min-h-0 lg:shrink lg:border-b-0 lg:border-r-[3px] ${theme.surface}`}
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-[90px] -right-[90px] h-[280px] w-[280px] rounded-full border-[3px] border-dashed border-current opacity-60"
          />
          <div className="relative flex flex-wrap items-center justify-between gap-2 pr-16 lg:pr-0">
            <span className={`pop-tag ${theme.light ? "bg-white" : "bg-sun"}`}>
              {t("projects.modal.caseTag")} · {pad(index + 1)}
            </span>
            <span className="pop-tag">{type}</span>
          </div>

          <DialogPrimitive.Title
            id="caso-titulo"
            className="pop-display relative text-[clamp(30px,4vw,52px)] [overflow-wrap:anywhere]"
          >
            {title}
          </DialogPrimitive.Title>

          <ul className="relative flex flex-wrap gap-2" aria-label="Stack">
            {project.techs.map((tech) => (
              <li key={tech} className="pop-tag">
                {tech}
              </li>
            ))}
          </ul>

          <div className="relative flex min-h-[200px] flex-1 items-end justify-center gap-4 lg:min-h-0">
            {images.map((src, i) => (
              <div
                key={src}
                className={`h-[220px] sm:h-[260px] lg:h-full max-h-[300px] min-h-[180px] w-full max-w-[200px] sm:max-w-[230px] overflow-hidden rounded-[22px] border-[3px] border-ink bg-white shadow-pop ${
                  i === 0 ? "-rotate-[5deg]" : "rotate-[4deg]"
                } ${images.length === 1 ? "max-w-[320px]" : ""}`}
              >
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </div>

          <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.playstore && (
              <a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className={`${storeBtn} bg-sun`}
              >
                <PlayIcon />
                Google Play
              </a>
            )}
            {project.appstore && (
              <a
                href={project.appstore}
                target="_blank"
                rel="noopener noreferrer"
                className={storeBtn}
              >
                <Apple size={18} aria-hidden="true" />
                App Store
              </a>
            )}
            {!hasStores && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${storeBtn} bg-sun`}
              >
                <ExternalLink size={18} aria-hidden="true" />
                {t("projects.liveDemo")}
              </a>
            )}
            {!HIDE_SOURCE_CODE_SLUGS.has(project.slug) && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={storeBtn}
              >
                <Github size={18} aria-hidden="true" />
                {t("projects.sourceCode")}
              </a>
            )}
          </div>
        </div>

        {/* Derecha */}
        <div className="flex min-h-0 flex-col bg-cream text-ink">
          <div className="flex items-center justify-between gap-4 border-b-[3px] border-ink px-6 py-5 sm:px-8 lg:py-6">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => goTo(tab.id)}
                  className={`pop-tag min-h-[44px] px-4 ${activeTab === tab.id ? "bg-ink text-cream" : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <DialogPrimitive.Close
              aria-label={t("projects.modal.close")}
              className="hidden h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-tomato shadow-pop-sm lg:flex"
            >
              <X size={22} strokeWidth={3} aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-[30px] px-6 pb-10 pt-8 sm:px-9 lg:min-h-0 lg:overflow-y-auto"
          >
            <section id="resumen" className="scroll-mt-4">
              <DialogPrimitive.Description className="text-[22px] font-medium leading-[1.5]">
                {description}
              </DialogPrimitive.Description>
            </section>

            {parsed.challenge && (
              <section
                id="desafio"
                className="flex -rotate-[0.6deg] scroll-mt-4 flex-col gap-3.5 rounded-3xl border-[3px] border-ink bg-sun p-6 shadow-pop"
              >
                <h3 className="pop-display text-[26px]">
                  {t("projects.modal.headings.challenge")}
                </h3>
                <ReactMarkdown components={blockComponents}>
                  {parsed.challenge}
                </ReactMarkdown>
              </section>
            )}

            {(parsed.solution.length > 0 ||
              parsed.solutionIntro.length > 0) && (
              <section
                id="solucion"
                className="flex scroll-mt-4 flex-col gap-3.5"
              >
                <h3 className="pop-display text-[26px]">
                  {t("projects.modal.headings.solution")}
                </h3>
                {parsed.solutionIntro.map((line) => (
                  <ReactMarkdown key={line} components={blockComponents}>
                    {line}
                  </ReactMarkdown>
                ))}
                {parsed.solution.map((item, i) => (
                  <motion.div
                    key={`${project.slug}-${i}`}
                    className="flex items-start gap-3.5 rounded-[18px] border-[3px] border-ink bg-white px-[18px] py-4 shadow-pop-sm"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                  >
                    <span
                      className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-2 border-ink font-display text-[13px] font-black ${numberColors[i % numberColors.length]}`}
                    >
                      {i + 1}
                    </span>
                    <div className="flex min-w-0 flex-col gap-1">
                      {item.title && (
                        <strong className="text-[17px]">{item.title}</strong>
                      )}
                      <span className="text-base leading-[1.5] [overflow-wrap:anywhere]">
                        <ReactMarkdown components={inlineComponents}>
                          {item.text}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </section>
            )}

            {parsed.impact && (
              <section
                id="impacto"
                className="flex scroll-mt-4 flex-col gap-3.5 rounded-3xl border-[3px] border-ink bg-mint p-6 shadow-pop"
              >
                <h3 className="pop-display text-[26px]">
                  {t("projects.modal.headings.impact")}
                </h3>
                <ReactMarkdown components={blockComponents}>
                  {parsed.impact}
                </ReactMarkdown>
              </section>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="button"
                onClick={() => prevProject && onNavigate?.(prevProject)}
                className="pop-btn min-h-[52px]"
              >
                <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" />
                {t("projects.modal.prev")}
              </button>
              <span className="font-mono text-sm font-bold" aria-live="polite">
                {pad(index + 1)} / {pad(total)}
              </span>
              <button
                type="button"
                onClick={() => nextProject && onNavigate?.(nextProject)}
                className="pop-btn pop-btn-dark min-h-[52px]"
              >
                {t("projects.modal.next")}:{" "}
                {displayName(nextProject ?? undefined)}
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  const enter = reduce
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 24, scale: 0.96 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring" as const, stiffness: 300, damping: 24 },
        },
        exit: {
          opacity: 0,
          y: 16,
          scale: 0.97,
          transition: { duration: 0.15 },
        },
      };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && project && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[80] bg-ink/[0.72]"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: reduce ? 0 : 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: reduce ? 0 : 0.15 },
                }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content
              asChild
              forceMount
              aria-labelledby="caso-titulo"
              onOpenAutoFocus={(e) => {
                // Foco al contenedor del diálogo (no al primer botón) para no abrir con un enfoque ruidoso
                e.preventDefault();
                (e.currentTarget as HTMLElement).focus();
              }}
            >
              <motion.div
                tabIndex={-1}
                className="fixed inset-x-3 inset-y-3 z-[90] flex flex-col overflow-y-auto rounded-[28px] border-[3px] border-ink bg-cream shadow-pop-xl outline-none sm:rounded-[36px] lg:inset-x-20 lg:inset-y-12 lg:grid lg:grid-cols-[500px_1fr] lg:overflow-hidden"
                {...enter}
              >
                {content}
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
