import { HTMLAttributes } from "react";
import { Container } from "../Container";
import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import { cnb } from "cnbuilder";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { TimelineImage } from "./TimelineImage";

type TimelineDetailsProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  year: string;
  href?: string;
  body: string;
  cta?: React.ReactNode;
  image: string;
  bgColor?: "fog-light" | "red-gradient";
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
  cta,
  image,
  bgColor = "fog-light",
  align = "left",
  isSelected,
  onClose,
  ...props
}: TimelineDetailsProps) => (
  <Container
    {...props}
    as="section"
    bgColor={bgColor}
    width="site"
    py={5}
    className="overflow-hidden"
  >
    <FlexBox
      alignItems="start"
      justifyContent="between"
      gap
      className="relative mr-0 au-ml-auto flex-col lg:flex-row"
    >
      <Container className="w-1/2 lg:rs-pr-9 ml-0 flex flex-col">
        {heading && (
          <Heading
            align="left"
            font="dm-sans"
            size={3}
            weight="normal"
            className="2xl:whitespace-pre-line -mt-01em xl:max-w-1200"
          >
            {heading}
          </Heading>
        )}
        {year && (
          <Text
            font="dm-mono"
            weight="normal"
            mb="none"
            size={2}
            className="order-first mt-28 mb-38"
          >
            {year}
          </Text>
        )}
        {body && (
          <Text
            font="dm-sans"
            variant="big"
            weight="normal"
            className="max-w-[50ch] rs-mb-3 *:*:leading-snug"
          >
            {body}
          </Text>
        )}
        {cta}
      </Container>
      <div
        className={cnb(
          "aspect-[1/1] group relative w-1/2 h-full perspective-600",
          {
            "order-first": align === "left",
          },
        )}
      >
        <TimelineImage size="full" src={image} />
      </div>
      <button className="absolute top-0 right-0 group" onClick={onClose}>
        <span className="sr-only">Close {heading} details</span>
        <XCircleIcon
          width={50}
          className="text-fog-dark group-hocus:text-digital-red"
        />
      </button>
    </FlexBox>
  </Container>
);
