import { Masthead } from "@/components/Masthead";
import {
  TimelineHorizontalCard,
  TimelineCardProps,
} from "@/components/Timeline";
import { PageTitle } from "@/components/PageTitle";
import { TimelineFeature } from "@/components/Timeline/TimelineFeature";
import { TwoCol } from "@/components/Layout";
import { StoryCard, StoryCardProps, StoryPosterCard } from "@/components/Story";
import { Container } from "@/components/Container";
import { StoryFeature } from "@/components/Story/StoryFeature";
import { Heading, Text } from "@/components/Typography";
import Metadata from "@/components/Layout/Metadata";
import { AnimatedLineartBanner } from "@/components/Banner";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { AnimateInView } from "@/components/Animate";
import Link from "next/link";
import { ExploreMore } from "@/components/Story/ExploreMore";

export default function Home() {
  const timelineHorizontalCards: TimelineCardProps[] = [
    {
      align: "left",
      heading:
        "First remote classes from the Stanford instructional Television Network",
      year: "1969",
      image:
        "https://res.cloudinary.com/dsqi5touf/image/upload/v1737062695/first-remote-class_kpaahw.jpg",
    },
    {
      align: "right",
      heading: "Mae Jemison: the first African-American woman in space",
      year: "1983",
      image:
        "https://res.cloudinary.com/dsqi5touf/image/upload/v1737062695/mae-johnson-nasa_mdcnkj.jpg",
    },

    {
      align: "left",
      heading: "The Stanford Dish Radiotelescope completed in 1962",
      year: "1962",
      image:
        "https://res.cloudinary.com/dsqi5touf/image/upload/v1737062695/stanford-dish_cgacpq.jpg",
    },
  ];
  const timelineFeatureCards = [
    "1937-foundational-technology-in-the-burgeoning-microwave-industry",
    "1910-1915-the-engineering-corner",
    "1943-training-for-war",
    "1939-aviation-and-aeronautical-engineering",
    "1944-stanford-engineerings-third-dean",
  ];
  const storyData: StoryCardProps[] = [
    {
      heading: "New Spaces and Expanding Influence",
      superhead: "The 5th Decade",
      chapter: "Chapter 5",
      href: "/",
      imageUrl:
        "https://i.ibb.co/8YGpx87/new-spaces-and-expanding-influence.png",
    },
    {
      heading: "Bridging Worlds: Chips, Code, and Cosmos",
      superhead: "The 6th Decade",
      chapter: "Chapter 6",
      href: "/",
      imageUrl: "https://i.ibb.co/TK4yBZ5/bridging-worlds.png",
    },
    {
      heading: "Redevelopment and an Earthquake",
      superhead: "The 7th Decade",
      chapter: "Chapter 7",
      href: "/",
      imageUrl: "https://i.ibb.co/hF4zTc1/redevelopment.png",
    },
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
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        chapter="Chapter 1"
        link="/"
        hasBgImage
      />
      <Container mt={10} mb={10} width="full">
        <AnimatedLineartBanner className="mb-[-4rem]">
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
              <Link
                href="/timeline"
                className="text-digital-red-xlight underline decoration-4 underline-offset-8 hocus:text-stone-dark"
              >
                100 years
              </Link>{" "}
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
        {timelineHorizontalCards.map((item, idx) => (
          <TimelineHorizontalCard key={idx} width="site" {...item} />
        ))}
        <TimelineFeature anchors={timelineFeatureCards} />
      </Container>
      <StoryFeature>
        <TwoCol className="rs-mb-8 items-center max-w-[140rem]">
          <AnimateInView animation="slideUp" duration={2}>
            <Heading size={5} weight="normal">
              Fundamental work in science and transformational breakthroughs for
              one hundred years.
            </Heading>
          </AnimateInView>
          <StoryCard
            isHeadingLarge
            animation="slideUp"
            duration={2}
            delay={0.5}
            superhead="Impact"
            heading="Lorem ipsum dolor sit amet consect hendrerit"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
            className="max-w-full"
          />
        </TwoCol>
        <ExploreMore stories={storyData} />
      </StoryFeature>
      <ContributeStoryBanner bgColor="blue" />
    </div>
  );
}
