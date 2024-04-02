import { SectionTitle } from "../../Shared/components/SectionTitle";
import { SkillTag } from "../../Shared/components/SkillTag";

export function SkillsSection() {
  return (
    <div className="flex flex-col gap-4 text-xl">
      <SectionTitle text="> Habilidades" />
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        <SkillTag text="React" />
        <SkillTag text="Javascript" />
        <SkillTag text="HTML" />
        <SkillTag text="CSS" />
        <SkillTag text="Tailwind" />
        <SkillTag text="Linux" />
        <SkillTag text="Git" />
        <SkillTag text="Github" />
        <SkillTag text="Express" />
        <SkillTag text="NestJS" />
        <SkillTag text="Cypress" />
        <SkillTag text="SQL" />
        <SkillTag text="Wordpress" />
      </div>
    </div>
  );
}
