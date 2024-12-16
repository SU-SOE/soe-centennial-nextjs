import { cnb } from "cnbuilder";
import * as styles from "./TimelineItem.styles";
import * as types from "./TimelineItem.types";
import { Heading, Text } from "../Typography";
import { TimelineImage } from "./TimelineImage";
import { HTMLAttributes } from "react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

type TimelineItemProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  year: string;
  image: string;
  size?: types.SizeType;
  trapezoid?: "left" | "right";
  isExpanded?: boolean;
  className?: string;
  onClick?: () => void;
};

export const TimelineItem = ({
  heading,
  year,
  image,
  size = "medium",
  trapezoid = "left",
  className,
  onClick,
  isExpanded,
  ...props
}: TimelineItemProps) => {
  const imageSize = styles.size[size];

  return (
    <div
      {...props}
      className={cnb("group flex flex-col", className, imageSize)}
    >
      <TimelineImage
        src={image}
        alt={heading}
        size={size}
        trapezoidAngle={trapezoid}
        isExpanded={isExpanded}
      />
      <div className="flex flex-col items-start md:px-28">
        <Heading
          align="left"
          font="dm-sans"
          size="base"
          weight="normal"
          className="mt-18 leading-[2] transition duration-1000 text-stone-dark underline underline-offset-[5px] decoration-digital-red-light cursor-pointer decoration-4"
        >
          {heading}
          <ArrowRightIcon
            width={21}
            className="ml-03em text-digital-red-light inline-block"
          />
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
    </div>
  );
};
