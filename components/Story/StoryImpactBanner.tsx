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
 * @property {boolean} [isVertical=false] - Flag to indicate if the layout is horizontal.
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
 *   dek="This is the dek text of the story."
 *   body="This is the body text of the story."
 *   byline="By Author"
 *   bgColor="red"
 *   caption="This is a caption."
 *   hasBgImage={true}
 *   isVertical={false}
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
import { AnimateInView } from "../Animate";

type StoryImpactBannerProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  superhead?: string;
  chapter?: string;
  chapterColor?: "stone-dark" | "archway-dark" | "digital-red";
  dek?: string;
  body?: string;
  byline?: string;
  bgColor?: BgColorType;
  caption?: string;
  hasBgImage?: boolean;
  isVertical?: boolean;
  isImageWide?: boolean;
  isCaptionInHero?: boolean;
  bgImageSrc?: string;
  src: string;
  alt: string;
};

export const StoryImpactBanner = ({
  heading,
  superhead,
  className,
  chapter,
  chapterColor,
  dek,
  body,
  byline,
  bgColor = "white",
  caption,
  hasBgImage = false,
  bgImageSrc,
  isVertical = false,
  isImageWide = false,
  isCaptionInHero = false,
  src,
  alt,
  ...props
}: StoryImpactBannerProps) => {
  return (
    <Container
      {...props}
      as="header"
      width="full"
      mb={5}
      className={cnb("relative", className)}
    >
      <Container
        bgColor={bgColor}
        width="site"
        pt={9}
        pb={8}
        className="relative pt-150 md:rs-pt-9"
      >
        {hasBgImage && (
          <div className="size-full absolute top-0 left-0 z-0">
            <Image
              className="ed11y-ignore object-cover z-0"
              src={bgImageSrc || src}
              alt=""
              loading={"lazy"}
              fill
              sizes="100vw"
            />
            <div
              className={cnb(
                "absolute size-full bg-opacity-80 z-10 backdrop-blur-sm",
                {
                  "bg-archway": bgColor === "archway",
                  "bg-stone-dark": bgColor === "stone-dark",
                  "bg-cardinal-red-dark": bgColor === "red",
                },
              )}
            />
          </div>
        )}
        <FlexBox
          alignItems="center"
          className={cnb("flex flex-col z-10 relative", {
            "md:grid-gap lg:flex-row": !isVertical,
            "w-full mx-auto": isVertical,
            "max-w-1100": isVertical && !isImageWide,
            "max-w-1500": isImageWide,
          })}
        >
          <AnimateInView
            animation="sharpen"
            className={cnb("flex flex-col text-center rs-mt-7", {
              "rs-mb-6 items-center [&_p]:max-w-800 [&_h*]:max-w-1100":
                isVertical,
              "rs-mb-5 max-w-700 md:w-2/3 xl:w-1/2 md:text-left md:m-0 items-center md:items-start":
                !isVertical,
            })}
          >
            <Heading as="h1" size={6} weight="normal" mb="none">
              {heading}
            </Heading>
            {superhead && (
              <Text className="order-first" mb={2} font="dm-mono">
                {superhead}
              </Text>
            )}
            {chapter && (
              <ChapterLabel
                chipColor={chapterColor}
                className="order-first rs-mb-0"
                text={chapter}
              />
            )}
            {dek && (
              <Text mb="none" size="f3" className="rs-mt-1">
                {dek}
              </Text>
            )}
            {body && (
              <Text mb="none" size={1} className="rs-mt-1">
                {body}
              </Text>
            )}
            {byline && (
              <Text mb="none" size="base" className="rs-mt-0">
                {byline}
              </Text>
            )}
          </AnimateInView>
          <FlexBox
            direction="col"
            className={cnb("size-full", {
              "md:1/3 lg:w-1/2": !isVertical,
            })}
          >
            <AnimateInView
              animation="slideUp"
              delay={0.3}
              className={cnb(
                "w-full overflow-hidden relative rounded-[30px] mb-10",
                { "aspect-[3/2] xl:max-h-[86rem]": isVertical && !isImageWide },
                { "aspect-[15/7] xl:max-w-1500": isVertical && isImageWide },
                {
                  "aspect-[1/1] md:aspect-[2/3] xl:max-h-[86rem]": !isVertical,
                },
              )}
            >
              <Image src={src} alt={alt} fill className="object-cover" />
            </AnimateInView>
            {(isCaptionInHero || bgColor === "white") && (
              <div className="mt-13">
                <Text variant="caption" mb="none">
                  {caption}
                </Text>
              </div>
            )}
          </FlexBox>
        </FlexBox>
      </Container>
      {!isCaptionInHero && bgColor !== "white" && (
        <div className="mt-13 cc">
          <Text variant="caption" className="max-w-prose-wide">
            {caption}
          </Text>
        </div>
      )}
    </Container>
  );
};
