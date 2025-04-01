import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";
import { cnb } from "cnbuilder";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
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
import { TimelineAnimateImage } from "./TimelineAnimateImage";
import { Link } from "@/components/Cta/Link";
import fetchTimelineData from "@/utilities/fetchTimelineData";

type TimelineHorziontalCard = Omit<
  types.TimelineCardProps,
  "heading" | "year" | "image" | "alt" | "uuid"
>;

export const TimelineHorizontalCard = async ({
  as: AsComponent = "div",
  py,
  pt = 9,
  pb = 3,
  mt = 3,
  mb,
  my,
  anchor,
  animation,
  delay,
  bgColor,
  width = "fit",
  align = "left",
  className,
  ...props
}: TimelineHorziontalCard) => {
  // Fetch the timeline data and filter timeline items based on the provided uuids
  const timelineItem = await fetchTimelineData(anchor);
  const {
    heading,
    year,
    anchor: link,
    image,
    alt,
    uuid,
  } = Array.isArray(timelineItem) ? timelineItem[0] : timelineItem;

  const imageAnimation =
    animation || align === "left" ? "slideInFromLeft" : "slideInFromRight";
  const textAnimation =
    animation || align === "left" ? "slideInFromRight" : "slideInFromLeft";

  return (
    <AsComponent
      {...props}
      id={uuid}
      className={cnb(
        "h-fit relative group/cardroot",
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
        <AnimateInView
          animation={textAnimation}
          duration={0.8}
          className={cnb(styles.contentWrapper(true))}
        >
          {heading && (
            <Heading
              leading="normal"
              size={3}
              font="dm-sans"
              weight="normal"
              className={styles.heading}
            >
              <Link
                linkType="timeline"
                className="font-inherit stretched-link group-hover/cardroot:decoration-stone-dark group-focus-within:decoration-stone-dark"
                href={`/timeline#${link}`}
              >
                {heading}
                <span className="whitespace-nowrap">
                  &#65279;
                  <ArrowRightIcon
                    width={25}
                    className="transition-all ease-in-out duration-1000 ml-03em group-hover/cardroot:translate-x-02em group-focus-within/cardroot:translate-x-02em text-digital-red-light inline"
                  />
                </span>
              </Link>
            </Heading>
          )}
          {year && (
            <Text font="dm-mono" size={2} weight="normal">
              {year}
            </Text>
          )}
        </AnimateInView>
        {image && (
          <div className={styles.imageWrapper(align, true)}>
            <AnimateInView
              delay={0.3}
              animation={imageAnimation}
              className={styles.trapezoidWrapper(align)}
            >
              <Trapezoid className={styles.trapezoidSvg(align)} />
            </AnimateInView>
            <AnimateInView animation={imageAnimation}>
              <TimelineAnimateImage
                src={image}
                alt={alt}
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
