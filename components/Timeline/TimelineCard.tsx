import { HTMLAttributes } from "react";
import { Container } from "../Container";
import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import * as styles from "./TimelineCard.styles";
import { cnb } from "cnbuilder";
import { TimelineImage } from "./TimelineImage";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type TimelineCardProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  year: string;
  body: string;
  cta?: string;
  image: string;
  bgColor?: "fog-light" | "red-gradient";
  align?: "right" | "left";
  width?: "full" | "narrow";
  isHorizontal?: boolean;
};

export const TimelineCard = ({
  heading,
  year,
  body,
  cta = "/",
  image = "https://placecats.com/neo/600/600",
  bgColor = "fog-light",
  align = "left",
  isHorizontal = true,
  ...props
}: TimelineCardProps) => (
  <Container
    {...props}
    as="section"
    bgColor={bgColor}
    width="site"
    py={9}
    className={styles.root}
  >
    <FlexBox
      alignItems="center"
      className={styles.wrapper(align, isHorizontal)}
    >
      <div className={cnb(styles.contentWrapper)}>
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
  </Container>
);
