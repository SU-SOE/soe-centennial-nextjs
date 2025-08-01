import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import Image from "next/image";
import { Heading, Text } from "@/components/Typography";
import { cnb } from "cnbuilder";
import { ChapterLabel } from "./ChapterLabel";
import { AnimateInView } from "@/components/Animate";
import { Link } from "@/components/Cta/Link";

type StoryPosterCardProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  superhead?: string;
  chapter?: string;
  dek?: string;
  body?: string;
  byline?: string;
  bgColor?: BgColorType;
  caption?: string;
  hasBgImage?: boolean;
  imageLeft?: boolean;
  isNarrow?: boolean;
  widePreviewImage?: boolean;
  src: string;
  alt?: string;
  href: string;
};

export const StoryPosterCard = ({
  className,
  heading,
  superhead,
  chapter,
  dek,
  body,
  byline,
  bgColor = "stone-dark",
  caption,
  hasBgImage = false,
  imageLeft = false,
  widePreviewImage = false,
  isNarrow = false,
  src,
  alt,
  href,
  ...props
}: StoryPosterCardProps) => {
  return (
    <Container
      {...props}
      width="site"
      className={cnb("2xl:p-0 2xl:w-full 2xl:max-w-1400", className)}
    >
      <Container
        bgColor={bgColor}
        width="full"
        className={cnb(
          "relative rounded-[30px] overflow-hidden group transition duration-1000",
          {
            "rs-py-5 rs-px-2 lg:rs-px-4": isNarrow,
            "rs-py-7 rs-px-4": !isNarrow,
          },
        )}
      >
        {hasBgImage && (
          <div className="size-full absolute top-0 left-0 z-0">
            <Image
              className="ed11y-ignore object-cover z-0"
              src={src}
              alt={alt || ""}
              loading={"lazy"}
              fill
              sizes="100vw"
            />
            <div
              className={cnb("absolute size-full bg-opacity-80 z-10", {
                "bg-stone-dark": bgColor === "stone-dark",
                "bg-cardinal-red-dark": bgColor === "red",
              })}
            />
          </div>
        )}
        <FlexBox
          alignItems="center"
          className="flex flex-col justify-between lg:flex-row z-50 relative grid-gap w-full 2xl:mx-auto 2xl:max-w-1300"
        >
          <div
            className={cnb(
              "flex flex-col text-left [&_p]:max-w-800 [&_h*]:max-w-1100",
              { grow: imageLeft },
            )}
          >
            <AnimateInView animation="slideUp" delay={0.5}>
              <Heading size="f4" weight="normal" mb="0">
                <Link
                  href={href}
                  className="stretched-link"
                  linkType={bgColor === "white" ? "poster" : "poster-invert"}
                >
                  {heading}
                </Link>
              </Heading>
            </AnimateInView>
            <AnimateInView
              animation="slideUp"
              delay={0.5}
              className="order-first"
            >
              {chapter && <ChapterLabel text={chapter} />}
              {superhead && (
                <Text mb={2} font="dm-mono">
                  {superhead}
                </Text>
              )}
            </AnimateInView>
            <AnimateInView animation="slideUp" delay={1}>
              {dek && (
                <Text size={2} mb="0" className="rs-mt-4">
                  {dek}
                </Text>
              )}
              {body && (
                <Text variant="overview" mb="0">
                  {body}
                </Text>
              )}
            </AnimateInView>
            {byline && (
              <AnimateInView animation="slideUp" delay={0.5}>
                <Text mb="0" size="base" className="rs-mt-4">
                  {byline}
                </Text>
              </AnimateInView>
            )}
          </div>
          <AnimateInView
            animation="slideUp"
            delay={0.5}
            className={cnb("order-first w-full ", {
              "lg:max-w-200 lg:max-w-350 xl:max-w-450 2xl:max-w-500":
                widePreviewImage,
              "lg:max-w-[17.5rem] lg:max-w-[26rem] xl:max-w-320 2xl:max-w-350":
                !widePreviewImage,
              "lg:order-last": !imageLeft,
              "lg:order-first": imageLeft,
            })}
          >
            <div
              className={cnb(
                "size-full overflow-hidden relative rounded-[30px] mb-10 border-5 border-transparent transition duration-1000 group-hocus:border-digital-red-xlight",
                {
                  "aspect-[16/9]": widePreviewImage,
                  "aspect-[1/1]": !widePreviewImage,
                },
              )}
            >
              <Image src={src} alt={alt || ""} fill className="object-cover" />
            </div>
          </AnimateInView>
        </FlexBox>
      </Container>
    </Container>
  );
};
