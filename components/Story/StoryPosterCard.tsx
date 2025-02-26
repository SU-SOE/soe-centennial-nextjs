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
  isNarrow?: boolean;
  src: string;
  alt?: string;
  link: string;
};

export const StoryPosterCard = ({
  heading,
  superhead,
  chapter,
  dek,
  body,
  byline,
  bgColor = "stone-dark",
  caption,
  hasBgImage = false,
  isNarrow = false,
  src,
  alt,
  link,
  ...props
}: StoryPosterCardProps) => {
  return (
    <Container
      {...props}
      width="site"
      mb={7}
      className="2xl:p-0 2xl:w-full 2xl:max-w-[1200px]"
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
          className="flex flex-col justify-between md:flex-row z-50 relative md:grid-gap w-full 2xl:mx-auto 2xl:max-w-1300"
        >
          <div className="flex flex-col text-left [&_p]:max-w-800 [&_h*]:max-w-1100">
            <AnimateInView animation="slideUp" delay={0.8}>
              <Heading size="f4" weight="normal" className="rs-mb-3 lg:rs-mb-5">
                <Link
                  href={link}
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
                <Text size={2} mb="none" className="rs-mt-4">
                  {dek}
                </Text>
              )}
              {body && (
                <Text variant="overview" mb="none">
                  {body}
                </Text>
              )}
            </AnimateInView>
            {byline && (
              <AnimateInView animation="slideUp" delay={1}>
                <Text mb="none" size="base" className="rs-mt-4">
                  {byline}
                </Text>
              </AnimateInView>
            )}
          </div>
          <AnimateInView
            animation="slideUp"
            delay={0.5}
            className="w-full md:max-w-[175px] lg:max-w-[260px] xl:max-w-[320px] 2xl:max-w-[350]"
          >
            <div className="w-full h-full overflow-hidden relative rounded-[30px] mb-10 aspect-[1/1] border-5 border-transparent transition duration-1000 group-hocus:border-digital-red-xlight">
              <Image src={src} alt={alt || ""} fill className="object-cover" />
            </div>
          </AnimateInView>
        </FlexBox>
      </Container>
    </Container>
  );
};
