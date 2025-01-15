import { Masthead } from "@/components/Masthead";
import { TimelineCard } from "@/components/Timeline";
import { PageTitle } from "@/components/PageTitle";
import { TimelineFeature } from "@/components/Timeline/TimelineFeature";
import { ThreeCol, TwoCol } from "@/components/Layout";
import { StoryCard, StoryPosterCard } from "@/components/Story";
import { Container } from "@/components/Container";
import { StoryFeature } from "@/components/Story/StoryFeature";
import { Heading, Text } from "@/components/Typography";
import Metadata from "@/components/Layout/Metadata";
import { AnimatedLineartBanner } from "@/components/Banner";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";

export default function Home() {
  const timelineCardItems = [
    "1937-foundational-technology-in-the-burgeoning-microwave-industry",
    "1910-1915-the-engineering-corner",
    "1943-training-for-war",
    "1939-aviation-and-aeronautical-engineering",
    "1944-stanford-engineerings-third-dean",
  ];
  return (
    <div>
      <Metadata
        isHome
        title="100 years of Impact"
        description="Lorem ipsum curabitur blandit mollis lacus. Curabitur ullamcorper ultricies nisi."
      />
      <Masthead isLight bgColor="fog-light" />
      <PageTitle heading="100 years of" bigText="Impact" />
      <StoryPosterCard
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1734567986/1926_-_The_largest_university_electrical_lab_of_its_time_c3orrt.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        chapter="Chapter 1"
        link="/"
        hasBgImage
      />
      <Container mt={10} mb={10} width="full">
        <AnimatedLineartBanner>
          <div className="flex flex-col items-start md:rs-px-1">
            <Heading
              align="left"
              font="dm-sans"
              size="f5"
              weight="normal"
              leading="tight"
              className="mt-10"
            >
              Experience{" "}
              <span className="text-digital-red-xlight underline decoration-4 underline-offset-8">
                100 years
              </span>{" "}
              of milestones
            </Heading>
            <Text
              font="dm-mono"
              weight="normal"
              mb="base"
              size={2}
              className="order-first"
              align="left"
            >
              Timeline
            </Text>
          </div>
        </AnimatedLineartBanner>
        <TimelineCard
          isHorizontal
          heading="The first African-American woman in space"
          year="1983"
          body="Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id mi blandit lobortis eget in enim."
          image="https://airandspace.si.edu/sites/default/files/styles/slideshow_basic/public/images/NASA%20166851h.jpg?itok=yL6MTpUr"
          width="site"
        />
        <TimelineCard
          isHorizontal
          heading="First remote classs from the Stanford Instructional Television Network"
          year="1969"
          body="Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id mi blandit lobortis eget in enim."
          image="https://images.unsplash.com/photo-1491770042090-0810a7e20f46?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          align="right"
          width="site"
        />
        <TimelineCard
          isHorizontal
          heading="The Stanford Dish Radiotelescope completed in 1962"
          year="1983"
          body="Enabling vastly expanded studies of scattering effects in the earth’s ionosphere and was used to detect Soviet radar and still used today for satellite calibrations, spacecraft command and telemetry, and radio astronomy measurements."
          image="https://airandspace.si.edu/sites/default/files/styles/slideshow_basic/public/images/NASA%20166851h.jpg?itok=yL6MTpUr"
          width="site"
        />
        <TimelineFeature anchors={timelineCardItems} />
      </Container>
      <StoryFeature>
        <TwoCol className="rs-mb-8 items-center">
          <Heading size={5} weight="normal" className="rs-mr-8">
            Fundamental work in science and transformational breakthroughs for
            one hundred years.
          </Heading>
          <StoryCard
            superhead="Impact"
            heading="Lorem ipsum dolor sit amet consect hendrerit"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
            className="max-w-full"
          />
        </TwoCol>
        <ThreeCol>
          <StoryCard
            superhead="Innovation"
            heading="The Foundation of a New Era in Engineering"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
          />
          <StoryCard
            superhead="1975 - 1984"
            heading="Computation, outer space, the nanoscale, and the fragility of planet Earth"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
          />
          <StoryCard
            superhead="1985 - 1994"
            heading="Mae Jemison: “We each get a chance to choose our own path”"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
          />
        </ThreeCol>
      </StoryFeature>
      <ContributeStoryBanner bgColor="blue" />
    </div>
  );
}
