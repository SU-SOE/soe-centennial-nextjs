import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { Quote } from "@/components/Quote";
import {
  BgImageWrapper,
  ExploreMore,
  Footnotes,
  FootnotesList,
  ScrollyBubble,
  Scrollytelling,
  StoryImpactBanner,
  StorySidebar,
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
import { Container } from "@/components/Container";

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
  storiesSource.decade1,
  storiesSource.storyInnovation,
  storiesSource.decade6,
];

const footnotesList = [
  {
    number: 1,
    id: "footnote1",
    text: "Scott Van Winkle, “5 Engineering Departments Ranked No. 1,” Stanford Daily, September 27, 1995, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1995/09/27?page=1&section=MODSMD_ARTICLE1#article",
  },
  {
    number: 2,
    id: "footnote2",
    text: "Stanford Historical Society Oral History Program, James F. Gibbons: A Series of Oral History Interviews, 128.",
    sourceLink: "https://stacks.stanford.edu/file/xd819md3089/xd819md3089.pdf",
  },
  {
    number: 3,
    id: "footnote3",
    text: "Ibid., 130.",
    sourceLink: "",
  },
  {
    number: 4,
    id: "footnote4",
    text: "Tyler Brown, “Campus Encourages Tech Ventures,” Stanford Daily, November 2, 2009.",
    sourceLink:
      "https://archives.stanforddaily.com/2009/11/02?page=3&section=MODSMD_ARTICLE9#article",
  },
  {
    number: 5,
    id: "footnote5",
    text: "Jennifer Rosen, “Continuing Education for Technical Pros: New Center Gives Job Training to Engineers,” Stanford Daily, February 22, 1995, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1995/02/22?page=1&section=MODSMD_ARTICLE4#article",
  },
  {
    number: 6,
    id: "footnote6",
    text: "Stanford Engineering Center for Global and Online Education, “Our History.”",
    sourceLink: "https://cgoe.stanford.edu/our-history",
  },
  {
    number: 7,
    id: "footnote7",
    text: "Jazmine Wilson, “EE Master’s Goes Online,” Stanford Weekly, July 30, 1998, 5.",
    sourceLink:
      "https://archives.stanforddaily.com/1998/07/30?page=5&section=MODSMD_ARTICLE5#article",
  },
  {
    number: 8,
    id: "footnote8",
    text: "Jimmy Boegle, “O Robot, Wherefore Art Thou, Robot? Robotic Romeo and Juliet Aid People in Everyday Tasks,” Stanford Daily, February 15, 1996, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1996/02/15?page=1&section=MODSMD_ARTICLE7#article",
  },
  {
    number: 9,
    id: "footnote9",
    text: "John Battelle, “The Birth of Google,” WIRED 13, no. 8 (August 2005).",
    sourceLink:
      "https://web.archive.org/web/20240123171749/https://www.wired.com/2005/08/battelle/?pg=1&topic=battelle&topic_set=",
  },
  {
    number: 10,
    id: "footnote10",
    text: "Stanford Engineering Computer Science, “Gates Computer Science Building.”",
    sourceLink:
      "https://www.cs.stanford.edu/about/gates-computer-science-building",
  },
  {
    number: 11,
    id: "footnote11",
    text: "Elizabeth Goldman, “Opening a New Window,” Stanford Daily, January 31, 1996, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1996/01/31?page=1&section=MODSMD_ARTICLE1#article",
  },
  {
    number: 12,
    id: "footnote12",
    text: "Will Oremus, “Clark Withholds $60 Million,” Stanford Daily, September 25, 2001, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/2001/09/25?page=1&section=MODSMD_ARTICLE4#article",
  },
  {
    number: 13,
    id: "footnote13",
    text: "Heather Knight, “Engineering Dean Moves Up to New Position,” Stanford Daily, March 9, 1995, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1995/03/09?page=1&section=MODSMD_ARTICLE4#article",
  },
  {
    number: 14,
    id: "footnote14",
    text: "John L. Hennessy, John L. Hennessy: An Oral History Conducted by David M. Kennedy, July 18 and November 4, 2019, Stanford Historical Society Oral History Program (Stanford University, 2023), 71.",
    sourceLink: "https://stacks.stanford.edu/file/vw955dg9573/vw955dg9573.pdf",
  },
  {
    number: 15,
    id: "footnote15",
    text: "Ravi Chandrasekaran, “Plummer Steps in as New Dean of Engineering,” Stanford Weekly, vol. 216A, no. 3 (July 15, 1999), 1, 4.",
    sourceLink:
      "https://archives.stanforddaily.com/1999/07/15?page=4&section=MODSMD_ARTICLE3#article",
  },
  {
    number: 16,
    id: "footnote16",
    text: "Ginny McCormick, “New Quad on the Block,” Stanford magazine (November/December 1999).",
    sourceLink: "https://stanfordmag.org/contents/new-quad-on-the-block",
  },
  {
    number: 17,
    id: "footnote17",
    text: "Sarah Mearon, “Cruisin’ through the SEQ,” Stanford Daily, October 28, 1999, 6.",
    sourceLink:
      "https://archives.stanforddaily.com/1999/10/28?page=6&section=MODSMD_ARTICLE17#article",
  },
  {
    number: 18,
    id: "footnote18",
    text: "Jeffrey Koseff, email to Ryan G. Johnson, June 18, 2024.",
    sourceLink: "",
  },
  {
    number: 19,
    id: "footnote19",
    text: "Irene Noguchi, “IE’s Paté-Cornell Will Be First Woman with Endowed Eng[ineering] Chair,” Stanford Daily, April 9, 1999; Heather Wax, “Industrious Paté-Cornell Engineers Groundbreaking Career,” Stanford Daily, November 5, 1999, 7.",
    sourceLink:
      "https://archives.stanforddaily.com/1999/04/09?page=1&section=MODSMD_ARTICLE6#article",
  },
  {
    number: 20,
    id: "footnote20",
    text: "Michael R. Fainelli, “Management Science Dept. Takes Off,” Stanford Daily, September 26, 2000, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/2000/09/26?page=1&section=MODSMD_ARTICLE3#article",
  },
  {
    number: 21,
    id: "footnote21",
    text: "Jeff Eger, “New Department Mixes Biology and Engineering,” Stanford Weekly, July 11, 2002, 3.",
    sourceLink:
      "https://archives.stanforddaily.com/2002/07/11?page=3&section=MODSMD_ARTICLE7#article",
  },
  {
    number: 22,
    id: "footnote22",
    text: "Tom Abate, “ICME Celebrates Its First Decade of Using ‘Big Math’ to Tackle Big Questions,” Stanford Engineering, September 3, 2014.",
    sourceLink:
      "https://engineering.stanford.edu/news/icme-celebrates-its-first-decade-using-big-math-tackle-big-questions",
  },
  {
    number: 23,
    id: "footnote23",
    text: "Ken Auletta, Googled: The End of the World as We Know It (Penguin, 2009).",
    sourceLink: "",
  },
  {
    number: 24,
    id: "footnote24",
    text: "Ibid.",
    sourceLink: "",
  },
  {
    number: 25,
    id: "footnote25",
    text: "Larry Page, in “The Best Advice I Ever Got,” Fortune, 2008.",
    sourceLink: "",
  },
  {
    number: 26,
    id: "footnote26",
    text: "Auletta, Googled.",
    sourceLink: "",
  },
  {
    number: 27,
    id: "footnote27",
    text: "National Science Foundation, The Stanford Integrated Digital Library Project, Award Abstract#9411306.",
    sourceLink: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=9411306",
  },
  {
    number: 28,
    id: "footnote28",
    text: "John Battelle, The Search (Portfolio, 2005).",
    sourceLink: "",
  },
  {
    number: 29,
    id: "footnote29",
    text: "Francis Everitt and Bradford Parkinson, The Gravity Probe B Experiment: “Testing Einstein’s Universe,” Post Flight Analysis—Final Report, March 2007, 3; and Michael Miller, “Gravity Probe Launches into Orbit,” Stanford Daily, April 21, 2004, 1.",
    sourceLink:
      "https://einstein.stanford.edu/content/final_report/GPB_FinalPFAR-091907-scrn.pdf",
  },
  {
    number: 30,
    id: "footnote30",
    text: "Matthew Gregory, “Stanford Researchers Give $100M Subcontract to Build Spacecraft,” Stanford Daily, October 15, 1993, 10.",
    sourceLink:
      "https://archives.stanforddaily.com/1993/10/15?page=10&section=MODSMD_ARTICLE34#article",
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
            hasBgImage
            bgColor="stone-dark"
            chapter="Decade 8"
            heading="The future is firmly in sight"
            dek="1995 – 2004"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483048/110419-1941_mlzjyn.jpg"
            alt="A server encased in colorful toy building blocks, located in the Jen-Hsun Huang Engineering Center."
            caption="The original server running the Google algorithm developed by engineering graduate students Larry Page and Sergey Brin, made up of ten 4-gigabyte disk drives, encased in toy building blocks, translucent plastic, and packing tape, 1996. This combined 40 GB of storage was considerably larger than what was required of most student projects at the time. It is now on display in the Jen-Hsun Huang Engineering Center. | Linda A. Cicero/Stanford News Service."
          />
          <div className="max-w-1500 w-full cc 2xl:p-0 rs-mb-6">
            <Text mb={6}>by Andrew Myers</Text>
            <Quote
              quoteColor="red"
              teaser="A lot of the really interesting research is interdisciplinary. Having meeting places is important. . . . It’s a magical opportunity for things to happen."
              source="— Dean James Plummer, 1999"
            />
          </div>
          <TwoCol>
            <OneCol>
              <H2 className="mt-0">1995 – 2004</H2>
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
                in basic research.
                <Footnotes footnoteRefs={[{ id: "footnote1", number: 1 }]} />
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
                entrepreneurship was. Not trying to make them entrepreneurs.”
                <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} />
                By connecting students with companies and the people who founded
                them, the program could “help people to understand technology
                ventures, how they fail, what kind of personalities it takes,
                what we know about success and failure.”
                <Footnotes
                  footnoteRefs={[{ id: "footnote3", number: 3 }]}
                />{" "}
                STVP would lead significant research studies exploring, for
                example, the impact of different funding sources on start-ups in
                the medical devices industry, the effects of public policy on
                entrepreneurship in China, and the relative successes of firms
                in the solar industry.
                <Footnotes footnoteRefs={[{ id: "footnote4", number: 4 }]} />
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
          <div className="flex w-full justify-end rs-mb-3">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mb-5">
            <H2 className="mt-0">
              Stanford Center for Professional Development
            </H2>
            <Text>
              Led by executive director Andy DiPaolo, the Stanford Center for
              Professional Development (SCPD) began operations in 1995,
              incorporating the Stanford Instructional Television Network
              (SITN). SCPD offered professional and executive education through
              noncredit courses, workshops, and conferences using a variety of
              cutting-edge instructional technologies delivered to thousands of
              working engineers at companies like IBM and Microsoft.
              <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} />
            </Text>
            <Text>
              In 1998, through SCPD, the School of Engineering was the first
              Stanford school to offer a completely online advanced degree
              program in electrical engineering.
              <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} /> The
              program was targeted to working professionals—engineers, computer
              scientists, and technology Managers—and offered thirty courses in
              electrical engineering, all online. Professors could deliver
              lectures, distribute handouts, notes, and exams, and interact with
              students, all electronically. “In the industrial age we went to
              school. In the communication age the school comes to us,” said
              DiPaolo.
              <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} /> In
              2024, SCPD was renamed the Stanford Engineering Center for Global
              and Online Education.
            </Text>
          </OneCol>
          <AnimatedPosterCard
            isFullWidth
            className="rs-mb-6"
            superhead="1925 – 2025"
            heading="Explore the Centennial timeline"
            href="/timeline"
            buttonText="Explore the timeline"
          />
          <TwoCol className="rs-mb-8">
            <MediaCaptionImage
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483024/oussama_khatib_iq2hxu.jpg"
              alt="A man poses in a chair sitting next to a robot dusting the table, while three individuals work in the background."
              caption="Oussama Khatib, then associate professor of computer science, demonstrating his human-like robots, 1996. Dubbed Romeo and Juliet, the robots were designed and built to provide humans with semiautonomous assistance. They could perform tasks such as washing windows, picking books off shelves, erasing whiteboards, and dusting furniture. | Linda A. Cicero/Stanford News Service."
            />
            <OneCol>
              <H2 className="mt-0">Humanizing robotics</H2>
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
                heavy objects.
                <Footnotes footnoteRefs={[{ id: "footnote8", number: 8 }]} />
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
            aspectRatio="8x5"
            className="cc mx-auto max-w-1500 rs-mb-5"
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
              Brin met.
              <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-start rs-mb-3">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol className="rs-mb-5">
            <H2 className="mt-0">The new Gates building</H2>
            <Text>
              In 1996, Microsoft Corporation Chairman Bill Gates dedicated the
              new William Gates Computer Science Building, for which he
              personally donated $6 million, a gift supplemented by
              Hewlett-Packard, NEC, and J. Erik Jonsson of Texas Instruments.
              The 150,000-square-foot building included space for historical
              exhibits showcasing Stanford’s role in the history of computing,
              and became home to 550 faculty, staff, and students, uniting the
              Department of Computer Science, which had been scattered across
              eight different sites on campus.
              <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} />
            </Text>
            <Text>
              “It’s fantastic to see this building and how it’s come together so
              well,” Gates said at the dedication ceremony. It would be “up to
              the students” to determine what is done with the technology they
              could develop there, he added.
              <Footnotes footnoteRefs={[{ id: "footnote11", number: 11 }]} />
            </Text>
          </OneCol>
          <BgImageWrapper
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483050/A-CAM-2022SE-178_tokpw9.jpg"
          >
            <MediaCaptionImage
              isParallax
              rounded
              aspectRatio="8x5"
              className="rs-mb-6"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483050/A-CAM-2022SE-178_tokpw9.jpg"
              alt="A person riding a scooter in front of a building."
              caption="Exterior view of the William Gates Computer Science Building, 2022. When it was completed in 1996, the building housed facilities for research and education and united the previously dispersed Computer Science Department. | Linda A. Cicero/Stanford News Service."
            />
            <TwoCol>
              <MediaCaptionImage
                rounded
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483054/robot_demonstration_z49xvb.jpg"
                alt="A group of people gathered around a robot."
                caption="A robot demonstration at the dedication of the William Gates Computer Science Building, 1996. Attendees included (from left in front row) Stanford President Gerhard Casper, professor of computer science Oussama Khatib, William Hewlett (seated), Bill and Melinda Gates, and David Packard (seated). In addition to facilities that support research and education, the building houses exhibits containing historical equipment and documents focusing on Stanford’s role in the history of computing. | Linda A. Cicero/Stanford News Service."
              />
              <MediaCaptionImage
                rounded
                className="mt-0 lg:rs-mt-8"
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483047/xx798bb1141_xbi3kg.jpg"
                alt="Three men in formal suits standing together outside the William Gates Computer Science building."
                caption="John Hennessy, Bill Gates, and Jim Gibbons outside the William Gates Computer Science Building during its dedication, 1996. Hennessy was dean of the school at this time, Gates was the major donor for the building, and Gibbons, former dean, was serving as special counsel to the president and provost on industry relations. | Linda A. Cicero/Stanford News Service."
              />
            </TwoCol>
          </BgImageWrapper>
          <TwoCol isSidebar className="rs-mt-5 items-center">
            <OneCol>
              <H2 className="mt-0">A program and place for collaboration</H2>
              <Text>
                With a historic pledge from former engineering professor,
                Silicon Graphics founder, and Internet pioneer James Clark, the
                school in 1999 began to collaborate on the plan for a new
                building to house the university’s Bio-X program, whose mission
                was to formalize interdisciplinary research related to biology.
                Clark noted that his gift had been inspired by seeing Stanford
                researchers turn embryonic chicken cells into working heart
                cells. “I saw a new future for medicine and biology,” Clark
                wrote. “I believe research that uses [stem cells] is vital to
                the future of medicine.”
                <Footnotes footnoteRefs={[{ id: "footnote12", number: 12 }]} />
              </Text>
              <Text>
                Clark’s gift of $90 million for Bio-X was instrumental in the
                construction of the program’s new building. Situated between the
                Medical School and the School of Engineering, the James H. Clark
                Center for Biomedical Engineering and Sciences is a physical and
                symbolic link between the two schools and the rest of campus.
              </Text>
              <H2>New deans</H2>
              <Text>
                In late 1995, Dean James Gibbons transitioned into the role of
                special counsel to the president and provost on industry
                relations.
                <Footnotes
                  footnoteRefs={[{ id: "footnote13", number: 13 }]}
                />{" "}
                After an extensive national search that included at least
                seventy nominations, the university announced that John
                Hennessy, professor of computer science, would be the new dean.
              </Text>
              <Text>
                “I spent a lot of time talking to Jim Gibbons about it, who gave
                me this very sage piece of advice. He said, ‘Take this job not
                because you like the emoluments of the office or anything else,
                but because you want to serve the faculty and students at
                Stanford.’ . . . I enjoyed that. And I’m an intellectually
                curious person, so it gave me a much bigger set of colleagues to
                understand and find out what they were doing and engage with,”
                Hennessy said.
                <Footnotes footnoteRefs={[{ id: "footnote14", number: 14 }]} />
              </Text>
              <Text>
                Though his tenure as dean lasted only three years, Hennessy
                contributed a five-year plan for the school that paved the way
                for important activities in bioengineering and biomedical
                engineering. His talents as a leader resulted in his own rapid
                advance: In 1999, he was appointed provost of Stanford and the
                next year became the tenth president of Stanford University.
              </Text>
              <Text>
                James Plummer, professor of electrical engineering and alumnus
                of the School of Engineering, was appointed dean of the school
                following Hennessy. Plummer, who remained in office until 2014,
                became the longest-serving dean in the history of the School of
                Engineering. During his tenure, the school would build a Science
                and Engineering Quad, expanding into the state-of-the-art
                research and education setting it is today; dramatically
                increase the number of students majoring in engineering; and
                help to create interdisciplinary programs such as Bio-X, the
                Bioengineering Department (jointly operated with the School of
                Medicine), and the Hasso Plattner Institute of Design
                (d.school).
              </Text>
              <Text>
                “I am honored to be asked to do this job,” Plummer said. “I hope
                to build on our strengths and move forward with the help of the
                faculty, administration and students. . . . I couldn’t pass up
                such a tremendous opportunity to build for the future and to
                make a difference.”
                <Footnotes footnoteRefs={[{ id: "footnote15", number: 15 }]} />
              </Text>
            </OneCol>
            <StorySidebar hasLineArt>
              <MediaCaptionImage
                rounded
                isPortrait
                isCaptionInset
                className="mb-0"
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483021/john_hennessy_cjelw5.jpg"
                caption="James Plummer, dean of the School of Engineering from 1999 to 2014, at a Stanford commencement celebration, 2005. As the longest-serving dean in the school’s history, Plummer led the school through a major expansion and greatly increased the number of students majoring in engineering. He also advocated for all engineering students to take advantage of liberal arts opportunities at Stanford. | Linda A. Cicero/Stanford News Service."
              />
              <MediaCaptionImage
                rounded
                isPortrait
                isCaptionInset
                className="mb-0"
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483046/james_plummer_fydgcs.jpg"
                caption="Hugh Hildreth Skilling, 1946. Skilling began his career at Stanford in 1926 as an undergraduate teaching assistant in physics. Promoted to associate professor in 1939, he later became head of the Department of Electrical Engineering, a post he held for twenty-three years. He served as acting dean of the School of Engineering from fall 1944 through the end of 1945. | Stanford News Service."
              />
            </StorySidebar>
          </TwoCol>
          <div className="flex w-full justify-end rs-mb-3">
            <HorizontalLineart lineartType="D" />
          </div>
          <OneCol className="rs-mb-8">
            <H2 className="mt-0">Near West Campus complete</H2>
            <Text>
              In 1999, the Near West Campus project opened. Five structures had
              been torn down, four new ones had gone up, and two others were
              renovated.
            </Text>
            <Text>
              The architects had made a deliberate return to the original campus
              plan drawn up in 1888 by landscape architect Frederick Law
              Olmsted, architect Charles Coolidge, and Leland Stanford himself.
              That plan preserved the natural setting while still allowing for
              expansion and alignment with the main quad on an east-west axis.
              The ability to see adjoining quads from the main quad, or vice
              versa, was more than a nice view—the alignment provided easier
              access between locations that enabled the meeting of minds.
              <Footnotes footnoteRefs={[{ id: "footnote16", number: 16 }]} />
            </Text>
            <Text>
              With the new additions of the Gates Computer Science Building, the
              David Packard Electrical Engineering Building, the William R.
              Hewlett Teaching Center, and the renovated McCullough Annex, the
              Stanford Engineering community was primed for a new century.
            </Text>
            <Text>
              “A lot of the really interesting research is interdisciplinary,”
              said Dean James Plummer. “Having meeting places is important. . .
              . It’s a magical opportunity for things to happen.”
              <Footnotes footnoteRefs={[{ id: "footnote17", number: 17 }]} />
            </Text>
          </OneCol>
          <MediaCaptionImage
            isParallax
            rounded
            aspectRatio="8x5"
            className="cc mx-auto max-w-1500 rs-mb-5"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483049/A-CAM-2022SE-138_xvsrau.jpg"
            alt="A view of the David Packard Electrical Engineering building."
            caption="Exterior view of the David Packard Electrical Engineering Building, 2022. The Packard building was one of four new buildings constructed as part of the first phase of the Near West Campus project. The building became a home for the Electrical Engineering Department. A major renovation of the basement level was undertaken in 2023 to create the new Stanford Robotics Lab, which opened in 2024, along with several new makerspaces. | Linda A. Cicero/Stanford News Service."
          />
          <TwoCol isSidebar className="rs-mt-8 rs-mb-5">
            <OneCol>
              <H2 className="mt-0">Evolving departments</H2>
              <Text>
                At the diploma ceremony for the Department of Civil Engineering
                in June 1997, Jeffrey Koseff, professor and chair, addressed
                fellow faculty, staff, and students, with important news. As of
                September 1, he said, the department would be known as the
                Department of Civil and Environmental Engineering, embracing a
                field that had grown since the 1970s, and which “is an integral
                part of what we do, and . . . something of which we are very
                proud.”
                <Footnotes footnoteRefs={[{ id: "footnote18", number: 18 }]} />
              </Text>
              <Text>
                Also in 1997, the Department of Industrial Engineering and
                Engineering Management (IEEM) instigated its own changes.
                M.-Elisabeth Paté-Cornell (MS ’72 operations research, PhD ’78
                engineering-economic systems) was appointed chair—making her the
                first woman to chair a department in the School of Engineering.
                Two years later, Paté-Cornell, whose research focused on
                engineering risk analysis in complex systems, became the first
                woman to hold an endowed professorship in the School of
                Engineering.
                <Footnotes footnoteRefs={[{ id: "footnote19", number: 19 }]} />
              </Text>
              <Text>
                In 2002 the Department of Industrial Engineering and Engineering
                Management, the Department of Engineering-Economic Systems, and
                the Department of Operations Research were merged into a single
                entity known as the Department of Management Science and
                Engineering. Students were required to take classes in math,
                science, and engineering fundamentals, along with Technology in
                Society and core classes such as Quality Control and Industrial
                Accounting. Chair Paté-Cornell noted the new department would
                “create a critical mass in the field of management science and
                Engineering.”
                <Footnotes footnoteRefs={[{ id: "footnote20", number: 20 }]} />
              </Text>
              <Text>
                In the summer of 2002, the School of Engineering continued a
                trend of championing interdisciplinary work, working with the
                School of Medicine to add a new department to reflect a growing
                cross section of engineering with biology and medicine. The
                result was the Department of Bioengineering, then the only
                department in the university to be shared by two schools. “We’re
                not really joining engineering and biology,” noted Dean Plummer.
                “We’re building something new which sits at the intersection of
                engineering and the life sciences. We believe that
                interdisciplinary teaching and research at this intersection
                represent one of the great opportunities for this century. . . .
                Engineers have worked on problems deriving from medical needs
                for many years.”
                <Footnotes footnoteRefs={[{ id: "footnote21", number: 21 }]} />
              </Text>
              <Text>
                That problem-solving spirit also led the School of Engineering,
                in 2004, to evolve the Scientific Computing and Computational
                Mathematics (SCCM) program, started in 1988 by computer science
                professors Gene Golub and Joseph Oliger, into the new Institute
                for Computational and Mathematical Engineering (ICME). ICME
                would apply advanced mathematics and computing techniques to
                solve a broad array of engineering problems—everything from
                simulating airflow across an airplane fuselage to detailing
                complex financial transactions. It grew to include dozens of
                affiliated faculty from across the university and continues to
                reach thousands of graduate and undergraduate students each
                year.
                <Footnotes footnoteRefs={[{ id: "footnote22", number: 22 }]} />
              </Text>
            </OneCol>
            <StorySidebar hasLineArt lineArtType="medium">
              <MediaCaptionImage
                rounded
                isPortrait
                isCaptionInset
                className="mb-0"
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483047/SC0122_1992-003_b303_X269-007_q47lbw.jpg"
                caption="Elisabeth Paté-Cornell, 1992. She became the first female department chair in the school when she became chair of the Department of Industrial Engineering and Engineering Management in 1997. In 1999 she was appointed to the Burt and Deedee McMurtry Professorship, becoming the first woman in Stanford Engineering history to hold an endowed chair. At the time, she was one of only five tenured women on the school’s faculty. | Stanford News Service."
              />
            </StorySidebar>
          </TwoCol>
          <Scrollytelling bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483051/original_Google_server_gmqcoh.jpg">
            <H2
              className="mx-auto  md:w-2/3 xl:w-1/2 mt-0"
              size={3}
              align="center"
            >
              An Internet Revolution: Brin, Page, and the Birth of Google
            </H2>
            <MediaCaptionImage
              rounded
              isCaptionInset
              className="max-w-850 mx-auto"
              aspectRatio="8x5"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483048/110419-1941_mlzjyn.jpg"
              alt="A server encased in colorful toy building blocks, located in the Jen-Hsun Huang Engineering Center."
              caption="The original server running the Google algorithm developed by engineering graduate students Larry Page and Sergey Brin, made up of ten 4-gigabyte disk drives, encased in toy building blocks, translucent plastic, and packing tape, 1996. This combined 40 GB of storage was considerably larger than what was required of most student projects at the time. It is now on display in the Jen-Hsun Huang Engineering Center. | Linda A. Cicero/Stanford News Service."
            />
            <ScrollyBubble>
              <Text>
                It’s not every day that a world-changing, billion-dollar company
                gets started at a recruiting visit for admitted students. But
                that’s what happened when Larry Page met Sergey Brin in the
                spring of 1995. Brin, then in his second year of a computer
                science PhD, had sailed through his first year. In his free
                time, he stayed busy with sports, practical jokes, rollerblading
                through the Gates Building hallways, and renumbering the
                building’s offices to convey the distance between rooms.
                <Footnotes footnoteRefs={[{ id: "footnote23", number: 23 }]} />
                “Obsessed with efficiency,” Brin needed a worthy outlet for his
                intellectual energy.
                <Footnotes
                  footnoteRefs={[{ id: "footnote24", number: 24 }]}
                />{" "}
                He finally found it in one of the newly admitted engineering
                students he had signed up to guide around San Francisco, the
                young Larry Page
              </Text>
              <Text>
                Page arrived on campus in the fall brimming with ideas. He
                shared a dozen with his advisor, Terry Winograd, who picked out
                one about making a mathematical graph of all the links on the
                Internet and said, “Well, that one seems like a really good
                idea.”
                <Footnotes
                  footnoteRefs={[{ id: "footnote25", number: 25 }]}
                />{" "}
                The son of two computer scientists, Page knew as a child that he
                wanted to change the world by starting a useful company. He was
                “preoccupied with finding more efficient ways to do things.”
                <Footnotes footnoteRefs={[{ id: "footnote26", number: 26 }]} />
                Though different in temperament, Page and Brin were on common
                ground when it came to their ambition and audacious intellect.
                Page teamed up with Brin on his project, which they soon named
                BackRub.
              </Text>
              <Text>
                Stanford Engineering proved fertile ground for their work. Early
                funding came from the Stanford Digital Libraries Project, a
                research effort begun in 1994 to develop technologies for a
                single, integrated, and “universal” library to provide access to
                just about anything that could be found online.
                <Footnotes
                  footnoteRefs={[{ id: "footnote27", number: 27 }]}
                />{" "}
                Stanford also had hardware and bandwidth—lots of the former, and
                sometimes not enough of the latter. The computing infrastructure
                for their project was assembled—in Page’s dorm room—from both
                old and new hardware liberated from around campus; their new
                search engine was known to occasionally bring the entire
                university network to its knees. Yet, the project found the
                support it needed. “We’re lucky there were a lot of
                forward-looking people at Stanford,” Page remembered. “They
                didn’t hassle us too much about the resources we were using.”
                <Footnotes footnoteRefs={[{ id: "footnote28", number: 28 }]} />
              </Text>
              <Text>
                By the time Brin and Page presented their BackRub paper in
                January 1998, they had renamed the project Google. Their
                audience of graduate students and faculty advisors—including
                Winograd, Héctor García-Molina, David Cheriton, Jeffrey Ullman,
                and Rajeev Motwani— understood the Internet revolution that was
                afoot. Silicon Valley investors, on the other hand, were
                skeptical at best. But, by summer’s end, Brin and Page had a
                check for $100,000, and Google, Inc., was formally incorporated
                on September 7, 1998. It was time to move the whole operation
                out of the dorm and into the world.
              </Text>
              <Text mb="0">
                —Charles Petersen <br />
                Harold Hohbach Historian at the Silicon Valley Archives,
                Stanford University
              </Text>
            </ScrollyBubble>
            <MediaCaptionImage
              rounded
              isCaptionInset
              className="max-w-850 mx-auto"
              aspectRatio="8x5"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483024/google_gathering_2005_kktyns.jpg"
              alt="A group of men gathered together and posing for a photo."
              caption="From left: Terry Winograd, Héctor García-Molina, David Cheriton, Larry Page, Rajeev Motwani, and Sergey Brin at a gathering on campus to celebrate Google, 2005. | School of Engineering."
            />
          </Scrollytelling>
          <OneCol className="rs-mb-5">
            <H2>Scientific gravity</H2>
            <Text>
              With the launch of Gravity Probe B in April 2004, a team of
              Stanford faculty in aeronautics and astronautics, physics, and
              other departments, joined by collaborators in government,
              academia, and industry, realized a forty-year dream of testing key
              predictions of Albert Einstein’s general theory of relativity.
              Over the years, more than fifty faculty and staff from six
              departments and dozens of students participated in the project,
              which had kicked off in 1962 with funding from NASA.
            </Text>
            <Text>
              The Gravity Probe B satellite included four “near-perfect”
              ping-pong-ball-sized gyroscopes that would measure with
              “unprecedented accuracy” two extraordinary effects that Einstein
              had predicted almost a century before: the “geodetic effect,”
              which holds that a mass in space warps the fabric of space like a
              bowling ball on a bed sheet, and “frame-dragging,” in which the
              rotating Earth similarly alters space as it moves, had never been
              measured before.
              <Footnotes footnoteRefs={[{ id: "footnote29", number: 29 }]} />
            </Text>
            <Text>
              “Einstein knew that his theory was a little wrong,” said
              aeronautics and astronautics Professor Bradford Parkinson, the
              Gravity Probe B program manager in the early 1990s. “It didn’t
              explain what was going on at very small scales.”
              <Footnotes footnoteRefs={[{ id: "footnote30", number: 30 }]} /> In
              2011, the peer-reviewed mission report provided a significant
              experimental confirmation of Einstein’s theory.
            </Text>
          </OneCol>
          <MediaCaptionImage
            rounded
            isParallax
            isCaptionInset
            className="cc mx-auto rs-mb-5 rs-mt-8"
            aspectRatio="8x5"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483022/murray_and_taber_zw48mg.jpg"
            alt="A man inspects a large metal object, accompanied by another man who watches nearby."
            caption="Dave Murray (right), a cryogenic engineer from Lockheed Martin, and Mike Taber, Stanford’s cryogenic test director, inspecting the flight dewar for the Gravity Probe B spacecraft when it was under construction, 1996. The dewar acted like a giant thermos bottle to keep the spacecraft’s instruments cool. Gravity Probe B was a long-standing Stanford experiment to test Einstein’s general theory of relativity. A report of the experiment published in 2007 declared success: “The 17.3-month flight mission succeeded in collecting all the data needed to carry out this unprecedented, direct experimental test of Einstein’s general theory of relativity—his theory of gravity.” | Gravity Probe B."
          />
          <TwoCol>
            <MediaCaptionImage
              rounded
              aspectRatio="3x4"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483021/Francis_and_Brad-Press_Day_tnxxl4.jpg"
              alt="Two men in blue lab coats holding a large an object."
              caption="Francis Everitt and Bradford Parkinson at Vandenberg Air Force Base, 2003. Everitt became principal investigator of the Gravity Probe B experiment in 1981; Parkinson was co–principal investigator and project manager. | Gravity Probe B."
            />
            <MediaCaptionImage
              rounded
              className="mt-0 lg:rs-mt-8"
              aspectRatio="3x4"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748483047/SA_inst_team-031804-1712w_vqjikf.jpg"
              alt="A group of people, standing in front of an object."
              caption="Gravity Probe B solar array installation team at Vandenberg Air Force Base, 2004. GP-B was designed to measure two key predictions of Einstein’s general theory of relativity by monitoring the orientations of ultra-sensitive gyroscopes relative to a distant guide star. After decades of work by Stanford engineers and their partners, the experiment launched from Vandenberg Air Force Base on April 20, 2004. | Gravity Probe B."
            />
          </TwoCol>
          <div className="flex w-full justify-start rs-mb-3">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol className="rs-mb-5">
            <Text>
              With characteristic emphasis on pioneering new directions in
              engineering while extending a welcoming hand to key
              interdisciplinary collaborations, the Stanford School of
              Engineering’s eighth decade concluded with a slate of top-ranked
              educational programs, a docket of high-profile research, and the
              future firmly in its sights.
            </Text>
          </OneCol>
          <Container pt={4} pb={7} bgColor="blue">
            <OneCol className="rs-mt-4 ms-mb-7">
              <FootnotesList footnotes={footnotesList} />
            </OneCol>
          </Container>
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
