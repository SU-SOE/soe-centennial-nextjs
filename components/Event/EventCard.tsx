import React, { HTMLAttributes } from "react";
import { Heading, Text } from "@/components/Typography";
import {
  AnimateInView,
  AnimateInViewProps,
} from "@/components/Animate/AnimateInView";
import { Link } from "@/components/Cta/Link";
import * as styles from "./Event.styles";

export type EventCardProps = HTMLAttributes<HTMLDivElement> &
  Omit<AnimateInViewProps, "children"> & {
    heading: string;
    superhead?: string;
    body?: string;
    href: string;
  };

export const EventCard = ({
  heading,
  superhead,
  body,
  href,
  className,
  ...props
}: EventCardProps) => {
  return (
    <AnimateInView {...props} className={className}>
      <article className={styles.cardWrapper}>
        <Heading as="h3" size={2} weight="normal" mb="none">
          <Link href={href} linkType="story" className="stretched-link">
            {heading}
          </Link>
        </Heading>
        {superhead && (
          <Text className="order-first" size="small" mb="base" font="dm-mono">
            {superhead}
          </Text>
        )}
        {body && (
          <Text size="base" mb="none" className="rs-mt-neg1">
            {body}
          </Text>
        )}
      </article>
    </AnimateInView>
  );
};
