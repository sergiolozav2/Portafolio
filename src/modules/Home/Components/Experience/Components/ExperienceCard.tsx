import { SkillTag } from "../../../../Shared/components/SkillTag";

type ExperieceCardProps = {
  title: string;
  timeframe: string;
  description: string;
  skills: string[];
};

export function ExperienceCard(props: ExperieceCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col-reverse justify-between font-semibold sm:flex-row sm:items-end">
        <p className="text-stone-50">{props.title}</p>
        <p className="text-sm text-stone-300">{props.timeframe}</p>
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
