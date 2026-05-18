import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-blue-500/30 text-slate-400 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.12)] transition-all duration-300 ${className}`}
      aria-label={`Change language, current is ${language.toUpperCase()}`}
    >
      <Globe 
        size={13} 
        className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300 animate-pulse" 
      />
      <span className="text-[10px] font-black tracking-widest uppercase font-mono">
        {language === "en" ? "EN" : "ES"}
      </span>
    </motion.button>
  );
};
