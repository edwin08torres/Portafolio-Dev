import { useState } from "react";
import { projects } from "@/data/projects";
import {
  featuredCards,
  moreProjects,
  type CardAction,
  type FeaturedCard,
} from "@/data/featuredProjects";
import type { Project } from "@/types/Project";
import { Apple, ExternalLink, Eye, Images } from "lucide-react";
import ProjectGalleryModal from "./modal/ProjectGalleryModal";
import ProjectModal from "./modal/ProjectModal";
import { useLanguage } from "../../context/LanguageContext";
import { MaskReveal, PopBlock, Reveal } from "@/components/common/motion";

const findProject = (slug: string) => projects.find((p) => p.slug === slug);

const PlayIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.397-1.127V2.941c0-.422.13-.807.397-1.127zM14.78 12.99l2.766 2.766-3.754 2.164-3.805-3.806 4.793-4.124zm5.823-1.42l-2.023-1.164-3.007 2.594 3.007 2.594 2.023-1.164a2 2 0 0 0 0-2.86zM13.792 12L3.61 1.814C3.882 1.488 4.302 1.28 4.78 1.28c.36 0 .703.096 1.008.27l12.775 7.35-4.771 3.1zm0 0L8.793 16.9l4.999-4.9zm0 0" />
  </svg>
);

export const FeaturedProjectsSection = () => {
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [detailsProject, setDetailsProject] = useState<Project | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
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
        id="proyectos"
        className="mx-auto flex max-w-[1280px] scroll-mt-24 flex-col gap-12 px-6 pb-24 pt-16"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="pop-tag self-start bg-bubble">{t("projects.tag")}</span>
            <h2 className="pop-display text-[clamp(40px,7vw,108px)]">
              <MaskReveal>
                {t("projects.titleBefore")}
                <PopBlock rotate={2} className="rounded-[20px] border-4 border-ink bg-sun px-4 pb-1.5">
                  {t("projects.titleHighlight")}
                </PopBlock>
              </MaskReveal>
            </h2>
          </div>
          <p className="max-w-[360px] text-lg leading-normal">{t("projects.intro")}</p>
        </div>

        <div className="grid grid-cols-1 gap-x-9 gap-y-10 lg:grid-cols-2">
          {featuredCards.map((card, i) => {
            const project = findProject(card.slug);
            if (!project) return null;
            return (
              <ProjectCard
                key={card.slug}
                card={card}
                project={project}
                index={i}
                onCase={() => openDetails(project)}
                onGallery={() => openGallery(project)}
              />
            );
          })}
        </div>

        <div className="mt-6 flex flex-col border-b-[3px] border-ink">
          <span className="pb-3.5 font-mono text-sm font-bold">{t("projects.more")}</span>
          {moreProjects.map((row) => {
            if (row.kind === "case") {
              const project = findProject(row.slug);
              if (!project) return null;
              return (
                <button
                  key={row.slug}
                  type="button"
                  onClick={() => openDetails(project)}
                  className="pop-row w-full text-left"
                >
                  <RowTitle>{t(`projects.items.${row.slug}.title`)}</RowTitle>
                  <span className="pop-tag shrink-0">{t(`projects.rows.${row.slug}.type`)}</span>
                </button>
              );
            }
            return (
              <a
                key={row.id}
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pop-row no-underline"
              >
                <RowTitle>
                  {t(`projects.rows.${row.id}.title`)}
                  <span className="sr-only"> {t("projects.newTab")}</span>
                </RowTitle>
                <span className="pop-tag shrink-0">{t(`projects.rows.${row.id}.type`)}</span>
              </a>
            );
          })}
        </div>
      </section>

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
        onNavigate={setDetailsProject}
      />
    </>
  );
};

function RowTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="pop-display min-w-0 text-[clamp(22px,2.6vw,34px)] font-extrabold [overflow-wrap:anywhere]">
      {children}
    </span>
  );
}

interface CardProps {
  card: FeaturedCard;
  project: Project;
  index: number;
  onCase: () => void;
  onGallery: () => void;
}

function ProjectCard({ card, project, index, onCase, onGallery }: CardProps) {
  const { t } = useLanguage();
  const title = card.name;

  const renderAction = (action: CardAction) => {
    switch (action) {
      case "case":
        return (
          <button key={action} type="button" onClick={onCase} className={`pop-btn ${card.caseButton}`}>
            <Eye size={16} aria-hidden="true" />
            {t("projects.viewCase")}
          </button>
        );
      case "gallery":
        if (!project.gallery || project.gallery.length === 0) return null;
        return (
          <button key={action} type="button" onClick={onGallery} className="pop-btn">
            <Images size={16} aria-hidden="true" />
            {t("projects.viewGallery")}
          </button>
        );
      case "playstore":
        if (!project.playstore) return null;
        return (
          <a
            key={action}
            href={project.playstore}
            target="_blank"
            rel="noopener noreferrer"
            className="pop-btn"
          >
            <PlayIcon />
            Google Play
          </a>
        );
      case "appstore":
        if (!project.appstore) return null;
        return (
          <a
            key={action}
            href={project.appstore}
            target="_blank"
            rel="noopener noreferrer"
            className="pop-btn"
          >
            <Apple size={16} aria-hidden="true" />
            App Store
          </a>
        );
      case "demo":
        // Igual que antes: la demo solo se muestra si el proyecto no está en las tiendas
        if (!project.demo || project.playstore || project.appstore) return null;
        return (
          <a
            key={action}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="pop-btn"
          >
            <ExternalLink size={16} aria-hidden="true" />
            {t("projects.liveDemo")}
          </a>
        );
    }
  };

  return (
    <Reveal delay={(index % 2) * 0.12} bouncy className={`flex ${card.offset ? "lg:mt-12" : ""}`}>
    <article
      className={`pop-card flex flex-1 flex-col gap-[22px] rounded-[28px] border-[3px] border-ink p-6 shadow-pop-lg sm:p-8 ${card.surface} ${card.tilt}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="pop-tag">{t(`projects.cards.${project.slug}.type`)}</span>
        <span
          aria-hidden="true"
          className={`pop-display pop-outline-2 text-[44px] ${card.numberColor}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="pop-shot h-[220px] overflow-hidden rounded-[20px] border-[3px] border-ink bg-cream sm:h-[280px]">
        <img
          src={project.image}
          alt={`${title} preview`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="pop-display text-[28px] [overflow-wrap:anywhere] sm:text-[38px]">{title}</h3>
        <p className="text-lg leading-normal">{t(`projects.cards.${project.slug}.description`)}</p>
      </div>

      <ul className="flex flex-wrap gap-2" aria-label="Stack">
        {card.stack.map((tech) => (
          <li key={tech} className="pop-tag">
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3">{card.actions.map(renderAction)}</div>
    </article>
    </Reveal>
  );
}
