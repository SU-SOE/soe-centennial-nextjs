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
          "h-fit relative",
          bgColor ? styles.bgColors[bgColor] : "",
          py ? paddingVerticals[py] : "",
          pt ? paddingTops[pt] : "",
          pb ? paddingBottoms[pb] : "",
          my ? marginVerticals[my] : "",
          mt ? marginTops[mt] : "",
          mb ? marginBottoms[mb] : "",
          width ? styles.widths[width] : "",
        )}
      >
        {isHorizontal && (
          <Trapezoid
            className={cnb(
              "absolute top-0 z-0 flex items-center overflow-hidden w-250 md:w-[300px] lg:w-[340px] xl:w-[420px] 2xl:w-600",
              {
                "right-0": align === "right",
                "left-0 rotate-180": align === "left",
              },
            )}
          />
        )}
        <FlexBox
          alignItems="center"
          className={styles.wrapper(align, isHorizontal)}
        >
          <div className={cnb(styles.contentWrapper(isHorizontal))}>
            {heading && (
              <Heading
                leading="display"
                size={1}
                font="dm-sans"
                weight="normal"
                className={styles.heading}
              >
                <Link className="font-inherit" href={`/timeline#${anchor}`}>
                  {heading}
                  <ArrowRightIcon
                    width={20}
                    className="ml-2 inline-block shrink-0 text-digital-red-light"
                  />
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
              />
            </div>
          )}
        </FlexBox>
      </AsComponent>
    </AnimateInView>
  );
};
