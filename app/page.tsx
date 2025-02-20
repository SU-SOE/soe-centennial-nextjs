import { Masthead } from "@/components/Masthead";
import { StoryPosterCard } from "@/components/Story";
import Metadata from "@/components/Layout/Metadata";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { EventsSection } from "@/components/Event";
import { ChapterTeaser } from "@/components/Story/ChapterTeaser";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";

export default function MvpHome() {
  const events = [
    {
      heading: "Lorem ipsum dolar sit amet",
      superhead: "Monday, May 15",
      body: "Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. ",
      href: "/",
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
      <StoryPosterCard
        heading="“Preparing Roads over which Culture May Ride in Comfort”"
        dek="The 1st Decade"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        chapter="Chapter 1"
        link="/letter-from-dean-widom"
        src="https://res.cloudinary.com/duv7bozlj/image/upload/v1740013381/dean-widom_e1jksa.png"
      />

      <ChapterTeaser
        isHeadingLarge
        superhead="Centennial Book"
        heading="Chapters released monthly, starting in April"
        body="Read each chapter, from 1925 – 2025 from our Stanford Engineering Centennial book. Check back in April for The First Decade, chapter 1."
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
