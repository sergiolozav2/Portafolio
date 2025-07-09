import { SkillTag } from "../../../../Shared/components/SkillTag";

type ExperieceCardProps = {
  title: string;
  timeframe: string;
  bulletpoints: string[];
  skills: string[];
};

export function ExperienceCard(props: ExperieceCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col-reverse justify-between font-semibold sm:flex-row sm:items-end">
        <p className="text-stone-50">{props.title}</p>
        <p className="text-sm text-stone-300">{props.timeframe}</p>
      </div>
      <ul className="mt-1 list-disc pl-5 text-lg text-stone-200">
        {props.bulletpoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-3">
        {props.skills.map((skillName, index) => (
          <SkillTag text={skillName} key={index} />
        ))}
      </div>
    </div>
  );
}
