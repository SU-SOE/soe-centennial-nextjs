import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { BgColorType } from "@/components/Container/Container.types";
import { cnb } from "cnbuilder";
import { Heading, Text } from "@/components/Typography";
import * as styles from "@/components/Container/Container.styles";
import { ChapterLabel } from "./ChapterLabel";
import {
  AnimateInView,
  AnimateInViewProps,
} from "@/components/Animate/AnimateInView";
import { Link } from "@/components/Cta/Link";

export type StoryCardProps = HTMLAttributes<HTMLElement> &
  Omit<AnimateInViewProps, "children"> & {
    as?: "article" | "div" | "li";
    heading: string;
    superhead?: string;
    body?: string;
    chapter?: string;
    chapterColor?: "stone" | "stone-dark" | "archway-dark" | "digital-red";
    href: string;
    headerTag?: "h2" | "h3";
    isHeadingLarge?: boolean;
    bgColor?: BgColorType;
    src?: string;
    alt?: string;
    isHorizontal?: boolean;
  };

export const StoryCard = ({
  as: AsComponent = "div",
  heading,
  superhead,
  body,
  chapter,
  chapterColor,
  href,
  headerTag = "h2",
  isHeadingLarge = false,
  bgColor = "white",
  src,
  alt,
  isHorizontal = false,
  className,
  animation,
  delay,
  duration,
  ...props
}: StoryCardProps) => {
  const isDarkBg = (() => {
    switch (bgColor) {
      case "red":
      case "stone-dark":
      case "black":
        return true;
      default:
        return false;
    }
  })();

  return (
    <AsComponent {...props} className={className}>
      <AnimateInView animation={animation} delay={delay} duration={duration}>
        <div
          className={cnb(
            "relative overflow-hidden w-full h-fit rounded-[25px] shadow-lg group transition-all duration-1000 ease-in-out hocus:shadow-2xl outline outline-transparent hocus:outline-4 hocus:outline-digital-red-xlight",
            {
              "flex flex-col lg:flex-row items-center max-w-1400 mx-auto":
                isHorizontal,
              "text-white": isDarkBg,
              "text-stone-dark": !isDarkBg,
            },
            bgColor && styles.bgColors[bgColor],
          )}
        >
          {src && (
            <div
              className={cnb("relative aspect-[1/1] w-full overflow-hidden", {
                "lg:w-1/2": isHorizontal,
              })}
            >
              <Image
                className="size-full object-cover object-center group-hocus-within:scale-105 transition duration-1000"
                src={src}
                alt={alt || ""}
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          )}
          <div
            className={cnb("flex flex-col rs-pt-3 rs-pb-4 rs-px-2", {
              "w-full lg:w-1/2": isHorizontal,
            })}
          >
            <Heading
              as={headerTag}
              className={cnb("type-2", { "lg:fluid-type-5": isHeadingLarge })}
              weight="normal"
              mb="0"
            >
              <Link
                href={href}
                className="stretched-link"
                linkType={isDarkBg ? "story-invert" : "story"}
              >
                {heading}
              </Link>
            </Heading>
            {chapter && (
              <ChapterLabel
                text={chapter}
                className="order-first"
                chipColor={chapterColor}
              />
            )}
            {superhead && (
              <Text
                className="order-first"
                size="small"
                mb="base"
                font="dm-mono"
              >
                {superhead}
              </Text>
            )}
            {body && (
              <Text size="base" mb="0" className="rs-mt-neg1">
                {body}
              </Text>
            )}
          </div>
        </div>
      </AnimateInView>
    </AsComponent>
  );
};
