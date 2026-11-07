import { useLanguage } from "../../context/LanguageContext";
import { experiencesConfig } from "@/data/experienceData";
import { MaskReveal, Reveal } from "@/components/common/motion";

/** Las 3 tarjetas de la página (Freelance sigue en los datos, pero no se muestra). */
const cards = [
  { id: "fusionpax", index: 0, shadow: "shadow-pop-cobalt", tilt: "-rotate-1", tagBg: "bg-sun" },
  { id: "grupomonge", index: 1, shadow: "shadow-pop-tomato", tilt: "rotate-1", tagBg: "bg-bubble" },
  { id: "logacode", index: 2, shadow: "shadow-pop-mint", tilt: "-rotate-[0.6deg]", tagBg: "bg-mint" },
];

export const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="experiencia"
      className="scroll-mt-24 border-t-[3px] border-ink bg-ink px-6 py-[110px] text-cream"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="pop-tag self-start bg-mint">{t("experience.tag")}</span>
          <h2 className="pop-display text-[clamp(36px,6.4vw,96px)] text-cream">
            <MaskReveal>
              {t("experience.titleBefore")}
              <span className="text-sun">{t("experience.titleHighlight")}</span>
            </MaskReveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          {cards.map(({ id, index, shadow, tilt, tagBg }) => {
            // Las fechas salen de los datos que ya tenía el sitio (experience.items.*.period)
            const config = experiencesConfig.find((c) => c.id === id);
            if (!config) return null;
            const bullets = t(`experience.cards.${index}.bullets`) as string[];
            return (
              <Reveal key={id} delay={index * 0.12} bouncy className="flex">
              <article
                className={`flex flex-1 flex-col gap-4 rounded-3xl border-[3px] border-cream bg-cream p-7 text-ink ${shadow} ${tilt}`}
              >
                <span className={`pop-tag self-start ${tagBg}`}>{t(`experience.cards.${index}.tag`)}</span>
                <h3 className="pop-display text-[30px]">{t(`experience.items.${index}.company`)}</h3>
                <span className="font-mono text-sm font-bold text-cobalt">
                  {t(`experience.items.${index}.role`)}
                </span>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-[17px] leading-[1.45]">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
