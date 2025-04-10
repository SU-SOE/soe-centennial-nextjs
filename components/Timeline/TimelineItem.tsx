import { cnb } from "cnbuilder";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";
import { Heading, Text } from "../Typography";
import { TimelineImage } from "./TimelineImage";
import { HTMLAttributes, forwardRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

type TimelineItemProps = HTMLAttributes<HTMLButtonElement> & {
  /** The main title of the timeline item. */
  heading: string;
  /** The year associated with this timeline item. */
  year: string;
  /** The URL of the image for this timeline item. */
  image: string;
  /** The size variant of the item (e.g. small, medium, large). */
  size?: types.SizeType;
  /** Defines the trapezoid shape direction. */
  trapezoid?: "left" | "right";
  /** Whether the timeline item is in an expanded state. */
  isExpanded?: boolean;
  /** Whether the timeline layout is horizontal. */
  isHorizontal?: boolean;
  /** Additional class names for styling. */
  className?: string;
  /** Click handler for the timeline item. */
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
      isHorizontal,
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
        className={cnb(
          "group flex flex-col relative",
          {
            "md:flex-row gap w-full justify-center items-center rs-mb-6":
              isHorizontal,
          },
          !isHorizontal && imageSize,
          className,
        )}
        onClick={onClick}
        tabIndex={0}
      >
        <TimelineImage
          src={image}
          alt=""
          size={size}
          trapezoidAngle={trapezoid}
          isExpanded={isExpanded}
          className={
            isHorizontal ? "w-1/2 h-full order-first md:order-last" : ""
          }
        />
        <div
          className={cnb("flex flex-col items-start md:rs-px-1", {
            "w-1/2": isHorizontal,
          })}
        >
          <Text
            font="dm-mono"
            weight="normal"
            leading="display"
            mb="none"
            size={2}
            className="rs-mt-2 mb-10"
            align="left"
          >
            {year}
          </Text>
          <Heading
            align="left"
            font="dm-sans"
            size={isHorizontal ? 3 : "base"}
            weight="normal"
            leading="normal"
            className="stretched-link transition-all ease-in-out duration-1000 text-stone-dark underline underline-offset-[5px] decoration-digital-red-light group-hocus:decoration-stone-dark cursor-pointer decoration-[2.5px]"
          >
            {heading}
            {!isHorizontal && (
              <span className="whitespace-nowrap">
                &#65279;
                <ArrowRightIcon
                  width={21}
                  className="transition-all ease-in-out duration-1000 ml-03em group-hocus:translate-x-02em text-digital-red-light inline-block"
                />
              </span>
            )}
          </Heading>
        </div>
      </button>
    );
  },
);

TimelineItem.displayName = "TimelineItem";
