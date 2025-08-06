/**
 * MediaCaptionImage component props.
 *
 * @typedef {Object} MediaCaptionImageProps
 * @property {string} src - The source URL of the image.
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
 * @property {boolean} [isPortrait=false] - If true, the image will be displayed in portrait mode.
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
 *   src="/path/to/image.jpg"
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
import { Container } from "@/components/Container";
import {
  imageAspectRatios,
  ImageAspectRatioType,
  PaddingType,
} from "@/utilities/datasource";
import * as styles from "./MediaCaptionImage.styles";
import { Text } from "../Typography";

type MediaCaptionImageProps = HTMLAttributes<HTMLElement> &
  Omit<AnimateInViewProps, "children"> & {
    src: string;
    imageFocus?: string;
    isLoadingEager?: boolean;
    isParallax?: boolean;
    alt?: string;
    caption?: React.ReactNode;
    isCaptionInset?: boolean;
    isCaptionFullWidth?: boolean;
    captionTextColor?: styles.CaptionTextColorType;
    rounded?: boolean;
    aspectRatio?: ImageAspectRatioType;
    isFullHeight?: boolean;
    isPortrait?: boolean;
    boundingWidth?: "site" | "full";
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
  };

const MediaCaptionImage = ({
  src,
  imageFocus,
  isLoadingEager,
  isParallax = false,
  alt,
  caption,
  aspectRatio = "16x9",
  isFullHeight = false,
  spacingTop,
  spacingBottom,
  isCaptionInset,
  isCaptionFullWidth,
  captionTextColor = "text-black",
  rounded = false,
  animation = "none",
  isPortrait = false,
  delay,
  duration,
  className,
  ...props
}: MediaCaptionImageProps) => {
  return (
    <Container
      {...props}
      width="full"
      pt={spacingTop}
      pb={spacingBottom}
      className={cnb(className, styles.root(isFullHeight))}
    >
      <AnimateInView animation={animation} delay={delay} duration={duration}>
        <figure className={styles.figure(isPortrait)}>
          <div
            className={cnb(
              imageAspectRatios[aspectRatio],
              styles.imageWrapper(isPortrait, rounded),
            )}
          >
            {!!src && (
              <>
                {isParallax ? (
                  <Parallax offset={60}>
                    <picture>
                      <Image
                        src={src}
                        alt={alt || ""}
                        height="2000"
                        width="2000"
                        className={styles.image(isParallax)}
                      />
                    </picture>
                  </Parallax>
                ) : (
                  <picture>
                    <Image
                      src={src}
                      alt={alt || ""}
                      height="2000"
                      width="2000"
                      className={styles.image(isParallax)}
                    />
                  </picture>
                )}
              </>
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
                  isCaptionFullWidth ? "w-full" : "max-w-prose-wide",
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
    </Container>
  );
};

export default MediaCaptionImage;
