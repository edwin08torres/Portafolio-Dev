import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

const particles = [
  { x: "10%", y: "15%", size: 4, delay: 0, duration: 20, blur: 0 },
  { x: "85%", y: "20%", size: 6, delay: 2, duration: 25, blur: 1 },
  { x: "70%", y: "70%", size: 3, delay: 4, duration: 18, blur: 0 },
  { x: "15%", y: "80%", size: 5, delay: 1, duration: 22, blur: 1 },
  { x: "50%", y: "10%", size: 3, delay: 3, duration: 20, blur: 0 },
  { x: "30%", y: "60%", size: 4, delay: 5, duration: 24, blur: 0 },
  { x: "90%", y: "50%", size: 5, delay: 2, duration: 19, blur: 1 },
  { x: "40%", y: "85%", size: 3, delay: 6, duration: 21, blur: 0 },
  { x: "60%", y: "35%", size: 4, delay: 1, duration: 23, blur: 0 },
  { x: "25%", y: "40%", size: 6, delay: 4, duration: 26, blur: 1 },
];

const codeLines = [
  { text: "const developer = {", color: "text-blue-300" },
  { text: '  name: "Edwin Torrez",', color: "text-emerald-300" },
  { text: "  skills: [", color: "text-blue-300" },
  { text: '    "React", "TypeScript",', color: "text-amber-300" },
  { text: '    ".NET", "Tailwind CSS"', color: "text-amber-300" },
  { text: "  ],", color: "text-blue-300" },
  { text: '  passion: "Building UIs",', color: "text-pink-300" },
  { text: "};", color: "text-blue-300" },
];

export const HomeHeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const spotlightBg = useMotionTemplate`radial-gradient(650px circle at ${smoothX}px ${smoothY}px, rgba(59,130,246,0.06), transparent 60%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  const [visibleLines, setVisibleLines] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#020617]"
    >
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="aurora-bg absolute inset-0" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: spotlightBg }}
      />

      <div className="absolute inset-0 z-[2]">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/30"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              filter: p.blur ? "blur(1px)" : "none",
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 z-[3] opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <img
        src="/assets/noise.png"
        alt=""
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-[0.04] z-[4]"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-blue-300 tracking-wide">
              Available for work
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm md:text-base text-slate-400 font-medium tracking-wide mb-2"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight"
          >
            <span className="hero-name-gradient">Edwin</span>
            <br />
            <span className="text-white">Torrez</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-5 flex items-center justify-center lg:justify-start gap-3"
          >
            <div className="hidden lg:block h-px w-10 bg-gradient-to-r from-transparent to-blue-500/50" />
            <p className="text-sm md:text-base text-slate-400">
              Systems Engineer &{" "}
              <span className="gradient-text-blue font-semibold">
                Front-End Developer
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href="#project"
              className="btn-glow px-8 py-3.5 text-white rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2"
            >
              View Projects
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/doc/EdwinTorres_CV.pdf"
              download
              className="btn-outline px-8 py-3.5 text-white rounded-xl font-semibold text-sm tracking-wide text-center"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex items-center gap-6 mt-10 text-slate-500 text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">10+</span>
              <span>
                Projects
                <br />
                Delivered
              </span>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">5+</span>
              <span>
                Years
                <br />
                Experience
              </span>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">3</span>
              <span>
                Tech
                <br />
                Stacks
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 hidden md:block max-w-md w-full perspective-1000"
        >
          <div className="code-terminal relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-blue-900/20">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-xs text-slate-500 font-mono ml-2">
                developer.ts
              </span>
            </div>

            <div className="p-5 bg-[#0a0f1e]/80 backdrop-blur-md font-mono text-sm leading-relaxed min-h-[280px]">
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex"
                >
                  <span className="text-slate-600 select-none w-6 text-right mr-4 text-xs leading-relaxed">
                    {i + 1}
                  </span>
                  <span className={line.color}>{line.text}</span>
                </motion.div>
              ))}
              {visibleLines < codeLines.length && (
                <div className="flex items-center mt-1">
                  <span className="text-slate-600 select-none w-6 text-right mr-4 text-xs">
                    {visibleLines + 1}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="w-2 h-5 bg-blue-400"
                  />
                </div>
              )}
            </div>

            <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent blur-xl" />
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 group-hover:text-blue-400 transition">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-600/50 flex justify-center pt-1.5 group-hover:border-blue-500/50 transition">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-slate-400 group-hover:bg-blue-400 transition"
          />
        </div>
      </motion.a>
    </section>
  );
};
