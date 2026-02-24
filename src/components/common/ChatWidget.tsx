import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone, ExternalLink } from "lucide-react";

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
  options?: QuickReply[];
}

interface QuickReply {
  label: string;
  action: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    from: "bot",
    text: "Hey! 👋 I'm Edwin's portfolio assistant. How can I help you?",
    options: [
      { label: "📞 Contact info", action: "contact" },
      { label: "💼 Services", action: "services" },
      { label: "🚀 Projects", action: "projects" },
      { label: "📄 Download CV", action: "cv" },
    ],
  },
];

const RESPONSES: Record<string, ChatMessage> = {
  contact: {
    id: 0,
    from: "bot",
    text: "You can reach Edwin through:",
    options: [
      { label: "📧 Email", action: "email" },
      { label: "📱 WhatsApp", action: "whatsapp" },
      { label: "🔗 LinkedIn", action: "linkedin" },
      { label: "⬅️ Back to menu", action: "menu" },
    ],
  },
  email: {
    id: 0,
    from: "bot",
    text: "📧 at2899743@gmail.com\n\nClick below to send an email directly!",
    options: [
      { label: "✉️ Send Email", action: "open_email" },
      { label: "⬅️ Back", action: "contact" },
    ],
  },
  whatsapp: {
    id: 0,
    from: "bot",
    text: "📱 +505 8806-8133\n\nTap below to start a WhatsApp conversation!",
    options: [
      { label: "💬 Open WhatsApp", action: "open_whatsapp" },
      { label: "⬅️ Back", action: "contact" },
    ],
  },
  linkedin: {
    id: 0,
    from: "bot",
    text: "🔗 Connect with Edwin on LinkedIn for professional inquiries.",
    options: [
      { label: "🔗 Open LinkedIn", action: "open_linkedin" },
      { label: "⬅️ Back", action: "contact" },
    ],
  },
  services: {
    id: 0,
    from: "bot",
    text: "Edwin offers:\n\n🌐 Web Development (React, Next.js)\n📱 Mobile Apps (React Native)\n⚙️ API & Backend (.NET, Azure)\n🎨 UI/UX Implementation\n\nInterested in any of these?",
    options: [
      { label: "📞 Get in touch", action: "contact" },
      { label: "🚀 See projects", action: "projects" },
      { label: "⬅️ Back to menu", action: "menu" },
    ],
  },
  projects: {
    id: 0,
    from: "bot",
    text: "Check out Edwin's featured projects below! 👇\n\nScroll down to the Projects section or click to jump there.",
    options: [
      { label: "⬇️ Go to Projects", action: "scroll_projects" },
      { label: "📞 Contact", action: "contact" },
      { label: "⬅️ Back to menu", action: "menu" },
    ],
  },
  cv: {
    id: 0,
    from: "bot",
    text: "📄 Edwin's CV is ready for download! Click below.",
    options: [
      { label: "📥 Download CV", action: "download_cv" },
      { label: "⬅️ Back to menu", action: "menu" },
    ],
  },
  menu: INITIAL_MESSAGES[0],
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    ...INITIAL_MESSAGES,
  ]);
  const [idCounter, setIdCounter] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setHasNewMessage(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleQuickReply = (action: string) => {
    if (action === "open_email") {
      window.open(
        "mailto:at2899743@gmail.com?subject=Contact%20from%20Portfolio",
        "_blank",
      );
      return;
    }
    if (action === "open_whatsapp") {
      window.open(
        "https://wa.me/50588068133?text=Hi%20Edwin!%20I%20found%20your%20portfolio",
        "_blank",
      );
      return;
    }
    if (action === "open_linkedin") {
      window.open("https://www.linkedin.com/in/edwintorrez", "_blank");
      return;
    }
    if (action === "scroll_projects") {
      setIsOpen(false);
      document
        .getElementById("project")
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (action === "download_cv") {
      const a = document.createElement("a");
      a.href = "/doc/EdwinTorres_CV.pdf";
      a.download = "EdwinTorres_CV.pdf";
      a.click();
      return;
    }

    const response = RESPONSES[action];
    if (!response) return;

    const newId = idCounter;
    setIdCounter((c) => c + 1);

    setMessages((prev) => [...prev, { ...response, id: newId }]);
  };

  return (
    <>
      <motion.button
        onClick={() => {
          setIsOpen(true);
          setHasNewMessage(false);
        }}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-900/30 flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl hover:shadow-blue-900/40 ${isOpen ? "hidden" : ""}`}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
        {hasNewMessage && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-[#020617] animate-pulse" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[480px] max-h-[70vh] rounded-2xl border border-white/[0.08] bg-[#0a0f1e]/95 backdrop-blur-xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          >
            <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                  ET
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">
                    Edwin's Assistant
                  </p>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setMessages([...INITIAL_MESSAGES]);
                  setIdCounter(2);
                }}
                className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4 modal-scroll"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] ${msg.from === "user" ? "order-last" : ""}`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.from === "user"
                          ? "bg-blue-600 text-white rounded-br-md"
                          : "bg-white/[0.06] text-slate-300 rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.options && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {msg.options.map((opt) => (
                          <button
                            key={opt.label}
                            onClick={() => handleQuickReply(opt.action)}
                            className="px-3 py-1.5 rounded-xl text-xs font-medium border border-blue-500/25 text-blue-300 bg-blue-500/5 hover:bg-blue-500/15 hover:border-blue-500/40 transition-all"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="shrink-0 px-4 py-3 border-t border-white/[0.06] flex items-center justify-center gap-4 text-[10px] text-slate-600">
              <a
                href="mailto:at2899743@gmail.com"
                className="flex items-center gap-1 hover:text-slate-400 transition"
              >
                <Mail size={10} /> Email
              </a>
              <a
                href="https://wa.me/50588068133"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-slate-400 transition"
              >
                <Phone size={10} /> WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/edwintorrez"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-slate-400 transition"
              >
                <ExternalLink size={10} /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
