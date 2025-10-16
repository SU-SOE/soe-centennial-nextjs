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
  title: "Centennial Football | 100 Years of Stanford Engineering",
  description: "",
  keywords: [
    "Stanford Engineering",
    "Centennial Celebration",
    "Engineering Innovation",
    "Stanford Alumni",
    "Engineering Legacy",
    "Jennifer Widom",
    "Donald Knuth",
    "Andrew Luck",
    "Jonathan Levin",
  ],
  openGraph: {
    title: "Centennial Football | 100 Years of Stanford Engineering",
    description: "",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1760551199/Stanford_-SJSU_Bests_nrnr23.jpg",
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centennial Football | 100 Years of Stanford Engineering",
    description: "",
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
              Centennial Football
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1760551199/Stanford_-SJSU_Bests_nrnr23.jpg"
            title="Centennial Football"
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
