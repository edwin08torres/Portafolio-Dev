import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#020617] text-white overflow-hidden">
      <div className="gradient-divider w-full" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="footer-cta-title font-black uppercase leading-none tracking-tight"
        >
          {t("footer.ctaTitle1")}
          <span className="hero-name-gradient">{t("footer.ctaTitleHighlight")}</span>
          {t("footer.ctaTitle2")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed whitespace-pre-line"
        >
          {t("footer.ctaText")}
        </motion.p>

        <motion.a
          href="mailto:at2899743@gmail.com?subject=Contact%20from%20Portfolio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="btn-glow inline-flex items-center gap-2.5 text-white px-8 py-4 rounded-2xl text-sm font-semibold tracking-wide"
        >
          <Mail size={16} />
          {t("footer.sendEmail")}
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4"
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
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/15 text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        <div className="w-full pt-6 border-t border-white/5 text-xs text-slate-650 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Edwin Torrez. {t("footer.rights")}</span>
          <span>{t("footer.builtBy")}</span>
        </div>
      </div>
    </footer>
  );
};
