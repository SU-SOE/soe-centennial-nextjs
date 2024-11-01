import { cnb } from "cnbuilder";
import * as styles from "./TimelineItem.styles";
import * as types from "./TimelineItem.types";
import { Heading, Text } from "../Typography";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

interface TimelineItemProps {
  heading: string;
  year: string;
  image: string;
  size?: types.SizeType;
  trapezoid?: types.TrapezoidType;
  className?: string;
  animationProps?: MotionProps;
}

const TimelineItem = ({
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
            className={cnb("aspect-[1/1] relative perspective-600", imageSize)}
          >
            <motion.div
              {...animationProps}
              className="absolute perspective-600 z-10 w-full h-full"
            >
              <div
                className={cnb(
                  "relative transform rounded-lg opacity-60 bg-digital-blue w-full h-full ease-in-out duration-500",
                  trapezoidType,
                  imageSize,
                )}
              />
            </motion.div>
            <img
              alt=""
              src={image}
              className="inset-0 w-full h-full object-cover rounded-lg transform ease-in-out duration-500"
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

export default TimelineItem;
