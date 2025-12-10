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
  title:
    "A century of world-changing stories | 100 Years of Stanford Engineering",
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
    title:
      "A century of world-changing stories | 100 Years of Stanford Engineering",
    description:
      "A curated collection of stories highlighting the people, breakthroughs, and ideas that shaped a century of engineering at Stanford.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
        alt: "A collage of Stanford engineering students and faculty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "A century of world-changing stories | 100 Years of Stanford Engineering",
    description:
      "Discover the remarkable people and ideas that shaped 100 years of Stanford Engineering.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
    ],
  },
};

const storyDataRow1 = [
  storiesSource.footballEventVideo,
  storiesSource.may15EventVideo,
];
const storyDataRow2 = [
  storiesSource.transformativeBreakthroughs,
  storiesSource.deanWidomLetter,
];

const storyData2 = [storiesSource.decade2, storiesSource.decade3];

const storyCardData = storiesSource.decade4;

const storyData3 = [storiesSource.decade5, storiesSource.decade6];

const storyCardData2 = storiesSource.decade7;

const storyData4 = [storiesSource.decade8, storiesSource.decade9];

const storyCardData3 = storiesSource.decade10;

export default function page() {
  return (
    <div className="bg-cen-blue-xlight">
      <Masthead logoColor="default" />
      <main id="main-content" tabIndex={-1}>
        <article>
          <div className="cc rs-mt-8">
            <H1 className="max-w-800 w-full">
              A century of world-changing stories
            </H1>
          </div>
          <div className="flex w-full justify-start rs-mb-7">
            <HorizontalLineart lineartType="A" />
          </div>
          <StoriesNav />
          <ul className="list-none p-0">
            <li className="cc">
              <StoryCard
                isHorizontal
                isHeadingLarge
                {...storiesSource.storyInnovation}
              />
            </li>
            <li>
              <StoryPosterCard
                className="rs-my-5"
                hasBgImage
                widePreviewImage
                bgColor="stone-dark"
                {...storiesSource.sharedInnovation}
              />
            </li>
            <li aria-hidden="true" className="flex w-full justify-end rs-mb-8">
              <HorizontalLineart lineartType="B" />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
                stories={storyDataRow1}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
                stories={storyDataRow2}
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
              <StoryPosterCard hasBgImage {...storiesSource.decade1} />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
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
                stories={storyData3}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </li>
            <li className="cc">
              <StoryPosterCard hasBgImage {...storyCardData2} />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
                stories={storyData4}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </li>
            <li className="cc">
              <StoryPosterCard hasBgImage imageLeft {...storyCardData3} />
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
