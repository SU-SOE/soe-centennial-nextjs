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

export const metadata: Metadata = {
  title:
    "A Once-in-a-Century Birthday Celebration | 100 Years of Stanford Engineering",
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
      "A Once-in-a-Century Birthday Celebration | 100 Years of Stanford Engineering",
    description:
      "On May 15, 2025, nearly 3,000 people gathered to celebrate 100 years of Stanford Engineering with research exhibits, live music, and remarks from leaders including Jennifer Widom, Donald Knuth, Jonathan Levin, and Andrew Luck.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748471475/100thCentennial_cakeimage_uvzm3z.png",
        alt: "Four-tier white cake with 'Stanford School of Engineering' written in frosting on the side and candles shaped like the number 100 on top.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "A Once-in-a-Century Birthday Celebration | 100 Years of Stanford Engineering",
    description:
      "Stanford Engineering celebrated its 100th birthday with a campus-wide celebration, live music, research exhibits, and remarks from academic and industry leaders.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1748471475/100thCentennial_cakeimage_uvzm3z.png",
    ],
  },
};

const exploreStoriesData = [
  {
    heading: "“Preparing roads over which culture may ride in comfort”",
    chapter: "Decade 1",
    href: "/stories/preparing-roads-culture-may-ride-comfort",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1743098633/Spr25_SoE-Voltage_Black2_square_kgslwr.jpg",
  },
  {
    superhead: "A Century of Innovation",
    heading: "100 Years of Stanford Engineering",
    href: "/stories/a-century-of-innovation",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
  },
  {
    heading: "Letter from Dean Widom",
    href: "/letter-from-dean-widom",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1746202451/WelcomeDay_GroupPhoto_cropped_phbtkf.jpg",
  },
];

export default function page() {
  return (
    <>
      <Masthead logoColor="white-red" bgColor="cardinal-red" />
      <main id="main-content">
        <article>
          <div className="cc bg-cardinal-red text-white">
            <H1 className="m-0 rs-pt-8 rs-pb-1 flex flex-col text-center">
              A once-in-a-century birthday celebration
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748471475/100thCentennial_cakeimage_uvzm3z.png"
            title="A once-in-a-century birthday celebration"
            className="bg-cardinal-red-dark"
            mediaUrl="https://www.youtube.com/embed/EVPcfyJWREY?si=Q1hkwbH5k7BHXBgs"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              A once-in-a-century birthday celebration – on May 15, 2025,
              exactly 100 years since the official start of the School of
              Engineering, about 3,000 people gathered in the newly named Robert
              Rosenkranz Science and Engineering Quad to mark the occasion and
              celebrate.
            </Text>
            <Text>
              The innovative spirit of the school was on full display as
              attendees had the opportunity to explore over 50 hands-on research
              exhibits hosted by faculty, students, and staff. Professor
              Emeritus Donald Knuth, Dean Jennifer Widom, President Jonathan
              Levin, and Stanford Football General Manager Andrew Luck offered
              congratulatory remarks. The afternoon was capped off with cake,
              live music courtesy of the Stanford Band, and a visit from the
              beloved Stanford Tree.
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
