import Image from "next/image";
import { cnb } from "cnbuilder";
import { HTMLAttributes } from "react";
import { Text } from "../Typography";

interface MediaCaptionImageProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  imageSrc: string;
  imageAlt?: string;
  link?: string;
  caption: string;
  imageClasses?: string;
  aspectRatio?: "default" | "square";
}

const MediaCaptionImage = ({
  title,
  imageSrc,
  imageAlt = "",
  link,
  caption,
  aspectRatio = "default",
  imageClasses,
  ...props
}: MediaCaptionImageProps) => {
  return (
    <figure
      {...props}
      className={cnb(
        "centered lg:max-w-[920px] xl:max-w-[980px] mb-50",
        props.className,
      )}
    >
      <div
        className={cnb(
          "relative w-full overflow-hidden",
          aspectRatio === "square" ? "aspect-[1/1]" : "aspect-[16/9]",
          imageClasses,
        )}
      >
        <Image
          className="object-cover"
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1000px"
        />
      </div>

      <figcaption className="mt-20 mx-20">
        <Text className="text-15 text-black-70">{caption}</Text>
      </figcaption>
    </figure>
  );
};

export default MediaCaptionImage;
