import { Masthead } from "@/components/Masthead";
import { StoryPosterCard } from "@/components/Story";
import Metadata from "@/components/Layout/Metadata";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { EventsSection } from "@/components/Event";
import { TeaserCard } from "@/components/TeaserCard/TeaserCard";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import { OneCol } from "@/components/Layout";
import { H1 } from "@/components/Typography/Header";

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
      <div id="main-content">
        <H1 className="sr-only">100 years of Stanford Engineering</H1>
        <EmbedMediaHero
          className="bg-cardinal-red-dark"
          mediaUrl="https://youtu.be/2xD0_THX4Kg?si=_-iEUv3vmzWTykFP"
          isPreview
          previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1740427598/sizzle-reel-cover_yfv3nj.jpg"
          previewAriaLabel="100 years of Stanford Engineering: 1925 - 2025"
        />
        <Container bgColor="blue" width="full" pt={8} pb={9}>
          <OneCol className="text-center mx-auto rs-pb-4">
            <Heading font="dm-mono" size={2}>
              Stanford Engineering Centennial
            </Heading>
            <Text variant="overview">
              On May 15, 1925, the Stanford University Board of Trustees
              officially approved the proposal to create the School of
              Engineering. Over the past 100 years, the school has grown beyond
              anything its founders could have imagined. Rooted from its
              earliest years in interdisciplinary collaboration, entrepreneurial
              spirit, and a culture of bold thinking, Stanford Engineering
              continues to prepare responsible engineers for the future, while
              shaping the future itself.
            </Text>
            <Text variant="overview" mb="none">
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
        <TeaserCard
          superhead="Centennial history"
          heading="Stories of each decade released monthly, starting in April"
          body="Throughout the year, we’ll publish a story about each of the school’s ten decades. Come back in April to read more about Decade 1 and 2, and to scroll through a timeline of the school’s history"
          images={[
            "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1943_-_Training_for_war_qld0yb_w91vri.jpg",
            "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg",
            "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986288/1939_-_Inventors_of_the_klystron_aipcnt_afibjh.jpg",
          ]}
        />
        <EventsSection
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/stangord-campus-1948_d7gus7_f6if28.jpg"
          events={events}
        />
        <ContributeStoryBanner bgColor="white" hasLineArt />
      </div>
    </div>
  );
}
