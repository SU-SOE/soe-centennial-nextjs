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
  title: "Video Story Placeholder | 100 Years of Stanford Engineering",
  description: "",
  keywords: ["Stanford Engineering"],
  openGraph: {
    title: "Video Story Placeholder | 100 Years of Stanford Engineering",
    description: "",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1760551199/Stanford_-SJSU_Bests_nrnr23.jpg",
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Story Placeholder | 100 Years of Stanford Engineering",
    description: "",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1760551199/Stanford_-SJSU_Bests_nrnr23.jpg",
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
              Video Story Placeholder
            </H1>
          </div>
          <EmbedMediaHero
            autoplay
            isPreview
            previewImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1760551199/Stanford_-SJSU_Bests_nrnr23.jpg"
            title="Video Story Placeholder"
            className="bg-cardinal-red"
            mediaUrl="https://www.youtube.com/embed/rT7vaa4owk8?si=lcFgf9HL_KOasg8T"
          />
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, cum
              potenti nascetur sagittis risus class dictum, fames condimentum
              proin hac pellentesque fringilla. Aliquet arcu pellentesque
              phasellus mi iaculis neque imperdiet, venenatis fames scelerisque
              montes purus suscipit aenean, platea magna felis etiam placerat
              erat. Parturient ultrices interdum curae mi sociosqu class sem
              phasellus, tristique pharetra accumsan facilisis rhoncus sodales.
            </Text>
            <Text>
              Class aptent tristique laoreet netus consequat pharetra hendrerit
              velit porttitor, venenatis ut ante euismod orci est urna per odio
              ultricies, cubilia enim congue natoque quis pellentesque penatibus
              potenti. Est sollicitudin diam sed vel ante enim congue rhoncus,
              euismod dui consequat metus luctus senectus et justo, nibh
              lobortis neque mus eu potenti erat. Tempus torquent suscipit
              mauris nibh et etiam lacus magnis, nec nostra sollicitudin diam
              convallis montes vestibulum aliquet tincidunt, risus cum himenaeos
              at augue porta nisl.
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
