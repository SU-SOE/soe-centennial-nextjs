/* eslint-disable no-irregular-whitespace */
import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Button } from "@/components/Cta";
import { OneCol, ThreeCol, TwoCol } from "@/components/Layout";
import { Masthead } from "@/components/Masthead";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Quote } from "@/components/Quote";
import {
  Footnotes,
  StoryCard,
  StoryImpactBanner,
  StorySidebar,
} from "@/components/Story";
import { ExploreMore } from "@/components/Story/ExploreMore";
import { StoryGrid } from "@/components/Story/StoryGrid";
import { Heading, Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Terman Era - The 3rd Decade",
  description:
    "Duis porttitor, dolor eget iaculis finibus, turpis urna blandit ligula, non consequat velit enim ut risus.",
  keywords: ["Terman Era", "history", "impact"],
  openGraph: {
    title: "The Terman Era - The 3rd Decade",
    description:
      "Duis porttitor, dolor eget iaculis finibus, turpis urna blandit ligula, non consequat velit enim ut risus.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/terman_uv6swj_jir40s.jpg",
        alt: "Caption/credit lorem ipsum dolar sit amet vestibulum perimentium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Terman Era - The 3rd Decade",
    description:
      "Duis porttitor, dolor eget iaculis finibus, turpis urna blandit ligula, non consequat velit enim ut risus.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/terman_uv6swj_jir40s.jpg",
    ],
  },
};

export default function page() {
  const storyData = [
    {
      heading: "New Spaces and Expanding Influence",
      superhead: "The 5th Decade",
      chapter: "Chapter 5",
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986284/new-spaces-and-expanding-influence_dcvv7j_odpshs.jpg",
    },
    {
      heading: "Bridging Worlds: Chips, Code, and Cosmos",
      superhead: "The 6th Decade",
      chapter: "Chapter 6",
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986283/bridging-worlds_ma3ixq_gwcmqb.jpg",
    },
    {
      heading: "Redevelopment and an Earthquake",
      superhead: "The 7th Decade",
      chapter: "Chapter 7",
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg",
    },
  ];

  const footnotes = [
    {
      number: 1,
      id: "footnote1",
      text: "C. Stewart Gillmor, *Fred Terman at Stanford: Building a Discipline, a University, and Silicon Valley* (Stanford University Press, 2004), 263–265.",
    },
    { number: 2, id: "footnote2", text: "Ibid., 263." },
    { number: 3, id: "footnote3", text: "Ibid., 265." },
    {
      number: 4,
      id: "footnote4",
      text: "*Annual Report of the President of Stanford University for the Fifty-Fifth Academic Year Ending August 31, 1946*, 146.",
    },
    { number: 5, id: "footnote5", text: "Ibid." },
    { number: 6, id: "footnote6", text: "Gillmor, *Fred Terman at Stanford*." },
    {
      number: 7,
      id: "footnote7",
      text: "*Annual Report of the President of Stanford University for the Fifty-Fifth Academic Year Ending August 31, 1946*, 146.",
    },
    {
      number: 8,
      id: "footnote8",
      text: "Gillmor, *Fred Terman at Stanford*, 267.",
    },
    {
      number: 9,
      id: "footnote9",
      text: "*Annual Report of the President of Stanford University for the Fifty-Seventh Academic Year Ending August 31, 1948*, 24–25.",
    },
    {
      number: 10,
      id: "footnote10",
      text: "US Inflation Calculator, ",
      sourceLink: "https://www.usinflationcalculator.com",
    },
    {
      number: 11,
      id: "footnote11",
      text: "Stuart W. Leslie, “Playing the Education Game to Win: The Military and Interdisciplinary Research at Stanford,” *Historical Studies in the Physical and Biological Sciences* 18, no. 1 (1987): 55–88.",
    },
    {
      number: 12,
      id: "footnote12",
      text: "Stanford Electrical Engineering, “Electrical Engineering Timeline,” ",
      sourceLink:
        "https://archive.ph/20120731042240/http:/ee.stanford.edu/timeline.php",
    },
    {
      number: 13,
      id: "footnote13",
      text: "Leslie, “Playing the Education Game to Win,” 67.",
    },
    {
      number: 14,
      id: "footnote14",
      text: "*Annual Report of the President of Stanford University for the Fifty-Sixth Academic Year Ending August 31, 1947*, 121.",
    },
    { number: 15, id: "footnote15", text: "Ibid." },
    {
      number: 16,
      id: "footnote16",
      text: "*Annual Report of the President of Stanford University for the Fifty-Seventh Academic Year Ending August 31, 1948*, 152.",
    },
    {
      number: 17,
      id: "footnote17",
      text: "Gillmor, *Fred Terman at Stanford*.",
    },
    { number: 18, id: "footnote18", text: "Ibid." },
    { number: 19, id: "footnote19", text: "Ibid., 307–308." },
    { number: 20, id: "footnote20", text: "Ibid., 302." },
    { number: 21, id: "footnote21", text: "Ibid., 307–308." },
    { number: 22, id: "footnote22", text: "Ibid." },
    { number: 23, id: "footnote23", text: "Ibid." },
    {
      number: 24,
      id: "footnote24",
      text: "*A Chronology of Stanford University and Its Founders*, edited by Karen Bartholomew, Claude Stout Brinegar, and Roxanne Nilan (Stanford Historical Society, 2001), 77.",
    },
    {
      number: 25,
      id: "footnote25",
      text: "Gillmor, *Fred Terman at Stanford*.",
    },
    {
      number: 26,
      id: "footnote26",
      text: "Stanford Center for Professional Development, “Our History,” ",
      sourceLink: "https://scpd.stanford.edu/our-history",
    },
  ];

  return (
    <Container as="article" width="full">
      <Masthead logoColor="white-red" isOverlap />
      <StoryImpactBanner
        hasBgImage
        bgColor="stone-dark"
        heading="The Terman Era"
        superhead="The 3rd Decade"
        body="Duis porttitor, dolor eget iaculis finibus, turpis urna blandit ligula, non consequat velit enim ut risus. In nisi tellus, lacinia ac placerat a, cursus ac nulla."
        byline="by Jess Alvarenga"
        src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/terman_uv6swj_jir40s.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
      />
      <OneCol>
        <Text
          variant="overview"
          footnoteRefs={[{ id: "footnote1", number: 1 }]}
        >
          Samuel Morris recommended Frederick Terman to be his successor as dean
          of the School of Engineering. Terman, on leave from Stanford at the
          time, had been serving since 1942 in a wartime appointment as head of
          the top-secret Radio Research Laboratory at Harvard University. Yet
          throughout the war, Terman was anticipating a period after the war he
          believed would be defined by unprecedented technological advancement
          led by engineers.
        </Text>
      </OneCol>
      <TwoCol isSidebar>
        <OneCol>
          <Text>
            Despite Terman’s absence, in December 1944 Stanford President Donald
            Tresidder named Terman the third dean of the Stanford School of
            Engineering, with a strong endorsement from the engineering faculty.
          </Text>
          <Text footnoteRefs={[{ id: "footnote2", number: 2 }]}>
            “Dr. Terman’s scholarly contributions in the field of electrical
            engineering and his administration of one of America’s largest war
            research projects place him among the outstanding engineers in the
            country,” Tresidder said, announcing Terman’s appointment.
          </Text>
          <Text>
            Hugh H. Skilling, acting head of electric engineering, served for a
            year as acting dean until Terman returned to take the helm on
            January 1, 1946. Terman would lead the School of Engineering through
            a now-legendary era of academic and technological innovation. Over
            the next ten years, the School of Engineering would reach the
            pinnacle of engineering education and lay the foundations of Silicon
            Valley.
          </Text>
          <Text>
            Once he was back in Palo Alto, Terman’s first order of business was
            to prepare the university for the expected influx of students
            attending American universities on the GI Bill. Those students would
            need housing, new classrooms and labs, and new faculty to lead the
            way. Terman laid out a “Plan for 20 Years of Greatness” that would
            see “Stanford’s engineering and physical sciences departments
            developing in size and quality of research, especially in fields
            pursued during the war.” In President Tressider’s annual report,
            Terman wrote in August 1946:
          </Text>
          <Quote
            body="The year that has just been concluded has been one of change and readjustment in that it has marked the transition from war to post-war conditions. Those faculty members who had been on war service returned during the year, and by the end of the Summer quarter the pre-war faculty had been restored."
            source="— Fred Terman"
          />
        </OneCol>
        <StorySidebar hasLineArt>
          <MediaCaptionImage
            rounded
            isPortriat
            className="mb-0"
            aspectRatio="1x1"
            imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/1944_-_Stanford_Engineering_s_third_Dean_leujr9_dkho3h.jpg"
            caption="Fred Terman, dean of the School of Engineering, circa 1950."
          />
          <MediaCaptionImage
            rounded
            isPortriat
            className="mb-0"
            imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986291/skilling_umi5ca_pnvr55.jpg"
            aspectRatio="1x1"
            caption="Hugh Hildreth Skilling, 1946. Skilling began his career at Stanford in 1926 as an undergraduate teaching assistant in physics. Promoted to associate professor in 1939, he later became head of the Department of Electrical Engineering, a post he held for twenty-three years. He served as acting dean of the School of Engineering from fall 1944 through the end of 1945."
          />
        </StorySidebar>
      </TwoCol>
      <OneCol>
        <Text>
          The school quickly rebounded from record low wartime enrollments.
          Between the fall and spring quarters of 1945–1946, the “civilian
          engineering” program tripled in size. The expansion was so great that
          Terman broadened summer quarter offerings to meet the demand. The
          influx of students was felt across Stanford: in winter 1946,
          university enrollment was 7,000, with housing for only 4,000; a year
          later, enrollment was 8,203.
        </Text>
        <Text>
          On the administrative front, in 1946 the Department of Mining was at
          last merged with the Department of Geology and moved from the School
          of Engineering into the School of Earth Sciences as the Department of
          Mineral Sciences. Terman also transitioned the standard engineering
          degree from a bachelor of arts (BA) to a bachelor of science (BS) to
          reflect the growing technical demands of the curriculum.
        </Text>
        <Heading>Harnessing Federal Funding</Heading>
        <Text>
          Before and even during the war, the School of Engineering’s share of
          federal research dollars had been limited, and the School of
          Engineering budget for the 1946–1947 school year had reached its
          lowest level since 1926. Terman refused to accept the status quo and
          in the postwar period looked for opportunities to expand funding.
          Reporting on federal contracts from the Navy’s Office of Research and
          Inventions of the Navy (later the Office of Naval Research), Army Air
          Force, Signal Corps, and the National Bureau of Standards, he wrote to
          President Tresidder in 1946 that “A substantial proportion of the
          Dean’s time has been devoted to the establishment of a research
          program having long range values, sponsored by government agencies.
          . . . [A]nd the program is still expanding.”
        </Text>
        <Text>
          Research dollars flowed westward from Washington. Within months of
          returning to campus, Terman had secured government-funded projects
          totaling $380,000 per year, including $210,000 for electrical
          engineering, $81,000 for mechanical engineering, $59,000 for physics,
          and $30,000 for chemistry. By 1948, government-sponsored research in
          civil, electrical, and mechanical engineering neared a half million
          dollars—roughly $6.5 million in inflation-adjusted dollars today.
        </Text>
        <Text>
          Notable among the many new initiatives at Stanford was the 1945
          establishment of the Microwave Laboratory, which Terman had
          orchestrated even while stationed across the country. Centering the
          Microwave Lab in the School of Physical Science but sharing close ties
          to the School of Engineering was typical of the School of
          Engineering’s emphasis on interdisciplinary collaboration. Director
          William Hansen, a physicist, had selected Edward Ginzton, an engineer,
          as his second in charge and appointed him associate professor of
          “applied physics”—a neologism highlighting the “interdisciplinary
          contours of physics and electrical engineering at Stanford.” In 1947,
          Hansen and Ginzton employed klystrons to create the first linear
          accelerator.
        </Text>
      </OneCol>
      <StoryGrid
        hasBgImage
        src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/stangord-campus-1948_d7gus7_f6if28.jpg"
        bgColor="stone-dark"
      >
        <MediaCaptionImage
          animation="fadeIn"
          delay={0.2}
          duration={1}
          rounded
          aspectRatio="4x3"
          captionBgColor="black"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986285/prof-edward-1_cfwklw_xiasre.jpg"
          caption="Professor Edward Ginzton, left, and Dr. Henry Kaplan, a Stanford Medicine radiologist, in front of klystron gauges, circa 1953. Kaplan and Ginzton coinvented North America’s first medical linear accelerator, a 6-million-volt machine constructed at the Stanford Medical Center, then in San Francisco. The Stanford device was first used in 1955, soon after a similar device debuted in England. "
        />
        <MediaCaptionImage
          animation="fadeIn"
          delay={0.4}
          duration={1}
          rounded
          aspectRatio="4x3"
          captionBgColor="black"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986285/prof-edward-2_xecpct_ubzi0i.jpg"
          caption="Edward L. Ginzton with the Mark III linear accelerator, 1951. Ginzton earned his doctorate in electrical engineering at Stanford and was later appointed as a professor of electrical engineering and applied physics. He led a Stanford team that designed the world’s most powerful particle accelerator."
        />
        <MediaCaptionImage
          animation="fadeIn"
          delay={0.4}
          duration={1}
          rounded
          aspectRatio="4x3"
          captionBgColor="black"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986288/mark-2_nncexe_lwbmas.jpg"
          caption="Mark III linear accelerator, 1952. This was one of many similarly named accelerators and detectors created and used at the W. W. Hansen Experimental Physics Laboratory (HEPL) and at the Stanford Linear Accelerator (SLAC). "
        />
        <MediaCaptionImage
          animation="fadeIn"
          delay={0.2}
          duration={1}
          rounded
          aspectRatio="4x3"
          captionBgColor="black"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986284/mark-2-2_jf2xmm_ywrsnc.jpg"
          caption="Mark III linear accelerator, 1952. This was one of many similarly named accelerators and detectors created and used at the W. W. Hansen Experimental Physics Laboratory (HEPL) and at the Stanford Linear Accelerator (SLAC)."
        />
        <MediaCaptionImage
          animation="fadeIn"
          delay={0.2}
          duration={1}
          rounded
          aspectRatio="4x3"
          captionBgColor="black"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986287/william-w-hansen_osvbzp_rdnqlf.jpg"
          caption="William W. Hansen with the 3-foot Mark I electron linear accelerator prototype, 1947. It was built, as all the Mark accelerators were, in the basement of the physics department in the Hansen Experimental Physics Lab (HEPL)."
        />
        <MediaCaptionImage
          animation="fadeIn"
          delay={0.4}
          duration={1}
          rounded
          aspectRatio="4x3"
          captionBgColor="black"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986283/felix-bloch_dg6ato_a4ybb7.jpg"
          caption="Felix Bloch, right, and William Hansen demonstrating a working model of equipment used in their research, 1947. Bloch, a Stanford professor of physics, invented a new technique of qualitative analysis by nuclear reaction; William Hansen was director of the Stanford Microwave Laboratory. "
        />
      </StoryGrid>
      <OneCol>
        <Text>
          The Microwave Lab would exceed even Terman’s high expectations,
          eventually producing fundamental research in nuclear physics,
          high-powered microwave tubes, microwave and transistor engineering,
          and plasma and laser physics. In the following decade, it would be
          developed into the Stanford Linear Accelerator (SLAC), which would
          later grow into “a huge federal research facility.”
        </Text>
        <Heading>Taking the Lead</Heading>
        <Text>
          Terman imagined nothing less than a “great new era of
          industrialization” for the American West, a transformation led by the
          West’s own intellectuals—preferably trained at Stanford. 
          “[I]ndustrial activity that depends upon imported brains and
          second-hand ideas cannot hope to be more than a vassal that pays
          tribute to its overlords, and is permanently condemned to an inferior
          competitive position,” Terman wrote. Western universities, he
          believed, “can train the type of men required to exercise leadership
          in an expanding industry. They can be a source of ideas, and of
          inspiration that stimulates people to new accomplishments. They can
          serve as catalysts that speed the reaction by which the discoveries of
          pure science are turned to practical uses that advance industrial
          technology and create new industries.”
        </Text>
      </OneCol>
      <Container>
        <MediaCaptionImage
          isParallax
          isLarge
          rounded
          animation="fadeIn"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/stangord-campus-1948_d7gus7_f6if28.jpg"
          caption="Aerial view of the Stanford University campus, 1948."
        />
      </Container>
      <Quote
        quoteColor="red"
        body="... great new era of industrialization"
        source="— Fred Terman"
      />
      <OneCol>
        <Text>
          Robust funding made new achievements possible. “Stanford is not only
          doing more and higher quality research in engineering than would
          otherwise be possible, but it is also training more graduate students,
          and is training them better than ever before,” Terman wrote that year.
          The university’s status, Terman said, demanded “an understanding of
          what it is that being at the top represents. The most important
          measure of success is in terms of student output, which must be large
          in number and outstanding in quality.”
        </Text>
      </OneCol>
      <TwoCol>
        <div>
          <Text>
            Terman set about a new strategy of carefully selecting fields of
            study for which he would deliberately—and aggressively—select and
            recruit faculty, an approach he called “steeples of excellence.” He
            chose fields of highest priority to Stanford’s western region—such
            as oil, geology, heat transfer and chemical engineering—and also
            fields with the most rapid growth—such as radio, electronics and
            mechanical structures. For faculty, he wanted not the greatest
            numbers, but the greatest achievers, which he found in recruits like
            Stephen Timoshenko, whose work defined an entire era in mechanical
            and civil engineering. Terman also fought for higher salaries for
            faculty, whose pay trailed both that offered by other leading
            universities and, especially, that offered by industry, where a
            highly trained engineer could make several times the pay of a
            university professor—a challenge that persists today.
          </Text>
          <Text>
            Terman also fought for promotions for various non-faculty lecturers
            and “teaching specialists.” One such advancement went to Irmgard
            Flügge-Lotz, who had become a lecturer in 1949 and finally, in 1960,
            became the first female professor at the School of Engineering. The
            author of four dozen or more academic papers and two books,
            Flügge-Lotz was respected for her work in aerodynamics and automatic
            control theory. She was particularly known for the Lotz Method for
            predicting aerodynamic lift on airplane wings, which was adopted as
            standard in the field.
          </Text>
          <Text>
            As the 1950s opened, the Korean conflict accelerated the rise in
            government-sponsored radio and electronics research at Stanford.
            Terman had been planning for an Electronics Research Laboratory
            (ERL), which opened in 1951, to coordinate research operations in
            electrical engineering. The Office of Naval Research said in 1950
            that it saw Stanford as “about first in usefulness,” among
            engineering partners, promising to invest a million dollars in
            “fast-paced electronics research” at the school.
          </Text>
          <Text>
            The ERL was soon pulling in so much research funding, $700,000 per
            year, that an expansion was approved in November 1951, just months
            after the laboratory opened; the Applied Electronics Laboratory
            (AEL) was added in 1958. True to Terman’s no-nonsense style, the ERL
            and AEL buildings were practical concrete-and-wood structures
            designed not for comfort or aesthetics but for serious science. They
            would serve Stanford engineering students for another forty years.
          </Text>
        </div>
        <div>
          <MediaCaptionImage
            imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/stephen-p-timoshenko_rr0uke_v4ph49.jpg"
            caption="Stephen P. Timoshenko teaching a class, 1948. A renowned expert, teacher, and writer widely regarded as the “father” of applied mechanics in the United States, he was born in the Russian Empire in 1878. Timoshenko taught at Stanford from 1936 to 1963 and was instrumental in the formation of the Division of Engineering Mechanics in 1949."
          />
          <MediaCaptionImage
            imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986283/david-packard-william_l1tf3k_cb9bre.jpg"
            caption="Left to right: David Packard, William Hewlett, and Dean of Engineering Fred Terman attend the dedication of the Hewlett-Packard wing in Stanford's Electronics Research Laboratory, 1952. Stanford News Service."
          />
        </div>
      </TwoCol>
      <StoryGrid bgColor="blue">
        <MediaCaptionImage
          aspectRatio="4x3"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986285/prof-edward-1_cfwklw_xiasre.jpg"
          caption="Professor Edward Ginzton, left, and Dr. Henry Kaplan, a Stanford Medicine radiologist, in front of klystron gauges, circa 1953. Kaplan and Ginzton coinvented North America’s first medical linear accelerator, a 6-million-volt machine constructed at the Stanford Medical Center, then in San Francisco. The Stanford device was first used in 1955, soon after a similar device debuted in England. "
        />
        <MediaCaptionImage
          aspectRatio="4x3"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986285/prof-edward-2_xecpct_ubzi0i.jpg"
          caption="Edward L. Ginzton with the Mark III linear accelerator, 1951. Ginzton earned his doctorate in electrical engineering at Stanford and was later appointed as a professor of electrical engineering and applied physics. He led a Stanford team that designed the world’s most powerful particle accelerator."
        />
      </StoryGrid>
      <OneCol>
        <Heading>Unleashing the Power of Computation</Heading>
        <Text>
          In 1953, Stanford established its first Computation Center, where a
          single high-speed IBM Card-Programmed Calculator churned through
          mountains of computations. The center was in such high demand that use
          of the Computation Center was reserved for faculty and graduate
          research only. Stanford’s first true computer, an IBM 650, would not
          arrive until 1956. The Computer Science Department was originally in
          the Department of Mathematics at the School of Humanities and
          Sciences, where it remained until 1985, when it was moved to the
          School of Engineering.
        </Text>
        <Heading>The Honors Cooperative Program</Heading>
        <Text>
          In addition to seeking federal funding, Terman was a proponent of
          close associations between academia and industry to advance research
          while providing employment and entrepreneurial opportunities for
          graduates. In 1954, he inaugurated the Honors Cooperative Program,
          which welcomed working electrical engineers who wanted to earn a
          master’s degree part-time while they were still employed. Under the
          program, four companies—Sylvania Corporation, Hewlett-Packard,
          Stanford Research Institute, and General Electric—signed five-year
          agreements through which they selected qualified employees to enroll.
          At six credits per quarter, a candidate could earn a master’s degree
          in two calendar years, a service for which the companies gladly paid
          double Stanford’s standard tuition. Over the years, the Honors
          Cooperative Program has provided thousands of engineers with
          career-changing graduate degrees, with a marked effect on the
          “innovation ethos” that has set Silicon Valley apart. The Honors
          Cooperative Program remains a key feature of the Stanford Center for
          Professional Development and, seven decades later, continues to play
          an important role in Silicon Valley.
        </Text>
        <Heading>Solid State of Affairs</Heading>
        <Text>
          After the demonstration of the world’s first transistor in 1947,
          Terman sought during the early 1950s to make Stanford a leader in
          solid-state electronics and in the study of semiconductors. His
          handwritten notes from 1948 show his emerging interest in the
          promising field. With characteristic understatement he wrote, “The
          transistor is a great new force that will revolutionize many aspects
          of electronics in the next five to ten years.” Achievements in the
          decade to come would prove him correct.
        </Text>
        <Text>
          Unimagined horizons lay ahead for engineering, for the school, and for
          Terman himself. As the school’s third decade came to a close, the Fred
          Terman era was etched into history.
        </Text>
      </OneCol>
      <Container mt={4} mb={7}>
        <OneCol>
          <Footnotes footnotes={footnotes} />
        </OneCol>
      </Container>
      <ExploreMore
        width="site"
        stories={storyData}
        sectionHeading="Explore more book chapters"
        buttonLink="/stories"
        buttonText="Explore all book chapters"
      />
      <Container mb={9}>
        <Heading>Explore more book chapters</Heading>
        <ThreeCol>
          <StoryCard
            heading="New Spaces and Expanding Influence"
            superhead="The 5th Decade"
            chapter="Chapter 5"
            href="/"
            imageUrl="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986284/new-spaces-and-expanding-influence_dcvv7j_odpshs.jpg"
          />

          <StoryCard
            heading="Bridging Worlds: Chips, Code, and Cosmos"
            superhead="The 6th Decade"
            chapter="Chapter 6"
            href="/"
            imageUrl="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986283/bridging-worlds_ma3ixq_gwcmqb.jpg"
          />

          <StoryCard
            heading="Redevelopment and an Earthquake"
            superhead="The 7th Decade"
            chapter="Chapter 7"
            href="/"
            imageUrl="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          />
        </ThreeCol>
        <Button isLight href="/stories" className="mx-auto">
          Explore all book chapters
        </Button>
      </Container>
      <ContributeStoryBanner />
    </Container>
  );
}
