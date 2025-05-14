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
    "Stanford Engineering at 100: Transformative Breakthroughs, Boundless Horizons | 100 Years of Stanford Engineering",
  description:
    "Celebrating 100 years of discovery, innovation, and global impact, this story spotlights Stanford Engineering's most influential leaders, groundbreaking moments, and enduring legacy of excellence.",
  keywords: [
    "Stanford Engineering",
    "Centennial Story",
    "Engineering Innovation",
    "Stanford Alumni",
    "Engineering Legacy",
    "Jennifer Widom",
    "Jensen Huang",
    "Jerry Yang",
  ],
  openGraph: {
    title:
      "Stanford Engineering at 100: Transformative Breakthroughs, Boundless Horizons | 100 Years of Stanford Engineering",
    description:
      "This short film celebrates a century of innovation at Stanford Engineering, featuring leaders like Jennifer Widom, Persis Drell, and industry pioneers such as Jensen Huang and Jerry Yang.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1747093197/SOE100_DOC_Logo_sj4min.png",
        alt: "Stanford Engineering 100th Anniversary Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Stanford Engineering at 100: Transformative Breakthroughs, Boundless Horizons | 100 Years of Stanford Engineering",
    description:
      "A century of engineering excellence: watch Stanford’s leaders and alumni reflect on innovation, discovery, and impact around the world.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1747093197/SOE100_DOC_Logo_sj4min.png",
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
              <span className="fluid-type-5">
                Stanford Engineering at 100:{" "}
              </span>
              <span className="fluid-type-2">
                Transformative Breakthroughs, Boundless Horizons
              </span>
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1747093198/SOE100_DOC_NoLogo_r49m0c.png"
            title="Stanford Engineering at 100: Transformative Breakthroughs, Boundless Horizons"
            className="bg-cardinal-red-dark"
            mediaUrl="https://www.youtube.com/embed/EVPcfyJWREY?si=Q1hkwbH5k7BHXBgs"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              In 2025, the Stanford School of Engineering celebrates 100 years
              of discovery, innovation, and global impact. As we look back on
              ten decades of engineering excellence at Stanford, this short film
              provides a window into the perspectives of our most influential
              leaders, the stories behind our most impactful moments of
              discovery, and the pioneering spirit that makes Stanford
              Engineering the beacon for innovation that it is today.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol>
            <Text>
              You’ll hear from Dean Jennifer Widom, as well as her predecessors
              Persis Drell, Jim Plummer, John Hennessy, and Jim Gibbons.
              Stanford’s 13th President, Jonathan Levin, and several alumni who
              have gone on to become titans of industry, including Jensen Huang
              and Jerry Yang, share insights into the breakthroughs that have
              come out of the Stanford School of Engineering and gone on to
              change lives and shape society.
            </Text>
            <Text>
              Join us as we walk through the milestones of the past and look
              ahead to the challenges and opportunities of the next 100 years.
            </Text>
          </OneCol>
          <ExploreMore
            width="site"
            stories={exploreStoriesData}
            sectionHeading="Explore more stories"
            hasButton
          />
          <ContributeStoryBanner bgColor="blue" hasLineArt />
        </article>
      </main>
    </>
  );
}
