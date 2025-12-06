import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { Quote } from "@/components/Quote";
import {
  BgImageWrapper,
  ExploreMore,
  StoryImpactBanner,
} from "@/components/Story";
import { H2, Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol, TwoCol } from "@/components/Layout";
import { storiesSource } from "@/utilities/storiesSource";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title:
    "Stanford GSB and the School of Engineering: A Shared Century of Innovation | 100 Years of Stanford Engineering",
  description:
    "As Stanford’s Graduate School of Business and School of Engineering mark their mutual centennials this year, each is celebrating more than their simultaneous 1925 launches. Over their shared history, the two schools have been variously linked through their values, programs, and people. Led from the start by adventurous Californians who shared a taste for challenge and risk, both schools forged new ways of teaching young leaders and together established complementary cultures of innovation and entrepreneurship that endure to this day.\n\nA pioneering zeal and a desire to build community helped put the region on the map and impacted Stanford’s trajectory, says Charles Eesley, professor of management science and engineering and faculty director of the Stanford Technology Ventures Program. “I think that’s what forms the cornerstone of the entrepreneurial mindset around Silicon Valley, which really distinguishes it from a lot of other places,” he says. “The magic of Stanford and Silicon Valley is that so many alums from both the GSB and the School of Engineering want to help the next generation, either within their own companies, by helping them start their own firms, or by coming back into our classrooms.”",
  keywords: [
    "Stanford Engineering",
    "Stanford GSB",
    "Centennial Celebration",
    "Innovation",
    "Entrepreneurship",
    "Silicon Valley",
    "Charles Eesley",
    "Stanford Technology Ventures Program",
    "Leadership",
    "Community Building",
  ],
  openGraph: {
    title:
      "Stanford GSB and the School of Engineering: A Shared Century of Innovation | 100 Years of Stanford Engineering",
    description:
      "As Stanford’s Graduate School of Business and School of Engineering mark their mutual centennials this year, each is celebrating more than their simultaneous 1925 launches. Over their shared history, the two schools have been variously linked through their values, programs, and people. Led from the start by adventurous Californians who shared a taste for challenge and risk, both schools forged new ways of teaching young leaders and together established complementary cultures of innovation and entrepreneurship that endure to this day.\n\nA pioneering zeal and a desire to build community helped put the region on the map and impacted Stanford’s trajectory, says Charles Eesley, professor of management science and engineering and faculty director of the Stanford Technology Ventures Program. “I think that’s what forms the cornerstone of the entrepreneurial mindset around Silicon Valley, which really distinguishes it from a lot of other places,” he says. “The magic of Stanford and Silicon Valley is that so many alums from both the GSB and the School of Engineering want to help the next generation, either within their own companies, by helping them start their own firms, or by coming back into our classrooms.”",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1764957043/key-8_Decade1_v2_xgunpi.jpg",
        alt: "Aerial view of the Stanford campus, facing south, circa 1925",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Stanford GSB and the School of Engineering: A Shared Century of Innovation | 100 Years of Stanford Engineering",
    description:
      "As Stanford’s Graduate School of Business and School of Engineering mark their mutual centennials this year, they celebrate shared history, values, programs, and cultures of innovation and entrepreneurship. Learn more about the impact made by adventurous leaders and the collaborative spirit enduring to this day.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1764957043/key-8_Decade1_v2_xgunpi.jpg",
    ],
  },
};

const exploreStoriesData = [
  storiesSource.decade1,
  storiesSource.storyInnovation,
  storiesSource.decade5,
];

export default function page() {
  const extLink =
    "transition-all ease-in-out duration-1000 underline text-stone-dark hocus:text-digital-red hocus:decoration-digital-red";
  return (
    <>
      <Masthead logoColor="white-red" isOverlap isBgDark />
      <main id="main-content" tabIndex={-1}>
        <article>
          <StoryImpactBanner
            isVertical
            isImageWide
            hasBgImage
            disablePager
            bgColor="stone-dark"
            heading="Stanford GSB and the School of Engineering: A Shared Century of Innovation"
            body="100 years on, each school retains the pioneer mindset that changed the way the professions were taught"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1764957043/key-8_Decade1_v2_xgunpi.jpg"
            alt="Aerial view of the Stanford campus, facing south, circa 1925"
            caption="Aerial view of the Stanford campus, facing south, circa 1925. | Berton W. Crandall Photographs, Hoover Institution Library & Archives"
          />

          <div className="cc">
            <Text mb={6}>By Beth Jensen </Text>
          </div>
          <OneCol className="rs-mt-5">
            <Text variant="overview" className="cen-drop-cap">
              As Stanford’s Graduate School of Business and School of
              Engineering mark their mutual centennials this year, each is
              celebrating more than their simultaneous 1925 launches. Over their
              shared history, the two schools have been variously linked through
              their values, programs, and people. Led from the start by
              adventurous Californians who shared a taste for challenge and
              risk, both schools forged new ways of teaching young leaders and
              together established complementary cultures of innovation and
              entrepreneurship that endure to this day.
            </Text>
            <Text>
              A pioneering zeal and a desire to build community helped put the
              region on the map and impacted Stanford’s trajectory, says Charles
              Eesley, professor of management science and engineering and
              faculty director of the{" "}
              <a className={extLink} href="https://stvp.stanford.edu/">
                Stanford Technology Ventures Program
              </a>
              . “I think that’s what forms the cornerstone of the
              entrepreneurial mindset around Silicon Valley, which really
              distinguishes it from a lot of other places,” he says. “The magic
              of Stanford and Silicon Valley is that so many alums from both the
              GSB and the School of Engineering want to help the next
              generation, either within their own companies, by helping them
              start their own firms, or by coming back into our classrooms.”
            </Text>
          </OneCol>
          <Container>
            <Quote
              width="wide"
              quoteColor="red"
              body="The magic of Stanford and Silicon Valley is that so many alums from both the GSB and the School of Engineering want to help the next generation, either within their own companies, by helping them start their own firms, or by coming back into our classrooms."
              source="— Charles Eesley, Professor of Management Science and Engineering and Faculty Director of the Stanford Technology Ventures Program"
            />
          </Container>
          <OneCol className="rs-mt-5 rs-mb-6">
            <Text>
              Among those alumni is YouTube CEO Neal Mohan (BS ’96, MBA ’05),
              who returned to Stanford GSB for his MBA seven years after
              receiving his undergraduate degree in electrical engineering.
            </Text>
            <Text>
              “I was lucky to receive a fantastic engineering education at
              Stanford, and I wanted to augment it with a business education,”
              he says. “I’m an entrepreneur at heart and was always interested
              in leading a technology company. That was a big driver behind my
              desire to go back to business school and particularly to Stanford,
              because it’s in the heart of Silicon Valley and is a deep research
              institution that also offers practical business experience and
              knowledge along with a firm grounding in first principles. In a
              changing world, those principles are the things that remain
              constant.”
            </Text>
            <Text>
              Stanford students, faculty, and alumni like Mohan are the energy
              powering the innovation and entrepreneurship that has flourished
              at each school for decades, says Stefanos Zenios, the Investment
              Group of Santa Barbara Professor of Entrepreneurship and Professor
              of Operations, Information & Technology, who also serves as
              faculty director of Stanford GSB’s Center for Entrepreneurial
              Studies.
            </Text>
            <Quote
              width="narrow"
              quoteColor="red"
              body="I was lucky to receive a fantastic engineering education at Stanford, and I wanted to augment it with a business education...."
              source="— YouTube CEO Neal Mohan (BS ’96, MBA ’05)"
              className="rs-mb-5 mx-auto"
            />
            <Text>
              “Stanford is a research institution, and one of the main goals of
              research is to generate knowledge that improves overall social
              welfare,” he says. “We take that knowledge and train students, who
              then take it out into the world and apply it. Oftentimes, they do
              so by turning that knowledge into commercially viable ventures.
              Many times, they then take what they’ve learned through that
              process and bring it back to us, talking to our faculty and in our
              classes. This fuels our investment in further research and
              educational programs so that the next generation of students is
              even more educated about new ventures and can tap into a broader
              research ecosystem.”
            </Text>
          </OneCol>
          <Container>
            <MediaCaptionImage
              rounded
              aspectRatio="8x5"
              className="max-w-900 mx-auto"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1764957044/supporting-1-MAP0015_1_jjsvzp.jpg"
              alt="Black and white photo of nine men in vintage suits and hats; some seated and others standing against a stone wall with ivy."
              caption="Herbert Hoover (second from left) was a key figure in the founding of Stanford GSB. | GSB Archives"
            />
          </Container>
          <OneCol>
            <H2>A Shared History</H2>
            <Text>
              In 1925, California seemed like a place and a time where anything
              was possible.
            </Text>
            <Text>
              Only seven years after the armistice that ended World War II, the
              state was in the midst of great change. Industry — manufacturing,
              construction, agriculture, and petroleum — was booming, there was
              a technological revolution, and prosperity was on the rise.
              California’s surging industries, increasingly vital ports, and
              growing cities required more professional business managers and
              industry experts to lead that expansion. Stanford leadership
              realized the university must help educate this new generation of
              leaders.
            </Text>
            <Text>
              Prior to 1925, Western business students had traveled east for a
              graduate education, often not returning to the region; Harvard was
              the only school in the U.S. to offer an MBA. “A graduate School of
              Business Administration is urgently needed upon the Pacific
              Coast,” wrote Secretary of Commerce Herbert Hoover (Class of 1895)
              to a Stanford trustee in 1924.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol className="rs-mt-3 rs-mb-6">
            <Text>
              Hoover devised a decidedly startup solution: pushing for and
              receiving support from scores of well-placed Pacific Coast
              businessmen and firms to finance a graduate school of business at
              Stanford. It would take barely a year for Stanford GSB to open,
              with its inaugural complement of 16 MBA students and two faculty
              members operating in two classrooms next to the biology labs on
              the first floor of Jordan Hall.
            </Text>
            <Text>
              Hoover devised a decidedly startup solution: pushing for and
              receiving support from scores of well-placed Pacific Coast
              businessmen and firms to finance a graduate school of business at
              Stanford. It would take barely a year for Stanford GSB to open,
              with its inaugural complement of 16 MBA students and two faculty
              members operating in two classrooms next to the biology labs on
              the first floor of Jordan Hall.
            </Text>
            <Text>
              Designed to help students expand their worldview and better
              evaluate their aptitude for engineering, it prioritized the
              creation of a new type of engineer: a highly skilled technical
              professional equally capable of managing, directing, and — perhaps
              most important — leading the innovation essential to the nation’s
              economy.
            </Text>
            <Text>
              It was the school’s third dean, Frederick Terman — often called
              “the father of Silicon Valley” — who was instrumental in forging
              the close connection between Stanford Engineering and industry,
              transforming Stanford from a regional university into a global
              innovation hub. Terman urged his engineering students to apply
              their research to real-world problems and launch startups.
              Notably, he mentored William Hewlett (BA ’34, MS Electrical
              Engineering ’39) and David Packard (BA ’34, MS Electrical
              Engineering ’39), helping them found Hewlett-Packard (HP) in a
              Palo Alto garage and locate their business in the new Stanford
              Industrial Park — an early foundation of Silicon Valley’s startup
              culture.
            </Text>
          </OneCol>
          <BgImageWrapper
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1764957043/key-8_Decade1_v2_xgunpi.jpg"
          >
            <TwoCol className="justify-center">
              <MediaCaptionImage
                animation="slideUp"
                isCaptionInset
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906509/kn908nr7305_ffxjaj.jpg"
                alt="Vintage portrait of Frederick Terman"
                caption="Frederick Terman became head of the Department of Electrical Engineering in 1937. He served as dean of the School of Engineering from 1944 to 1958 and as provost of the university from 1955 to 1965. | Special Collections & University Archives, Stanford University Libraries"
              />
              <MediaCaptionImage
                animation="slideUp"
                delay={0.3}
                className="mt-0 lg:rs-mt-8"
                isCaptionInset
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1764957043/supporting-3-2019_10_18_Stanford-140_mywcvu.jpg"
                alt="A man in a suit and tie stands in front of a whiteboard, holding papers and gesturing as he speaks."
                caption="Stanford GSB Professor H. Irving Grousbeck — shown here teaching a management class in 2018 — was instrumental in bringing technology and engineering practitioners into the classroom as part of a co-teaching model. | Elena Zhukova"
              />
            </TwoCol>
          </BgImageWrapper>
          <OneCol className="rs-mt-6">
            <Text>
              The business school also focused on educating future leaders of
              industry, many of whom would face new challenges spawned by
              California’s booming economy. “The Western portion of the United
              States has business problems in many ways unlike those in other
              parts of the country,” wrote Wilbur in the 1925 report of the
              president. “The position of Stanford University in the
              intellectual life of the nation gives it a favorable setting in
              which to develop on the Pacific Coast an effective program of
              advanced business education and research.”
            </Text>
            <Text>
              In the 1930s, Dean Jacob Hugh Jackson brought business leaders
              into Stanford GSB as lecturers and advisors, sharing industry
              knowledge with students in collaboration with professors teaching
              foundational business elements informed by faculty research. The
              model was further honed in the 1990s under the stewardship of H.
              Irving Grousbeck, the MBA Class of 1980 Adjunct Professor of
              Management. Grousbeck developed an entrepreneurship curriculum,
              and along with Charles Holloway, the Kleiner Perkins Caufield &
              Byers Professor of Management, Emeritus, created a co-teaching
              model that brought together faculty and practitioners in the same
              classroom — many of whom had technology and engineering
              backgrounds themselves.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mt-3">
            <Text>
              Thus over the course of the century — through the Depression,
              wartime, the rise of Silicon Valley, and a global pandemic — the
              two schools would find common ground and connection, thanks in
              part to the thirst for innovation that was integral to the
              founding of the university itself, says Eesley.
            </Text>
            <Text>
              “Bill Miller, in writing the history of Silicon Valley, traced the
              entrepreneurial mindset at both Stanford and Silicon Valley to the
              fact that the people who founded the university were pioneers, and
              had the characteristics of pioneers,” he said, referencing his
              former colleague, the respected Stanford provost, entrepreneur,
              and Silicon Valley scholar. “They were adventurous and willing to
              take risks in search of reward.”
            </Text>
            <H2>Sowing the Seeds of Entrepreneurship</H2>
            <Text>
              That same entrepreneurial mindset — along with his dual background
              in engineering and business — has been key to Neal Mohan’s
              success, he says. “YouTube is fundamentally a technology company,
              where I have to make product and strategy decisions rooted in deep
              technological knowledge, and collaborate at the cutting edge of
              AI, the mobile ecosystem, and the internet,” Mohan states. “But we
              are, of course, a business, and responsible for an enormous
              creator economy. If your aspiration is to be an entrepreneur or a
              leader in business, having broad cross-disciplinary experience and
              exposure is critical because the environment today is so dynamic.
              I draw on that breadth of knowledge with every decision I make and
              every scenario I face.”
            </Text>
            <Text>
              For those desiring a formalized interdisciplinary experience, the
              two schools have collaborated to offer joint MS/MBA degrees in{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/programs/mba/academic-experience/joint-dual-degrees/ms-cs"
              >
                computer science
              </a>{" "}
              and{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/programs/mba/academic-experience/joint-dual-degrees/ms-ee"
              >
                electrical engineering
              </a>
              . Highly rigorous, the three-year programs require participants to
              be admitted to both Stanford GSB and the School of Engineering,
              and most commonly attract students with an undergraduate
              engineering degree who envision careers in technical management,
              says Mehran Sahami, the James and Ellenor Chesebrough Professor in
              the School of Engineering and Tencent Chair of the Computer
              Science Department, who helped develop the CS/MBA joint degree
              program that launched in 2014.
            </Text>
            <Text>
              “The idea behind the development of the joint programs was that
              the combination of technical skills and business skills is very
              powerful, especially here in the heart of Silicon Valley,” Sahami
              says. “It’s important for people taking leadership roles in the
              management of technology to understand the details of what that
              technology can and can’t do. These joint programs provide
              expertise on both sides.”
            </Text>
            <Quote
              className="mx-auto rs-mb-5"
              width="narrow"
              quoteColor="red"
              body="The idea behind the development of the joint programs was that the combination of technical skills and business skills is very powerful, especially here in the heart of Silicon Valley..."
              source="— Mehran Sahami, James and Ellenor Chesebrough Professor in the School of Engineering and Tencent Chair of the Computer Science Department"
            />
          </OneCol>
          <Container>
            <MediaCaptionImage
              isParallax
              animation="sharpen"
              rounded
              aspectRatio="16x9"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1764957045/supporting-7-Sahami-Stanford_SOE-605_l68gmx.jpg"
              alt="A professor teaches a large college lecture in a tiered classroom filled with students, many using laptops. A periodic table and whiteboards are visible at the front."
              caption="Professor Mehran Sahami teaches a cohort of students in CS106, the very popular introductory to computer science course in Stanford Engineering. | Courtesy of School of Engineering"
              className="max-w-1500 mx-auto rs-mb-5"
            />

            <MediaCaptionImage
              isParallax
              animation="sharpen"
              rounded
              aspectRatio="16x9"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1764957044/supporting-4-Olav-2023_08_11_095652_jtwcpa.jpg"
              alt="Four men intensely focus on a complex machine with wires and screens, exuding curiosity and teamwork in a dimly lit lab setting."
              caption="Professor Olav Solgaard and fellow researchers develop photonic sensors and sensor platforms with applications in communication, environmental monitoring, imaging, and optical manipulation. Solgaard helped establish the joint Electrical Engineering and Business degree program in 2013. | Courtesy of School of Engineering"
              className="max-w-1500 mx-auto rs-mb-5"
            />
          </Container>
          <OneCol>
            <Text>
              The establishment of the joint degree programs has strengthened
              the relationship between the two schools, says Olav Solgaard, the
              Robert L. and Audrey S. Hancock Professor in the School of
              Engineering, who was director of graduate studies for the
              Department of Electrical Engineering when the dual degree was
              established in 2013.
            </Text>
            <Text>
              “The connection between the business and engineering world is a
              natural one, and one that’s grown stronger here at Stanford with
              this joint degree collaboration,” he says. “It might seem as if
              people in electrical engineering are very different from those in
              the business school, but those mindsets fit together very well,
              and having both those backgrounds creates something very unique
              and very much needed. These students can be leaders in a
              knowledgeable way.”
            </Text>
          </OneCol>
          <Container className="flex justify-end rs-mb-6">
            <Quote
              width="wide"
              quoteColor="red"
              body="It might seem as if people in electrical engineering are very different from those in the business school, but those mindsets fit together very well, and having both those backgrounds creates something very unique and very much needed."
              source="— Olav Solgaard, the Robert L. and Audrey S. Hancock Professor in the School of Engineering, who was director of graduate studies for the Department of Electrical Engineering when the dual degree was established in 2013"
            />
          </Container>
          <OneCol>
            <Text>
              Megan Fazio (MBA ’17, MS ’18 Eng), a product manager at Google
              working on Google Lens, graduated from Harvard University in 2013
              with an undergraduate degree in electrical engineering and
              computer science. She worked for two years as a hardware engineer
              at NASA’s Jet Propulsion Laboratory before deciding she wanted to
              deepen her technical knowledge.
            </Text>
            <Text>
              “When I learned about the joint program at Stanford, it clicked
              with me,” she says. “It felt like the perfect bridge between the
              technical problem-solving I love and the leadership and
              organizational challenges I wanted to take on. Professionally,
              it’s been transformative. In my work now, I sit at the
              intersection of engineering, design, and business strategy every
              day. My engineering background allows me to communicate
              effectively with technical teams and deeply understand the
              underlying technology in our products. My business education helps
              me connect those technical capabilities to user needs and our
              broader company and organizational strategy. I’ve also learned how
              to navigate ambiguity and lead through collaboration. The joint
              program brought all of that together.”
            </Text>
          </OneCol>
          <Container>
            <Quote
              width="wide"
              quoteColor="red"
              body="When I learned about the joint program at Stanford, it clicked with me,” she says. “It felt like the perfect bridge between the technical problem-solving I love and the leadership and organizational challenges I wanted to take on. Professionally, it’s been transformative. In my work now, I sit at the intersection of engineering, design, and business strategy every day."
              source="— Megan Fazio, MBA ’17, MS ’18 Eng"
            />
          </Container>
          <OneCol className="rs-mb-5">
            <H2>An Interdisciplinary Approach</H2>
            <Text>
              At the GSB’s Center for Social Innovation, director Matthew Nash
              sees a growing number of students intrigued by the intersection of
              engineering, business, and social/environmental issues.
            </Text>
            <Text>
              “Both the GSB and the School of Engineering are fundamentally
              about solving important problems,” he says. “Engineering students
              have an interest in design, the problem-solving process, and in
              engineering better products, and a growing number of business
              students are interested in using the tools of business —
              marketing, strategy, operations — to solve important problems that
              go beyond the traditional commercial business-type problems.”
            </Text>
            <Text>
              Resources range from major academic centers, including{" "}
              <a className={extLink} href="https://stvp.stanford.edu/">
                Stanford Technology Ventures Program
              </a>{" "}
              (STVP), the{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces"
              >
                Center for Entrepreneurial Studies
              </a>{" "}
              (CES), and the{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/experience/about/centers-institutes/csi"
              >
                Center for Social Innovation
              </a>{" "}
              (CSI) to programs including{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/experience/learning/entrepreneurship/beyond-classroom/venture-studio"
              >
                Stanford Venture Studio
              </a>
              ,{" "}
              <a className={extLink} href="https://dschool.stanford.edu/">
                Stanford d.school
              </a>
              , the{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/experience/learning/entrepreneurship/beyond-classroom/botha-chan-innovation"
              >
                Botha Chan Innovation Program
              </a>
              , the{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/experience/learning/social-innovation/fellowships/idif"
              >
                Impact Design Immersion Fellowship
              </a>
              , and the{" "}
              <a
                className={extLink}
                href="https://stvp.stanford.edu/mayfield-fellows-program"
              >
                Mayfield Fellows program
              </a>
              .
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-2">
            <MediaCaptionImage
              rounded
              isCaptionInset
              animation="slideInFromLeft"
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1764957044/supporting-5-design_for_affordability-2018_05_14_Stanford_MBA-177_uinphc.jpg"
              alt="A group of three people collaborates in a bright room. One person writes on a whiteboard covered with sticky notes, while the others watch intently."
              caption={
                <>
                  Students participating in{" "}
                  <i>Design for Extreme Affordability</i>, a two-quarter
                  interdisciplinary course that helps solve real-world issues,
                  offered by the Stanford d.school. | Elena Zhukova
                </>
              }
            />
            <MediaCaptionImage
              rounded
              isCaptionInset
              animation="slideInFromRight"
              delay={0.3}
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1764957045/supporting-6-Start-Up_Garage-74_o5brwz.jpg"
              alt="A group collaborates around a table covered with sticky notes and papers. A man stands, listening intently."
              caption={
                <>
                  Professor Stefanos Zenios with students in 2016 in{" "}
                  <i>Startup Garage</i>, a hands-on course that empowers
                  students to test and develop concepts with practical impact. |
                  GSB Archives
                </>
              }
            />
          </TwoCol>
          <OneCol>
            <Text>
              Students can also participate in dozens of cross-disciplinary
              courses, including{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/experience/learning/entrepreneurship/courses/formation-new-ventures"
              >
                Formation of New Ventures
              </a>
              , a case-based course where faculty and successful entrepreneurs
              teach students about the myriad issues faced by all new founders;{" "}
              <a className={extLink} href="https://extreme.stanford.edu/">
                <i>Design for Extreme Affordability</i>
              </a>
              , a two-quarter course bringing together students from across
              disciplines to work with social sector partners and vulnerable
              communities on real-world problems; and{" "}
              <a
                className={extLink}
                href="https://www.gsb.stanford.edu/experience/learning/entrepreneurship/courses/startup-garage"
              >
                Startup Garage
              </a>
              , an intensive and hands-on course taught by expert faculty and
              seasoned advisors allowing student teams to design and test new
              business concepts addressing real-world needs. Among the companies
              created in Startup Garage are DoorDash, Zum, and Gold Leaf
              Farming.
            </Text>
            <Text>
              “At the end of the day, these courses and programs are all
              designed to teach an entrepreneurial mindset that will help our
              students succeed whether they go on to start ventures, join new or
              growing ventures, or join mature companies, because even mature
              companies need to transform and evolve,” says CES faculty director
              Stefanos Zenios. “This is an ecosystem of entrepreneurship
              programs, all of which encourage us to talk with each other and
              learn from each other.”
            </Text>
            <Text>
              Entrepreneurship centers such as STVP — which conducts
              interdisciplinary research on technology entrepreneurship and
              innovation, and provides classes and networking for students from
              all disciplines — play an important role in encouraging that
              cross-disciplinary approach, says Eesley.
            </Text>
            <Text>
              “I think all these collaborations are made possible, at least in
              part, because there are very low barriers across various
              departments at Stanford in general, and bringing people together
              across disciplines and departments is baked into the structure of
              these programs,” he says. “At STVP, we watch what the CES and GSB
              are doing, and they watch us. That healthy rivalry pushes all of
              us to make sure we keep innovating and doing better by the
              students.”
            </Text>
            <Text>
              Business students at Stanford GSB, like their Stanford Engineering
              counterparts, are increasingly interested in developing the dual
              business and technical skills required of not just business
              leaders, but company founders, says Deb Whitman, director of the
              Center for Entrepreneurial Studies at the business school.
            </Text>
            <Text>
              “There is a deep interest in entrepreneurship by students at both
              the GSB and the School of Engineering,” says Whitman. “It can be
              particularly powerful when they work together. Both the schools
              and student clubs frequently test out new ideas to help make that
              happen. We encourage interested business students to take a class
              at the School of Engineering to get to know engineering students,
              and have engineering students doing the same thing here.”
            </Text>
            <Text>
              The online{" "}
              <a
                className={extLink}
                href="https://teamformationhub.stanford.edu/"
              >
                Team Formation Hub
              </a>{" "}
              is a useful resource for finding students with similar
              entrepreneurial interests and complementary skillsets, says
              Whitman, as are the multiple team-formation sessions hosted across
              campus each year and the annual{" "}
              <a className={extLink} href="https://treehacks.com/">
                TreeHacks session
              </a>
              .
            </Text>
            <Text>
              “Our goal is to ensure our entrepreneurially minded alumni leave
              here having learned how to assess whether an idea for a startup
              makes sense,” she says. “If they leave here and pick an idea that
              doesn’t work, they can waste critical years of their careers. We
              try to send people out the doors having learned from prior
              entrepreneurs, from investors in this space, and from faculty
              members who’ve done research in this field, so our alumni will be
              better prepared to make good decisions if they choose to start a
              new venture or even to work on new innovations within existing
              companies.”
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol>
            <H2>Connections to Meet a Changing World</H2>
            <Text>
              The connections that link the two schools are particularly
              valuable now, as traditional business practices and roles in
              Silicon Valley’s tech industry continue to shift, says Mehran
              Sahami.
            </Text>
            <Text>
              “Venture formation in the tech sector has evolved to the point
              where increasingly the people doing the financing aren’t
              necessarily coming from traditional finance backgrounds, and some
              of the people working in tech aren’t coming from traditional tech
              backgrounds,” he says. “Here at Stanford, we have world-class
              programs among several disciplines, and an ability to combine them
              together to provide new insights and new directions forward. It’s
              a combination of skills coming together, and it’s a powerful thing
              that’s endemic to Stanford.”
            </Text>
            <Text>
              The pioneering mindset of innovation and problem-solving that
              launched each school a century ago — and their growing network of
              connections — is perhaps more relevant today than ever before,
              says Fazio.
            </Text>
            <Text>
              “We’re at a point where technology and society are deeply
              intertwined, and the world’s biggest challenges – from AI ethics
              to climate technology – don’t belong to a single discipline,” she
              says. “Regardless of what industry or field you are in,
              understanding both how technology works and why it matters is
              crucial. Expertise in both engineering and business is what
              enables leaders to connect innovation with real-world impact. It’s
              what helps teams make tradeoffs thoughtfully, communicate
              effectively across disciplines, and build things that are not just
              technically impressive, but genuinely useful and sustainable.”
            </Text>
          </OneCol>
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
