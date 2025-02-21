import React from "react";
import { Container } from "@/components/Container";
import { loadTimelineData } from "@/utilities/loadTimelineData";
import { TimelineCard } from "./TimelineCard";
import { Slideshow } from "../Slideshow/Slideshow";
import { Button } from "../Cta";
import { AnimateInView } from "../Animate";

type TimelineFeatureProps = {
  anchors: string[];
};

export const TimelineFeature = async ({ anchors }: TimelineFeatureProps) => {
  // Fetch the timeline data
  const timelineData = await loadTimelineData();

  // Filter timeline items based on the provided uuids
  const featureTimelineData = timelineData.filter((item) =>
    anchors.includes(item.anchor),
  );

  return (
    <Container width="site" id="featured-timeline">
      <Slideshow>
        {featureTimelineData.length > 0 ? (
          featureTimelineData.map((item, idx) => {
            const delay = idx < 4 ? 1 + idx * 0.5 : 0;
            return (
              <AnimateInView
                key={item.uuid || idx}
                animation="slideInFromLeft"
                duration={1}
                delay={delay}
              >
                <TimelineCard {...item} py="none" />
              </AnimateInView>
            );
          })
        ) : (
          <p>No timeline items can be found at this time.</p>
        )}
      </Slideshow>
      <Container as="div" mt={8} mb={10} className="flex flex-col items-center">
        <Button solid href="/timeline" isLight>
          Explore 100 years in Engineering
        </Button>
      </Container>
    </Container>
  );
};
