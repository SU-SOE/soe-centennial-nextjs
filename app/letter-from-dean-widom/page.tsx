import { Container } from "@/components/Container";
import { OneCol, TwoCol } from "@/components/Layout";
import { Masthead } from "@/components/Masthead";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { StorySidebar } from "@/components/Story";
import { Heading, Text } from "@/components/Typography";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Letter from Dean Widom | 100 Years of Stanford Engineering",
  description:
    "Dean Widom reflects on a century of Stanford Engineering, honoring the visionary faculty who laid its foundation and celebrating the school's global impact today.",
  openGraph: {
    title: "Letter from Dean Widom",
    description:
      "Dean Widom shares insights on the legacy and future of Stanford Engineering, marking 100 years of excellence.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1740503452/Dean-Widom-cropped_s2ocbf.jpg",
        width: 1200,
        height: 630,
        alt: "Letter from Dean Widom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letter from Dean Widom",
    description:
      "Dean Widom reflects on 100 years of Stanford Engineering and its enduring legacy of excellence.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1740503452/Dean-Widom-cropped_s2ocbf.jpg",
    ],
  },
};

export default function LetterFromDeanPage() {
  return (
    <>
      <Masthead />
      <main id="main-content">
        <article>
          <Container width="site">
            <Heading as="h1" size="f6" mb={8} className="rs-mt-7 w-fit mx-auto">
              Letter from Dean Widom
            </Heading>
          </Container>
          <TwoCol isSidebar className="rs-mb-8">
            <OneCol>
              <Text variant="overview">
                A century ago, a visionary group of Stanford University faculty
                members recognized the need for an engineering school that would
                cultivate well-rounded engineers prepared for leadership in all
                aspects of life. Their foresight and determination laid the
                foundation for what would become one of the world’s leading
                institutions in engineering education and research. Today, the
                Stanford School of Engineering stands as a testament to their
                vision, while growing in size, scope, and impact far beyond
                anything those pioneers could have imagined.
              </Text>
              <Text>
                As the Stanford School of Engineering marks its one-hundred-year
                anniversary, we reflect on the remarkable journey that has
                brought us to where we are today, and we look ahead to the
                future with optimism and ambition.
              </Text>
              <Text>
                Over the past 100 years, Stanford Engineering has been at the
                forefront of countless breakthroughs that have reshaped
                industries, improved lives, and expanded the boundaries of human
                knowledge. From the development of the klystron in the early
                days, which revolutionized radar and communications, to advances
                in aerospace engineering, artificial intelligence,
                bioengineering, and so much more, our faculty, students, and
                alumni have consistently stretched the limits of what is
                possible.
              </Text>
              <Text>
                On this website, we’ll unveil ten stories—one for each
                decade—tracing the history of Stanford Engineering and
                highlighting some of the most significant moments and
                contributions that have defined the school’s trajectory. You’ll
                learn about groundbreaking research and transformative
                technologies, and you’ll discover individuals whose curiosity,
                creativity, and dedication have driven our progress. From the
                early days of electricity transmission, vacuum tubes, and
                semiconductors, to the era of machine learning and quantum
                computing, these stories offer a glimpse into the dynamic and
                evolving landscape of engineering at Stanford.
              </Text>
              <Text>
                Today’s Stanford School of Engineering is a vibrant,
                interdisciplinary community that spans a wide range of fields.
                Our faculty and students work across boundaries—not only within
                engineering but across the entire Stanford campus and beyond—to
                tackle some of the most pressing issues of our time, from
                climate change to global health, from sustainable energy to
                ethical technology. This spirit of collaboration and innovation
                is a direct legacy of the pioneering ethos that has guided us
                for the past century.
              </Text>
              <Text>
                As we celebrate our centennial, we also look forward to the
                challenges and opportunities that lie ahead. The next 100 years
                will undoubtedly bring new discoveries and innovations that we,
                the pioneers of our day, cannot yet imagine. But one thing
                remains certain: Stanford Engineering will continue to be a
                place where bold ideas are nurtured, where interdisciplinary
                collaboration thrives, and where the pursuit of knowledge,
                excellence, and impact is paramount.
              </Text>
              <Text>
                Thank you for joining us on a journey and celebration through
                one hundred years of engineering excellence.
              </Text>
              <Text>
                Jennifer Widom
                <br />
                Frederick Emmons Terman Dean
                <br />
                Stanford School of Engineering
              </Text>
            </OneCol>
            <StorySidebar className="order-first lg:order-none">
              <MediaCaptionImage
                rounded
                className="mb-0 max-w-500 lg:max-w-full"
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1740503452/Dean-Widom-cropped_s2ocbf.jpg"
                alt="Dean Jennifer Widom surrounded by a group of students, all wearing matching red Stanford Engineering t-shirts and waving to the camera"
              />
            </StorySidebar>
          </TwoCol>
        </article>
      </main>
    </>
  );
}
