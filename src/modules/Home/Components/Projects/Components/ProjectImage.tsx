import { useState } from "react";
import { ImageType } from "../Types/ImageType";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/Dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ArrowLeft } from "lucide-react";

type ProjectImageProps = {
  images: ImageType[];
};
export function ProjectImage(props: ProjectImageProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  function handleNext() {
    if (imageIndex === props.images.length - 1) return;
    setImageIndex(imageIndex + 1);
  }

  function handleGoBack() {
    if (imageIndex === 0) return;
    setImageIndex(imageIndex - 1);
  }
  return (
    <div className="relative z-10">
      <Dialog open={open} onOpenChange={setOpen}>
        <ProjectImageContent
          images={props.images}
          index={imageIndex}
          handleNext={handleNext}
          handleGoBack={handleGoBack}
          canExpand={true}
        />
        <VisuallyHidden>
          <DialogTitle>Image</DialogTitle>
        </VisuallyHidden>
        <DialogContent
          showCloseButton={false}
          className="min-w-[90vw] bg-transparent p-0"
        >
          <ProjectImageContent
            images={props.images}
            index={imageIndex}
            handleNext={handleNext}
            handleGoBack={handleGoBack}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProjectImageContent({
  images,
  index,
  handleNext,
  handleGoBack,
  canExpand,
}: {
  images: ImageType[];
  index: number;
  handleNext: () => void;
  handleGoBack: () => void;
  canExpand?: boolean;
}) {
  const image = images[index];
  const img = (
    <img
      className="rounded-md"
      loading="lazy"
      src={image.url}
      alt={image.alt}
    />
  );
  return (
    <div className="relative z-10">
      {canExpand ? (
        <DialogTrigger className="cursor-pointer">{img}</DialogTrigger>
      ) : (
        img
      )}

      <SlideButton
        side="right"
        max={images.length}
        position={index}
        onClick={handleNext}
      />
      <SlideButton
        side="left"
        max={images.length}
        position={index}
        onClick={handleGoBack}
      />
    </div>
  );
}

type SlideButtonProps = {
  position: number;
  max: number;
  side: "left" | "right";
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
        className={`absolute top-1/2 mx-4 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-stone-800/20 font-semibold text-black transition-colors hover:bg-stone-800/30 ${alignment}`}
        onClick={props.onClick}
      >
        {props.side === "left" ? (
          <ArrowLeft />
        ) : (
          <ArrowLeft className="rotate-180" />
        )}
      </button>
    )
  );
}
