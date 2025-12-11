import { Masthead } from "@/components/Masthead";
import { TimelineHorizontalCard } from "@/components/Timeline";
import { TimelineFeature } from "@/components/Timeline/TimelineFeature";
import { StoryCard, StoryPosterCard } from "@/components/Story";
import { Container } from "@/components/Container";
import { StoryFeature } from "@/components/Story/StoryFeature";
import { Heading, Text } from "@/components/Typography";
import { AnimatedLineartBanner } from "@/components/Banner";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { AnimateInView } from "@/components/Animate";
import { Link } from "@/components/Cta/Link";
import { ExploreMore } from "@/components/Story/ExploreMore";
import { Metadata } from "next";
import { EventsSection } from "@/components/Event";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { H1 } from "@/components/Typography/Header";
import { TwoCol } from "@/components/Layout";
import { storiesSource } from "@/utilities/storiesSource";

export const metadata: Metadata = {
  title: "100 Years of Stanford Engineering",
  description:
    "On May 15, 1925, the Stanford University Board of Trustees approved the creation of the School of Engineering. Over the past 100 years, the school has grown beyond anything its founders could have imagined, fostering interdisciplinary collaboration, entrepreneurial spirit, and bold thinking.",
  openGraph: {
    title: "100 Years of Stanford Engineering",
    description:
      "Celebrating a century of innovation, leadership, and engineering excellence at Stanford University.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1740704737/centennial-yt-cover_dnwrxg.jpg",
        width: 1200,
        height: 630,
        alt: "100 Years of Stanford Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Years of Stanford Engineering",
    description:
      "Stanford Engineering celebrates 100 years of impact, innovation, and leadership in the field of engineering.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1740704737/centennial-yt-cover_dnwrxg.jpg",
    ],
  },
};

const exploreMoreDataRow1 = [
  storiesSource.may15EventVideo,
  storiesSource.footballEventVideo,
];

const exploreMoreDataRow2 = [
  storiesSource.transformativeBreakthroughs,
  storiesSource.storyInnovation,
];

const events = [
  {
    className: "*:w-full lg:*:max-w-700",
    heading: "Don’t miss out on upcoming centennial events!",
    superhead: "Stanford Engineering alumni",
    body: (
      <>
        <p>
          Update your contact information in{" "}
          <Link
            linkType="dark-bg"
            href="https://alumni.stanford.edu/help/myaccount/"
          >
            My Account
          </Link>{" "}
          so that you receive all future centennial communications.
        </p>
        <p>
          Please contact{" "}
          <Link
            linkType="dark-bg"
            href="mailto:engineering-alumni@stanford.edu"
          >
            engineering-alumni@stanford.edu
          </Link>{" "}
          if you have any questions.
        </p>
      </>
    ),
    headingSize: 3 as const,
  },
];

const timelineHorizontalCards: { align: "right" | "left"; anchor: string }[] = [
  {
    align: "left",
    anchor: "1969-stanford-instructional-television-network-sitn",
  },
  {
    align: "right",
    anchor: "1992-americas-first-female-african-american-astronaut",
  },
  {
    align: "left",
    anchor: "1961-the-stanford-dish",
  },
];

const timelineFeatureCards = [
  "1939-inventors-of-the-klystron",
  "1996-the-original-google-server",
  "1937-foundational-technology-in-the-burgeoning-microwave-industry",
  "1972-first-black-faculty-member-to-hold-a-tenure-track-appointment",
  "2017-trailblazing-leadership-jennifer-widom-is-appointed-dean-of-stanford-engineering-celebrating-27-years-of-academic-excellence",
];

const storyData = [
  storiesSource.decade3,
  storiesSource.decade5,
  storiesSource.decade6,
];

export default function Home() {
  return (
    <>
      <Masthead logoColor="white-red" bgColor="homepage" />
      <main id="main-content" tabIndex={-1} className="overflow-hidden">
        <H1 className="sr-only">100 years of Stanford Engineering</H1>
        <EmbedMediaHero
          autoplay
          className="bg-cardinal-red-dark"
          mediaUrl="https://youtu.be/2xD0_THX4Kg?si=_-iEUv3vmzWTykFP"
        />
        <Container as="section" bgColor="blue" width="full" py={8} mb={6}>
          <div className="cc lg:p-0 mx-auto rs-pb-4 w-full max-w-800">
            <Heading font="dm-sans" size={2} weight="semibold" align="center">
              Stanford Engineering Centennial
            </Heading>
            <Text variant="overview" mb="0" align="center">
              2025 marks the centennial of the Stanford School of Engineering—a
              moment to reflect on our remarkable past and look ahead toward an
              even more inspiring future.
            </Text>
          </div>
        </Container>
        <StoryFeature>
          <TwoCol className="rs-mb-4 w-full max-w-1400 mx-auto items-center">
            <AnimateInView animation="slideUp" delay={0.3}>
              <div className="w-full max-w-1000">
                <Heading font="dm-mono" size="f1" mb={1}>
                  Explore stories
                </Heading>
                <Text size="f5" weight="normal" leading="tight">
                  Fundamental work in science and transformational breakthroughs
                  for one hundred years.
                </Text>
              </div>
            </AnimateInView>
            <StoryCard
              animation="slideUp"
              chapter="Decade 1"
              heading="“Preparing roads over which culture may ride in comfort”"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg"
              href="/stories/preparing-roads-culture-may-ride-comfort"
            />
          </TwoCol>
          <ExploreMore
            isThreeCol
            hasButton
            stories={storyData}
            className="py-0 my-50"
            cardBgColor="white"
          />
        </StoryFeature>
        <Container as="section" mt={10} mb={10} width="full">
          <AnimatedLineartBanner className="-mb-40">
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
                  linkType="heading"
                  href="/timeline"
                  className="text-digital-red-light font-normal"
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
        <Container as="section" bgColor="blue" pt={8} pb={8}>
          <div className="mx-auto w-full max-w-1200">
            <AnimateInView animation="slideUp">
              <div className="w-full max-w-1000 rs-mb-5">
                <Heading font="dm-mono" size="f1" mb={1}>
                  Explore
                </Heading>
                <Text size="f5" weight="normal" mb="0">
                  More about the Centennial
                </Text>
              </div>
            </AnimateInView>
            <StoryPosterCard
              className="rs-mb-5"
              hasBgImage
              widePreviewImage
              bgColor="stone-dark"
              {...storiesSource.sharedInnovation}
            />
            <StoryPosterCard
              className="rs-mb-5"
              hasBgImage
              imageLeft
              widePreviewImage
              bgColor="red"
              {...storiesSource.dec7EventVideo}
            />
            <ExploreMore
              stories={exploreMoreDataRow1}
              className="py-0 rs-mb-5"
              cardBgColor="white"
            />
            <ExploreMore
              stories={exploreMoreDataRow2}
              className="py-0 rs-mb-5"
              cardBgColor="white"
            />
            <StoryCard
              isHorizontal
              isHeadingLarge
              {...storiesSource.deanWidomLetter}
            />
          </div>
        </Container>
        <EventsSection
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1745937965/stanford-events_nfplt7.png"
          events={events}
        />
        <ContributeStoryBanner bgColor="red" hasLineArt />
      </main>
    </>
  );
}
