import { Star, Book } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/src/lib/cn";

import { ImageType } from "../Types/ImageType";
import { BadgeType } from "./ProjectCard";

type ProjectPreviewImageProps = {
  images: ImageType[];
  title: string;
  className?: string;
  imageClassName?: string;
  badge?: BadgeType;
};

export function ProjectPreviewImage({
  images,
  title,
  className,
  imageClassName,
  badge,
}: ProjectPreviewImageProps) {
  const hasImages = images.length > 0;
  const firstImage = hasImages ? images[0] : undefined;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-stone-900/40",
        className,
      )}
    >
      {hasImages ? (
        <>
          <img
            src={firstImage?.url}
            alt={firstImage?.alt ?? `${title} preview`}
            loading="lazy"
            className={cn(
              "relative z-10 aspect-[16/10] w-full object-cover",
              imageClassName,
            )}
          />
          {badge && <ProjectBadge type={badge} />}
        </>
      ) : (
        <div className="flex aspect-[16/10] w-full items-center justify-center text-sm text-stone-400">
          No image available
        </div>
      )}
    </div>
  );
}

type ProjectBadgeProps = {
  type: BadgeType;
};

function ProjectBadge({ type }: ProjectBadgeProps) {
  const { t } = useTranslation();
  const isProduction = type === "production";
  const Icon = isProduction ? Star : Book;
  const label = isProduction ? t("badge.professional") : t("badge.project");

  return (
    <div
      className={cn(
        "absolute top-2 right-2 z-10 flex items-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold shadow-lg",
        isProduction ? "bg-cyan-700 text-white" : "bg-red-600 text-white",
      )}
    >
      <Icon className="size-4" />
      <span>{label}</span>
    </div>
  );
}
