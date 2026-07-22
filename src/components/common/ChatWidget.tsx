import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, User, Briefcase, Folder, FileText } from "lucide-react";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action: string) => {
    if (action === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (action === "services") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else if (action === "projects") {
      document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
    } else if (action === "cv") {
      const a = document.createElement("a");
      a.href = "/doc/Curriculum_EdwinTorrez.pdf";
      a.download = "Curriculum_EdwinTorrez.pdf";
      a.click();
    }
    setIsOpen(false);
  };

  const QUICK_ACTIONS = [
    { id: "contact", label: "Contact Info", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "cv", label: "Download CV", icon: FileText },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#a3e635] text-black border border-[#a3e635] flex items-center justify-center transition-all hover:bg-[#050505] hover:text-[#a3e635] shadow-none ${isOpen ? "hidden" : "flex"}`}
        aria-label="Open quick access panel"
      >
        <span className="font-mono font-black text-lg md:text-xl tracking-tighter">
          ET.
        </span>
      </button>

      {/* Quick Access Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[320px] max-w-[calc(100vw-2rem)] bg-[#050505] border border-zinc-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-[#0a0a0a]">
              <h3 className="text-[10px] md:text-xs font-mono font-bold text-white tracking-[0.2em] uppercase">
                Quick Access
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-[#a3e635] transition-colors"
                aria-label="Close panel"
              >
                <X size={16} />
              </button>
            </div>

            {/* Actions List */}
            <div className="flex flex-col">
              {QUICK_ACTIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleAction(item.id)}
                  className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 hover:bg-[#a3e635]/10 transition-colors group text-left"
                >
                  <div className="flex items-center gap-4">
                    <item.icon
                      size={14}
                      className="text-zinc-500 group-hover:text-[#a3e635] transition-colors"
                    />
                    <span className="text-[11px] md:text-xs font-mono tracking-widest text-zinc-300 group-hover:text-white uppercase">
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:text-[#a3e635] transition-all transform -translate-x-2 group-hover:translate-x-0"
                  />
                </button>
              ))}
            </div>

            {/* Footer Links */}
            <div className="px-5 py-4 bg-[#0a0a0a] flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              <a
                href="mailto:at2899743@gmail.com"
                className="hover:text-[#a3e635] transition-colors"
              >
                Email
              </a>
              <span className="text-zinc-800">/</span>
              <a
                href="https://wa.me/50588068133"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#a3e635] transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-zinc-800">/</span>
              <a
                href="https://www.linkedin.com/in/edwintorrez"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#a3e635] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
