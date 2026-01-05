import { SectionTitle } from "../../../Shared/components/SectionTitle";
import { ExperienceCard } from "./Components/ExperienceCard";
import { useTranslation } from "react-i18next";

export function ExperienceSection() {
  const { t } = useTranslation();
  return (
    <section
      className="flex scroll-m-24 flex-col gap-4 text-xl"
      id="experience-section"
    >
      <SectionTitle text={`${t("experience_title")}`} />
      <div className="flex flex-col gap-12">
        <ExperienceCard
          title={t("experience_pjsw_title")}
          timeframe={t("experience_pjsw_timeframe")}
          bulletpoints={[
            t("experience_pjsw_bullet_1"),
            t("experience_pjsw_bullet_2"),
            t("experience_pjsw_bullet_3"),
          ]}
          skills={[
            "React",
            "Next.js",
            "AWS",
            "Node.js",
            "CSS",
            "MUI",
            "Playwright",
            "Docker",
            "Linux",
            "Nx",
          ]}
        />
        <ExperienceCard
          title={t("experience_cinavar_title")}
          timeframe={t("experience_cinavar_timeframe")}
          bulletpoints={[
            t("experience_cinavar_bullet_1"),
            t("experience_cinavar_bullet_2"),
          ]}
          skills={[
            "React",
            "Express",
            "Git",
            "Github Actions",
            "Digital Ocean",
            "Linux",
            "SQL",
            "MongoDB",
            "Docker",
          ]}
        />
        <ExperienceCard
          title={t("experience_soyyodigital_title")}
          timeframe={t("experience_soyyodigital_timeframe")}
          bulletpoints={[
            t("experience_soyyodigital_bullet_1"),
            t("experience_soyyodigital_bullet_2"),
          ]}
          skills={[
            "React",
            "Jest",
            "Wordpress",
            "Git",
            "HTML",
            "CSS",
            "Tailwind",
          ]}
        />
        <ExperienceCard
          title={t("experience_transformacion_title")}
          timeframe={t("experience_transformacion_timeframe")}
          bulletpoints={[t("experience_transformacion_bullet_1")]}
          skills={["Flutter", "Dart", "Firebase", "Git"]}
        />
      </div>
    </section>
  );
}
