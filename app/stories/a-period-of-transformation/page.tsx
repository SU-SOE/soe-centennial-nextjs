import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import {
  BgImageWrapper,
  Footnotes,
  FootnotesList,
  ScrollyBubble,
  Scrollytelling,
  StoryLineBanner,
  StorySidebar,
} from "@/components/Story";
import { ExploreMore } from "@/components/Story/";
import React from "react";
import { Metadata } from "next";
import { Link } from "@/components/Cta";
import { Quote } from "@/components/Quote";
import { OneCol, TwoCol } from "@/components/Layout";
import { H2 } from "@/components/Typography/Header";
import { Text } from "@/components/Typography";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Container } from "@/components/Container";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { ImageGallery } from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "The Terman Era | 100 Years of Stanford Engineering",
  description:
    "Samuel Morris recommended Frederick Terman to be his successor as dean of the School of Engineering. Terman, on leave from Stanford at the time, had been serving since 1942 in a wartime appointment as head of the top-secret Radio Research Laboratory at Harvard University. Yet throughout the war, Terman was anticipating a period after the war he believed would be defined by unprecedented technological advancement led by engineers.",
  keywords: [
    "Frederick Terman",
    "Stanford history",
    "School of Engineering",
    "wartime research",
    "technological advancement",
  ],
  openGraph: {
    title: "The Terman Era | 100 Years of Stanford Engineering",
    description:
      "Samuel Morris recommended Frederick Terman to be his successor as dean of the School of Engineering. Terman, on leave from Stanford at the time, had been serving since 1942 in a wartime appointment as head of the top-secret Radio Research Laboratory at Harvard University. Yet throughout the war, Terman was anticipating a period after the war he believed would be defined by unprecedented technological advancement led by engineers.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/PC0141_b12_Dish_0088_EWS_emptkd.jpg",
        alt: "Frederick Terman at the Radio Research Laboratory, Harvard University, 1940s",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Terman Era | 100 Years of Stanford Engineering",
    description:
      "Samuel Morris recommended Frederick Terman to be his successor as dean of the School of Engineering. Terman, on leave from Stanford at the time, had been serving since 1942 in a wartime appointment as head of the top-secret Radio Research Laboratory at Harvard University. Yet throughout the war, Terman was anticipating a period after the war he believed would be defined by unprecedented technological advancement led by engineers.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/PC0141_b12_Dish_0088_EWS_emptkd.jpg",
    ],
  },
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745460212/00005705_0023_bsdlgo.jpg",
    alt: "A group of engineering faculty members standing in front of a building",
    caption:
      "Engineering faculty at the groundbreaking for Crothers Memorial Hall dormitory, which would house engineering graduate students, 1954. | Special Collections & University Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371508/linvill_daughter_candance_j35sgf.jpg",
    alt: "John Linvill and his daughter Candace demonstrating the Optacon",
    caption:
      "John Linvill, left, and his daughter, Candace, demonstrating the Optacon, 1964. This portable device had a small handheld camera that could be moved across any printed material to generate images on a fingertip-sized tactile display, allowing blind people to read printed text. After joining the Stanford faculty in 1955, Linvill founded the school’s Solid State Laboratory. | Stanford News Service.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745460024/SC0122_b1_Multivators_004_g0ammu.jpg",
    alt: "",
    caption:
      "The multivator, 1963. Joshua Lederberg, Nobel laureate and chair of genetics, and Elliott Levinthal, professor of mechanical engineering, developed this device to test for life on distant planets. Although it was not included in the first Mars lander mission planned for 1966, in 1975 a modified version flew in the Viking Lander. | Special Collections & University Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745460039/gr855kr1144_08_04_p7yovx.jpg",
    alt: "Diagram of the multivator",
    caption:
      "A prototype of the multivator that would fly on the Mars Viking Lander, developed by Elliott Levinthal and NASA, 1962. |  Special Collections & University Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371517/00007005_0006_f2fmkj.jpg",
    alt: "Joseph Frangini with students in the Sanitary Engineering Laboratory",
    caption:
      "Joseph Frangini (standing) with students in the Sanitary Engineering Laboratory, completed in the summer of 1955, which was equipped for chemical tests on water and sewage. A world-renowned expert on fluid mechanics and water resources, Frangini joined the Stanford faculty as a professor of civil engineering in 1950. | Special Collections & University Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371522/john_mcarthy_chess_noji2t.jpg",
    alt: "John McCarthy seated at a desk, playing computer chess",
    caption:
      "John McCarthy, professor of computer science, playing computer chess, 1966. McCarthy coined the term artificial intelligence and founded the influential Stanford Artificial Intelligence Laboratory. The laboratory produced 18 recipients of the ACM A. M. Turing Award, considered the Nobel Prize of computer science. | Chuck Painter/Stanford News Service.",
  },
];

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

const footnotes = [
  {
    number: 1,
    id: "footnote1",
    text: "Mary Ritter, a scientist, professor, and administrator at Stanford, was instrumental in the formation of the School of Medicine and Nursing.",
    sourceLink:
      "https://exhibits.stanford.edu/150-stanford-women/feature/mary-bennett-ritter",
  },
  {
    number: 2,
    id: "footnote2",
    text: "This is the second entry in the Stanford Engineering Centennial timeline. It highlights the school's early history and foundational figures.",
    sourceLink: "https://engineering.stanford.edu/about/history",
  },
  {
    number: 3,
    id: "footnote3",
    text: "David Starr Jordan was the founding president of Stanford University and a ichthyologist by training.",
    sourceLink: "https://www.stanford.edu/about/history/",
  },
  {
    number: 4,
    id: "footnote4",
    text: "John Casper Branner was the first professor of geology and later became the second president of Stanford University.",
    sourceLink:
      "https://exhibits.stanford.edu/stanford-pubs/catalog/gp670cm0844",
  },
  {
    number: 5,
    id: "footnote5",
    text: "Durand’s appointment is widely credited as a pivotal moment in solidifying engineering education at Stanford.",
    sourceLink: "https://profiles.stanford.edu/william-durand",
  },
  {
    number: 6,
    id: "footnote6",
    text: "Ames Aeronautical Laboratory was founded as part of the National Advisory Committee for Aeronautics (NACA), which later became NASA.",
    sourceLink: "https://history.nasa.gov/SP-4302/ch3.2.htm",
  },
  {
    number: 7,
    id: "footnote7",
    text: "Margaret Ingels was one of the first women to receive a professional degree in engineering in the United States.",
    sourceLink:
      "https://www.asce.org/about-civil-engineering/history-and-heritage/engineering-hall-of-fame/margaret-ingels",
  },
  {
    number: 8,
    id: "footnote8",
    text: "Frederick Terman, known as the ‘Father of Silicon Valley,’ was a professor and later dean of the School of Engineering.",
    sourceLink:
      "https://engineering.stanford.edu/magazine/article/frederick-terman-and-origins-silicon-valley",
  },
  {
    number: 9,
    id: "footnote9",
    text: "Hewlett and Packard began working on their audio oscillator project as graduate students under Terman.",
    sourceLink:
      "https://www.hp.com/us-en/hp-information/about-hp/history/hp-origin-story.html",
  },
  {
    number: 10,
    id: "footnote10",
    text: "The Hewlett-Packard garage is recognized as the birthplace of Silicon Valley.",
    sourceLink:
      "https://www.hp.com/us-en/hp-information/about-hp/history/hp-garage.html",
  },
  {
    number: 11,
    id: "footnote11",
    text: "Terman helped develop the electronics research program at Harvard during WWII, including work on radar systems.",
    sourceLink:
      "https://history.nih.gov/display/history/Radar+Research+and+Development+during+World+War+II",
  },
  {
    number: 12,
    id: "footnote12",
    text: "Stanford’s post-war growth was fueled by increased funding for scientific and technical research.",
    sourceLink: "https://news.stanford.edu/news/2005/june15/terman-061505.html",
  },
  {
    number: 13,
    id: "footnote13",
    text: "The Stanford Industrial Park (now Stanford Research Park) was a visionary development that attracted tech companies to Palo Alto.",
    sourceLink: "https://www.researchpark.com/about/history/",
  },
  {
    number: 14,
    id: "footnote14",
    text: "William Shockley, co-inventor of the transistor, established Shockley Semiconductor Laboratory in Mountain View, igniting Silicon Valley.",
    sourceLink:
      "https://www.computerhistory.org/siliconengine/william-shockley/",
  },
  {
    number: 15,
    id: "footnote15",
    text: "The 'Traitorous Eight' left Shockley to form Fairchild Semiconductor, which became a breeding ground for Silicon Valley’s entrepreneurial culture.",
    sourceLink: "https://www.invent.org/inductees/traitorous-eight",
  },
  {
    number: 16,
    id: "footnote16",
    text: "Fairchild Semiconductor introduced the planar process, which revolutionized chip manufacturing.",
    sourceLink:
      "https://computerhistory.org/blog/fairchild-and-the-planar-process/",
  },
  {
    number: 17,
    id: "footnote17",
    text: "Xerox PARC, founded in 1970, became an influential center for computing innovation, attracting Stanford graduates.",
    sourceLink: "https://www.parc.com/about/history/",
  },
  {
    number: 18,
    id: "footnote18",
    text: "The Stanford Artificial Intelligence Laboratory (SAIL) led pioneering work in AI and robotics during the 1960s and 1970s.",
    sourceLink: "https://cs.stanford.edu/groups/SAIL/",
  },
  {
    number: 19,
    id: "footnote19",
    text: "Douglas Engelbart's demo of the oN-Line System (NLS) in 1968 featured the first computer mouse, hypertext, and video conferencing.",
    sourceLink: "https://www.dougengelbart.org/",
  },
  {
    number: 20,
    id: "footnote20",
    text: "The Center for Integrated Systems, founded in the early 1980s, brought industry and academia together to advance chip design.",
    sourceLink: "https://cis.stanford.edu/",
  },
  {
    number: 21,
    id: "footnote21",
    text: "Andrea Goldsmith, a wireless communications pioneer, became the first woman to win the Marconi Prize in 2020.",
    sourceLink: "https://marconisociety.org/andrea-goldsmith/",
  },
  {
    number: 22,
    id: "footnote22",
    text: "The Stanford Solar Car Project, founded in 1989, has competed in the World Solar Challenge and promotes sustainable engineering.",
    sourceLink: "https://solarcar.stanford.edu/",
  },
  {
    number: 23,
    id: "footnote23",
    text: "Leland Stanford Jr., for whom the university is named, died of typhoid fever at age 15 in 1884.",
    sourceLink: "https://www.stanford.edu/about/history/",
  },
  {
    number: 24,
    id: "footnote24",
    text: "Leonard Bosack and Sandy Lerner, Stanford staff members, co-founded Cisco Systems in 1984.",
    sourceLink:
      "https://www.cisco.com/c/en/us/about/corporate-strategy-office/history.html",
  },
  {
    number: 25,
    id: "footnote25",
    text: "Stanford’s Computer Science department began in 1965 and quickly became a hub for software innovation.",
    sourceLink: "https://cs.stanford.edu/about/history",
  },
  {
    number: 26,
    id: "footnote26",
    text: "The Stanford Linear Accelerator Center (SLAC) was completed in 1966 and remains a world-leading research facility.",
    sourceLink: "https://www6.slac.stanford.edu/about",
  },
  {
    number: 27,
    id: "footnote27",
    text: "SLAC experiments led to Nobel-winning discoveries, including the quark model of matter.",
    sourceLink: "https://www6.slac.stanford.edu/research/nobel-prizes",
  },
  {
    number: 28,
    id: "footnote28",
    text: "Jennifer Widom, a database pioneer, became the first female dean of Stanford Engineering in 2017.",
    sourceLink: "https://engineering.stanford.edu/news/meet-jennifer-widom",
  },
  {
    number: 29,
    id: "footnote29",
    text: "Lawrence Lessig’s work at Stanford Law influenced the field of internet governance and digital copyright.",
    sourceLink: "https://cyber.harvard.edu/people/lessig",
  },
  {
    number: 30,
    id: "footnote30",
    text: "The d.school (Hasso Plattner Institute of Design) at Stanford fosters innovation through interdisciplinary design thinking.",
    sourceLink: "https://dschool.stanford.edu/about",
  },
  {
    number: 31,
    id: "footnote31",
    text: "David Kelley, founder of IDEO, was a key figure in establishing the Stanford d.school.",
    sourceLink: "https://www.ideo.com/people/david-kelley",
  },
  {
    number: 32,
    id: "footnote32",
    text: "The Stanford Engineering Hero program honors alumni and faculty who have made significant contributions to society.",
    sourceLink:
      "https://engineering.stanford.edu/alumni-friends/stanford-engineering-heroes",
  },
  {
    number: 33,
    id: "footnote33",
    text: "John Hennessy, a computer architecture pioneer, served as Stanford’s president from 2000 to 2016.",
    sourceLink:
      "https://www.stanford.edu/about/leadership/presidents/hennessy/",
  },
  {
    number: 34,
    id: "footnote34",
    text: "The Stanford Nanofabrication Facility supports research in nanoscale science and engineering.",
    sourceLink: "https://snf.stanford.edu/",
  },
  {
    number: 35,
    id: "footnote35",
    text: "The Bio-X program supports interdisciplinary biosciences research bridging engineering, medicine, and biology.",
    sourceLink: "https://biox.stanford.edu/",
  },
  {
    number: 36,
    id: "footnote36",
    text: "The TomKat Center funds research in sustainable energy and supports student-led energy innovation projects.",
    sourceLink: "https://tomkat.stanford.edu/",
  },
  {
    number: 37,
    id: "footnote37",
    text: "Lynn Orr served as founding director of the Precourt Institute for Energy and U.S. Under Secretary for Science and Energy.",
    sourceLink: "https://energy.stanford.edu/people/lynn-orr",
  },
  {
    number: 38,
    id: "footnote38",
    text: "The Stanford Center for Professional Development has offered distance learning since 1969, now reaching learners worldwide.",
    sourceLink: "https://scpd.stanford.edu/",
  },
  {
    number: 39,
    id: "footnote39",
    text: "The Wu Tsai Neurosciences Institute at Stanford advances brain research through interdisciplinary collaboration.",
    sourceLink: "https://neuroscience.stanford.edu/",
  },
];

export default function page() {
  return (
    <>
      <Masthead logoColor="white-red" isBgDark isOverlap />
      <main id="main-content">
        <article>
          <StoryLineBanner
            bgColor="stone-dark"
            chapter="Decade 4"
            heading="A period of transformation"
            dek="1955 – 1964"
            caption={
              <>
                The Stanford “Dish” radio telescope under construction in the
                Stanford foothills, 1961. | Stanford News Service.{" "}
                <Link href="#jumpto">See complete caption below</Link>
              </>
            }
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/PC0141_b12_Dish_0088_EWS_emptkd.jpg"
          />

          <div className="max-w-1500 w-full cc 2xl:p-0 rs-mb-6">
            <Text mb={6}>by Andrew Myers</Text>
          </div>
          <TwoCol className="rs-mb-5">
            <Quote
              quoteColor="red"
              teaser="There was something special about the IBM 650, something that has provided the inspiration for much of my life’s work."
              source="— Donald Kunth"
            />
            <OneCol>
              <H2 className="mt-0">1955 – 1964</H2>
              <Text variant="overview" mb="none">
                As the School of Engineering’s fourth decade opened, Fred Terman
                was in his tenth year as dean. In 1955, he was named provost of
                Stanford, the university’s second highest position. Terman held
                both jobs for three years before shifting solely to his role as
                provost. In 1958, Joseph Pettit, a professor of electrical
                engineering, was named dean. During Pettit’s fourteen years in
                that position, the school experienced meteoric growth in scope,
                scale, and reputation. By the late 1960s, Stanford would be
                among the top producers of engineering PhDs in the nation.
                <Footnotes footnoteRefs={[{ id: "footnote1", number: 1 }]} />
              </Text>
            </OneCol>
          </TwoCol>
          <TwoCol isSidebar className="rs-mb-5">
            <OneCol>
              <Text>
                The fourth decade was a period of transformation as much for the
                School of Engineering as it was for the world. New technologies
                and new disciplines yielded breakthroughs from jet and rocket
                propulsion to computer science, atomic energy, and solid-state
                electronics. Fields that had scarcely existed a decade earlier
                now welcomed skilled engineers by the score. Stanford stood
                ready to lead.
              </Text>
              <H2>New directions in funding</H2>
              <Text>
                A profound shift in sources and amounts of funding took place
                during this period. In Fred Terman’s first year as dean, 1946,
                total government commissions had been $127,599—for the entire
                university. A decade later, Department of Defense contracts
                alone brought in $4.5 million, a number that would triple by the
                mid-1960s. Stanford landed third among the list of university
                defense contractors.
                <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} />
              </Text>
              <Text>
                In addition to abundant federal spending, the School of
                Engineering diversified into private philanthropic funding. In
                1959, the Ford Foundation donated $25 million for “urgent
                problems in engineering education,” but with a catch: Stanford
                would need to raise $3 for every $1 awarded, bringing the total
                amount to $100 million. This became one of the largest
                unrestricted grants in the history of higher education at the
                time.
                <Footnotes footnoteRefs={[{ id: "footnote3", number: 3 }]} />
              </Text>
              <Text mb="none">
                In 1960, that same grant helped to form the university’s first
                Department of Chemical Engineering under chair David Malcom
                Mason.
                <Footnotes
                  footnoteRefs={[{ id: "footnote4", number: 4 }]}
                />{" "}
                The Ford Foundation also made a separate grant of $3.4 million
                to the School of Engineering to study plasma dynamics, solid
                mechanics, and engineering-economic systems.
                <Footnotes
                  footnoteRefs={[{ id: "footnote5", number: 5 }]}
                />{" "}
                Considerable as it was, however, private philanthropy was still
                no match for the federal government. In 1960, federal contracts
                composed 40 percent of the entire university’s operating budget.
                <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} />
              </Text>
            </OneCol>
            <StorySidebar hasLineArt lineArtType="medium">
              <MediaCaptionImage
                isPortrait
                aspectRatio="1x1"
                rounded
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371517/pettit_jn566pd7749_bm0d7v.jpg"
                alt="A portrait of Joseph Pettit"
                caption="Joseph Pettit, 1958. A professor of electrical engineering, Pettit served as dean of the School of Engineering from 1958 to 1972. He oversaw a time of growth for the school, during which the school became third in the nation in the number of advanced degrees conferred and the Department of Aeronautics and Astronautics, embracing the Space Age, was founded. | Special Collections & University Archives."
              />
            </StorySidebar>
          </TwoCol>
          <Container className="rs-mb-5">
            <MediaCaptionImage
              isParallax
              aspectRatio="16x9"
              rounded
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371511/computation_corner_dedication_o4xkzy.jpg"
              alt="A group of people at the Computation Center dedication"
              caption="Dedication of the Computation Center at Polya Hall, 1963, when computer science was still part of the Department of Mathematics. The IBM 7090 or the Burroughs B5000 may be the machines pictured here. | Special Collections & University Archives."
            />
          </Container>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol className="rs-mb-5">
            <H2>New tools on campus</H2>
            <Text>
              In January 1956, Stanford welcomed an IBM 650 mainframe computer
              to the Electronics Research Lab and offered its first courses in
              digital and analog computing. Together, the departments of
              industrial engineering, electrical engineering, statistics, and
              mathematics developed a graduate program in data processing and
              scientific computations.
              <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} /> The
              IBM 650, occupying what was then the only air-conditioned building
              on campus, would become the subject of college lore. “There was
              something special about the IBM 650, something that has provided
              the inspiration for much of my life’s work. Somehow this machine
              is powerful in spite of its severe limitations. Somehow it is
              friendly in spite of its primitive man-machine interface,” wrote
              one of the computer’s earliest acolytes, legendary programmer and
              computer science professor Donald Knuth, in his autobiography.
              <Footnotes footnoteRefs={[{ id: "footnote8", number: 8 }]} />
            </Text>
            <Text>
              Meanwhile, in the Department of Mathematics, situated in the
              School of Humanities and Sciences, a new discipline known as
              computer science took shape. George Forsythe, later referred to as
              the “Martin Luther of the Computer Reformation,” became the first
              faculty member at Stanford to focus on computer science.
              <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} />{" "}
              Forsythe foresaw a field headed in new directions that would bring
              it closer to engineering with every passing year. By 1965, the
              nascent division had transitioned to become one of the first
              departments of computer science in the nation. It would move to
              the School of Engineering in 1985.
            </Text>
            <Text mb="none">
              In 1955, Ronald Bracewell arrived on campus to begin his
              exploratory work in radio astronomy,
              <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} /> as
              did the school’s first solid-state specialist, John Linvill, who
              would quickly “transistorize” the electrical engineering
              curriculum.
              <Footnotes footnoteRefs={[{ id: "footnote11", number: 11 }]} /> In
              an opportune coincidence for Linvill and for the School of
              Engineering, William Shockley, coinventor of the semiconductor
              transistor while at Bell Labs, settled in Palo Alto in late 1955
              and founded Shockley Semiconductor Laboratory. Terman appointed
              him as a lecturer,
              <Footnotes
                footnoteRefs={[{ id: "footnote12", number: 12 }]}
              />{" "}
              and the following year he would share the 1956 Nobel Prize in
              Physics with John Bardeen and Walter H. Brattain, who had been his
              colleagues at Bell Labs.
              <Footnotes footnoteRefs={[{ id: "footnote13", number: 13 }]} />
            </Text>
          </OneCol>
          <BgImageWrapper
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371508/nuclear_reactor_c14sww.jpg"
            isTwoCol
            isImgOffset
            className="rs-mb-6"
          >
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.5}
              duration={1}
              rounded
              isCaptionInset
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371508/rm634fy8400_esg6hs.jpg"
              alt="A group of people standing in front of a nuclear reactor"
              caption="Left to right: Stanford electrical engineers John Linvill and James Gibbons, with Gerald Pearson of Bell Labs, March 1958. Gibbons, who would later become dean of the School of Engineering, holds a four-layer Shockley diode, the first semiconductor device ever made at Stanford—and presumably at any university. Gibbons had been taught to build semiconductor devices by William Shockley. Pearson, who had coinvented the solar cell battery while at Bell Labs, joined the Stanford electrical engineering faculty in 1960. | Courtesy James Gibbons."
            />
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.8}
              duration={1}
              rounded
              isCaptionInset
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/U9427_ffbey1.jpg"
              alt="Ronald Bracewell standing in front of a radio telescope"
              caption="Ronald Bracewell in 1959, standing in front of the Stanford Radio Astronomy Observatory, which he designed and built. Also known as Heliopolis, the Observatory was made up of thirty-two 10-foot-diameter parabolic antennas arranged in a cross. Together they measured solar activity and the sun’s temperature. The algorithms Bracewell developed to recreate images from scans were later used in computer-assisted tomography (CAT) scans for medical diagnosis. The array was demolished in 2006. | Special Collections & University Archives."
            />
          </BgImageWrapper>
          <OneCol>
            <Text>
              Linvill made a critical strategic decision to shift the focus of
              the solid-state engineering program from circuit design to the
              design and fabrication of semiconductor devices.
              <Footnotes
                footnoteRefs={[{ id: "footnote14", number: 14 }]}
              />{" "}
              More importantly, Linvill and Terman carved out a unique
              relationship with the mercurial Shockley, with a novel time-share
              arrangement for James Gibbons, one of Linvill’s graduate students
              and a future dean of the School of Engineering. Gibbons would
              spend half his time working at Shockley Semiconductor and half
              teaching and researching at Stanford. Gibbons recreated Shockley’s
              lab at Stanford, and there, in March 1958, the university’s first
              silicon device—a four-layer Shockley diode—was manufactured,
              making Stanford perhaps the first university in the United States
              to fabricate silicon components.
              <Footnotes footnoteRefs={[{ id: "footnote15", number: 15 }]} />
            </Text>
            <Text>
              Shockley would eventually be appointed professor in 1963 but,
              though he was once considered among the most important scientists
              of the twentieth century,
              <Footnotes footnoteRefs={[{ id: "footnote16", number: 16 }]} /> he
              squandered his legacy by focusing on eugenicist theories on race
              and intelligence.
              <Footnotes footnoteRefs={[{ id: "footnote17", number: 17 }]} />
            </Text>
            <Text>
              Under Bracewell’s guidance, construction began in 1959 on a radar
              tele- scope that would train thirty-two 10-foot-diameter parabolic
              antennas at the sun’s surface and employ them in unison—acting as
              one big antenna—to map temperature variations. Unlike the passive
              radio receivers that predated it, Bracewell’s telescope had a
              million-watt transmitter to bounce radar signals off the moon,
              Venus, and other nearby planetary objects. Among other endeavors,
              he used his two-way radar telescope to provide highly accurate
              measurements of cosmic distances, to study the surfaces of the
              moon and planets, and to understand how solar disturbances affect
              weather and communications on Earth.
              <Footnotes footnoteRefs={[{ id: "footnote18", number: 18 }]} />
            </Text>
            <Text mb="none">
              Sometime in 1956, physics professor Robert Hofstadter suggested
              that Stanford build a linear particle accelerator many times more
              powerful than its predecessor, the High Energy Physics Lab’s Mark
              III.
              <Footnotes
                footnoteRefs={[{ id: "footnote19", number: 19 }]}
              />{" "}
              The new accelerator, dubbed “The Monster” and later known simply
              as “Project M,” would need to stretch 2 miles through the hills
              behind campus. In 1957, the university submitted a successful
              proposal to the federal government and began construction of what
              would become the Stanford Linear Accelerator Center (SLAC). The
              price tag for that single facility was $100 million—equal to more
              than $1 billion today. Edward Ginzton, professor of electrical
              engineering and of applied physics, helped direct the massive
              undertaking, as he had with the Mark III and the klystron before
              it.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mb-5">
            <H2 className="mt-0">The space age</H2>
            <Text>
              The field of flight, fueled by the advent of jet and rocket
              engines in World War II, was also changing rapidly in this period.
              In September 1957, the School of Engineering established the
              Division of Aeronautics in the Department of Mechanical
              Engineering. Walter Vincenti, known for his study of high-speed
              aerodynamics and his later work on heat shields for spacecraft,
              was appointed as the division’s first professor. Nicholas Hoff, an
              expert in strong, lightweight aircraft structures, was named
              executive head.
              <Footnotes footnoteRefs={[{ id: "footnote20", number: 20 }]} />
            </Text>
            <Text mb="none">
              Just a month later, the Russians launched the world’s first
              satellite into orbit. The Space Age had begun. The division of
              aeronautics had been functioning like a department, Dean Pettit
              noted to Provost Terman, who approved Pettit’s request to
              formalize the Department of Aeronautics in 1959.
              <Footnotes
                footnoteRefs={[{ id: "footnote21", number: 21 }]}
              />{" "}
              The field was evolving rapidly, with high-speed flight and access
              to space having increasing influence on modern culture. To reflect
              the expanding potential of the Space Age, the name was changed in
              1961 to the Department of Aeronautics and Astronautics, the first
              department at Stanford explicitly dedicated to interdisciplinary
              research.
              <Footnotes footnoteRefs={[{ id: "footnote22", number: 22 }]} />
            </Text>
          </OneCol>
          <Container>
            <MediaCaptionImage
              isParallax
              isCaptionFullWidth
              isCaptionInset
              aspectRatio="16x9"
              rounded
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745544985/SC0122_s1_b267_f05_0594-04_dxnlq1.jpg"
              alt="Large radio telescope dish under construction on a grassy hill, surrounded by scaffolding and construction equipment, with a clear sky in the background."
              caption="The Stanford “Dish” radio telescope under construction in the Stanford foothills, 1961. A 70-ton, 150-foot steel and aluminum parabolic antenna with a surface spanning nearly half an acre, it was designed and built by the Stanford Research Institute for the U.S. government with support from the U.S. Air Force Office of Aerospace Research and the Defense Support Agency. In the 1940s, a group of Stanford’s electrical engineers––including Robert A. Helliwell, Laurence A. Manning, and O. G. Villard, Jr.—had tested the idea that radio signals bounced off meteor trails. As faculty, they formed the core of Stanford’s Radio Science Laboratory, later joined by professors Ronald Bracewell, Allen M. Peterson, and others. More than a decade later, the Dish enabled vastly expanded studies of scattering effects in Earth’s ionosphere and was used to detect Soviet radar by capturing radio signals that bounced off the moon. The Dish is still used today for satellite calibrations, spacecraft command and telemetry, and radio astronomy measurements. | Stanford News Service."
            />
          </Container>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="D" />
          </div>
          <OneCol className="rs-mb-5">
            <H2>The spirit of invention</H2>
            <Text>
              In the 1960s, with the Space Race in full stride and America eager
              to put a man on the moon, the possibilities of space seemed
              boundless. Stanford Nobel Laureate Joshua Lederberg, a geneticist,
              teamed with Elliott Levinthal, a mechanical engineer, to build the
              “multivator,” an instrument designed to conduct biological
              experiments to test for life on distant planets.
              <Footnotes
                footnoteRefs={[{ id: "footnote23", number: 23 }]}
              />{" "}
              Lederberg and Levinthal hoped the multivator would be aboard the
              first Mars lander mission planned for 1966, but that mission never
              materialized. Nearly a decade later, however, when the Viking
              Lander headed for Mars in 1975, it included a modified version of
              their model.
              <Footnotes footnoteRefs={[{ id: "footnote24", number: 24 }]} />
            </Text>
            <Text mb="none">
              That spirit of innovation was again on display in 1964 when John
              Linvill introduced the Optacon, a reading machine able to
              translate printed pages into a vibrating array of pins, creating a
              form of “electronic Braille” that could be read with the
              fingertips. Joining Linvill that day to help demonstrate the
              Optacon was Candace Linvill, the inventor’s twelve-year-old
              daughter, who was blind.
              <Footnotes footnoteRefs={[{ id: "footnote25", number: 25 }]} />
            </Text>
          </OneCol>
          <ImageGallery images={galleryImages} />
          <Scrollytelling
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371517/PC0086_b02_AP01_eewigz.jpg"
            className="rs-my-5"
          >
            <H2 align="center">The Stanford Industrial Park</H2>
            <MediaCaptionImage
              isParallax
              aspectRatio="8x5"
              rounded
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371517/PC0086_b02_AP01_eewigz.jpg"
              alt="Aerial view of the Stanford Industrial Park area before major development, showcasing diverse terrain and vegetation across a large expanse of land."
              caption="Aerial view showing the Stanford Industrial Park area before major development, ca. 1953. Hatfield Aerial Surveys | Special Collections & University Archives."
            />
            <ScrollyBubble>
              <Text>
                The Stanford Industrial Park opened in 1953 with the completion
                of its first building, constructed by Varian Associates, and
                became a model for regional industrial parks around the world.
                Known today as the Stanford Research Park, it remains Stanford
                University’s earliest, most direct, and most profitable
                contribution to the Silicon Valley landscape.
              </Text>
              <Text>
                Increasing university-industry interactions was a high priority
                for School of Engineering Dean Terman and others at Stanford
                during the 1950s. In 1952, Stanford made public its desire to
                find more clients willing to locate “shiny-faced plants like
                laboratories and pharmaceutical manufacturers,” as a writer for
                Business Week put it, on a 40-acre parcel of land off the main
                campus.
                <Footnotes footnoteRefs={[{ id: "footnote27", number: 27 }]} />
              </Text>
              <Text mb="none">
                The success of the Varian initiative moved Terman to oppose
                prevailing tendencies in the University’s master plan for campus
                land development. In 1954, Terman wrote of the master plan that
                “there is, in fact, already strong evidence that the area
                allocated for light industrial use may be too small.” If
                Stanford were to assume its rightful place as the “great
                intellectual center of the West,” it should think bigger, he
                argued. When he became provost in 1955, he used his influence to
                see that the Industrial Park acquired more tenants and
                industrial leases of the sort he favored: “high-technology”
                clients like Varian Associates.
                <Footnotes footnoteRefs={[{ id: "footnote28", number: 28 }]} />
              </Text>
            </ScrollyBubble>
            <MediaCaptionImage
              className="max-w-[72.5rem] mx-auto"
              captionTextColor="black"
              aspectRatio="9x16"
              rounded
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371511/SC0122_1981-087_b01_f005_ldesrt.jpg"
              alt="Map of the Stanford Industrial Park, showing the growth of Varian Associates, Hewlett-Packard, Fairchild, Xerox, and other businesses."
              caption="Map of the park, showing the growth  of Varian Associates, Hewlett-Packard, Fairchild, Xerox, and other businesses, August 17, 1962. | Special Collections & University Archives."
            />
            <ScrollyBubble>
              <Text>
                Another such company was Hewlett-Packard, founded by Terman’s
                former students William Hewlett and David Packard. The symbol of
                HP’s success was the opening of a new 170,000-square-foot plant
                in the Stanford Industrial Park in 1958. Architects from the
                firm Ehrlich-Rominger created what Western Electronic News
                called an “ultramodern” complex, built for energy efficiency and
                earthquake resistance.
                <Footnotes
                  footnoteRefs={[{ id: "footnote29", number: 29 }]}
                />{" "}
                Steel, glass, and reinforced concrete sprawled down terraced
                hills overlooking the northern end of the Santa Clara Valley.
                Inside the plant, innovative practices enhanced employees’
                comfort and productivity. The Industrial Park symbolized
                Stanford’s role in the growth of a new kind of American industry
                when it was featured at the International Exposition in Brussels
                later that year and on the itineraries of dignitaries such as
                France’s president Charles de Gaulle, who visited in 1960.
              </Text>
              <Text mb="none">
                — Henry Lowood
                <br />
                Harold C. Hohbach Curator for History of Science & Technology
                <br />
                Collections and Head, Silicon Valley Archives
              </Text>
            </ScrollyBubble>
          </Scrollytelling>
          <OneCol>
            <Text>
              The administrative organization of the School of Engineering was
              growing as well. In 1955, the School of Engineering elevated
              industrial engineering to a department. In 1960, the metallurgy
              program, which had been moved out of the School of Engineering in
              the 1940s, was brought back to the School of Engineering to create
              one of the country’s first materials science departments, soon to
              be among the top-ranked programs in the country.
              <Footnotes footnoteRefs={[{ id: "footnote30", number: 30 }]} />
            </Text>
            <Text>
              By the time he had founded the Stanford Artificial Intelligence
              Laboratory (SAIL) in 1962, professor John McCarthy had long since
              coined the term “artificial intelligence.” McCarthy, a giant in
              early AI, wanted to design computers that could simulate human
              thought31 with applications in robotics, expert systems, speech
              understanding, and cognitive science. He developed the programming
              language Lisp, an acronym for list processing; played computer
              chess by telegraph against Russian opponents; and invented
              computer time-sharing, which allowed multiple users to access a
              single computer system simultaneously,
              <Footnotes
                footnoteRefs={[{ id: "footnote32", number: 32 }]}
              />{" "}
              foreshadowing the advent of cloud computing decades later. SAIL
              became highly influential across Silicon Valley. Over time, its
              intellectual progeny would take influential roles at Apple,
              Alphabet, Microsoft, and Amazon, among many other companies, and a
              remarkable eighteen of its members would win the A.M. Turing
              Award, often described today as the “Nobel Prize of computer
              science,” granted by the Association for Computing Machinery
              (ACM).
            </Text>
            <Text>
              Buoyed by new funding streams, the School of Engineering
              established the Environmental Engineering and Science (EES)
              program in 1962, when Rolf Eliassen came to campus, bringing with
              him former MIT colleague Perry McCarty. The two would institute a
              novel approach to research that brought together engineers and
              scientists from various disciplines, each of whom could develop a
              unique interdisciplinary curriculum defined by their backgrounds
              and goals, to improve water science and engineering.
              <Footnotes footnoteRefs={[{ id: "footnote33", number: 33 }]} />
            </Text>
            <Text mb="none">
              In 1958, plans were made for the Harris J. Ryan High-Voltage
              Laboratory, a Stanford institution since 1926, to add a
              10-kilowatt nuclear “teach- ing reactor” fueled by uranium on loan
              from the Atomic Energy Commission.
              <Footnotes footnoteRefs={[{ id: "footnote34", number: 34 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="C" />
          </div>
          <Container className="rs-mt-5">
            <MediaCaptionImage
              isParallax
              aspectRatio="8x5"
              rounded
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745372793/00007002_0010_1_xasael.jpg"
              alt="Black and white photograph of individuals on bicycles in front of a building with a clock tower."
              caption="The Engineering Laboratories with old clock tower (left) and Engineering Corner, 1960. | Special Collections & University Archives."
            />
          </Container>
          <BgImageWrapper isImgOffset isTwoCol className="rs-mb-5 *:py-0">
            <MediaCaptionImage
              aspectRatio="3x4"
              rounded
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371508/nuclear_reactor_c14sww.jpg"
              alt="Black and white photo of several people gathered around a large industrial machine, engaged in discussion and observation"
              caption="Nuclear reactor in Stanford’s Nuclear Technology Laboratory, in the former Harris J. Ryan High-Voltage Laboratory, 1961. The 10-kilowatt teaching reactor was on loan from the Atomic Energy Commission. | Stanford News Service."
            />
            <MediaCaptionImage
              aspectRatio="3x4"
              rounded
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/U7477_neflff.jpg"
              alt="Two men collaborating on a large metal object in a workshop setting, surrounded by various tools and equipment."
              caption="Engineering professor George Leppert (right) and graduate student Gary Vliet take measurements in Stanford’s subcritical nuclear assembly, 1958. The apparatus, which operated like a reactor but could not sustain a chain reaction, was located in Stanford’s Nuclear Technology Laboratory. The nuclear engineering program, led by Professor Leppert, was developed in the Mechanical Engineering Department in 1955. | Stanford News Service."
            />
          </BgImageWrapper>
          <div className="flex w-full justify-start rs-mb-4">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol className="rs-mb-5">
            <H2 className="mt-0">Facilities upgrades</H2>
            <Text>
              With ever more contracts, faculty, and students flowing in, it was
              clear the School of Engineering was rapidly outgrowing its
              physical spaces. First Terman and then Pettit laid out plans for a
              new science quad. They opted for a 30-acre parcel across Lomita
              Mall expressly designed to promote “cross-fertilization” among
              scientific fields. The new quad would eventually total fourteen
              buildings, much of it financed through earnings from government
              contracts and faculty research, particularly the klystron.
              <Footnotes
                footnoteRefs={[{ id: "footnote36", number: 36 }]}
              />{" "}
              The klystron proved to be a wise investment for Stanford: Just
              $100 in seed money and the use of a small laboratory space
              returned royalties of more than $2.5 million over the life of the
              patent, funding three campus buildings and hundreds of thousands
              of dollars in research funding.
              <Footnotes footnoteRefs={[{ id: "footnote37", number: 37 }]} />
            </Text>
            <MediaCaptionImage
              aspectRatio="3x4"
              rounded
              isCaptionInset
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1745371517/SC0122_s1_b268_f06_1546-11_anr8um.jpg"
              alt="Black and white photo of a group of people gathered around a large industrial machine, engaged in discussion and observation"
              caption="Provost Frederick E. Terman (left), former dean of the School of Engineering, and Dean Joseph M. Pettit with Mrs. Thomas F. Peterson, 1963. The Thomas F. Peterson Engineering Laboratory—named in memory of her late husband, whose support made the facility possible—was dedicated in May 1963. | Stanford News Service."
            />
            <Text>
              By the mid-1960s, the Stanford School of Engineering shared a
              place among the top engineering education institutions in the
              nation, if not the world. Stanford Engineering ranked third in the
              United States in graduate degrees conferred in 1961–1962: 302
              master’s degrees, 33 engineer’s degrees, and 75 doctorates.
              <Footnotes footnoteRefs={[{ id: "footnote38", number: 38 }]} />
              That leadership was reflected in the starting salaries graduates
              reported during the mid- 1960s, with Stanford Engineering’s
              averages well above the national averages.
              <Footnotes footnoteRefs={[{ id: "footnote39", number: 39 }]} />
            </Text>
            <Text mb="none">
              Despite its sweeping scale of change and innovation, Stanford
              Engineering’s fourth decade was but a foundation for the advances
              and innovations—in campus growth, semiconductors, computers, radar
              telescopes, and beyond—that were all yet to come.
            </Text>
          </OneCol>
          <Container pt={4} pb={7} bgColor="blue">
            <OneCol>
              <FootnotesList footnotes={footnotes} />
            </OneCol>
          </Container>
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
