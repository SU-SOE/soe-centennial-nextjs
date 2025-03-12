/**
 * StoryImpactBanner component props.
 *
 * @typedef {Object} StoryImpactBannerProps
 * @property {string} heading - The main heading text.
 * @property {string} [superhead] - The optional superhead text.
 * @property {string} [chapter] - The optional chapter label text.
 * @property {string} body - The main body text.
 * @property {string} [byline] - The optional byline text.
 * @property {BgColorType} [bgColor="white"] - The background color type.
 * @property {string} [caption] - The optional caption text.
 * @property {boolean} [hasBgImage=false] - Flag to indicate if there is a background image.
 * @property {boolean} [isHorizontal=false] - Flag to indicate if the layout is horizontal.
 * @property {string} src - The source URL for the image.
 * @property {string} [alt] - The alternative text for the image.
 */

/**
 * StoryImpactBanner component.
 *
 * This component displays a banner with a heading, optional superhead, chapter label, body text, byline,
 * background image, and caption. The layout can be either horizontal or vertical.
 *
 * @param {StoryImpactBannerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered StoryImpactBanner component.
 *
 * @example
 * <StoryImpactBanner
 *   heading="Impactful Story"
 *   superhead="Superhead Text"
 *   chapter="Chapter 1"
 *   body="This is the body text of the story."
 *   byline="By Author"
 *   bgColor="red"
 *   caption="This is a caption."
 *   hasBgImage={true}
 *   isHorizontal={false}
 *   src="/path/to/image.jpg"
 *   alt="Image description"
 * />
 */
import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { FlexBox } from "../FlexBox";
import Image from "next/image";
import { Heading, Text } from "../Typography";
import { cnb } from "cnbuilder";
import { ChapterLabel } from "./ChapterLabel";

type StoryImpactBannerProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  superhead?: string;
  chapter?: string;
  body: string;
  byline?: string;
  bgColor?: BgColorType;
  caption?: string;
  hasBgImage?: boolean;
  isHorizontal?: boolean;
  src: string;
  alt?: string;
};

export const StoryImpactBanner = ({
  heading,
  superhead,
  chapter,
  body,
  byline,
  bgColor = "white",
  caption,
  hasBgImage = false,
  isHorizontal = false,
  src,
  alt,
  ...props
}: StoryImpactBannerProps) => {
  const pb = bgColor === "white" ? 10 : 8;
  return (
    <Container {...props} width="full" mb={7} className="relative">
      <Container
        bgColor={bgColor}
        width="site"
        pt={9}
        pb={pb}
        className="relative"
      >
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
              className={cnb(
                "absolute h-full w-full bg-opacity-80 z-10 backdrop-blur-sm",
                {
                  "bg-stone-dark": bgColor === "stone-dark",
                  "bg-cardinal-red-dark": bgColor === "red",
                },
              )}
            />
          </div>
        )}
        <FlexBox
          alignItems="center"
          className={cnb("flex flex-col z-10 relative md:grid-gap", {
            "lg:flex-row": !isHorizontal,
            "w-full max-w-[1100px] mx-auto": isHorizontal,
          })}
        >
          <div
            className={cnb("flex flex-col text-center rs-mb-8 rs-mt-7", {
              "items-center [&_p]:max-w-800 [&_h*]:max-w-1100": isHorizontal,
              "max-w-700 md:w-2/3 xl:w-1/2 md:text-left md:m-0": !isHorizontal,
            })}
          >
            <Heading size={6} weight="normal" mb="none">
              {heading}
            </Heading>
            {superhead && (
              <Text className="order-first" mb={2} font="dm-mono">
                {superhead}
              </Text>
            )}
            {chapter && (
              <ChapterLabel className="order-first rs-mb-0" text={chapter} />
            )}
            <Text variant="overview" mb="none" className="rs-mt-5">
              {body}
            </Text>
            {byline && (
              <Text mb="none" size="base" className="rs-mt-0">
                {byline}
              </Text>
            )}
          </div>
          <FlexBox
            direction="col"
            className={cnb("w-full h-full", {
              "md:1/3 lg:w-1/2": !isHorizontal,
            })}
          >
            <div
              className={cnb(
                "w-full xl:max-h-[860px] overflow-hidden relative rounded-[30px] mb-10",
                { "aspect-[3/2]": isHorizontal },
                { "aspect-[1/1] md:aspect-[2/3]": !isHorizontal },
              )}
            >
              <Image src={src} alt={alt || ""} fill className="object-cover" />
            </div>
            {bgColor === "white" && (
              <figcaption className="mt-13">
                <Text variant="caption">{caption}</Text>
              </figcaption>
            )}
          </FlexBox>
        </FlexBox>
      </Container>
      {bgColor !== "white" && (
        <figcaption className="mt-13 cc">
          <Text variant="caption" className="max-w-prose-wide">
            {caption}
          </Text>
        </figcaption>
      )}
    </Container>
  );
};
