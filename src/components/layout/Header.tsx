import { useState, useEffect, useRef } from "react";
import { Home, User, FolderOpen } from "lucide-react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#project", label: "Projects", icon: FolderOpen },
];

export const Header: React.FC = () => {
  const [active, setActive] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);

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
    ["home", "about", "project"].forEach((id) => {
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
        className="skip-link absolute left-2 top-0 -translate-y-full focus:translate-y-0 bg-blue-600 text-white px-3 py-1 rounded shadow-lg transition-transform z-[100]"
      >
        Skip to content
      </a>

      {/* ── DESKTOP VERTICAL SIDEBAR ── */}
      <aside className="sidebar hidden lg:flex">
        {/* Top: Logo */}
        <a href="#home" className="sidebar-logo" aria-label="Go to top">
          <span>E</span>
          <span className="text-blue-400">T</span>
          <span className="text-blue-400 text-xs">.</span>
        </a>

        {/* Center: nav + progress line */}
        <nav className="sidebar-nav" aria-label="Main navigation">
          {/* progress line track */}
          <div className="sidebar-track">
            <div
              ref={lineRef}
              className="sidebar-progress"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* section dots + labels */}
          <div className="sidebar-links">
            {links.map(({ href, label }) => {
              const isCurrent = active === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`sidebar-link ${isCurrent ? "sidebar-link--active" : ""}`}
                  aria-label={label}
                >
                  <span className="sidebar-dot" />
                  <span className="sidebar-label">{label}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Bottom: socials */}
        <div className="sidebar-socials">
          <a
            href="https://github.com/edwin08torres"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="sidebar-social-link"
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
            className="sidebar-social-link"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </aside>

      {/* ── MOBILE TOP BAR ── */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-14 text-white bg-slate-950/70 backdrop-blur-md border-b border-white/5">
        <a href="#home" className="text-lg font-bold tracking-wide">
          ET<span className="text-blue-400">.</span>
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md hover:bg-white/10 transition"
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
      </header>

      {/* ── MOBILE FULL SCREEN MENU ── */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className="relative z-10 flex flex-col items-center justify-center h-full gap-3"
          aria-label="Mobile navigation"
        >
          {links.map(({ href, label, icon: Icon }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`mobile-nav-link group ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{
                transitionDelay: mobileOpen ? `${150 + i * 80}ms` : "0ms",
              }}
            >
              <span className="p-3 rounded-xl bg-blue-600/15 text-blue-400 group-hover:bg-blue-600/25 transition-colors">
                <Icon size={22} />
              </span>
              <span className="text-2xl font-semibold tracking-wide">
                {label}
              </span>
            </a>
          ))}

          <div
            className={`mt-8 flex gap-6 text-white/40 transition-all duration-300 ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "450ms" : "0ms" }}
          >
            <a
              href="https://github.com/edwin08torres"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
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
              className="hover:text-blue-400 transition"
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
