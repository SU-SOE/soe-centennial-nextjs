import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import Image from "next/image";
import { cnb } from "cnbuilder";
import * as styles from "@/components/Container/Container.styles";

type StoryGridProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  bgColor?: BgColorType;
  hasBgImage?: boolean;
  isImgOffset?: boolean;
  src?: string;
  alt?: string;
};

export const StoryGrid = ({
  children,
  bgColor,
  hasBgImage = false,
  isImgOffset,
  src,
  alt,
  ...props
}: StoryGridProps) => {
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
            "relative z-50 grid grid-cols-1 lg:grid-cols-2 gap-76 *:mb-0",
            isImgOffset && "lg:nth-4n-2:*:rs-mt-8 lg:nth-4n-3:*:rs-mt-8",
          )}
        >
          {children}
        </Container>
      </Container>
    </Container>
  );
};
