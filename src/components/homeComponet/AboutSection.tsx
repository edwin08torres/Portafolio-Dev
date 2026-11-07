import { useLanguage } from "../../context/LanguageContext";
import { MaskReveal } from "@/components/common/motion";

const principleSurfaces = ["bg-mint", "bg-bubble", "bg-white"];

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="mx-auto grid max-w-[1280px] scroll-mt-24 items-start gap-12 px-6 pb-16 pt-24 lg:grid-cols-2 lg:pt-[120px]"
    >
      <div className="flex flex-col gap-5">
        <span className="pop-tag self-start bg-sun">{t("about.tag")}</span>
        <h2 id="about-title" className="pop-display text-[clamp(36px,5.6vw,80px)] [overflow-wrap:anywhere]">
          <MaskReveal>
            {t("about.titleBefore")}
            <span className="text-cobalt">{t("about.titleHighlight")}</span>
            {t("about.titleAfter")}
          </MaskReveal>
        </h2>
      </div>

      <div className="flex flex-col gap-6 pt-3">
        <p
          className="text-xl leading-[1.6]"
          dangerouslySetInnerHTML={{ __html: t("about.description1") }}
        />
        <p
          className="text-xl leading-[1.6]"
          dangerouslySetInnerHTML={{ __html: t("about.description2") }}
        />
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {principleSurfaces.map((surface, i) => (
            <div
              key={i}
              className={`pop-box flex flex-col gap-3.5 rounded-3xl p-5 ${surface}`}
            >
              <h3 className="pop-display text-base [overflow-wrap:anywhere]">
                {t(`about.principles.${i}.title`)}
              </h3>
              <p className="text-[15px]">{t(`about.principles.${i}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
