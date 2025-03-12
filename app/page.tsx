import { Masthead } from "@/components/Masthead";
import { StoryPosterCard } from "@/components/Story";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { EventsSection } from "@/components/Event";
import { TeaserCard } from "@/components/TeaserCard/TeaserCard";
// import { EmbedMediaHero } from "@/components/EmbedVideoHero";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";
import { H1 } from "@/components/Typography/Header";
import { Metadata } from "next";
import { AnimatedHero } from "@/components/AnimatedHero";

export const metadata: Metadata = {
  title: "100 Years of Stanford Engineering",
  description:
    "On May 15, 1925, the Stanford University Board of Trustees approved the creation of the School of Engineering. Over the past 100 years, the school has grown beyond anything its founders could have imagined, fostering interdisciplinary collaboration, entrepreneurial spirit, and bold thinking.",
  openGraph: {
    title: "100 Years of Stanford Engineering",
    description:
      "Celebrating a century of innovation, leadership, and engineering excellence at Stanford University.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1740704737/centennial-yt-cover_dnwrxg.jpg",
        width: 1200,
        height: 630,
        alt: "100 Years of Stanford Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Years of Stanford Engineering",
    description:
      "Stanford Engineering celebrates 100 years of impact, innovation, and leadership in the field of engineering.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1740704737/centennial-yt-cover_dnwrxg.jpg",
    ],
  },
};

export default function MvpHome() {
  const events = [
    {
      heading: "Don’t miss out on upcoming centennial events!",
      superhead: "Stanford Engineering alumni",
      body: (
        <>
          Update your contact information in{" "}
          <a href="https://alumni.stanford.edu/help/myaccount/">My Account</a>{" "}
          so that you receive all future centennial communications. Please
          contact{" "}
          <a href="mailto:engineering-alumni@stanford.edu">
            engineering-alumni@stanford.edu
          </a>{" "}
          if you have any questions.
        </>
      ),
    },
  ];

  return (
    <>
      <Masthead logoColor="white-red" isOverlap />
      <main id="main-content">
        <H1 className="sr-only">100 years of Stanford Engineering</H1>
        <AnimatedHero />
        {/* <EmbedMediaHero
          autoplay
          className="bg-cardinal-red-dark"
          mediaUrl="https://youtu.be/2xD0_THX4Kg?si=_-iEUv3vmzWTykFP"
        /> */}
        <Container as="section" bgColor="blue" width="full" pt={8} pb={9}>
          <article className="cc lg:p-0 text-center mx-auto rs-pb-4 w-full max-w-800 rs-mb-6">
            <Heading font="dm-sans" size={2} weight="semibold">
              Stanford Engineering Centennial
            </Heading>
            <Text variant="overview">
              2025 marks the centennial of the Stanford School of Engineering—a
              moment to reflect on our remarkable past and look ahead toward an
              even more inspiring future.
            </Text>
            <Text variant="overview">
              Since Stanford University’s opening in 1891, the education of
              engineers has been a key part of the university’s mission. On May
              15, 1925, the Board of Trustees approved a proposal to bring
              together the four engineering departments at the time — civil,
              mechanical, electrical, and mining & metallurgy — into a single
              school.
            </Text>
            <Text variant="overview">
              Over the past century, Stanford Engineering has been at the
              forefront of transformative discovery. From the earliest days of
              our founding, our faculty, students, staff, and alumni have
              pioneered paths in fields as varied as aeronautics, semiconductor
              technology, artificial intelligence, biomedical devices, energy,
              and beyond. Our community’s bold ideas have changed the way we
              communicate, travel, and care for our planet. The profound impact
              of our work, not just in Silicon Valley but around the world, is a
              testament to the spirit of innovation and collaboration that runs
              through everything we do.
            </Text>
            <Text variant="overview" mb="none">
              Rooted from its earliest years in interdisciplinary collaboration,
              entrepreneurial spirit, and a culture of bold thinking, Stanford
              Engineering continues to prepare responsible engineers for the
              future, while shaping the future itself.
            </Text>
          </article>
          <StoryPosterCard
            heading="Letter from Dean Widom"
            link="/letter-from-dean-widom"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1740503452/Dean-Widom-cropped_s2ocbf.jpg"
            bgColor="white"
          />
        </Container>
        <TeaserCard
          superhead="Centennial history"
          heading="Stories of each decade released monthly, starting in April"
          body="Throughout the year, we’ll publish a story about each of the school’s ten decades. Come back in April to read more about Decade 1 and 2, and to scroll through a timeline of the school’s history."
          images={[
            "https://res.cloudinary.com/duv7bozlj/image/upload/v1740687162/SC0122_s1_b271_f05_6030-09_jvlm17.jpg",
            "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg",
            "https://res.cloudinary.com/duv7bozlj/image/upload/v1740687162/00007000_0009_onxi5b.jpg",
            "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986288/1939_-_Inventors_of_the_klystron_aipcnt_afibjh.jpg",
          ]}
        />
        <EventsSection
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/stangord-campus-1948_d7gus7_f6if28.jpg"
          events={events}
        />
        <ContributeStoryBanner bgColor="white" hasLineArt />
      </main>
    </>
  );
}
