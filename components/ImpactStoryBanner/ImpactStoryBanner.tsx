import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { FlexBox } from "../FlexBox";
import Image from "next/image";
import { Heading, Text } from "../Typography";
import { cnb } from "cnbuilder";

type ImpactStoryBannerProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  superhead: string;
  body: string;
  byline?: string;
  bgColor?: BgColorType;
  caption?: string;
  hasBgImage?: boolean;
  src: string;
  alt?: string;
};

export const ImpactStoryBanner = ({
  heading,
  superhead,
  body,
  byline,
  bgColor = "white",
  caption,
  hasBgImage = false,
  src,
  alt,
  ...props
}: ImpactStoryBannerProps) => {
  const pb = bgColor === "white" ? 10 : 8;
  return (
    <Container {...props} width="full" mb={7} className="relative">
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
          className="flex flex-col lg:flex-row z-50 relative"
          gap
        >
          <div className="flex flex-col lg:w-1/2 max-w-700 text-center lg:text-left rs-mb-8 rs-mt-7 lg:m-0">
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
          <FlexBox direction="col" className="w-full h-full lg:w-1/2">
            <div className="aspect-[3/2] lg:aspect-[2/3] w-full lg:max-h-[960px] overflow-hidden relative rounded-[30px] mb-10">
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
