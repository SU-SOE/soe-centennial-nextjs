import { cnb } from "cnbuilder";
import * as styles from "./TimelineItem.styles";
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
    const imageSize = styles.size[size];
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        className={cnb("flex flex-col", className, imageSize)}
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
        <div className="flex flex-col items-start">
          <Heading
            align="left"
            font="dm-sans"
            size="base"
            weight="normal"
            className="mt-18"
          >
            {heading}
          </Heading>
          <Text
            font="dm-mono"
            weight="normal"
            mb="none"
            size={2}
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
