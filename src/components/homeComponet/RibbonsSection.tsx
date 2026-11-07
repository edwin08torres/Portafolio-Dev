import { useLanguage } from "../../context/LanguageContext";
import { stackRibbon } from "@/data/siteLinks";
import { useLoopPause } from "@/hooks/useLoopPause";

/**
 * Dos cintas cruzadas decorativas. Cada fila lleva el contenido duplicado y cada copia
 * lleva su propio relleno, así -50% coincide exacto con una copia y no hay salto al reiniciar.
 */
export const RibbonsSection = () => {
  const { t } = useLanguage();
  const ref = useLoopPause<HTMLDivElement>();
  const phrases = (t("ribbon.phrases") as string[]).join(" — ");
  const stackLine = `${stackRibbon.join(" ✦ ")} ✦`;

  return (
    <div ref={ref} aria-hidden="true" className="relative overflow-x-clip pb-4">
      <div className="-mx-10 -rotate-2 overflow-hidden border-y-[3px] border-ink bg-ink py-[18px]">
        <div className="anim-marquee flex w-max whitespace-nowrap font-display text-[34px] font-extrabold text-sun">
          <span className="px-5">{stackLine}</span>
          <span className="px-5">{stackLine}</span>
        </div>
      </div>
      <div className="-mx-10 -mt-1.5 rotate-[1.2deg] overflow-hidden border-b-[3px] border-ink bg-cobalt py-3.5">
        <div className="anim-marquee-rev flex w-max whitespace-nowrap font-mono text-xl font-bold text-white">
          <span className="px-5">{phrases} — {phrases} —</span>
          <span className="px-5">{phrases} — {phrases} —</span>
        </div>
      </div>
    </div>
  );
};
