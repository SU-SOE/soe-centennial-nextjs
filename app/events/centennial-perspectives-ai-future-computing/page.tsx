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
              Agenda
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
                <strong>Condoleezza Rice</strong>, Tad & Dianne Taube Director
                of the Hoover Institution, Denning Professor of Global Business
                & the Economy
              </Text>
              <Text>
                The Stanford Emerging Technology Review helps America&apos;s
                public and private sectors better understand transformational
                technologies so the United States can seize opportunities,
                mitigate risks, and ensure its innovation ecosystem continues to
                thrive.
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
                Tracing early developments in multi-core processing to recent
                advances in data flow architectures highlights a growing need
                for greater hardware specialization to achieve improved
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
                <strong>Jensen Huang</strong> (&apos;MS 92), President and CEO
                of Nvidia
              </Text>
            </AgendaItem>
            <AgendaItem number="07" title="Centennial Presidential Remarks">
              <Text size={1}>
                <strong>John Hennessy</strong>, President Emeritus, James F. and
                Mary Lynn Gibbons Professor and Professor of Electrical
                Engineering and of Computer Science and{" "}
                <strong>Jensen Huang</strong> (&apos;MS 92), President and CEO
                of Nvidia
              </Text>
            </AgendaItem>
          </OneCol>
          <div className="flex w-full rs-mb-2 justify-end">
            <HorizontalLineart lineartType="D" />
          </div>
          <OneCol className="rs-mb-7">
            <AgendaItem number="08" title="Centennial Message">
              <Text size={1}>
                <strong>Morris Chang</strong> (PhD &apos;64), Founding Chairman
                of Taiwan Semiconductor Manufactuiring Company (TSMC)
              </Text>
            </AgendaItem>
            <AgendaItem number="09" title="Closing Remarks">
              <Text size={1}>
                <strong>Dean Jennifer Widom</strong>
              </Text>
            </AgendaItem>
          </OneCol>
          <AnimatedPosterCard
            className="rs-mb-7"
            superhead="1925 – 2025"
            heading="Explore the Centennial timeline"
            link="/timeline"
            buttonText="Explore the timeline"
          />
          <ContributeStoryBanner bgColor="white" hasLineArt />
        </article>
      </main>
    </>
  );
}
