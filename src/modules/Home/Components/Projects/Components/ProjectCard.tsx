import { SkillTag } from "../../../../Shared/components/SkillTag";
import { ImageType } from "../Types/ImageType";
import { ProjectImage } from "./ProjectImage";

type ProjectCardProps = {
  title: string;
  description: string;
  images: ImageType[];
  skills: string[];
};

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex flex-col">
      <ProjectImage images={props.images} />
      <div className="mt-1 flex flex-col-reverse justify-between font-semibold sm:flex-row sm:items-end">
        <p className="text-base text-stone-50">{props.title}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-3">
        {props.skills.map((skillName, index) => (
          <SkillTag text={skillName} key={index} />
        ))}
      </div>
    </div>
  );
}
