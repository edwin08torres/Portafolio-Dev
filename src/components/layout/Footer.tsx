import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { links } from "@/data/siteLinks";
import { useLoopPause } from "@/hooks/useLoopPause";
import { MaskReveal, PopBlock } from "@/components/common/motion";

export const Footer = () => {
  const { t } = useLanguage();
  const ref = useLoopPause<HTMLElement>();

  return (
    <section id="contacto" ref={ref} className="scroll-mt-24 px-6 pt-10">
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-8 overflow-hidden rounded-t-[40px] border-[3px] border-b-0 border-ink bg-sun px-8 pb-[72px] pt-36 text-center sm:pt-24 md:pt-[96px]">
        <span className="anim-bob-2 pop-sticker left-[6%] top-6 -rotate-[10deg] bg-bubble [--r:-10deg] sm:top-9">
          {t("footer.stickerIdea")}
        </span>
        <span className="anim-bob-3 pop-sticker right-[6%] top-[84px] rotate-[8deg] bg-white [--r:8deg] sm:top-[60px]">
          {t("footer.stickerFast")}
        </span>

        <h2 className="pop-display text-[clamp(36px,9vw,150px)]">
          <MaskReveal>{t("footer.ctaTitle1")}</MaskReveal>
          <MaskReveal delay={0.08}>
            <PopBlock rotate={-2} delay={0.4} className="rounded-[28px] bg-ink px-6 pb-2.5 text-sun">
              {t("footer.ctaTitleHighlight")}
            </PopBlock>
          </MaskReveal>
        </h2>

        <p className="max-w-[560px] text-[22px] font-medium leading-normal">{t("footer.ctaText")}</p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <a href={links.email} className="pop-btn pop-btn-dark min-h-[60px] justify-center px-5 text-[15px] sm:px-[30px] sm:text-base">
            <Mail size={20} aria-hidden="true" />
            {t("footer.sendEmail")}
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="pop-btn min-h-[60px] w-[60px] justify-center p-0"
          >
            <Github size={22} aria-hidden="true" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="pop-btn min-h-[60px] w-[60px] justify-center p-0"
          >
            <Linkedin size={22} aria-hidden="true" />
          </a>
        </div>
      </div>

      <footer className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 border-[3px] border-ink bg-ink px-8 py-[22px] font-mono text-[13px] text-cream">
        <span>
          © {new Date().getFullYear()} {t("footer.copyright")}
        </span>
        <span>{t("footer.madeWith")}</span>
      </footer>
    </section>
  );
};
