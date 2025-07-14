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
import { Container } from "@/components/Container";
import { storiesSource } from "@/utilities/storiesSource";
import { DecadePager, PageTransitionWrapper } from "@/components/DecadePager";

export const metadata: Metadata = {
  title:
    "Bridging worlds: chips, code, and cosmos | 100 Years of Stanford Engineering",
  description:
    "The world saw the rise of the microprocessor, the advent of the personal computer, and the spread of computer networking linking the globe during the sixth decade of the School of Engineering. Stanford engineers explored the vastness of outer space, the confines of the nanoscale, and the fragile, finite resources of planet Earth.",
  keywords: [
    "Stanford Engineering",
    "Centennial Story",
    "Microprocessor",
    "Personal Computer",
    "Computer Networking",
    "Outer Space",
    "Nanoscale",
    "Planet Earth Resources",
  ],
  openGraph: {
    title:
      "Bridging worlds: chips, code, and cosmos | 100 Years of Stanford Engineering",
    description:
      "The world saw the rise of the microprocessor, the advent of the personal computer, and the spread of computer networking linking the globe during the sixth decade of the School of Engineering. Stanford engineers explored the vastness of outer space, the confines of the nanoscale, and the fragile, finite resources of planet Earth.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1747098478/SC1041_SAIL_CartDeck_2_htazm5.jpg",
        alt: "Stanford engineers explored the vastness of outer space and the nanoscale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bridging worlds: chips, code, and cosmos | 100 Years of Stanford Engineering",
    description:
      "The world saw the rise of the microprocessor, the advent of the personal computer, and the spread of computer networking linking the globe during the sixth decade of the School of Engineering. Stanford engineers explored the vastness of outer space, the confines of the nanoscale, and the fragile, finite resources of planet Earth.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1747098478/SC1041_SAIL_CartDeck_2_htazm5.jpg",
    ],
  },
};
const exploreStoriesData = [
  storiesSource.decade1,
  storiesSource.storyInnovation,
  storiesSource.decade5,
];

const footnotesList = [
  {
    number: 1,
    id: "footnote1",
    text: "“The History of Earthquake Engineering at Stanford University and the Founding of the Blume Center,” Stanford Blume Earthquake Engineering Center.",
    sourceLink:
      "https://blume.stanford.edu/history-earthquake-engineering-stanford-university-and-founding-blume-center/history-earthquake",
  },
  {
    number: 2,
    id: "footnote2",
    text: "Ibid.; “John A. Blume, The Father of Earthquake Engineering,” Stanford Blume Earthquake Engineering Center; Taylor Kubota, “The Movers and Shakers of Stanford’s Earthquake Center,” Stanford Engineering, January 23, 2024.",
    sourceLink:
      "https://blume.stanford.edu/history-earthquake-engineering-stanford-university-and-founding-blume-center/john-blume-father",
  },
  {
    number: 3,
    id: "footnote3",
    text: "Alfred D. Kirkland, “Engineering at Stanford: A Short Historical Perspective,” IEEE Transactions on Education 18, no. 1 (February 1975): 50–52.",
    sourceLink:
      "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=4320947&tag=1",
  },
  {
    number: 4,
    id: "footnote4",
    text: "Jenny Stimson, “Major a Popular Field Here: Women Move into Engineering,” Stanford Daily, January 18, 1979, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1979/01/18?page=1&section=MODSMD_ARTICLE4#article",
  },
  {
    number: 5,
    id: "footnote5",
    text: "Kirkland, “Engineering at Stanford.”",
  },
  {
    number: 6,
    id: "footnote6",
    text: "William Kays, “Impact on Engineering School,” Stanford Daily, April 8, 1975, 2.",
    sourceLink:
      "https://archives.stanforddaily.com/1975/04/08?page=2&section=MODSMD_ARTICLE8#article",
  },
  {
    number: 7,
    id: "footnote7",
    text: "Emily Sachar, “Students Still Majoring in Job-Oriented Departments,” Stanford Daily, December 3, 1976, 16.",
    sourceLink:
      "https://archives.stanforddaily.com/1976/12/03?page=16&section=MODSMD_ARTICLE68#article",
  },
  {
    number: 8,
    id: "footnote8",
    text: "Martin E. Hellman: An Oral History, conducted by Noe Pablo Lozano, Stanford Oral History Program, Stanford Historical Society, Stanford University Archives, 2022, 59.",
  },
  {
    number: 9,
    id: "footnote9",
    text: "W. Diffie and M. Hellman, “New Directions in Cryptography,” in IEEE Transactions on Information Theory 22, no. 6 (November 1976): 644–654.",
    sourceLink: "https://doi.org/10.1109/TIT.1976.1055638",
  },
  {
    number: 10,
    id: "footnote10",
    text: "Henry Corrigan-Gibbs, “Keeping Secrets,” Stanford magazine, November/December 2014.",
  },
  {
    number: 11,
    id: "footnote11",
    text: "Tom Abate, “Stanford Cryptography Pioneers Whitfield Diffie and Martin Hellman win ACM 2015 A.M. Turing Award,” Stanford Report, March 1, 2016.",
  },
  {
    number: 12,
    id: "footnote12",
    text: "Martin E. Hellman: An Oral History, 59.",
  },
  {
    number: 13,
    id: "footnote13",
    text: "Steve Fyffe and Tom Abate, “Stanford Cryptography Pioneers Whitfield Diffie and Martin Hellman Win ACM 2015 A.M. Turing Award,” Stanford News, March 1, 2016.",
    sourceLink:
      "https://news.stanford.edu/stories/2016/03/turing-hellman-diffie-030116",
  },
  {
    number: 14,
    id: "footnote14",
    text: "Heidi Hedlund, “Engineering Center Receives Dedication,” Stanford Daily, October 7, 1977, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1977/10/07?page=1&section=MODSMD_ARTICLE2#article",
  },
  {
    number: 15,
    id: "footnote15",
    text: "Kate Chesley, “Frederick E. Terman Engineering Center Is Gone, but Not Lost,” Stanford Engineering, March 14, 2012.",
    sourceLink:
      "https://engineering.stanford.edu/news/frederick-e-terman-engineering-center-gone-not-lost",
  },
  {
    number: 16,
    id: "footnote16",
    text: "“Our History,” Stanford Engineering SystemX Alliance.",
    sourceLink: "https://systemx.stanford.edu/about/history",
  },
  {
    number: 17,
    id: "footnote17",
    text: "Stanford Historical Society Oral History Program, James F. Gibbons: A Series of Oral History Interviews, 31–32.",
    sourceLink: "https://stacks.stanford.edu/file/xd819md3089/xd819md3089.pdf",
  },
  {
    number: 18,
    id: "footnote18",
    text: "Ibid., 37.",
  },
  {
    number: 19,
    id: "footnote19",
    text: "Les Earnest, “Stanford Cart,” December 2012; “Stanford’s Robotics Legacy,” Stanford Report, January 16, 2019.",
    sourceLink: "https://web.stanford.edu/~learnest/sail/oldcart.html",
  },
  {
    number: 20,
    id: "footnote20",
    text: "Amy Adams, “Former Stanford President Wins Turing Award for Contributions to Computing,” Stanford Report, March 21, 2018.",
    sourceLink:
      "https://news.stanford.edu/stories/2018/03/hennessy-wins-turing-award-contributions-computing",
  },
  {
    number: 21,
    id: "footnote21",
    text: "C. Stewart Gillmor, Fred Terman at Stanford: Building a Discipline, a University, and Silicon Valley (Stanford University Press, 2004), 495.",
  },
  {
    number: 22,
    id: "footnote22",
    text: "Bill Ainsworth, “Terman, 82, Dies of Heart Attack,” Stanford Daily, January 3, 1983, 1; Wolfgang Saxon, “Frederick Emmons Terman, Stanford Engineer, Dies at 82,” New York Times, December 21, 1982, Section D, 23.",
  },
  {
    number: 23,
    id: "footnote23",
    text: "Karen E. Bartholomew, Claude S. Brinegar, and Roxanne Nilan, eds., A Chronology of Stanford University and Its Founders, 1824–2000 (Stanford Historical Society, 2001), 122.",
  },
  {
    number: 24,
    id: "footnote24",
    text: "“Our History,” Stanford Engineering SystemX Alliance.",
    sourceLink: "https://systemx.stanford.edu/about/history",
  },
  {
    number: 25,
    id: "footnote25",
    text: "Andrew Myers, “James D. Meindl, Master of Integrated Circuits, Dies at 87,” Stanford Report, June 15, 2020.",
    sourceLink:
      "https://news.stanford.edu/stories/2020/06/james-d-meindl-master-integrated-circuits-dies-87",
  },
  {
    number: 26,
    id: "footnote26",
    text: "Stanford Historical Society Oral History Program, James F. Gibbons: A Series of Oral History Interviews, 39–40.",
    sourceLink: "https://stacks.stanford.edu/file/xd819md3089/xd819md3089.pdf",
  },
];

export default function page() {
  return (
    <PageTransitionWrapper>
      <Masthead logoColor="white-red" isOverlap isBgDark />
      <main id="main-content">
        <article>
          <StoryImpactBanner
            hasBgImage
            bgColor="stone-dark"
            chapter="Decade 6"
            heading="Bridging worlds: chips, code, and cosmos"
            dek="1975 – 1984"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098478/SC1041_SAIL_CartDeck_2_htazm5.jpg"
            alt="Black and white photo featuring a bicycle with a camera mounted on it."
            caption="The cart, first developed in 1961, was updated in 1979 with a camera on a mechanical swivel to make it fully autonomous. It rolled at a consistent walking pace, following a white line. This tracking system worked sometimes, but inconsistencies in lighting, visual interference from other objects, or an abrupt curve could all throw the cart off course. In 1979, the cart successfully made its way 20 meters through a chair-strewn room in five hours without human intervention. | The Board of Trustees of the Leland Stanford Junior University."
          />
          <div className="max-w-1500 w-full cc 3xl:p-0">
            <div className="w-full cc md:px-0 md:max-w-600 lg:max-w-750 xl:max-w-850 2xl:max-w-1000">
              <Text mb={6}>by Andrew Myers</Text>
            </div>
            <Quote
              className="rs-mb-9"
              quoteColor="red"
              width="wide"
              teaser="The last five years have shown a dramatic increase, percentage-wise, in the number of women in Stanford Engineering. . . . The most important factor is that if a woman wants to become an engineer, she can."
              source="— Assistant Dean Alfred Kirkland, 1975"
            />
          </div>
          <div className="mx-auto cc flex flex-col lg:flex-row w-full justify-around gap-5 rs-mb-5">
            <div className="w-full lg:w-1/2">
              <H2 className="mt-0">1975 – 1984</H2>
              <Text>
                The world saw the rise of the microprocessor, the advent of the
                personal computer, and the spread of computer networking linking
                the globe during the sixth decade of the School of Engineering.
                Stanford engineers explored the vastness of outer space, the
                confines of the nanoscale, and the fragile, finite resources of
                planet Earth.
              </Text>
              <H2>Rumblings on campus</H2>
              <Text>
                The San Francisco earthquake of 1906, which caused considerable
                damage across Stanford’s campus, inspired a rich tradition of
                earthquake studies and innovative research. Not long after the
                quake, members of the Department of Mechanical Engineering built
                a shaking table that was used by F. J. Rogers, an assistant
                professor of physics, “with the hope of offering some
                explanation, based directly on experiment, of the greater
                destructiveness of earthquakes in regions where the foundations
                of structures are supported by more or less soft ground than
                where these foundations are based on solid rock.”
                <Footnotes footnoteRefs={[{ id: "footnote1", number: 1 }]} />
              </Text>
              <Text>
                By the 1930s, earthquake studies focused on modern analyses and
                design approaches as well as on the education of a new
                generation of engineers. One of those students, John A. Blume
                (AB ’33, PhD ’67), became known as the “Father of Earthquake
                Engineering.” The John A. Blume Earthquake Engineering Center,
                which was dedicated by the Department of Civil Engineering in
                1975, endures as a leading center of earthquake and structural
                research.
                <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} />
              </Text>
            </div>
            <div>
              <MediaCaptionImage
                className="mx-auto max-w-350"
                isCaptionInset
                rounded
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1742265172/PC0141_b10_Engineering_Corner_0511_EWS2_yxv22y.jpg"
                alt="The words 1902 and engineering engraved into the side of the building along with the School of Engineering coat of arms."
                caption="Engineering Corner, 1974. The new shield design for the School of Engineering, introduced in 1967, was added to the building in the early 1970s, before the school moved into its new home in the Terman Engineering Center in 1977. The mascle (diamond with the center removed) framework is orange, engineering’s academic color, on a blue background, denoting Stanford Engineering’s commitment to graduate education. The triple redwood fronds, found on all Stanford University heraldry, symbolize, first, “the organization, transmission, and generation of knowledge which takes place in the School and on which the scholarly growth of engineering depends,” and, second, “the tripartite character of Stanford’s School of Engineering—students, faculty, and alumni.” | Special Collections & University Archives."
              />
            </div>
          </div>
          <BgImageWrapper
            className="rs-mb-5"
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098489/00012017_015_vwrprz.jpg"
            isImgOffset
            isTwoCol
          >
            <MediaCaptionImage
              isCaptionInset
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098487/SC0122_s1_b278_f10_C958-007_bphivg.jpg"
              alt="Image of several people, with two men engaged in a discussion."
              caption="Haresh Shah, codirector of the John A. Blume Earthquake Engineering Center (left), shows John Blume one of the center’s testing machines. Since its founding, with help from a generous endowment from Blume, the Blume Center has functioned as the umbrella for all earthquake engineering activities at Stanford University. | Stanford News Service."
            />
            <MediaCaptionImage
              isCaptionInset
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098486/SC0122_s1_b278_f09_C832-06_rj78ue.jpg"
              alt="Two men in a laboratory working together on a complex machine."
              caption="Haresh Shah (left) and James Gere, 1974. Shah and Gere served as codirectors of the Blume Earthquake Engineering Center from 1974 to 1985. | Stanford News Service."
            />
          </BgImageWrapper>
          <TwoCol>
            <OneCol>
              <H2 className="mt-0">Women choose engineering</H2>
              <Text>
                Since Laura Virginia Austin had become the first woman to earn
                an engineering degree at Stanford in 1923, women continued to
                pursue a profession that has not always been welcoming to them.
                By the early 1970s, even amid the feminist movement and the push
                for equal rights, Stanford had conferred only 190 engineering
                degrees on women. That circumstance began to change when
                Stanford Engineering undertook a concerted effort to recruit
                women.
              </Text>
              <Text>
                “The last five years have shown a dramatic increase,
                percentage-wise, in the number of women in Stanford
                Engineering,” wrote Assistant Dean Alfred Kirkland in 1975,
                noting that Stanford was part of a national trend.
                <Footnotes
                  footnoteRefs={[{ id: "footnote3", number: 3 }]}
                />{" "}
                Roughly only 500 women nationwide were earning BS degrees in
                engineering each year. At Stanford, the master’s program saw a
                dramatic increase. In 1967, a class of 497 had contained just
                one female master’s graduate. By 1975, that number had leapt to
                24. Undergraduates followed suit. By 1979, a quarter of all
                engineering undergraduates were women, and engineering had
                become the number-one field of choice for women at Stanford.
                <Footnotes footnoteRefs={[{ id: "footnote4", number: 4 }]} />
                “The most important factor is that if a woman wants to become an
                engineer, she can,” Kirkland wrote.
                <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} />
              </Text>
            </OneCol>
            <OneCol>
              <MediaCaptionImage
                isCaptionInset
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098489/students_with_professor_shah_bltdv9.jpg"
                alt="Two woman and a man reviewing documents together in a classroom setting."
                caption="Engineering students with Professor Haresh Shah (right), May 1972. Stanford Engineering undertook a concerted effort to recruit women starting in the early 1970s. By 1979, a quarter of all engineering undergraduates were women, and engineering had become the number-one field of choice for women at Stanford. | Stanford News Service."
              />
            </OneCol>
          </TwoCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol className="rs-mb-5">
            <H2>Facing budget woes</H2>
            <Text>
              The effort to recruit women came even as the School of Engineering
              faced a 25 percent across-the-board budget cut in 1975. Dean Kays
              wrote to The Stanford Daily detailing how he would approach cuts.
              “The general budget squeeze during the last five years has taken
              virtually all of the fat out of the budget and there is no
              question that further reductions are going to hurt,” he wrote.
              Addressing the grim possibility of faculty layoffs, Kays was
              forthright: “It is quite possible to do very severe violence to
              the quality and reputation of the School of Engineering.”
              <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} />
            </Text>
          </OneCol>
          <AnimatedPosterCard
            isFullWidth
            className="rs-mb-9"
            superhead="1925 – 2025"
            heading="Explore the Centennial timeline"
            href="/timeline"
            buttonText="Explore the timeline"
          />
          <TwoCol className="rs-mb-6">
            <OneCol>
              <MediaCaptionImage
                isCaptionInset
                rounded
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098484/merkle_hellman_diffie_x5ud4w.jpg"
                alt="Three men examining a large paper document."
                caption="From left to right, Ralph Merkle (U.C. Berkeley), Martin Hellman (Electrical Engineering), and Whitfield Diffie (EE graduate student and collaborator with Hellman), 1977. In 1976 Hellman and Diffie published the first public-key data encryption technology, a discovery that is viewed as the birth of modern cryptography. Hellman and Diffie won the 2015 A.M. Turing Award for this work. | Chuck Painter/Stanford News Service."
              />
            </OneCol>
            <OneCol>
              <Text>
                Amid the broad nationwide economic struggles of the mid-1970s,
                students across the university began to lean toward job-oriented
                majors, to engineering’s benefit. Between 1972 and 1976, the
                number of undergraduates in engineering more than doubled, from
                249 to 563. Notable again was a rise in the number of women in
                engineering, rocketing almost five-fold from 22 to 101 in the
                same period.
                <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} />
              </Text>
              <H2>Public-key cryptography</H2>
              <Text>
                In 1976, computer scientists Martin Hellman and Whitfield Diffie
                announced the world’s first public-key data encryption
                technology. Their research had faced heavy opposition from the
                National Security Agency, which held that In 1976, computer
                scientists Martin Hellman and Whitfield Diffie announced the
                world’s first public-key data encryption technology. Their
                research had faced heavy opposition from the National Security
                Agency, which held that
              </Text>
              <Text>
                Decades later, the pair would share the 2015 A.M. Turing Award.
                Remarking on their win, Dan Boneh, professor of computer science
                and electrical engineering and codirector of the Stanford Cyber
                Initiative, said, “Billions of people all over the planet use
                the Diffie-Hellman protocol on a daily basis to establish secure
                connections to their banks, e-commerce sites, e-mail servers,
                and the cloud.”
                <Footnotes footnoteRefs={[{ id: "footnote13", number: 13 }]} />
              </Text>
            </OneCol>
          </TwoCol>
          <Scrollytelling
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098480/fred_terman_1977_oq4exs.jpg"
            heading="An Unlikely Friendship"
          >
            <TwoCol className="mx-auto max-w-full sm:max-w-[80%] lg:max-w-850 gap-40">
              <MediaCaptionImage
                isCaptionInset
                rounded
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098480/martin_hellman_1978_rzmqww.jpg"
                alt="Martin Hellman"
                caption="Martin Hellman, 1978. Hellman earned graduate degrees in electrical engineering at Stanford (MS ’67, PhD ’69), and returned to join the faculty in 1971. He became professor emeritus in 1996. | Chuck Painter/Stanford News Service."
              />
              <MediaCaptionImage
                isCaptionInset
                rounded
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098477/1024px-Admiral_Bobby_Ray_Inman__official_CIA_photo__1983_po2pik.jpg"
                alt="Admiral Bobby Ray Inman"
                caption="Admiral Bobby Ray Inman, 1983. Inman became director of the NSA in 1977 and served for four years. In 1981 he became deputy director of the Central Intelligence Agency, retiring in 1982. | CIA/Wikimedia Commons."
              />
            </TwoCol>
            <ScrollyBubble>
              <Text>
                In late 1977 or early 1978, Martin Hellman, professor of
                electrical engineering, received an unexpected phone call from
                the National Security Agency (NSA).
              </Text>
              <Text>
                “Admiral Inman, the director, will be in your area in a couple
                of weeks,” the voice on the line told him. “If you’re willing,
                he’d like to meet with you.”
              </Text>
              <Text>
                Hellman and Inman were strangers to each other, but presumed
                enemies, duking it out in “shadowboxing” matches held in the
                arenas of Congress and the press—a confrontation between
                academia and government that became known as the first “crypto
                war.”
                <Footnotes footnoteRefs={[{ id: "footnote8", number: 8 }]} />
              </Text>
              <Text>
                In one corner: Hellman and Whitfield Diffie, a research
                assistant in his lab, who had in 1976 coauthored a revolutionary
                paper, “New Directions in Cryptography.”
                <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} />
              </Text>
              <Text>
                The paper had introduced public-key cryptography, providing a
                method for secure, private communication over open channels
                without prearranged keys, a concept that facilitated the
                creation of digital signatures and certificates critical to
                current Internet security and e-commerce. Decades later, Hellman
                and Diffie would be honored with the 2015 A. M. Turing Award.
              </Text>
              <Text>
                In the other corner: Admiral Bobby Ray Inman and the NSA, who
                stood firm against publication of the paper on the grounds that
                cryptography belonged solely in the realm of government
                agencies, and that public dissemination of these techniques
                would compromise national security by making high-grade
                encryption accessible to adversaries.
                <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} />
              </Text>
              <Text>
                So strong was the NSA’s opposition to the paper that, after its
                publication, the agency attempted to limit its distribution, and
                warned the publishers that the authors had violated U.S. laws
                restricting export of military weapons, for which the authors
                could be subject to prison time.
                <Footnotes
                  footnoteRefs={[{ id: "footnote11", number: 11 }]}
                />{" "}
                Despite these threats, Hellman and his team persisted, arguing
                for the necessity of public cryptographic research to protect
                private-sector information and prevent government overreach.
              </Text>
              <Quote
                className="rs-mb-5"
                quoteColor="red"
                body={
                  <>
                    “The lesson is: it’s better to have friends than enemies,”
                    Hellman said, “which everybody agrees to, but how many
                    people take the risk that Inman did?”
                    <Footnotes
                      footnoteRefs={[{ id: "footnote12", number: 12 }]}
                    />
                  </>
                }
                source="— Martin Hellman"
              />
              <Text>
                When the opportunity came to face Inman directly, Hellman
                “jump[ed] at the opportunity,” and told the caller, “I’d love to
                meet with him.”
              </Text>
              <Text>
                Two weeks later, Inman showed up at Hellman’s office in the
                Durand building, room 135. “He smiles. He looks at me and he
                looks at the top of my head . . . and he says, ‘It’s nice to see
                you don’t have horns,’ which is what people at NSA were telling
                him: I’m the devil incarnate,” Hellman recalled.
              </Text>
              <Text>
                Hellman had been using similar terms to describe Inman. He
                returned Inman’s look and said, “Same here.”
              </Text>
              <Text>
                Inman told Hellman he was meeting with him “against the advice
                of all the other senior people at the agency, but I don’t see
                the harm in talking.”
              </Text>
              <Text>
                In our modern age of political polarization and social media
                showdowns, such a meeting seems remarkable. Inman’s highest
                concern was still the impact of public cryptographic knowledge
                on national security, but their meeting made an inroad that
                allowed him to see the importance of Hellman’s work in the
                emerging digital age. The NSA’s attempts to control
                cryptographic research ultimately failed, and public-key
                cryptography became the backbone of modern Internet security.
              </Text>
              <Text>
                “Out of that meeting grew a cautious relationship, which
                eventually became a friendship,” said Hellman. In later years,
                Inman would go on to sign two statements of support for
                Hellman’s work on national security, the most recent of which
                focused on fundamental changes needed to address the dangers of
                nuclear weapons, artificial intelligence, and cybersecurity.
              </Text>
              <Text>—Julie Greicius</Text>
            </ScrollyBubble>
          </Scrollytelling>
          <OneCol>
            <H2 className="mt-0">A new home for engineering</H2>
            <Text>
              The School of Engineering took occupancy of the $9.2 million
              Frederick E. Terman Engineering Center in 1977. The second
              building to be named in honor of the school’s third dean, this one
              was on the west side of campus, a short walk from the Terman
              Laboratory that faced Engineering Corner. The new building housed
              the dean’s office, along with the Departments of Civil
              Engineering, Industrial Engineering, Engineering-Economic Systems,
              Operations Research, and the Design Division of the Department of
              Mechanical Engineering. In addition to its laboratories, offices,
              conference rooms, and classrooms were a 260-seat lecture hall, the
              engineering library, and a computing room with thirty-one
              terminals. Made possible by donations from Terman’s former
              students William Hewlett and David Packard, the building was
              expected to serve the engineering community “for 100 years or
              more.”
              <Footnotes
                footnoteRefs={[{ id: "footnote14", number: 14 }]}
              />{" "}
              But only thirty years later, the Terman Engineering Center was in
              dire need of replacement due to termite damage and wood rot. In
              2012, it would be not so much demolished as dismantled, with 99.6
              percent of its materials repurposed in building projects elsewhere
              on campus.
              <Footnotes footnoteRefs={[{ id: "footnote15", number: 15 }]} />
            </Text>
            <Text>
              In the same year that the Terman Engineering Center opened, the
              Department of Industrial Engineering reflected its growing
              influence with the addition of “Engineering Management” to its
              mission, becoming the Department of Industrial Engineering and
              Engineering Management (IEEM).
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mb-5">
            <H2>Center for integrated systems</H2>
            <Text>
              As chipmaking became an enterprise of paramount importance, the
              challenges of the process grew too great for a single discipline.
              Modern integrated systems required the skills of computer
              architects, circuit engineers, materials engineers, physicists,
              computer scientists, and more. In 1978, a quartet of
              engineers—Michael Flynn, future dean James Gibbons, John Linvill,
              and James Meindl—founded the multidisciplinary Center for
              Integrated Systems (CIS) to pioneer new chips, new methods of
              manufacture, and new relationships between the School of
              Engineering and Silicon Valley.
              <Footnotes footnoteRefs={[{ id: "footnote16", number: 16 }]} />
            </Text>
            <Text>
              “We began to ask if the worlds of software and hardware were going
              to merge, so a particular problem might be best solved with
              hardware only, software only, or a combination, and we didn’t want
              to say in advance what that combination might be,” Gibbons said.
              “We had a group of ten stars who all wanted to be part of this.”
              <Footnotes
                footnoteRefs={[{ id: "footnote17", number: 17 }]}
              />{" "}
              Remarking on the unique collaborations fostered in the Center, he
              added that by creating a “triangle between a faculty member, a
              student, and now, a co-advisor in industry, you get something you
              could never get any other way.”
              <Footnotes footnoteRefs={[{ id: "footnote18", number: 18 }]} />
            </Text>
            <H2>Airplanes and autonomy</H2>
            <Text>
              In 1983, Nicholas Hoff became only the second Stanford faculty
              member— after William Durand—to be honored with the Daniel
              Guggenheim Medal for his contributions to aeronautics. Hoff’s
              theory of elastic stability and its application to aerospace
              structures had significantly advanced the understanding of how
              materials and structures behave under stress, enabling safer and
              more efficient aircraft and spacecraft.
            </Text>
            <Text>
              Across campus, work advanced at the Stanford Artificial
              Intelligence Lab (SAIL). In 1979, PhD student Hans Moravec,
              collaborating with robotic arm inventor Victor Scheinman, further
              modified the Stanford Cart, first introduced in 1961, to perform
              autonomously. They fitted the cart with a camera on a mechanical
              swivel and multi-ocular vision that allowed it to navigate, albeit
              slowly, past obstacles. Pausing for fifteen minutes at a stretch,
              the Stanford Cart would plot a course and then surge forward in
              one-meter steps.
              <Footnotes footnoteRefs={[{ id: "footnote19", number: 19 }]} />
            </Text>
          </OneCol>
          <TwoCol>
            <OneCol>
              <H2 className="mt-0">Improving computing efficiency</H2>
              <Text>
                In 1981, weary of the overly complex code clogging modern
                processors, electrical engineer and future Stanford president
                John L. Hennessy and collaborator David Patterson of U.C.
                Berkeley unveiled the microprocessor without interlocked
                pipeline stages (MIPS) based on their reduced instruction set
                computer (RISC) protocol. MIPS required far fewer transistors
                than commercially available microprocessors but ran five times
                faster. The inventors shared the 2017 Turing Award. Today,
                virtually all tablets, phones, and smart devices run on RISC
                architectures.
                <Footnotes footnoteRefs={[{ id: "footnote20", number: 20 }]} />
              </Text>
              <Text>
                Also in 1981, electrical engineer James Clark, in the Computer
                Systems Laboratory, debuted his Geometry Engine, revolutionizing
                digital 3D graphics. The hardware accelerator could display and
                rotate digitized objects every thirtieth of a second. Clark
                would soon found the company Silicon Graphics.
              </Text>
              <Text>
                The following year, 1982, Andreas Bechtolsheim, an electrical
                engineer, joined Vaughan Pratt, a professor of computer science
                and electrical engineering, and several Stanford students to
                cofound Sun Microsystems. The name “Sun” is an acronym of
                Stanford University Network, Bechtolsheim’s doctoral project at
                Stanford.
              </Text>
            </OneCol>
            <OneCol>
              <MediaCaptionImage
                isCaptionInset
                rounded
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098485/jh189cy1846_b5hymt.jpg"
                alt="Three men collaborating around a large document, engaged in discussion."
                caption="Left to right: Stanford computer scientists John Shott, John Hennessy, and James D. Meindl. Hennessy established the microprocessor without interlocked pipeline stages (MIPS) project to develop computers with simpler instruction sets that could be completed in less time. This group developed the reduced instruction set computer (RISC) architecture, for which Hennessy and U.C. Berkeley collaborator David Patterson won the 2017 A. M. Turing Award. Today, virtually all tablets, phones, and smart devices run on RISC architectures. | Chuck Painter/Stanford News Service."
              />
            </OneCol>
          </TwoCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mb-5">
            <H2>End of an era</H2>
            <Text>
              Late in 1982, after a transformational career that began in 1927,
              Fred Terman died of a heart attack at his home on campus. The San
              Francisco Chronicle summed up Terman’s influence in a simple
              headline: “Stanford’s Terman Dies—He Launched Silicon Valley.” The
              Stanford Daily called him the “father of the modern School of
              Engineering.” In his eulogy, Stanford President Donald Kennedy
              recalled that Terman’s “capacity to think about the future was the
              most remarkable thing about him.” Dean Kays noted, “He took a
              reasonably good school and turned it into one of the best in the
              country.”
              <Footnotes footnoteRefs={[{ id: "footnote21", number: 21 }]} /> In
              an interview only a year before his death, Terman had assessed his
              tenure with characteristic modesty: “There really wasn’t much to
              it. I had a technique—you get the best people, the best people do
              the research, and it falls into place.”
              <Footnotes footnoteRefs={[{ id: "footnote22", number: 22 }]} />
            </Text>
          </OneCol>
          <Container>
            <MediaCaptionImage
              isParallax
              rounded
              aspectRatio="16x9"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747098483/meindl_mitterand_jobs_ku63wf.jpg"
              alt="A group of men in suits standing together outside."
              caption="French President François Mitterrand visits the Center for Integrated Systems (CIS) to learn about the emerging economic powerhouse called Silicon Valley, 1984. As a collaboration between Stanford and industry, CIS allowed faculty and graduate students from engineering, computer science, and applied physics to work on projects of interest to the microelectronics and computer science industries. From left to right: mainframe pioneer Gene Amdahl, Professor John Linvill, Intel cofounder Robert Noyce, Mitterrand, Vice Provost Gerald Lieberman, Professor James Meindl, Apple founder Steve Jobs, Nobel laureate and Professor Paul Berg, Genentech Chairman Thomas Perkins, Hewlett-Packard President John Young, venture capitalist (and future Stanford trustee) Burton McMurtry, and Professor Edward Feigenbaum. | Special Collections & University Archives."
            />
          </Container>
          <OneCol className="rs-mb-5">
            <H2>New space for chip making</H2>
            <Text>
              For much of its early history, the Center for Integrated Systems
              had been relegated to the basement of the McCullough Building, but
              in 1983 the group broke ground for a new home. In 1985, CIS moved
              into a facility dedicated to bridging multiple disciplines.
              <Footnotes footnoteRefs={[{ id: "footnote23", number: 23 }]} /> It
              included a 10,500-square-foot integrated circuit fabrication lab.
              <Footnotes
                footnoteRefs={[{ id: "footnote24", number: 24 }]}
              />{" "}
              Such a “fab” at a university was revolutionary. As a collaboration
              between Stanford and industry, it allowed faculty and graduate
              students from engineering, computer science, and applied physics
              to work on projects of interest to the microelectronics and
              computer science industries.
            </Text>
            <Text>
              Future dean James Plummer recalled that the CIS space was an
              experiment, part social and part technical. The concept of housing
              various disciplines in one building ran “completely counter” to
              traditional university models, he said, and continues to do so at
              many institutions.
              <Footnotes footnoteRefs={[{ id: "footnote25", number: 25 }]} />
            </Text>
          </OneCol>
          <TwoCol isSidebar className="rs-mb-5">
            <OneCol>
              <H2 className="mt-0">A new dean</H2>
              <Text>
                In 1984, the final year of the sixth decade of the Stanford
                School of Engineering, Dean William Kays handed the reins to CIS
                founder James Gibbons, who would serve for a
                then-record-breaking twelve-year tenure. The son of a prison
                warden, Gibbons had earned his PhD in 1956 at Stanford, where he
                was the first liaison between Stanford and Shockley
                Semiconductor. Gibbons joined the electrical engineering faculty
                a year later.
              </Text>
              <Text>
                “When I was asked to be dean, I was, first of all, very, very
                surprised. . . . I thought, ‘Well, OK, at least they want me for
                what I might regard as the right reason, so maybe I’ve got a
                chance to do this,’” Gibbons later recalled, noting that one of
                his objectives had been to make contributions to Silicon Valley.
                <Footnotes footnoteRefs={[{ id: "footnote26", number: 26 }]} />
              </Text>
              <Text>
                In the years ahead, Gibbons would realize those contributions
                and much more. He would oversee the transition of the Department
                of Computer Science to the School of Engineering and the
                creation of the undergraduate computer science major, which
                eventually became the university’s most popular major by far. He
                would introduce tutored video instruction and distance learning,
                extending the reach and scale of engineering education globally
                and creating new educational opportunities for many, including
                at-risk teens and young adults at detention centers across the
                United States. He would launch the innovative Stanford
                Engineering Venture Fund, strengthening partnerships with
                Silicon Valley, tripling industrial support for research, and
                encouraging an entrepreneurial spirit among students and
                faculty.
              </Text>
              <Text>
                Those accomplishments, and more, still lay ahead. Sixty years of
                advances—including those in seismic science, world-changing
                Internet ventures, programs to increase student and faculty
                diversity, and firsts for women in space—had accumulated to
                position the School of Engineering for exciting, uncharted
                territory.
              </Text>
            </OneCol>
            <StorySidebar hasLineArt lineArtType="medium">
              <MediaCaptionImage
                isCaptionInset
                rounded
                isPortrait
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747956759/james-gibbons-1984_square_dmrxmf.jpg"
                alt="A black and white photo featuring a man dressed in a formal suit and tie."
                caption="James Gibbons, 1984, near the start of his 12 years as dean of the Stanford School of Engineering. During his tenure, the Department of Computer Science moved into the School of Engineering, and the school launched a new computer science major, video instruction, and distance learning, which extended the reach of the school globally. Gibbons’s ties to industry led him to strengthen partnerships with Silicon Valley. | School of Engineering."
              />
            </StorySidebar>
          </TwoCol>
          <Container mb={6}>
            <MediaCaptionImage
              isParallax
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747100146/Escondido_Mall_view_uwzgtp.jpg"
              alt="A group of men in suits standing together outside."
              caption="View of Escondido Mall from Lomita Mall, with engineering laboratories on the right and Meyer Library in the background, 1985. | Chuck Painter/Stanford News Service."
            />
          </Container>
          <OneCol className="rs-mt-4 ms-mb-7">
            <FootnotesList footnotes={footnotesList} />
          </OneCol>
          <DecadePager currentDecade={6} />
          <ExploreMore
            width="site"
            stories={exploreStoriesData}
            sectionHeading="Explore more stories"
            hasButton
          />
          <ContributeStoryBanner bgColor="red" hasLineArt />
        </article>
      </main>
    </PageTransitionWrapper>
  );
}
