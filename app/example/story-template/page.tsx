import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { Quote } from "@/components/Quote";
import {
  ExploreMore,
  FootnotesList,
  StoryImpactBanner,
} from "@/components/Story";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Story Template Title | 100 Years of Stanford Engineering",
  description:
    "This is a placeholder description for a Centennial story. Update this text to reflect the unique content of the story page.",
  keywords: [
    "Stanford Engineering",
    "Centennial Story",
    "Placeholder Metadata",
    "Engineering Legacy",
  ],
  openGraph: {
    title: "Placeholder Story Title | 100 Years of Stanford Engineering",
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
    title: "Placeholder Story Title | 100 Years of Stanford Engineering",
    description:
      "This is a placeholder Twitter description for a Centennial story. Update this for improved visibility and clarity on social platforms.",
    images: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/placeholder-image.jpg",
    ],
  },
};

const exploreStoriesData = [
  {
    heading: "The foundation of a new era in engineering",
    chapter: "Decade 2",
    href: "/stories/the-foundation-of-a-new-era-in-engineering",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg",
  },
  {
    heading: "The Terman Era",
    chapter: "Decade 3",
    href: "/stories/preparing-roads-culture-may-ride-comfort",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1744766098/hewlett-packard_dedication_i3tnua.jpg",
  },
  {
    heading: "A period of transformation",
    chapter: "Decade 4",
    href: "/stories/a-period-of-transformation",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/PC0141_b12_Dish_0088_EWS_emptkd.jpg",
  },
];

const footnotesList = [
  {
    number: 1,
    id: "footnotes1",
    text: "Footnote 1",
  },
  {
    number: 2,
    id: "footnotes2",
    text: "Footnotes 2",
  },
];

export default function page() {
  return (
    <>
      <Masthead logoColor="white-red" isOverlap isBgDark />
      <main id="main-content">
        <article>
          <StoryImpactBanner
            bgColor="stone-dark"
            chapter="Decade 1"
            heading="“Preparing roads over which culture may ride in comfort”"
            dek="1925 – 1934"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg"
            alt="A public demonstration of a 2.1 million volt test station lead by Harris J. Ryan standing to the right of a giant flame"
            caption="The Harris J. Ryan High-Voltage Laboratory debuted on September 17, 1926, with a public demonstration of its 2,100,000-volt test station containing six 350,000-volt transformer units, capable of producing the highest voltage ever obtained at commercial frequency. Erected at a cost of nearly $500,000, it was the largest university electrical lab in existence at the time. | Berton W. Crandall photographs, Box 24, Hoover Institution Library & Archives."
          />
          <div className="max-w-1500 w-full cc 2xl:p-0">
            <Text mb={6}>by Andrew Myers</Text>
            <Quote
              width="wide"
              teaser="Stanford University should be in a position to offer advanced training in engineering for men qualified to be leaders."
              source="— Charles David Marx, 1923"
            />
          </div>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mt-4 ms-mb-7">
            <FootnotesList footnotes={footnotesList} />
          </OneCol>
          <ExploreMore
            width="site"
            stories={exploreStoriesData}
            sectionHeading="Explore more decades"
            hasButton
          />
          <ContributeStoryBanner bgColor="red" hasLineArt />
        </article>
      </main>
    </>
  );
}
