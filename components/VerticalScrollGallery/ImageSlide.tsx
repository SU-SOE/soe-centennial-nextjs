"use client";

import React, { HTMLAttributes } from "react";
import Image from "next/image";
import { cnb } from "cnbuilder";
import { Container } from "../Container";
import { Text } from "../Typography";

type ImageSlideProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  caption?: string;
};

type MediaImageProps = {
  src: string;
  alt: string;
  caption?: string;
  rounded?: boolean;
  className?: string;
};

const MediaImage = ({ src, alt, caption, className }: MediaImageProps) => {
  return (
    <figure className={cnb("w-full flex flex-col max-h-[80vh]", className)}>
      <div className="relative w-full max-h-[calc(80vh-6rem)] aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt || ""}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1300px) 100vw, 1300px"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 h-24 flex-shrink-0">
          <Text className="max-w-prose-wide text-stone-dark">{caption}</Text>
        </figcaption>
      )}
    </figure>
  );
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
      <Container
        width="full"
        className="relative z-50 size-full flex items-center justify-center"
      >
        <MediaImage
          src={src}
          alt={alt}
          caption={caption}
          className="max-w-1300 mx-auto"
        />
      </Container>
    </Container>
  );
};
