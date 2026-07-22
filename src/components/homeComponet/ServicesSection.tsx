import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Smartphone, Server, Database } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const services = [
  {
    num: "01",
    icon: Code2,
    highlights: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO Optimized",
    ],
  },
  {
    num: "02",
    icon: Smartphone,
    highlights: ["Flutter", "React Native", "Firebase", "RevenueCat"],
  },
  {
    num: "03",
    icon: Server,
    highlights: [".NET 6/8", "SignalR", "SQL Server", "Azure"],
  },
  {
    num: "04",
    icon: Database,
    highlights: ["Strapi CMS", "Azure DevOps", "CI/CD", "Docker"],
  },
];

export const ServicesSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { t } = useLanguage();

  return (
    <section
      id="services"
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
            03 — {t("services.subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-2">
            {t("services.title")}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mt-3 leading-relaxed">
            {t("services.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
          {services.map((service, i) => {
            const title = t(`services.items.${i}.title`);
            const description = t(`services.items.${i}.description`);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group bg-[#121212] border border-zinc-800 p-8 rounded-[2px] hover:border-[#a3e635] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-[#a3e635]">
                      {service.num}
                    </span>
                    <service.icon
                      size={22}
                      className="text-zinc-400 group-hover:text-white transition-colors"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 rounded-[2px] text-xs font-mono bg-[#080808] border border-zinc-800 text-zinc-300 group-hover:border-zinc-700 transition-colors"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
