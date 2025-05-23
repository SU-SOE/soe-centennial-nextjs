import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { StoryLineBanner } from "@/components/Story";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol } from "@/components/Layout";
import { H2 } from "@/components/Typography/Header";
import { AgendaItem } from "@/components/Event/AgendaItem";

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
            <Text align="center" mb="0" variant="overview">
              As part of Stanford Engineering’s centennial celebration,
              Centennial Perspectives is a speaker series that highlights
              innovative research and its impact on society.
            </Text>
          </OneCol>
          <OneCol>
            <H2>Agenda</H2>
            <AgendaItem number="01" title="Centennial Welcome">
              <Text size={1}>
                <em>Jennifer Widom</em>, Frederick Emmons Terman Dean of the
                School of Engineering, Fletcher Jones Professor of Computer
                Science and Professor of Electrical Engineering
              </Text>
            </AgendaItem>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol>
            <AgendaItem
              number="02"
              title="Stanford Emerging Technology Review 2025"
            >
              <Text size={1}>
                <em>Condoleezza Rice</em>, Tad & Dianne Taube Director of the
                Hoover Institution, Denning Professor of Global Business & the
                Economy
              </Text>
              <Text>
                The Stanford Emerging Technology Review helps America’s public
                and private sectors better understand transformational
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
                <em>Srabanti Chowdhury</em>, Associate Professor of Electrical
                Engineering
              </Text>
              <Text>
                A survey of innovation in chip design and manufacturing at
                Stanford demonstrates key steps in the evolution of hardware for
                the future.
              </Text>
            </AgendaItem>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <ContributeStoryBanner bgColor="red" hasLineArt />
        </article>
      </main>
    </>
  );
}
