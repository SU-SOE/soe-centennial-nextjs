import { HTMLAttributes } from "react";
import { Container } from "../Container";
import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import { cnb } from "cnbuilder";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { TimelineImage } from "./TimelineImage";
import { AnimateInView } from "../Animate";

type TimelineDetailsProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  year: string;
  href?: string;
  body: string;
  image: string;
  alt: string;
  align?: "right" | "left";
  width?: "full" | "narrow";
  isSelected?: boolean;
  onClose?: () => void;
};

export const TimelineDetails = ({
  heading,
  year,
  href,
  body,
  image,
  alt,
  align = "left",
  isSelected,
  onClose,
  ...props
}: TimelineDetailsProps) => (
  <Container
    {...props}
    as="section"
    width="site"
    py={5}
    className="overflow-hidden"
  >
    <FlexBox
      alignItems="start"
      justifyContent="between"
      gap
      className="relative mr-0 au-ml-auto flex-col lg:flex-row items-center"
    >
      <Container className="w-1/2 lg:rs-pr-9 ml-0 flex flex-col">
        {heading && (
          <AnimateInView delay={0.8} animation="slideInFromRight">
            <Heading
              align="left"
              font="dm-sans"
              size={3}
              weight="normal"
              className="2xl:whitespace-pre-line -mt-01em xl:max-w-1200"
            >
              {heading}
            </Heading>
          </AnimateInView>
        )}
        {year && (
          <AnimateInView
            delay={0.5}
            animation="slideDown"
            className="order-first "
          >
            <Text
              font="dm-mono"
              weight="normal"
              mb="none"
              size={2}
              className="mt-28 mb-38"
            >
              {year}
            </Text>
          </AnimateInView>
        )}
        {body && (
          <AnimateInView delay={1} animation="slideUp">
            <Text
              font="dm-sans"
              variant="big"
              weight="normal"
              className="max-w-[50ch] rs-mb-3 *:*:leading-snug"
            >
              {body}
            </Text>
          </AnimateInView>
        )}
      </Container>
      <div
        className={cnb(
          "aspect-[1/1] group relative w-1/2 h-full perspective-600",
          {
            "order-first": align === "left",
          },
        )}
      >
        <AnimateInView duration={1} delay={0.8} animation="slideInFromLeft">
          <TimelineImage size="full" src={image} alt={alt} />
        </AnimateInView>
      </div>
      <button className="absolute top-0 right-0 group" onClick={onClose}>
        <span className="sr-only">Close {heading} details</span>
        <XMarkIcon
          width={50}
          className="transition p-6 rounded-full text-fog-dark border-fog-dark border-2 group-hocus:border-digital-red group-hocus:text-digital-red"
        />
      </button>
    </FlexBox>
  </Container>
);
