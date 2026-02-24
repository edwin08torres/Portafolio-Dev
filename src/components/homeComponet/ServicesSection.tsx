import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Smartphone, Server, Database } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Responsive, performant web apps built with React, Next.js, and TailwindCSS. From landing pages to full-scale platforms.",
    highlights: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO Optimized",
    ],
    accent: "#3b82f6",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with React Native and Expo, featuring smooth 60fps animations and offline-first architecture.",
    highlights: ["React Native", "Expo", "Reanimated", "Redux"],
    accent: "#8b5cf6",
  },
  {
    icon: Server,
    title: "API & Backend",
    description:
      "Robust REST APIs and real-time services with .NET, SignalR, and SQL Server. Cloud deployments with Azure DevOps.",
    highlights: [".NET 6/8", "SignalR", "SQL Server", "Azure"],
    accent: "#14b8a6",
  },
  {
    icon: Database,
    title: "CMS & Integrations",
    description:
      "Headless CMS strategies with Strapi, CI/CD pipelines with Azure DevOps, and third-party service integrations for seamless workflows.",
    highlights: ["Strapi CMS", "Azure DevOps", "CI/CD", "Docker"],
    accent: "#f59e0b",
  },
];

export const ServicesSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-[#020617] text-white py-24 px-4 flex flex-col items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Database size={16} className="text-blue-400" />
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">
            What I offer
          </span>
          <Database size={16} className="text-blue-400" />
        </div>
        <h2 className="section-title text-4xl md:text-5xl">Services</h2>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto mt-4 leading-relaxed">
          End-to-end development solutions tailored to your project needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-4xl">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 * i }}
            className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-opacity-50 transition-all duration-500 overflow-hidden"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
              style={{
                boxShadow: `inset 0 0 0 1px ${service.accent}44, 0 8px 30px ${service.accent}10`,
              }}
            />

            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
              style={{ background: `${service.accent}15` }}
            >
              <service.icon size={20} style={{ color: service.accent }} />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {service.highlights.map((h) => (
                <span
                  key={h}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium border"
                  style={{
                    color: service.accent,
                    borderColor: `${service.accent}33`,
                    background: `${service.accent}10`,
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
