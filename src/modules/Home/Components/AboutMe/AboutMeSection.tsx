import { Trans, useTranslation } from "react-i18next";
import { SectionTitle } from "../../../Shared/components/SectionTitle";

export function AboutMeSection() {
  const { t } = useTranslation();
  return (
    <section
      className="flex scroll-m-24 flex-col gap-4 text-lg"
      id="about-me-section"
    >
      <SectionTitle text={`${t("about_me_title")}`} />
      <p>
        <Trans
          i18nKey="about_me_paragraph_1"
          components={[
            <strong className="font-medium text-stone-100" />,
            <strong className="font-medium text-stone-100" />,
          ]}
        />
      </p>
      <p>{t("about_me_paragraph_2")}</p>
    </section>
  );
}
