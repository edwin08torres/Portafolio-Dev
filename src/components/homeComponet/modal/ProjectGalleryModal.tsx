import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export default function ProjectGalleryModal({
  open,
  onClose,
  images,
  title,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[150] flex flex-col bg-[#050505]/95"
        >
          <div
            className="absolute inset-0 bg-[#050505]/95"
            onClick={onClose}
          />

          <div className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5 border-b border-zinc-800 bg-[#080808]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#a3e635]" />
              <h2 className="text-base lg:text-lg font-mono font-bold uppercase tracking-wider text-white">
                {title} — GALLERY
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-[2px] bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-[#a3e635] hover:border-[#a3e635] transition-colors"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto px-6 lg:px-12 py-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
              {images.map((src, i) => (
                <motion.div
                  key={`${src}-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.05,
                    duration: 0.3,
                  }}
                  className="break-inside-avoid"
                >
                  <div className="overflow-hidden rounded-[2px] bg-[#121212] border border-zinc-800 p-2 hover:border-zinc-700 transition-colors">
                    <img
                      src={src}
                      alt={`${title} – ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover rounded-[2px]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
