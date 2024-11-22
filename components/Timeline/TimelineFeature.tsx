import React from "react";
import { Container } from "@/components/Container";
import { loadTimelineData } from "@/utilities/loadTimelineData";
import { TimelineCard } from "./TimelineCard";
import { Slideshow } from "../Slideshow/Slideshow";
import { Button } from "../Cta";

type TimelineFeatureProps = {
  uuids: number[];
};

export const TimelineFeature = async ({ uuids }: TimelineFeatureProps) => {
  // Fetch the timeline data
  const timelineData = await loadTimelineData();

  // Filter timeline items based on the provided uuids
  const featureTimelineData = timelineData.filter((item) =>
    uuids.includes(item.uuid),
  );

  return (
    <Container width="site" py={5}>
      <Slideshow>
        {featureTimelineData.length > 0 ? (
          featureTimelineData.map((item, idx) => (
            <TimelineCard
              {...item}
              key={item.uuid || idx}
              animation="none"
              py="none"
            />
          ))
        ) : (
          <p>No timeline items can be found at this time.</p>
        )}
      </Slideshow>
      <Container as="div" mt={8} mb={10} className="flex flex-col items-center">
        <Button href="/timeline">Explore 100 years in Engineering</Button>
      </Container>
    </Container>
  );
};
