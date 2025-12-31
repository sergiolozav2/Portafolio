import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/Dialog";
import { cn } from "@/src/lib/cn";

import { SkillTag } from "../../../../Shared/components/SkillTag";
import { ProjectPreviewImage } from "./ProjectImage";
import { ZoomableImage } from "./ZoomableImage";
import { ImageType } from "../Types/ImageType";

export type BadgeType = "production" | "project";

type ProjectCardProps = {
  title: string;
  description: string;
  images: ImageType[];
  skills: string[];
  badge?: BadgeType;
};

export function ProjectCard(props: ProjectCardProps) {
  const { images, title, description, skills, badge } = props;
  const [open, setOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const hasImages = images.length > 0;
  const safeActiveIndex = Math.min(
    activeImageIndex,
    Math.max(images.length - 1, 0),
  );

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setActiveImageIndex(0);
    }
  }

  function handleSelectImage(nextIndex: number) {
    if (!hasImages) return;
    setActiveImageIndex(nextIndex);
  }

  function showPreviousImage() {
    if (!hasImages || safeActiveIndex === 0) return;
    setActiveImageIndex((prev) => Math.max(prev - 1, 0));
  }

  function showNextImage() {
    if (!hasImages || safeActiveIndex === images.length - 1) return;
    setActiveImageIndex((prev) => Math.min(prev + 1, images.length - 1));
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group flex w-full cursor-pointer flex-col rounded-lg border border-transparent bg-transparent text-left transition-colors"
        >
          <ProjectPreviewImage
            images={images}
            title={title}
            badge={badge}
            imageClassName="transition-transform duration-500 group-hover:scale-[1.07]"
          />
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-base font-semibold text-stone-50">{title}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skillName, index) => (
                <SkillTag text={skillName} key={index} />
              ))}
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent
        className="data-[state=open]:fade-in-0 bg-primary/85 data-[state=open]:zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 inset-x-2 flex max-w-screen-xl flex-col items-center rounded-xl border border-stone-700/50 px-8 backdrop-blur md:inset-x-8"
        showCloseButton
      >
        <div className="grid h-full w-full items-center gap-6 overflow-y-auto md:grid-cols-[minmax(0,1.5fr)_1fr] md:gap-x-8">
          <div className="flex h-full w-full max-w-full min-w-0 flex-col gap-4">
            <div className="relative overflow-hidden rounded-lg bg-stone-900 not-md:h-60 md:aspect-[16/10]">
              {hasImages ? (
                <>
                  {images.map((image, index) => {
                    const isActive = index === safeActiveIndex;
                    return (
                      <div
                        key={image.url}
                        className={cn(
                          "absolute inset-0 size-full opacity-0 transition-opacity duration-500 select-none",
                          isActive && "opacity-100",
                        )}
                        style={{ pointerEvents: isActive ? "auto" : "none" }}
                        aria-hidden={!isActive}
                      >
                        <ZoomableImage
                          src={image.url}
                          alt={image.alt}
                          className="size-full object-cover"
                        />
                      </div>
                    );
                  })}
                  {images.length > 1 && (
                    <>
                      <GalleryArrow
                        direction="left"
                        onClick={showPreviousImage}
                        disabled={safeActiveIndex === 0}
                      />
                      <GalleryArrow
                        direction="right"
                        onClick={showNextImage}
                        disabled={safeActiveIndex === images.length - 1}
                      />
                    </>
                  )}
                </>
              ) : (
                <div className="flex size-full items-center justify-center text-sm text-stone-400">
                  No image available
                </div>
              )}
            </div>
            <div className="flex w-full gap-3 overflow-x-auto select-none">
              {images.map((image, index) => (
                <button
                  key={`${image.url}-${index}`}
                  type="button"
                  onClick={() => handleSelectImage(index)}
                  className={cn(
                    "relative h-20 w-28 shrink-0 cursor-pointer overflow-hidden rounded-md border transition-all duration-300",
                    index === safeActiveIndex
                      ? "shadow-[0_0_0_2px_rgba(250,204,21,0.25)]"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                  aria-pressed={index === safeActiveIndex}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 self-start py-3">
            <DialogHeader className="items-start gap-4 text-left">
              <DialogTitle className="text-2xl font-semibold text-stone-50 md:text-3xl">
                {title}
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed text-stone-200">
                {description}
              </DialogDescription>
            </DialogHeader>
            <div>
              <h3 className="text-xs font-semibold tracking-[0.1em] text-stone-50 uppercase">
                Skills used
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.map((skillName, index) => (
                  <SkillTag text={skillName} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

type GalleryArrowProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
};

function GalleryArrow({ direction, onClick, disabled }: GalleryArrowProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const alignment = direction === "left" ? "left-3" : "right-3";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-stone-700/60 bg-stone-900/80 text-stone-100 transition hover:bg-stone-800/80",
        alignment,
        disabled && "pointer-events-none opacity-30",
      )}
      aria-label={
        direction === "left" ? "Show previous image" : "Show next image"
      }
    >
      <Icon className="size-5" />
    </button>
  );
}
