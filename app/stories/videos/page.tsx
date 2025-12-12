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
  title:
    "Explore Stanford Engineering's Centennial through video | 100 Years of Stanford Engineering",
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
    title:
      "Explore Stanford Engineering's Centennial through video | 100 Years of Stanford Engineering",
    description:
      "Dive into the Stanford Engineering Centennial stories and witness transformative engineering feats through engaging videos.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1747093198/SOE100_DOC_NoLogo_r49m0c.png",
        alt: "A collage of Stanford engineering students and faculty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Explore Stanford Engineering's Centennial through video | 100 Years of Stanford Engineering",
    description:
      "Dive into the Stanford Engineering Centennial stories and witness transformative engineering feats through engaging videos.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1747093198/SOE100_DOC_NoLogo_r49m0c.png",
    ],
  },
};

const posterCardData1 = storiesSource.may29EventVideo;
const posterCardData2 = storiesSource.footballEventVideo;

const storyData1 = [
  storiesSource.transformativeBreakthroughs,
  storiesSource.may15EventVideo,
  storiesSource.sizzleReel,
];

export default function page() {
  return (
    <div className="bg-cen-blue-xlight">
      <Masthead logoColor="default" />
      <main id="main-content" tabIndex={-1}>
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
                className="rs-mb-5"
                hasBgImage
                widePreviewImage
                bgColor="red"
                {...storiesSource.dec7EventVideo}
              />
            </li>
            <li>
              <StoryPosterCard
                className="rs-mb-5"
                hasBgImage
                imageLeft
                widePreviewImage
                bgColor="stone-dark"
                {...posterCardData2}
              />
            </li>
            <li>
              <StoryPosterCard
                hasBgImage
                bgColor="red"
                widePreviewImage
                {...posterCardData1}
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
          </ul>
          <ContributeStoryBanner hasLineArt bgColor="white" />
        </article>
      </main>
    </div>
  );
}
