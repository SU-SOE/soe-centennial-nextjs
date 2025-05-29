import React, { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { Heading, Text } from "@/components/Typography";
import { ChapterLabel } from "../Story/ChapterLabel";
import {
  AnimateInView,
  AnimateInViewProps,
} from "@/components/Animate/AnimateInView";
import { Container } from "@/components/Container";
import { Link } from "@/components/Cta/Link";
import TeaserCarousel, { TeaserCarouselProps } from "./TeaserCarousel";

export type TeaserCardProps = HTMLAttributes<HTMLDivElement> &
  Omit<AnimateInViewProps, "children"> &
  TeaserCarouselProps & {
    heading: string;
    superhead?: string;
    body?: React.ReactNode | string;
    chapter?: string;
    href?: string;
    headerTag?: "h2" | "h3";
    isHeadingLarge?: boolean;
  };

export const TeaserCard = ({
  heading,
  superhead,
  body,
  chapter,
  href,
  headerTag = "h2",
  isHeadingLarge = false,
  className,
  images,
  ...props
}: TeaserCardProps) => {
  return (
    <Container {...props} as="section" mt={7} mb={8} className={className}>
      <AnimateInView>
        <div
          className={cnb(
            "group mx-auto relative flex flex-col lg:flex-row justify-center items-center gap-50 xl:gap-95 rs-py-4 w-full h-fit lg:max-w-[130rem] xl:max-w-[160rem]",
          )}
        >
          <TeaserCarousel images={images} />
          {/* {imageUrl && (
            <div className="relative shadow-2xl trnaslate-all ease-in-out duration-500 rotate-[10deg] group-hocus:rotate-[8deg] mx-28 aspect-[2/3] w-full max-w-300 overflow-hidden">
              <Image
                className="size-full object-cover object-center group-hocus-within:scale-105 transition duration-1000"
                src={imageUrl}
                alt={alt || ""}
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          )} */}
          <div className="flex flex-col rs-pt-3 rs-pb-4 rs-px-2">
            <Heading
              as={headerTag}
              size={isHeadingLarge ? "f5" : "f4"}
              weight="normal"
              mb="none"
              className="mb-0"
            >
              {href && (
                <Link href={href} className="stretch-link" linkType="story">
                  {heading}
                </Link>
              )}
              {!href && heading}
            </Heading>
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
            {chapter && <ChapterLabel text={chapter} className="order-first" />}
            {body && (
              <Text size="base" mb="none" className="rs-mt-3">
                {body}
              </Text>
            )}
          </div>
        </div>
      </AnimateInView>
    </Container>
  );
};
