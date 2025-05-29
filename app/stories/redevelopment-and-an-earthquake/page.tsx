import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { Quote } from "@/components/Quote";
import {
  BgImageWrapper,
  ExploreMore,
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
import { Container } from "@/components/Container";

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
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1748482749/SC0122_1998-144_b02_Computers_1985_0033_g5ol5n.jpg",
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
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1748482749/SC0122_1998-144_b02_Computers_1985_0033_g5ol5n.jpg",
    ],
  },
};

const exploreStoriesData = [
  {
    heading: "“Preparing roads over which culture may ride in comfort",
    chapter: "Decade 1",
    href: "/stories/preparing-roads-culture-may-ride-comfort",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1743096833/Spr25_SoE-Voltage_Black_w46ine.jpg",
  },
  {
    superhead: "A Century of Innovation",
    heading: "100 Years of Stanford Engineering",
    href: "/stories/a-century-of-innovation",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745960409/Centennial-launch-story-image_dexebg.jpg",
  },
  {
    chapter: "Decade 6",
    heading: "Bridging worlds: chips, code, and cosmos",
    href: "/stories/bridging-worlds-chips-code-and-cosmos",
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1747098478/SC1041_SAIL_CartDeck_2_htazm5.jpg",
  },
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
            chapter="Decade 1"
            heading="“Preparing roads over which culture may ride in comfort”"
            dek="1925 – 1934"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482749/SC0122_1998-144_b02_Computers_1985_0033_g5ol5n.jpg"
            alt=""
          />
          <div className="max-w-1500 w-full cc 2xl:p-0">
            <Text mb={6}>by Andrew Myers</Text>
            <Quote
              width="wide"
              teaser=". . . The future of computer science lay in engineering—in problem-solving, not in theory, and problem-solving is an essentially engineering thing to do."
              source="— Dean James Gibbons"
            />
          </div>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol>
            <H2>1985 – 1994</H2>
            <Text variant="overview">
              The seventh decade of the School of Engineering began with a major
              development. After more than twenty years in the School of
              Humanities and Sciences—and much deliberation—in April 1985
              approval came for the Department of Computer Science to move into
              the School of Engineering. The transition was completed by the end
              of the year. “Both schools are in favor of it,” said Norman
              Wessells, dean of the School of Humanities and Sciences. “The
              department should be where it will function best.”(1) It was “a
              very, very big deal,” Dean Gibbons later recalled. “[The
              Department of Computer Science] certainly was often number one in
              the country. . . . It was clear to me and to a few of my
              colleagues that the future of computer science lay in
              engineering—in problem-solving, not in theory, and problem-solving
              is an essentially engineering thing to do.”(2)
            </Text>
          </OneCol>
          <TwoCol>
            <OneCol>
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="4x3"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482749/SC0122_1998-144_b02_Computers_1985_0030_xmj24i.jpg"
                alt="A diverse group of individuals focused on their computers while seated at tables."
                caption="Students using computer terminals, 1985. | Special Collections & University Archives."
              />
            </OneCol>
            <OneCol>
              <Text>
                The department also added an undergraduate degree in the fall of
                1985, and, by the following June, seven students had earned
                their BS degrees in computer science.(3) Signifying the growing
                influence of computers and computational approaches across
                engineering, in 1988 computer science faculty members Gene Golub
                and Joseph Oliger founded a degree-granting program in
                Scientific Computing and Computational Mathematics, a forerunner
                of today’s Institute for Computational and Mathematical
                Engineering (ICME), established in 2004.
              </Text>
              <Text>
                While Stanford continued to dominate one of the newest fields in
                engineering, it likewise worked to transform one of the oldest:
                construction. In 1986, a committee of civil engineers in
                Stanford’s Construction Engineering and Management program began
                to study ways to innovate in their mature profession. When it
                was founded in 1955, the program had been among the first in the
                country, but it had grown stagnant. “There are many industries
                that have a long tradition of trying to advance technology,”
                faculty member Clyde B. “Bob” Tatum determined at the time.
                “Construction is not one of those.” The committee established an
                advisory committee to update the curriculum and expedite the
                integration of new technologies into the program. It also formed
                the Stanford Construction Institute, an affiliate program for
                industrial sponsors who not only funded the program but also
                provided practical and research opportunities to faculty and
                students.(4) From the first industrial affiliate program in
                1968, called the Computer Forum, the school would develop more
                than fifty industrial affiliate programs, which provide
                essential funding for research and innovation.
              </Text>
            </OneCol>
          </TwoCol>
          <Scrollytelling bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482748/W645-13_rc3tnj.jpg">
            <MediaCaptionImage
              rounded
              isCaptionInset
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482749/stanford_solar_car_u2yced.jpg"
              alt="A solar-powered vehicle stands parked outside a building with a person riding a bike in the background."
              caption="The Stanford Solar Car Project (SSCP) Luminos, 2013. Luminos was built to compete in the 2013 World Solar Challenge, a 2,000-mile trek across the Australian Outback. "
            />
            <ScrollyBubble>
              <Text>
                The student-run, university-wide Stanford Solar Car Project
                (SSCP) designs, builds, and races solar-powered vehicles in
                international competitions every other year, to test the limits
                of their designs under extreme conditions. The project promotes
                innovation in renewable energy technologies and sustainable
                transportation and provides students with hands-on opportunities
                for cross-disciplinary collaboration. Of the fifteen vehicles
                constructed since the project began in 1989, Luminos was the
                most successful, placing fourth in the 2013 race and going on to
                log 10,000 miles. Today it is on display in the Huang
                Engineering Center.
              </Text>
            </ScrollyBubble>
          </Scrollytelling>
          <OneCol>
            <Text>
              The Department of Civil Engineering embraced its new proximity to
              Computer Science (CS) and in January 1988 founded the Center for
              Integrated Facility Engineering (CIFE). CIFE pioneered the
              application of information technology to the construction
              industry, focusing on efficient design and construction. Martin
              Fischer and John Kunz at CIFE, collaborating with Terry Winograd
              in CS, developed tools such as 4D computer-aided design (CAD)
              software, which integrated time into traditional 3D modeling to
              enhance planning and coordination. CIFE researchers would go on to
              achieve improved plant maintenance systems, develop efficient pipe
              routing using mobile robots, and leverage the Internet for
              construction efficiency.(5)
            </Text>
            <Text>
              In 1991, the Department of Civil Engineering added an
              environmental undergraduate degree track. Jeffrey Koseff, then
              assistant professor, noted that the new degree track built on the
              strong existing program for graduate students by providing
              “classes specifically for undergraduates.” Courses included water
              decontamination, environmental planning, and air-quality
              management. Meanwhile, in the same department, Koseff and
              colleague Robert Street established the field of environmental
              fluid mechanics, pushing theoretical and experimental boundaries
              in the study of rivers, lakes, and oceans.(6)
            </Text>
            <Text>
              Keeping up with the trend of cross-disciplinary work, and with an
              eye on the future, faculty member Robert Cannon in 1985 united two
              Stanford specialties, aerospace and robotics, to form the new
              Aerospace Robotics Laboratory (ARL). His goal was to develop a new
              class of robots that were “deft, light and flexible and don’t use
              much energy.” Cannon noted that “the robots you see today in
              factories or in space are not very bright, and they are also
              awfully clumsy.”(7) ARL faculty would make major contributions to
              the field and extend human reach into distant and dangerous
              environments.(8)
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol>
            <H2>“Near West Campus” redevelopment begins</H2>
            <Text>
              Stanford Engineering’s alumni set new heights in fundraising for
              the school and the university. In 1986, William R. “Bill” Hewlett
              (’34, ’39), cofounder of Hewlett-Packard, pledged $50 million to
              Stanford’s Centennial Campaign, the single largest pledge from one
              individual Stanford had ever received. Forty million dollars of
              the gift was earmarked to rebuild the science and engineering
              buildings on a 41-acre site known as the “Near West Campus” for
              its location relative to the main quad. Expected to take fifteen
              years to complete, the project was considered at the time to be
              the largest campus redevelopment effort by any university in the
              United States.(9)
            </Text>
            <Text>
              “Stanford has been important to me and my family, to my company,
              to this community, and to the nation. I want to see it
              strengthened for the future so that it will continue to benefit
              society through educating promising young people and performing
              research essential to the progress of mankind,” Hewlett said at a
              ceremony announcing the gift.(10)
            </Text>
            <Text>
              The plans were grand, but two major incidents stalled them. First,
              the 1989 Loma Prieta earthquake was destructive and costly. Then,
              in the early 1990s, a university research spending
              scandal—sometimes called “the other earthquake”—led to the
              resignation of Stanford president Donald Kennedy and a decline in
              federal research funding. In late 1994, David Packard and Bill
              Hewlett together committed an additional $77.4 million, the
              biggest gift in Stanford history, to complete the Near West Campus
              project.(11)
            </Text>
          </OneCol>
          <TwoCol>
            <MediaCaptionImage
              rounded
              isCaptionInset
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482751/PC0062_2008-194_SEQ_04_015_kxa1kp.jpg"
              alt="A construction site featuring machinery and workers, with a building visible in the background."
              caption="Redevelopment of the science and engineering buildings. The Near West Campus project, as it was known for its location relative to the main quad, involved removing five structures, remodeling two, and building four new structures, and was Stanford’s largest construction project ever. The project kicked off in 1986 with a gift from William Hewlett. In 1994, another gift from Hewlett and business partner David Packard provided funds to complete the project, which opened its doors in 1999. | Stanford University Planning Office."
            />

            <MediaCaptionImage
              rounded
              isCaptionInset
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482751/PC0062_2008-194_AERIALS_01_009_smfqx1.jpg"
              alt="Aerial view of Stanford University's campus showcasing its iconic architecture and lush green spaces."
              caption="Aerial view of the Stanford campus showing construction of the Near West Campus project, 1994. | Stanford University Planning Office."
            />
          </TwoCol>
          <OneCol>
            <H2>Stanford Engineering Venture Fund</H2>
            <Text>
              Meanwhile, in 1985, Dean Gibbons developed a fundraising
              innovation that would expand Stanford Engineering’s foundational
              role in Silicon Valley. He engaged seven venture capitalists to
              contribute to the new Stanford Engineering Venture Fund (SEVF),
              which invested small amounts in area companies that often had
              Stanford-related founders or technologies. The fund thrived for
              nine years, achieving a 30 percent annual return, before closing
              in 1995; it provided eight endowed professorships, nine endowed
              fellowships, funding for the Stanford Technology Ventures Program,
              contributions to capital construction for the science and
              engineering building Near West Campus project and elsewhere, and
              matching funds for twenty additional graduate fellowships. The
              final $6 million transfer established SEVF II, which continues the
              mission with new volunteers, even higher returns, and increased
              impact.(12)
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="D" />
          </div>
          <TwoCol isSidebar>
            <OneCol>
              <H2>Quality over quantity</H2>
              <Text>
                Fundraising was not the only area in which numbers were peaking.
                In 1985, the school conferred 861 graduate engineering degrees,
                the most in the nation. Yet, continuing to increase in size was
                not the objective. The school’s main goal was to have a
                top-quality program, not the biggest, said Robert Eustis,
                professor of mechanical engineering and senior associate dean at
                the School of Engineering. “We are large, but we’re about where
                we want to be.”(13)
              </Text>
              <Text>
                Many students might have been drawn to engineering for its
                promise of employment. In 1988, job prospects for engineers were
                so strong that even the “Black Monday” stock market crash the
                previous October would have little effect on them. A nationwide
                survey of employers predicted a modest rise in hiring and an
                increase in starting salaries, with Stanford graduates expected
                to be at the high end of the starting salary range in every
                discipline.(14)
              </Text>
              <H2>The Stanford Instructional Television Network</H2>
              <Text>
                In 1987, a new avenue opened for students. The Stanford
                Instructional Television Network (SITN) began broadcasting
                engineering lectures, once available only to companies like IBM
                and Hewlett-Packard, directly to dormitories experimentally
                through Stanford’s SUNet cable network. By 1990, SITN would be
                broadcasting classes by satellite nationwide.(15) Three years
                later, the United States Distance Learning Association
                recognized SITN as the “Most Outstanding Distance Education
                Network in the U.S.”
              </Text>
              <Text>
                Celebrating its twentieth anniversary in 1988, SITN markedly
                increased access to Stanford courses and soon became so popular
                that interest far outpaced capacity.16 Andy DiPaolo, SITN
                director, saw this evolution as a reflection of the quality of
                the faculty and the content. “The key to what we’re trying to do
                at SITN and the School of Engineering is to give companies
                access to premier curriculum. We think it will be a significant
                contribution to the economic prosperity and intellectual
                vitality of American industry,” DiPaolo said.(17) SITN would
                later be integrated into the Stanford Center for Professional
                Development when it was founded in 1995.
              </Text>
            </OneCol>
            <StorySidebar hasLineArt>
              <MediaCaptionImage
                rounded
                isCaptionInset
                isPortrait
                aspectRatio="1x1"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482752/P8025899_w4032_q10_atlzw1.jpg"
                alt="A man in a blue shirt stands confidently in front of tall and elegant pillars."
                caption="Andy DiPaolo, director of the Stanford Instructional Television Network (SITN), 1994. The SITN was one of the largest distance education networks in the United States, delivering graduate degree programs, credit courses, certificate programs, and professional education to students in Silicon Valley and around the world. Although it had been offering courses to local professionals for more than a decade, SITN became available to students in 1987. It was later incorporated into the Stanford Center for Professional Development, which was founded under DiPaolo’s leadership in 1995. | Stanford Engineering Global and Online Education."
              />
            </StorySidebar>
          </TwoCol>
          <BgImageWrapper
            hasBgImage
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482748/STS047-37-003_large_rt36xm.jpg"
            bgColor="fog-light"
          >
            <MediaCaptionImage
              rounded
              isParallax
              isCaptionInset
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482748/STS047-37-003_large_rt36xm.jpg"
              alt="A woman in a space suit floats in the vastness of space."
              caption="STS-47 Mission Specialist Mae C. Jemison floating in the Science Module aboard the Space Shuttle Endeavour, September 1992. |  NASA."
            />
          </BgImageWrapper>
          <Container bgColor="blue">
            <TwoCol>
              <OneCol>
                <H2>Mae Jemison</H2>
                <Text>
                  In her 1996 commencement speech, Mae C. Jemison (BS ’77
                  chemical engineering), America’s first female African American
                  astronaut, challenged outgoing graduates to embrace personal
                  and professional change and engage different perspectives to
                  create new solutions: “We each get a chance to choose our own
                  path. . . . Sometimes, it seems to me that we are running away
                  from problems and reacting to issues in our world and our
                  societies as though we are afraid of change, that we’re afraid
                  of things being a little bit different. And that’s keeping us
                  from formulating the right question so we can solve a
                  problem.”(18)
                </Text>
                <Text>
                  Born in Atlanta and raised in Chicago, Mae Jemison was an
                  academic standout in high school who won a scholarship to
                  attend Stanford University at the age of sixteen.(19) Jemison
                  entered Stanford in 1973; the previous year had marked a
                  turning point for women in America with the passage of Title
                  IX, a portion of the United States Education Amendments of
                  1972 prohibiting discrimination on the basis of sex. On
                  campus, the social and political movements that had gripped
                  the university in the 1960s continued to escalate, reaching
                  new heights in the 1970s, when students were protesting the
                  war in Vietnam, Cambodia, and Laos while celebrating gay
                  liberation and the rights of women and minorities.(20)
                </Text>
                <Text>
                  During this time, Jemison balanced her undergraduate studies
                  in chemical engineering and African and African American
                  Studies with her personal interests in theater and dance,
                  finding opportunities to showcase her creative endeavors
                  through choreographing dance performances and participating in
                  socially conscious, student-produced plays through the Roble
                  Hall Drama Workshop,(21) while also being involved in student
                  politics and intramural sports. After graduating from Stanford
                  in 1977, Jemison obtained a doctorate in medicine from Cornell
                  University and, in 1992, became the first woman of color in
                  space as an astronaut aboard the aptly named Space Shuttle
                  Endeavour.
                </Text>
                <Text>
                  In the years since, Jemison has continued on trajectories of
                  her own design, following the very advice she gave to the
                  graduating class of 1996: to embrace change and create new
                  solutions. After logging additional time as a member of
                  Spacelab and retiring from NASA, Jemison “received 9 honorary
                  doctorates and authored in 2012 the winning bid on DARPA’s 100
                  Year Starship project that aims to make human interstellar
                  travel a reality within the next century.”(22)
                </Text>
                <Text>
                  —Hanna Ahn <br />
                  Assistant University Archivist for <br />
                  Special Collections & University Archives
                </Text>
                <MediaCaptionImage
                  rounded
                  isCaptionInset
                  aspectRatio="4x3"
                  imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482748/mae_jamison_commencement_q1kmtb.jpg"
                  alt="A smiling woman in a graduation gown stands confidently at the podium."
                  caption="Astronaut Mae Jemison (BS ’77 chemical engineering) was the keynote speaker at the university’s 105th Commencement in 1996. In her speech, Jemison challenged outgoing graduates to embrace personal and professional change and engage different perspectives to create new solutions: “We each get a chance to choose our own path. … Sometimes, it seems to me that we are running away from problems and reacting to issues in our world and our societies as though we are afraid of change, that we’re afraid of things being a little bit different. And that’s keeping us from formulating the right question so we can solve a problem.” | Linda A. Cicero/Stanford News Service."
                />
              </OneCol>
              <StorySidebar>
                <Quote
                  quoteColor="red"
                  teaser={
                    <>
                      “We each get a chance to choose our own path. . . .
                      Sometimes, it seems to me that we are running away from
                      problems and reacting to issues in our world and our
                      societies as though we are afraid of change, that we’re
                      afraid of things being a little bit different. And that’s
                      keeping us from formulating the right question so we can
                      solve a problem.”(18)
                    </>
                  }
                  source="— Astronaut Mae Jemison"
                />
              </StorySidebar>
            </TwoCol>
          </Container>
          <OneCol>
            <H2>Focus on diversity</H2>
            <Text>
              Despite the school’s growing global reputation and rising national
              rankings, Dean Gibbons in a 1987 report acknowledged concerns
              about the underrepresentation of women and minorities in the
              student body and faculty. At the time, the faculty included only
              eight fully tenured female professors, just less than 6 percent;
              only 23 percent of the student body were women. A 1989 Stanford
              Daily reporter laid it out plainly: “From the undergraduate to the
              faculty level, the numbers of women and minorities in engineering
              continue to lag far behind those of white males.”23 “We share with
              you the goal of increasing the number of women and minority
              faculty across the University and within the school (of
              engineering) in particular,” Gibbons said to the faculty senate
              when he presented his report.(24)
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol>
            <Text>
              To counter these low numbers, members of a Latino engineering
              student organization tutored local minority high school students
              in algebra. The Women in Science and Engineering network began
              matching undergraduate female engineering and science students
              with graduate mentors, and students founded a chapter of the
              nationwide Society of Women Engineers to sponsor speakers and
              activities of interest to women and to reach out to local
              students.(25)
            </Text>
            <Text>
              To help in this effort to attract new minority and female faculty
              and students in science, engineering, and management, the General
              Electric Foundation in 1989 announced Faculty for the Future, a
              $300,000 four-year series of research grants and student
              fellowships.(26) Then, in 1993, Stanford joined a five-year
              National Science Foundation program to increase the number of
              minorities earning degrees in engineering and science. The grant
              funded recruiting, the expansion of summer classes to incoming
              freshmen, and financial assistance to minority graduate students.
              The school itself pitched in an additional $1 million to bolster
              the program.
            </Text>
            <Text>
              By 1992, the ratios had improved a bit, but not enough. A study
              conducted by the American Association of Engineering Societies
              said women numbered one in five of undergraduate engineering
              majors nationwide, while at Stanford the figure was slightly
              better, at one in four. In certain departments, such as industrial
              and mechanical engineering, Stanford’s number was a rosier one in
              three.(27)
            </Text>
          </OneCol>
          <BgImageWrapper
            hasBgImage
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482748/W645-13_rc3tnj.jpg"
            bgColor="fog-light"
          >
            <MediaCaptionImage
              rounded
              isCaptionInset
              aspectRatio="8x5"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482749/IA_35_EllenOchoaZeroGravity_NatArch_255-STS-STS056-04-008-1_aaeyw6.jpg"
              alt="A woman wearing a space suit poses before an American flag."
              caption="Ellen Ochoa, who earned a master’s and doctorate in electrical engineering from Stanford, became the first Hispanic woman to go into space in 1993. She flew into space four times on Space Shuttle missions STS-56, STS-66, STS-96, and STS-110, logging nearly 1,000 hours in orbit. She went on to become the eleventh director of the Lyndon B. Johnson Space Center. | NASA."
            />
            <div>
              {/* @TODO: Add TimelineItem */}
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="4x3"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482750/DF-SC-97-01109_gl3cqj.jpg"
                alt="A woman in a flight suit, touching a piece of the plane."
                caption="Jeannie Marie Flynn Leavitt, who entered the U.S. Air Force in 1992 after earning her master’s degree in aeronautics and astronautics from Stanford, 1993. Leavitt became the first woman entered into the Air Force fighter pilot training program and the Air Force’s first female fighter pilot in 1993, graduating first in her class. She was also the first woman to command a USAF combat fighter wing. | U.S. Air Force."
              />
            </div>
          </BgImageWrapper>
          <OneCol>
            <Text>
              Despite these many challenges, in 1992 alumna Mae Jemison, MD (BS
              ’77 chemical engineering) became the first African American woman
              in space, joining six other astronauts on the shuttle Endeavour
              and orbiting the planet 127 times during its eight-day trip.(28) A
              year later, engineering alumna Ellen Ochoa (MS ’81, PhD ’85
              electrical engineering) became the first Hispanic American woman
              to travel in space.(29) And in 1994, Jeannie Marie Flynn Leavitt
              (MS ’92 aeronautics and astronautics) became the first female
              fighter pilot in the U.S. Air Force, graduating first in her
              class.(30)
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol>
            <H2>A second center for earthquake science</H2>
            <Text>
              In 1988, Stanford and the U.S. Geological Survey united to open
              the Center for Research in Earthquake Engineering and Seismology
              (CREES). Citing the new center’s broader interdisciplinary scope
              compared to the Blume Earthquake Engineering Center, inaugural
              director Helmut Krawinkler hoped the center’s work would have “a
              large impact” in lessening the damage earthquakes cause. Likening
              the new center to the Center for Integrated Systems he had helped
              to found years earlier, Gibbons highlighted the center’s
              cooperation between industry and government.(31)
            </Text>
            <Text>
              The founding of CREES proved providential when, in the following
              year, 1989, the 6.9-magnitude Loma Prieta earthquake struck with
              an epicenter approximately 34 miles from campus. The effect of the
              quake across campus, particularly in engineering, was sobering.
              Computer science professor Vaughan Pratt, who was helping to plan
              the department’s new building, wrote, “The 1989 Loma Prieta
              earthquake brought planning to an abrupt halt, quite literally. .
              . . At around 4:55 pm I asked why the proposed building couldn’t
              copy the pleasing fractal shapes of the main quad more closely.
              One of the planners said that those shapes were too susceptible to
              earthquake damage. At 5:04 pm the quake struck.”(32) Amid a
              campus-wide shutdown, Professor and Chair of Civil Engineering
              Haresh Shah, with others from the John A. Blume Earthquake
              Engineering Center, led inspections of campus buildings,
              red-flagging twenty-six as unfit for use and limiting access to
              another thirty-four.(33) More than two hundred campus structures
              were damaged, some beyond repair. It would take over a decade to
              restore them, at a cost of more than $160 million.(34)
            </Text>
          </OneCol>
          <BgImageWrapper bgColor="blue">
            <TwoCol>
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="3x4"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482748/00006854_0002_ov5jy9.jpg"
                alt="Black and white image of a building featuring a broken roof, where fragments have fallen onto a different part of the structure."
                caption="Damage to Encina Hall from the Loma Prieta earthquake, 1989. Faculty from the John A. Blume Earthquake Engineering Center led teams that inspected all campus buildings after the quake hit on October 17. Altogether, more than 200 buildings sustained damage, some beyond repair. Building restoration took more than a decade to complete and cost nearly $160 million. | Special Collections & University Archives."
              />
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="4x3"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482751/fn928pv3867_cea6di.jpg"
                alt="A black and white photo of a library featuring fallen bookshelves and books scattered on the floor."
                caption="Damage to a library following the Loma Prieta earthquake in 1989. More than 750,000 books were salvaged at campus libraries following the quake. The west wing of Green Library was the hardest hit. | David C. Weber/Special Collections & University Archives."
              />
            </TwoCol>
          </BgImageWrapper>
          <TwoCol isSidebar>
            <OneCol>
              <H2>New directions in funding</H2>
              <Text>
                Early proponents of artificial intelligence Edward Feigenbaum,
                professor of computer science, and Dabbala Rajagopal “Raj” Reddy
                (PhD ’66), an assistant professor at Stanford until 1969,
                jointly received the 1994 A.M. Turing Award for “pioneering the
                design and construction of large scale artificial intelligence
                systems.” At Stanford, Feigenbaum said, he was motivated to
                shift from studying how humans think to developing the
                technology for computers to think.(35)
              </Text>
              <Text>
                In electrical engineering, graduate students Jerry Yang and
                David Filo founded Yahoo! in 1994 to find and categorize sites
                on the early World Wide Web. “We were just trying to take all
                that stuff and organize it to make it useful,” Filo said. With
                the help of venture funding, Yahoo! would become a major
                Internet media company.
              </Text>
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="1x1"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482749/jx362js8604_m05akb.jpg"
                alt="Two men pose together in front of a Yahoo logo and website screenshots."
                caption="Electrical engineering graduate students and Yahoo! founders David Filo (left) and Jerry Yang, 1994. They created a website that served as a directory of the nascent World Wide Web. By autumn 1994, the site, run by servers in a campus trailer, handled a million hits a day. The following year, venture funding helped launch Yahoo! into a major internet company. | School of Engineering."
              />
              <Text>
                So much had been accomplished in the school’s seventh decade,
                yet still greater heights lay ahead: world-changing innovations,
                major leadership changes, new departments, new buildings, new
                records in fundraising, and a forty-year effort finally lifting
                off for outer space.
              </Text>
            </OneCol>
            <StorySidebar hasLineArt>
              <MediaCaptionImage
                rounded
                isCaptionInset
                isPortrait
                aspectRatio="1x1"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1748482750/fs075wb6787_kdhlkw.jpg"
                alt="A man in a suit jacket and glasses."
                caption="Edward Feigenbaum, corecipient with Dabbala Rajagopal “Raj” Reddy of the 1994 A. M. Turing Award for their work in artificial intelligence, 1966. At the suggestion of Nobel Prize–winner Joshua Lederberg, Feigenbaum developed a way to predict the structure of chemical compounds. He went on to develop programs in other areas of molecular biology, medicine, and defense, among other fields. | School of Engineering."
              />
            </StorySidebar>
          </TwoCol>
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
