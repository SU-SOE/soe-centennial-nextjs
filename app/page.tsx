import { Masthead } from "@/components/Masthead";
import { TimelineHorizontalCard } from "@/components/Timeline";
import { TimelineFeature } from "@/components/Timeline/TimelineFeature";
import { StoryCardProps, StoryPosterCard } from "@/components/Story";
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
import { Button } from "@/components/Cta";

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

const events = [
  {
    heading: "Stanford Engineering Centennial Celebration and Showcase",
    superhead: (
      <>
        May 15, 2025 <br /> 3:30-7:30pm
      </>
    ),
    body: (
      <>
        <p>
          Celebrate 100 years of innovation with an interactive showcase
          featuring cutting-edge research, hands-on demos, and breakthrough
          technologies.
        </p>
        <Button solid href="/">
          Register here
        </Button>
      </>
    ),
    isCard: true,
  },

  {
    heading: "Don’t miss out on upcoming centennial events!",
    superhead: "Stanford Engineering alumni",
    body: (
      <p>
        Update your contact information in{" "}
        <a href="https://alumni.stanford.edu/help/myaccount/">My Account</a> so
        that you receive all future centennial communications. Please contact{" "}
        <a href="mailto:engineering-alumni@stanford.edu">
          engineering-alumni@stanford.edu
        </a>{" "}
        if you have any questions.
      </p>
    ),
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

const storyData: StoryCardProps[] = [
  {
    heading: "“Preparing roads over which culture may ride in comfort”",
    chapter: "Decade 1",
    href: "/stories/preparing-roads-culture-may-ride-comfort",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1743098633/Spr25_SoE-Voltage_Black2_square_kgslwr.jpg",
  },
  {
    heading: "The foundation of a new era in engineering",
    chapter: "Decade 2",
    href: "/stories/the-foundation-of-a-new-era-in-engineering",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Masthead logoColor="white-red" bgColor="homepage" />
      <main id="main-content" className="overflow-hidden">
        <H1 className="sr-only">100 years of Stanford Engineering</H1>
        <EmbedMediaHero
          autoplay
          className="bg-cardinal-red-dark"
          mediaUrl="https://youtu.be/2xD0_THX4Kg?si=_-iEUv3vmzWTykFP"
        />
        <Container
          as="section"
          bgColor="blue"
          width="full"
          pt={8}
          pb={8}
          mb={6}
        >
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
          <div className="rs-mb-2 w-full max-w-1400 mx-auto">
            <AnimateInView animation="slideUp">
              <div className="w-full max-w-1000">
                <Heading font="dm-mono" size="f1" mb={1}>
                  Explore decade stories
                </Heading>
                <Text size="f5" weight="normal">
                  Fundamental work in science and transformational breakthroughs
                  for one hundred years.
                </Text>
              </div>
            </AnimateInView>
          </div>
          <ExploreMore
            hasButton
            stories={storyData}
            className="py-0"
            cardBgColor="white"
          />
        </StoryFeature>
        <Container as="section" mt={10} mb={10} width="full">
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
        <Container as="section" bgColor="blue" width="full" pt={8} pb={9}>
          <StoryPosterCard
            heading="Letter from Dean Widom"
            link="/letter-from-dean-widom"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1740503452/Dean-Widom-cropped_s2ocbf.jpg"
            bgColor="white"
          />
        </Container>
        <EventsSection
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/stangord-campus-1948_d7gus7_f6if28.jpg"
          events={events}
        />
        <ContributeStoryBanner bgColor="red" hasLineArt />
      </main>
    </>
  );
}
