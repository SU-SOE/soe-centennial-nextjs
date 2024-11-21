import { HTMLAttributes } from "react";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import BannerLineart from "@/components/images/banner-lineart";

type AlumniBannerProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: "fog-light" | "red-gradient";
};

export const AlumniBanner = ({
  bgColor = "red-gradient",
  ...props
}: AlumniBannerProps) => (
  <Container
    {...props}
    as="section"
    bgColor={bgColor}
    width="site"
    py={9}
    className="overflow-hidden relative flex flex-col *:text-white rs-pt-2 rs-pb-1 rs-px-9 min-h-500"
  >
    <Heading className="rs-mb-5 font-normal">
      Contribute{" "}
      <span className="underline decoration-2 underline-offset-8">
        your stories
      </span>
    </Heading>
    <Text className="font-dm-mono order-first mb-1">Get involved</Text>
    <Text>
      Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean
      iaculis efficitur quam, quis dignissim lacus. Cras nec dui id mi blandit
      lobortis eget in enim.
    </Text>
    <BannerLineart className="absolute top-0 left-0 flex justify-center items-center rs-pt-1 rs-pb-2 rs-px-1" />
  </Container>
);
