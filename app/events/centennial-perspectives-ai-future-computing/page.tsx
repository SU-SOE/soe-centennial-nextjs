import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { StoryLineBanner } from "@/components/Story";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol } from "@/components/Layout";
import { AgendaItem } from "@/components/Event/AgendaItem";
import { AnimatedPosterCard } from "@/components/AnimatedHero";

export const metadata: Metadata = {
  title:
    "Past Event: Centennial Perspectives | 100 Years of Stanford Engineering",
  description:
    "The Centennial Perspectives series concluded as part of Stanford Engineering’s centennial celebration, highlighting innovative research and its impact on society.",
  keywords: [
    "Stanford Engineering",
    "Centennial Story",
    "AI and Future of Computing",
    "Engineering Legacy",
    "Innovative Research",
    "Speaker Series",
    "Event Ended",
  ],
  openGraph: {
    title:
      "Past Event: Centennial Perspectives | 100 Years of Stanford Engineering",
    description:
      "The Centennial Perspectives series concluded as part of Stanford Engineering’s centennial celebration, highlighting innovative research and its impact on society.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751409856/PerspectivesEvent_5.29.25_jybidv.jpg",
        alt: "A woman speaks at a podium during an event titled 'Centennial Perspectives: AI and the Future of Computing' at Stanford Engineering. A red banner with 'The Persistence' is visible in the background.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Past Event: Centennial Perspectives | 100 Years of Stanford Engineering",
    description:
      "The Centennial Perspectives series concluded as part of Stanford Engineering’s centennial celebration, highlighting innovative research and its impact on society.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1751409856/PerspectivesEvent_5.29.25_jybidv.jpg",
    ],
  },
};

export default function page() {
  return (
    <>
      <Masthead logoColor="white-red" isOverlap isBgDark />
      <main id="main-content">
        <article>
          <StoryLineBanner
            hasLineArt
            lineVariant="a"
            bgColor="red"
            superhead="May 29, 2025"
            heading="Centennial Perspectives"
            dek={
              <>
                AI and the Future <br />
                of Computing
              </>
            }
          />
          <OneCol className="rs-mt-5">
            <Text align="center" variant="overview">
              As part of Stanford Engineering’s centennial celebration,
              Centennial Perspectives is a speaker series that highlights
              innovative research and its impact on society.
            </Text>
          </OneCol>
          <OneCol>
            <Text as="h2" size="f5" className="mt-18">
              Program
            </Text>
            <AgendaItem number="01" title="Centennial Welcome">
              <Text size={1}>
                <strong>Jennifer Widom</strong>, Frederick Emmons Terman Dean of
                the School of Engineering, Fletcher Jones Professor of Computer
                Science and Professor of Electrical Engineering
              </Text>
            </AgendaItem>
          </OneCol>
          <div className="flex w-full rs-mb-2 justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol>
            <AgendaItem
              number="02"
              title="Stanford Emerging Technology Review 2025"
            >
              <Text size={1}>
                <strong>Sec. Condoleezza Rice</strong>, Tad & Dianne Taube
                Director of the Hoover Institution, Denning Professor of Global
                Business & the Economy
              </Text>
              <Text>
                The Stanford Emerging Technology Review helps decision makers in
                America&apos;s public and private sectors better understand
                transformational technologies so the United States can seize
                opportunities, mitigate risks, and ensure its innovation
                ecosystem continues to thrive.
              </Text>
            </AgendaItem>
            <AgendaItem
              number="03"
              title="Cool Tech for Hot Chips: Turning research into sustainable solutions for AI"
            >
              <Text size={1}>
                <strong>Srabanti Chowdhury</strong>, Associate Professor of
                Electrical Engineering
              </Text>
              <Text>
                A survey of innovation in chip design and manufacturing at
                Stanford demonstrates key steps in the evolution of hardware for
                the future.
              </Text>
            </AgendaItem>
          </OneCol>
          <div className="flex w-full rs-mb-2 justify-end">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol>
            <AgendaItem
              number="04"
              title="Breaking Computer Performance Barriers"
            >
              <Text size={1}>
                <strong>Kunle Olukotun</strong>, Cadence Design Systems
                Professor, Professor of Electrical Engineering and of Computer
                Science
              </Text>
              <Text>
                Tracing his early work on multi-core processing and his more
                current work on data flow, leading to the conclusion that more
                specialization is needed to continue improving performance and
                efficiency.
              </Text>
            </AgendaItem>
            <AgendaItem
              number="05"
              title="Transformative Trends: Reflective, Verifiable, and Inference-Time Learning Generative AI"
            >
              <Text size={1}>
                <strong>Carlos Guestrin</strong>, Fortinet Founders Professor
                and Professor of Computer Science
              </Text>
              <Text>
                Three new approaches from the frontier of emerging artificial
                intelligence research promise to make models more useful and
                reliable, and point toward a new generation of tools that can
                reason, adapt, and earn our trust.
              </Text>
            </AgendaItem>
          </OneCol>
          <div className="flex w-full rs-mb-2 justify-start">
            <HorizontalLineart lineartType="D" />
          </div>
          <OneCol>
            <AgendaItem number="06" title="Centennial Fireside chat">
              <Text size={1}>
                <strong>John Hennessy</strong>, President Emeritus, James F. and
                Mary Lynn Gibbons Professor and Professor of Electrical
                Engineering and of Computer Science and{" "}
                <strong>Jensen Huang</strong> (MS &apos;92), President and CEO
                of Nvidia
              </Text>
            </AgendaItem>
            <AgendaItem number="07" title="Centennial Video Message">
              <Text size={1}>
                <strong>Morris Chang</strong> (PhD &apos;64), Founding Chairman
                of Taiwan Semiconductor Manufactuiring Company (TSMC)
              </Text>
            </AgendaItem>
          </OneCol>
          <div className="flex w-full rs-mb-2 justify-end">
            <HorizontalLineart lineartType="D" />
          </div>
          <OneCol className="rs-mb-7">
            <AgendaItem number="08" title="Closing Remarks">
              <Text size={1}>
                <strong>Jonathan Levin</strong>, President and Bing Presidential
                Professor <br />
                <strong>Dean Jennifer Widom</strong>
              </Text>
            </AgendaItem>
          </OneCol>
          <AnimatedPosterCard
            className="rs-mb-7"
            superhead="1925 – 2025"
            heading="Explore the Centennial timeline"
            href="/timeline"
            buttonText="Explore the timeline"
          />
          <ContributeStoryBanner bgColor="white" hasLineArt />
        </article>
      </main>
    </>
  );
}
