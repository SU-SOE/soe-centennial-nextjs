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
  title: "Stanford Football Highlights | 100 Years of Stanford Engineering",
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
    title: "Stanford Football Highlights | 100 Years of Stanford Engineering",
    description: "",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748471475/100thCentennial_cakeimage_uvzm3z.png",
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stanford Football Highlights | 100 Years of Stanford Engineering",
    description: "",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1748471475/100thCentennial_cakeimage_uvzm3z.png",
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
              Stanford Football Highlight
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748471475/100thCentennial_cakeimage_uvzm3z.png"
            title="Stanford Football Highlights"
            className="bg-cardinal-red"
            mediaUrl="https://www.youtube.com/embed/nsxuADCSTYg?si=fcS-9_GRgC9wsqtV"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              Lorem ipsum dolor sit amet consectetur, adipiscing elit consequat
              erat, ante magna bibendum semper. Commodo taciti proin hac integer
              neque at magnis viverra habitant vulputate porta dictum, sapien
              pretium ad tortor quisque nisi tempus malesuada venenatis faucibus
              velit.
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
