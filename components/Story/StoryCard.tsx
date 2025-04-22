import Image from "next/image";
import React, { ElementType, HTMLAttributes } from "react";
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

export type StoryCardProps = HTMLAttributes<HTMLDivElement> &
  Omit<AnimateInViewProps, "children"> & {
    heading: string;
    superhead?: string;
    body?: string;
    chapter?: string;
    href: string;
    headerTag?: "h2" | "h3";
    isHeadingLarge?: boolean;
    bgColor?: BgColorType;
    imageUrl: string;
    imageAlt?: string;
    isHorizontal?: boolean;
    isArticle?: boolean;
  };

export const StoryCard = ({
  heading,
  superhead,
  body,
  chapter,
  href,
  headerTag = "h2",
  isHeadingLarge = false,
  bgColor = "white",
  imageUrl,
  imageAlt,
  isHorizontal = false,
  isArticle,
  className,
  ...props
}: StoryCardProps) => {
  const CardWrapper: ElementType = isArticle ? "article" : "div";

  return (
    <AnimateInView {...props} className={className}>
      <CardWrapper
        className={cnb(
          "relative overflow-hidden w-full h-fit rounded-[25px] shadow-lg group transition-all duration-1000 ease-in-out hocus:shadow-2xl outline outline-transparent hocus:outline-4 hocus:outline-digital-red-xlight",
          {
            "flex flex-col lg:flex-row items-center max-w-1400 mx-auto":
              isHorizontal,
          },
          bgColor && styles.bgColors[bgColor],
        )}
      >
        {imageUrl && (
          <div
            className={cnb("relative aspect-[1/1] w-full overflow-hidden", {
              "lg:w-1/2": isHorizontal,
            })}
          >
            <Image
              className="w-full h-full object-cover object-center group-hocus-within:scale-105 transition duration-1000"
              src={imageUrl}
              alt={imageAlt || ""}
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
            <Link href={href} className="stretched-link" linkType="story">
              {heading}
            </Link>
          </Heading>
          {superhead && (
            <Text className="order-first" size="small" mb="base" font="dm-mono">
              {superhead}
            </Text>
          )}
          {chapter && <ChapterLabel text={chapter} className="order-first" />}
          {body && (
            <Text size="base" mb="0" className="rs-mt-neg1">
              {body}
            </Text>
          )}
        </div>
      </CardWrapper>
    </AnimateInView>
  );
};
