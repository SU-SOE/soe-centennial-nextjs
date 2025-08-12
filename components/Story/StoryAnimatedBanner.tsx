"use client";

import { HTMLAttributes } from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { cnb } from "cnbuilder";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import { FlexBox } from "@/components/FlexBox";
import { ChapterLabel } from "./ChapterLabel";
import { DecadePager } from "../DecadePager";

type StoryAnimatedBannerProps = HTMLAttributes<HTMLDivElement> & {
  hasLineArt?: boolean;
  heading: string;
  superhead?: string;
  chapter?: string;
  dek?: React.ReactNode;
  body?: string;
  byline?: string;
  bgColor?: "stone-dark" | "red";
  caption?: React.ReactNode;
  src: string;
  alt?: string;
};

export const StoryAnimatedBanner = ({
  bgColor = "stone-dark",
  heading,
  chapter,
  dek,
  superhead,
  body,
  byline,
  caption,
  src,
  alt,
  ...props
}: StoryAnimatedBannerProps) => {
  // Animation variants for the background image blur
  const backgroundVariants: Variants = {
    initial: {
      filter: "blur(8px)",
      scale: 1.1,
    },
    animate: {
      scale: 1,
      filter: "blur(0px)",
      transition: {
        scale: { duration: 1, ease: "easeOut" },
        filter: { duration: 1.5, delay: 0.5, ease: "easeOut" },
      },
    },
  };

  // Animation variants for the background overlay and text content
  const contentVariants: Variants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  const overlayGradientVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <header {...props}>
      <motion.div initial="initial" animate="animate">
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
            {/* Main background image that starts blurred and comes into focus */}
            <motion.div
              className="size-full absolute top-0 left-0 z-0"
              variants={backgroundVariants}
            >
              <Image
                className="ed11y-ignore object-cover z-[-20]"
                src={src}
                alt={alt || ""}
                loading={"lazy"}
                fill
                sizes="100vw"
              />

              {/* Background overlay gradient that appears after image is in focus */}
              <motion.div
                className={cnb(
                  "absolute size-full bg-opacity-80 z-[-10] bg-gradient-to-r from-10%",
                  {
                    "from-stone-dark to-transparent": bgColor === "stone-dark",
                    "from-cardinal-red-dark to-transparent": bgColor === "red",
                  },
                )}
                variants={overlayGradientVariants}
              />
            </motion.div>

            <Container
              className={cnb(
                "relative flex items-center justify-start w-full z-20 rs-py-10 rs-px-2 2xl:px-0",
              )}
              width="full"
            >
              {/* Text content that fades in with the background overlay */}
              <motion.div variants={contentVariants} className="text-white">
                <FlexBox
                  direction="col"
                  className="z-50 max-w-full lg:max-w-600"
                >
                  <Heading
                    id="page-title"
                    tabIndex={-1}
                    as="h1"
                    size="f6"
                    weight="normal"
                    mb="0"
                  >
                    {heading}
                  </Heading>
                  {chapter && (
                    <ChapterLabel
                      className="order-first rs-mb-0"
                      text={chapter}
                    />
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
              </motion.div>
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
      </motion.div>
    </header>
  );
};
