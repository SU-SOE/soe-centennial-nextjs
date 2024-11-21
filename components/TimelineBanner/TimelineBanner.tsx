import { HTMLAttributes } from "react";
import { Container } from "../Container";
import { Heading, Text } from "../Typography";
import { FlexBox } from "../FlexBox";
import * as styles from "./TimelineBanner.styles";
import { cnb } from "cnbuilder";

type TimelineBannerProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
  year: string;
  dek?: string;
  body: string;
  cta?: React.ReactNode;
  image: string;
  bgColor?: "fog-light" | "red-gradient";
  align?: "right" | "left";
  width?: "full" | "narrow";
};

export const TimelineBanner = ({
  heading,
  year,
  dek,
  body,
  cta,
  image = "https://placecats.com/neo/600/600",
  bgColor = "fog-light",
  align = "left",
  ...props
}: TimelineBannerProps) => (
  <Container
    {...props}
    as="section"
    bgColor={bgColor}
    width="site"
    py={9}
    className={styles.root}
  >
    <FlexBox
      alignItems="start"
      justifyContent="between"
      gap
      className={styles.wrapper}
    >
      <Container className={cnb(styles.contentWrapper)}>
        {heading && (
          <Heading leading="none" className={styles.heading}>
            {heading}
          </Heading>
        )}
        {year && (
          <Text
            font="serif"
            variant="overview"
            weight="normal"
            className={styles.superhead}
          >
            {year}
          </Text>
        )}
        {dek && (
          <Text
            font="serif"
            variant="overview"
            weight="normal"
            className={styles.dek}
          >
            {dek}
          </Text>
        )}
        {body && (
          <Text
            font="serif"
            variant="overview"
            weight="normal"
            className={styles.body}
          >
            {body}
          </Text>
        )}
        {cta}
      </Container>
      {image && (
        <div
          className={cnb(styles.imageWrapper, {
            "order-first": align === "left",
          })}
        >
          <img
            alt=""
            src={image}
            className={cnb(styles.image, {
              "rotate-y-[25deg] group-hocus:rotate-y-[-25deg]":
                align === "left",
              "rotate-y-[-25deg] group-hocus:rotate-y-[25deg]":
                align === "right",
            })}
            width={500}
            height={500}
          />
        </div>
      )}
    </FlexBox>
  </Container>
);
