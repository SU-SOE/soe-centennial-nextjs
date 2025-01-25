import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Footer } from "@/components/Footer";
import { Masthead } from "@/components/Masthead";
import TimelineList from "@/components/Timeline/TimelineList";
import { Heading, Text } from "@/components/Typography";
import { loadTimelineData } from "@/utilities/loadTimelineData";

const TimelinePage = async () => {
  const timelineData = await loadTimelineData();
  return (
    <div>
      <Masthead isLight bgColor="fog-light" />
      <Container as="section" bgColor="fog-light" width="site" py={8}>
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
      <ContributeStoryBanner hasLineArt />
      <Footer bgColor="blue" />
    </div>
  );
};

export default TimelinePage;
