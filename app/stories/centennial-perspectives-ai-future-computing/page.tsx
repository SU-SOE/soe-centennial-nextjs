import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol, TwoCol } from "@/components/Layout";
import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { H1 } from "@/components/Typography/Header";
import { ExploreMore, StoryCard, StorySidebar } from "@/components/Story";

export const metadata: Metadata = {
  title:
    "Centennial Perspectives: AI and the Future of Computing | 100 Years of Stanford Engineering",
  description:
    "Join us for a conversation exploring AI and the Future of Computing, hosted by Dean Jennifer Widom. This event features a conversation between Jensen Huang (MS ’92), founder, president, and CEO of NVIDIA, and John Hennessy, Stanford President Emeritus and professor of electrical engineering and of computer science; talks by engineering faculty Srabanti Chowdhury, Carlos Guestrin, and Kunle Olukotun; closing remarks from Stanford President Jonathan Levin, and a special appearance from Morris Chang (PhD '64), Founding Chairman of Taiwan Semiconductor Manufacturing Company (TSMC).\n\nHoover Institution Director Condoleezza Rice introduces the 2025 Stanford Emerging Technology Review.\n\nAs part of Stanford Engineering’s centennial celebration, Centennial Perspectives is a speaker series that highlights innovative research and its impact on society.",
  keywords: [
    "Stanford Engineering",
    "Centennial Story",
    "AI and Future of Computing",
    "Engineering Legacy",
    "Innovative Research",
    "Speaker Series",
  ],
  openGraph: {
    title:
      "Centennial Perspectives: AI and the Future of Computing | 100 Years of Stanford Engineering",
    description:
      "Join us for a conversation exploring AI and the Future of Computing, hosted by Dean Jennifer Widom. This event features a conversation between Jensen Huang (MS ’92), founder, president, and CEO of NVIDIA, and John Hennessy, Stanford President Emeritus and professor of electrical engineering and of computer science; talks by engineering faculty Srabanti Chowdhury, Carlos Guestrin, and Kunle Olukotun; closing remarks from Stanford President Jonathan Levin, and a special appearance from Morris Chang (PhD '64), Founding Chairman of Taiwan Semiconductor Manufacturing Company (TSMC).\n\nHoover Institution Director Condoleezza Rice introduces the 2025 Stanford Emerging Technology Review.\n\nAs part of Stanford Engineering’s centennial celebration, Centennial Perspectives is a speaker series that highlights innovative research and its impact on society.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748457049/100thCentennial_May29_ykkfur.jpg",
        alt: "Serene nighttime courtyard scene with palm trees silhouetted against the night sky.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Centennial Perspectives: AI and the Future of Computing | 100 Years of Stanford Engineering",
    description:
      "Join us for a conversation exploring AI and the Future of Computing, hosted by Dean Jennifer Widom. This event features a conversation between Jensen Huang (MS ’92), founder, president, and CEO of NVIDIA, and John Hennessy, Stanford President Emeritus and professor of electrical engineering and of computer science; talks by engineering faculty Srabanti Chowdhury, Carlos Guestrin, and Kunle Olukotun; closing remarks from Stanford President Jonathan Levin, and a special appearance from Morris Chang (PhD '64), Founding Chairman of Taiwan Semiconductor Manufacturing Company (TSMC).\n\nHoover Institution Director Condoleezza Rice introduces the 2025 Stanford Emerging Technology Review.\n\nAs part of Stanford Engineering’s centennial celebration, Centennial Perspectives is a speaker series that highlights innovative research and its impact on society.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1748457049/100thCentennial_May29_ykkfur.jpg",
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
              <span className="fluid-type-5">Centennial Perspectives: </span>
              <span className="fluid-type-2">
                AI and the Future of Computing
              </span>
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748457049/100thCentennial_May29_ykkfur.jpg"
            title="Stanford Engineering at 100: Transformative Breakthroughs, Boundless Horizons"
            className="bg-cardinal-red-dark"
            mediaUrl="https://www.youtube.com/embed/EVPcfyJWREY?si=Q1hkwbH5k7BHXBgs"
          />
          <TwoCol className="rs-mt-5" isSidebar>
            <OneCol>
              <Text variant="overview" className="cen-drop-cap" mb="none">
                Join us for a conversation exploring AI and the Future of
                Computing, hosted by Dean Jennifer Widom.
              </Text>
              <Text>
                This event features a conversation between Jensen Huang (MS
                &apos;92), founder, president, and CEO of NVIDIA, and John
                Hennessy, Stanford President Emeritus and professor of
                electrical engineering and of computer science; talks by
                engineering faculty Srabanti Chowdhury, Carlos Guestrin, and
                Kunle Olukotun; closing remarks from Stanford President Jonathan
                Levin, and a special appearance from Morris Chang (PhD
                &apos;64), Founding Chairman of Taiwan Semiconductor
                Manufacturing Company (TSMC).
              </Text>
              <Text>
                Hoover Institution Director Condoleezza Rice introduces the 2025{" "}
                <em>Stanford Emerging Technology Review</em>.
              </Text>
              <Text>
                <em>
                  As part of Stanford Engineering’s centennial celebration,
                  Centennial Perspectives is a speaker series that highlights
                  innovative research and its impact on society.
                </em>
              </Text>
            </OneCol>
            <StorySidebar>
              <StoryCard
                chapter="Past Event"
                heading="Explore the Program"
                body="Includes session titles and presenter names."
                href="/events/centennial-perspectives-ai-future-computing"
              />
            </StorySidebar>
          </TwoCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="C" />
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
