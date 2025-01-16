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
  fontColorClasses?: string;
  imageClasses?: string;
  aspectRatio?: "default" | "square" | "rectangle";
  rounded?: boolean;
}

const MediaCaptionImage = ({
  title,
  imageSrc,
  imageAlt = "",
  link,
  caption,
  rounded,
  fontColorClasses,
  imageClasses,
  aspectRatio = "default",
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
          {
            "rounded-2xl": rounded,
            "aspect-[7/5]": aspectRatio === "rectangle",
            "aspect-[1/1]": aspectRatio === "square",
            "aspect-[16/9]": aspectRatio === "default",
          },
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
        <Text className={cnb("text-15 text-black-70", fontColorClasses)}>
          {caption}
        </Text>
      </figcaption>
    </figure>
  );
};

export default MediaCaptionImage;
