import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

const dotColors = ["bg-sun", "bg-mint", "bg-bubble", "bg-cobalt", "bg-tomato"];
const frameShadows = [
  "shadow-shot-sun",
  "shadow-shot-mint",
  "shadow-shot-bubble",
  "shadow-shot-cobalt",
  "shadow-shot-tomato",
];
const thumbColors = [
  "bg-sun",
  "bg-mint",
  "bg-bubble",
  "bg-cobalt",
  "bg-tomato",
];

export default function ProjectGalleryModal({
  open,
  onClose,
  images,
  title,
}: Props) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const touchX = useRef<number | null>(null);
  const activeThumb = useRef<HTMLButtonElement | null>(null);

  const total = images.length;
  const pad = (n: number) => String(n);

  // Cada vez que se abre vuelve a la primera captura
  useEffect(() => {
    if (open) {
      setIndex(0);
      setDir(1);
    }
  }, [open, images]);

  const go = useCallback(
    (to: number, direction?: number) => {
      if (total === 0) return;
      const next = (to + total) % total;
      setDir(direction ?? (to >= index ? 1 : -1));
      setIndex(next);
    },
    [index, total],
  );

  useEffect(() => {
    activeThumb.current?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: reduce ? "auto" : "smooth",
    });
  }, [index, reduce, open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1, -1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1, 1);
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
  };

  const captureName = (i: number) => `${t("projects.modal.capture")} ${i + 1}`;
  const nextSrc = images[(index + 1) % Math.max(total, 1)];
  const slide = reduce ? 0 : 24;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <AnimatePresence>
        {open && total > 0 && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[80] bg-ink"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: reduce ? 0 : 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: reduce ? 0 : 0.15 },
                }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content
              asChild
              forceMount
              onKeyDown={onKeyDown}
              onOpenAutoFocus={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLElement).focus();
              }}
            >
              <motion.div
                tabIndex={-1}
                className="fixed inset-0 z-[90] flex flex-col overflow-hidden bg-ink text-cream outline-none"
                initial={{
                  opacity: 0,
                  y: reduce ? 0 : 24,
                  scale: reduce ? 1 : 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: reduce ? 0 : 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: reduce ? 0 : 0.15 },
                }}
              >
                {/* Arriba */}
                <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-12 sm:py-7">
                  <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
                    <DialogPrimitive.Title className="rounded-full border-[3px] border-ink bg-sun px-[18px] py-2.5 font-display text-base font-black text-ink shadow-[4px_4px_0_theme(colors.cream)] sm:text-lg [overflow-wrap:anywhere]">
                      {title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description
                      className="font-mono text-[15px] font-bold"
                      aria-live="polite"
                    >
                      {t("projects.modal.gallery")} · {pad(index + 1)} /{" "}
                      {pad(total)}
                    </DialogPrimitive.Description>
                  </div>
                  <DialogPrimitive.Close
                    aria-label={t("projects.modal.closeGallery")}
                    className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-tomato shadow-[4px_4px_0_theme(colors.cream)]"
                  >
                    <X size={22} strokeWidth={3} aria-hidden="true" />
                  </DialogPrimitive.Close>
                </div>

                {/* Centro */}
                <div className="flex min-h-0 flex-1 items-center justify-center gap-7 px-5 sm:px-12">
                  <button
                    type="button"
                    onClick={() => go(index - 1, -1)}
                    aria-label={t("projects.modal.prevCapture")}
                    className="hidden h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-cream text-ink shadow-[4px_4px_0_theme(colors.cream)] md:flex"
                  >
                    <ChevronLeft size={24} strokeWidth={3} aria-hidden="true" />
                  </button>

                  <figure
                    className="m-0 flex min-h-0 w-full max-w-[1000px] flex-col gap-4"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                  >
                    <div
                      className={`flex max-h-[min(540px,58vh)] min-h-[200px] flex-col overflow-hidden rounded-3xl border-[3px] border-ink bg-white ${frameShadows[index % frameShadows.length]}`}
                    >
                      <div className="flex h-10 shrink-0 items-center gap-2 border-b-[3px] border-ink bg-cream px-4">
                        <span className="h-[13px] w-[13px] rounded-full border-2 border-ink bg-tomato" />
                        <span className="h-[13px] w-[13px] rounded-full border-2 border-ink bg-sun" />
                        <span className="h-[13px] w-[13px] rounded-full border-2 border-ink bg-mint" />
                      </div>
                      <div className="relative min-h-0 flex-1 overflow-hidden bg-[#F7F3EA]">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.img
                            key={index}
                            src={images[index]}
                            alt={`${title} – ${captureName(index)}`}
                            loading="eager"
                            decoding="async"
                            className="mx-auto block max-h-[min(500px,52vh)] w-full object-contain"
                            initial={{ opacity: 0, x: dir * slide }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: { duration: reduce ? 0 : 0.25 },
                            }}
                            exit={{
                              opacity: 0,
                              x: -dir * slide,
                              transition: { duration: reduce ? 0 : 0.12 },
                            }}
                          />
                        </AnimatePresence>
                      </div>
                    </div>
                    <figcaption className="flex items-center gap-3">
                      <span
                        className={`h-3.5 w-3.5 shrink-0 rounded-full border-2 border-cream ${dotColors[index % dotColors.length]}`}
                      />
                      <span className="pop-display text-[clamp(18px,2.4vw,26px)] text-cream">
                        {captureName(index)}
                      </span>
                    </figcaption>
                    {/* Precarga de la siguiente captura */}
                    {nextSrc && total > 1 && (
                      <img
                        src={nextSrc}
                        alt=""
                        aria-hidden="true"
                        loading="eager"
                        className="hidden"
                      />
                    )}
                  </figure>

                  <button
                    type="button"
                    onClick={() => go(index + 1, 1)}
                    aria-label={t("projects.modal.nextCapture")}
                    className="hidden h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-sun text-ink shadow-[4px_4px_0_theme(colors.cream)] md:flex"
                  >
                    <ChevronRight
                      size={24}
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Miniaturas */}
                <div className="overflow-x-auto px-5 pb-8 pt-6 sm:px-12">
                  <div className="mx-auto flex w-max gap-3.5 px-2 pt-3">
                    {images.map((src, i) => {
                      const active = i === index;
                      return (
                        <button
                          key={`${src}-${i}`}
                          ref={active ? activeThumb : undefined}
                          type="button"
                          onClick={() => go(i)}
                          aria-label={`${t("projects.modal.viewCapture")} ${captureName(i)}`}
                          aria-current={active}
                          className={`flex w-[150px] shrink-0 flex-col overflow-hidden rounded-[14px] border-[3px] border-ink bg-white p-0 text-left transition-[transform,opacity] duration-150 ${
                            active
                              ? "-translate-y-1.5 outline outline-4 outline-offset-4 outline-cream"
                              : "opacity-70"
                          }`}
                        >
                          <span
                            className={`block h-[70px] w-full overflow-hidden border-b-[3px] border-ink ${thumbColors[i % thumbColors.length]}`}
                          >
                            <img
                              src={src}
                              alt=""
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover object-top"
                            />
                          </span>
                          <span className="px-2.5 py-2 font-mono text-xs font-bold text-ink">
                            {captureName(i)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
