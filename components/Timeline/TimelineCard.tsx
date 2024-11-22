import { HTMLAttributes } from "react";
import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import * as styles from "./TimelineCard.styles";
import * as types from "./TimelineCard.types";
import { cnb } from "cnbuilder";
import { TimelineImage } from "./TimelineImage";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { AnimateInView, AnimationType } from "@/components/Animate";
import { PaddingType, paddingVerticals } from "@/utilities/datasource";

type TimelineCardProps = HTMLAttributes<HTMLDivElement> & {
  as?: types.TimelineCardElementType;
  heading: string;
  year: string;
  body: string;
  cta?: string;
  image: string;
  animation?: AnimationType;
  delay?: number;
  bgColor?: types.BgColorType;
  align?: "right" | "left";
  width?: types.WidthType;
  isHorizontal?: boolean;
  py?: PaddingType;
};

export const TimelineCard = ({
  as: AsComponent = "div",
  py = 5,
  heading,
  year,
  body,
  cta = "/",
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
    <AnimateInView animation={animationType} className={className}>
      <AsComponent
        {...props}
        className={cnb(
          bgColor ? styles.bgColors[bgColor] : "",
          py ? paddingVerticals[py] : "",
          width ? styles.widths[width] : "",
        )}
      >
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
                <Link className="font-inherit" href={cta}>
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
              <TimelineImage src={image} trapezoidAngle={align} size="full" />
            </div>
          )}
        </FlexBox>
      </AsComponent>
    </AnimateInView>
  );
};
