import { cnb } from "cnbuilder";
import { Heading, Text } from "../Typography";
import { TimelineImage } from "./TimelineImage";
import { HTMLAttributes, forwardRef } from "react";
import { AnimateInView } from "../Animate";

type TimelineItemFullProps = HTMLAttributes<HTMLButtonElement> & {
  heading: string;
  year: string;
  body?: string;
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
          "group flex flex-col relative md:flex-row gap w-full justify-center items-center rs-mb-6",
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
          className="w-1/2 h-full order-first md:order-last"
        />
        <div className="flex flex-col items-start md:rs-px-1 w-1/2">
          <Heading
            align="left"
            font="dm-sans"
            size={3}
            weight="normal"
            leading="normal"
            className="stretched-link transition-all ease-in-out duration-1000 text-stone-dark underline underline-offset-[5px] decoration-digital-red-light group-hocus:decoration-stone-dark cursor-pointer decoration-[2.5px]"
          >
            {heading}
          </Heading>
          <Text
            font="dm-mono"
            weight="normal"
            leading="display"
            mb="none"
            size={2}
            className="order-first rs-mt-2 mb-10"
            align="left"
          >
            {year}
          </Text>
          {body && isExpanded && (
            <AnimateInView animation="slideUp">
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
      </button>
    );
  },
);

TimelineItemFull.displayName = "TimelineItemFull";
