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
 * @property {styles.captionTextColorType} [captionTextColor="transparent"] - The background color of the caption.
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
 *   captionTextColor="white"
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
    captionTextColor?: styles.CaptionTextColorType;
    rounded?: boolean;
    aspectRatio?: ImageAspectRatioType;
    isFullHeight?: boolean;
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
  boundingWidth = "full",
  spacingTop,
  spacingBottom,
  isCaptionInset,
  captionTextColor = "stone-dark",
  rounded = false,
  animation = "none",
  isPortriat = false,
  delay,
  duration,
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
      <AnimateInView animation={animation} delay={delay} duration={duration}>
        <figure className={styles.figure(isPortriat)}>
          <div
            className={cnb(
              imageAspectRatios[aspectRatio],
              styles.imageWrapper(isPortriat, rounded),
            )}
          >
            {!!imageSrc && (
              <Parallax offset={isParallax ? 60 : 0}>
                <picture>
                  <Image
                    src={imageSrc}
                    alt={alt || ""}
                    height="2000"
                    width="2000"
                    className={styles.image(isParallax)}
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
              )}
            >
              <Text
                className={cnb(
                  styles.caption,
                  styles.captionTextColors[captionTextColor],
                )}
              >
                {caption}
              </Text>
            </figcaption>
          )}
        </figure>
      </AnimateInView>
    </WidthBox>
  );
};

export default MediaCaptionImage;
