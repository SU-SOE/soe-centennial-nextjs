/**
 * StoryLineBanner component renders a visually rich banner section for a story.
 * It includes support for background images, headings, subheadings, captions, and more.
 * The component is highly customizable with various props for styling and content.
 *
 * @param {StoryLineBannerProps} props - The props for the StoryLineBanner component.
 * @param {boolean} [props.hasLineArt=false] - Determines if line art should be displayed in the banner.
 * @param {string} props.heading - The main heading text for the banner.
 * @param {string} [props.superhead] - Optional superhead text displayed above the heading.
 * @param {string} [props.chapter] - Optional chapter label displayed in the banner.
 * @param {string} [props.dek] - Optional subheading or description text.
 * @param {string} [props.body] - Optional body text for additional details.
 * @param {string} [props.byline] - Optional byline text for attribution or authorship.
 * @param {"stone-dark" | "red"} [props.bgColor="red"] - Background color of the banner.
 * @param {string | React.ReactNode} [props.caption] - Optional caption text or node displayed below the banner.
 * @param {string} props.src - The source URL for the background image.
 * @param {string} [props.alt] - Alternative text for the background image.
 * @param {"a" | "b" | "default"} [props.lineVariant] - Variant of the line art to display.
 * @param {HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes for the banner container.
 *
 * @example
 * ```tsx
 * <StoryLineBanner
 *   heading="The Journey Begins"
 *   chapter="Chapter 1"
 *   superhead="An Epic Tale"
 *   dek="Discover the untold story of courage and adventure."
 *   body="Follow the protagonist as they embark on a life-changing journey."
 *   byline="By John Doe"
 *   bgColor="stone-dark"
 *   caption="Illustration by Jane Smith"
 *   src="/images/banner.jpg"
 *   alt="A scenic view of mountains"
 *   hasLineArt={true}
 *   lineVariant="a"
 * />
 * ```
 */
import { HTMLAttributes } from "react";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import BannerLineart from "@/components/images/banner-lineart";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
import Image from "next/image";
import { ChapterLabel } from "./ChapterLabel";
import { DecadePager } from "../DecadePager";

type StoryLineBannerProps = HTMLAttributes<HTMLDivElement> & {
  hasLineArt?: boolean;
  heading: string;
  superhead?: string;
  chapter?: string;
  dek?: React.ReactNode;
  body?: string;
  byline?: string;
  bgColor?: "stone-dark" | "red";
  caption?: React.ReactNode;
  src?: string;
  alt?: string;
  lineVariant?: "a" | "b" | "default";
};

export const StoryLineBanner = ({
  bgColor = "red",
  hasLineArt = false,
  heading,
  chapter,
  dek,
  superhead,
  body,
  byline,
  caption,
  src,
  alt,
  lineVariant,
  ...props
}: StoryLineBannerProps) => (
  <header {...props}>
    <Container
      as="section"
      bgColor={bgColor}
      width="full"
      pb={3}
      className="relative pt-[16rem] md:rs-pt-9 mb-20 overflow-hidden text-white"
    >
      <Container
        width="full"
        pb={6}
        className="flex items-center justify-center cc lg:w-full lg:rs-px-7 2xl:cc"
      >
        {src && (
          <div className="size-full absolute top-0 left-0 z-0">
            <Image
              className="ed11y-ignore object-cover z-[-20]"
              src={src}
              alt={alt || ""}
              loading={"lazy"}
              fill
              sizes="100vw"
            />
            <div
              className={cnb(
                "absolute size-full bg-opacity-80 z-[-10] bg-gradient-to-r from-10%",
                {
                  "from-stone-dark to-transparent": bgColor === "stone-dark",
                  "from-cardinal-red-dark to-transparent": bgColor === "red",
                },
              )}
            />
          </div>
        )}
        <Container
          className={cnb(
            "relative flex items-center justify-start w-full z-0 *:text-white",
            {
              "px-30 py-70 sm:px-50 sm:py-80 md:p-68 lg:p-100 xl:rs-py-10 xl:rs-px-8":
                hasLineArt,
              "rs-py-10 rs-px-2 2xl:px-0": !hasLineArt,
            },
          )}
          width="full"
        >
          {hasLineArt && (
            <BannerLineart
              variant={lineVariant}
              className="absolute top-0 left-0 flex justify-center items-center z-[-10]"
            />
          )}
          <FlexBox
            direction="col"
            className={cnb("z-50 max-w-full lg:max-w-[670px]", {
              "rs-mt-2": hasLineArt,
            })}
          >
            <Heading as="h1" size="f6" weight="normal" mb="0">
              {heading}
            </Heading>
            {chapter && (
              <ChapterLabel className="order-first rs-mb-0" text={chapter} />
            )}
            {superhead && (
              <Text className="order-first" mb={2} font="dm-mono">
                {superhead}
              </Text>
            )}
            {dek && (
              <Text mb="0" size="f3" className="rs-mt-4">
                {dek}
              </Text>
            )}
            {body && (
              <Text variant="overview" mb="none" className="rs-mt-1">
                {body}
              </Text>
            )}
            {byline && (
              <Text mb="0" size="base" className="rs-mt-4">
                {byline}
              </Text>
            )}
          </FlexBox>
        </Container>
      </Container>
      <DecadePager transparent />
    </Container>
    {caption && (
      <div className="mt-13 cc">
        <Text
          id="hero-caption"
          variant="caption"
          className="max-w-prose-wide text-black"
        >
          {caption}
        </Text>
      </div>
    )}
  </header>
);
