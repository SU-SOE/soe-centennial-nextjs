import React from "react";
import { AnimatedLineartBanner } from "@/components/Banner";
import { Heading } from "@/components/Typography";
import { Container } from "@/components/Container";
import { EventCard, EventCardProps } from "./EventCard";
import * as styles from "./Event.styles";

interface EventsSectionProps {
  events: EventCardProps[];
}

export const EventsSection = ({ events }: EventsSectionProps) => {
  return (
    <Container as="section" width="full" mt={7} mb={10}>
      <AnimatedLineartBanner isLeft>
        <Heading
          align="left"
          font="dm-sans"
          size={4}
          weight="normal"
          leading="tight"
          className="mt-10"
        >
          Events
        </Heading>
      </AnimatedLineartBanner>
      <Container className={styles.eventsWrapper}>
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} animation="sharpen" duration={1} />
        ))}
      </Container>
    </Container>
  );
};
