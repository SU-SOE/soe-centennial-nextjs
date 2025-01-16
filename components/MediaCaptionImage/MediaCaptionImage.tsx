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
  aspectRatio?: "default" | "square" | "rectangle" | "portrait";
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
        "centered w-full lg:max-w-[920px] xl:max-w-[980px]",
        {
          "flex flex-col sm:flex-row lg:flex-col": aspectRatio === "portrait",
        },
        props.className,
      )}
    >
      <div
        className={cnb(
          "relative overflow-hidden shrink-0 grow-0",
          {
            "rounded-2xl": rounded,
            "aspect-[7/5] w-full": aspectRatio === "rectangle",
            "aspect-[1/1] w-full": aspectRatio === "square",
            "aspect-[1/1] w-100 md:w-180 lg:w-full h-100 md:h-180 lg:h-full ":
              aspectRatio === "portrait",
            "aspect-[16/9] w-full": aspectRatio === "default",
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

      <figcaption
        className={cnb({
          "w-fit lg:mt-20 mx-20": aspectRatio === "portrait",
          "mt-20 mx-20": aspectRatio !== "portrait",
        })}
      >
        <Text className={cnb("text-15 text-black-70", fontColorClasses)}>
          {caption}
        </Text>
      </figcaption>
    </figure>
  );
};

export default MediaCaptionImage;
