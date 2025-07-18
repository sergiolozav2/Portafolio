import { SectionTitle } from "../../Shared/components/SectionTitle";
import { SkillTag } from "../../Shared/components/SkillTag";
import { useTranslation } from "react-i18next";

export function SkillsSection() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full flex-col gap-4 text-xl">
      <SectionTitle text={`${t("skills.title")}`} />
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        <SkillTag text="React" />
        <SkillTag text="Node.js" />
        <SkillTag text="Javascript" />
        <SkillTag text="C#" />
        <SkillTag text="Docker" />
        <SkillTag text="AWS" /> <SkillTag text="Linux" />
        <SkillTag text="CSS" />
        <SkillTag text="Tailwind" />
        <SkillTag text="Git" />
        <SkillTag text="Express" />
        <SkillTag text="SQL" />
        <SkillTag text="Wordpress" />
        <SkillTag text="Elixir" />
        <SkillTag text="HTML" />
        <SkillTag text="Github Actions" />
        <SkillTag text="Playwright" />
      </div>
    </section>
  );
}
