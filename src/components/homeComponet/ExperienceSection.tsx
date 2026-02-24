import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experienceData";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

export const ExperienceSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-[#020617] text-white py-24 px-4 flex flex-col items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Briefcase size={16} className="text-blue-400" />
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">
            Career Path
          </span>
          <Briefcase size={16} className="text-blue-400" />
        </div>
        <h2 className="section-title text-4xl md:text-5xl">Experience</h2>
      </motion.div>

      <div className="relative w-full max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />

        {experiences.map((exp, i) => {
          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40, x: -20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-start mb-12 last:mb-0 pl-12"
            >
              <div className="absolute left-4 -translate-x-1/2 top-1 z-10">
                <div
                  className="w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: exp.accent,
                    boxShadow: `0 0 12px ${exp.accent}66`,
                  }}
                />
                <div
                  className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
                  style={{ background: exp.accent, opacity: 0.3 }}
                />
              </div>

              <div className="w-full">
                <div
                  className="group rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-opacity-50 transition-all duration-500"
                  style={{ "--exp-accent": exp.accent } as React.CSSProperties}
                >
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                      style={{
                        color: exp.accent,
                        borderColor: `${exp.accent}55`,
                        background: `${exp.accent}15`,
                      }}
                    >
                      <Calendar size={10} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-slate-500 uppercase tracking-wider">
                      <MapPin size={10} />
                      {exp.location} · {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-0.5">
                    {exp.company}
                  </h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: exp.accent }}
                  >
                    {exp.role}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed"
                      >
                        <ChevronRight
                          size={14}
                          className="shrink-0 mt-0.5"
                          style={{ color: exp.accent }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.04] border border-white/[0.06] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
