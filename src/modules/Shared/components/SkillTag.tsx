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
      React: "#2d7c9c",
      Javascript: "#d97706",
      HTML: "#e45132",
      CSS: "#9333ea",
      Tailwind: "#1d4ed8",
      Git: "#44403c",
      Github: "#57534e",
      Express: "#15803d",
      NestJS: "#0c0a09",
      Linux: "#c2410c",
      SQL: "#dc2626",
      Wordpress: "#0284c7",
      Cypress: "#2f8e65",
      Flutter: "#125D9F",
      Dart: "#175384",
      Jest: "#B44263",
      Firebase: "#ce722b",
      Svelte: "#E74534",
    }[name] ?? "#0e7490"
  );
}
