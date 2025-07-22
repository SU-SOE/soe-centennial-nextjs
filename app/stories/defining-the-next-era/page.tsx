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
import { H2, Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol, TwoCol } from "@/components/Layout";
import { storiesSource } from "@/utilities/storiesSource";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { TimelineCard } from "@/components/Timeline";
import { AnimatedPosterCard } from "@/components/AnimatedHero";
import { Container } from "@/components/Container";
import { DecadePager, PageTransitionWrapper } from "@/components/DecadePager";

export const metadata: Metadata = {
  title: "Defining the next era | 100 Years of Stanford Engineering",
  description:
    "Dean Persis Drell reported in a 2015 assessment that the School of Engineering was in “remarkable” shape—blessed with stunning new facilities, incredible faculty, and amazing students. Such accomplishments should be acknowledged and not taken for granted, she said, but the school’s real focus should be on the future. Drell announced that she had appointed a faculty committee, co-led by then–Senior Associate Dean Jennifer Widom and Arun Majumdar, professor of mechanical engineering, to plot what that future would look like.",
  keywords: [
    "Stanford Engineering",
    "Persis Drell",
    "Future Planning",
    "Engineering Assessment",
    "Jennifer Widom",
    "Arun Majumdar",
    "Remarkable Shape",
    "Innovation",
  ],
  openGraph: {
    title: "Defining the next era | 100 Years of Stanford Engineering",
    description:
      "Dean Persis Drell reported in a 2015 assessment that the School of Engineering was in “remarkable” shape—blessed with stunning new facilities, incredible faculty, and amazing students. Such accomplishments should be acknowledged and not taken for granted, she said, but the school’s real focus should be on the future. Drell announced that she had appointed a faculty committee, co-led by then–Senior Associate Dean Jennifer Widom and Arun Majumdar, professor of mechanical engineering, to plot what that future would look like.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751294123/WelcomeDay_GroupPhotos_9.26.24_01_O5A0256_msl1am.jpg",
        alt: "Dean Jennifer Widom surrounded by a group of students, all wearing matching red Stanford Engineering t-shirts and waving to the camera.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Defining the next era | 100 Years of Stanford Engineering",
    description:
      "Dean Persis Drell reported in a 2015 assessment that the School of Engineering was in “remarkable” shape—blessed with stunning new facilities, incredible faculty, and amazing students. She emphasized the need to focus on the future with the help of a faculty committee led by Jennifer Widom and Arun Majumdar.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1751294123/WelcomeDay_GroupPhotos_9.26.24_01_O5A0256_msl1am.jpg",
    ],
  },
};

const exploreStoriesData = [
  storiesSource.decade1,
  storiesSource.storyInnovation,
  storiesSource.decade9,
];

const footnotesList = [
  {
    number: 1,
    id: "footnote1",
    text: "Persis Drell, “The School of Engineering Is in Remarkable Shape. Where Do We Go from Here?” Stanford Engineering, January 2015.",
    sourceLink:
      "https://engineering.stanford.edu/school-engineering-remarkable-shape-where-do-we-go-here",
  },
  {
    number: 2,
    id: "footnote2",
    text: "Tom Abate, “What Does the Great Engineering School of the Future Look Like?” Stanford Report, January 8, 2016.",
    sourceLink:
      "https://news.stanford.edu/stories/2016/01/soe-future-vision-010816",
  },
  {
    number: 3,
    id: "footnote3",
    text: "Persis Drell, “A Vision for the Future of Stanford Engineering,” Stanford Engineering, January 2016.",
    sourceLink:
      "https://engineering.stanford.edu/vision-future-stanford-engineering",
  },
  {
    number: 4,
    id: "footnote4",
    text: "Brad Hayward, “Persis Drell Named Stanford Provost,” Stanford Report, November 7, 2016.",
    sourceLink: "https://news.stanford.edu/stories/2016/11/campus-announcement",
  },
  {
    number: 5,
    id: "footnote5",
    text: "“Computer Scientist Jennifer Widom Named Dean of Stanford School of Engineering,” Stanford Engineering, February 27, 2017.",
    sourceLink:
      "https://engineering.stanford.edu/news/computer-scientist-jennifer-widom-named-dean-stanford-school-engineering",
  },
  {
    number: 6,
    id: "footnote6",
    text: "“Jennifer Widom: Key Priorities for the School of Engineering” (video), Stanford University School of Engineering YouTube, October 26, 2018.",
    sourceLink: "https://www.youtube.com/watch?v=4obILktc6N4",
  },
  {
    number: 7,
    id: "footnote7",
    text: "Andy Myers and Tom Abate, “Stanford SystemX Seeks to Make Information Technologies Even More Pervasive,” Stanford Report, March 9, 2015.",
    sourceLink:
      "https://news.stanford.edu/stories/2015/03/systemx-new-alliance-030915",
  },
  {
    number: 8,
    id: "footnote8",
    text: "Kathleen J. Sullivan, “Stanford Radio on SiriusXM Features ‘Living Room Conversations’ with Faculty,” Stanford Report, February 9, 2017.",
    sourceLink:
      "https://news.stanford.edu/stories/2017/02/stanford-radio-siriusxm-features-living-room-conversations-faculty",
  },
  {
    number: 9,
    id: "footnote9",
    text: "Amy Adams, “Stanford University Launches the Institute for Human-Centered Artificial Intelligence,” Stanford Report, March 18, 2019.",
    sourceLink:
      "https://news.stanford.edu/stories/2019/03/stanford_university_launches_human-centered_ai",
  },
  {
    number: 10,
    id: "footnote10",
    text: "Elena Kadvany, “Stanford Tells 7,000 Undergrads to Leave Campus; Class Will Be Online Only Next Quarter,” Palo Alto Online, March 6, 2020.",
    sourceLink:
      "https://www.paloaltoonline.com/news/2020/03/06/stanford-cancels-in-person-classes-two-students-possibly-exposed-to-coronavirus-in-self-isolation",
  },
  {
    number: 11,
    id: "footnote11",
    text: "“Ken Goodson: How the School of Engineering Is Taking On COVID-19,” Stanford Engineering, August 17, 2020.",
    sourceLink:
      "https://engineering.stanford.edu/news/ken-goodson-how-school-engineering-taking-covid-19",
  },
  {
    number: 12,
    id: "footnote12",
    text: "Chris Piech, Mehran Sahami, Julie Zelenski, and Lisa Einstein, “How We Got More Than 10,000 Students from 120 Countries to Embrace the Joy of Coding,” Scientific American, March 14, 2021.",
    sourceLink:
      "https://www.scientificamerican.com/article/how-we-got-more-than-10-000-students-from-120-countries-to-embrace-the-joy-of-coding",
  },
  {
    number: 13,
    id: "footnote13",
    text: "Andrew Myers, “Stanford 3D Computer Graphics Pioneer Pat Hanrahan Wins $1M Turing Award,” Stanford Report, March 18, 2020.",
    sourceLink:
      "https://news.stanford.edu/stories/2020/03/pat-hanrahan-wins-turing-award",
  },
  {
    number: 14,
    id: "footnote14",
    text: "Andrew Myers, “Stanford’s Jeffrey Ullman Receives ACM Turing Award,” Stanford Report, March 31, 2021.",
    sourceLink:
      "https://news.stanford.edu/stories/2021/03/jeffrey-ullman-receives-acm-turing-award",
  },
  {
    number: 15,
    id: "footnote15",
    text: "Taylor Kubota, “The Many Makerspaces of the Stanford Campus,” Stanford Report, December 9, 2019.",
    sourceLink:
      "https://news.stanford.edu/stories/2019/12/makerspaces-at-stanford",
  },
  {
    number: 16,
    id: "footnote16",
    text: "“125 Years of Making,” Stanford|125.",
    sourceLink: "https://125.stanford.edu/125-years-of-making",
  },
  {
    number: 17,
    id: "footnote17",
    text: "Stanford Product Realization Laboratory, “More Than a Century of Hands-On Learning.”",
    sourceLink: "https://productrealization.stanford.edu/about/history",
  },
  {
    number: 18,
    id: "footnote18",
    text: "“125 Years of Making,” Stanford|125.",
    sourceLink: "https://125.stanford.edu/125-years-of-making",
  },
  {
    number: 19,
    id: "footnote19",
    text: "Jaron Presant, director, Stanford Product Realization Lab: Transformation.",
    sourceLink: "https://vimeo.com/66198276",
  },
  {
    number: 20,
    id: "footnote20",
    text: "“making@stanford.”",
    sourceLink: "https://making.stanford.edu",
  },
  {
    number: 21,
    id: "footnote21",
    text: "Steven Collins, email to Julie Greicius, September 23, 2024.",
    sourceLink: "",
  },
  {
    number: 22,
    id: "footnote22",
    text: "Robin Wander, “A New Installation Brings Playful and Thought-Provoking Public Art to the Science and Engineering Quad,” Stanford Report, April 21, 2021.",
    sourceLink:
      "https://news.stanford.edu/stories/2021/04/alicja-kwade-site-specific-installation-stanford-science-engineering-quad-suggests-alternate-realities",
  },
  {
    number: 23,
    id: "footnote23",
    text: "Amy Adams and Anneke Cole, “Stanford Doerr School of Sustainability, University’s First New School in 70 Years, Will Accelerate Solutions to Global Climate Crisis,” Stanford Report, May 4, 2022.",
    sourceLink:
      "https://news.stanford.edu/stories/2022/05/stanford-doerr-school-sustainability-universitys-first-new-school-70-years-will-accelerate-solutions-global-climate-crisis",
  },
  {
    number: 24,
    id: "footnote24",
    text: "“Stanford School of Engineering and the Hoover Institution Unveil Stanford Emerging Technology Review,” Stanford Engineering, November 14, 2023.",
    sourceLink:
      "https://engineering.stanford.edu/news/stanford-school-engineering-and-hoover-institution-unveil-stanford-emerging-technology-review",
  },
  {
    number: 25,
    id: "footnote25",
    text: "Stanford Robotics Center.",
    sourceLink: "https://src.stanford.edu",
  },
  {
    number: 26,
    id: "footnote26",
    text: "Computing and Data Science (CoDa) building, Stanford Engineering.",
    sourceLink:
      "https://engineering.stanford.edu/get-involved/support-engineering/funding-initiatives/computing-and-data-science-coda",
  },
];

export default function page() {
  return (
    <PageTransitionWrapper>
      <Masthead logoColor="white-red" isOverlap isBgDark />
      <main id="main-content">
        <article>
          <StoryImpactBanner
            isVertical
            hasBgImage
            bgColor="stone-dark"
            chapter="Decade 10"
            heading="Defining the next era"
            dek="2015 – 2025"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294123/WelcomeDay_GroupPhotos_9.26.24_01_O5A0256_msl1am.jpg"
            alt="A diverse group of smiling individuals wearing red Stanford Engineering T-shirts wave at the camera."
            caption="Dean Jennifer Widom, center, with new graduate students at the Dean’s Welcome event, September 2024. | Saul Bromberger/Stanford Engineering."
          />
          <div className="max-w-1500 w-full cc 3xl:p-0">
            <Text mb={6}>by Andrew Myers</Text>
          </div>
          <TwoCol>
            <Quote
              quoteColor="red"
              body="Our school’s legacy of innovation and crossdisciplinary collaboration, spanning from the birth of Silicon Valley to groundbreaking advancements in human health, sets us apart and paves the way for tremendous impact."
              source="— Dean Jennifer Widom, 2023"
            />
            <OneCol>
              <H2 className="mt-0">2015 – 2025</H2>
              <Text>
                Dean Persis Drell reported in a 2015 assessment that the School
                of Engineering was in “remarkable” shape—blessed with stunning
                new facilities, incredible faculty, and amazing students. Such
                accomplishments should be acknowledged and not taken for
                granted, she said, but the school’s real focus should be on the
                future. Drell announced that she had appointed a faculty
                committee, co-led by then–Senior Associate Dean Jennifer Widom
                and Arun Majumdar, professor of mechanical engineering, to plot
                what that future would look like.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote1", number: 1 }]} />
              </Text>
              <Text>
                “If you want to sum up our committee’s work in two words, they
                would be ‘enabling impact,’ ” Widom said. The work should begin
                at home, in greater collaboration with other Stanford schools,
                said Majumdar, but not exclusively. “We need a way to reach
                outside Stanford, perhaps outside of academia,” he said, “to
                bring the brightest minds together in teams to focus on the
                toughest challenges.”{" "}
                <Footnotes
                  footnoteRefs={[
                    { id: "footnote2", number: 2 },
                    { id: "footnote3", number: 3 },
                  ]}
                />
              </Text>
              <Text>
                SoE-Future, as the planning process became known, would lead to
                the establishment of a new research funding program to drive
                ever-broader interdisciplinary research, dubbed the “Catalyst
                for Collaborative Solutions,” and would suggest innovative ways
                to educate a new generation of engineering students, among many
                other recommendations across research, education, and culture.
              </Text>
            </OneCol>
          </TwoCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <MediaCaptionImage
            rounded
            isParallax
            aspectRatio="8x5"
            className="cc mx-auto w-full 2xl:max-w-1200 2xl:p-0 rs-mt-3 rs-mb-5"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294106/3d-bioprinting_ymve5o.jpg"
            alt="An injection needle extends below the arm of a 3D printer and hovers over a clear block with orange vein-like contents."
            caption="A 3D bioprinter in Mark Skylar-Scott’s lab prints a sample of heart tissue, 2022. | Andrew Brodhead/Stanford University Communications."
          />
          <TwoCol className="rs-mb-5" isSidebar>
            <OneCol>
              <H2 className="mt-0">The tenth dean</H2>
              <Text>
                Persis Drell’s accomplishments as dean made a strong impression
                outside the school. In November 2016, just two years into her
                deanship, Drell was appointed provost, the university’s top
                academic and budgetary role, to be effective in February 2017.
                <Footnotes
                  footnoteRefs={[{ id: "footnote4", number: 4 }]}
                />{" "}
                Senior Associate Dean Thomas Kenny became interim dean upon
                Drell’s departure.
              </Text>
              <Text>
                In March 2017, Provost Drell named Jennifer Widom the next dean
                of the School of Engineering. Widom was a professor of computer
                science and electrical engineering, an expert in data and
                information management, and a pioneer in online engineering
                education. On the faculty for twenty-seven years, Widom was a
                research leader in systems for managing nontraditional types of
                data, including active databases, semi-structured data, data
                streams, uncertain data, and data provenance.
              </Text>
              <Text>
                Widom had also organized and taught one of Stanford’s first
                massive open online courses (MOOCs) and was just returning from
                a sabbatical year spent traveling the world teaching free
                data-science and design-thinking workshops in more than fifteen
                developing countries around the globe, including Peru, Tanzania,
                and Bangladesh. At home, she had been instrumental in shaping
                the SoE-Future initiative and was fully ready to pick up where
                Drell had left off to lead the school into the future.
              </Text>
              <Text>
                “This is an amazing time to be taking the reins of the School of
                Engineering, just as the university is embarking on its own
                long-range planning under a new administration,” Widom said.
                “While Persis was dean, a number of exciting initiatives were
                launched as a result of the SoE-Future planning process, and I’m
                extremely excited to see them through.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} />
              </Text>
              <Text>
                One of these was the initiative to improve diversity at all
                levels, from undergraduates to faculty, which Widom viewed as
                having beneficial results across all aspects of the School of
                Engineering. Diversity in the classroom produces better
                discussions, she said. In labs, it produces better research and
                better outcomes. And, with faculty, diversity leads to a wider
                variety of role models and mentors.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} />
              </Text>
              <Text>
                Widom also saw abundant opportunities outside the school and
                looked to strengthen connections to Stanford’s other schools
                across the campus, beyond the strong ties it already had with
                medicine and other sciences. The impacts between technology and
                society were increasingly important, Widom noted, and building
                collaborations with the School of Humanities and Sciences and
                Stanford’s professional schools—Law and Business— were
                essential. She aimed for collaborations across the university to
                solve big problems and recognized the strengths that engineering
                could bring.
              </Text>
            </OneCol>
            <StorySidebar hasLineArt lineArtType="medium">
              <MediaCaptionImage
                rounded
                isCaptionInset
                isPortrait
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294116/Jennifer_Widom_preferred__High-Res_kizlyj.jpg"
                alt="A woman with short hair dressed in a red shirt, displaying a warm smile."
                caption="Jennifer Widom, 2017. A professor of computer science and of electrical engineering, an expert in data and information management, and a pioneer in online engineering education, Widom had been on the faculty for 27 years when she was appointed dean of Stanford Engineering in 2017 after Persis Drell became provost of Stanford. | John Todd/Stanford Engineering."
              />
            </StorySidebar>
          </TwoCol>
          <MediaCaptionImage
            rounded
            isParallax
            aspectRatio="8x5"
            className="cc mx-auto w-full 2xl:max-w-1500 2xl:p-0"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294111/central-energy-facility-2015_lmujw9.jpg"
            alt="A woman shows a document to a man while another woman reads paperwork, surrounded by blue safety helmets on a table."
            caption="Dean Persis Drell (center), Stanford President John Hennessy (right), and Jennifer Widom, before a faculty senate meeting held at the Central Energy Facility, 2015. Members of the senate toured the newly opened energy facility following the meeting. The system eliminates 150,000 tons of carbon dioxide annually and reduces total campus water use by about 15 percent. | Linda A. Cicero/Stanford News Service."
          />
          <OneCol>
            <H2>SystemX Alliance</H2>
            <Text>
              In 2015, the School of Engineering rechristened the Center for
              Integrated Systems—home of research partnerships between academia
              and industry for thirty years—as the SystemX Alliance. The mission
              of SystemX was to develop unified hardware, software, and systems
              to support solutions to the world’s biggest problems in health,
              energy, and the environment. The alliance would be an ecosystem
              that enabled these new systems—the data center of tomorrow, the
              self-driving car, the smartphone with artificial intelligence
              built in, and next-generation biomedical devices—to become the
              next breakthrough technologies.
            </Text>
            <Text>
              “The model in Silicon Valley since the 1970s has been to make
              better chips and then see what we can do with them,” said SystemX
              codirector H.-S. Philip Wong. “It was a bottom-up approach.”
              SystemX aimed to turn that model on its head: researchers would
              imagine an outcome and design the technology necessary to make it
              happen, Wong said, offering the examples of the “electroceutical”
              devices developed by SystemX researcher Ada Poon to treat diseases
              electronically or the data communication devices from researcher
              Jelena Vučković that use photons to transmit data.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} />
            </Text>
          </OneCol>
          <BgImageWrapper
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294117/pars_pro_toto_ium3kr.jpg"
          >
            <MediaCaptionImage
              rounded
              aspectRatio="8x5"
              className="rs-mb-6"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294117/Poon_microstimulator_w_penny_izgj1o.jpg"
              alt="Tiny bug-like robot positioned beside a U.S. penny."
              caption="Electrical engineer Ada Poon developed the tiny “microstimulator” device to monitor health or deliver therapies deep inside the human body. The implant is one example of how researchers in Stanford’s SystemX Alliance are putting technology to work in new ways. | Linda A. Cicero/Courtesy Poon Lab."
            />
            <TwoCol className="justify-center">
              <MediaCaptionImage
                animation="slideUp"
                delay={0.3}
                className="mt-0 lg:rs-mt-8 max-w-450"
                isCaptionInset
                rounded
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1742265418/philip-wong-profile_EWS_h3zpoo.jpg"
                alt="A man with short black hair and glasses smiles warmly."
                caption="H.-S. Philip Wong, professor of electrical engineering, 2009. Wong served as codirector of the SystemX Alliance, a partnership between academia and industry. SystemX refocused an existing 30-year program to create new materials and power sources, novel hardware and software, and coordination of these technologies through reliable control networks that would be needed for technologies of the future. | Stanford Engineering."
              />
              <MediaCaptionImage
                animation="slideUp"
                className="max-w-450"
                isCaptionInset
                rounded
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1752082593/Jelena_Vuckovic_centered_qya0xa.jpg"
                alt="A woman with glasses and dark hair smiles confidently outdoors."
                caption="Jelena Vuckovic, professor of electrical engineering, 2023. A pioneer in quantum photonics, Vučković leads the Nanoscale and Quantum Photonics Lab. Her research focuses on developing semiconductor-based photonic systems for quantum and classical information processing and transforming photonics with inverse design techniques. | School of Engineering."
              />
            </TwoCol>
          </BgImageWrapper>
          <OneCol>
            <H2>The Future of Everything</H2>
            <Text>
              In 2017, the School of Engineering embarked on a new outreach
              venture when it launched The Future of Everything SiriusXM radio
              show with host Russ Altman, a professor of bioengineering,
              genetics, medicine, and biomedical data science. The weekly
              half-hour podcast featured Stanford faculty from engineering,
              science, and related fields talking about their cutting-edge work.
            </Text>
          </OneCol>
          <MediaCaptionImage
            rounded
            isParallax
            aspectRatio="4x3"
            className="cc mx-auto w-full 2xl:max-w-850 2xl:p-0"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294122/russ_altman_qrzz8a.jpg"
            alt="A man with glasses and headphones speaks enthusiastically into a microphone."
            caption="Russ Altman, professor of bioengineering and of genetics, recording The Future of Everything, 2018. Launched as a SiriusXM radio show in 2017, it later became a podcast, and transitioned to Stanford Engineering in 2022. In 2024, it surpassed 250 episodes. The show explores how the research and technological advances of today will lead to the innovations of tomorrow. Altman has interviewed faculty from across the university about their research. | Amanda Law/School of Engineering."
          />
          <OneCol>
            <Text>
              Altman’s wide-ranging interests and enthusiasm were evident from
              the start as he engaged his guests in a “living room conversation”
              style, making their scholarship understandable to a lay audience.
              Altman noted that his quarter-century teaching career was a great
              “warm-up” for the job: “Over the years I’ve learned that I’m
              comfortable making scientific ideas accessible inside and outside
              the classroom.”{" "}
              <Footnotes footnoteRefs={[{ id: "footnote8", number: 8 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="D" />
          </div>
          <TwoCol className="rs-my-6" isSidebar>
            <OneCol>
              <H2 className="mt-0">New era in artificial intelligence</H2>
              <Text>
                Since the inception of the term “artificial intelligence” in the
                1950s by soonto-be Stanford faculty member John McCarthy,
                Stanford had been in the vanguard of the field. As the field
                blossomed in the 2010s with advances in computing power, vast
                amounts of data, and new machine-learning techniques, it also
                saw new challenges and risks. In 2019, the university created
                the Institute for Human-Centered Artificial Intelligence (HAI),
                placing the focus squarely where it needed to be—on AI’s human
                impact.
              </Text>
              <Text>
                In a telling partnership, HAI was co-led by computer scientist
                Fei-Fei Li and professor of philosophy and former provost John
                Etchemendy. The university-wide institute would go on to become
                a global interdisciplinary hub for AI-related work. At its
                inception, the institute had already attracted some two hundred
                participating faculty from Stanford’s seven schools.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} />
              </Text>
            </OneCol>
            <TimelineCard
              className="p-0 m-0"
              heading="Leading the future of AI: John Etchemendy and Fei-Fei Li codirect the Stanford Institute for Human-Centered Artificial Intelligence"
              year="2019"
              anchor="2019-leading-the-future-of-ai-john-etchemendy-and-fei-fei-li-codirect-the-stanford-institute-for-human-centered-artificial-intelligence"
              image="https://res.cloudinary.com/duv7bozlj/image/upload/v1742265401/Stanford_HAI_1381-_web_ylpw8q.jpg"
            />
          </TwoCol>
          <AnimatedPosterCard
            isFullWidth
            className="rs-mb-6"
            superhead="1925 – 2025"
            heading="Explore the Centennial timeline"
            href="/timeline"
            buttonText="Explore the timeline"
          />
          <TwoCol className="rs-mb-6" isSidebar>
            <OneCol>
              <H2 className="mt-0">A pandemic takes hold</H2>
              <Text>
                In March 2020, the World Health Organization declared the new
                virus, COVID-19, a pandemic—the first in nearly a century.
                Stanford University directed most of its seven thousand
                undergraduates to leave campus and prepare for all classes to be
                held online.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} />
              </Text>
              <Text>
                At the School of Engineering, many faculty members pivoted their
                current research to study the virus, contributing scholarship
                and technologies to combat the disease. Alexandria Boehm, an
                environmental engineer, developed new ways to detect
                community-wide virus levels by testing wastewater. Mechanical
                engineer Ellen Kuhl used computer modeling to predict outbreak
                dynamics and inform control strategies. Bioengineer and
                physician Russ Altman used AI to examine existing drugs for
                COVID-19 effectiveness. Peter Glynn and Jose Blanchet in
                Management Science and Engineering introduced decision-making
                tools for managing resources at overwhelmed hospitals. Juan
                Santiago, a mechanical engineer, created a handheld, rapid
                COVID-detecting diagnostic tool.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote11", number: 11 }]} />
              </Text>
              <Text>
                The campus reopened to juniors and seniors for the spring
                quarter in 2021, and by fall all students were back for
                on-campus instruction.
              </Text>
            </OneCol>
            <StorySidebar>
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1752084260/AlexandraBoehm_square_ta60zr.jpg"
                alt="A woman with dark hair in a bun smiles warmly, wearing a blue shirt and black blazer."
                caption="Environmental engineer Alexandria Boehm, 2024. When the COVID-19 pandemic struck, Boehm developed a new approach to detecting community-wide virus levels in wastewater, enabling health officials to track the prevalence of the virus in communities. | Stanford Engineering."
              />
            </StorySidebar>
          </TwoCol>
          <TwoCol className="rs-mb-6" isSidebar leftSidebar>
            <StorySidebar>
              <TimelineCard
                className="p-0 m-0"
                year="2021"
                heading="Global learning revolution: Stanford’s Code in Place brings computer science education to thousands during the pandemic"
                image="https://res.cloudinary.com/duv7bozlj/image/upload/v1742265402/codeinplace_td2zef.jpg"
                anchor="2021-global-learning-revolution-stanfords-code-in-place-brings-computer-science-education-to-thousands-during-the-pandemic-thanks-to-dedicated-faculty-and-volunteers"
              />
            </StorySidebar>
            <OneCol>
              <H2 className="mt-0">Code in Place</H2>
              <Text>
                As shelter-in-place directives were established around the
                country to slow the spread of the virus, computer science
                faculty members Chris Piech and Mehran Sahami, with support from
                senior lecturer Julie Zelenski, created a new avenue to teach
                computer programming. The initiative, called Code in Place,
                offered the school’s most popular introductory computer science
                course, CS106A, for free, online.
              </Text>
              <Text>
                Within two months, Code in Place had reached 10,000 students in
                120 countries, more than half of whom completed the entire
                course—in contrast to the less than 5 percent completion rates
                typical of traditional MOOCs. The secret to its success was its
                ability to recruit more than 900 “section leaders” from more
                than 350 cities on six continents, who spoke more than thirty
                different languages. Students who had never coded before were
                able to write programs in Python that could model dynamics of
                the COVID pandemic, analyze DNA, conduct sentiment analysis from
                Twitter, and create a choose-your-own-adventure film, among
                other projects. Some students and section leaders started new
                careers or became professional teachers.
              </Text>
              <Text>
                Celebrating the impact of the new course, Code in Place leaders
                wrote that the novel teaching approach could “change the way we
                think about teaching and learning at scale.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote12", number: 12 }]} />
              </Text>
            </OneCol>
          </TwoCol>
          <BgImageWrapper bgColor="blue" className="rs-mb-6">
            <TwoCol className="justify-center items-center lg:items-start">
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="4x3"
                className="max-w-700"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294113/hanrahan_pat_qpcr0h.jpg"
                alt="A smiling man poses with his arms crossed in front of an array of electronic equipment. "
                caption="Pat Hanrahan, professor of computer science and of electrical engineering, 2020. Hanrahan and his Pixar colleague Edwin Catmull won the 2019 A.M. Turing Award. Hanrahan pioneered software that renders animation with photorealistic lighting, leading to multiple Academy Awards. His technology has been used in full-length motion pictures, video games, and virtual reality. | Andrew Brodhead/Stanford University Communications."
              />
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="3x4"
                className="max-w-450 mt-0 lg:rs-mt-7"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294116/jeffrey_ullman_ajeipn.jpg"
                alt="A black and white image of a man with a full beard, wearing a tie, sitting at a desk."
                caption="Jeffrey Ullman, professor of computer science, 1987. Ullman was a corecipient of the 2020 A. M. Turing Award with his collaborator, Alfred Aho of Columbia University. The pair did seminal work in compilers and algorithms and influenced the entire field with their popular textbooks. | Ed Souza/Stanford News Service."
              />
            </TwoCol>
          </BgImageWrapper>
          <OneCol>
            <H2 className="mt-0">Shining recognition for pioneering work </H2>
            <Text>
              Other bright points shone amid these difficult times. The
              Association of Computer Machinery (ACM) announced that computer
              graphics pioneer Patrick Hanrahan, professor of computer science
              and electrical engineering, and his one-time mentor and Pixar
              colleague Edwin Catmull would be corecipients of the 2019 A.M.
              Turing Award. Hanrahan was the driving force behind Pixar’s
              RenderMan software, which introduced artistic, photorealistic
              lighting to computer animation. Used to make such films as Toy
              Story, Finding Nemo, Cars, and many others, RenderMan transformed
              animated film, video games, virtual reality, and more. The
              technical work had also garnered Hanrahan three Academy Awards for
              Science and Engineering and for Technical Achievement.
            </Text>
            <Text>
              “Stanford is just an unbelievable atmosphere of interdisciplinary
              expertise,” Hanrahan said. “We were able to do things that nobody
              else could do because of that environment.”{" "}
              <Footnotes footnoteRefs={[{ id: "footnote13", number: 13 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol>
            <Text>
              The following year, another Turing award recognized Jeffrey
              Ullman, professor of computer science. Ullman and his
              collaborator, Alfred Aho of Columbia University, were honored for
              their influential work on compilers and algorithms and the nine
              textbooks they coauthored, particularly Principles of Compiler
              Design, first published in 1977 and known in computer science
              circles as “the Dragon Book” after its distinctive cover
              illustration.
            </Text>
            <Text>
              “In many ways, those textbooks, particularly the Dragon Book,
              brought a lot of new people to computer science,” Ullman said. “At
              some point, kids were proud to be seen walking around campus with
              that cover under their arm.
            </Text>
            <Text>
              “While ACM is recognizing his foundational work in compilers and
              algorithms,” Dean Widom noted of her colleague, mentor, and
              friend, “I can assure you his influence extends far beyond those
              parameters. . . . Jeff is a profoundly influential figure, not
              only at Stanford but in the field of computer science as a whole.”{" "}
              <Footnotes footnoteRefs={[{ id: "footnote14", number: 14 }]} />
            </Text>
          </OneCol>
          <Scrollytelling
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294117/pars_pro_toto_ium3kr.jpg"
            heading="Student Shops to PRL: A Legacy of Making"
          >
            <TwoCol>
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="4x3"
                className="max-w-700"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1752097207/00007004_0001_qvxadk.jpg"
                alt="Old photograph depicting a busy carpentry workshop, featuring men in aprons engaged in work under bright windows."
                caption="Carpentry shop, early 1900s. | Special Collections & University Archives."
              />
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="4x3"
                className="max-w-700"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294113/B-CAM-2022SE-1377_yah1kh.jpg"
                alt="A diverse group of individuals collaborating in a workshop, engaged in hands-on activities and discussions."
                caption="Product Realization Lab, 2023. | Andrew Brodhead/Stanford University Communications."
              />
            </TwoCol>
            <ScrollyBubble>
              <Text>
                The spirit of creativity and experiential learning has been at
                Stanford University since its earliest days. In the university’s
                founding grant, Jane and Leland Stanford set forth that museums,
                galleries, labs, and conservatories should be available on
                campus to foster students’ personal success as well as their
                “direct usefulness.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote15", number: 15 }]} />
              </Text>
              <Text>
                Guido Marx, one of Stanford’s first mechanical engineering
                professors, remarked in 1891 that progress “cannot be made by
                the study of textbooks. Learning must be carried out in the
                physical and testing laboratories and the workshop.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote16", number: 16 }]} />
              </Text>
              <Text>
                The earliest makerspaces on campus—the machine shop, carpentry
                shop, forge, and foundry—were collectively known as the Student
                Shops. In those settings, from as early as 1904, engineering
                students spent hours learning practical skills and experimenting
                with tools and manufacturing.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote17", number: 17 }]} />
              </Text>
              <Text>
                As technology advanced, so did the tools available for making.
                The Student Shops expanded and adapted, but their core mission
                remained the same: empowering students to learn by doing and
                fostering a spirit of innovation that defines Stanford
                Engineering.
              </Text>
              <Text>
                In the 1970s, the program was renamed the Product Realization
                Laboratory (PRL); as part of the Department of Mechanical
                Engineering, it integrated design, prototyping, and
                manufacturing in one place.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote18", number: 18 }]} />{" "}
                Beyond its modern equipment, expert guidance, and space to turn
                engineering ideas into functional prototypes, the PRL quickly
                became a hub for creative problem-solving, offering students
                from diverse disciplines a space to try, fail, rethink, and try
                again.
              </Text>
              <Text>
                “The PRL is place where students learn that they can make
                anything, and therefore they can change the world,” said David
                Beach, emeritus professor of mechanical engineering and emeritus
                director of the PRL. “My greatest tribute to my students is that
                they find the courage to risk failure in the face of always
                having been top performers.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote19", number: 19 }]} />
              </Text>
              <Text>
                Today, the PRL is a central part of a broader network of
                makerspaces across campus, including labs dedicated to
                electronics, robotics, and even bioengineering.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote20", number: 20 }]} />{" "}
                These spaces remain rooted in the original ethos of the Student
                Shops: give students the freedom to design and build in a
                collaborative, hands-on environment. Whether working on personal
                projects, start-ups, or research, students continue to use
                Stanford’s makerspaces to push the boundaries of engineering and
                design.
              </Text>
              <Text>
                “Stanford’s makerspaces are more than just workshops,” says
                Steven Collins, professor of mechanical engineering. “They are
                communities where students develop the skills, confidence, and
                creativity to tackle real-world problems. The spirit of hands-on
                innovation that began at Stanford in 1891 is alive and well
                today, and it’s inspiring to see students take that legacy
                forward.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote21", number: 21 }]} />
              </Text>
              <Text mb="0">
                —Hanna Ahn <br />
                Assistant University Archivist for Special <br />
                Collections & University Archives
              </Text>
            </ScrollyBubble>
          </Scrollytelling>
          <OneCol className="rs-mb-5">
            <H2 className="mt-0">Pars pro Toto</H2>
            <Text>
              The Science and Engineering Quad (SEQ) welcomed a new art
              installation in 2021 that added a spirit of playfulness and
              inspiration. Pars pro Toto was a set of twelve stone spheres in a
              dynamic arrangement designed by artist Alicja Kwade to evoke
              alternate realities and a sense of possibility. Kwade had
              determined the stones’ positioning by rolling tiny spheres onto a
              3D model of the SEQ. The stones—each unique in size and
              composition—had been sustainably sourced and shipped by low-carbon
              sea freight from masons in Berlin, Germany.
            </Text>
            <Text>
              “I love this piece because it breaks us out of our day-to-day
              preoccupations. It reminds us that we’re a small part of a large
              world, and that randomness plays a part in everything,” said
              Sophia Pink (BS ’19, MS ’20), a student member of the artwork
              selection committee.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote22", number: 22 }]} />
            </Text>
          </OneCol>
          <MediaCaptionImage
            rounded
            isParallax
            aspectRatio="16x9"
            className="cc mx-auto w-full 2xl:max-w-1500 2xl:p-0 rs-mb-6"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294117/pars_pro_toto_ium3kr.jpg"
            alt="A landscaped campus courtyard featuring benches, large spherical sculptures, and trees."
            caption="A public art display called Pars pro Toto, created by artist Alicja Kwade, installed in the Science and Engineering Quad courtyard, 2021. The 12 spheres range in size from 16 to 98 inches and are made of stone sourced from eight countries. The work was selected by a committee of faculty, students, and staff appointed by Dean Jennifer Widom. | Andrew Brodhead/Stanford University Communications."
          />
          <TwoCol className="rs-mb-6" isSidebar>
            <div>
              <OneCol className="rs-mb-1">
                <H2 className="mt-0">A new school of sustainability</H2>
                <Text>
                  Stanford announced in 2022 that it would create an entirely
                  new school for the first time in seventy years. The Stanford
                  Doerr School of Sustainability would speed global-scale
                  solutions to planetary challenges. The school would be named
                  for John Doerr, a venture capitalist, and his wife, Ann
                  Howland Doerr, board chair for Khan Academy and president of
                  the Benificus Foundation. Their $1.1 billion gift was the
                  largest single gift in Stanford history.
                </Text>
                <Text>
                  As its inaugural dean, the School of Sustainability chose Arun
                  Majumdar, a professor of mechanical engineering, former
                  codirector of the Precourt Institute for Energy, and cochair
                  of the 2015 SoEFuture planning committee. The choice of
                  Majumdar reflected the foundational role engineers and
                  engineering would play in charting a course to a sustainable
                  future.
                </Text>
                <Quote
                  className="rs-mb-4"
                  quoteColor="red"
                  teaser="As is often said, we do not inherit the Earth from our ancestors, we borrow it from our children. We must create a future in which humans and nature thrive together."
                  source="— Arun Majumdar, Professor of Mechanical Engineering, Former Co-director of the Precourt Institute for Energy, and Co-chair of the 2015 SoE Future planning committee"
                />
                <Text>
                  “As is often said, we do not inherit the Earth from our
                  ancestors, we borrow it from our children. We must create a
                  future in which humans and nature thrive together,” Majumdar
                  said. “The Stanford Doerr School of Sustainability will not
                  only harness the intellectual horsepower of our students,
                  faculty, and staff across our campus, but also partner with
                  external organizations around the world to co-develop
                  innovative solutions and identify new insights through
                  research and education.”{" "}
                  <Footnotes
                    footnoteRefs={[{ id: "footnote23", number: 23 }]}
                  />
                </Text>
                <Text>
                  With the launch of the School of Sustainability, the
                  Department of Civil and Environmental Engineering became a
                  joint department between the new school and the School of
                  Engineering. A handful of other engineering faculty elected to
                  have joint appointments, cementing a close relationship
                  between the brand-new school and one that was nearly one
                  hundred years old.
                </Text>
              </OneCol>
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="8x5"
                className="cc mx-auto w-full 2xl:max-w-750 2xl:p-0 rs-mb-6"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294110/20230829_Doerr_School_N6A9463_mv9kfg.jpg"
                alt="A cyclist passes the Stanford School of Sustainability building."
                caption="Exterior of the Mitchell Earth Sciences Building with signage to mark the launch of the Stanford Doerr School of Sustainability, 2022. The Mitchell Building is the administrative home of the school. | Stanford News Service."
              />
            </div>
            <StorySidebar hasLineArt>
              <MediaCaptionImage
                rounded
                isCaptionInset
                isPortrait
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1752097625/Majumdar_square_nydzbr.jpg"
                alt="Man in a blue suit stands confidently under stone arches."
                caption="Arun Majumdar, professor of mechanical engineering, who became the inaugural dean of the Stanford Doerr School of Sustainability, 2022. Stanford’s first new school in 70 years arose out of ideas submitted by Stanford faculty, students, staff, and alumni as part of a university-wide long-range planning process. The Department of Civil and Environmental Engineering became joint with the new school, which also includes the Stanford Woods Institute for the Environment and the Precourt Institute for Energy. | Edward Caldwell."
              />
            </StorySidebar>
          </TwoCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="D" />
          </div>
          <TwoCol
            className="rs-mb-6 justify-center items-center lg:items-start"
            isSidebar
            leftSidebar
          >
            <MediaCaptionImage
              rounded
              isCaptionInset
              aspectRatio="3x4"
              className="max-w-450"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1752098036/tarpeh_rod-portrait_xjznlj.jpg"
              alt="Smiling man in a brown blazer stands outdoors."
              caption="Chemical engineer William Tarpeh, 2021. Tarpeh’s lab develops novel approaches to recover valuable resources from liquid waste streams, reducing environmental impact and enhancing sustainability. | Rod Searcey."
            />
            <OneCol>
              <H2 className="mt-0">Breakthroughs abound</H2>
              <Text>
                The tenth decade of the Stanford School of Engineering was one
                of remarkable advances in many fields. In chemical engineering,
                for example, faculty developed stretchable and flexible
                skin-like electronics for wearable technology and medical
                devices, as well as water-splitting catalysts for sustainable
                hydrogen fuel.
              </Text>
              <Text>
                In electrical engineering, strides in quantum computing hardware
                and new nanomaterials for electronics continued to push into new
                frontiers. New photonic structures made solar cells and energy
                systems more efficient. In mechanical engineering, the advance
                of haptics and soft robotics offered new possibilities for
                medical and manufacturing applications.
              </Text>
              <Text>
                Researchers in bioengineering expanded the use of CRISPR
                technology to regulate genes and make epigenetic modifications.
                In materials science, advanced hydrogels transformed drug
                delivery and wound healing, while the creation of a stabilized
                lithium anode significantly improved lithium-ion battery
                performance.
              </Text>
              <Text>
                Civil and environmental engineers pioneered research in resource
                recovery from wastewater and pursued innovations for more
                equitable and sustainable urban systems. In computer science,
                researchers continued to make groundbreaking advances in
                artificial intelligence, improving machine learning, computer
                vision, and natural-language processing. New cryptographic
                techniques enhanced privacy and security, while progress in
                “edge” computing—a decentralized computing architecture where
                data processing occurs close to the source of data—promised
                greater power for mobile and remote devices.
              </Text>
            </OneCol>
          </TwoCol>
          <BgImageWrapper bgColor="blue">
            <MediaCaptionImage
              rounded
              aspectRatio="8x5"
              className="rs-mb-6"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294113/Fig.1d_fld1zh.jpg"
              alt="Two gloved hands stretch a transparent, flexible electronic sheet with a grid pattern against a clear blue sky."
              caption="Flexible, wearable, skin-like sensors developed by Zhenan Bao and her lab, 2024. The sensors, which use intrinsically stretchable transistors and integrated circuits, are designed to monitor human health, diagnose diseases, and provide opportunities for improved, autonomous treatments. | Courtesy Bao Group."
            />
            <TwoCol className="justify-center">
              <MediaCaptionImage
                animation="slideUp"
                delay={0.3}
                isCaptionInset
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294117/oceanonek-inspect_copy_tsppjz.jpg"
                alt="A scuba diver extends a fist to an orange underwater robot."
                caption="A human diver with Ocean One, a humanoid robot designed by Oussama Khatib, professor of computer science, 2016. Ocean One is fitted with pressure sensors on each hand that provide a human pilot with a sense of touch. The robot successfully retrieved artifacts from the wreck of La Lune, the flagship of King Louis XIV. "
              />
              <MediaCaptionImage
                animation="slideUp"
                className="mt-0 lg:rs-mt-8"
                isCaptionInset
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294113/crispi-camera-deck_alesqg.jpg"
                alt="An orange robot diver uses equipment to examine the interior of a rusted, coral-encrusted shipwreck underwater, with fish and marine life visible around the structure."
                caption="Ocean One exploring La Lune, which sank in the Mediterranean Ocean off the coast of France. | Frederic Osada/DRASSM/Stanford."
              />
            </TwoCol>
          </BgImageWrapper>
          <OneCol className="rs-mt-6 rs-mb-5">
            <H2 className="mt-0">The Stanford Emerging Technology Review</H2>
            <Text>
              In November 2023, the School of Engineering and the Hoover
              Institution collaborated to launch The Stanford Emerging
              Technology Review. The Review drew upon the expertise of
              Stanford’s eminent engineers and scientists to assess recent
              technology breakthroughs in fields ranging from artificial
              intelligence and cryptography to neuroscience, with potential to
              impact societies, economies, and geopolitics. Cochaired by Hoover
              Institution director Condoleezza Rice, Stanford Engineering dean
              Jennifer Widom, and Hoover senior fellows John Taylor and Amy
              Zegart, the Review was focused on capturing relevant technical
              perspectives rather than championing any one viewpoint.
            </Text>
            <Text>
              “The inaugural release of the Stanford Emerging Technology Review
              is an important new resource for those trying to keep pace with a
              rapidly evolving technological landscape,” Director Rice said.
              “The report combines the policy expertise at Hoover with Stanford
              scientists who are doing cutting-edge research in the heart of
              Silicon Valley, and it will serve as a translation of sorts
              between the two to make the latest breakthroughs continuously
              accessible to policymakers.”
            </Text>
            <Text>
              Widom agreed, adding, “Our school’s legacy of innovation and
              crossdisciplinary collaboration, spanning from the birth of
              Silicon Valley to groundbreaking advancements in human health,
              sets us apart and paves the way for the tremendous impact of this
              project,” she said.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote24", number: 24 }]} />
            </Text>
          </OneCol>
          <TwoCol>
            <MediaCaptionImage
              animation="slideUp"
              isCaptionInset
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294116/Hoover_EmergingTechEvent_QE_11-14-23_PatrickBeaudouin_PTB_2163_o3zcgo.jpg"
              alt="Two women sit in armchairs on stage at a Stanford University event."
              caption="Amy Zegart (left) interviews Jennifer Widom at the Stanford Emerging Technology Review launch, 2023. In their conversation, Widom discussed how the Review allows engineering and science faculty to engage in a larger dialogue about the broader implications of their work in a way that is accessible to lay audiences, including policymakers. | Patrick Beaudouin/Hoover Institution."
            />
            <MediaCaptionImage
              animation="slideUp"
              isCaptionInset
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294114/Hoover_EmergingTechEvent_11-14-23_PatrickBeaudouin_IMG_0478_p9zypf.jpg"
              alt="Three women in professional attire are engaged in a friendly conversation against a white wall."
              caption="From left to right, Zhenan Bao, Allison Okamura, and Jennifer Widom prior to the Stanford Emerging Technology Review launch event, 2023. The School of Engineering and the Hoover Institution jointly launched the Review to capture diverse views from across Stanford on recent technological breakthroughs. | Hoover Institution/Patrick Beaudouin."
            />
          </TwoCol>
          <OneCol>
            <H2>New spaces for the next century</H2>
            <Text>
              In 2024, the School of Engineering celebrated the opening of the
              Stanford Robotics Center, a site for collaborative research to
              develop robots prepared for the “real, complex, and unconstrained
              world they will share with people.” The center focuses on both
              theoretical and applied robotic innovation in a new era where
              advances in artificial intelligence have the potential to enable
              unprecedented technology in the field, including cooperative
              robots, bio-inspired robots, ubiquitous robots, and others that
              could assist in areas such as production automation, agriculture,
              the food industry, medicine and rehabilitation, the entertainment
              industry, and beyond.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote25", number: 25 }]} />
            </Text>
            <Text>
              In early 2025—Stanford Engineering’s centennial year—the school
              was slated to open the new Computing and Data Science building in
              collaboration with the School of Humanities and Sciences. The
              union reflected the continued collaboration across schools,
              driving the value of data and computation in research and
              innovation. The building, nicknamed “CoDa,” would be a hub of
              collaboration, home to faculty from the computer science and
              statistics departments, a cross-university data science
              initiative, and undergraduate programs in computer science, data
              science, and symbolic systems, which together comprised 25 percent
              of undergraduate majors.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote26", number: 26 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-start rs-mb-3">
            <HorizontalLineart lineartType="C" />
          </div>
          <BgImageWrapper
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294122/SUBB_SD_View_from_JSW_Main_Quad_yevmri.jpg"
          >
            <MediaCaptionImage
              rounded
              isParallax
              isCaptionInset
              aspectRatio="8x5"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294122/SUBB_SD_View_from_JSW_Main_Quad_yevmri.jpg"
              alt="Illustration of a 4-story sandstone-colored building covered with large windows and a red sloping roof."
              caption="Exterior rendering of the Computing and Data Science building, opened in 2025. The building, nicknamed CoDa, is home to faculty from the Departments of Computer Science and Statistics, a cross-university data science initiative, and undergraduate programs in computer science, data science, and symbolic systems. Built jointly with the School of Humanities and Sciences, the building reflects the growing importance of data science in all areas of scholarship. | LMN Architects."
            />
          </BgImageWrapper>
          <OneCol className="rs-mb-5">
            <H2 className="mt-0">Charting the next hundred years</H2>
            <Text>
              By 2025, one hundred years after the Stanford University Board of
              Trustees approved the organization of the School of Engineering,
              the school had grown beyond anything its founders could possibly
              have imagined. And yet, their original vision to educate engineers
              of strong character for leadership in an increasingly
              technological world holds fast today.
            </Text>
            <Text>
              From the first bold spark of electricity that shot across a
              long-distance electrical cable in Harris Ryan’s High-Voltage
              Laboratory in 1926 to the ever-shrinking microchips, AI-guided
              robots, autonomous vehicles, and shape-shifting nanoparticles of
              today, Stanford Engineering educators and innovators have advanced
              technology and transformed society. Their pioneering spirit
              defines the school, inspiring new generations to push boundaries
              and tackle the greatest challenges of our time.
            </Text>
            <Text>
              Rooted from its earliest years in interdisciplinary collaboration,
              entrepreneurial spirit, and a culture of bold thinking, Stanford
              Engineering continues to prepare responsible engineers for the
              future, while shaping the future itself. The school’s trajectory
              in the next century is being charted by those who are here now and
              will be defined by generations of Stanford engineers yet to come.
            </Text>
          </OneCol>
          <TwoCol className="justify-center items-center lg:items-start rs-mb-6">
            <MediaCaptionImage
              rounded
              isCaptionInset
              aspectRatio="4x3"
              className="max-w-700"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751294123/WelcomeDay_GroupPhotos_9.26.24_01_O5A0256_msl1am.jpg"
              alt="A diverse group of smiling individuals wearing red Stanford Engineering T-shirts wave at the camera."
              caption="Dean Jennifer Widom, center, with new graduate students at the Dean’s Welcome event, September 2024. | Saul Bromberger/Stanford Engineering."
            />
          </TwoCol>
          <DecadePager currentDecade={10} />
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
    </PageTransitionWrapper>
  );
}
