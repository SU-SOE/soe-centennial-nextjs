import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { FlexBox } from "../FlexBox";
import Image from "next/image";
import { Heading, Text } from "../Typography";
import { cnb } from "cnbuilder";

type StoryPosterCardProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  superhead: string;
  body: string;
  byline?: string;
  bgColor?: BgColorType;
  caption?: string;
  hasBgImage?: boolean;
  isNarrow?: boolean;
  src: string;
  alt?: string;
};

export const StoryPosterCard = ({
  heading,
  superhead,
  body,
  byline,
  bgColor = "white",
  caption,
  hasBgImage = false,
  // isNarrow = false,
  src,
  alt,
  ...props
}: StoryPosterCardProps) => {
  const pb = bgColor === "white" ? 10 : 8;
  return (
    <Container {...props} width="site" mb={7} className="relative">
      <Container bgColor={bgColor} width="site" pt={9} pb={pb}>
        {hasBgImage && (
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
              className={cnb("absolute h-full w-full bg-opacity-80 z-10", {
                "bg-stone-dark": bgColor === "stone-dark",
                "bg-cardinal-red-dark": bgColor === "red",
              })}
            />
          </div>
        )}
        <FlexBox
          alignItems="center"
          className="flex flex-col z-50 relative md:grid-gap w-full max-w-[1100px] mx-auto"
        >
          <div className="flex flex-col text-center rs-mb-8 rs-mt-7 items-center [&_p]:max-w-800 [&_h*]:max-w-1100">
            <Heading size={6} weight="normal" mb="none">
              {heading}
            </Heading>
            <Text className="order-first" mb={2} font="dm-mono">
              {superhead}
            </Text>
            <Text variant="overview" mb="none" className="rs-mt-5">
              {body}
            </Text>
            {byline && (
              <Text mb="none" size="base" className="rs-mt-4">
                {byline}
              </Text>
            )}
          </div>
          <FlexBox direction="col" className="w-full h-full">
            <div className="w-full xl:max-h-[860px] overflow-hidden relative rounded-[30px] mb-10 aspect-[1/1]">
              <Image src={src} alt={alt || ""} fill className="object-cover" />
            </div>
            {bgColor === "white" && (
              <Text variant="caption" className="mt-13">
                {caption}
              </Text>
            )}
          </FlexBox>
        </FlexBox>
      </Container>
      {bgColor !== "white" && (
        <Text variant="caption" className="mt-13 cc">
          {caption}
        </Text>
      )}
    </Container>
  );
};
