import React from "react";
import { AnimatedLineartBanner } from "../Banner";
import { Heading } from "../Typography";
import { EventCard, EventCardProps } from "./EventCard";
import { Container } from "../Container";

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
          size="f5"
          weight="normal"
          leading="tight"
          className="mt-10"
        >
          Events
        </Heading>
      </AnimatedLineartBanner>
      <Container className="flex flex-wrap flex-col justify-center md:*:w-1/2 md:flex-row gap-38 sm:gap-78 md:gap-60 xl:gap-100">
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} animation="sharpen" duration={1} />
        ))}
      </Container>
    </Container>
  );
};
