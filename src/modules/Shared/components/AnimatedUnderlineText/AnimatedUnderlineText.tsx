import "./HoverUnderline.css";

type AnimatedUnderlineTextProps = {
  className?: string;
  children: React.ReactNode;
};
export function AnimatedUnderlineText(props: AnimatedUnderlineTextProps) {
  return (
    <div className={`hover-underline ${props.className}`}>{props.children}</div>
  );
}
