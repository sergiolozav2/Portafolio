import { SkillTag } from "../../../../Shared/components/SkillTag";

type ProjectCardProps = {
  title: string;
  description: string;
  thumbnail: string;
  skills: string[];
};

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex flex-col">
      <img className="z-10" src={props.thumbnail} />
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
