import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import React from "react";
import { Metadata } from "next";
import { H1 } from "@/components/Typography/Header";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { ExploreMore, StoryCard, StoryPosterCard } from "@/components/Story";
import { AnimatedPosterCard } from "@/components/AnimatedHero";

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
  {
    heading: "“Preparing roads over which culture may ride in comfort”",
    chapter: "Decade 2",
    href: "/stories/the-foundation-of-a-new-era-in-engineering",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg",
  },
  {
    superhead: "Lorem ipsum",
    heading: "Centennial impact story",
    href: "/stories/tbd",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265421/ocean_one_fwy7nd.jpg",
  },
];

const storyData2 = [
  {
    heading: "A period of transformation",
    chapter: "Decade 4",
    href: "/stories/a-period-of-transformation",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1743098633/Spr25_SoE-Voltage_Black2_square_kgslwr.jpg",
  },
  {
    heading: "Letter from Dean Widom",
    href: "/letter-from-dean-widom",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1740503452/Dean-Widom-cropped_s2ocbf.jpg",
  },
];

export default function page() {
  return (
    <div className="bg-cen-blue-xlight">
      <Masthead logoColor="default" />
      <main id="main-content">
        <article>
          <div className="cc rs-mt-8">
            <H1>Ten decades of world-changing stories</H1>
          </div>
          <div className="flex w-full justify-start rs-mb-7">
            <HorizontalLineart lineartType="A" />
          </div>
          <ul className="list-none">
            <li className="cc">
              <StoryPosterCard
                hasBgImage
                chapter="Decade 1"
                heading="“Preparing roads over which culture may ride in comfort”"
                dek="1925 – 1934"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg"
                link="/stories/preparing-roads-culture-may-ride-comfort"
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
            <div
              aria-hidden="true"
              className="flex w-full justify-start rs-mb-8"
            >
              <HorizontalLineart lineartType="D" />
            </div>
            <li className="cc">
              <StoryCard
                isHeadingLarge
                isHorizontal
                chapter="Decade 3"
                heading="The Terman era"
                href="/stories/the-terman-era"
                imageUrl="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766096/CC146_s4mzgg.jpg"
                bgColor="white"
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
          </ul>
          <div aria-hidden="true" className="flex w-full justify-end rs-mb-8">
            <HorizontalLineart lineartType="C" />
          </div>
          <AnimatedPosterCard
            superhead="1925 – 2025"
            heading="Explore the Centennial timeline"
            link="/timeline"
            buttonText="Explore the timeline"
          />
          <ContributeStoryBanner hasLineArt bgColor="white" />
        </article>
      </main>
    </div>
  );
}
