import { Cloud, Code2, Server, Smartphone } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { MaskReveal, Reveal } from "@/components/common/motion";

const services = [
  { icon: Code2, surface: "bg-cobalt text-white" },
  { icon: Smartphone, surface: "bg-bubble" },
  { icon: Server, surface: "bg-sun" },
  { icon: Cloud, surface: "bg-mint" },
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="servicios"
      className="mx-auto flex max-w-[1280px] scroll-mt-24 flex-col gap-11 px-6 pb-20 pt-[110px]"
    >
      <div className="flex flex-col gap-4">
        <span className="pop-tag self-start bg-sun">{t("services.tag")}</span>
        <h2 className="pop-display text-[clamp(36px,6.4vw,96px)]">
          <MaskReveal>
            {t("services.titleBefore")}
            <span className="pop-outline-3 text-tomato-text">{t("services.titleHighlight")}</span>
          </MaskReveal>
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6">
        {services.map(({ icon: Icon, surface }, i) => (
          <Reveal key={i} delay={i * 0.1} bouncy className="flex">
          <div className={`pop-box pop-service flex flex-1 flex-col gap-3.5 rounded-3xl p-7 ${surface}`}>
            <Icon size={40} strokeWidth={2} aria-hidden="true" />
            <h3 className="pop-display text-2xl [overflow-wrap:anywhere]">
              {t(`services.items.${i}.title`)}
            </h3>
            <p className="text-[17px] leading-normal">{t(`services.items.${i}.description`)}</p>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
