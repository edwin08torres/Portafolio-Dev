import { useState, useRef } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/Project";
import { ArrowRight, ExternalLink, Github, Apple, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ProjectGalleryModal from "./modal/ProjectGalleryModal";
import ProjectModal from "./modal/ProjectModal";
import { useLanguage } from "../../context/LanguageContext";

const projectAccents: Record<string, { labelKey: string }> = {
  "legal-track-usa": { labelKey: "mobileApp" },
  "silent-hill-tribute": { labelKey: "interactiveExperience" },
  "mopetco-grooming": { labelKey: "webApp" },
  "mopetco-booking": { labelKey: "bookingSystem" },
  "coffee-shop-landing": { labelKey: "landingPage" },
  "dulces-momentos": { labelKey: "posSystem" },
  "logic-tkl-915": { labelKey: "productPage" },
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
        className="relative bg-[#050505] text-white flex flex-col items-start px-6 pt-24 pb-8 lg:pl-24 lg:pr-12 border-b border-zinc-800/80 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#a3e635] uppercase">
              04 — {t("projects.subtitle")}
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-2">
              {t("projects.title")}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-lg mt-3 leading-relaxed">
              {t("projects.desc")}
            </p>
          </motion.header>
        </div>
      </section>

      {projects.map((project, i) => {
        const accentKey = projectAccents[project.slug]?.labelKey || "webApp";
        const isReversed = i % 2 !== 0;

        return (
          <ProjectRow
            key={project.slug}
            project={project}
            labelKey={accentKey}
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
        title={
          galleryProject?.slug
            ? t(`projects.items.${galleryProject.slug}.title`)
            : ""
        }
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
  labelKey: string;
  index: number;
  reversed: boolean;
  onViewGallery: () => void;
  onViewCaseStudy: () => void;
}

function ProjectRow({
  project,
  labelKey,
  index,
  reversed,
  onViewGallery,
  onViewCaseStudy,
}: RowProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { t, language } = useLanguage();

  const title = t(`projects.items.${project.slug}.title`);
  const description = t(`projects.items.${project.slug}.description`);

  const categoryLabels: Record<string, Record<string, string>> = {
    mobileApp: { en: "Mobile App", es: "Aplicación Móvil" },
    interactiveExperience: {
      en: "Interactive Experience",
      es: "Experiencia Interactiva",
    },
    webApp: { en: "Web App", es: "Aplicación Web" },
    bookingSystem: { en: "Booking System", es: "Sistema de Reservas" },
    landingPage: { en: "Landing Page", es: "Página de Aterrizaje" },
    posSystem: { en: "POS System", es: "Sistema POS" },
    productPage: { en: "Product Page", es: "Página de Producto" },
  };

  const currentLabel =
    categoryLabels[labelKey]?.[language] || categoryLabels[labelKey]?.["en"];

  return (
    <section className="relative bg-[#050505] border-b border-zinc-800/80 overflow-hidden">
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row ${
          reversed ? "lg:flex-row-reverse" : ""
        } items-center gap-12 lg:gap-16 px-6 lg:pl-24 lg:pr-12 py-20 lg:py-24`}
      >
        {/* Project preview image box */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:w-[45%] flex-shrink-0"
        >
          <div className="border border-zinc-800 bg-[#121212] p-2 rounded-[2px] hover:border-zinc-700 transition-colors">
            <img
              src={project.image}
              alt={`${title} preview`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[500px] object-cover object-top rounded-[2px]"
            />
          </div>
        </motion.div>

        {/* Project text details */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[55%] flex flex-col gap-5 items-start text-left"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#a3e635]">
              0{index + 1} —
            </span>
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 border border-zinc-700 bg-zinc-900 text-zinc-300 rounded-[2px]">
              {currentLabel}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-tight tracking-tight">
            {title}
          </h3>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify pr-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 my-1">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-[2px] font-mono text-xs font-medium border border-zinc-800 bg-[#080808] text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <button
              onClick={onViewCaseStudy}
              className="bg-[#a3e635] text-black font-bold border border-[#a3e635] px-5 py-3 rounded-[2px] text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-[#b5ff14] transition-all"
            >
              <Eye size={15} />
              {t("projects.viewCase")}
            </button>

            {project.gallery && project.gallery.length > 0 && (
              <button
                onClick={onViewGallery}
                className="border border-zinc-700 bg-transparent text-zinc-300 font-medium px-5 py-3 rounded-[2px] text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:border-[#a3e635] hover:text-[#a3e635] transition-all"
              >
                {t("projects.viewGallery")}
                <ArrowRight size={15} />
              </button>
            )}

            {project.playstore && (
              <a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-emerald-600/50 bg-emerald-950/20 text-emerald-400 font-medium px-5 py-3 rounded-[2px] text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-900/30 transition-all"
              >
                <svg
                  className="w-4 h-4 fill-current text-emerald-400"
                  viewBox="0 0 24 24"
                >
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
                className="border border-zinc-700 bg-zinc-900 text-zinc-200 font-medium px-5 py-3 rounded-[2px] text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:border-zinc-500 transition-all"
              >
                <Apple size={15} />
                App Store
              </a>
            )}

            {!project.playstore && !project.appstore && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 bg-zinc-900 text-zinc-200 font-medium px-5 py-3 rounded-[2px] text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:border-[#a3e635] hover:text-[#a3e635] transition-all"
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
                className="border border-zinc-800 bg-[#080808] text-zinc-400 font-medium px-5 py-3 rounded-[2px] text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:border-zinc-600 hover:text-white transition-all"
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
