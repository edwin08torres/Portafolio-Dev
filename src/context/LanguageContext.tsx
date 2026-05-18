import React, { createContext, useState, useContext } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, any> = { en, es };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang");
      return saved === "es" || saved === "en" ? saved : "en";
    } catch {
      return "en";
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
    } catch (e) {
      console.warn("Could not save language preference:", e);
    }
  };

  const t = (key: string): any => {
    const keys = key.split(".");
    
    // Attempt translation in selected language
    let current: any = translations[language];
    let found = true;
    for (const k of keys) {
      if (current === null || current === undefined || current[k] === undefined) {
        found = false;
        break;
      }
      current = current[k];
    }

    if (found) {
      return current;
    }

    // Fallback to English
    let fallback: any = translations["en"];
    for (const k of keys) {
      if (fallback === null || fallback === undefined || fallback[k] === undefined) {
        return key; // return key if not found in English either
      }
      fallback = fallback[k];
    }
    return fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
