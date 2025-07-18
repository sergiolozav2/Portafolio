type SectionTitleProps = {
  text: string;
  className?: string;
};

export function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className={`text-xl font-medium text-stone-100 ${props.className}`}>
      {props.text}
    </h2>
  );
}
