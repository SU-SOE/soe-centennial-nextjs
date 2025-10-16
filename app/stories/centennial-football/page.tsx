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
    "Stanford Engineering Centennial football celebration | 100 Years of Stanford Engineering",
  description:
    "On September 27, 2025, Stanford Engineering teamed up with Stanford Football for a one-of-a-kind celebration marking the School of Engineering’s centennial. Before the Cardinal faced off against San Jose State University, Dean Jennifer Widom and Football General Manager Andrew Luck (BS ’12, MA ’23) led the players in “The Walk” to the stadium, riding a motorized couch built by the student Moonshot Club, followed by the Solar Car team’s latest vehicle, Azimuth. A centennial-themed tailgate brought together faculty, students, staff, and alumni to celebrate, with engineering exhibits and remarks from Widom and Luck. In the stadium they joined the whole Stanford community to cheer the Cardinal to a thrilling last-minute 30-29 victory.",
  keywords: [
    "Stanford Engineering",
    "Stanford Football",
    "Centennial Celebration",
    "Jennifer Widom",
    "Andrew Luck",
    "Moonshot Club",
    "Solar Car Team",
    "Azimuth",
    "Tailgate",
    "Stanford vs San Jose State",
    "Victory",
  ],
  openGraph: {
    title:
      "Stanford Engineering Centennial football celebration | 100 Years of Stanford Engineering",
    description:
      "On September 27, 2025, Stanford Engineering teamed up with Stanford Football for a one-of-a-kind celebration marking the School of Engineering’s centennial. Before the Cardinal faced off against San Jose State University, Dean Jennifer Widom and Football General Manager Andrew Luck (BS ’12, MA ’23) led the players in “The Walk” to the stadium, riding a motorized couch built by the student Moonshot Club, followed by the Solar Car team’s latest vehicle, Azimuth. A centennial-themed tailgate brought together faculty, students, staff, and alumni to celebrate, with engineering exhibits and remarks from Widom and Luck. In the stadium they joined the whole Stanford community to cheer the Cardinal to a thrilling last-minute 30-29 victory.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1760551199/Stanford_-SJSU_Bests_nrnr23.jpg",
        alt: "Stanford community celebrating during the centennial football game against San Jose State University.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Stanford Engineering Centennial football celebration | 100 Years of Stanford Engineering",
    description:
      "Stanford Engineering and Stanford Football teamed up on September 27, 2025, for a unique centennial celebration. The event included 'The Walk' led by Dean Jennifer Widom and Andrew Luck, a tailgate with engineering exhibits, and a thrilling game where the Cardinal secured a last-minute 30-29 victory against San Jose State University.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1760551199/Stanford_-SJSU_Bests_nrnr23.jpg",
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
              Stanford Engineering Centennial football celebration
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1760551199/Stanford_-SJSU_Bests_nrnr23.jpg"
            title="Stanford Engineering Centennial football celebration"
            className="bg-cardinal-red"
            mediaUrl="https://www.youtube.com/embed/rT7vaa4owk8?si=lcFgf9HL_KOasg8T"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              On September 27, 2025, Stanford Engineering teamed up with
              Stanford Football for a one-of-a-kind celebration marking the
              School of Engineering’s centennial.
            </Text>
            <Text>
              Before the Cardinal faced off against San Jose State University,
              Dean Jennifer Widom and Football General Manager Andrew Luck (BS
              ’12, MA ’23) led the players in “The Walk” to the stadium, riding
              a motorized couch built by the student Moonshot Club, followed by
              the Solar Car team’s latest vehicle, Azimuth. A centennial-themed
              tailgate brought together faculty, students, staff, and alumni to
              celebrate, with engineering exhibits and remarks from Widom and
              Luck. In the stadium they joined the whole Stanford community to
              cheer the Cardinal to a thrilling last-minute 30-29 victory.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end rs-mb-1">
            <HorizontalLineart lineartType="D" />
          </div>
          <ExploreMore
            width="site"
            stories={exploreStoriesData}
            sectionHeading="Explore more stories"
            hasButton
          />
          <ContributeStoryBanner bgColor="red" hasLineArt />
        </article>
      </main>
    </>
  );
}
