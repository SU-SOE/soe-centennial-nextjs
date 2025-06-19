import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { ExploreMore } from "@/components/Story";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { H1 } from "@/components/Typography/Header";
import { storiesSource } from "@/utilities/storiesSource";

export const metadata: Metadata = {
  title:
    "A glimpse into 100 years of Stanford Engineering | 100 Years of Stanford Engineering",
  description:
    "On May 15, 2025, exactly 100 years since the founding of Stanford School of Engineering, nearly 3,000 people gathered in the newly named Robert Rosenkranz Science and Engineering Quad for a historic celebration featuring hands-on exhibits, keynote remarks, and community festivities.",
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
    title:
      "A glimpse into 100 years of Stanford Engineering | 100 Years of Stanford Engineering",
    description:
      "On May 15, 2025, nearly 3,000 people gathered to celebrate 100 years of Stanford Engineering with research exhibits, live music, and remarks from leaders including Jennifer Widom, Donald Knuth, Jonathan Levin, and Andrew Luck.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1740704737/centennial-yt-cover_dnwrxg.jpg",
        alt: "100 years of Stanford Engineering 1925-2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "A glimpse into 100 years of Stanford Engineering | 100 Years of Stanford Engineering",
    description:
      "Stanford Engineering celebrated its 100th birthday with a campus-wide celebration, live music, research exhibits, and remarks from academic and industry leaders.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1740704737/centennial-yt-cover_dnwrxg.jpg",
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
      <main id="main-content">
        <article>
          <div className="cc bg-cardinal-red text-white">
            <H1 className="m-0 rs-pt-8 rs-pb-1 flex flex-col text-center">
              <span className="fluid-type-2">A glimpse into</span>
              <span className="fluid-type-5">
                100 years of Stanford Engineering
              </span>
            </H1>
          </div>
          <EmbedMediaHero
            isPreview
            title="A glimpse into 100 years of Stanford Engineering"
            className="bg-cardinal-red"
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1740704737/centennial-yt-cover_dnwrxg.jpg"
            mediaUrl="https://youtu.be/2xD0_THX4Kg?si=_-iEUv3vmzWTykFP"
          />
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
