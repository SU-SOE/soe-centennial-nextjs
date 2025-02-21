import { Container } from "@/components/Container";
import { OneCol, TwoCol } from "@/components/Layout";
import { Masthead } from "@/components/Masthead";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { StorySidebar } from "@/components/Story";
import { Heading, Text } from "@/components/Typography";
import React from "react";

export default function LetterFromDeanPage() {
  return (
    <div>
      <Masthead />
      <Container width="site">
        <Heading size="f6" mb={8} className="rs-mt-7 w-fit mx-auto">
          Letter from Dean Widom
        </Heading>
      </Container>
      <TwoCol isSidebar>
        <OneCol>
          <Text variant="overview">
            A century ago, a visionary group of Stanford University faculty
            members recognized the need for an engineering school that would
            cultivate well rounded engineers prepared for leadership in all
            aspects of life. Their foresight and determination laid the
            foundation for what would become one of the world’s leading
            institutions in engineering education and research. Today, the
            Stanford School of Engineering stands as a testament to their
            vision, while growing in size, scope, and impact far beyond anything
            those pioneers could have imagined.
          </Text>
          <Text>
            As the Stanford School of Engineering marks its one-hundred-year
            anniversary, we reflect on the remarkable journey that has brought
            us to where we are today and look ahead to the future with optimism
            and ambition.
          </Text>
          <Text>
            Over the past one hundred years, Stanford Engineering has been at
            the forefront of countless breakthroughs that have reshaped
            industries, improved lives, and expanded the boundaries of human
            knowledge. From the development of the klystron in the early days,
            which revolutionized radar and communications, to advances in
            aerospace engineering, artificial intelligence, bioengineering, and
            so much more, our faculty, students, and alumni have consistently
            stretched the limits of what is possible.{" "}
          </Text>
          <Text>
            Throughout this milestone year, you will encounter stories of
            groundbreaking research and transformative technologies. You will
            read about individuals whose curiosity, creativity, and dedication
            have driven our progress. From the early days of electricity
            transmission, vacuum tubes, and semiconductors to the era of machine
            learning and quantum computing, each chapter offers a glimpse into
            the dynamic and evolving landscape of engineering at Stanford.
          </Text>
          <Text>
            Today’s Stanford School of Engineering is a vibrant,
            interdisciplinary community that spans a wide range of fields. Our
            faculty and students work across boundaries—not only in engineering
            but across the entire Stanford campus and beyond—to tackle some of
            the most pressing issues of our time, from climate change to global
            health, from sustainable energy to ethical technology. This spirit
            of collaboration and innovation is a direct legacy of the pioneering
            ethos that has guided us for the past century.
          </Text>
          <Text>
            As we celebrate our centennial, we also look forward to the
            challenges and opportunities that lie ahead. The next one hundred
            years will undoubtedly bring new discoveries and innovations that
            we, the pioneers of our day, cannot yet imagine. But one thing
            remains certain: Stanford Engineering will continue to be a place
            where bold ideas are nurtured, where interdisciplinary collaboration
            thrives, and where the pursuit of knowledge, excellence, and impact
            is paramount. Thank you for joining us on a journey through one
            hundred years of engineering excellence.
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
            imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1740013381/dean-widom_e1jksa.png"
            caption="Dean Jennifer Widom"
            isCaptionInset
          />
        </StorySidebar>
      </TwoCol>
    </div>
  );
}
