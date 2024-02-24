import { useEffect, useState } from "react";

interface TypeAnimationTextProps {
  className: string;
  text: string;
  duration: number;
}

export function TypeAnimationText(props: TypeAnimationTextProps) {
  const [text, setText] = useState("");
  console.log("Render");
  useEffect(() => {
    const step = props.duration / props.text.length;
    const interval = setInterval(() => {
      setText(props.text.slice(0, text.length + 1));
    }, step);

    if (props.text.length === text.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [props.duration, props.text, text]);

  return <span className={props.className}>{text}</span>;
}
