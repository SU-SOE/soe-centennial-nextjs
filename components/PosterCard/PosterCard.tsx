"use client";

import React, { HTMLAttributes, useRef } from "react";
import { BgColorType } from "@/components/Container";
import Image from "next/image";
import { Heading, Text } from "@/components/Typography";
import { cnb } from "cnbuilder";
import { Link } from "@/components/Cta/Link";
import { ChapterLabel } from "../Story/ChapterLabel";
import { motion, useScroll, useTransform } from "motion/react";
import * as styles from "@/components/Container/Container.styles";

const CardContent = ({
  bgColor,
  body,
  dek,
  link,
  heading,
  chapter,
  superhead,
  byline,
  src,
  alt,
}: PosterCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <motion.div
      ref={ref}
      className="cc flex justify-center items-center w-full pt-[15rem] lg:pt-[20rem] z-[-10]"
      style={{ y }}
    >
      <div className="relative flex flex-col items-center justify-between md:flex-row relative md:grid-gap w-full max-w-300 lg:max-w-900 mx-auto 2xl:max-w-1200">
        <div
          className={
            (cnb("flex flex-col text-left [&_p]:max-w-800 [&_h*]:max-w-1100"),
            bgColor !== "white" ? "text-white" : "text-stone-dark")
          }
        >
          <Heading
            size="f4"
            weight="normal"
            className={body || (dek && "rs-mb-3 lg:rs-mb-5")}
          >
            <Link
              href={link}
              className="stretched-link"
              linkType={bgColor === "white" ? "poster" : "poster-invert"}
            >
              {heading}
            </Link>
          </Heading>
          <div className="order-first">
            {chapter && <ChapterLabel text={chapter} />}
            {superhead && (
              <Text mb={2} font="dm-mono">
                {superhead}
              </Text>
            )}
          </div>
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
          {byline && (
            <Text mb="none" size="base" className="rs-mt-4">
              {byline}
            </Text>
          )}
        </div>
        <div className="w-full h-full overflow-hidden relative rounded-[30px] mb-10 aspect-[1/1] border-5 border-transparent transition duration-1000 group-hocus:border-digital-red-xlight">
          <Image src={src} alt={alt || ""} fill className="object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

type PosterCardProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  superhead?: string;
  chapter?: string;
  dek?: string;
  body?: string;
  byline?: string;
  bgColor?: BgColorType;
  caption?: string;
  hasBgImage?: boolean;
  src: string;
  alt?: string;
  link: string;
};

export const PosterCard = ({
  bgColor = "stone-dark",
  hasBgImage = false,
  src,
  alt,
  link,
  ...props
}: PosterCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], [0, 30]);

  return (
    <article className="w-full rs-mb-3 h-[150vh] relative group transition duration-1000">
      <motion.div
        ref={ref}
        style={{ scale, borderRadius }}
        className={cnb(
          "sticky overflow-hidden w-full h-[calc(100vh_-_30rem)] top-[2rem] z-[-50]",
          bgColor && styles.bgColors[bgColor],
        )}
      >
        {hasBgImage && (
          <div className="relative h-full w-full top-0 left-0">
            <Image
              className="ed11y-ignore object-cover object-center z-0"
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
      </motion.div>
      <CardContent
        src={src}
        link={link}
        alt={alt}
        bgColor={bgColor}
        {...props}
      />
    </article>
  );
};
