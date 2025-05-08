import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { ExploreMore, StoryImpactBanner } from "@/components/Story";
import { Quote } from "@/components/Quote";
import { Text } from "@/components/Typography";
import { OneCol } from "@/components/Layout";
import { H2 } from "@/components/Typography/Header";
import { Link } from "@/components/Cta";

export const metadata: Metadata = {
  title: "A Century of Innovation: 100 Years of Stanford Engineering",
  description:
    "Look back at any given year in the Stanford School of Engineering’s history, and you’ll find a remarkable story of innovation – a new idea taking shape, a technology breaking through, a problem being reimagined. Look back over 100 of those years, and you see something bigger: a sweeping story of continuous progress, relentless curiosity, and global impact. As the school celebrates its 100th anniversary on May 15, it’s a moment to reflect on a century shaped by bold research, inspired teaching, and collaborations that have helped transform technology and society around the world.",
  keywords: [
    "Stanford Engineering",
    "100 Years of Innovation",
    "Stanford School of Engineering",
    "Engineering History",
    "Stanford 100th Anniversary",
    "Innovation in Technology",
    "Global Impact",
    "Engineering Education",
    "Stanford Research",
  ],
  openGraph: {
    title: "A Century of Innovation: 100 Years of Stanford Engineering",
    description:
      "Look back at any given year in the Stanford School of Engineering’s history, and you’ll find a remarkable story of innovation – a new idea taking shape, a technology breaking through, a problem being reimagined. Look back over 100 of those years, and you see something bigger: a sweeping story of continuous progress, relentless curiosity, and global impact.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
        alt: "A collage of Stanford engineering students and faculty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Century of Innovation: 100 Years of Stanford Engineering",
    description:
      "Look back at any given year in the Stanford School of Engineering’s history, and you’ll find a remarkable story of innovation – a new idea taking shape, a technology breaking through, a problem being reimagined. Look back over 100 of those years, and you see something bigger: a sweeping story of continuous progress, relentless curiosity, and global impact.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
    ],
  },
};

const exploreStoriesData = [
  {
    heading: "“Preparing roads over which culture may ride in comfort",
    chapter: "Decade 1",
    href: "/stories/preparing-roads-culture-may-ride-comfort",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg",
  },
  {
    heading: "The foundation of a new era in engineering",
    chapter: "Decade 2",
    href: "/stories/the-foundation-of-a-new-era-in-engineering",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg",
  },
  {
    heading: "The Terman Era",
    chapter: "Decade 3",
    href: "/stories/preparing-roads-culture-may-ride-comfort",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1744766098/hewlett-packard_dedication_i3tnua.jpg",
  },
];

export default function page() {
  return (
    <>
      <Masthead logoColor="white-red" isOverlap isBgDark />
      <main id="main-content">
        <article>
          <StoryImpactBanner
            isVertical
            isImageWide
            hasBgImage
            bgColor="stone-dark"
            superhead="A Century of Innovation"
            heading="100 Years of Stanford Engineering"
            body="The Stanford School of Engineering marks its 100th anniversary on May 15, kicking off a season of celebrations that will recount a world-changing century of innovation and inspire a promising look forward."
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg"
            alt="A collage of Stanford engineering students and faculty"
            caption="Images courtesy of James Gibbons, Andrew Brodhead, Special Collections & University Archives, Federic Osada, Stanford News Service."
          />
          <div className="max-w-1500 w-full cc 3xl:p-0 rs-mb-6">
            <Text mb={6}>By Andrew Myers and Julie Greicius</Text>
          </div>
          <OneCol>
            <Text variant="overview" className="cen-drop-cap">
              Look back at any given year in the Stanford School of
              Engineering’s history, and you’ll find a remarkable story of
              innovation – a new idea taking shape, a technology breaking
              through, a problem being reimagined. Look back over 100 of those
              years, and you see something bigger: a sweeping story of
              continuous progress, relentless curiosity, and global impact. As
              the school celebrates its 100th anniversary on May 15, it’s a
              moment to reflect on a century shaped by bold research, inspired
              teaching, and collaborations that have helped transform technology
              and society around the world.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol>
            <Text>
              “The Stanford School of Engineering is a truly unique and
              distinctive institution, unlike any other – not just within
              Stanford, but anywhere in the world,” said Jonathan Levin,
              president of Stanford University.
            </Text>
          </OneCol>
          <div className="max-w-1500 w-full cc 3xl:p-0 rs-mb-5">
            <Quote
              quoteColor="red"
              width="wide"
              body="It is not only a preeminent academic institution for engineering but also a global center of innovation. So many major technological advancements of the past century can be traced back to foundations built right here at the Stanford School of Engineering."
              source="— Jonathan Levin, president of Stanford University"
            />
          </div>
          <OneCol>
            <Text>
              Those foundations include work at Stanford Engineering in the
              1920s to advance the long-distance transmission of electricity and
              the science of flight. In the 1930s, electrical engineering
              professor Fred Terman encouraged William Hewlett and David Packard
              to start their namesake company – planting the seeds of Silicon
              Valley. Professors William Hansen and Edward Ginzton, along with
              the brothers Russell and Sigurd Varian, introduced the klystron
              tube, a breakthrough that proved critical to WWII-era radar and
              paved the way for satellite communications. In the decades that
              followed, Stanford Engineering led advances across chemical
              engineering, materials science, and robotics. After coining the
              term “artificial intelligence,” professor John McCarthy helped
              launch a new era in computing in the 1960s. By the 1990s,
              engineering graduate students were creating companies like Yahoo!,
              Google, and Nvidia, broadening the school’s entrepreneurial spirit
              that began in the ’30s. In the 2000s, bioengineering professor
              Karl Deisseroth pioneered optogenetics, revolutionizing the way we
              study the brain by enabling scientists to turn living brain cells
              on and off with light, and chemical engineering professor Zhenan
              Bao developed artificial skin sensitive enough to detect the
              weight of a butterfly.
            </Text>
            <Text>
              Today, Stanford Engineering faculty continue to push the
              boundaries of what’s possible – harnessing the power of AI to
              accelerate drug discovery, optimizing energy systems, and
              designing sustainable materials – continuing a century-long
              tradition of shaping the future. These few examples are only a
              glimpse of so many more remarkable stories from Stanford
              Engineering’s past, and the promise of its future.
            </Text>
            <Text>
              “For 100 years, Stanford Engineering has been a place where
              discovery leads to innovation, and where bold ideas become
              real-world impact,” said Jennifer Widom, the Frederick Emmons
              Terman Dean of the School of Engineering. “Our centennial is more
              than a celebration – it’s a reflection on the school’s pivotal
              role in the evolution of technology in the U.S. and around the
              world. This milestone also underscores the essential role
              universities play in advancing knowledge and transforming
              breakthroughs into solutions that shape society.”
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol>
            <H2 className="mt-0">Celebrating a Century</H2>
            <Text>
              The education of engineers has been a significant part of
              Stanford’s mission since the university opened in 1891. On May 15,
              1925, the Board of Trustees approved a plan to bring together the
              four engineering departments of the time – civil, mechanical,
              electrical, and mining & metallurgy – into a single school. On May
              15 this year, the Stanford School of Engineering will celebrate
              its 100th anniversary and commence a season of celebratory events.
              The first will be an afternoon party on the newly named Robert
              Rosenkranz Science and Engineering Quad, complete with a showcase
              of more than 50 projects highlighting the school’s extraordinary
              breadth of research and education. Later, two distinguished
              speaker events will feature discussions with faculty and alumni,
              including Nvidia CEO Jensen Huang in late May, and another to be
              announced for the fall.
            </Text>
            <Text>
              A new, centennial-dedicated website –{" "}
              <Link href="https://engineering100.stanford.edu/">
                engineering100.stanford.edu
              </Link>
              – provides an opportunity to dive into the school’s history with
              in-depth stories on each decade released every few weeks through
              the end of July, photos from the archives, videos, a timeline of
              notable events, and more. For alumni, faculty, students, and staff
              with their own stories of the school’s history, there’s a{" "}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfUppz2bgwGKJpEzZU7CohEwFr7m_drQbdLydU2TPo6cXPZeg/viewform">
                submission form to share memories
              </Link>
              .
            </Text>
            <H2>Past as Prologue</H2>
            <Text>
              The School of Engineering was founded with the aim to educate not
              just highly capable engineers – the university was already doing
              that – but leaders in engineering. Those leaders would need the
              core traditional skills of mathematics, physics, chemistry, and
              metallurgy, of course, but also the creativity, compassion, and
              humanity that only a strong liberal arts education could impart.
              Stanford University was uniquely positioned to meet that aim.
            </Text>
            <Text>
              “Stanford Engineering is unique as a world-class engineering
              school embedded in a world-class liberal arts university with all
              four professional schools on the same campus. There is nowhere
              else like it,” said Widom. “We collaborate across every corner of
              the university, with the schools of Medicine and Humanities &
              Sciences, with the Hoover Institution, with athletics, to name a
              few. That’s not something that you can find at our peer
              institutions.”
            </Text>
            <Text>
              As the school evolved and developed its reputation for shaping the
              landscape of modern technology, it continued to ensure students in
              any field were prepared to lead the way. That included pioneering
              approaches to education that ranged from the Honors Cooperative
              Program launched by Fred Terman in 1954 to help local
              professionals stay current with emerging technical knowledge to
              modern programs that educate learners anywhere in the world like
              the Stanford Engineering Center for Global and Online Education
              and Code in Place. On campus, through introductory computer
              science courses, design programs, makerspaces, and more, the
              School of Engineering touches the education of nearly every
              student at Stanford.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="D" />
          </div>
          <OneCol>
            <Text>
              “There are a lot of engineering majors at Stanford, but we also
              pride ourselves in bringing engineering to students across the
              entire campus,” said Widom.{" "}
            </Text>
            <div className="w-full max-w-[56rem] mx-auto rs-mb-5">
              <Quote
                quoteColor="red"
                teaser="Undergraduates in every major come and take our computer science classes. Nowadays, graduate students across so many fields are eager to learn about artificial intelligence from us. We see it as part of our mission to bring engineering education to the entire Stanford campus – and beyond."
                source="— Jennifer Widom, Dean of the School of Engineering"
              />
            </div>
            <Text>
              Across the decades, Stanford Engineering’s scope has grown to
              include everything from the challenges of bridge and dam building
              to space flight, human health, and planetary sustainability.
              Faculty and students have tackled complex problems across
              disciplines, advancing bioengineering, data science, robotics, and
              clean energy technologies. Today, their work continues to shape
              the future – designing resilient infrastructure, developing
              life-saving medical devices, and creating tools to mitigate
              climate change on a global scale.
            </Text>
            <Text>
              “Our past tells us a lot about what we’re capable of and inspires
              us to chart an even more ambitious and optimistic future,” said
              Widom. “Our community of faculty, staff, students, alumni, and
              supporters are the people who make that possible, and I’m
              incredibly proud to celebrate our centennial with all of them, and
              to thank them for being the collaborators, educators, visionaries,
              and risk-takers who make Stanford Engineering the extraordinary,
              one-of-a-kind place it is.”
            </Text>
          </OneCol>
          <ExploreMore
            width="site"
            stories={exploreStoriesData}
            sectionHeading="Explore more decades"
            hasButton
          />
          <ContributeStoryBanner hasLineArt bgColor="red" />
        </article>
      </main>
    </>
  );
}
