import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const mark = (code: "es" | "en") =>
    language === code ? "underline decoration-2 underline-offset-4" : "";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`min-h-[48px] rounded-full border-[3px] border-ink bg-cream px-4 font-mono text-sm font-bold text-ink ${className}`}
      aria-label={`${t("nav.changeLanguage")} (${language.toUpperCase()})`}
    >
      <span className={mark("es")}>ES</span> · <span className={mark("en")}>EN</span>
    </button>
  );
};
