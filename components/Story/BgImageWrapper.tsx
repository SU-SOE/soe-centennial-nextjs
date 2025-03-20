/**
 * BgImageWrapper component that displays a grid of stories with optional background image and color.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the grid.
 * @param {BgColorType} [bgColor] - The background color type for the container.
 * @param {boolean} [hasBgImage=false] - Flag to determine if a background image should be displayed.
 * @param {boolean} [isTwoCol] - Flag to determine if the content should be displayed in two columns.
 * @param {boolean} [isImgOffset] - Flag to determine if the image should have an offset.
 * @param {string} [src] - The source URL of the background image.
 * @param {string} [alt] - The alt text for the background image.
 * @param {HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes for the container.
 *
 * @example
 * ```tsx
 * <BgImageWrapper
 *   bgColor="primary"
 *   hasBgImage={true}
 *   isImgOffset={true}
 *   isTwoCol={true}
 *   src="/path/to/image.jpg"
 *   alt="Background Image"
 * >
 *   <div>Story 1</div>
 *   <div>Story 2</div>
 * </BgImageWrapper>
 * ```
 */
import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import Image from "next/image";
import { cnb } from "cnbuilder";
import * as styles from "@/components/Container/Container.styles";

type BgImageWrapperProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  bgColor?: BgColorType;
  hasBgImage?: boolean;
  isImgOffset?: boolean;
  isTwoCol?: boolean;
  src?: string;
  alt?: string;
};

export const BgImageWrapper = ({
  children,
  bgColor,
  hasBgImage = false,
  isImgOffset,
  isTwoCol,
  src,
  alt,
  ...props
}: BgImageWrapperProps) => {
  return (
    <Container {...props} width="full" mb={5} className="relative">
      <Container bgColor={bgColor} width="site" pt={7} pb={7}>
        {hasBgImage && src && (
          <div className="h-full w-full absolute top-0 left-0 z-0">
            <Image
              className="ed11y-ignore object-cover z-0"
              src={src}
              alt={alt || ""}
              loading={"lazy"}
              fill
              sizes="100vw"
            />
            <div
              className={cnb(
                "absolute h-full w-full bg-opacity-80 z-10 backdrop-blur-sm",
                bgColor ? styles.bgColors[bgColor] : "",
              )}
            />
          </div>
        )}
        <Container
          width="full"
          className={cnb(
            "relative z-50",
            isTwoCol && "grid grid-cols-1 lg:grid-cols-2 gap-76 *:mb-0",
            isImgOffset && "lg:nth-4n-2:*:rs-mt-8 lg:nth-4n-3:*:rs-mt-8",
          )}
        >
          {children}
        </Container>
      </Container>
    </Container>
  );
};
