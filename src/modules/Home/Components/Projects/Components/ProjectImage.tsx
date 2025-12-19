import { cn } from "@/src/lib/cn";

import { ImageType } from "../Types/ImageType";

type ProjectPreviewImageProps = {
  images: ImageType[];
  title: string;
  className?: string;
  imageClassName?: string;
};

export function ProjectPreviewImage({
  images,
  title,
  className,
  imageClassName,
}: ProjectPreviewImageProps) {
  const hasImages = images.length > 0;
  const firstImage = hasImages ? images[0] : undefined;

  return (
    <div
      className={cn("overflow-hidden rounded-lg bg-stone-900/40", className)}
    >
      {hasImages ? (
        <img
          src={firstImage?.url}
          alt={firstImage?.alt ?? `${title} preview`}
          loading="lazy"
          className={cn(
            "relative z-10 aspect-[16/10] w-full object-cover",
            imageClassName,
          )}
        />
      ) : (
        <div className="flex aspect-[16/10] w-full items-center justify-center text-sm text-stone-400">
          No image available
        </div>
      )}
    </div>
  );
}
