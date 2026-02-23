import {
  lazy,
  Suspense,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import Marquee from "react-fast-marquee";
import { stats, featuredStack, techStack } from "@/data/aboutData";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Sparkles, Zap, Target, Layers, Code2 } from "lucide-react";

const GitHubCalendar = lazy(() => import("react-github-calendar"));

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const principles = [
  {
    icon: Zap,
    title: "Performance First",
    desc: "Every ms counts. I optimize for speed from the start.",
  },
  {
    icon: Target,
    title: "Pixel Perfect",
    desc: "Design fidelity is non-negotiable.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    desc: "Scalable patterns, not spaghetti code.",
  },
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}

export const AboutSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
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

      {/* Bento Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-4"
        >
          <TiltCard className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 md:p-8 hover:border-blue-500/25 transition-all duration-500 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={18} className="text-blue-400" />
              <span className="text-xs tracking-wider uppercase text-blue-400 font-medium">
                Who I Am
              </span>
            </div>
            <div className="text-sm md:text-[15px] leading-relaxed space-y-4 text-slate-300">
              <p>
                I'm a web developer focused on building{" "}
                <span className="text-white font-medium">
                  clean, responsive and scalable
                </span>{" "}
                applications with{" "}
                <span className="text-blue-400 font-medium">React</span>,{" "}
                <span className="text-blue-400 font-medium">.NET</span> and{" "}
                <span className="text-blue-400 font-medium">Tailwind CSS</span>.
              </p>
              <p>
                On the frontend I like simple state patterns and clear component
                APIs; on the platform side I'm comfortable integrating REST
                backends and shipping with CI/CD. I care about accessibility,
                performance and maintainability—{" "}
                <span className="text-white font-medium">
                  shipping value from day one
                </span>
                .
              </p>
            </div>
          </TiltCard>
        </motion.div>

        {/* Stats cards */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4">
          {stats.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <TiltCard className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5 flex flex-col items-center justify-center text-center hover:border-blue-500/25 transition-all duration-500 h-full group">
                <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  <AnimatedCounter value={value} suffix="+" />
                </span>
                <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium group-hover:text-slate-400 transition">
                  {label}
                </span>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Principles row */}
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
            className="md:col-span-2"
          >
            <TiltCard className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5 hover:border-blue-500/25 transition-all duration-500 group h-full">
              <div className="p-2.5 rounded-xl bg-blue-500/10 w-fit mb-3 group-hover:bg-blue-500/15 transition">
                <p.icon size={18} className="text-blue-400" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition">
                {p.desc}
              </p>
            </TiltCard>
          </motion.div>
        ))}

        {/* Tech Stack card — colorful icons, no grayscale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-3"
        >
          <TiltCard className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-blue-500/25 transition-all duration-500 h-full">
            <span className="text-xs tracking-wider uppercase text-blue-400 font-medium mb-4 block">
              Core Stack
            </span>
            <div className="grid grid-cols-5 gap-3">
              {featuredStack.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.07] hover:border-blue-500/20 hover:shadow-[0_0_16px_rgba(59,130,246,0.12)] transition-all duration-300 group cursor-default"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-7 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-300 transition font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        {/* GitHub Activity card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="md:col-span-3"
        >
          <TiltCard className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-blue-500/25 transition-all duration-500 overflow-hidden h-full">
            <span className="text-xs tracking-wider uppercase text-blue-400 font-medium mb-4 block">
              GitHub Activity
            </span>
            <Suspense
              fallback={
                <div className="h-24 flex items-center justify-center">
                  <span className="text-xs text-slate-500">Loading…</span>
                </div>
              }
            >
              <GitHubCalendar
                username="edwin08torres"
                blockSize={11}
                blockMargin={4}
                fontSize={11}
                colorScheme="dark"
              />
            </Suspense>
          </TiltCard>
        </motion.div>
      </div>

      {/* Tech Marquee */}
      <div className="w-full max-w-5xl mt-14 space-y-3">
        <div className="gradient-divider w-full mb-5" />
        <Marquee gradient={false} speed={35} pauseOnHover play>
          {techStack.slice(0, 10).map((item) => (
            <div
              key={item.name + "-r1"}
              className="flex items-center gap-2 mx-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300 group"
            >
              <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-5 opacity-70 group-hover:opacity-100 transition-all"
              />
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap group-hover:text-slate-200 transition">
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
              className="flex items-center gap-2 mx-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-violet-500/20 transition-all duration-300 group"
            >
              <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-5 opacity-70 group-hover:opacity-100 transition-all"
              />
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap group-hover:text-slate-200 transition">
                {item.name}
              </span>
            </div>
          ))}
        </Marquee>
        <div className="gradient-divider w-full mt-5" />
      </div>
    </section>
  );
};
