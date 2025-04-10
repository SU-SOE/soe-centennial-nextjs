/**
 * `ContributeStoryBanner` is a React functional component that renders a banner
 * inviting users to share their Stanford Engineering memories. The banner includes
 * a heading, descriptive text, and a button that links to a Google Form for submissions.
 *
 * @param {ContributeStoryBannerProps} props - The properties for the component.
 * @param {"fog-light" | "red" | "blue" | "white"} [props.bgColor="red"] - The background color of the banner.
 * @param {boolean} [props.hasLineArt=false] - Whether to display line art in the banner.
 * @param {HTMLAttributes<HTMLDivElement>} props.rest - Additional HTML attributes to apply to the container.
 *
 * @returns {JSX.Element} The rendered `ContributeStoryBanner` component.
 */
import { HTMLAttributes } from "react";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import BannerLineart from "@/components/images/banner-lineart";
import { Button } from "../Cta";
import Link from "next/link";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./ContributeStoryBanner.styles";
import { AnimateInView } from "../Animate";

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
    <Container className={styles.container(bgColor, hasLineArt)} width="full">
      {hasLineArt && <BannerLineart className={styles.bannerLineart} />}

      <div className={styles.contentWrapper}>
        <FlexBox direction="col" className={styles.textWrapper}>
          <AnimateInView animation="slideInFromLeft">
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
              re-sharing selected memories in a variety of ways both publicly
              and privately throughout the year. Please note: not all
              submissions will be shared publicly.
            </Text>
          </AnimateInView>
        </FlexBox>
        <AnimateInView
          animation="slideInFromRight"
          className={styles.buttonWrapper}
        >
          <Button
            big
            isLight={bgColor !== "red"}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUppz2bgwGKJpEzZU7CohEwFr7m_drQbdLydU2TPo6cXPZeg/viewform"
          >
            Share a memory
          </Button>
        </AnimateInView>
      </div>
    </Container>
  </Container>
);
