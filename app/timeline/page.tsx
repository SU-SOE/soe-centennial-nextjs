import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { TimelineAnimation } from "@/components/Timeline/TimelineAnimation";
import TimelineList from "@/components/Timeline/TimelineList";
import { Heading, Text } from "@/components/Typography";
import { loadTimelineData } from "@/utilities/loadTimelineData";

export const metadata = {
  title: "Timeline - 100 Years of Impact",
  description:
    "Explore the timeline of the School of Engineering's 100 years of impact, featuring fundamental work in science and transformational breakthroughs.",
  keywords: [
    "timeline",
    "100 years",
    "impact",
    "School of Engineering",
    "science",
    "breakthroughs",
  ],
  author: "School of Engineering",
};

const TimelinePage = async () => {
  const timelineData = await loadTimelineData();
  return (
    <div className="bg-fog-light">
      <div className="rs-pt-8 fixed top-0 right-0 w-full md:w-[calc(100%_-_50rem)] z-0">
        <TimelineAnimation />
      </div>
      <div className="relative top-0 z-50">
        <Masthead isLight bgColor="none" />
        <Container as="section" width="site" py={8}>
          <Heading leading="tight" size={6} as="h1" className="flex flex-col">
            <span className="underline underline-offset-[14px] decoration-4">
              100 years{" "}
            </span>
            <span>of impact</span>
          </Heading>
          <Text className="max-w-800">
            In the ten decades since its founding, the School of Engineering has
            produced fundamental work in science and transformational
            breakthroughs that have changed lives and shaped human society.
            Experience the impact we’ve made through time in each of the events
            you can interact with here.
          </Text>
        </Container>
        <TimelineList timelineData={timelineData} />
        <ContributeStoryBanner bgColor="blue" />
      </div>
    </div>
  );
};

export default TimelinePage;
