import { cnb } from "cnbuilder";
import * as types from "./TimelineItem.types";
import { Heading, Text } from "../Typography";
import { TimelineImage } from "./TimelineImage";

interface TimelineItemProps {
  heading: string;
  year: string;
  image: string;
  size?: types.SizeType;
  trapezoid?: types.TrapezoidType;
  className?: string;
  onClick?: () => void;
}

export const TimelineItem = ({
  heading,
  year,
  image,
  size = "medium",
  trapezoid = "left",
  className,
  onClick,
  ...props
}: TimelineItemProps) => {
  return (
    <button
      {...props}
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
};
