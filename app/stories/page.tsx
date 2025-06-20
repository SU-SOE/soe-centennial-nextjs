import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import React from "react";
import { Metadata } from "next";
import { H1 } from "@/components/Typography/Header";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { ExploreMore, StoryCard, StoryPosterCard } from "@/components/Story";
import { AnimatedPosterCard } from "@/components/AnimatedHero";
import { storiesSource } from "@/utilities/storiesSource";
import { StoriesNav } from "@/components/StoriesNav/StoriesNav";

export const metadata: Metadata = {
  title: "Stories worth telling | 100 Years of Stanford Engineering",
  description:
    "Explore inspiring stories that celebrate the legacy, innovation, and impact of the Stanford School of Engineering over the past centennial.",
  keywords: [
    "Stanford history",
    "Stanford Engineering",
    "School of Engineering",
    "technological advancement",
    "engineering legacy",
    "innovation",
    "centennial celebration",
    "engineering stories",
  ],
  openGraph: {
    title: "Stories worth telling | 100 Years of Stanford Engineering",
    description:
      "A curated collection of stories highlighting the people, breakthroughs, and ideas that shaped a century of engineering at Stanford.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg",
        alt: "Historic Stanford engineering class in session, circa 1925",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories worth telling | 100 Years of Stanford Engineering",
    description:
      "Discover the remarkable people and ideas that shaped 100 years of Stanford Engineering.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg",
    ],
  },
};

const storyData1 = [
  storiesSource.transformativeBreakthroughs,
  storiesSource.storyInnovation,
  storiesSource.deanWidomLetter,
];

const storyData2 = [
  storiesSource.decade2,
  storiesSource.decade3,
  storiesSource.decade4,
];

const storyCardData = storiesSource.decade5;

const storyData3 = [
  storiesSource.decade6,
  storiesSource.decade7,
  storiesSource.decade8,
];

export default function page() {
  return (
    <div className="bg-cen-blue-xlight">
      <Masthead logoColor="default" />
      <main id="main-content">
        <article>
          <div className="cc rs-mt-8">
            <H1 className="max-w-1000 w-full">
              A century of <br />
              world-changing stories
            </H1>
          </div>
          <div className="flex w-full justify-start rs-mb-7">
            <HorizontalLineart lineartType="A" />
          </div>
          <StoriesNav />
          <ul className="list-none p-0">
            <li>
              <StoryCard
                isHorizontal
                isHeadingLarge
                {...storiesSource.may15EventVideo}
              />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
                isThreeCol
                stories={storyData1}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </li>
            <li
              aria-hidden="true"
              className="flex w-full justify-start rs-mb-8"
            >
              <HorizontalLineart lineartType="D" />
            </li>
            <li className="cc">
              <StoryPosterCard
                hasBgImage
                chapter="Decade 1"
                heading="“Preparing roads over which culture may ride in comfort”"
                dek="1925 – 1934"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg"
                href="/stories/preparing-roads-culture-may-ride-comfort"
              />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
                isThreeCol
                stories={storyData2}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </li>
            <li className="cc">
              <StoryCard
                isHeadingLarge
                isHorizontal
                chapterColor="stone"
                bgColor="stone-dark"
                {...storyCardData}
              />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
                isThreeCol
                stories={storyData3}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </li>
          </ul>
          <div aria-hidden="true" className="flex w-full justify-end rs-mb-8">
            <HorizontalLineart lineartType="C" className="rs-pt-6 !rs-pb-0" />
          </div>
          <AnimatedPosterCard
            className="rs-mb-7"
            superhead="1925 – 2025"
            heading="Explore the Centennial timeline"
            href="/timeline"
            buttonText="Explore the timeline"
          />
          <ContributeStoryBanner hasLineArt bgColor="white" />
        </article>
      </main>
    </div>
  );
}
