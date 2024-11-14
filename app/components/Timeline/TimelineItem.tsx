import { cnb } from "cnbuilder";
import * as styles from "./TimelineItem.styles";
import * as types from "./TimelineItem.types";
import { Heading, Text } from "../Typography";
import { AnimatePresence, MotionProps } from "framer-motion";

interface TimelineItemProps {
  heading: string;
  year: string;
  image: string;
  size?: types.SizeType;
  trapezoid?: types.TrapezoidType;
  className?: string;
  animationProps?: MotionProps;
}

export const TimelineItem = ({
  heading,
  year,
  image,
  size = "medium",
  trapezoid = "left",
  className,
  animationProps,
  ...props
}: TimelineItemProps) => {
  const imageSize = styles.size[size];
  const trapezoidType = styles.trapezoid[trapezoid];

  return (
    <div
      {...props}
      className={cnb("flex flex-col items-center justify-center", className)}
    >
      <AnimatePresence>
        <button className={cnb("group relative", trapezoidType)}>
          <div
            className={cnb(
              "aspect-[1/1] relative perspective-600 group-hocus:scale-105 transform ease-in-out duration-1000",
              imageSize,
            )}
          >
            <img
              alt=""
              src={image}
              className="inset-0 w-full h-full object-cover rounded-lg transform ease-in-out duration-1000"
            />
          </div>
        </button>
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
      </AnimatePresence>
    </div>
  );
};
