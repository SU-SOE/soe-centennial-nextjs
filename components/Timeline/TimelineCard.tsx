import { HTMLAttributes } from "react";
import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";
import { cnb } from "cnbuilder";
import { TimelineImage } from "./TimelineImage";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { AnimateInView, AnimationType } from "@/components/Animate";
import {
  paddingTops,
  paddingBottoms,
  paddingVerticals,
  marginTops,
  marginBottoms,
  marginVerticals,
  type MarginType,
  type PaddingType,
} from "@/utilities/datasource";
import { Trapezoid } from "../images/trapezoid";

type TimelineCardProps = HTMLAttributes<HTMLDivElement> & {
  as?: types.TimelineCardElementType;
  heading: string;
  year: string;
  body: string;
  anchor?: string;
  image: string;
  animation?: AnimationType;
  delay?: number;
  bgColor?: types.BgColorType;
  align?: "right" | "left";
  width?: types.WidthType;
  isHorizontal?: boolean;
  pt?: PaddingType;
  pb?: PaddingType;
  py?: PaddingType;
  mt?: MarginType;
  mb?: MarginType;
  my?: MarginType;
};

export const TimelineCard = ({
  as: AsComponent = "div",
  py,
  pt = 9,
  pb = 3,
  mt = 3,
  mb,
  my,
  heading,
  year,
  body,
  anchor = "/",
  image = "https://placecats.com/neo/600/600",
  animation,
  delay,
  bgColor,
  width = "fit",
  align = "left",
  isHorizontal = false,
  className,
  ...props
}: TimelineCardProps) => {
  const animationType =
    animation || align === "left" ? "slideInFromLeft" : "slideInFromRight";
  return (
    <AnimateInView {...props} animation={animationType} className={className}>
      <AsComponent
        className={cnb(
          "h-fit relative group",
          bgColor ? styles.bgColors[bgColor] : "",
          py ? paddingVerticals[py] : "",
          pt ? paddingTops[pt] : "",
          pb ? paddingBottoms[pb] : "",
          my ? marginVerticals[my] : "",
          mt ? marginTops[mt] : "",
          mb ? marginBottoms[mb] : "",
          width ? styles.widths[width] : "",
          className,
        )}
      >
        <FlexBox
          alignItems="center"
          className={styles.wrapper(align, isHorizontal)}
        >
          <div className={cnb(styles.contentWrapper(isHorizontal))}>
            {heading && (
              <Heading
                leading="normal"
                size={1}
                font="dm-sans"
                weight="normal"
                className={styles.heading}
              >
                <Link
                  className="font-inherit stretched-link"
                  href={`/timeline#${anchor}`}
                >
                  {heading}
                  <span className="whitespace-nowrap">
                    &#65279;
                    <ArrowRightIcon
                      width={25}
                      className="transition ml-03em group-hocus:translate-x-02em text-digital-red-light inline"
                    />
                  </span>
                </Link>
              </Heading>
            )}
            {year && (
              <Text
                font="dm-mono"
                size={2}
                weight="normal"
                className={styles.superhead}
              >
                {year}
              </Text>
            )}
          </div>
          {image && (
            <div className={styles.imageWrapper(align, isHorizontal)}>
              <TimelineImage
                src={image}
                trapezoidAngle={align}
                size={isHorizontal ? "xlarge" : "large"}
                className="relative z-10"
              />
              {isHorizontal && (
                <Trapezoid
                  className={cnb(
                    "absolute top-[-25%] z-0 flex items-center overflow-hidden w-350 md:w-[430px] lg:w-[536px] xl:w-[637px] 2xl:w-900 h-350 md:h-[430px] lg:h-[536px] xl:h-[637px] 2xl:h-900",
                    {
                      "right-[-50%]": align === "right",
                      "left-[-50%] rotate-180": align === "left",
                    },
                  )}
                />
              )}
            </div>
          )}
        </FlexBox>
      </AsComponent>
    </AnimateInView>
  );
};
