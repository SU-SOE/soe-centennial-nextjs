import { HTMLAttributes } from "react";
import { Container } from "../Container";
import { Heading, Text } from "../Typography";
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
    <div className="flex justify-between grid-gap w-full relative flex-col lg:flex-row items-center">
      <div className="md:w-1/2 lg:pr-55 ml-0 flex flex-col">
        {heading && (
          <AnimateInView delay={0.8} animation="slideInFromRight">
            <Heading
              align="left"
              font="dm-sans"
              size={3}
              weight="normal"
              className="-mt-01em"
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
            <p
              className="font-dm-sans cen-big-paragraph font-normal max-w-[50ch] rs-mb-3 leading-snug"
              dangerouslySetInnerHTML={{
                __html: typeof body === "string" ? body : "",
              }}
            ></p>
          </AnimateInView>
        )}
      </div>
      <div
        className={cnb(
          "mt-60 md:mt-0 aspect-[1/1] group relative w-full md:w-1/2 h-full perspective-600",
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
          className="transition p-6 rounded-full text-stone-dark border-stone-dark border-2 group-hocus:border-digital-red group-hocus:text-digital-red"
        />
      </button>
    </div>
  </Container>
);
