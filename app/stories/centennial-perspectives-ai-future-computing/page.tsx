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
                Stanford Engineering has played a major role in shaping the
                computing era, from very early innovations in electrical
                engineering to the creation of the first internet protocols, to
                the rise of AI and deep learning. This cutting-edge work
                continues today in research led by our faculty and students, and
                in key leadership positions held by our alumni.
              </Text>
              <Text>
                At our May 29 event, “Centennial Perspectives: AI and the Future
                of Computing,” a full audience joined us in Hauck Auditorium to
                reflect on Stanford Engineering’s legacy in computing and to
                look ahead to what’s on the horizon. The event, hosted by Dean
                Jennifer Widom, featured a keynote conversation between Jensen
                Huang (MS ’92), founder and CEO of NVIDIA, and Stanford
                President Emeritus John Hennessy, and talks by faculty members
                Srabanti Chowdhury on next-generation chips, Kunle Olukotun on
                computer system architecture, and Carlos Guestrin on a new
                generation of AI tools. Hoover Institution Director Condoleezza
                Rice introduced the 2025 Stanford Emerging Technology Review,
                TSMC Founding Chairman Morris Chang (PhD ’64) shared a video
                message to congratulate the school on its centennial, and
                Stanford President Jonathan Levin shared closing remarks.
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
