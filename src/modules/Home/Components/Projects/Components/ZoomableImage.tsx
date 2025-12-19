import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/src/components/Dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Optional: for a11y

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleOpen = () => {
    setIsDialogOpen(true);
    setIsImageVisible(true);
  };

  const handleClose = () => {
    setIsImageVisible(false);
  };

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!open) handleClose();
      }}
    >
      <DialogTrigger asChild>
        <motion.button
          type="button"
          onClick={handleOpen}
          layoutId={`image-${src}`}
          className="size-full cursor-zoom-in border-0 bg-transparent p-0 focus:outline-hidden"
          aria-label={`Zoom image: ${alt}`}
        >
          <img src={src} alt={alt} className={className} />
        </motion.button>
      </DialogTrigger>

      <DialogContent
        className="flex max-h-screen max-w-[95vw] items-center justify-center border-0 bg-transparent p-0 shadow-none"
        showCloseButton={false}
        disableAnimation={true}
        disableOutline={true}
        disableBackground={!isImageVisible}
        onClick={handleClose}
      >
        <VisuallyHidden>
          <DialogTitle>Zoomed Image</DialogTitle>
        </VisuallyHidden>

        <AnimatePresence
          mode="wait"
          onExitComplete={() => setIsDialogOpen(false)}
        >
          {isImageVisible && (
            <motion.img
              layoutId={`image-${src}`}
              src={src}
              alt={alt}
              className="h-auto max-h-[90vh] w-auto max-w-full cursor-zoom-out rounded-lg object-contain shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            />
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
