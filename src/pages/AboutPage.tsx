import Marquee from "react-fast-marquee";

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

export const AboutPage = () => {
  return (
    <section className="bg-slate-950 text-white min-h-[100vh] flex flex-col items-center justify-center px-4 py-20 gap-10">
      <div className="group flex justify-center items-center flex-col px-4 text-center space-y-4 max-w-2xl md:max-w-md shadow-lg shadow-black bg-slate-900 h-[30rem] md:h-[30rem] rounded-lg hover:bg-[#0d1f33] hover:text-[#aab2d1] transition-colors duration-500 ease-in-out">
        <h1 className="text-4xl font-bold uppercase">Sobre mí</h1>
        <p className="text-lg text-justify">
          Soy desarrollador web con experiencia en tecnologías modernas tanto
          frontend como backend. Me especializo en crear aplicaciones limpias,
          responsivas y escalables con herramientas como React, Next.js, Blazor,
          .NET y TailwindCSS. <br /> <br /> Me enfoco en entender las
          necesidades del proyecto, comunicarme de forma clara y entregar
          soluciones de calidad que generen valor desde el primer día.
        </p>
        {/* Botones */}
        <div className="flex justify-center md:justify-start gap-4 relative z-10 mt-6">
          <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:animate-wiggle">
            CV
          </button>
          <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:animate-wiggle">
            Projects
          </button>
        </div>
      </div>

      {/* Carrusel tech stack */}
      <div className="w-full py-4">
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {techStack.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={src.split("/").pop()?.replace(".svg", "")}
              className="h-10 mx-4 opacity-80 grayscale invert hover:invert-0 transition"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
