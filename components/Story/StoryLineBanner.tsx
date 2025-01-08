import { HTMLAttributes } from "react";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import BannerLineart from "@/components/images/banner-lineart";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
import Image from "next/image";

type StoryLineBannerProps = HTMLAttributes<HTMLDivElement> & {
  hasLineArt?: boolean;
  heading: string;
  superhead: string;
  body: string;
  byline?: string;
  bgColor?: "stone-dark" | "red";
  caption?: string;
  src: string;
  alt?: string;
  lineVariant?: "a" | "b" | "default";
};

export const StoryLineBanner = ({
  bgColor = "red",
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
}: StoryLineBannerProps) => (
  <Container
    {...props}
    as="section"
    bgColor={bgColor}
    width="full"
    className="cc pt-[121px] md:rs-pt-9 lg:w-full lg:rs-px-7 mb-20 flex items-center justify-center relative 2xl:cc"
    pb={6}
  >
    <div className="h-full w-full absolute top-0 left-0 z-0">
      <Image
        className="ed11y-ignore object-cover z-0"
        src={src}
        alt={alt || ""}
        loading={"lazy"}
        fill
        sizes="100vw"
      />
      <div
        className={cnb(
          "absolute h-full w-full bg-opacity-80 z-10 bg-gradient-to-r from-50%",
          {
            "from-stone-dark to-transparent": bgColor === "stone-dark",
            "from-cardinal-red-dark to-transparent": bgColor === "red",
          },
        )}
      />
    </div>
    <Container
      className={cnb(
        "relative flex items-center justify-start w-full z-50 *:text-white",
        {
          "p-30 sm:p-50 md:p-68 lg:p-100 xl:rs-py-10 xl:rs-px-8": hasLineArt,
          "rs-py-5 rs-px-2 2xl:px-0": !hasLineArt,
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
      <FlexBox
        direction="col"
        className={cnb("z-50 max-w-full lg:max-w-[670px]", {
          "rs-mt-2": hasLineArt,
        })}
      >
        <Heading size={6} weight="normal" mb="none">
          {heading}
        </Heading>
        <Text className="order-first" mb={2} font="dm-mono">
          {superhead}
        </Text>
        <Text variant="overview" mb="none" className="rs-mt-8">
          {body}
        </Text>
        {byline && (
          <Text mb="none" size="base" className="rs-mt-4">
            {byline}
          </Text>
        )}
      </FlexBox>
    </Container>
  </Container>
);
