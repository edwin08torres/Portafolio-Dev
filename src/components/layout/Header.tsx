import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageSwitcher } from "../common/LanguageSwitcher";

const links = [
  { href: "#sobre", key: "nav.about" },
  { href: "#proyectos", key: "nav.projects" },
  { href: "#nexol", key: "nav.nexol" },
  { href: "#experiencia", key: "nav.experience" },
  { href: "#servicios", key: "nav.services" },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <a
        href="#sobre"
        className="absolute left-2 top-0 z-[100] -translate-y-full inline-flex min-h-[44px] items-center rounded-full bg-sun px-4 font-mono text-sm font-bold text-ink focus:translate-y-2"
      >
        {t("nav.skipToContent")}
      </a>

      <header className="pointer-events-none sticky top-0 z-50 px-4 pt-5 sm:px-6">
        <nav
          aria-label={t("nav.main")}
          className="pop-box pointer-events-auto relative mx-auto flex max-w-[1280px] items-center justify-between gap-2 rounded-full bg-white py-2 pl-3 pr-2"
        >
          <a
            href="#inicio"
            aria-label={t("nav.home")}
            className="pop-logo flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-sun font-display text-[17px] font-black text-ink no-underline"
          >
            ET.
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {links.map(({ href, key }) => (
              <a key={href} href={href} className="pop-navlink">
                {t(key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a href="#contacto" className="pop-btn pop-btn-dark hidden sm:inline-flex">
              {t("nav.contact")}
              <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="menu-movil"
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink bg-cream text-ink lg:hidden"
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={2.5} aria-hidden="true" />
              ) : (
                <Menu size={22} strokeWidth={2.5} aria-hidden="true" />
              )}
            </button>
          </div>

          {mobileOpen && (
            <div
              id="menu-movil"
              className="pop-box absolute left-0 right-0 top-[calc(100%+12px)] flex flex-col gap-1 rounded-[28px] bg-white p-3 lg:hidden"
            >
              {links.map(({ href, key }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="pop-navlink min-h-[48px] text-base"
                >
                  {t(key)}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={closeMenu}
                className="pop-btn pop-btn-dark mt-1 justify-center sm:hidden"
              >
                {t("nav.contact")}
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
