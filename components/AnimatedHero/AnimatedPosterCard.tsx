"use client";

import React, { HTMLAttributes } from "react";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Heading, Text } from "@/components/Typography";
import { ChapterLabel } from "@/components/Story/ChapterLabel";
import { AnimateInView } from "@/components/Animate";
import { MaskAnimation } from "./MaskAnimation";
import { Button } from "@/components/Cta";
import { useReducedMotion } from "motion/react";
import { NoMotionSvg } from "./NoMotionSvg";

type AnimatedPosterCardProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  superhead?: string;
  chapter?: string;
  dek?: string;
  body?: string;
  buttonText: string;
  link: string;
};

export const AnimatedPosterCard = ({
  heading,
  superhead,
  chapter,
  dek,
  body,
  buttonText,
  link,
  ...props
}: AnimatedPosterCardProps) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Container
      {...props}
      width="site"
      className="2xl:p-0 2xl:w-full 2xl:max-w-1300 rs-mb-7"
    >
      <Container
        bgColor="red"
        width="full"
        className="relative rounded-[30px] overflow-hidden group transition duration-1000 rs-py-7 rs-px-4"
      >
        <FlexBox
          alignItems="center"
          className="flex flex-col justify-between lg:flex-row z-50 relative lg:grid-gap w-full 2xl:mx-auto 2xl:max-w-1300"
        >
          <div className="w-full lg:w-1/2 max-w-480">
            {prefersReducedMotion ? (
              <NoMotionSvg />
            ) : (
              <>
                <div className="hidden sm:block">
                  <MaskAnimation />
                </div>
                <NoMotionSvg className="sm:hidden" />
              </>
            )}
          </div>
          <div className="flex flex-col text-left rs-pt-3 [&_p]:max-w-800 [&_h*]:max-w-1100 w-full lg:min-w-1/2">
            <AnimateInView animation="slideUp" delay={0.5}>
              <Heading size="f4" weight="normal" mb="0">
                {heading}
              </Heading>
            </AnimateInView>
            <AnimateInView
              animation="slideUp"
              delay={0.25}
              className="order-first"
            >
              {chapter && <ChapterLabel text={chapter} />}
              {superhead && (
                <Text mb="base" font="dm-mono">
                  {superhead}
                </Text>
              )}
            </AnimateInView>
            <AnimateInView animation="slideUp" delay={0.75}>
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
            <AnimateInView animation="slideUp" delay={1} className="rs-mt-2">
              <Button href={link}>{buttonText}</Button>
            </AnimateInView>
          </div>
        </FlexBox>
      </Container>
    </Container>
  );
};
