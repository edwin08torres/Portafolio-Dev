import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { links } from "@/data/siteLinks";
import { useLoopPause } from "@/hooks/useLoopPause";
import { MaskReveal, PopBlock } from "@/components/common/motion";

export const NexolSection = () => {
  const { t } = useLanguage();
  const chips = t("nexol.chips") as string[];
  const ref = useLoopPause<HTMLElement>();
  const newTab = <span className="sr-only"> {t("nexol.newTab")}</span>;

  return (
    <section id="nexol" ref={ref} className="mx-auto max-w-[1280px] scroll-mt-24 px-6 pb-[110px] pt-6">
      <div className="relative grid items-center gap-12 overflow-hidden rounded-[32px] border-[3px] border-ink bg-nexol-navy p-[clamp(32px,5vw,64px)] text-white shadow-pop-lg lg:grid-cols-2">
        <div
          aria-hidden="true"
          className="anim-spin absolute -right-[120px] -top-[120px] h-[360px] w-[360px] rounded-full border-[3px] border-dashed border-nexol-green opacity-50"
        />

        <div className="relative flex flex-col gap-[22px]">
          <span className="pop-tag self-start bg-nexol-green">{t("nexol.tag")}</span>
          <h2 className="pop-display text-[clamp(32px,5.2vw,76px)] text-white [overflow-wrap:anywhere]">
            <MaskReveal>
              {t("nexol.titleBefore")}
              <PopBlock
                rotate={-2}
                className="rounded-[18px] border-[3px] border-ink bg-nexol-fog px-3.5 pb-1.5 text-nexol-navy"
              >
                {t("nexol.titleHighlight")}
              </PopBlock>
              {t("nexol.titleAfter")}
            </MaskReveal>
          </h2>
          <p className="max-w-[560px] text-xl leading-[1.55] text-nexol-text">{t("nexol.text")}</p>
          <a
            href={links.nexol}
            target="_blank"
            rel="noopener"
            className="pop-btn min-h-[56px] self-start bg-nexol-green px-7 text-[15px]"
          >
            {t("nexol.cta")}
            <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
            {newTab}
          </a>
        </div>

        <div className="relative flex flex-wrap content-center gap-3">
          {chips.map((chip) => (
            <a key={chip} href={links.nexol} target="_blank" rel="noopener" className="pop-chip">
              {chip}
              {newTab}
            </a>
          ))}
          <a
            href={links.nexol}
            target="_blank"
            rel="noopener"
            className="anim-bob-2 pop-box mt-[18px] flex min-h-[44px] w-full -rotate-3 [--r:-3deg] items-center justify-between gap-4 rounded-[22px] bg-nexol-fog px-6 py-[22px] text-nexol-navy no-underline"
          >
            <span className="pop-display text-[clamp(20px,2.4vw,26px)] text-nexol-navy">nexolsoft.com</span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nexol-navy text-nexol-green">
              <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />
            </span>
            {newTab}
          </a>
        </div>
      </div>
    </section>
  );
};

