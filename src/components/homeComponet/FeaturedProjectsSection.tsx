import { useState, useRef } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/Project";
import { Code2, ArrowRight, ExternalLink, Github, Apple, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ProjectGalleryModal from "./modal/ProjectGalleryModal";
import ProjectModal from "./modal/ProjectModal";
import { useLanguage } from "../../context/LanguageContext";

const projectAccents: Record<
  string,
  {
    gradient: string;
    text: string;
    glow: string;
    border: string;
    labelKey: string;
  }
> = {
  "legal-track-usa": {
    gradient: "from-cyan-400 to-blue-600",
    text: "#38bdf8",
    glow: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.25)",
    labelKey: "mobileApp",
  },
  "silent-hill-tribute": {
    gradient: "from-red-500 to-orange-500",
    text: "#f87171",
    glow: "rgba(220,38,38,0.08)",
    border: "rgba(220,38,38,0.25)",
    labelKey: "interactiveExperience",
  },
  "mopetco-grooming": {
    gradient: "from-blue-500 to-violet-500",
    text: "#60a5fa",
    glow: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.25)",
    labelKey: "webApp",
  },
  "mopetco-booking": {
    gradient: "from-cyan-400 to-blue-500",
    text: "#22d3ee",
    glow: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.25)",
    labelKey: "bookingSystem",
  },
  "coffee-shop-landing": {
    gradient: "from-amber-400 to-pink-500",
    text: "#fbbf24",
    glow: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.25)",
    labelKey: "landingPage",
  },
  "dulces-momentos": {
    gradient: "from-pink-500 to-rose-500",
    text: "#f472b6",
    glow: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.25)",
    labelKey: "posSystem",
  },
  "logic-tkl-915": {
    gradient: "from-violet-500 to-purple-500",
    text: "#a78bfa",
    glow: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.25)",
    labelKey: "productPage",
  },
};

export const FeaturedProjectsSection = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [detailsProject, setDetailsProject] = useState<Project | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  const openGallery = (project: Project) => {
    setGalleryProject(project);
    setGalleryOpen(true);
  };

  const openDetails = (project: Project) => {
    setDetailsProject(project);
    setDetailsOpen(true);
  };

  return (
    <>
      <section
        id="project"
        ref={headerRef}
        className="relative bg-[#0B0F19] text-white flex flex-col items-center px-4 pt-28 pb-4 overflow-hidden"
      >
        <div className="pointer-events-none absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-1/4 h-[350px] w-[350px] rounded-full bg-violet-600/5 blur-[120px]" />

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl space-y-4"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Code2 size={16} className="text-blue-400" />
            <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">
              {t("projects.subtitle")}
            </span>
            <Code2 size={16} className="text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            {t("projects.desc")}
          </p>
        </motion.header>
      </section>

      {projects.map((project, i) => {
        const accent = projectAccents[project.slug] || projectAccents["silent-hill-tribute"];
        const isReversed = i % 2 !== 0;

        return (
          <ProjectRow
            key={project.slug}
            project={project}
            accent={accent}
            index={i}
            reversed={isReversed}
            onViewGallery={() => openGallery(project)}
            onViewCaseStudy={() => openDetails(project)}
          />
        );
      })}

      <ProjectGalleryModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={galleryProject?.gallery ?? []}
        title={galleryProject?.slug ? t(`projects.items.${galleryProject.slug}.title`) : ""}
      />

      <ProjectModal
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        project={detailsProject}
      />
    </>
  );
};

interface RowProps {
  project: Project;
  accent: typeof projectAccents[string];
  index: number;
  reversed: boolean;
  onViewGallery: () => void;
  onViewCaseStudy: () => void;
}

function ProjectRow({
  project,
  accent,
  index,
  reversed,
  onViewGallery,
  onViewCaseStudy,
}: RowProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { t, language } = useLanguage();

  // Dynamically resolve translation details
  const title = t(`projects.items.${project.slug}.title`);
  const description = t(`projects.items.${project.slug}.description`);
  
  // Resolve category label
  // Fallback map for categories in case we want specific Spanish terms
  const categoryLabels: Record<string, Record<string, string>> = {
    mobileApp: { en: "Mobile App", es: "Aplicación Móvil" },
    interactiveExperience: { en: "Interactive Experience", es: "Experiencia Interactiva" },
    webApp: { en: "Web App", es: "Aplicación Web" },
    bookingSystem: { en: "Booking System", es: "Sistema de Reservas" },
    landingPage: { en: "Landing Page", es: "Página de Aterrizaje" },
    posSystem: { en: "POS System", es: "Sistema POS" },
    productPage: { en: "Product Page", es: "Página de Producto" },
  };

  const currentLabel = categoryLabels[accent.labelKey]?.[language] || categoryLabels[accent.labelKey]?.["en"];

  return (
    <section className="relative bg-[#0B0F19] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${
            reversed ? "30%" : "70%"
          } 50%, ${accent.glow}, transparent 70%)`,
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row ${
          reversed ? "lg:flex-row-reverse" : ""
        } items-center gap-12 lg:gap-20 px-6 lg:px-12 py-24 lg:py-32`}
      >
        <motion.div
          initial={{ opacity: 0, x: reversed ? 60 : -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full lg:w-[45%] max-w-[450px] mx-auto lg:mx-0 flex-shrink-0"
        >
          <div className="animate-float">
            <div
              className="rounded-2xl overflow-hidden border border-white/[0.06] max-h-[520px] flex items-center justify-center"
              style={{
                boxShadow: `0 25px 60px -12px rgba(0,0,0,0.5), 0 0 40px ${accent.glow}`,
              }}
            >
              <img
                src={project.image}
                alt={`${title} preview`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[520px] object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reversed ? -60 : 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full lg:w-[55%] flex flex-col gap-6"
        >
          <span
            className="self-start text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border"
            style={{
              color: accent.text,
              borderColor: accent.border,
              background: accent.glow,
            }}
          >
            {currentLabel}
          </span>

          <span className="text-xs text-slate-600 font-mono tracking-widest">
            {"0" + (index + 1)}
          </span>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            {title}
          </h3>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md text-justify pr-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border border-white/[0.08] bg-white/[0.03] text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <button
              onClick={onViewCaseStudy}
              className="group flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 text-white"
              style={{
                background: `linear-gradient(135deg, ${accent.border}, ${accent.glow})`,
                border: `1px solid ${accent.border}`,
                boxShadow: `0 4px 15px ${accent.glow}`,
              }}
            >
              <Eye size={15} />
              {t("projects.viewCase")}
            </button>

            {project.gallery && project.gallery.length > 0 && (
              <button
                onClick={onViewGallery}
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.12] bg-transparent text-white/80 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.2] hover:text-white"
              >
                {t("projects.viewGallery")}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            )}

            {project.playstore && (
              <a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 text-white hover:opacity-90 bg-emerald-600/10 hover:bg-emerald-600/25 border border-emerald-600/30"
              >
                <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.397-1.127V2.941c0-.422.13-.807.397-1.127zM14.78 12.99l2.766 2.766-3.754 2.164-3.805-3.806 4.793-4.124zm5.823-1.42l-2.023-1.164-3.007 2.594 3.007 2.594 2.023-1.164a2 2 0 0 0 0-2.86zM13.792 12L3.61 1.814C3.882 1.488 4.302 1.28 4.78 1.28c.36 0 .703.096 1.008.27l12.775 7.35-4.771 3.1zm0 0L8.793 16.9l4.999-4.9zm0 0" />
                </svg>
                Google Play
              </a>
            )}

            {project.appstore && (
              <a
                href={project.appstore}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 text-white hover:opacity-90 bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <Apple size={15} className="-mt-0.5" />
                App Store
              </a>
            )}

            {!project.playstore && !project.appstore && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 text-white hover:opacity-90 bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <ExternalLink size={15} />
                {t("projects.liveDemo")}
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 rounded-full border border-white/[0.1] bg-white/[0.03] text-slate-400 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/[0.07] hover:text-white hover:border-white/[0.18]"
              >
                <Github size={15} />
                {t("projects.sourceCode")}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
