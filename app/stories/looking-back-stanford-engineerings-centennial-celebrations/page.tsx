import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { ExploreMore } from "@/components/Story";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol } from "@/components/Layout";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { H1 } from "@/components/Typography/Header";
import { storiesSource } from "@/utilities/storiesSource";

export const metadata: Metadata = {
  title:
    "Looking back at Stanford Engineering’s centennial celebrations | 100 Years of Stanford Engineering",
  description:
    "In 2025, the Stanford School of Engineering marked its centennial with a series of events and activities reflecting a century of progress and global impact. The celebration included a commemorative history book, an interactive website, and a short film exploring the school’s notable people and breakthroughs. A panel of five engineering deans opened the season of celebration. On May 15, more than 3,000 guests filled the Science and Engineering Quad to experience research demonstrations from across all nine departments. Two distinguished speaker events brought Jensen Huang and Sergey Brin to campus for compelling conversations with school and university leaders. It was an unforgettable year, and we’re excited to share the event highlights with our campus community and our alumni and friends around the world. As we celebrate this historic moment, we look ahead with excitement to the next century of discovery, innovation, and impact.",
  keywords: [
    "Stanford Engineering",
    "Centennial Celebrations",
    "Anniversary Events",
    "Engineering Breakthroughs",
    "Research Demonstrations",
    "Notable Alumni",
    "STEM Education",
    "Innovation Highlights",
    "Academic Milestones",
    "Engineering History",
    "University Achievements",
    "Future of Engineering",
    "Dean Jennifer Widom",
    "Jensen Huang",
    "Sergey Brin",
    "Stanford Community",
    "Global Impact",
    "Educational Events",
    "Technological Advancements",
    "Campus Activities",
    "Alumni Reflections",
  ],
  openGraph: {
    title:
      "Looking back at Stanford Engineering’s centennial celebrations | 100 Years of Stanford Engineering",
    description:
      "In 2025, the Stanford School of Engineering marked its centennial with a series of events and activities reflecting a century of progress and global impact. The celebration included a commemorative history book, an interactive website, and a short film exploring the school’s notable people and breakthroughs. A panel of five engineering deans opened the season of celebration. On May 15, more than 3,000 guests filled the Science and Engineering Quad to experience research demonstrations from across all nine departments. Two distinguished speaker events brought Jensen Huang and Sergey Brin to campus for compelling conversations with school and university leaders. It was an unforgettable year, and we’re excited to share the event highlights with our campus community and our alumni and friends around the world. As we celebrate this historic moment, we look ahead with excitement to the next century of discovery, innovation, and impact.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1750885012/100thCentennial_A162_O5A1684_m621fu.jpg",
        alt: "Two people add notes to a Centennial Memory Wall filled with red and white sticky notes forming the number 100 for Stanford Engineering's 1925-2025 celebration.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Looking back at Stanford Engineering’s centennial celebrations | 100 Years of Stanford Engineering",
    description:
      "In 2025, the Stanford School of Engineering marked its centennial with a series of events and activities reflecting a century of progress and global impact. The celebration included a commemorative history book, an interactive website, and a short film exploring the school’s notable people and breakthroughs. A panel of five engineering deans opened the season of celebration. On May 15, more than 3,000 guests filled the Science and Engineering Quad to experience research demonstrations from across all nine departments. Two distinguished speaker events brought Jensen Huang and Sergey Brin to campus for compelling conversations with school and university leaders. It was an unforgettable year, and we’re excited to share the event highlights with our campus community and our alumni and friends around the world. As we celebrate this historic moment, we look ahead with excitement to the next century of discovery, innovation, and impact.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1750885012/100thCentennial_A162_O5A1684_m621fu.jpg",
    ],
  },
};

const exploreStoriesData = [
  storiesSource.decade1,
  storiesSource.storyInnovation,
  storiesSource.deanWidomLetter,
];

export default function page() {
  return (
    <>
      <Masthead logoColor="white-red" bgColor="cardinal-red" />
      <main id="main-content" tabIndex={-1}>
        <article>
          <div className="cc bg-cardinal-red text-white">
            <H1 className="m-0 rs-pt-8 rs-pb-1 flex flex-col text-center">
              Looking back at Stanford Engineering’s centennial celebrations
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1750885012/100thCentennial_A162_O5A1684_m621fu.jpg"
            title="Looking back at Stanford Engineering’s centennial celebrations"
            className="bg-cardinal-red"
            mediaUrl="https://www.youtube.com/embed/gIiG7CLRUtI?si=jy42CJXkFXwna2U1"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              In 2025, the Stanford School of Engineering marked its centennial
              with a series of events and activities reflecting a century of
              progress and global impact.
            </Text>
            <Text>
              The celebration included a commemorative history book, an
              interactive website, and a short film exploring the school’s
              notable people and breakthroughs. A panel of five engineering
              deans opened the season of celebration. On May 15, more than 3,000
              guests filled the Science and Engineering Quad to experience
              research demonstrations from across all nine departments. Two
              distinguished speaker events brought Jensen Huang and Sergey Brin
              to campus for compelling conversations with school and university
              leaders.
            </Text>
            <Text>
              It was an unforgettable year, and we’re excited to share the event
              highlights with our campus community and our alumni and friends
              around the world. As we celebrate this historic moment, we look
              ahead with excitement to the next century of discovery,
              innovation, and impact.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start rs-mb-1">
            <HorizontalLineart lineartType="A" />
          </div>
          <ExploreMore
            width="site"
            stories={exploreStoriesData}
            sectionHeading="Explore more stories"
            hasButton
          />
          <ContributeStoryBanner bgColor="blue" hasLineArt />
        </article>
      </main>
    </>
  );
}
