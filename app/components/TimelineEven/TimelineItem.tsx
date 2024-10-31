import { cnb } from "cnbuilder";
import * as styles from "./TimelineItem.styles";
import * as types from "./TimelineItem.types";
import { Heading, Text } from "../Typography";

interface TimelineItemProps {
  heading: string;
  year: string;
  image: string;
  size?: types.SizeType;
  trapezoid?: types.TrapezoidType;
  className?: string;
}

const TimelineItem = ({
  heading,
  year,
  image,
  size = "medium",
  trapezoid = "left",
  className,
  ...props
}: TimelineItemProps) => {
  const imageSize = styles.size[size];
  const trapezoidType = styles.trapezoid[trapezoid];

  return (
    <div {...props} className="flex flex-col">
      <button
        className={cnb(
          "group relative hocus:transform-none",
          trapezoidType,
          className,
        )}
      >
        <div
          className={cnb(
            "aspect-[1/1] group relative perspective-600",
            imageSize,
          )}
        >
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
    </div>
  );
};

export default TimelineItem;
