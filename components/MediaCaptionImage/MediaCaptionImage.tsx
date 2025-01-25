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
import { Container, WidthType } from "@/components/Container";
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
  captionBgColor = "transparent",
  rounded = false,
  animation = "none",
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
        <figure className={styles.figure(isFullHeight)}>
          <div
            className={cnb(
              imageAspectRatios[aspectRatio],
              rounded && "rounded-2xl",
              styles.imageWrapper(isFullHeight, isParallax),
            )}
          >
            {!!imageSrc && (
              <Parallax offset={isParallax ? 60 : 0}>
                <picture className={styles.image(isParallax)}>
                  <Image
                    src={imageSrc}
                    alt={alt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 1000px"
                  />
                </picture>
              </Parallax>
            )}
          </div>
          {caption && (
            <Container
              as="figcaption"
              width={isCaptionInset ? "site" : "full"}
              className={cnb(
                styles.captionWrapper,
                styles.captionBgColors[captionBgColor],
              )}
            >
              <Text className={styles.caption(captionBgColor)}>{caption}</Text>
            </Container>
          )}
        </figure>
      </AnimateInView>
    </WidthBox>
  );
};

export default MediaCaptionImage;
