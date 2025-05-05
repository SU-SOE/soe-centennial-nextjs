import React from "react";
import { AnimatedLineartBanner } from "@/components/Banner";
import { Heading } from "@/components/Typography";
import { Container } from "@/components/Container";
import { EventCard, EventCardProps } from "./EventCard";
import Image from "next/image";
import * as styles from "./Event.styles";
import { cnb } from "cnbuilder";

type EventsSectionProps = {
  className?: string;
  heading?: string;
  events: EventCardProps[];
  hasBgImage?: boolean;
  src?: string;
  alt?: string;
};

export const EventsSection = ({
  className,
  heading,
  events,
  hasBgImage,
  src,
  alt,
  ...props
}: EventsSectionProps & {}) => {
  return (
    <Container
      {...props}
      as="section"
      width="full"
      className={cnb("relative", className)}
    >
      <Container bgColor={src ? "stone-dark" : ""} width="full" pt={7} pb={10}>
        {src && (
          <div className="h-full w-full absolute top-0 left-0 z-0">
            <Image
              className="ed11y-ignore object-cover z-0"
              src={src}
              alt={alt || ""}
              loading={"lazy"}
              fill
              sizes="100vw"
            />
            <div className="absolute h-full w-full bg-opacity-75 z-10 bg-stone-dark" />
          </div>
        )}
        <div className="relative z-50">
          <AnimatedLineartBanner lineartType="events" stroke={src && "#F83535"}>
            <Heading
              as="h2"
              align="left"
              font="dm-sans"
              size={4}
              weight="normal"
              leading="tight"
              className="mt-10"
            >
              {heading || "Events"}
            </Heading>
          </AnimatedLineartBanner>
          <Container className={styles.eventsWrapper}>
            {events.map((event, idx) => (
              <EventCard
                isLight={!src}
                key={idx}
                {...event}
                animation="sharpen"
                duration={1}
              />
            ))}
          </Container>
        </div>
      </Container>
    </Container>
  );
};
