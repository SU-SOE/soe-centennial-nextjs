import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { OneCol, TwoCol } from "@/components/Layout";
import { Masthead } from "@/components/Masthead";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Quote } from "@/components/Quote";
import {
  Footnotes,
  FootnotesList,
  StoryImpactBanner,
  StorySidebar,
} from "@/components/Story";
import {
  ExploreMore,
  BgImageWrapper,
  Scrollytelling,
  ScrollyBubble,
} from "@/components/Story/";
import { Heading, Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { H2, H3 } from "@/components/Typography/Header";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";

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
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746731525/CC146_metadata_mwmzw7.png",
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
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1746731525/CC146_metadata_mwmzw7.png",
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
    heading: "A period of transformation",
    chapter: "Decade 4",
    href: "/stories/a-period-of-transformation",
    imageUrl:
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1745371509/PC0141_b12_Dish_0088_EWS_emptkd.jpg",
  },
];

const footnotes = [
  {
    number: 1,
    id: "footnote1",
    text: "C. Stewart Gillmor, Fred Terman at Stanford: Building a Discipline, a University, and Silicon Valley (Stanford University Press, 2004), 263–265.",
  },
  {
    number: 2,
    id: "footnote2",
    text: "Ibid., 263.",
  },
  {
    number: 3,
    id: "footnote3",
    text: "Ibid., 265.",
  },
  {
    number: 4,
    id: "footnote4",
    text: "Annual Report of the President of Stanford University for the Fifty-Fifth Academic Year Ending August 31, 1946, 146.",
  },
  {
    number: 5,
    id: "footnote5",
    text: "Ibid.",
  },
  {
    number: 6,
    id: "footnote6",
    text: "Gillmor, Fred Terman at Stanford, 270.",
  },
  {
    number: 7,
    id: "footnote7",
    text: "Annual Report of the President of Stanford University for the Fifty-Fifth Academic Year Ending August 31, 1946, 146.",
  },
  {
    number: 8,
    id: "footnote8",
    text: "Gillmor, Fred Terman at Stanford, 267.",
  },
  {
    number: 9,
    id: "footnote9",
    text: "Annual Report of the President of Stanford University for the Fifty-Seventh Academic Year Ending August 31, 1948, 24–25.",
  },
  {
    number: 10,
    id: "footnote10",
    text: "US Inflation Calculator, https://www.usinflationcalculator.com.",
    sourceLink: "https://www.usinflationcalculator.com",
  },
  {
    number: 11,
    id: "footnote11",
    text: "Stuart W. Leslie, “Playing the Education Game to Win: The Military and Interdisciplinary Research at Stanford,” Historical Studies in the Physical and Biological Sciences 18, no. 1 (1987): 55–88.",
  },
  {
    number: 12,
    id: "footnote12",
    text: "“History,” Stanford Ginzton Lab, https://ginzton.stanford.edu/about-lab/history.",
    sourceLink: "https://ginzton.stanford.edu/about-lab/history",
  },
  {
    number: 13,
    id: "footnote13",
    text: "Leslie, “Playing the Education Game to Win,” 67.",
  },
  {
    number: 14,
    id: "footnote14",
    text: "Annual Report of the President of Stanford University for the Fifty-Sixth Academic Year Ending August 31, 1947, 121.",
  },
  {
    number: 15,
    id: "footnote15",
    text: "Ibid.",
  },
  {
    number: 16,
    id: "footnote16",
    text: "Annual Report of the President of Stanford University for the Fifty-Seventh Academic Year Ending August 31, 1948, 152.",
  },
  {
    number: 17,
    id: "footnote17",
    text: "Gillmor, Fred Terman at Stanford, 253.",
  },
  {
    number: 18,
    id: "footnote18",
    text: "Ibid., 254.",
  },
  {
    number: 19,
    id: "footnote19",
    text: "Ibid., 307–308.",
  },
  {
    number: 20,
    id: "footnote20",
    text: "Ibid., 302.",
  },
  {
    number: 21,
    id: "footnote21",
    text: "Ibid., 307–308.",
  },
  {
    number: 22,
    id: "footnote22",
    text: "Ibid.",
  },
  {
    number: 23,
    id: "footnote23",
    text: "Ibid.",
  },
  {
    number: 24,
    id: "footnote24",
    text: "Karen E. Bartholomew, Claude S. Brinegar, and Roxanne Nilan, eds., A Chronology of Stanford University and Its Founders, 1824–2000 (Stanford Historical Society, 2001), 77.",
  },
  {
    number: 25,
    id: "footnote25",
    text: "Stanford Engineering News no. 68 (May 1969).",
  },
  {
    number: 26,
    id: "footnote26",
    text: "Jonathan B. Freund, “Flow Computation Pioneer Irmgard Flügge-Lotz (1903–1974).” Annual Review of Fluid Mechanics 55, no. 1 (2023): 6, https://doi.org/10.1146/annurev-fluid-030822-112654.",
    sourceLink: "https://doi.org/10.1146/annurev-fluid-030822-112654",
  },
  {
    number: 27,
    id: "footnote27",
    text: "Ibid.",
  },
  {
    number: 28,
    id: "footnote28",
    text: "Ibid.",
  },
  {
    number: 29,
    id: "footnote29",
    text: "Stanford Engineering News no. 68 (May 1969).",
  },
  {
    number: 30,
    id: "footnote30",
    text: "Stanford Engineering News no. 85 (September 1972).",
  },
  {
    number: 31,
    id: "footnote31",
    text: "Freund, “Flow Computation Pioneer Irmgard Flügge-Lotz,” 6.",
  },
  {
    number: 32,
    id: "footnote32",
    text: "Gillmor, Fred Terman at Stanford, 305.",
  },
  {
    number: 33,
    id: "footnote33",
    text: "Stanford Engineering Center for Global and Online Education, “Our History,” https://cgoe.stanford.edu/our-history.",
    sourceLink: "https://cgoe.stanford.edu/our-history",
  },
  {
    number: 34,
    id: "footnote34",
    text: "Gillmor, Fred Terman at Stanford, 310.",
  },
];

export default function page() {
  return (
    <>
      <Masthead logoColor="white" isBgDark isOverlap />
      <main id="main-content">
        <article>
          <StoryImpactBanner
            isCaptionInHero
            bgColor="red"
            chapterColor="digital-red"
            chapter="Decade 3"
            heading="The Terman Era"
            dek="1945 – 1954"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766098/hewlett-packard_dedication_i3tnua.jpg"
            caption="Left to right: David Packard, William Hewlett, and Dean of Engineering Fred Terman attend the dedication of the Hewlett-Packard wing in Stanford’s Electronics Research Laboratory, 1952. | Stanford News Service."
            alt="David Packard and Fred Terman shake hands at the entrance of a building while a third unnamed man stands in the background."
            className="mb-0"
          />
          <BgImageWrapper
            hasBgImage
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766101/mark_iii_linear_accelerator_hh3pcm.jpg"
            bgColor="fog-light"
            className="rs-py-5 mb-0"
          >
            <div className="max-w-1500 w-full cc 3xl:p-0">
              <Quote
                className="m-0 mr-auto"
                width="wide"
                body="Stanford is not only doing more and higher quality research in engineering than would otherwise be possible, it is also training more graduate students, and is training them better than ever before."
                source="— Frederick Terman, 1948"
              />
            </div>
          </BgImageWrapper>
          <OneCol>
            <H2 className="rs-mt-6">1945 – 1954</H2>
            <Text variant="overview">
              Samuel Morris recommended Frederick Terman to be his successor as
              dean of the School of Engineering. Terman, on leave from Stanford
              at the time, had been serving since 1942 in a wartime appointment
              as head of the top-secret Radio Research Laboratory at Harvard
              University. Yet throughout the war, Terman was anticipating a
              period after the war he believed would be defined by unprecedented
              technological advancement led by engineers.
              <Footnotes footnoteRefs={[{ id: "footnote1", number: 1 }]} />
            </Text>
          </OneCol>
          <TwoCol isSidebar className="rs-mt-6 rs-mb-3">
            <OneCol>
              <Text>
                Despite Terman’s absence, in December 1944 Stanford President
                Donald Tresidder named Terman the third dean of the Stanford
                School of Engineering, with a strong endorsement from the
                engineering faculty. “Dr. Terman’s scholarly contributions in
                the field of electrical engineer- ing and his administration of
                one of America’s largest war research projects place him among
                the outstanding engineers in the country,” Tresidder said,
                announcing Terman’s appointment.
                <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} />
              </Text>
              <Text>
                Once he was back in Palo Alto, Terman’s first order of business
                was to prepare the university for the expected influx of
                students attending American universities on the GI Bill. Those
                students would need housing, new classrooms and labs, and new
                faculty to lead the way. Terman laid out a “Plan for 20 Years of
                Greatness” that would see “Stanford’s engineering and physical
                sciences departments developing in size and quality of research,
                especially in fields pursued during the war.”
                <Footnotes footnoteRefs={[{ id: "footnote3", number: 3 }]} /> In
                President Tresidder’s annual report, Terman wrote in August
                1946: “The year that has just been concluded has been one of
                change and readjustment in that it has marked the transition
                from war to post-war conditions. Those faculty members who had
                been on war service returned during the year, and by the end of
                the Summer quarter the pre-war faculty had been restored.”
                <Footnotes footnoteRefs={[{ id: "footnote4", number: 4 }]} />
              </Text>
              <Text>
                The school quickly rebounded from record-low wartime
                enrollments. Between the fall and spring quarters of 1945–1946,
                the “civilian engineering” program tripled in size. The
                expansion was so great that Terman broadened summer quarter
                offerings to meet the demand. The influx of students was felt
                across Stanford: in winter 1946, university enrollment was
                7,000, with housing for only 4,000; a year later, enrollment was
                8,203.
              </Text>
              <Quote
                body="The year that has just been concluded has been one of change and readjustment in that it has marked the transition from war to post-war conditions. Those faculty members who had been on war service returned during the year, and by the end of the Summer quarter the pre-war faculty had been restored."
                source="— Fred Terman"
              />
            </OneCol>
            <StorySidebar hasLineArt>
              <MediaCaptionImage
                rounded
                isPortrait
                className="mb-0"
                aspectRatio="1x1"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766101/terman_qm422bp1949_5.57.39_PM_iqbfsd.jpg"
                caption="Fred Terman, dean of the Schoolof Engineering, circa 1950. |  Special Collections & University Archives."
              />
              <MediaCaptionImage
                rounded
                isPortrait
                className="mb-0"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766100/hugh_skilling_dipkk1.jpg"
                aspectRatio="1x1"
                caption="Hugh Hildreth Skilling, 1946. Skilling began his career at Stanford in 1926 as an undergraduate teaching assistant in physics. Promoted to associate professor in 1939, he later became head of the Department of Electrical Engineering, a post he held for twenty- three years. He served as acting dean of the School of Engineering from fall 1944 through the end of 1945. | Stanford News Service."
              />
            </StorySidebar>
          </TwoCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mb-2">
            <Text>
              The school quickly rebounded from record-low wartime enrollments.
              Between the fall and spring quarters of 1945–1946, the “civilian
              engineering” program tripled in size.
              <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} /> The
              expansion was so great that Terman broadened summer quarter
              offerings to meet the demand. The influx of students was felt
              across Stanford: in winter 1946, university enrollment was 7,000,
              with housing for only 4,000; a year later, enrollment was 8,203.
            </Text>
            <Text>
              On the administrative front, in 1946 the Department of Mining was
              at last merged with the Department of Geology and moved from the
              School of Engineering into the School of Earth Sciences as the
              Department of Mineral Sciences. Terman also transitioned the
              standard engineering degree from a bachelor of arts (BA) to a
              bachelor of science (BS) to reflect the growing technical demands
              of the curriculum.
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-5">
            <OneCol>
              <Heading>Harnessing Federal Funding</Heading>
              <Text>
                Before and even during the war, the School of Engineering’s
                share of federal research dollars had been limited, and the
                School of Engineering budget for the 1946–1947 school year had
                reached its lowest level since 1926.
                <Footnotes
                  footnoteRefs={[{ id: "footnote6", number: 6 }]}
                />{" "}
                Terman refused to accept the status quo and in the postwar
                period looked for opportunities to expand funding. Reporting on
                federal contracts from the Navy’s Office of Research and
                Inventions of the Navy (later the Office of Naval Research),
                Army Air Force, Signal Corps, and the National Bureau of
                Standards, he wrote to President Tresidder in 1946 that “A
                substantial proportion of the Dean’s time has been devoted to
                the establishment of a research program having long range
                values, sponsored by government agencies....[A]nd the program is
                still expanding.”
                <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} />
              </Text>
              <Text>
                Research dollars flowed westward from Washington. Within months
                of returning to campus, Terman had secured government-funded
                projects totaling $380,000 per year, including $210,000 for
                electrical engineering, $81,000 for mechanical engineering,
                $59,000 for physics, and $30,000 for chemistry.
                <Footnotes footnoteRefs={[{ id: "footnote8", number: 8 }]} /> By
                1948, government-sponsored research in civil, electrical, and
                mechanical engineering neared a half million dollars
                <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} />
                —roughly $6.5 million in inflation-adjusted dollars today.
                <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} />
              </Text>
              <Text>
                Notable among the many new initiatives at Stanford was the 1945
                establishment of the Microwave Laboratory, which Terman had
                orchestrated even while stationed across the country. Centering
                the Microwave Lab in the School of Physical Science but sharing
                close ties to the School of Engineering was typical of the
                School of Engineering’s emphasis on interdisciplinary
                collaboration. Director William Hansen, a physicist, had
                selected Edward Ginzton, an engineer, as his second in charge
                and appointed him associate professor of “applied physics”—a
                neologism highlighting the “interdisciplinary contours of
                physics and electrical engineering at Stanford.”
                <Footnotes
                  footnoteRefs={[{ id: "footnote11", number: 11 }]}
                />{" "}
                In 1947, Hansen and Ginzton used klystrons to create the first
                linear electron accelerator.
                <Footnotes footnoteRefs={[{ id: "footnote12", number: 12 }]} />
              </Text>
            </OneCol>
            <StorySidebar lineArtType="short" hasLineArt>
              <MediaCaptionImage
                rounded
                isPortrait
                className="mb-0"
                aspectRatio="1x1"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766094/00020166_001_bvjrae.jpg"
                caption="Clarkson H. Oglesby originated the undergraduate construction option in civil engineering and in the mid- 1950s helped expand it into a program leading to the MS, engineer, and doctoral degrees. | Stanford News Service."
              />
            </StorySidebar>
          </TwoCol>
          <BgImageWrapper
            isImgOffset
            isTwoCol
            hasBgImage
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766096/00007003_0005_qriugd.jpg"
            bgColor="fog-light"
          >
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.2}
              duration={1}
              rounded
              aspectRatio="4x3"
              captionTextColor="black"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766097/ginzton_kaplan_kdqwx8.jpg"
              caption="Professor Edward Ginzton, left, and Dr. Henry Kaplan, a Stanford Medicine radiologist, in front of klystron gauges, circa 1953. Kaplan and Ginzton coinvented North America’s first medical linear accelerator, a 6-million-volt machine constructed at the Stanford Medical Center, then in San Francisco. The Stanford device was first used in 1955, soon after a similar device debuted in England. | Stanford News Service."
            />
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.4}
              duration={1}
              rounded
              aspectRatio="4x3"
              captionTextColor="black"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766100/ginzton_accelerator_ifihwq.jpg"
              caption="Edward L. Ginzton with the Mark III linear accelerator, 1951. Ginzton earned his doctorate in electrical engineering at Stanford and was later appointed as a professor of electrical engineering and applied physics. He led a Stanford team that designed the world’s most powerful particle accelerator. | Stanford News Service."
            />
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.4}
              duration={1}
              rounded
              aspectRatio="4x3"
              captionTextColor="black"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766101/mark_iii_linear_accelerator_hh3pcm.jpg"
              alt="An indoor room filled with large machinery"
              caption="Mark III linear accelerator, 1952. This was one of many similarly named accelerators and detectors created and used at the Hansen Experimental Physics Laboratory (HEPL) and at the Stanford Linear Accelerator Center (SLAC). | Stanford News Service."
            />
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.2}
              duration={1}
              rounded
              aspectRatio="4x3"
              captionTextColor="black"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766100/linear_accelerator_first_section_f7g4bv.jpg"
              alt="Two men in an indoor room operating on a part of the Mark III linear accelerator"
              caption="First section of the Mark III linear accelerator, 1949. The accelerators were all built on campus at the Hansen Experimental Physics Lab (HEPL) and were precursors to the 2-mile accelerator later built at SLAC, the Stanford Linear Accelerator Center. | Stanford News Service."
            />
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.2}
              duration={1}
              rounded
              aspectRatio="4x3"
              captionTextColor="black"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766100/hansen_accelerator_txakxp.jpg"
              alt="William W. Hansen standing by the Mark I electron linear accelerator prototype"
              caption="William W. Hansen with the 3-foot Mark I electron linear accelerator prototype, 1947. It was built, as all the Mark accelerators were, in the basement of the physics department in the Hansen Experimental Physics Lab (HEPL). | Stanford News Service."
            />
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.4}
              duration={1}
              rounded
              aspectRatio="4x3"
              captionTextColor="black"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766102/ZZ470101_di0q15.jpg"
              alt=""
              caption="Felix Bloch, right, and William Hansen demonstrating a working model of equipment used in their research, 1947. Bloch, a Stanford professor of physics, invented a new technique of qualitative analysis by nuclear reaction; William Hansen was director of the Stanford Microwave Laboratory. | Stanford News Service."
            />
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.2}
              duration={1}
              rounded
              aspectRatio="4x3"
              captionTextColor="black"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766094/00006955_0005_mzu03z.jpg"
              alt="Two men in a lab with large machinery"
              caption="Electrical engineering faculty Oswald Garrison Villard, Jr. (MEng ’43, PhD ’49), right, and Allen M. Peterson (BS ’48, MS ’49, PhD ’52) with equipment used to record meteors in the ionosphere, August 1950. Their pioneering work on reflecting radar signals off the ionosphere led to Villard’s 1959 debut of “over-the-horizon” radar, which transcended line-of-sight limitations and laid the foundation for advanced long-range surveillance and missile detection systems. | Special Collections & University Archives."
            />
          </BgImageWrapper>
          <OneCol className="rs-mt-6">
            <Text>
              The Microwave Lab would exceed even Terman’s high expectations,
              even- tually producing fundamental research in nuclear physics,
              high-powered microwave tubes, microwave and transistor
              engineering, and plasma and laser physics. In the following
              decade, it would be developed into the Stanford Linear Accelerator
              (SLAC), which would later grow into “a huge federal research
              facility.”
              <Footnotes footnoteRefs={[{ id: "footnote13", number: 13 }]} />
            </Text>
            <H2>Strategy for growth</H2>
            <Text>
              Terman imagined nothing less than a “great new era of
              industrialization” for the American West, a transformation led by
              the West’s own intellectuals—preferably trained at Stanford.
              “[I]ndustrial activity that depends upon imported brains and
              second-hand ideas cannot hope to be more than a vassal that pays
              tribute to its overlords, and is permanently condemned to an
              inferior competitive position,” Terman wrote.
              <Footnotes
                footnoteRefs={[{ id: "footnote14", number: 14 }]}
              />{" "}
              Western universities, he believed, “can train the type of men
              required to exercise leadership in an expanding industry. They can
              be a source of ideas, and of inspiration that stimulates people to
              new accomplishments.
              <Footnotes footnoteRefs={[{ id: "footnote15", number: 15 }]} />
            </Text>
          </OneCol>
          <Container className="rs-mt-6">
            <MediaCaptionImage
              isParallax
              rounded
              animation="fadeIn"
              aspectRatio="3x2"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766101/pb977cg5869_00_0001_knwaxb.jpg"
              alt=""
              caption="Aerial view showing the Stanford Industrial Park area before major development, ca. 1953. | Hatfield Aerial Surveys / Special Collections & University Archives."
            />
          </Container>
          <Quote
            className="rs-my-6"
            width="wide"
            quoteColor="red"
            teaser="[Western universities] can serve as catalysts that speed the reaction by which the discoveries of pure science are turned to practical uses that advance industrial technology and create new industries.”"
            source="— Fred Terman"
          />
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol>
            <Text>
              Robust funding made new achievements possible. “Stanford is not
              only doing more and higher quality research in engineering than
              would otherwise be possible, but it is also training more graduate
              students, and is training them better than ever before,” Terman
              wrote in 1948.
              <Footnotes
                footnoteRefs={[{ id: "footnote16", number: 16 }]}
              />{" "}
              The university’s status, Terman said, demanded “an understanding
              of what it is that being at the top represents. The most important
              measure of success is in terms of student output, which must be
              large in number and outstanding in quality.”
              <Footnotes footnoteRefs={[{ id: "footnote17", number: 17 }]} />
            </Text>
          </OneCol>
          <TwoCol className="rs-mt-6 rs-mb-5">
            <OneCol>
              <Text>
                Terman set about a new strategy of carefully selecting fields of
                study for which he would deliberately—and aggressively—select
                and recruit faculty, an approach he called “steeples of
                excellence.”
                <Footnotes
                  footnoteRefs={[{ id: "footnote18", number: 18 }]}
                />{" "}
                He chose fields of highest priority to Stanford’s western
                region—such as oil, geology, heat transfer, and chemical
                engineering—and also fields with the most rapid growth—such as
                radio, electronics, and mechanical structures. For faculty, he
                wanted not the greatest numbers, but the greatest achievers,
                whom he found in recruits like Stephen Timoshenko, whose work
                defined an entire era in mechanical and civil engineering.
                Terman also fought for higher salaries for faculty, whose pay
                trailed both that offered by other leading universities and,
                especially, that offered by industry, where a highly trained
                engineer could make several times the pay of a university
                professor—a challenge that persists today.
              </Text>
              <Text>
                Terman also fought for promotions for various non-faculty
                lecturers and “teaching specialists.” One such advancement went
                to Irmgard Flügge-Lotz, who had become a lecturer in 1949 and
                finally, in 1960, became the first female professor at the
                School of Engineering. The author of four dozen or more academic
                papers and two books, Flügge-Lotz was respected for her work in
                aerodynamics and automatic control theory. She was particularly
                known for the Lotz Method for predicting aerodynamic lift on
                airplane wings, which was adopted as standard in the field.
              </Text>
            </OneCol>
            <div>
              <MediaCaptionImage
                rounded
                aspectRatio="4x3"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766103/PC0141_b07_Timoshenko_0120_vzth15.jpg"
                caption="Stephen P. Timoshenko teaching a class, 1948. A renowned expert, teacher, and writer widely regarded as the “father” of applied mechanics in the United States, he was born in the Russian Empire in 1878. Timoshenko taught at Stanford from 1936 to 1963 and was instrumental in the formation of the Division of Engineering Mechanics in 1949. | Special Collections & University Archives."
              />
            </div>
          </TwoCol>
          <OneCol className="rs-mb-5">
            <Text>
              As the 1950s opened, the Korean conflict accelerated the rise in
              government-sponsored radio and electronics research at Stanford.
              <Footnotes
                footnoteRefs={[{ id: "footnote19", number: 19 }]}
              />{" "}
              Terman had been planning for an Electronics Research Laboratory
              (ERL), which opened in 1951, to coordinate research operations in
              electrical engineering.
              <Footnotes
                footnoteRefs={[{ id: "footnote20", number: 20 }]}
              />{" "}
              The Office of Naval Research said in 1950 that it saw Stanford as
              “about first in usefulness,” among engineering partners, promising
              to invest a million dollars in “fast-paced electronics research”
              at the school.
              <Footnotes footnoteRefs={[{ id: "footnote21", number: 21 }]} />
            </Text>
            <Text>
              The ERL was soon pulling in so much research funding, $700,000 per
              year, that an expansion was approved in November 1951, just months
              after the laboratory opened; the Applied Electronics Laboratory
              (AEL) was added in 1958.
              <Footnotes
                footnoteRefs={[{ id: "footnote22", number: 22 }]}
              />{" "}
              True to Terman’s no-nonsense style, the ERL and AEL buildings were
              practical concrete-and-wood structures designed not for comfort or
              aesthetics but for serious science. They would serve Stanford
              engineering students for another forty years.
              <Footnotes footnoteRefs={[{ id: "footnote23", number: 23 }]} />
            </Text>
          </OneCol>
          <BgImageWrapper isTwoCol isImgOffset bgColor="blue" className="mb-0">
            <MediaCaptionImage
              rounded
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766096/00006962_0001_a0zehi.jpg"
              alt="A grassy field with several mid-century buildings and parked cars in the background, partially framed by tree branches."
              caption="Images left and right. Housed in utilitarian buildings, the Electronics Research Laboratory (ERL) opened in 1951 and provided space for coordinating research operations in electrical engineering. The ERL was soon drawing $700,000 per year in research funding, resulting in expansion plans for an Applied Electronics Laboratory (AEL), approved just months later. | Stanford University Planning Office."
            />
            <MediaCaptionImage
              rounded
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766094/00006962_0005_jhmwwj.jpg"
              alt="A modern, single-story building with large windows and flat roofs, partially shaded by large trees, and surrounded by bare ground."
            />
          </BgImageWrapper>
          <OneCol>
            <H2 className="rs-mt-7">Unleashing the Power of Computation</H2>
            <Text>
              In 1953, Stanford established its first Computation Center, where
              a single high-speed IBM Card-Programmed Calculator churned through
              mountains of computations. The center was in such high demand that
              use of the Computation Center was reserved for faculty and
              graduate research only. Stanford’s first true computer, an IBM
              650, would not arrive until 1956.
              <Footnotes
                footnoteRefs={[{ id: "footnote24", number: 24 }]}
              />{" "}
              The Computer Science Department was originally in the Department
              of Mathematics in the School of Humanities and Sciences, where it
              remained until 1985, when it was moved to the School of
              Engineering.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <TwoCol className="rs-mt-6 rs-mb-8">
            <div>
              <MediaCaptionImage
                rounded
                aspectRatio="4x3"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766095/CC183_avv3z0.jpg"
                caption="John G. Herriot, professor of mathematics, when he became the first director of the newly founded Computation Center in 1953. In spring 1955, he taught the first programming course, “Theory and Operation of Computing Machines,” to twenty-five students using an IBM Card- Programmed Calculator, Model II. Computer Science was in the Department of Mathematics until 1985, when it was moved to the School of Engineering. | Stanford News Service."
              />
            </div>
            <div>
              <H2 className="mt-0">The Honors Cooperative Program</H2>
              <Text>
                In addition to seeking federal funding, Terman was a proponent
                of close associations between academia and industry to advance
                research while providing employment and entrepreneurial
                opportunities for graduates. In 1954, he inaugurated the Honors
                Cooperative Program, which welcomed working electrical engineers
                who wanted to earn a master’s degree part-time while they were
                still employed. Under the program, four companies—Sylvania
                Corporation, Hewlett-Packard, Stanford Research Institute, and
                General Electric—signed five-year agreements through which they
                selected qualified employees to enroll. At six credits per
                quarter, a candidate could earn a master’s degree in two
                calendar years, a service for which the companies gladly paid
                double Stanford’s standard tuition.
                <Footnotes
                  footnoteRefs={[{ id: "footnote32", number: 32 }]}
                />{" "}
                Over the years, the Honors Cooperative Program has provided
                thousands of engineers with career-changing graduate degrees,
                with a marked effect on the “innovation ethos” that has set
                Silicon Valley apart. The Honors Cooperative Program remains a
                key feature of the Stanford Engineering Center for Global and
                Online Education and, seven decades later, continues to play an
                important role in Silicon Valley.
                <Footnotes footnoteRefs={[{ id: "footnote33", number: 33 }]} />
              </Text>
            </div>
          </TwoCol>

          <Scrollytelling
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766101/pb977cg5869_00_0001_knwaxb.jpg"
            heading="Irmgard Flügge-Lotz"
          >
            <MediaCaptionImage
              rounded
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1744766099/flugge-lotz_n5vuhj.jpg"
              caption="Irmgard Flügge-Lotz. | Stanford News Service."
            />
            <ScrollyBubble>
              <H3 className="mt-0">“A Life Which Would Never Be Boring”</H3>
              <Text>
                As a child in Germany, Irmgard Flügge-Lotz lived near the home
                of Count Ferdinand von Zeppelin. She later recalled that
                witnessing his tests of huge airships was a thrill that stayed
                with her and fueled her desire to understand the science of
                flight.
                <Footnotes footnoteRefs={[{ id: "footnote25", number: 25 }]} />
              </Text>
              <Text>
                Early in her career, Flügge-Lotz became known for the Lotz
                Method, her process for calculating the spanwise lift
                distribution of airplane wings, which became an international
                industry standard.
                <Footnotes footnoteRefs={[{ id: "footnote26", number: 26 }]} />
              </Text>
              <Text>
                In 1948, she and her husband, Wilhelm Flügge, accepted offers
                from Stanford Engineering. Flügge-Lotz left her position as
                chief of a research group in theoretical aerodynamics at the
                French National Office for Aeronautical Research (ONERA) to
                bring her expertise in automatic control theory to Stanford,
                where she served as a lecturer. In September 1960, she became
                the first female professor in the School of Engineering,
                appointed in both aeronautical engineering and engineering
                mechanics.
              </Text>
              <Text>
                Flügge-Lotz was recognized for her enthusiasm and expertise in
                fluid mechanics—particularly in boundary-layer theory and
                numerical models. She taught courses on boundary-layer theory;
                introduced a novel, year-long sequence of courses in
                mathematical hydro- and aerodynamics; developed new courses in
                the theory of automatic controls; advised doctoral students for
                dissertations in aerodynamic theory; and established the weekly
                Fluid Mechanics Seminar, which continues at Stanford today.
                <Footnotes footnoteRefs={[{ id: "footnote27", number: 27 }]} />
              </Text>
              <Text>
                A supportive advisor, Flügge-Lotz would publish reports on
                automatic control devices with her students. Because these
                devices were often electrical, the studies often led to
                increased contact and collaboration with faculty and students
                from the Department of Electrical Engineering.
                <Footnotes footnoteRefs={[{ id: "footnote28", number: 28 }]} />
              </Text>
              <Text>
                Reflecting on her life, Flügge-Lotz said, “I wanted a life which
                would never be boring. That meant a life in which always new
                things would occur.”
                <Footnotes
                  footnoteRefs={[{ id: "footnote29", number: 29 }]}
                />{" "}
                She felt most satisfied when she had “an interesting problem
                that has resisted being solved, and then solving it.”
                <Footnotes footnoteRefs={[{ id: "footnote30", number: 30 }]} />
              </Text>
              <Quote
                body="Her contributions have spanned a lifetime during which she demonstrated, in a field dominated by men, the value and quality of a woman’s intuitive approach in searching for and discovering solutions to complex engineering problems."
                source="Leaders at the University of Maryland"
                className="rs-mb-4"
              />
              <Text>
                Flügge-Lotz made numerous mathematical contributions to the
                fields of aerodynamics and automatic control theory. She
                published more than fifty technical papers, authored two books,
                and paved the way for more women in engineering in the years to
                come. In the citation of her 1973 honorary doctorate, leaders at
                the University of Maryland wrote, “Her contributions have
                spanned a lifetime during which she demonstrated, in a field
                dominated by men, the value and quality of a woman’s intuitive
                approach in searching for and discovering solutions to complex
                engineering problems.”
                <Footnotes footnoteRefs={[{ id: "footnote31", number: 31 }]} />
              </Text>
              <Text mb="0">
                —Hanna Ahn
                <br />
                Assistant University Archivist for
                <br />
                Special Collections & University Archives
              </Text>
            </ScrollyBubble>
          </Scrollytelling>
          <OneCol>
            <Heading>First Steps to Semiconductors</Heading>
            <Text>
              After the demonstration of the world’s first transistor in 1947,
              Terman sought during the early 1950s to make Stanford a leader in
              solid-state electronics and in the study of semiconductors. His
              handwritten notes from 1948 show his emerging interest in the
              promising field. With characteristic understatement he wrote, “The
              transistor is a great new force that will revolutionize many
              aspects of electronics in the next five to ten years.”
              <Footnotes footnoteRefs={[{ id: "footnote34", number: 34 }]} />
              Achievements in the decade to come would prove him correct.
            </Text>
            <Text>
              Unimagined horizons lay ahead for engineering, for the school, and
              for Terman himself. As the school’s third decade came to a close,
              the Fred Terman era was etched into history.
            </Text>
          </OneCol>
          <Container mt={4} mb={7}>
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
