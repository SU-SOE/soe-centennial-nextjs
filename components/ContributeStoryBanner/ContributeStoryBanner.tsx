import { HTMLAttributes } from "react";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import BannerLineart from "@/components/images/banner-lineart";
import { cnb } from "cnbuilder";
import { Button } from "../Cta";
import { FlexBox } from "@/components/FlexBox";

type ContributeStoryBannerProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: "fog-light" | "red-gradient" | "blue";
  hasLineArt?: boolean;
};

export const ContributeStoryBanner = ({
  bgColor = "red-gradient",
  hasLineArt = false,
  ...props
}: ContributeStoryBannerProps) => (
  <Container
    {...props}
    as="section"
    bgColor={bgColor}
    width="full"
    className="cc lg:w-full lg:rs-px-7 mb-20 flex items-center justify-center"
    pt={2}
    pb={6}
  >
    <Container
      className={cnb(
        "relative 2xl:max-w-[1700px] flex items-center justify-center w-full",
        {
          "*:text-white": bgColor === "red-gradient",
          "*:text-stone-dark": bgColor !== "red-gradient",
          "p-30 sm:p-50 md:p-68 lg:p-100 xl:rs-py-10 xl:rs-px-8": hasLineArt,
          "rs-py-5 rs-px-2": !hasLineArt,
        },
      )}
      width="full"
    >
      {hasLineArt && (
        <BannerLineart className="absolute top-0 left-0 flex justify-center items-center z-10" />
      )}
      <div className="w-full 2xl:max-w-[1050px] flex flex-col xl:flex-row items-center sm:items-start xl:items-center justify-center h-full justify-between xl:gap-50">
        <FlexBox direction="col" className="z-50 max-w-full lg:max-w-[670px]">
          <Heading mb={5} className="font-normal">
            Contribute{" "}
            <span
              className={cnb("underline decoration-4 underline-offset-8", {
                "text-digital-red-xlight": bgColor === "red-gradient",
                "text-stone-dark": bgColor !== "red-gradient",
              })}
            >
              your stories
            </span>
          </Heading>
          <Text
            size={2}
            mb="none"
            font="dm-mono"
            className="order-first font-dm-mono mb-1 mt-70"
          >
            Get involved
          </Text>
          <Text size={1} mb="none">
            Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam.
            Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id
            mi blandit lobortis eget in enim.
          </Text>
        </FlexBox>
        <div className="shrink-0 z-50 my-48 md:mb-0">
          <Button isLight={bgColor !== "red-gradient" ? true : false} href="/">
            Submit your story
          </Button>
        </div>
      </div>
    </Container>
  </Container>
);
