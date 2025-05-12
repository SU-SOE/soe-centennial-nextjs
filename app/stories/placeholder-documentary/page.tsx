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
    "Placeholder Heading: The future of children’s health | 100 Years of Stanford Engineering",
  description:
    "This is a placeholder description for a Centennial story. Update this text to reflect the unique content of the story page.",
  keywords: [
    "Stanford Engineering",
    "Centennial Story",
    "Placeholder Metadata",
    "Engineering Legacy",
  ],
  openGraph: {
    title:
      "Placeholder Heading: The future of children’s health | 100 Years of Stanford Engineering",
    description:
      "This is a placeholder Open Graph description for a Centennial story. Update this to summarize the story’s content for social sharing.",
    images: [
      {
        url: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/placeholder-image.jpg",
        alt: "Descriptive alt text for the Open Graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Placeholder Heading: The future of children’s health | 100 Years of Stanford Engineering",
    description:
      "This is a placeholder Twitter description for a Centennial story. Update this for improved visibility and clarity on social platforms.",
    images: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/placeholder-image.jpg",
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
      <Masthead logoColor="white-red" bgColor="red" />
      <main id="main-content">
        <article>
          <H1 className="sr-only">
            Placeholder Heading: The future of children’s health
          </H1>
          <EmbedMediaHero
            autoplay
            className="bg-cardinal-red-dark"
            mediaUrl="https://www.youtube.com/embed/Da0hnrQkY1o?si=qJfnAyVohcut-JwZ"
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
              Persis Drell, Jim Plummer, John Hennessey, and Jim Gibbons.
              Stanford’s 13th President, Jon Levin, and several alumni who have
              gone on to become titans of industry, including Jensen Huang and
              Jerry Yang, share insights into the breakthroughs that have come
              out of the Stanford School of Engineering and gone on to change
              lives and shape society.
            </Text>
            <Text>
              Join us as we walk through the milestones of the past and look
              ahead to the challenges and opportunities of the next 100 years.
            </Text>
          </OneCol>
          <ExploreMore
            width="site"
            stories={exploreStoriesData}
            sectionHeading="Explore more decades"
            hasButton
          />
          <ContributeStoryBanner bgColor="blue" hasLineArt />
        </article>
      </main>
    </>
  );
}
