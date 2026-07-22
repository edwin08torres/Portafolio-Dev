import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const KineticRole = () => {
  const roles = ["FRONTEND DEVELOPER", "MOBILE DEVELOPER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-7 sm:h-8 md:h-12 overflow-hidden w-[260px] sm:w-[320px] md:w-[500px]">
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
          className="absolute top-0 right-0 font-mono text-lg sm:text-2xl md:text-4xl font-black text-[#a3e635] uppercase tracking-widest whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export const HomeHeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative w-full h-[100svh] bg-[#050505] overflow-hidden flex flex-col border-b border-zinc-800/80"
    >
      {/* Marginal Note - Status */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-10 lg:top-10 lg:right-16 z-30 flex items-center gap-2 mix-blend-difference">
        <span className="w-1.5 h-1.5 bg-[#a3e635]" />
        <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
          {t("hero.status")}
        </span>
      </div>

      {/* Main Typography - Aggressive Crop */}
      <div className="absolute inset-0 flex flex-col justify-center select-none pointer-events-none z-0 px-6 sm:px-10 lg:px-16 mt-12 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
          className="text-[clamp(4.5rem,17vw,22rem)] font-black uppercase text-white leading-[0.75] tracking-tighter -ml-[2vw] opacity-95"
        >
          EDWIN
          <br />
          <span className="text-zinc-800">TORREZ</span>
        </motion.h1>
      </div>

      {/* Content Layer (z-10) */}
      <div className="relative z-10 w-full h-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 pointer-events-none">
        {/* Top left greeting */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-10 lg:top-10 lg:left-16 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          {t("hero.greeting")}
        </div>

        {/* Kinetic Role & Subtitle - Asymmetric Right */}
        <div className="absolute top-[20%] sm:top-[22%] lg:top-[20%] right-6 sm:right-10 lg:right-16 flex flex-col items-end text-right pointer-events-auto">
          <KineticRole />
          <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-zinc-400 max-w-[280px] leading-relaxed mix-blend-difference">
            {/* {t("hero.subtitle")}{" "} */}
            <span className="text-white font-medium">
              {/* {t("hero.subtitleHighlight")} */}
            </span>
          </p>
        </div>

        {/* Actions - Bottom Left */}
        <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-10 lg:left-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 pointer-events-auto">
          <a
            href="#project"
            className="bg-[#a3e635] text-black text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 hover:bg-[#b5ff14] transition-colors"
          >
            {t("hero.viewProjects")}
            <span className="text-sm">→</span>
          </a>
          <a
            href="/doc/Curriculum_EdwinTorrez.pdf"
            download="Curriculum_EdwinTorrez.pdf"
            className="group flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-zinc-300 hover:text-[#a3e635] transition-colors"
          >
            <span className="border-b border-zinc-500 group-hover:border-[#a3e635] transition-colors pb-1">
              {t("hero.downloadCv")}
            </span>
            <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>
        </div>

        {/* Editorial Stats - Anchored Right Edge (Vertical on Desktop, stack on Mobile) */}
        <div className="hidden sm:flex absolute bottom-24 sm:bottom-28 lg:bottom-28 right-6 sm:right-10 lg:right-16 flex-row md:flex-col gap-6 md:gap-8 pointer-events-auto items-end">
          {[
            { value: "10+", label: t("hero.stats.projects") },
            { value: "5+", label: t("hero.stats.experience") },
            { value: "3", label: t("hero.stats.stacks") },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-end">
              <span className="font-mono text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none tracking-tighter mix-blend-difference">
                {stat.value}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
