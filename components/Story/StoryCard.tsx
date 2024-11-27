import Image from "next/image";
import React, { ElementType, HTMLAttributes } from "react";
import { BgColorType } from "@/components/Container/Container.types";
import { cnb } from "cnbuilder";
import { Heading, Text } from "@/components/Typography";
import * as styles from "@/components/Container/Container.styles";

type StoryCardProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  superhead?: string;
  body?: string;
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
        "overflow-hidden rs-mb-5 w-full h-fit rounded-[25px] shadow-lg lg:mb-0 lg:max-w-[920px] xl:max-w-[980px] stretched-link transition duration-500 hocus:shadow-2xl",
        { "flex flex-col md:flex-row items-center": isHorizontal },
        bgColor && styles.bgColors[bgColor],
        className,
      )}
    >
      {imageUrl && (
        <div className="relative aspect-[1/1] w-full">
          <Image
            className="w-full h-full object-cover object-center"
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
        >
          <a href={href}>{heading}</a>
        </Heading>
        {superhead && (
          <Text className="order-first" size="base" mb="base" font="dm-mono">
            {superhead}
          </Text>
        )}
        {body && (
          <Text size="base" mb="none" className="rs-mt-neg1">
            {body}
          </Text>
        )}
      </div>
    </CardWrapper>
  );
};
