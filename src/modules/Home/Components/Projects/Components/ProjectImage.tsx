import { useState } from "react";
import { ImageType } from "../Types/ImageType";

type ProjectImageProps = {
  images: ImageType[];
};
export function ProjectImage(props: ProjectImageProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNext() {
    if (imageIndex === props.images.length - 1) return;
    setImageIndex(imageIndex + 1);
  }

  function handleGoBack() {
    if (imageIndex === 0) return;
    setImageIndex(imageIndex - 1);
  }
  const image = props.images[imageIndex]
  return (
    <div className="relative z-10">
      <img className="rounded-md" src={image.url} alt={image.alt} />
      <SlideButton
        character=">"
        side="right"
        max={props.images.length}
        position={imageIndex}
        onClick={handleNext}
      />
      <SlideButton
        character="<"
        side="left"
        max={props.images.length}
        position={imageIndex}
        onClick={handleGoBack}
      />
    </div>
  );
}

type SlideButtonProps = {
  position: number;
  max: number;
  side: "left" | "right";
  character: string;
  onClick: () => void;
};
function SlideButton(props: SlideButtonProps) {
  const isFirst = props.position === 0;
  const isLast = props.position === props.max - 1;
  const showLeft = props.side === "left" && !isFirst;
  const showRight = props.side === "right" && !isLast;
  const alignment = props.side === "left" ? "left-0" : "right-0";
  return (
    (showLeft || showRight) && (
      <button
        className={`absolute top-1/2 font-semibold -translate-y-1/2 bg-stone-800/20 p-1.5 text-black ${alignment}`}
        onClick={props.onClick}
      >
        {props.character}
      </button>
    )
  );
}
