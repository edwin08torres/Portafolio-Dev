import { lazy, Suspense } from "react";
import Marquee from "react-fast-marquee";
import TechStackGrid from "@/components/ui/TechStackGrid";

import { stats, featuredStack, techStack } from "@/data/aboutData";

const GitHubCalendar = lazy(() => import("react-github-calendar"));

export const AboutSection = () => (
  <section
    id="about"
    className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white py-20 px-4 flex flex-col items-center"
  >
    <article
      className="relative max-w-3xl w-full bg-slate-800/60 backdrop-blur-md rounded-2xl
                 p-10 shadow-xl flex flex-col items-center text-center space-y-8"
      data-aos="zoom-in-up"
    >
      <h2 className="text-4xl md:text-5xl font-bold uppercase">Sobre mí</h2>

      <ul className="flex flex-wrap justify-center gap-3">
        {stats.map(({ label, value }) => (
          <li
            key={label}
            className="px-3 py-1 border rounded-full transition-colors
                       hover:bg-white hover:text-black select-none"
          >
            {value}+ {label}
          </li>
        ))}
        <li
          className="px-3 py-1 border rounded-full cursor-pointer transition-colors
                       hover:bg-white hover:text-black"
        >
          🚀 Mobile First
        </li>
      </ul>

      <div className="text-lg leading-relaxed max-w-prose space-y-4 text-start">
        <p>
          I’m a web developer focused on building clean, responsive, and
          scalable applications with React, Next.js, Blazor, .NET, and
          TailwindCSS.
        </p>
        <p>
          My approach centers on understanding project needs, communicating
          clearly, and delivering high-quality solutions that add value from day
          one.
        </p>
      </div>

      <TechStackGrid items={featuredStack} />

      <Suspense fallback={<span className="text-sm">Cargando aportes…</span>}>
        <GitHubCalendar
          username="edwin08torres"
          blockSize={14}
          blockMargin={5}
          fontSize={14}
          colorScheme="dark"
        />
      </Suspense>

      <a
        href="/doc/CV.pdf"
        download
        className="flex items-center gap-2 border border-white px-6 py-2 rounded-lg
                   font-bold hover:bg-white hover:text-black transition hover:animate-wiggle"
      >
        CV <i className="fa-solid fa-file-pdf text-sm" />
      </a>
    </article>

    {/* ---------- Marquee completo ---------- */}
    <div className="w-full md:w-3/4 py-10">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover
        play={
          !window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches /* respeta accesibilidad */
        }
      >
        {techStack.map((src) => (
          <img
            key={src}
            src={src}
            alt={src.split("/").pop()?.replace(".svg", "")}
            loading="lazy"
            aria-hidden="true"
            className="h-12 mx-5 opacity-80 grayscale invert
                       hover:grayscale-0 hover:invert-0 transition"
          />
        ))}
      </Marquee>
    </div>
  </section>
);
