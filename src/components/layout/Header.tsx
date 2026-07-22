import { useState, useEffect, useRef } from "react";
import { Home, User, Briefcase, Wrench, FolderOpen } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageSwitcher } from "../common/LanguageSwitcher";

const links = [
  { href: "#home", icon: Home },
  { href: "#about", icon: User },
  { href: "#experience", icon: Briefcase },
  { href: "#services", icon: Wrench },
  { href: "#project", icon: FolderOpen },
];

const navKeys: Record<string, string> = {
  "#home": "nav.home",
  "#about": "nav.about",
  "#experience": "nav.experience",
  "#services": "nav.services",
  "#project": "nav.projects",
};

export const Header: React.FC = () => {
  const [active, setActive] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ["home", "about", "experience", "services", "project"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: "-35% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#about"
        className="skip-link absolute left-2 top-0 -translate-y-full focus:translate-y-0 bg-[#a3e635] text-black px-3 py-1 font-mono text-xs font-bold rounded-[2px] z-[100]"
      >
        {t("nav.skipToContent")}
      </a>

      {/* Desktop Sidebar */}
      <aside className="sidebar hidden lg:flex">
        <a href="#home" className="sidebar-logo font-mono font-bold" aria-label="Go to top">
          <span className="text-white">E</span>
          <span className="text-[#a3e635]">T</span>
          <span className="text-[#a3e635] text-xs">.</span>
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <div className="sidebar-track">
            <div
              ref={lineRef}
              className="sidebar-progress"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          <div className="sidebar-links">
            {links.map(({ href }) => {
              const isCurrent = active === href;
              const label = t(navKeys[href]);
              return (
                <a
                  key={href}
                  href={href}
                  className={`sidebar-link ${isCurrent ? "sidebar-link--active" : ""}`}
                  aria-label={label}
                >
                  <span className="sidebar-dot" />
                  <span className="sidebar-label font-mono">{label}</span>
                </a>
              );
            })}
          </div>
        </nav>

        <div className="flex flex-col items-center mb-6">
          <LanguageSwitcher className="mb-6" />
          <div className="sidebar-socials">
            <a
              href="https://github.com/edwin08torres"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="sidebar-social-link text-zinc-400 hover:text-[#a3e635] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/edwintorrez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="sidebar-social-link text-zinc-400 hover:text-[#a3e635] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-[70] flex items-center justify-between px-5 h-14 text-white bg-[#080808] border-b border-zinc-800">
        <a href="#home" className="text-base font-mono font-bold tracking-wider">
          ET<span className="text-[#a3e635]">.</span>
        </a>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-[2px] bg-zinc-900 border border-zinc-700 text-zinc-200 transition flex items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`mobile-hamburger ${mobileOpen ? "mobile-hamburger--open" : ""}`}
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#050505]"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className="relative z-10 flex flex-col items-center justify-center h-full gap-4"
          aria-label="Mobile navigation"
        >
          {links.map(({ href, icon: Icon }, i) => {
            const label = t(navKeys[href]);
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`mobile-nav-link group flex items-center gap-4 px-6 py-3 rounded-[2px] border border-zinc-800 bg-[#121212] w-64 ${
                  mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${100 + i * 60}ms` : "0ms",
                }}
              >
                <span className="p-2 rounded-[2px] bg-[#080808] border border-zinc-800 text-[#a3e635]">
                  <Icon size={18} />
                </span>
                <span className="text-lg font-mono font-bold uppercase tracking-wider text-white">
                  {label}
                </span>
              </a>
            );
          })}

          <div
            className={`mt-6 flex gap-6 text-zinc-400 ${
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "400ms" : "0ms" }}
          >
            <a
              href="https://github.com/edwin08torres"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a3e635] transition"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/edwintorrez"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a3e635] transition"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
