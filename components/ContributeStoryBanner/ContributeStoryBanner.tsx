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
    width="site"
    pt={2}
    pb={7}
  >
    <Container
      className={cnb(
        "relative flex flex-col lg:flex-row items-center rs-pt-3 rs-pb-1 rs-px-9 h-full min-h-500 justify-between gap-50",
        {
          "*:text-white": bgColor === "red-gradient",
          "*:text-stone-dark": bgColor !== "red-gradient",
        },
      )}
      width="full"
    >
      <FlexBox direction="col" className="z-50 max-w-[670px] mt-50 rs-mb-6">
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
        <Text mb="none" className="order-first font-dm-mono mb-1 mt-50">
          Get involved
        </Text>
        <Text mb="none">
          Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam.
          Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id
          mi blandit lobortis eget in enim.
        </Text>
      </FlexBox>
      <div className="shrink-0 z-50 mt-50">
        <Button isLight={bgColor !== "red-gradient" ? true : false} href="/">
          Submit your story
        </Button>
      </div>
      {hasLineArt && (
        <BannerLineart className="absolute top-0 left-0 flex justify-center items-center z-10" />
      )}
    </Container>
  </Container>
);
