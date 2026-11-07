import { ArrowDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { stats } from "@/data/aboutData";
import { useLoopPause } from "@/hooks/useLoopPause";
import { CountUp, MaskReveal, PopBlock, Reveal } from "@/components/common/motion";
import { motion, useReducedMotion } from "framer-motion";

const Star = ({ className, fill }: { className: string; fill: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
    <path
      d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const HomeHeroSection = () => {
  const { t } = useLanguage();
  const [projectsStat, experienceStat] = stats;
  const sectionRef = useLoopPause<HTMLElement>();
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative mx-auto grid max-w-[1280px] scroll-mt-24 items-center gap-12 px-6 pb-24 pt-14 lg:grid-cols-2 lg:gap-12 lg:pt-[72px]"
    >
      <div className="relative z-[2] flex flex-col gap-7">
        <h1 className="pop-display text-[clamp(48px,8.4vw,132px)]">
          <MaskReveal onMount delay={0}>
            <span className="block">{t("hero.line1")}</span>
          </MaskReveal>
          <MaskReveal onMount delay={0.08}>
            <span className="block">
              {t("hero.line2")}{" "}
              <PopBlock
                onMount
                drop
                rotate={-3}
                delay={0.25}
                className="rounded-3xl border-4 border-ink bg-cobalt px-[18px] pb-2 text-white shadow-[8px_8px_0_theme(colors.ink)]"
              >
                {t("hero.name")}
              </PopBlock>
            </span>
          </MaskReveal>
        </h1>

        <Reveal onMount delay={0.4} y={24}>
          <p className="max-w-[560px] text-[clamp(20px,2vw,26px)] font-medium leading-[1.4]">
            {t("hero.introBefore")}
            <strong className="bg-sun px-1.5">{t("hero.introWeb")}</strong>
            {t("hero.introMid")}
            <strong className="bg-bubble px-1.5">{t("hero.introMobile")}</strong>
            {t("hero.introAfter")}
          </p>
        </Reveal>

        <Reveal onMount delay={0.5} y={24} className="flex flex-wrap gap-3.5">
          <a href="#proyectos" className="pop-btn pop-btn-dark">
            {t("hero.viewProjects")}
            <ArrowDown size={18} strokeWidth={2.5} aria-hidden="true" />
          </a>
          <a href="#contacto" className="pop-btn bg-sun">
            {t("hero.writeMe")}
          </a>
        </Reveal>

        <Reveal onMount delay={0.6} y={24} className="flex flex-wrap gap-3.5">
          <div className="pop-box flex items-baseline gap-2.5 rounded-[20px] bg-white px-[22px] py-3.5">
            <span className="pop-display text-[40px] text-cobalt">
              <CountUp value={projectsStat.value} suffix="+" />
            </span>
            <span className="font-mono text-[13px] font-bold">{t("hero.stats.projects")}</span>
          </div>
          <div className="pop-box flex items-baseline gap-2.5 rounded-[20px] bg-white px-[22px] py-3.5">
            <span className="pop-display text-[40px] text-tomato-text">
              <CountUp value={experienceStat.value} suffix="+" />
            </span>
            <span className="font-mono text-[13px] font-bold">{t("hero.stats.experience")}</span>
          </div>
        </Reveal>
      </div>

      <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[520px]">
        <div
          aria-hidden="true"
          className="anim-spin absolute h-[300px] w-[300px] rounded-full border-[3px] border-dashed border-ink opacity-[0.35] sm:h-[440px] sm:w-[440px]"
        />
        <div
          aria-hidden="true"
          className="absolute h-[250px] w-[250px] rounded-full border-[3px] border-ink bg-tomato sm:h-[360px] sm:w-[360px]"
        />

        {/* Entrada del sticker (escala con rebote); el bucle de balanceo va en el hijo */}
        <motion.div
          className="relative h-[295px] w-[260px] sm:h-[420px] sm:w-[370px]"
          initial={reduce ? false : { scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.3 }}
        >
          <div className="anim-rock pop-photo relative h-full w-full rotate-[4deg]">
            <img
              src="/edwin-sticker.webp"
              alt={t("hero.photoAlt")}
              width={370}
              height={420}
              decoding="async"
              className="pop-photo-shadow block h-full w-full object-contain"
            />
            <Star className="anim-twinkle absolute -right-7 top-10 h-[54px] w-[54px] text-ink" fill="#FFFFFF" />
            <Star className="anim-twinkle-2 absolute -left-5 bottom-[60px] h-10 w-10 text-ink" fill="#FF5B37" />
            <span className="absolute -bottom-[18px] right-6 -rotate-[4deg] rounded-full bg-ink px-3.5 py-1.5 font-mono text-[13px] font-bold text-sun">
              &lt;/&gt; Edwin.tsx
            </span>
            <span className="anim-hi absolute -left-8 -top-[26px] z-10 -rotate-[8deg] rounded-[22px_22px_22px_4px] border-[3px] border-ink bg-white px-5 py-3 font-display text-[22px] font-black shadow-pop-sm">
              {t("hero.hello")}
            </span>
          </div>
        </motion.div>

        <span className="anim-bob-1 pop-sticker left-0 top-[120px] -rotate-[8deg] bg-cobalt text-white [--r:-8deg] sm:left-2.5">
          {t("hero.stickers.fullStack")}
        </span>
        <span className="anim-bob-2 pop-sticker right-0 top-[90px] rotate-6 bg-bubble [--r:6deg]">
          {t("hero.stickers.mobile")}
        </span>
        <span className="anim-bob-3 pop-sticker bottom-[70px] left-0 -rotate-[4deg] bg-white [--r:-4deg]">
          {t("hero.stickers.reactNet")}
        </span>
        <span className="anim-bob-1 pop-sticker bottom-[30px] right-5 rotate-[8deg] bg-mint [--r:8deg]">
          {t("hero.stickers.flutterRn")}
        </span>
      </div>
    </section>
  );
};
