/**
 * MediaCaptionImage component props.
 *
 * @typedef {Object} MediaCaptionImageProps
 * @property {string} imageSrc - The source URL of the image.
 * @property {string} [imageFocus] - The focus area of the image.
 * @property {boolean} [isLoadingEager] - If true, the image will be loaded eagerly.
 * @property {boolean} [isParallax=false] - If true, the image will have a parallax effect.
 * @property {string} [alt] - The alt text for the image.
 * @property {React.ReactNode} [caption] - The caption for the image.
 * @property {boolean} [isCaptionInset] - If true, the caption will be inset.
 * @property {styles.CaptionBgColorType} [captionBgColor="transparent"] - The background color of the caption.
 * @property {boolean} [rounded=false] - If true, the image will have rounded corners.
 * @property {ImageAspectRatioType} [aspectRatio="16x9"] - The aspect ratio of the image.
 * @property {boolean} [isFullHeight=false] - If true, the image will take the full height of its container.
 * @property {boolean} [isLarge=false] - If true, the image will be displayed larger.
 * @property {boolean} [isPortriat=false] - If true, the image will be displayed in portrait mode.
 * @property {"site" | "full"} [boundingWidth="full"] - The bounding width of the image.
 * @property {WidthType} [width] - The width of the image.
 * @property {PaddingType} [spacingTop] - The top spacing of the image.
 * @property {PaddingType} [spacingBottom] - The bottom spacing of the image.
 *
 * @param {MediaCaptionImageProps} props - The props for the MediaCaptionImage component.
 * @returns {JSX.Element} The MediaCaptionImage component.
 *
 * @example
 * <MediaCaptionImage
 *   imageSrc="/path/to/image.jpg"
 *   alt="Description of image"
 *   caption="This is a caption"
 *   isParallax={true}
 *   aspectRatio="4x3"
 *   isFullHeight={true}
 *   rounded={true}
 *   captionBgColor="white"
 * />
 */

import Image from "next/image";
import { cnb } from "cnbuilder";
import { HTMLAttributes } from "react";
import {
  AnimateInView,
  Parallax,
  AnimateInViewProps,
} from "@/components/Animate";
import { WidthBox } from "@/components/WidthBox";
import {
  imageAspectRatios,
  ImageAspectRatioType,
  PaddingType,
} from "@/utilities/datasource";
import { WidthType } from "@/components/Container";
import * as styles from "./MediaCaptionImage.styles";
import { Text } from "../Typography";

type MediaCaptionImageProps = HTMLAttributes<HTMLElement> &
  Omit<AnimateInViewProps, "children"> & {
    imageSrc: string;
    imageFocus?: string;
    isLoadingEager?: boolean;
    isParallax?: boolean;
    alt?: string;
    caption?: React.ReactNode;
    isCaptionInset?: boolean;
    captionBgColor?: styles.CaptionBgColorType;
    rounded?: boolean;
    aspectRatio?: ImageAspectRatioType;
    isFullHeight?: boolean;
    isLarge?: boolean;
    isPortriat?: boolean;
    boundingWidth?: "site" | "full";
    width?: WidthType;
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
  };

const MediaCaptionImage = ({
  imageSrc,
  imageFocus,
  isLoadingEager,
  isParallax = false,
  alt,
  caption,
  aspectRatio = "16x9",
  isFullHeight = false,
  isLarge = false,
  boundingWidth = "full",
  spacingTop,
  spacingBottom,
  isCaptionInset,
  captionBgColor = "transparent",
  rounded = false,
  animation = "none",
  isPortriat = false,
  delay,
  className,
  ...props
}: MediaCaptionImageProps) => {
  return (
    <WidthBox
      {...props}
      boundingWidth={boundingWidth}
      pt={spacingTop}
      pb={spacingBottom}
      className={cnb(className, styles.root(isFullHeight))}
    >
      <AnimateInView animation={animation} delay={delay}>
        <figure className={styles.figure(isPortriat)}>
          <div
            className={cnb(
              imageAspectRatios[aspectRatio],
              styles.imageWrapper(isPortriat),
            )}
          >
            {!!imageSrc && (
              <Parallax offset={isParallax ? 60 : 0}>
                <picture className={styles.innerImageWrapper(isParallax)}>
                  <Image
                    src={imageSrc}
                    alt={alt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className={cnb(
                      rounded && "rounded-2xl",
                      styles.image(isLarge),
                    )}
                  />
                </picture>
              </Parallax>
            )}
          </div>
          {caption && (
            <figcaption
              className={cnb(
                isCaptionInset ? "px-18" : "w-full",
                styles.captionWrapper,
                styles.captionBgColors[captionBgColor],
              )}
            >
              <Text className={styles.caption(captionBgColor)}>{caption}</Text>
            </figcaption>
          )}
        </figure>
      </AnimateInView>
    </WidthBox>
  );
};

export default MediaCaptionImage;
