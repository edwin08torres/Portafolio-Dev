import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HomeHeroSection = () => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const glowTopY = useTransform(scrollYProgress, [0, 1], [40, -420]);
  const glowBottomY = useTransform(scrollYProgress, [0, 1], [-40, 120]);

  const noiseOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.02]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-[100vh] w-full flex-col items-center justify-center gap-6 overflow-hidden bg-slate-950 text-white"
    >
      <motion.img
        src="/assets/noise.png"
        alt="noise"
        className="absolute h-full w-full object-cover"
        style={{ opacity: noiseOpacity }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <motion.div
        style={{ y: glowTopY }}
        className="pointer-events-none absolute -left-32 -top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl"
      />

      <motion.div
        style={{ y: glowBottomY }}
        className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl"
      />

      <motion.div
        style={{ y: textY, scale: textScale, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center md:items-center md:text-center"
      >
        <h2 className="typing1 text-lg font-semibold text-blue-300 md:text-2xl stroke-text">
          Hey, I'm
        </h2>

        <h1 className="typing2 text-4xl uppercase md:py-2 md:text-[5rem] stroke-text">
          Edwin Torrez
        </h1>

        <h2
          className="typing2 uppercase text-lg tracking-widest font-semibold md:text-2xl stroke-text"
          style={{ animationDelay: "3s" }}
        >
          But you can call me Alex
        </h2>

        <p
          className="fade-in-late text-sm text-white md:text-xl"
          style={{ animationDelay: "5s" }}
        >
          Systems Engineer <br />
          &amp; front-end web developer
        </p>
      </motion.div>
    </section>
  );
};
