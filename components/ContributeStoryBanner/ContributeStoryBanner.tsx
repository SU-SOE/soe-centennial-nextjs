import { HTMLAttributes } from "react";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import BannerLineart from "@/components/images/banner-lineart";
import { Button } from "../Cta";
import Link from "next/link";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./ContributeStoryBanner.styles";

type ContributeStoryBannerProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: "fog-light" | "red" | "blue";
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
    <Container className={styles.container(bgColor, hasLineArt)} width="full">
      {hasLineArt && <BannerLineart className={styles.bannerLineart} />}

      <div className={styles.contentWrapper}>
        <FlexBox direction="col" className={styles.textWrapper}>
          <Heading mb={5} weight="normal">
            Contribute{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfUppz2bgwGKJpEzZU7CohEwFr7m_drQbdLydU2TPo6cXPZeg/viewform"
              className={styles.underline(bgColor)}
            >
              your stories
            </Link>
          </Heading>
          <Text
            size={1}
            mb="none"
            font="dm-mono"
            className={styles.subText(hasLineArt)}
          >
            Get involved
          </Text>
          <Text size="base" mb="none">
            Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam.
            Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id
            mi blandit lobortis eget in enim.
          </Text>
        </FlexBox>
        <div className={styles.buttonWrapper}>
          <Button
            isLight={bgColor !== "red"}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUppz2bgwGKJpEzZU7CohEwFr7m_drQbdLydU2TPo6cXPZeg/viewform"
          >
            Submit your story
          </Button>
        </div>
      </div>
    </Container>
  </Container>
);
