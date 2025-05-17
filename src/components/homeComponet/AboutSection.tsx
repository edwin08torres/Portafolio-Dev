import Marquee from "react-fast-marquee";
import { StatsBlock } from "../layout/StatsBlock";

const techStack = [
  "/assets/javascript.svg",
  "/assets/typescript.svg",
  "/assets/css.svg",
  "/assets/html5.svg",
  "/assets/react.svg",
  "/assets/vite.svg",
  "/assets/nextdotjs.svg",
  "/assets/blazor.svg",
  "/assets/dotnet.svg",
  "/assets/angular.svg",
  "/assets/git.svg",
  "/assets/github.svg",
  "/assets/pwa.svg",
  "/assets/mysql.svg",
  "/assets/redis.svg",
  "/assets/googlecloud.svg",
  "/assets/htmx.svg",
  "/assets/databricks.svg",
  "/assets/devdotto.svg",
  "/assets/hostinger.svg",
];

const stats = [
  { label: "Proyectos", value: 10 },
  { label: "Años Exp.", value: 3 },
  { label: "Clientes", value: 5 },
];

const skills = [
  { name: "React", level: 80, lvlstring: "Intermedio" },
  { name: "Next.js", level: 65, lvlstring: "Intermedio" },
  { name: "TailwindCSS", level: 75, lvlstring: "Itermedio" },
  { name: "Typescript", level: 70, lvlstring: "Intermedio" },
  { name: ".NET", level: 65, lvlstring: "Intermedio" },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white pt-20 pb-4 md:pb-6 px-4 flex flex-col items-center"
    >
      <div className="relative group max-w-3xl w-full bg-slate-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-8 shadow-xl flex flex-col items-center text-center space-y-6">
        <h1 className="text-5xl font-bold uppercase">Sobre mí</h1>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-3 ">
          <span className="px-3 py-1 border rounded-full hover:bg-white cursor-pointer hover:text-black  transition-all ease-in">
            💼 {stats[0].value}+ Proyectos
          </span>
          <span className="px-3 py-1 border rounded-full hover:bg-white cursor-pointer hover:text-black  transition-all ease-in">
            ⚡️ {stats[1].value}+ Años Exp.
          </span>
          <span className="px-3 py-1 border rounded-full hover:bg-white cursor-pointer hover:text-black  transition-all ease-in">
            🤝 {stats[2].value}+ Clientes
          </span>
          <span className="px-3 py-1 border rounded-full hover:bg-white cursor-pointer hover:text-black  transition-all ease-in">
            🚀 Mobile First
          </span>
        </div>

        <p className="text-lg leading-relaxed max-w-xl">
          Soy desarrollador web con experiencia en tecnologías modernas tanto
          frontend como backend. Me especializo en crear aplicaciones limpias,
          responsivas y escalables con herramientas como React, Next.js, Blazor,
          .NET y TailwindCSS.
          <br /> <br />
          Me enfoco en entender las necesidades del proyecto, comunicarme de
          forma clara y entregar soluciones de calidad que generen valor desde
          el primer día.
        </p>

        <StatsBlock />

        {/* Skills bars */}
        <div className="w-full space-y-4 mt-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex mb-1 justify-between">
                <span>{skill.name}</span> <span>{skill.lvlstring}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-[length:200%_100%] animate-shimmer origin-left"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="/doc/CV.pdf"
            download
            className="flex items-center gap-2 border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition hover:animate-wiggle"
          >
            CV
          </a>
          {/* <a
            href="/project"
            className="flex items-center gap-2 bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition hover:animate-wiggle"
          >
            Proyectos
          </a> */}
        </div>
      </div>

      {/* Carousel tech stack */}
      <div className="w-full md:w-3/4 py-8">
        <Marquee gradient={false} speed={40} pauseOnHover>
          {techStack.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={src.split("/").pop()?.replace(".svg", "")}
              className="h-12 mx-4 opacity-80 grayscale invert hover:grayscale-0 hover:invert-0 transition"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
