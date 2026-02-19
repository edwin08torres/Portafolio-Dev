import { lazy, Suspense, useRef } from "react";
import Marquee from "react-fast-marquee";
import TechStackGrid from "@/components/ui/TechStackGrid";
import { stats, featuredStack, techStack } from "@/data/aboutData";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FileDown, Sparkles } from "lucide-react";

const GitHubCalendar = lazy(() => import("react-github-calendar"));

export const AboutSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const scrollRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 80%", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="about"
      ref={(el) => {
        ref.current = el;
        scrollRef.current = el;
      }}
      className="relative bg-[#020617] text-white py-24 px-4 flex flex-col items-center overflow-hidden"
      aria-labelledby="about-title"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-64 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[120px]"
      />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">
            Get to know me
          </span>
          <Sparkles size={16} className="text-blue-400" />
        </div>
        <h2 id="about-title" className="section-title text-4xl md:text-5xl">
          About
        </h2>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="glass-card relative w-full max-w-xl md:max-w-3xl p-6 md:p-10 shadow-2xl flex flex-col items-center text-center space-y-8"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {stats.map(({ label, value }, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/15 hover:border-blue-500/30 transition-all cursor-default"
            >
              <span className="font-bold text-white">{value}+</span> {label}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-violet-500/10 border border-violet-500/20 text-violet-300"
          >
            🚀 Mobile First
          </motion.span>
        </div>

        <div className="text-sm md:text-base leading-relaxed max-w-prose space-y-4 text-left text-slate-300">
          <p>
            I'm a web developer focused on building clean, responsive and
            scalable applications with{" "}
            <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Blazor</span>,{" "}
            <span className="text-white font-medium">.NET</span> and{" "}
            <span className="text-white font-medium">Tailwind CSS</span>. On the
            frontend I like simple state patterns (Zustand) and clear component
            APIs; on the platform side I'm comfortable integrating REST/.NET
            backends and shipping with CI/CD.
          </p>
          <p>
            I care about accessibility, performance and maintainability—shipping
            value from day one.
          </p>
        </div>

        <div className="gradient-divider w-full" />

        <TechStackGrid items={featuredStack} />

        <div className="w-full">
          <Suspense
            fallback={
              <div className="h-32 flex items-center justify-center">
                <span className="text-sm text-slate-500">
                  Loading contributions…
                </span>
              </div>
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
        </div>

        <a
          href="/doc/EdwinTorrez_Resumen.pdf"
          download
          className="btn-outline inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white"
        >
          Download CV
          <FileDown size={16} />
        </a>
      </motion.article>

      <div className="w-full mt-16 space-y-4">
        <div className="gradient-divider w-full mb-6" />

        <Marquee gradient={false} speed={35} pauseOnHover play>
          {techStack.slice(0, 10).map((item) => (
            <div
              key={item.name + "-r1"}
              className="flex items-center gap-2 mx-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-6 opacity-60 grayscale invert"
              />
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </Marquee>

        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover
          play
          direction="right"
        >
          {techStack.slice(10).map((item) => (
            <div
              key={item.name + "-r2"}
              className="flex items-center gap-2 mx-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-violet-500/20 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-6 opacity-60 grayscale invert"
              />
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </Marquee>

        <div className="gradient-divider w-full mt-6" />
      </div>
    </section>
  );
};
