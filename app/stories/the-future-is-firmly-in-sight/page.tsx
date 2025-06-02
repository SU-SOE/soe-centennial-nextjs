import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { Quote } from "@/components/Quote";
import {
  BgImageWrapper,
  ExploreMore,
  FootnotesList,
  StoryImpactBanner,
} from "@/components/Story";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol, TwoCol } from "@/components/Layout";
import { H2 } from "@/components/Typography/Header";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { AnimatedPosterCard } from "@/components/AnimatedHero";
import { storiesSource } from "@/utilities/storiesSource";

export const metadata: Metadata = {
  title: "The future is firmly in sight | 100 Years of Stanford Engineering",
  description:
    "The eighth decade of Stanford Engineering opened amid a global revolution in communication technology and with a new century on the horizon. The ten years ahead would see groundbreaking research, expanding and evolving departments, and growing interest in Stanford Engineering’s signature leadership in entrepreneurship, innovation in engineering education, and broadening interdisciplinary research programs.",
  keywords: [
    "Stanford Engineering",
    "Future of Engineering",
    "Communication Technology",
    "Entrepreneurship",
    "Innovation",
    "Interdisciplinary Research",
  ],
  openGraph: {
    title: "The future is firmly in sight | 100 Years of Stanford Engineering",
    description:
      "The eighth decade of Stanford Engineering opened amid a global revolution in communication technology and with a new century on the horizon. The ten years ahead would see groundbreaking research, expanding and evolving departments, and growing interest in Stanford Engineering’s signature leadership in entrepreneurship, innovation in engineering education, and broadening interdisciplinary research programs.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748483048/110419-1941_mlzjyn.jpg", // Replace with actual image URL if needed
        alt: "A server encased in colorful toy building blocks, located in the Jen-Hsun Huang Engineering Center.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The future is firmly in sight | 100 Years of Stanford Engineering",
    description:
      "The eighth decade of Stanford Engineering opened amid a global revolution in communication technology and with a new century on the horizon. The ten years ahead would see groundbreaking research, expanding and evolving departments, and growing interest in Stanford Engineering’s signature leadership in entrepreneurship, innovation in engineering education, and broadening interdisciplinary research programs.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1748483048/110419-1941_mlzjyn.jpg", // Replace with actual image URL if needed
    ],
  },
};

const exploreStoriesData = [
  storiesSource.decade2,
  storiesSource.decade3,
  storiesSource.decade4,
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
            chapter="Decade 8"
            heading="The future is firmly in sight"
            dek="1995 – 2004"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483048/110419-1941_mlzjyn.jpg"
            alt="A server encased in colorful toy building blocks, located in the Jen-Hsun Huang Engineering Center."
            caption="The original server running the Google algorithm developed by engineering graduate students Larry Page and Sergey Brin, made up of ten 4-gigabyte disk drives, encased in toy building blocks, translucent plastic, and packing tape, 1996. This combined 40 GB of storage was considerably larger than what was required of most student projects at the time. It is now on display in the Jen-Hsun Huang Engineering Center. | Linda A. Cicero/Stanford News Service."
          />
          <div className="max-w-1500 w-full cc 2xl:p-0">
            <Text mb={6}>by Andrew Myers</Text>
            <Quote
              width="wide"
              teaser="A lot of the really interesting research is interdisciplinary. Having meeting places is important. . . . It’s a magical opportunity for things to happen."
              source="— Dean James Plummer, 1999"
            />
          </div>
          <TwoCol>
            <OneCol>
              <H2>1995 – 2004</H2>
              <Text variant="overview">
                The eighth decade of Stanford Engineering opened amid a global
                revolution in communication technology and with a new century on
                the horizon. The ten years ahead would see groundbreaking
                research, expanding and evolving departments, and growing
                interest in Stanford Engineering’s signature leadership in
                entrepreneurship, innovation in engineering education, and
                broadening interdisciplinary research programs.
              </Text>
              <Text>
                In 1995, five School of Engineering departments ranked number
                one in a peer survey compiled by the National Research Council
                in an exhaustive 740-page report. John Hennessy, then the chair
                of the top-ranked Department of Computer Science, noted that his
                field was “moving very fast,” making it easier for him to
                establish a stellar reputation for Stanford by staying at the
                forefront. Ronald Hanson, the chair of mechanical engineering,
                attributed his department’s success to its continued excellence
                in basic research.(1)
              </Text>
              <H2>The Stanford Technology Ventures Program</H2>
              <Text>
                That same year, in his final year as dean, James Gibbons
                established the Stanford Technology Ventures Program (STVP)
                within the Department of Management Science and Engineering.
                STVP created programs in all three areas of education, research,
                and outreach. One of its most popular courses is still the
                Entrepreneurial Thought Leaders lecture series, which has
                featured many Silicon Valley and global technology luminaries
                over the years.
              </Text>
              <Text>
                The objective of STVP, Gibbons recalled, was “to teach
                entrepreneurship . . . to help people understand what
                entrepreneurship was. Not trying to make them entrepreneurs.”(2)
                By connecting students with companies and the people who founded
                them, the program could “help people to understand technology
                ventures, how they fail, what kind of personalities it takes,
                what we know about success and failure.”(3) STVP would lead
                significant research studies exploring, for example, the impact
                of different funding sources on start-ups in the medical devices
                industry, the effects of public policy on entrepreneurship in
                China, and the relative successes of firms in the solar
                industry.(4)
              </Text>
            </OneCol>
            <MediaCaptionImage
              rounded
              aspectRatio="5x8"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483024/hewlett_center_exterior_adonpc.jpg"
              alt="A large white building stands prominently beside another structure as two men walk by."
              caption="Exterior view of the William Hewlett Teaching Center, 2000. It was one of four new buildings constructed as part of the Near West Campus project, which opened in 1999. Funded primarily by William Hewlett and David Packard, it houses educational resources, including auditoriums and lecture halls. | Linda A. Cicero/Stanford News Service."
            />
          </TwoCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol>
            <H2>Stanford Center for Professional Development</H2>
            <Text>
              Led by executive director Andy DiPaolo, the Stanford Center for
              Professional Development (SCPD) began operations in 1995,
              incorporating the Stanford Instructional Television Network
              (SITN). SCPD offered professional and executive education through
              noncredit courses, workshops, and conferences using a variety of
              cutting-edge instructional technologies delivered to thousands of
              working engineers at companies like IBM and Microsoft.(5)
            </Text>
            <Text>
              In 1998, through SCPD, the School of Engineering was the first
              Stanford school to offer a completely online advanced degree
              program in electrical engineering.(6) The program was targeted to
              working professionals—engineers, computer scientists, and
              technology Managers—and offered thirty courses in electrical
              engineering, all online. Professors could deliver lectures,
              distribute handouts, notes, and exams, and interact with students,
              all electronically. “In the industrial age we went to school. In
              the communication age the school comes to us,” said DiPaolo.(7) In
              2024, SCPD was renamed the Stanford Engineering Center for Global
              and Online Education.
            </Text>
          </OneCol>
          <AnimatedPosterCard
            isFullWidth
            className="rs-mb-9"
            superhead="1925 – 2025"
            heading="Explore the Centennial timeline"
            href="/timeline"
            buttonText="Explore the timeline"
          />
          <TwoCol>
            <MediaCaptionImage
              rounded
              aspectRatio="5x8"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483024/oussama_khatib_iq2hxu.jpg"
              alt="A man poses in a chair sitting next to a robot dusting the table, while three individuals work in the background."
              caption="Oussama Khatib, then associate professor of computer science, demonstrating his human-like robots, 1996. Dubbed Romeo and Juliet, the robots were designed and built to provide humans with semiautonomous assistance. They could perform tasks such as washing windows, picking books off shelves, erasing whiteboards, and dusting furniture. | Linda A. Cicero/Stanford News Service."
            />
            <OneCol>
              <H2>Humanizing robotics</H2>
              <Text>
                Work in robotics pushed into new frontiers in 1995 as Oussama
                Khatib, a professor of computer science and one of the world’s
                foremost authorities on robotics, developed a semiautonomous
                robotic assistant capable of everyday human tasks in so-called
                unstructured environments. “The development of robots for
                unstructured environments is much more challenging because these
                robots cannot simply be pre-programmed,” Khatib said. Khatib
                built not one but two human-like robots, dubbed Romeo and Juliet
                and fitted with sensor-based reactions. They could “dance” with
                a human counterpart, erase a chalkboard, clear a table, or lift
                heavy objects.(8)
              </Text>
              <H2>A fateful friendship</H2>
              <Text>
                In the summer of 1995, graduate student Sergey Brin was leading
                a campus tour for prospective graduate students when he met
                Larry Page. When he started classes a few months later, Page
                began studying the burgeoning World Wide Web; its network of
                nodes and connecting links intrigued his mathematical mind.
              </Text>
            </OneCol>
          </TwoCol>
          <MediaCaptionImage
            isParallax
            rounded
            aspectRatio="5x8"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483023/vv883ww4376_bxyin5.jpg"
            alt="A group of men standing together posing for a photo."
            caption="Stanford President John Hennessy, alumni Sergey Brin and Larry Page, and computer science Professor Donald Knuth at a gathering on campus to celebrate Google, April 2005. | School of Engineering."
          />
          <OneCol>
            <Text>
              Soon, Page and Brin were collaborating on an algorithm, known as
              Back-Rub, that could trace the Web’s network of links backward to
              learn which pages were linking to any given page on the Web. The
              number and quality of those “backlinks” might indicate the value
              of the page they were all linking to. That seemingly simple
              hypothesis laid the foundation for the company Google. Page and
              Brin’s original algorithm was expanded and refined to become
              PageRank, named for both its function and for Page himself.
            </Text>
            <Text>
              “We had a querying tool,” Page said, that “gave you a good overall
              ranking of pages” in the query results. Google was first released
              on the Stanford website in August 1996, just a year after Page and
              Brin met.(9)
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol>
            <H2>The new Gates building</H2>
            <Text>
              In 1996, Microsoft Corporation Chairman Bill Gates dedicated the
              new William Gates Computer Science Building, for which he
              personally donated $6 million, a gift supplemented by
              Hewlett-Packard, NEC, and J. Erik Jonsson of Texas Instruments.
              The 150,000-square-foot building included space for historical
              exhibits showcasing Stanford’s role in the history of computing,
              and became home to 550 faculty, staff, and students, uniting the
              Department of Computer Science, which had been scattered across
              eight different sites on campus.(10)
            </Text>
            <Text>
              “It’s fantastic to see this building and how it’s come together so
              well,” Gates said at the dedication ceremony. It would be “up to
              the students” to determine what is done with the technology they
              could develop there, he added.(11)
            </Text>
          </OneCol>
          <BgImageWrapper>
            <MediaCaptionImage
              isParallax
              rounded
              aspectRatio="5x8"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483023/vv883ww4376_bxyin5.jpg"
              alt="A group of men standing together posing for a photo."
              caption="Stanford President John Hennessy, alumni Sergey Brin and Larry Page, and computer science Professor Donald Knuth at a gathering on campus to celebrate Google, April 2005. | School of Engineering."
            />
            <TwoCol>
              <MediaCaptionImage
                isParallax
                rounded
                aspectRatio="5x8"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483023/vv883ww4376_bxyin5.jpg"
                alt="A group of men standing together posing for a photo."
                caption="Stanford President John Hennessy, alumni Sergey Brin and Larry Page, and computer science Professor Donald Knuth at a gathering on campus to celebrate Google, April 2005. | School of Engineering."
              />
              <MediaCaptionImage
                isParallax
                rounded
                aspectRatio="5x8"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483023/vv883ww4376_bxyin5.jpg"
                alt="A group of men standing together posing for a photo."
                caption="Stanford President John Hennessy, alumni Sergey Brin and Larry Page, and computer science Professor Donald Knuth at a gathering on campus to celebrate Google, April 2005. | School of Engineering."
              />
            </TwoCol>
          </BgImageWrapper>
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
