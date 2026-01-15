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
  title: "A glimpse into Stanford Engineering's centennial celebrations",
  description: "",
  keywords: ["Stanford Engineering"],
  openGraph: {
    title: "A glimpse into Stanford Engineering's centennial celebrations",
    description: "",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1768504239/100thCentennial_A189_M9A8842_dgukbw.jpg",
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A glimpse into Stanford Engineering's centennial celebrations",
    description: "",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1768504239/100thCentennial_A189_M9A8842_dgukbw.jpg",
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
              A glimpse into Stanford Engineering's centennial celebrations
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1768504239/100thCentennial_A189_M9A8842_dgukbw.jpg"
            title="A glimpse into Stanford Engineering's centennial celebrations"
            className="bg-cardinal-red"
            mediaUrl="https://www.youtube.com/embed/dnyaqjpb39k?si=CBaZgVXGTjGd8G9E"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              In 2025, the Stanford School of Engineering marked its 100-year anniversary. Please enjoy this glimpse into the celebrations that were hosted throughout the year.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end rs-mb-1">
            <HorizontalLineart lineartType="B" />
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
