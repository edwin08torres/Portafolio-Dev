import {
  lazy,
  Suspense,
  useRef,
  useEffect,
  useState,
} from "react";
import Marquee from "react-fast-marquee";
import { stats, featuredStack, techStack } from "@/data/aboutData";
import { motion, useInView } from "framer-motion";
import { Zap, Target, Layers, Code2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

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
    num: "01",
    title: "Performance First",
    desc: "Every ms counts. I optimize for speed from the start.",
  },
  {
    icon: Target,
    num: "02",
    title: "Pixel Perfect",
    desc: "Design fidelity is non-negotiable.",
  },
  {
    icon: Layers,
    num: "03",
    title: "Clean Architecture",
    desc: "Scalable patterns, not spaghetti code.",
  },
];

export const AboutSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { t } = useLanguage();

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#050505] text-white py-24 px-6 lg:pl-24 lg:pr-12 border-b border-zinc-800/80 overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-16"
        >
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#a3e635] uppercase">
            01 — {t("about.subtitle")}
          </span>
          <h2 id="about-title" className="text-4xl md:text-5xl font-black uppercase text-white mt-2">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4"
          >
            <div className="bg-[#121212] border border-zinc-800 p-6 md:p-8 rounded-[2px] hover:border-zinc-700 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 font-mono text-xs tracking-widest text-[#a3e635] uppercase font-bold">
                  <Code2 size={16} />
                  <span>{t("about.whoIAm")}</span>
                </div>
                <div className="text-sm md:text-base leading-relaxed space-y-4 text-zinc-300 text-justify">
                  <p dangerouslySetInnerHTML={{ __html: t("about.description1") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("about.description2") }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats counters */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-6">
            {stats.map(({ label, value }, i) => {
              const statKey = i === 0 ? "projects" : "experience";
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="bg-[#121212] border border-zinc-800 p-6 rounded-[2px] flex flex-col items-start justify-center hover:border-zinc-700 transition-colors h-full">
                    <span className="font-mono text-4xl md:text-5xl font-black text-[#a3e635] leading-none">
                      <AnimatedCounter value={value} suffix="+" />
                    </span>
                    <span className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-widest">
                      {t(`about.stats.${statKey}`)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Principles */}
          {principles.map((p, i) => {
            const title = t(`about.principles.${i}.title`);
            const desc = t(`about.principles.${i}.desc`);
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className="md:col-span-2"
              >
                <div className="bg-[#121212] border border-zinc-800 p-6 rounded-[2px] hover:border-zinc-700 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#a3e635]">
                        {p.num}
                      </span>
                      <p.icon size={18} className="text-zinc-400" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Core stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-3"
          >
            <div className="bg-[#121212] border border-zinc-800 p-6 rounded-[2px] hover:border-zinc-700 transition-colors h-full">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#a3e635] mb-6 block">
                {t("about.coreStack")}
              </span>
              <div className="grid grid-cols-5 gap-3">
                {featuredStack.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 p-3 bg-[#080808] border border-zinc-800 rounded-[2px] hover:border-[#a3e635] transition-colors group cursor-default"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-7 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors truncate w-full text-center">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="md:col-span-3"
          >
            <div className="bg-[#121212] border border-zinc-800 p-6 rounded-[2px] hover:border-zinc-700 transition-colors overflow-hidden h-full">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#a3e635] mb-6 block">
                {t("about.githubActivity")}
              </span>
              <Suspense
                fallback={
                  <div className="h-24 flex items-center justify-center">
                    <span className="text-xs font-mono text-zinc-500">Loading…</span>
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
            </div>
          </motion.div>
        </div>

        {/* Tech stack Marquee */}
        <div className="w-full mt-16 space-y-3">
          <Marquee gradient={false} speed={35} pauseOnHover play>
            {techStack.slice(0, 10).map((item) => (
              <div
                key={item.name + "-r1"}
                className="flex items-center gap-2 mx-2 px-4 py-2 bg-[#121212] border border-zinc-800 rounded-[2px] hover:border-[#a3e635] transition-colors group"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
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
                className="flex items-center gap-2 mx-2 px-4 py-2 bg-[#121212] border border-zinc-800 rounded-[2px] hover:border-[#a3e635] transition-colors group"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
