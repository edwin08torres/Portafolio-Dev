import { lazy, Suspense, useMemo, useRef } from "react";
import Marquee from "react-fast-marquee";
import TechStackGrid from "@/components/ui/TechStackGrid";
import { stats, featuredStack, techStack } from "@/data/aboutData";
import { motion, useScroll, useTransform } from "framer-motion";

const GitHubCalendar = lazy(() => import("react-github-calendar"));

export const AboutSection = () => {
  const statItems = useMemo(() => stats, []);

  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0.3, 1], [1, 0.2]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white py-20 px-4 flex flex-col items-center"
      aria-labelledby="about-title"
    >
      <motion.div
        style={{ scale: textScale }}>
        <article className="relative max-w-3xl w-full bg-slate-800/60 backdrop-blur-md rounded-2xl p-10 shadow-xl flex flex-col items-center text-center space-y-8">
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold uppercase"
          >
            About
          </h2>

          <ul className="flex flex-wrap justify-center gap-3">
            {statItems.map(({ label, value }) => (
              <li
                key={label}
                className="px-3 py-1 border rounded-full transition-colors hover:bg-white hover:text-black select-none"
              >
                {value}+ {label}
              </li>
            ))}
            <li className="px-3 py-1 border rounded-full">🚀 Mobile First</li>
          </ul>

          <div className="text-lg leading-relaxed max-w-prose space-y-4 text-left">
            <p>
              I’m a web developer focused on building clean, responsive and
              scalable applications with <strong>React</strong>,{" "}
              <strong>Blazor</strong>, <strong>.NET</strong> and{" "}
              <strong>Tailwind CSS</strong>. On the frontend I like simple state
              patterns (Zustand) and clear component APIs; on the platform side
              I’m comfortable integrating REST/.NET backends and shipping with
              CI/CD.
            </p>
            <p>
              I care about accessibility, performance and maintainability—shipping
              value from day one.
            </p>
          </div>

          <TechStackGrid items={featuredStack} />

          <Suspense
            fallback={
              <span className="text-sm opacity-80">Loading contributions…</span>
            }
          >
            <GitHubCalendar
              username="edwin08torres"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              colorScheme="dark"
            />
          </Suspense>

          <a
            href="/doc/EdwinTorrezCV.pdf"
            download
            className="inline-flex items-center gap-2 border border-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-black transition"
          >
            Download CV{" "}
            <i className="fa-solid fa-file-pdf text-sm" aria-hidden="true" />
          </a>
        </article>


      </motion.div>

      {/* Tech strip */}
      <div className="w-full md:w-full py-10">
        <Marquee gradient={false} speed={90} pauseOnHover play>
          {techStack.map((src) => (
            <img
              key={src}
              src={src}
              alt={src.split("/").pop()?.replace(".svg", "")}
              loading="lazy"
              decoding="async"
              className="h-14 mx-5 opacity-80 grayscale invert hover:grayscale-0 hover:invert-0 transition"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
