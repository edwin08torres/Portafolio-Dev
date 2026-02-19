import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Heart,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#020617] text-slate-400 overflow-hidden">
      <div className="gradient-divider w-full" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-blue-600/3 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Let's Talk</h3>
            <p className="text-sm leading-relaxed">
              Do you have a project in mind or just want to say hello? Feel free
              to reach out.
            </p>
            <a
              href="mailto:at2899743@gmail.com?subject=Contact%20from%20Portfolio"
              className="btn-glow mt-2 inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-medium"
            >
              <Mail size={15} />
              Send Email
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 group">
                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-600/15 transition-colors">
                  <Mail size={14} className="text-blue-400" />
                </span>
                <a
                  href="mailto:at2899743@gmail.com"
                  className="hover:text-white transition"
                >
                  at2899743@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-600/15 transition-colors">
                  <Phone size={14} className="text-blue-400" />
                </span>
                <a
                  href="tel:+50588068133"
                  className="hover:text-white transition"
                >
                  +505 8806-8133
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-600/15 transition-colors">
                  <MapPin size={14} className="text-blue-400" />
                </span>
                Managua, Nicaragua
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Follow Me</h3>
            <div className="flex gap-3 mt-3">
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
                {
                  href: "https://twitter.com/VillegasAlex505",
                  label: "Twitter",
                  icon: Twitter,
                },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-blue-600/15 hover:border-blue-500/30 hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-divider w-full" />
      <div className="relative z-10 py-6 text-center text-xs text-slate-500">
        <p className="flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Edwin Torrez. Built with{" "}
          <Heart size={12} className="text-red-400 fill-red-400" /> and React
        </p>
      </div>
    </footer>
  );
};
