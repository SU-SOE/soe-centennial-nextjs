import { cnb } from "cnbuilder";
import { Heading, Text } from "../Typography";
import { TimelineImage } from "./TimelineImage";
import { HTMLAttributes, forwardRef } from "react";
import { AnimateInView } from "../Animate";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

type TimelineItemFullProps = HTMLAttributes<HTMLButtonElement> & {
  heading: string;
  year: string;
  body: string;
  image: string;
  alt: string;
  trapezoid?: "left" | "right";
  isExpanded?: boolean;
  className?: string;
  onClick?: () => void;
};

export const TimelineItemFull = forwardRef<
  HTMLButtonElement,
  TimelineItemFullProps
>(
  (
    {
      heading,
      year,
      body,
      image,
      alt,
      trapezoid = "left",
      className,
      onClick,
      isExpanded,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        className={cnb(
          "group relative flex flex-col md:flex-row gap w-full justify-center items-center lg:rs-mb-6",
          className,
        )}
        onClick={onClick}
        tabIndex={0}
      >
        <TimelineImage
          src={image}
          alt=""
          size="full"
          trapezoidAngle={trapezoid}
          isExpanded={isExpanded}
          className={cnb("w-full md:w-1/2 h-full order-first", {
            "md:order-last": trapezoid === "right",
          })}
        />
        <div className="relative flex flex-col items-start lg:rs-px-1 w-full md:w-1/2">
          <Text
            font="dm-mono"
            weight="normal"
            leading="display"
            mb="none"
            size={2}
            className="rs-mt-2 md:mt-0 mb-10"
            align="left"
          >
            {year}
          </Text>
          <Heading
            align="left"
            font="dm-sans"
            size="base"
            weight="normal"
            leading="normal"
            className="lg:type-3 transition-all ease-in-out duration-1000 text-stone-dark underline underline-offset-[5px] decoration-digital-red-light group-hocus:decoration-stone-dark cursor-pointer decoration-[2.5px]"
          >
            {heading}
            <span className="whitespace-nowrap">
              &#65279;
              <ArrowRightIcon
                width={21}
                className="transition-all ease-in-out duration-1000 ml-03em group-hocus:translate-x-02em text-digital-red-light inline-block"
              />
            </span>
          </Heading>
          {isExpanded && (
            <AnimateInView animation={"slideUp"}>
              <Text
                font="dm-sans"
                variant="big"
                weight="normal"
                align="left"
                className="max-w-[50ch] rs-mb-3 *:*:leading-snug"
              >
                {body}
              </Text>
            </AnimateInView>
          )}
        </div>
        {isExpanded && (
          <div
            className={cnb("hidden lg:block absolute top-0 right-0 group", {
              " md:left-0": trapezoid === "right",
            })}
          >
            <span className="sr-only">Close {heading} details</span>
            <XMarkIcon
              width={50}
              className="transition p-6 rounded-full text-stone-dark border-stone-dark border-2 group-hocus:border-digital-red group-hocus:text-digital-red"
            />
          </div>
        )}
      </button>
    );
  },
);

TimelineItemFull.displayName = "TimelineItemFull";
