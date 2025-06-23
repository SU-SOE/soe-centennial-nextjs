import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import React from "react";
import { Metadata } from "next";
import { H1 } from "@/components/Typography/Header";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { ExploreMore, StoryPosterCard } from "@/components/Story";
import { storiesSource } from "@/utilities/storiesSource";
import { StoriesNav } from "@/components/StoriesNav/StoriesNav";

export const metadata: Metadata = {
  title: "Explore through video | 100 Years of Stanford Engineering",
  description:
    "Dive into the Stanford Engineering Centennial stories and witness transformative engineering feats through engaging videos.",
  keywords: [
    "Stanford Engineering",
    "Centennial Videos",
    "Video Exploration",
    "Transformative Engineering",
    "Historical Videos",
    "Engineering Feats",
  ],
  openGraph: {
    title: "Explore through video | 100 Years of Stanford Engineering",
    description:
      "Dive into the Stanford Engineering Centennial stories and witness transformative engineering feats through engaging videos.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748457049/CentennialVideo_Explore.jpg",
        alt: "Snapshot of Stanford Engineering video footage showing historic and modern achievements.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore through video | 100 Years of Stanford Engineering",
    description:
      "Dive into the Stanford Engineering Centennial stories and witness transformative engineering feats through engaging videos.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1748457049/CentennialVideo_Explore.jpg",
    ],
  },
};

const posterCardData1 = storiesSource.transformativeBreakthroughs;

const storyData1 = [storiesSource.may15EventVideo, storiesSource.sizzleReel];

export default function page() {
  return (
    <div className="bg-cen-blue-xlight">
      <Masthead logoColor="default" />
      <main id="main-content">
        <article>
          <div className="cc rs-mt-8">
            <H1 className="max-w-700 w-full">Explore through video</H1>
          </div>
          <div className="flex w-full justify-end rs-mb-7">
            <HorizontalLineart lineartType="B" />
          </div>
          <StoriesNav />
          <ul className="list-none p-0">
            <li>
              <StoryPosterCard
                hasBgImage
                bgColor="stone-dark"
                {...posterCardData1}
              />
            </li>
            <li className="mx-auto w-full max-w-1200">
              <ExploreMore
                stories={storyData1}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </li>
          </ul>
          <ContributeStoryBanner hasLineArt bgColor="white" />
        </article>
      </main>
    </div>
  );
}
