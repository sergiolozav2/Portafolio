type SectionTitleProps = {
  text: string;
  className?: string;
};

export function SectionTitle(props: SectionTitleProps) {
  return <h2 className={`text-xl font-semibold text-stone-200 ${props.className}`}>{props.text}</h2>;
}
