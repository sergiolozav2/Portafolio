export interface SkillTagProps {
  text: string;
}

export function SkillTag(props: SkillTagProps) {
  return (
    <div
      className="rounded-md px-1 py-0.5 text-sm font-semibold text-stone-100 sm:text-base"
      style={{
        backgroundColor: mapSkillToColor(props.text),
      }}
    >
      {props.text}
    </div>
  );
}

function mapSkillToColor(name: string) {
  return (
    {
      React: "#28708C",
      Javascript: "#9F5704",
      HTML: "#BD4027",
      CSS: "#9333ea",
      Tailwind: "#1d4ed8",
      Git: "#44403c",
      Github: "#57534e",
      Express: "#15803d",
      NestJS: "#0c0a09",
      Linux: "#c2410c",
      SQL: "#C22222",
      Wordpress: "#0273AC",
      Cypress: "#287A56",
      Flutter: "#125D9F",
      Dart: "#175384",
      Jest: "#B44263",
      Firebase: "#A45A21",
      Svelte: "#BF3A2C",
    }[name] ?? "#0e7490"
  );
}
