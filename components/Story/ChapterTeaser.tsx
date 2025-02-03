import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { Heading, Text } from "@/components/Typography";
import { ChapterLabel } from "./ChapterLabel";
import {
  AnimateInView,
  AnimateInViewProps,
} from "@/components/Animate/AnimateInView";
import { Container } from "@/components/Container";
import { Link } from "@/components/Cta/Link";

export type ChapterTeaserProps = HTMLAttributes<HTMLDivElement> &
  Omit<AnimateInViewProps, "children"> & {
    heading: string;
    superhead?: string;
    body?: string;
    chapter?: string;
    href: string;
    headerTag?: "h2" | "h3";
    isHeadingLarge?: boolean;
    imageUrl: string;
    imageAlt?: string;
  };

export const ChapterTeaser = ({
  heading,
  superhead,
  body,
  chapter,
  href,
  headerTag = "h2",
  isHeadingLarge = false,
  className,
  imageUrl,
  imageAlt,
  ...props
}: ChapterTeaserProps) => {
  return (
    <AnimateInView {...props} className={className}>
      <Container>
        <article
          className={cnb(
            "group mx-auto relative flex flex-col lg:flex-row justify-center items-center gap-50 xl:gap-95 rs-py-4 w-full h-fit lg:max-w-900 xl:max-w-[110rem]",
          )}
        >
          {imageUrl && (
            <div className="relative rounded-xl trnaslate-all ease-in-out duration-500 rotate-[10deg] group-hocus:rotate-[8deg] mx-28 aspect-[2/3] w-full max-w-300 overflow-hidden">
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
              size={isHeadingLarge ? "f5" : "f4"}
              weight="normal"
              mb="none"
            >
              <Link href={href} className="stretch-link" linkType="story">
                {heading}
              </Link>
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
              <Text size="base" mb="none" className="rs-mt-neg1">
                {body}
              </Text>
            )}
          </div>
        </article>
      </Container>
    </AnimateInView>
  );
};
