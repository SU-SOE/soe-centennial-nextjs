import Image from "next/image";
import React, { ElementType, HTMLAttributes } from "react";
import { BgColorType } from "@/components/Container/Container.types";
import { cnb } from "cnbuilder";
import { Heading, Text } from "@/components/Typography";
import * as styles from "@/components/Container/Container.styles";
import { ChapterLabel } from "./ChapterLabel";

type StoryCardProps = HTMLAttributes<HTMLDivElement> & {
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
    <CardWrapper
      {...props}
      className={cnb(
        "relative overflow-hidden rs-mb-5 w-full h-fit rounded-[25px] shadow-lg lg:mb-0 lg:max-w-[920px] xl:max-w-[980px] group transition-all duration-1000 ease-in-out hocus:shadow-2xl outline outline-transparent hocus:outline-4 hocus:outline-digital-red-xlight",
        { "flex flex-col md:flex-row items-center": isHorizontal },
        bgColor && styles.bgColors[bgColor],
        className,
      )}
    >
      {imageUrl && (
        <div className="relative aspect-[1/1] w-full overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center group-hocus-within:scale-105 transition duration-1000"
            src={imageUrl}
            alt={imageAlt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
          />
        </div>
      )}
      <div className="flex flex-col rs-pt-3 rs-pb-4 rs-px-2">
        <Heading
          as={headerTag}
          size={isHeadingLarge ? 3 : 2}
          weight="normal"
          mb="none"
          linkType="story"
        >
          <a href={href} className="stretched-link">
            {heading}
          </a>
        </Heading>
        {superhead && (
          <Text className="order-first" size="small" mb="base" font="dm-mono">
            {superhead}
          </Text>
        )}
        {body && (
          <Text size="base" mb="none" className="rs-mt-neg1">
            {body}
          </Text>
        )}
        {chapter && <ChapterLabel text={chapter} className="rs-mt-1" />}
      </div>
    </CardWrapper>
  );
};
