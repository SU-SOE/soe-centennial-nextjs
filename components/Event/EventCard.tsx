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
    headingSize?: 3 | 4;
    superhead?: React.ReactNode;
    body?: React.ReactNode;
    href?: string;
    isLight?: boolean;
    isCard?: boolean;
  };

export const EventCard = ({
  heading,
  headingSize = 4,
  superhead,
  body,
  href,
  isLight,
  isCard = false,
  className,
  ...props
}: EventCardProps) => {
  return (
    <AnimateInView {...props} className={className}>
      <article className={styles.cardWrapper(isCard)}>
        <Heading as="h3" size={headingSize} weight="normal" mb={1}>
          {href && (
            <Link
              href={href}
              linkType={isCard ? "story" : "story-invert"}
              className="stretched-link"
            >
              {heading}
            </Link>
          )}
          {!href && heading}
        </Heading>
        {superhead && (
          <Text className="order-first" size="small" mb="base" font="dm-mono">
            {superhead}
          </Text>
        )}
        {body &&
          (typeof body === "string" ? (
            <Text size="base" mb="none" className={styles.body(isCard)}>
              {body}
            </Text>
          ) : (
            <div className={styles.body(isCard)}>{body}</div>
          ))}
      </article>
    </AnimateInView>
  );
};
