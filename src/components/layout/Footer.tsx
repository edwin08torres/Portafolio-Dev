import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-zinc-800/80">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
        <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#a3e635] uppercase">
          05 — GET IN TOUCH
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-none tracking-tight"
        >
          {t("footer.ctaTitle1")}
          <span className="text-[#a3e635]">{t("footer.ctaTitleHighlight")}</span>
          {t("footer.ctaTitle2")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed whitespace-pre-line"
        >
          {t("footer.ctaText")}
        </motion.p>

        <motion.a
          href="mailto:at2899743@gmail.com?subject=Contact%20from%20Portfolio"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-[#a3e635] text-black font-bold border border-[#a3e635] px-8 py-4 rounded-[2px] text-xs font-mono uppercase tracking-widest inline-flex items-center gap-3 hover:bg-[#b5ff14] transition-all"
        >
          <Mail size={16} />
          {t("footer.sendEmail")}
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex gap-4 mt-4"
        >
          {[
            {
              href: "https://github.com/edwin08torres",
              label: "GitHub",
              icon: Github,
            },
            {
              href: "https://www.linkedin.com/in/edwintorrez",
              label: "LinkedIn",
              icon: Linkedin,
            },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3.5 rounded-[2px] bg-[#121212] border border-zinc-800 text-zinc-400 hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <div className="w-full pt-8 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <span>© {new Date().getFullYear()} Edwin Torrez. {t("footer.rights")}</span>
          <span>{t("footer.builtBy")}</span>
        </div>
      </div>
    </footer>
  );
};
