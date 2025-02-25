import { Masthead } from "@/components/Masthead";
import { StoryPosterCard } from "@/components/Story";
import Metadata from "@/components/Layout/Metadata";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { EventsSection } from "@/components/Event";
import { ChapterTeaser } from "@/components/Story/ChapterTeaser";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import { OneCol } from "@/components/Layout";

export default function MvpHome() {
  const events = [
    {
      heading: "Don’t miss out on upcoming centennial events!",
      superhead: "Stanford Engineering alumni",
      body: (
        <>
          Update your contact information in MyAccount so that you receive all
          future centennial communications. Please contact{" "}
          <a
            className="text-white hocus:text-digital-red-xlight"
            href="mailto:engineering-alumni@stanford.edu"
          >
            engineering-alumni@stanford.edu
          </a>{" "}
          if you have any questions.
        </>
      ),
    },
  ];

  return (
    <div>
      <Metadata
        isHome
        title="100 years of Impact"
        description="Lorem ipsum curabitur blandit mollis lacus. Curabitur ullamcorper ultricies nisi."
      />
      <Masthead logoColor="white-red" bgColor="homepage" />
      <EmbedMediaHero
        className="bg-cardinal-red-dark"
        mediaUrl="https://youtu.be/2xD0_THX4Kg?si=_-iEUv3vmzWTykFP"
        isPreview
        previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1740427598/sizzle-reel-cover_yfv3nj.jpg"
        previewAriaLabel="100 years of Stanford Engineering: 1925 - 2025"
      />
      <Container bgColor="blue" width="full" pt={8} pb={9}>
        <OneCol className="text-center mx-auto rs-pb-8">
          <Heading font="dm-mono" size={2}>
            Stanford Engineering Centennial
          </Heading>
          <Text leading="tight" size={1}>
            On May 15, 1925, the Stanford University Board of Trustees
            officially approved the proposal to create the School of
            Engineering. Over the past 100 years, the school has grown beyond
            anything its founders could have imagined. Rooted from its earliest
            years in interdisciplinary collaboration, entrepreneurial spirit,
            and a culture of bold thinking, Stanford Engineering continues to
            prepare responsible engineers for the future, while shaping the
            future itself.
          </Text>
          <Text leading="tight" size={1} mb="none">
            In 2025, we will mark the history that has brought us to where we
            are today and look ahead to the future with optimism and ambition.
          </Text>
        </OneCol>
        <StoryPosterCard
          heading="Letter from Dean Widom"
          body="Lorem ipsum dolar sit amet"
          link="/letter-from-dean-widom"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1740503452/Dean-Widom-cropped_s2ocbf.jpg"
          bgColor="white"
        />
      </Container>
      <ChapterTeaser
        superhead="Centennial history"
        heading="Stories of each decade released monthly, starting in April"
        body={
          <>
            <i>
              Stanford Engineering: A Century of Discovery, Innovation, and
              Impact
            </i>{" "}
            dedicates a chapter to each decade of the school’s history. We’ll
            release Chapter 1 in April and a new chapter each month throughout
            the Centennial year.
          </>
        }
        imageUrl="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986293/BookCover_optimized_piu8wz_vcsn1k.jpg"
      />
      <EventsSection
        src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/stangord-campus-1948_d7gus7_f6if28.jpg"
        events={events}
      />
      <ContributeStoryBanner bgColor="white" hasLineArt />
    </div>
  );
}
