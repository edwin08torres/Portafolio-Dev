"use client";

import { useState } from "react";
// import Marquee from "react-fast-marquee";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// Categorías para filtro
const categories = ["Todos", "React", "CSS", ".NET", "Javascript", "Angular"];

const projects = [
  {
    title: "MoPetCo Gromming",
    description:
      "Pagina que muestrea los servicios grooming, y reserva de citas",
    techs: ["React", "TailwindCSS", "typescript", "SQL", ".NET"],
    image: "/assets/project-1.png",
    github: "https://github.com/DETDevs/MoPetCo.App",
    demo: "https://mopetco.com/",
    note: "",
  },
  {
    title: "Coffee Shop Landing",
    description: "Landing page elegante para una marca de café premium.",
    techs: ["Html", "CSS", "Javascript"],
    image: "/assets/project-2.png",
    github: "https://github.com/edwin08torres/cafeCub/tree/main",
    demo: "https://shimmering-lebkuchen-346495.netlify.app/",
    note: "",
  },
  // {
  //   title: "DBZ Power Ranking",
  //   description: "App divertida para listar y comparar personajes de DBZ.",
  //   techs: ["Angular", "CSS", "Javascript"],
  //   image: "/assets/project-3.png",
  //   github: "https://github.com/edwin08torres/angular-personaje",
  //   demo: "https://candid-conkies-68a5a1.netlify.app/",
  //   note: "",
  // },
  // {
  //   title: "Finanzas App",
  //   description: "Panel financiero para registrar gastos e ingresos.",
  //   techs: ["React", "CSS", "JWT", "Javascript"],
  //   image: "/assets/project-4-1.png",
  //   github: "https://github.com/edwin08torres/inventario-app",
  //   demo: "https://glowing-cactus-6eb93d.netlify.app/login",
  //   note: "Para ingresar, user: admin, pass:123",
  // },
  // {
  //   title: "Markdown Blog CMS",
  //   description: "Plantilla para Blogs",
  //   techs: ["Html", "CSS"],
  //   image: "/assets/project-5.png",
  //   github: "https://github.com/edwin08torres/fourCard.github.io",
  //   demo: "https://fourcardedwin.netlify.app/",
  //   note: "",
  // },
  {
    title: "Lista de tareas",
    description: "Pagina donde puedes ingresar tareas de tu dia a dia",
    techs: ["React", "CSS", "Javascript"],
    image: "/assets/project-6.png",
    github: "https://github.com/edwin08torres/TODOs/tree/main",
    demo: "https://edwin08torres.github.io/TODOs/",
    note: "",
  },
];

export const ProjectPage = () => {
  const [filter, setFilter] = useState("Todos");
  const filtered = projects.filter((p) =>
    filter === "Todos" ? true : p.techs.includes(filter)
  );

  return (
    <>
      <section className="bg-slate-950 text-white w-full flex flex-col items-center px-4 py-20 gap-16">
        {/* Intro */}
        <div className="text-center max-w-3xl px-4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-down">
            Proyectos Destacados
          </h2>
          <p className="text-slate-300 text-lg text-justify" data-aos="fade-up">
            A lo largo de mi trayectoria he desarrollado soluciones web
            modernas, tanto para empresas como para proyectos personales. Aquí
            te muestro algunos de los trabajos que representan mi estilo,
            habilidades técnicas y enfoque en la experiencia de usuario.
          </p>
        </div>

        {/* Filtros */}
        <div
          className="flex gap-3 flex-wrap justify-center"
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

      {/* Grid de cards 3D */}
      <section className="bg-slate-950 text-white w-full flex flex-col items-center px-4 py-20 gap-16">
        <div
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full max-w-6xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {filtered.map((project, i) => (
            <CardContainer key={i} className="inter-var cursor-pointer">
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

                {project.note && (
                  <CardItem
                    as="p"
                    translateZ="20"
                    className="text-xs text-blue-300 mt-2"
                  >
                    {project.note}
                  </CardItem>
                )}

                <CardItem translateZ="20" className="flex flex-wrap gap-2 mt-4">
                  {project.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-[#aab2d1] text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </CardItem>

                <div className="flex justify-between mt-6">
                  <CardItem
                    as="a"
                    href={project.github}
                    target="_blank"
                    translateZ={10}
                    className="text-xs underline text-[#aab2d1] hover:text-[#3658f1]"
                  >
                    GitHub →
                  </CardItem>
                  <CardItem
                    as="a"
                    href={project.demo}
                    target="_blank"
                    translateZ={10}
                    className="text-xs px-3 py-1 bg-[#aab2d1] text-black rounded hover:bg-[#3658f1]"
                  >
                    Ver Demo
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
    </>
  );
};
