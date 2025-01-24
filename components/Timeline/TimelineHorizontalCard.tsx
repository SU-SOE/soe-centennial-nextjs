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
import { Trapezoid } from "../images/trapezoid";

export const TimelineHorizontalCard = ({
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
    <AsComponent
      {...props}
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
      <FlexBox alignItems="center" className={styles.wrapper(align, true)}>
        <div className={cnb(styles.contentWrapper(true))}>
          {heading && (
            <Heading
              leading="normal"
              size={3}
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
                    className="transition-all ease-in-out duration-1000 ml-03em group-hocus:translate-x-02em text-digital-red-light inline"
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
          <div className={styles.imageWrapper(align, true)}>
            <AnimateInView
              duration={0.8}
              delay={0.6}
              animation={animationType}
              className={cnb("absolute top-[-25%] z-0 flex items-center ", {
                "right-[-50%]": align === "right",
                "left-[-50%] rotate-180": align === "left",
              })}
            >
              <Trapezoid
                className={cnb(
                  "flex items-center overflow-hidden w-350 md:w-[430px] lg:w-[536px] xl:w-[637px] 2xl:w-900 h-350 md:h-[430px] lg:h-[536px] xl:h-[637px] 2xl:h-900",
                  {
                    "rotate-180": align === "left",
                  },
                )}
              />
            </AnimateInView>
            <AnimateInView duration={5} delay={2} animation={animationType}>
              <TimelineImage
                src={image}
                trapezoidAngle={align}
                size={"xlarge"}
                className="relative z-10"
              />
            </AnimateInView>
          </div>
        )}
      </FlexBox>
    </AsComponent>
  );
};
