import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import type { Project, Tech } from "@/types/Project";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ProjectModal } from "./modal/ProjectModal";

const allCategories: readonly Tech[] = Array.from(
  new Set(projects.flatMap((p) => p.techs))
) as Tech[];

const categories = ["All", ...allCategories] as const;

export const ProjectSection = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.techs.includes(filter as Tech)),
    [filter]
  );

  return (
    <>
      <section
        id="project"
        className="bg-slate-950 text-white flex flex-col items-center px-4 py-16 gap-12"
      >
        <header className="text-center max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-down">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-lg text-justify" data-aos="fade-up">
            Throughout my career, I’ve developed modern web solutions for both
            businesses and personal projects. Here are some works that showcase
            my technical skills and focus on user experience.
          </p>
        </header>

        <div
          className="flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 rounded-full transition ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white flex justify-center px-4 pb-24">
        <div
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full max-w-6xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {filtered.map((project) => (
            <CardContainer
              key={project.slug}
              className="relative group inter-var cursor-pointer md:h-[30rem]"
            >
              <button
                onClick={() => {
                  setSelected(project);
                  setOpen(true);
                }}
                aria-label={`Ver detalles de ${project.title}`}
                className={`absolute m-auto -bottom-4 z-10 rounded-full
                p-2 text-white bg-blue-600 hover:bg-blue-500 transition
                opacity-100 md:opacity-0 md:translate-y-2
                md:group-hover:opacity-100 md:group-hover:translate-y-0
            `}
              >
                <i className="fa-solid fa-eye text-sm" />
              </button>
              <CardBody className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full h-full flex flex-col justify-between transition-transform hover:-translate-y-2 hover:shadow-2xl">
                <CardItem translateZ="80" rotateX={5} rotateZ={-3}>
                  <div className="aspect-video w-full overflow-hidden rounded-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CardItem>

                <CardItem translateZ="40" className="mt-4 text-xl font-bold">
                  {project.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="30"
                  className="text-sm text-neutral-400 mt-2 flex-grow"
                >
                  {project.description}
                </CardItem>

                {!!project.note && (
                  <CardItem
                    as="p"
                    translateZ="20"
                    className="text-xs text-blue-300 mt-2"
                  >
                    {project.note}
                  </CardItem>
                )}

                <CardItem translateZ="20" className="flex flex-wrap gap-2 mt-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-[#aab2d1] text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </CardItem>

                <div className="flex justify-between mt-6">
                  {project.github && (
                    <CardItem
                      as="a"
                      href={project.github}
                      target="_blank"
                      translateZ={10}
                      className="text-xs underline text-[#aab2d1] hover:text-[#3658f1]"
                    >
                      GitHub →
                    </CardItem>
                  )}
                  {project.demo && (
                    <CardItem
                      as="a"
                      href={project.demo}
                      target="_blank"
                      translateZ={10}
                      className="text-xs px-3 py-1 bg-[#aab2d1] text-black rounded hover:bg-[#3658f1]"
                    >
                      Ver Demo
                    </CardItem>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
      <ProjectModal open={open} onOpenChange={setOpen} project={selected} />
    </>
  );
};
