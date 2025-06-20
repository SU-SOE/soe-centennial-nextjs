import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import React from "react";
import { Metadata } from "next";
import { H1, H2 } from "@/components/Typography/Header";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { ExploreMore, StoryPosterCard } from "@/components/Story";
import { storiesSource } from "@/utilities/storiesSource";
import { StoriesNav } from "@/components/StoriesNav/StoriesNav";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Centennial event coverage | 100 Years of Stanford Engineering",
  description:
    "Catch all the highlights and insightful moments from the Stanford Engineering Centennial events, showcasing groundbreaking research and inspiring discussions.",
  keywords: [
    "Stanford Engineering",
    "Centennial Events",
    "Event Coverage",
    "Highlights",
    "Groundbreaking Research",
    "Inspiring Discussions",
  ],
  openGraph: {
    title: "Centennial event coverage | 100 Years of Stanford Engineering",
    description:
      "Catch all the highlights and insightful moments from the Stanford Engineering Centennial events, showcasing groundbreaking research and inspiring discussions.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748457049/CentennialEvent_Coverage.jpg",
        alt: "Image capturing speakers and audience at a Stanford Engineering Centennial event.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centennial event coverage | 100 Years of Stanford Engineering",
    description:
      "Catch all the highlights and insightful moments from the Stanford Engineering Centennial events, showcasing groundbreaking research and inspiring discussions.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1748457049/CentennialEvent_Coverage.jpg",
    ],
  },
};

const posterCardData1 = storiesSource.may15EventVideo;

const storyData1 = [storiesSource.may29EventProgram];

export default function page() {
  return (
    <div className="bg-cen-blue-xlight">
      <Masthead logoColor="default" />
      <main id="main-content">
        <article>
          <div className="cc rs-mt-8">
            <H1 className="max-w-1000 w-full">
              Centennial event <br />
              coverage
            </H1>
          </div>
          <div className="flex w-full justify-start rs-mb-7">
            <HorizontalLineart lineartType="A" />
          </div>
          <StoriesNav />
          <StoryPosterCard hasBgImage bgColor="red" {...posterCardData1} />
          <div aria-hidden="true" className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" className="rs-pt-6" />
          </div>
          <Container>
            <H2>Past event programs</H2>
            <div className="mx-auto w-full max-w-1200">
              <ExploreMore
                isThreeCol
                stories={storyData1}
                className="py-0"
                cardBgColor="white"
                headerTag="h2"
              />
            </div>
          </Container>
          <ContributeStoryBanner hasLineArt bgColor="white" />
        </article>
      </main>
    </div>
  );
}
