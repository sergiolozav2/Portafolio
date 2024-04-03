import { SkillTag } from "../../../../Shared/components/SkillTag";
import { ProjectImage } from "./ProjectImage";

type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  skills: string[];
};

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex flex-col">
      <ProjectImage images={props.images} />
      <div className="mt-2 flex flex-col-reverse justify-between font-semibold sm:flex-row sm:items-end">
        <p className="text-stone-50">{props.title}</p>
      </div>
      <p className="mt-1 text-lg">{props.description}</p>
      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-3">
        {props.skills.map((skillName) => (
          <SkillTag text={skillName} />
        ))}
      </div>
    </div>
  );
}
