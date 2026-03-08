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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col"
        >
          <div
            className="absolute inset-0 bg-[#06091280]"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            onClick={onClose}
          />

          <div className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5">
            <h2 className="text-lg lg:text-xl font-bold text-white/90 tracking-tight">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.12] transition-colors"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto px-6 lg:px-12 pb-12">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {images.map((src, i) => (
                <motion.div
                  key={`${src}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="break-inside-avoid"
                >
                  <div className="overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <img
                      src={src}
                      alt={`${title} – ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover"
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
