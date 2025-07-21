import React, { HTMLAttributes } from "react";
import Image from "next/image";
import MediaCaptionImage from "../MediaCaptionImage/MediaCaptionImage";
import { Container } from "../Container";
import { cnb } from "cnbuilder";

type ImageSlideProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  caption?: string;
};

export const ImageSlide = ({
  className,
  caption,
  src,
  alt,
  ...props
}: ImageSlideProps) => {
  return (
    <Container
      {...props}
      className={cnb("rs-px-5 h-fit xl:h-screen relative", className)}
      bgColor="fog-light"
      width="full"
      pt={5}
      pb={6}
    >
      <div className="size-full absolute top-0 left-0 z-0">
        <Image
          className="ed11y-ignore object-cover z-0"
          src={src}
          alt={alt || ""}
          loading={"lazy"}
          fill
          sizes="100vw"
        />
        <div className="absolute size-full bg-opacity-80 z-10 backdrop-blur-sm bg-fog-light" />
      </div>
      <Container width="full" className="relative z-50 xl:h-screen">
        <MediaCaptionImage
          rounded
          src={src}
          alt={alt}
          caption={caption}
          aspectRatio="4x3"
          className="max-w-1300 mx-auto"
        />
      </Container>
    </Container>
  );
};
