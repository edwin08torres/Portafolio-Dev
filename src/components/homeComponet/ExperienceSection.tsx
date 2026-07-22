import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiencesConfig } from "@/data/experienceData";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const ExperienceSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-[#050505] text-white py-24 px-6 lg:pl-24 lg:pr-12 border-b border-zinc-800/80 overflow-hidden"
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
            02 — {t("experience.subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-2">
            {t("experience.title")}
          </h2>
        </motion.div>

        <div className="relative w-full max-w-4xl">
          {/* Vertical timeline line - solid clean line */}
          <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-zinc-800" />

          {experiencesConfig.map((config, i) => {
            const company = t(`experience.items.${i}.company`);
            const role = t(`experience.items.${i}.role`);
            const period = t(`experience.items.${i}.period`);
            const location = t(`experience.items.${i}.location`);
            const type = t(`experience.items.${i}.type`);
            const description = t(`experience.items.${i}.description`);
            const bullets = (t(`experience.items.${i}.bullets`) as string[]) || [];

            return (
              <motion.div
                key={config.id}
                initial={{ opacity: 0, y: 30, x: -10 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.15,
                }}
                className="relative flex items-start mb-12 last:mb-0 pl-10"
              >
                {/* Timeline Marker - Solid sharp square */}
                <div className="absolute left-3 -translate-x-1/2 top-2.5 z-10">
                  <div className="w-2.5 h-2.5 bg-[#a3e635]" />
                </div>

                <div className="w-full">
                  <div className="bg-[#121212] border border-zinc-800 p-6 sm:p-8 rounded-[2px] hover:border-zinc-700 transition-colors">
                    {/* Header info */}
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 bg-zinc-900 border border-zinc-700 text-zinc-200 rounded-[2px]">
                        <Calendar size={12} className="text-[#a3e635]" />
                        {period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        <MapPin size={12} className="text-zinc-500" />
                        {location} · {type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                      {company}
                    </h3>
                    <p className="text-sm font-mono font-semibold text-[#a3e635] mb-4">
                      {role}
                    </p>

                    {description && (
                      <p className="text-sm text-zinc-300 leading-relaxed mb-5 text-justify pr-2">
                        {description}
                      </p>
                    )}

                    <ul className="space-y-3 mb-6">
                      {bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                        >
                          <ChevronRight
                            size={16}
                            className="shrink-0 mt-0.5 text-[#a3e635]"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack tags - solid border */}
                    <div className="flex flex-wrap gap-2">
                      {config.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-[2px] text-xs font-mono font-medium bg-[#080808] border border-zinc-800 text-zinc-400 hover:border-[#a3e635] hover:text-white transition-colors"
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
      </div>
    </section>
  );
};
