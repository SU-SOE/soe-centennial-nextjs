import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import React from "react";
import { Metadata } from "next";
import { H1, Text } from "@/components/Typography";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { ExploreMore, StoryCard, StoryPosterCard } from "@/components/Story";
import { AnimatedPosterCard } from "@/components/AnimatedHero";
import { storiesSource } from "@/utilities/storiesSource";
import { StoriesNav } from "@/components/StoriesNav/StoriesNav";

export const metadata: Metadata = {
  title: "Ten decades of global impact | 100 Years of Stanford Engineering",
  description:
    "Explore the Stanford Engineering Centennial stories capturing each decade from 1925-2025",
  keywords: [
    "Stanford Engineering",
    "Centennial Stories",
    "Transformation",
    "Decades Overview",
    "1925-2025",
    "Engineering History",
  ],
  openGraph: {
    title: "Ten decades of global impact | 100 Years of Stanford Engineering",
    description:
      "Explore the Stanford Engineering Centennial stories capturing each decade from 1925-2025",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg",
        alt: "Historic Stanford engineering class in session, circa 1925",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ten decades of global impact | 100 Years of Stanford Engineering",
    description:
      "Explore the Stanford Engineering Centennial stories capturing each decade from 1925-2025",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg",
    ],
  },
};

const posterCardData1 = storiesSource.decade1;

const storyData1 = [storiesSource.decade2, storiesSource.decade3];

const storyCardData = storiesSource.decade4;

const storyData2 = [storiesSource.decade5, storiesSource.decade6];

const posterCardData2 = storiesSource.decade7;

const storyData3 = [storiesSource.decade8, storiesSource.decade9];

const posterCardData3 = storiesSource.decade10;

export default function page() {
  return (
    <div className="bg-cen-blue-xlight">
      <Masthead logoColor="default" />
      <main id="main-content">
        <article>
          <div className="cc rs-mt-8">
            <div className="flex flex-col lg:flex-row w-full max-w-1500 gap-0 lg:gap-[7.6rem] lg:items-end">
              <H1 className="mt-0 w-full text-left lg:max-w-700">
                Ten decades of global impact
              </H1>
              <Text size="f2">
                Explore the Stanford Engineering Centennial stories capturing
                each decade from 1925-2025.
              </Text>
            </div>
          </div>
          <div className="flex w-full justify-end rs-mb-7">
            <HorizontalLineart lineartType="C" />
          </div>
          <StoriesNav />
          <ul className="list-none p-0">
            <li className="cc">
              <StoryPosterCard hasBgImage {...posterCardData1} />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
                stories={storyData1}
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
                stories={storyData2}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </li>
            <li className="cc">
              <StoryPosterCard hasBgImage {...posterCardData2} />
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
              <StoryPosterCard imageLeft hasBgImage {...posterCardData3} />
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
