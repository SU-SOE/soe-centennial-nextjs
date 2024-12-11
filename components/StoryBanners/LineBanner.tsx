import { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import BannerLineart from "@/components/images/banner-lineart";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";

type LineBannerProps = HTMLAttributes<HTMLDivElement> & {
  hasLineArt?: boolean;
  heading: string;
  superhead: string;
  body: string;
  byline?: string;
  bgColor?: BgColorType;
  caption?: string;
  src: string;
  alt?: string;
  lineVariant?: "a" | "b" | "default";
};

export const LineBanner = ({
  bgColor = "red-gradient",
  hasLineArt = false,
  heading,
  superhead,
  body,
  byline,
  caption,
  src,
  alt,
  lineVariant,
  ...props
}: LineBannerProps) => (
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
        <BannerLineart
          variant={lineVariant}
          className="absolute top-0 left-0 flex justify-center items-center z-10"
        />
      )}
      <div className="w-full 2xl:max-w-[1050px] flex flex-col xl:flex-row items-center sm:items-start xl:items-center justify-center h-full justify-between xl:gap-50">
        <FlexBox direction="col" className="z-50 max-w-full lg:max-w-[670px]">
          <Heading size={6} weight="normal" mb="none">
            {heading}
          </Heading>
          <Text className="order-first" mb={2} font="dm-mono">
            {superhead}
          </Text>
          <Text variant="overview" mb="none" className="rs-mt-5">
            {body}
          </Text>
          {byline && (
            <Text mb="none" size="base" className="rs-mt-4">
              {byline}
            </Text>
          )}
        </FlexBox>
      </div>
    </Container>
  </Container>
);
