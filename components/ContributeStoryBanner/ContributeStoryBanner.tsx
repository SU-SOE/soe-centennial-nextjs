import { HTMLAttributes } from "react";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import BannerLineart from "@/components/images/banner-lineart";
import { Button } from "../Cta";
import Link from "next/link";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./ContributeStoryBanner.styles";

type ContributeStoryBannerProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: "fog-light" | "red" | "blue" | "white";
  hasLineArt?: boolean;
};

export const ContributeStoryBanner = ({
  bgColor = "red",
  hasLineArt = false,
  ...props
}: ContributeStoryBannerProps) => (
  <Container
    {...props}
    as="section"
    bgColor={bgColor}
    width="full"
    className={styles.section}
    pt={2}
    pb={6}
  >
    <Container
      as="section"
      className={styles.container(bgColor, hasLineArt)}
      width="full"
    >
      {hasLineArt && <BannerLineart className={styles.bannerLineart} />}

      <div className={styles.contentWrapper}>
        <FlexBox direction="col" className={styles.textWrapper}>
          <Heading mb={5} size="f4" weight="normal">
            Share{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfUppz2bgwGKJpEzZU7CohEwFr7m_drQbdLydU2TPo6cXPZeg/viewform"
              className={styles.underline(bgColor)}
            >
              your Stanford Engineering memories
            </Link>
          </Heading>
          <Text
            size={1}
            mb="none"
            font="dm-mono"
            className={styles.subText(hasLineArt)}
          >
            Be a part of the celebration
          </Text>
          <Text size="base" mb="none">
            As we celebrate the school’s Centennial anniversary, we invite you
            to mark this milestone by sharing one of your favorite memories of
            Stanford Engineering. We’d love to hear from you and will be
            re-sharing selected memories in a variety of ways both publicly and
            privately throughout the year. Please note: not all submissions will
            be shared publicly.
          </Text>
        </FlexBox>
        <div className={styles.buttonWrapper}>
          <Button
            isLight={bgColor !== "red"}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUppz2bgwGKJpEzZU7CohEwFr7m_drQbdLydU2TPo6cXPZeg/viewform"
          >
            Share a memory
          </Button>
        </div>
      </div>
    </Container>
  </Container>
);
