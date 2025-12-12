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
import { storiesSource } from "@/utilities/storiesSource";

export const metadata: Metadata = {
  title:
    "Big ideas begin here: Sergey Brin at Stanford | 100 Years of Stanford Engineering",
  description:
    "Sergey Brin (MS ’95), co-founder of Google and Alphabet Inc., began his graduate studies in computer science at the Stanford School of Engineering in 1993. During his second year, he met Larry Page, and together they developed PageRank, an algorithm they later renamed Google. What began as a Stanford research project debuted as a company in 1998. On December 7, for the closing event of Stanford Engineering’s centennial year, Brin returned to campus for a conversation with Stanford President Jonathan Levin and Dean Jennifer Widom. At the event, Brin shared stories about his time as a student, reflections from the early days of Google, and insights on the future of education and AI. The original server that Brin and Page built to run their algorithm was displayed onstage. The event was hosted in collaboration with Stanford Engineering’s Entrepreneurial Thought Leaders lecture series.",
  keywords: [
    "Sergey Brin",
    "Stanford Engineering",
    "Google",
    "PageRank",
    "Larry Page",
    "Centennial Event",
    "Jonathan Levin",
    "Jennifer Widom",
    "Entrepreneurial Thought Leaders",
    "Education",
    "AI",
  ],
  openGraph: {
    title:
      "Big ideas begin here: Sergey Brin at Stanford | 100 Years of Stanford Engineering",
    description:
      "Sergey Brin (MS ’95), co-founder of Google and Alphabet Inc., began his graduate studies in computer science at the Stanford School of Engineering in 1993. During his second year, he met Larry Page, and together they developed PageRank, an algorithm they later renamed Google. What began as a Stanford research project debuted as a company in 1998. On December 7, for the closing event of Stanford Engineering’s centennial year, Brin returned to campus for a conversation with Stanford President Jonathan Levin and Dean Jennifer Widom. At the event, Brin shared stories about his time as a student, reflections from the early days of Google, and insights on the future of education and AI. The original server that Brin and Page built to run their algorithm was displayed onstage. The event was hosted in collaboration with Stanford Engineering’s Entrepreneurial Thought Leaders lecture series.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1765487972/SergeyBrin_12.7.2025_dfmtn5.jpg",
        alt: "Sergey Brin speaking at Stanford during the centennial event.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Big ideas begin here: Sergey Brin at Stanford | 100 Years of Stanford Engineering",
    description:
      "Sergey Brin, co-founder of Google and Alphabet Inc., returned to Stanford for the closing event of Stanford Engineering’s centennial year. Brin shared stories from his student days, early Google experiences, and insights on the future of education and AI, with the original server displayed onstage.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1765487972/SergeyBrin_12.7.2025_dfmtn5.jpg",
    ],
  },
};

const exploreStoriesData = [
  storiesSource.decade1,
  storiesSource.storyInnovation,
  storiesSource.deanWidomLetter,
];

export default function page() {
  return (
    <>
      <Masthead logoColor="white-red" bgColor="cardinal-red" />
      <main id="main-content" tabIndex={-1}>
        <article>
          <div className="cc bg-cardinal-red text-white">
            <H1 className="m-0 rs-pt-8 rs-pb-1 flex flex-col text-center">
              Big ideas begin here: Sergey Brin at Stanford
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1765487972/SergeyBrin_12.7.2025_dfmtn5.jpg"
            title="Big ideas begin here: Sergey Brin at Stanford"
            className="bg-cardinal-red"
            mediaUrl="https://www.youtube.com/embed/0nlNX94FcUE?si=MAIIbJHM5Edb0HhD"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              Sergey Brin (MS ’95), co-founder of Google and Alphabet Inc.,
              began his graduate studies in computer science at the Stanford
              School of Engineering in 1993. During his second year, he met
              Larry Page, and together they developed PageRank, an algorithm
              they later renamed Google. What began as a Stanford research
              project debuted as a company in 1998.
            </Text>
            <Text>
              On December 7, for the closing event of Stanford Engineering’s
              centennial year, Brin returned to campus for a conversation with
              Stanford President Jonathan Levin and Dean Jennifer Widom. At the
              event, Brin shared stories about his time as a student,
              reflections from the early days of Google, and insights on the
              future of education and AI. The original server that Brin and Page
              built to run their algorithm was displayed onstage. The event was
              hosted in collaboration with Stanford Engineering’s{" "}
              <a
                href="https://stvp.stanford.edu/series/etl/"
                className="transition-all ease-in-out duration-1000 underline text-stone-dark hocus:text-digital-red hocus:decoration-digital-red"
              >
                Entrepreneurial Thought Leaders
              </a>{" "}
              lecture series.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end rs-mb-1">
            <HorizontalLineart lineartType="C" />
          </div>
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
