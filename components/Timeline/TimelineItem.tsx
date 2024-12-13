import { cnb } from "cnbuilder";
import * as types from "./TimelineItem.types";
import { Heading, Text } from "../Typography";
import { TimelineImage } from "./TimelineImage";
import { HTMLAttributes, forwardRef } from "react";

type TimelineItemProps = HTMLAttributes<HTMLButtonElement> & {
  heading: string;
  year: string;
  image: string;
  size?: types.SizeType;
  trapezoid?: types.TrapezoidType;
  className?: string;
  onClick?: () => void;
};

export const TimelineItem = forwardRef<HTMLButtonElement, TimelineItemProps>(
  (
    {
      heading,
      year,
      image,
      size = "medium",
      trapezoid = "left",
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        className={cnb("flex flex-col", className)}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <TimelineImage
          src={image}
          alt={heading}
          size={size}
          trapezoidAngle={trapezoid}
        />
        <div className="flex flex-col *:font-dm-sans">
          <Heading className="type-0" weight="normal">
            {heading}
          </Heading>
          <Text
            font="serif"
            variant="overview"
            weight="normal"
            className="order-first mt-28"
          >
            {year}
          </Text>
        </div>
      </button>
    );
  },
);

TimelineItem.displayName = "TimelineItem";
