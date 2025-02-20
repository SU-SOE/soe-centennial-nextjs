import { Masthead } from "@/components/Masthead";
import { StoryPosterCard } from "@/components/Story";
import Metadata from "@/components/Layout/Metadata";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { EventsSection } from "@/components/Event";
import { ChapterTeaser } from "@/components/Story/ChapterTeaser";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";

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
      <Masthead bgColor="red" />
      <EmbedMediaHero
        mediaUrl="https://player.vimeo.com/video/1032255894?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        isPreview
        previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1740008904/100-Hero_az6xgc.png"
        previewAriaLabel="100 years of Stanford Engineering: 1925 - 2025"
      />
      <Container bgColor="blue" width="full" pt={8} pb={9}>
        <Container width="wysiwyg" className="text-center" pb={8}>
          <Heading font="dm-mono" size={2}>
            Stanford Engineering Centennial
          </Heading>
          <Text leading="tight">
            A century ago, a visionary group of Stanford University faculty
            members recognized the need for an engineering school that would
            cultivate well-rounded engineers prepared for leadership in all
            aspects of life. Today, the Stanford School of Engineering stands as
            a testament to their vision, while growing in size, scope, and
            impact far beyond anything those pioneers could have imagined.
          </Text>
          <Text leading="tight">
            In 2025, we will mark the history that has brought us to where we
            are today and look ahead to the future with optimism and ambition.
          </Text>
        </Container>
        <StoryPosterCard
          heading="Letter from Dean Widom"
          superhead="Celebrating 100"
          body="Lorem ipsum dolar sit amet"
          link="/letter-from-dean-widom"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1740013381/dean-widom_e1jksa.png"
          bgColor="white"
        />
      </Container>
      <ChapterTeaser
        isHeadingLarge
        superhead="Centennial Book"
        heading="Chapters released monthly, starting in April"
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
        href="/"
      />
      <EventsSection
        src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/stangord-campus-1948_d7gus7_f6if28.jpg"
        events={events}
      />
      <ContributeStoryBanner bgColor="white" hasLineArt />
    </div>
  );
}
