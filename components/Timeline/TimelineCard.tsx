import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import * as styles from "./Timeline.styles";
import * as types from "./Timeline.types";
import { cnb } from "cnbuilder";
import { TimelineImage } from "./TimelineImage";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@/components/Cta/Link";
import { AnimateInView } from "@/components/Animate";

export type CardProps = Omit<types.TimelineCardProps, "image"> & {
  wideImage?: boolean;
  image?: string;
};

export const TimelineCard = ({
  heading,
  year,
  body,
  anchor = "/",
  image,
  alt,
  animation,
  duration,
  delay,
  align = "left",
  uuid,
  className,
  wideImage = false,
  ...props
}: CardProps) => {
  return (
    <AnimateInView {...props}>
      <div
        id={uuid}
        className={cnb(
          "h-fit relative group rs-pt-9 rs-pb-3 rs-mt-3 w-250 md:w-300 lg:w-[35rem] xl:w-[42rem]",
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
                  linkType="timeline"
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
                mb="base"
                className="order-first"
              >
                {year}
              </Text>
            )}
          </div>
          {image && (
            <div className={styles.imageWrapper(align, false)}>
              <TimelineImage
                src={image}
                alt={alt}
                trapezoidAngle={align}
                size="large"
                className="relative z-10"
                imageClasses={wideImage ? "aspect-[8/5]" : ""}
              />
            </div>
          )}
        </FlexBox>
      </div>
    </AnimateInView>
  );
};
