import { useState, useRef } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/Project";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectModal from "./modal/ProjectModal";
import { Eye, Code2, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";

const accentColors = [
  {
    border: "rgba(220,38,38,0.5)",
    glow: "rgba(220,38,38,0.15)",
    text: "#f87171",
    label: "Interactive Experience",
  },
  {
    border: "rgba(59,130,246,0.5)",
    glow: "rgba(59,130,246,0.15)",
    text: "#60a5fa",
    label: "Web App",
  },
  {
    border: "rgba(251,191,36,0.5)",
    glow: "rgba(251,191,36,0.12)",
    text: "#fbbf24",
    label: "Landing Page",
  },
  {
    border: "rgba(139,92,246,0.5)",
    glow: "rgba(139,92,246,0.15)",
    text: "#a78bfa",
    label: "Web App",
  },
  {
    border: "rgba(236,72,153,0.5)",
    glow: "rgba(236,72,153,0.12)",
    text: "#f472b6",
    label: "Mobile App",
  },
  {
    border: "rgba(20,184,166,0.5)",
    glow: "rgba(20,184,166,0.12)",
    text: "#2dd4bf",
    label: "Web App",
  },
];

export const ProjectSection = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      <section
        id="project"
        ref={ref}
        className="relative bg-[#020617] text-white flex flex-col items-center px-4 pt-24 pb-8 overflow-hidden"
      >
        <div className="pointer-events-none absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 bottom-1/4 h-[350px] w-[350px] rounded-full bg-violet-600/5 blur-[100px]" />

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl space-y-4"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Code2 size={16} className="text-blue-400" />
            <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">
              My work
            </span>
            <Code2 size={16} className="text-blue-400" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            A selection of web work for businesses and personal projects,
            focused on UX and performance.
          </p>
        </motion.header>
      </section>

      <section className="bg-[#020617] text-white flex justify-center px-4 pb-24">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full max-w-6xl">
          {projects.map((project, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <CardContainer className="relative group inter-var cursor-pointer md:h-[30rem]">
                  <button
                    onClick={() => {
                      setSelected(project);
                      setOpen(true);
                    }}
                    aria-label={`Open details for ${project.title}`}
                    className="absolute m-auto -bottom-4 z-10 rounded-xl p-2.5 text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0"
                  >
                    <Eye size={16} />
                  </button>

                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 0 0 1px ${accent.border}, 0 8px 32px ${accent.glow}`,
                    }}
                  />

                  <CardBody className="p-5 w-full h-full flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 group-hover:border-transparent">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                        style={{
                          color: accent.text,
                          borderColor: accent.border,
                          background: accent.glow,
                        }}
                      >
                        {accent.label}
                      </span>
                    </div>

                    <CardItem translateZ="80" rotateX={5} rotateZ={-3}>
                      <div className="aspect-video w-full overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </CardItem>

                    <CardItem
                      translateZ="40"
                      className="mt-4 text-lg font-bold text-white"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="30"
                      className="text-sm text-slate-400 mt-2 line-clamp-3 leading-relaxed"
                    >
                      {project.description}
                    </CardItem>

                    {project.note && (
                      <CardItem
                        as="p"
                        translateZ="20"
                        className="text-xs text-blue-400/80 mt-2 font-medium"
                      >
                        {project.note}
                      </CardItem>
                    )}

                    <CardItem
                      translateZ="20"
                      className="flex flex-wrap gap-1.5 mt-4"
                    >
                      {project.techs.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </CardItem>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                      {project.github && (
                        <CardItem
                          as="a"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          translateZ={10}
                          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                        >
                          <Code2 size={13} />
                          Source Code
                        </CardItem>
                      )}
                      {project.demo && (
                        <CardItem
                          as="a"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          translateZ={10}
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg transition-all"
                          style={{
                            color: accent.text,
                            background: accent.glow,
                            border: `1px solid ${accent.border}`,
                          }}
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </CardItem>
                      )}
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ProjectModal open={open} onOpenChange={setOpen} project={selected} />
    </>
  );
};
