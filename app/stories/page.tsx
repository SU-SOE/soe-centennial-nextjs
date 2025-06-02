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
    chapter: "Video",
    superhead: "Stanford Engineering at 100",
    heading: "Transformative Breakthroughs, Boundless Horizons",
    href: "/stories/stanford-engineering-100",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1747235639/SOE100_DOC_NoLogo-cropped_prv11s.png",
  },
  {
    superhead: "A Century of Innovation",
    heading: "100 Years of Stanford Engineering",
    href: "/stories/a-century-of-innovation",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
  },
  {
    heading: "Letter from Dean Widom",
    href: "/letter-from-dean-widom",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746202451/WelcomeDay_GroupPhoto_cropped_phbtkf.jpg",
  },
];

const storyData2 = [
  {
    heading: "“Preparing roads over which culture may ride in comfort”",
    chapter: "Decade 2",
    href: "/stories/the-foundation-of-a-new-era-in-engineering",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg",
  },
  {
    chapter: "Decade 3",
    heading: "The Terman era",
    href: "/stories/the-terman-era",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1744766096/CC146_s4mzgg.jpg",
  },
  {
    chapter: "Decade 4",
    heading: "A period of transformation",
    href: "/stories/a-period-of-transformation",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/PC0141_b12_Dish_0088_EWS_emptkd.jpg",
  },
];

const storyCardData = {
  heading: "New spaces and expanding influence",
  chapter: "Decade 5",
  href: "/stories/new-spaces-and-expanding-influence",
  src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746062204/SC0122_s1_b269_f15_3586-11_g8v14c.jpg",
};

const storyData3 = [
  {
    chapter: "Decade 6",
    heading: "Bridging worlds: chips, code, and cosmos",
    href: "/stories/bridging-worlds-chips-code-and-cosmos",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1747098478/SC1041_SAIL_CartDeck_2_htazm5.jpg",
  },
  {
    chapter: "Decade 7",
    heading: "Redevelopment and an earthquake",
    href: "/stories/redevelopment-and-an-earthquake",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748482749/SC0122_1998-144_b02_Computers_1985_0033_g5ol5n.jpg",
  },
  {
    chapter: "Decade 8",
    heading: "The future firmly in sight",
    href: "/stories/tbd",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748483051/original_Google_server_gmqcoh.jpg",
  },
];

export default function page() {
  return (
    <div className="bg-cen-blue-xlight">
      <Masthead logoColor="default" />
      <main id="main-content">
        <article>
          <div className="cc rs-mt-8">
            <H1 className="max-w-1000 w-full">
              Ten decades of <br />
              world-changing stories
            </H1>
          </div>
          <div className="flex w-full justify-start rs-mb-7">
            <HorizontalLineart lineartType="A" />
          </div>
          <ul className="list-none p-0">
            <li>
              <StoryPosterCard
                hasBgImage
                bgColor="red"
                chapter="Video"
                heading="A once-in-a-century birthday celebration"
                body="May 15, 2025"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748471475/100thCentennial_cakeimage_uvzm3z.png"
                href="/stories/a-once-in-a-century-birthday-celebration"
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
