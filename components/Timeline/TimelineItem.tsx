import { cnb } from "cnbuilder";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";
import { Heading, Text } from "../Typography";
import { TimelineImage } from "./TimelineImage";
import { HTMLAttributes, forwardRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

type TimelineItemProps = HTMLAttributes<HTMLButtonElement> & {
  heading: string;
  year: string;
  image: string;
  size?: types.SizeType;
  trapezoid?: "left" | "right";
  isExpanded?: boolean;
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
      isExpanded,
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
        className={cnb("group flex flex-col relative", className, imageSize)}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <TimelineImage
          src={image}
          alt={heading}
          size={size}
          trapezoidAngle={trapezoid}
          isExpanded={isExpanded}
        />
        <div className="flex flex-col items-start md:rs-px-1">
          <Heading
            align="left"
            font="dm-sans"
            size="base"
            weight="normal"
            leading="normal"
            className="stretched-link transition text-stone-dark underline underline-offset-[5px] decoration-digital-red-light cursor-pointer decoration-[2.5px] group-hover:no-underline"
          >
            {heading}
            <ArrowRightIcon
              width={21}
              className="transition ml-03em group-hocus:translate-x-02em text-digital-red-light inline-block"
            />
          </Heading>
          <Text
            font="dm-mono"
            weight="normal"
            mb="base"
            size={2}
            className="order-first rs-mt-2"
            align="left"
          >
            {year}
          </Text>
        </div>
      </button>
    );
  },
);

TimelineItem.displayName = "TimelineItem";
