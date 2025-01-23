import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";
import { cnb } from "cnbuilder";
import { TimelineImage } from "./TimelineImage";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { AnimateInView } from "@/components/Animate";
import {
  paddingTops,
  paddingBottoms,
  paddingVerticals,
  marginTops,
  marginBottoms,
  marginVerticals,
} from "@/utilities/datasource";

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
  image,
  animation,
  delay,
  bgColor,
  width = "fit",
  align = "left",
  className,
  ...props
}: types.TimelineCardProps) => {
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
        <FlexBox alignItems="center" className={styles.wrapper(align, false)}>
          <div className={cnb(styles.contentWrapper(false))}>
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
                mb="base"
              >
                {year}
              </Text>
            )}
          </div>
          {image && (
            <div className={styles.imageWrapper(align, false)}>
              <TimelineImage
                src={image}
                trapezoidAngle={align}
                size={"large"}
                className="relative z-10"
              />
            </div>
          )}
        </FlexBox>
      </AsComponent>
    </AnimateInView>
  );
};
