import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Masthead } from "@/components/Masthead";
import { Quote } from "@/components/Quote";
import {
  BgImageWrapper,
  ExploreMore,
  Footnotes,
  FootnotesList,
  StoryImpactBanner,
  StorySidebar,
} from "@/components/Story";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { OneCol, ThreeCol, TwoCol } from "@/components/Layout";
import { H2 } from "@/components/Typography/Header";
import { ImageGallery } from "@/components/ImageGallery";
import { Container } from "@/components/Container";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { AnimatedPosterCard } from "@/components/AnimatedHero";
import { Accordion } from "@/components/Accordion";
import { storiesSource } from "@/utilities/storiesSource";
import { DecadePager, PageTransitionWrapper } from "@/components/DecadePager";

export const metadata: Metadata = {
  title:
    "New spaces and expanding influence | 100 Years of Stanford Engineering",
  description:
    "In May 1965, just days after Fred Terman announced his retirement as vice president and provost of Stanford, a renovated 16,000-square-foot building across from Engineering Corner—where Terman once taught and led Electrical Engineering—was named in his honor. Stanford President Wallace Sterling and former students including Engineering Dean Joseph Pettit and trustee David Packard spoke at the dedication.",
  keywords: [
    "Stanford Engineering",
    "Fred Terman",
    "David Packard",
    "Joseph Pettit",
    "Engineering History",
    "Stanford Centennial",
  ],
  openGraph: {
    title:
      "New spaces and expanding influence | 100 Years of Stanford Engineering",
    description:
      "In May 1965, a renovated building near Engineering Corner was named after Fred Terman, honoring his legacy at Stanford. The dedication featured Stanford President Wallace Sterling and former students David Packard and Joseph Pettit.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746062200/SC0122_s1_b269_f10_3000-09_bw3duf.jpg",
        alt: "Fred Terman and others at the dedication of the Terman Engineering Building, 1965",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "New spaces and expanding influence | 100 Years of Stanford Engineering",
    description:
      "Fred Terman's legacy was honored in 1965 when a Stanford building was named for him, with David Packard and Joseph Pettit among those commemorating the moment.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1746062200/SC0122_s1_b269_f10_3000-09_bw3duf.jpg",
    ],
  },
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746062201/SC0122_s1_b269_f13_3354-11_chjrjo.jpg",
    alt: "Four individuals, including three men and one woman, reveals the sign for the Jack A. McCullough Building.",
    caption:
      "Opening of the Jack A. McCullough Building, 1965. Left to right: Mr. and Mrs. McCullough, Stanford trustee David Packard, and Stanford President Wallace Sterling. The building originally housed several groups focused on materials research, including the Center for Materials Research, which brought together faculty from engineering, physics, chemistry, and other fields. The center continues to support interdisciplinary materials research taking place in the Geballe Laboratory for Advanced Materials and the Stanford Institute for Materials and Energy Sciences. | Stanford News Service.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746062200/SC0122_s1_b269_f10_3000-09_bw3duf.jpg",
    alt: "Several people standing together in front of the Frederick Emmons Terman Engineering Labratory.",
    caption:
      "Fred Terman and his family at the dedication of the Frederick Emmons Terman Engineering Laboratory, May 31, 1965. The renovated 16,000-square-foot building across from Engineering Corner—which had been the site of his office when he was chair of Electrical Engineering before World War II—was named in Terman’s honor just days after he had announced his retirement as Stanford vice president and provost. “If I could relive my life I could not do any better than to play the same record over again,” Terman said. | Stanford News Service.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1746062193/faculty_meeting_1972_iz9iq9.jpg",
    alt: "Men gathered at a table playing instruments and drinking a beverage.",
    caption:
      "Left to right: Michel Boudart, David Mason, John Lind, Douglass Wilde, Robert Madix, George Homsy, Channing Robertson, and Andreas Acrivos attend a Chemical Engineering faculty meeting, 1972. The department became part of the School of Engineering in 1960 but maintained close physical and intellectual ties to the Department of Chemistry. | Courtesy Department of Chemical Engineering.",
  },
];

const exploreStoriesData = [
  storiesSource.decade1,
  storiesSource.decade3,
  storiesSource.storyInnovation,
];

const accordionData = [
  {
    heading: "1. Crothers Memorial Hall",
    content:
      "The residence was made possible by a gift from Judge George E. Crothers in memory of his mother. It opened in the fall of 1955 and was for single graduate engineering students. It housed over one hundred engineers; in the words of Dr. Terman, 'When they live together they learn to work together, and they teach each other.'",
  },
  {
    heading: "2. Engineering Library",
    content:
      "In 1966, it held more than 40,000 up-to-date engineering volumes and subscribed to over 700 engineering periodicals. The Engineering Library, on the first floor of the Main Library since 1942, is the oldest and largest of the university’s science libraries. Today it is housed in the Huang Engineering Building.",
  },
  {
    heading: "3. Engineering Corner",
    content:
      "One of the buildings of the Outer Quad, it was continuously occupied by Engineering from its construction in 1900 until 1977. The Office of the Dean was on the second floor, and was originally Professor Charles David Marx’s. Until Engineering’s center of operations moved to the new Terman Engineering Center in 1977, Engineering Corner housed offices and classrooms of the Department of Civil Engineering, the Department of Engineering-Economic Systems, and the Design Division of the Department of Mechanical Engineering.",
  },
  {
    heading: "4. Industrial Engineering",
    content:
      "One of the original Outer Quad classroom buildings, it was finished in 1888 and was first occupied by the Civil Engineering Department. In 1961, the newly organized Department of Industrial Engineering located its offices and classrooms there.",
  },
  {
    heading: "5. Terman Engineering Laboratory",
    content:
      "Gifts from Provost Emeritus Frederick E. Terman and from the PACE program made possible the interior reconstruction in 1962 of this laboratory built in 1902. The largest of the two buildings originally housed the Electrical Machinery and Mechanical Engineering Laboratories. The two-building complex in 1966 housed the offices of the executive head of Mechanical Engineering and the offices and laboratories of the Thermosciences Division of Mechanical Engineering. An adjacent building, constructed in 1891 for use as the university boiler-house, was converted in 1919 for additional mechanical engineering laboratories.",
  },
  {
    heading: "6. Hydraulics Laboratory",
    content:
      "A stucco building built in 1913, the Hydraulics Laboratory was, in 1966, the site of Civil Engineering’s hydraulics research, utilizing—in part—the wind-wave channel. Laboratory instruction in fluid mechanics was also based there.",
  },
  {
    heading: "7. Havas Engineering Building",
    content:
      "Built in 1891 and originally the university power house, this building was reconstructed in 1962, with the primary funds provided by Mr. and Mrs. George P. Havas. In November 1966, it housed the Timoshenko Center of Engineering Mechanics, offices for the Division of Engineering Mechanics, the Experimental Stress Analysis Laboratory, and the Water Quality Control Laboratory.",
  },
  {
    heading: "8. Aeronautics and Astronautics",
    content:
      "The Daniel Guggenheim Aeronautic Laboratory and the William Frederick Durand Laboratory, originally built in 1891, housed the Department of Aeronautics and Astronautics in 1966. The Guggenheim Laboratory, a stucco building, was originally the university woodshop and was converted in the 1920s—thanks to a Guggenheim grant—to house classrooms, offices, and a subsonic wind tunnel. The Durand Laboratory, a sandstone building, held offices, structural test facilities, and the 'hot-shot' wind tunnel.",
  },
  {
    heading: "9. Mechanical Engineering",
    content:
      "Constructed in 1908, this stucco building in 1966 housed many of the shops and laboratories of the Department of Mechanical Engineering, including shops for the Design Division and magnetohydrodynamic research. It originally housed shops for course work in machine shop, foundry practice, and forging and welding.",
  },
  {
    heading: "10. Old Corporation Yard",
    content:
      "In 1966, a partial interior renovation of these buildings, originally constructed in 1916, provided much-needed laboratory and graduate student office space. The Departments of Civil Engineering, Industrial Engineering, and Mechanical Engineering had offices here. Already the site was earmarked for a new building to be erected there by 1977.",
  },
  {
    heading: "11. Peterson Engineering Laboratory",
    content:
      "Constructed in 1900 and with its interior completely remodeled in 1963, this building, which housed offices and laboratories of the Department of Materials Science and portions of the Department of Mineral Engineering, was made possible by a gift from the late Thomas F. Peterson, class of 1924.",
  },
  {
    heading: "12. Space Engineering Building",
    content:
      "A four-story building for the Department of Aeronautics and Astronautics and the Radioscience Laboratory of the Department of Electrical Engineering was being constructed on this site in 1966. Funds were made available by aerospace companies, the National Aeronautics and Space Administration, and the U.S. Air Force. When it opened in 1969, it was named for the late professor William F. Durand.",
  },
  {
    heading: "13. McCullough Building",
    content:
      "Housed here were the Center for Materials Research, solid-state electronics research, and administrative offices of the Department of Electrical Engineering. This building was financed by gifts from Jack McCullough and the Advanced Research Projects Agency. It was dedicated in October 1965.",
  },
  {
    heading: "14. Applied Electronics Laboratory",
    content:
      "This building, completed in October 1957, was the result of gifts from William Hewlett, ’34, and David Packard, ’34. It held the offices and laboratories of the Stanford Electronic Laboratories.",
  },
  {
    heading: "15. Electronic Research Laboratories",
    content:
      "The first portion of this building was built in 1951 as a result of gifts received from Mr. Hewlett and Mr. Packard and was expanded in 1956 as a result of gifts from the Hewlett-Packard company and Sennet W. Gilfillan, ’12. It housed additional Department of Electrical Engineering groups: Radioscience Laboratory, Systems Theory, and Systems Technique.",
  },
  {
    heading: "16. Microwave Laboratory",
    content:
      "The Microwave Laboratory was built in 1949 in memory of W. W. Hansen, who did pioneering work in physics at Stanford University. The microwave group of Electrical Engineering had this portion of the three-building Hansen complex, which was later renamed for Edward L. Ginzton, who led microwave research for scientific purposes. The two adjoining buildings were occupied by Biophysics and the High-Energy Physics Laboratory (HEPL), including the 300-foot Mark III Stanford Linear Accelerator. HEPL was later renamed the Hansen Experimental Physics Laboratory, and focused on the studies of the application of the new linear accelerators for basic physics research.",
  },
  {
    heading: "17. Stauffer Laboratory",
    content:
      "This building housed Chemical Engineering and was dedicated in December 1966. This newest of the engineering buildings in 1966, financed in large part by gifts from John Stauffer and other members of the Stauffer family, comprised one part of the Chemistry-Chemical Engineering Complex.",
  },
  {
    heading: "18. Ryan Laboratory",
    content:
      "This structure, built in 1926 to house the high-voltage experiments of Professor Ryan, was remodeled in 1958 to house a pool-type nuclear reactor. By 1966, it contained the laboratories, classrooms, and offices of the Nuclear Division of the Department of Mechanical Engineering.",
  },
  {
    heading: "19. Donald C. Power Laboratory",
    content:
      "This building on Arastradero Road housed laboratories of the Department of Aeronautics and Astronautics and the Stanford Electronics Laboratories. The structure was a gift from the General Telephone and Electronics Laboratories to Stanford University in 1965 and was named after an official of GT&E.",
  },
  {
    heading: "20. Radio Field Site Facilities",
    content:
      "In the hills behind the campus and elsewhere in California, Antarctica, at sea, and in space, the Radioscience Laboratory, the Radio Astronomy Institute, and the Systems Technique Laboratories of the Stanford Electronics Laboratories conducted research in many fields of radio and radar astronomy, space electronics, and ionospheric propagation. The 150-foot-diameter radar telescope and seventeen other receiving or transmitting sites were located on the campus. Many satellites also carried Stanford research projects.",
  },
];

const footnotes = [
  {
    number: 1,
    id: "footnote1",
    text: "“Dedication of Eng. Lab to Honor Frederick Terman,” Stanford Daily, May 28, 1965, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1965/05/28?page=1&section=MODSMD_ARTICLE3#article",
  },
  {
    number: 2,
    id: "footnote2",
    text: "John Buzan, “Terman to Retire from His Position as V-P and Provost,” Stanford Daily, May 24, 1965, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1965/05/24?page=1&section=MODSMD_ARTICLE9#article",
  },
  {
    number: 3,
    id: "footnote3",
    text: "“McCullough Gift Assures New Engineering Building,” Stanford Engineering News no. 33 (November 1961): 1; “The Jack A. McCollough Building Dedication,” Stanford Engineering News no. 48 (November 1965): 1.",
  },
  {
    number: 4,
    id: "footnote4",
    text: "David M. Mason, “Stanford ChE Department,” Chemical Engineering Education (Summer 1972): 102.",
    sourceLink:
      "https://drive.google.com/file/d/1A75q-XyWPw_v-ELReTZVQGQ2r2CH_FSS/view",
  },
  {
    number: 5,
    id: "footnote5",
    text: "“Construction Set for Space Building,” Stanford Daily, January 4, 1967, 3.",
    sourceLink:
      "https://archives.stanforddaily.com/1967/01/04?page=3&section=MODSMD_ARTICLE14#issue",
  },
  {
    number: 6,
    id: "footnote6",
    text: "Jim Cone, “Space Building Will Increase Stanford’s Science Research,” Stanford Daily, April 30, 1968, 5.",
    sourceLink:
      "https://archives.stanforddaily.com/1968/04/30?page=5&section=MODSMD_ARTICLE19",
  },
  {
    number: 7,
    id: "footnote7",
    text: "Brian Cantwell, “From Durand to Hoff: The History of Aeronautics at Stanford University: The Founding and Early Years of the Department of Aeronautics and Astronautics,” Stanford Aeronautics and Astronautics, April 26, 2008, 8.",
    sourceLink:
      "https://stacks.stanford.edu/file/druid:tw248mt9298/aahistory.pdf",
  },
  {
    number: 8,
    id: "footnote8",
    text: "Karen E. Bartholomew, Claude S. Brinegar, and Roxanne Nilan, eds., A Chronology of Stanford University and Its Founders, 1824–2000 (Stanford Historical Society, 2001), 89.",
  },
  {
    number: 9,
    id: "footnote9",
    text: "The numbered captions have been lightly edited from the original, published in Stanford Engineering News no. 58 (November 1966): 5–6.",
    sourceLink:
      "https://drive.google.com/file/d/1mqil6GeHUG2kjUKcRfLjnozACfDrD9Ye/view?usp=sharing",
  },
  {
    number: 10,
    id: "footnote10",
    text: "Cantwell, “From Durand to Hoff,” 8.",
  },
  {
    number: 11,
    id: "footnote11",
    text: "“Stanford’s Robotics Legacy,” Stanford Report, January 16, 2019.",
    sourceLink:
      "https://news.stanford.edu/stories/2019/01/stanfords-robotics-legacy",
  },
  {
    number: 12,
    id: "footnote12",
    text: "Brief History of the Center for Computer Research in Music and Acoustics, 2.",
    sourceLink: "https://ccrma.stanford.edu/~aj/archives/docs/all/646.pdf",
  },
  {
    number: 13,
    id: "footnote13",
    text: "“John Chowning.”",
    sourceLink: "https://ccrma.stanford.edu/people/john-chowning",
  },
  {
    number: 14,
    id: "footnote14",
    text: "“About the Forum,” Stanford Engineering Computer Forum.",
    sourceLink: "https://forum.stanford.edu/about",
  },
  {
    number: 15,
    id: "footnote15",
    text: "“1969: The Internet’s First Message Sent from UCLA.”",
    sourceLink:
      "https://100.ucla.edu/timeline/the-internets-first-message-sent-from-ucla",
  },
  {
    number: 16,
    id: "footnote16",
    text: "“SUMEX-AIM,” Computer Science @ Stanford.",
    sourceLink: "https://exhibits.stanford.edu/cs/feature/sumex-aim",
  },
  {
    number: 17,
    id: "footnote17",
    text: "“Stanford’s Robotics Legacy,” Stanford Report, January 16, 2019.",
  },
  {
    number: 18,
    id: "footnote18",
    text: "Bartholomew et al., A Chronology of Stanford University and Its Founders, 104–105; Ed Kohn, “Unknown Assailant Shoots 2 Last Night; Radicals, Police Clash at Comp Center,” Stanford Daily, February 11, 1971, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/1971/02/11?page=1&section=MODSMD_ARTICLE1#article",
  },
  {
    number: 19,
    id: "footnote19",
    text: "“Donald (‘Don’) Ervin Knuth,” A.M. Turing Award, Association for Computing Machinery.",
    sourceLink: "https://amturing.acm.org/award_winners/knuth_1013846.cfm",
  },
  {
    number: 20,
    id: "footnote20",
    text: "Siobhan Roberts, “The Yoda of Silicon Valley,” New York Times, December 17, 2018.",
    sourceLink:
      "https://www.nytimes.com/2018/12/17/science/donald-knuth-computers-algorithms-programming.html",
  },
  {
    number: 21,
    id: "footnote21",
    text: "“Operations Research Is Newest Engineering Department,” Stanford Engineering News no. 62 (July 1967): 1.",
  },
  {
    number: 22,
    id: "footnote22",
    text: "Saul I. Gass, “George B. Dantzig, 1914–2005,” in National Academies of Sciences, Engineering, and Medicine: Memorial Tributes, vol. 12 (Washington, DC: The National Academies Press, 2008), 101.",
    sourceLink: "https://nap.nationalacademies.org/read/12473/chapter/18#101",
  },
  {
    number: 23,
    id: "footnote23",
    text: "“Nuclear CE Course,” Stanford Engineering News no. 54 (January 1966): 3.",
  },
  {
    number: 24,
    id: "footnote24",
    text: "“Stanford Wind-Water Channel Creates Pre-Determined Artificial Waves,” Stanford Engineering News no. 54 (January 1966): 1.",
  },
  {
    number: 25,
    id: "footnote25",
    text: "Joseph M. Pettit and Donald J. Grace, “The Stanford Instructional Television Network,” IEEE Spectrum (May 1970): 73; Stanford Engineering Center for Global and Online Education, “Our History.”",
    sourceLink:
      "https://drive.google.com/file/d/1xUcYtUFjpkY8GfLXSS1N2MJqQjmN9FAT/view",
  },
  {
    number: 26,
    id: "footnote26",
    text: "A.M. Turing Award, Barbara Liskov.",
    sourceLink: "https://amturing.acm.org/award_winners/liskov_1108679.cfm",
  },
  {
    number: 27,
    id: "footnote27",
    text: "Stanford University‘s School of Engineering Annual Report, 1999–2000: 75 Years of Innovation, 33.",
  },
  {
    number: 28,
    id: "footnote28",
    text: "William M. Kays, An Oral History, Stanford Oral History Program, Stanford Historical Society, Stanford University Archives, 2013, 10.",
    sourceLink: "https://stacks.stanford.edu/file/tq042vz4465/tq042vz4465.pdf",
  },
  {
    number: 29,
    id: "footnote29",
    text: "Beth Jensen, “Clayton Bates Jr., Expert on Photoelectronic Materials and Devices Who Worked to Promote Equity in STEM Education, Has Died,” Stanford Engineering, May 1, 2024.",
    sourceLink:
      "https://engineering.stanford.edu/news/clayton-bates-jr-expert-photoelectronic-materials-and-devices-who-worked-promote-equity-stem",
  },
  {
    number: 30,
    id: "footnote30",
    text: "Alfred D. Kirkland, “Engineering at Stanford: A Short Historical Perspective,” IEEE Transactions on Education 18, no. 1 (February 1975).",
    sourceLink: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=4320947",
  },
  {
    number: 31,
    id: "footnote31",
    text: "“Consider the Possibility,” Stanford Engineering News no. 85 (September 1972).",
  },
  {
    number: 32,
    id: "footnote32",
    text: "Tom Abate, “William Kays, Former Dean of School of Engineering, Dies at 98,” Stanford Report, September 27, 2018.",
    sourceLink:
      "https://news.stanford.edu/stories/2018/09/william-kays-former-school-engineering-dean-dies-98",
  },
  {
    number: 33,
    id: "footnote33",
    text: "Matthew Jackson et al., Memorial Resolution: Kenneth Joseph Arrow, 1921–2017, Stanford University.",
    sourceLink: "https://web.stanford.edu/~jacksonm/Arrow.pdf",
  },
  {
    number: 34,
    id: "footnote34",
    text: "Perry L. McCarty, Stanford’s Environmental Engineering & Science Program: The First 50 Years, September 1, 2013, 14.",
    sourceLink:
      "https://web.stanford.edu/group/ews/50th/docs/eesfirst50years.pdf",
  },
  {
    number: 35,
    id: "footnote35",
    text: "Ibid., 15.",
  },
  {
    number: 36,
    id: "footnote36",
    text: "“Unemployment Down: Demands for Engineers Rising,” Stanford Daily, April 19, 1972, 5.",
    sourceLink:
      "https://archives.stanforddaily.com/1972/04/19?page=5&section=MODSMD_ARTICLE14",
  },
  {
    number: 37,
    id: "footnote37",
    text: "Ibid.",
  },
];

export default function page() {
  return (
    <PageTransitionWrapper>
      <Masthead logoColor="white-red" isOverlap isBgDark />
      <main id="main-content" tabIndex={-1}>
        <article>
          <StoryImpactBanner
            isVertical
            hasBgImage
            bgColor="archway"
            chapter="Decade 5"
            heading="New spaces and expanding influence"
            dek="1965 – 1974"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062200/SC0122_s1_b269_f10_3000-09_bw3duf.jpg"
            alt="Several people standing together in front of the Frederick Emmons Terman Engineering Labratory."
          />
          <div className="w-full cc">
            <Text mb={6}>by Andrew Myers</Text>
          </div>
          <TwoCol className="rs-mb-3">
            <OneCol>
              <Quote
                quoteColor="red"
                teaser="Some people call research a rat race, but I don’t know of anything else in the world I would rather be doing."
                source="— Clayton W. Bates Jr., 1983"
              />
            </OneCol>
            <OneCol>
              <H2 className="mt-0">1965 – 1974</H2>
              <Text>
                In May 1965, just days after Fred Terman had announced his
                retirement as vice president and provost of Stanford, a
                renovated 16,000-square-foot building across from Engineering
                Corner—one of the early engineering buildings where Terman’s
                office had been during the time he was teaching and chairing the
                Department of Electrical Engineering before World War II—was
                named in his honor. Stanford President Wallace Sterling and two
                of Terman’s former students—Engineering Dean Joseph Pettit and
                David Packard, now a Stanford trustee and Hewlett-Packard board
                chairman—were among the speakers.
                <Footnotes
                  footnoteRefs={[{ id: "footnote1", number: 1 }]}
                />{" "}
                “If I could relive my life I could not do any better than to
                play the same record over again,” Terman told the Stanford
                Daily.
                <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} />
              </Text>
            </OneCol>
          </TwoCol>
          <OneCol className="rs-mb-5">
            <Text>
              New spaces and frontiers were abounding. In October 1965, after
              four years of construction, the Department of Materials
              Science—which in 1971 would become the Department of Materials
              Science and Engineering—celebrated the dedication of its new home,
              the Jack A. McCullough Building, made possible by a $1.5 million
              grant from vacuum tube pioneer Jack McCullough and his wife and
              from the Defense Advanced Research Projects Agency (DARPA). The
              building still serves as a center of interdisciplinary materials
              research today.
              <Footnotes footnoteRefs={[{ id: "footnote3", number: 3 }]} />
            </Text>
            <Text>
              The Department of Chemical Engineering, just five years old, had
              grown weary of its under-resourced home—“a dilapidated one-story
              sandstone storage building known quaintly as the ‘outhouse.’ ” In
              1965, the department moved into a new “laboratory and gazebo”
              building through a grant from the National Science Foundation,
              with matching gifts from Mr. John Stauffer and other private
              donors.
              <Footnotes footnoteRefs={[{ id: "footnote4", number: 4 }]} />
            </Text>
          </OneCol>
          <ImageGallery images={galleryImages} />
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="D" />
          </div>
          <OneCol className="rs-mb-5">
            <Text>
              In 1967, the school broke ground on the Space Engineering
              Building: a $4,460,000, four-story, 116,000-square-foot home for
              the Department of Aeronautics and Astronautics, with faculty
              offices, labs, shops, a large computer facility, and a 210-seat
              auditorium serving 50 faculty members, 40 research associates, and
              180 graduate students from a dozen departments in the schools of
              Engineering and Humanities and Sciences. Funding from NASA and the
              U.S. Air Force, along with several private and corporate gifts,
              made possible a new era in space-oriented research and education.
              <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} /> When
              the building opened in 1969, it was named for the late Stanford
              professor William F. Durand, who, Dean Pettit noted, had been one
              of the first at Stanford to receive a government award of $5,000
              for propeller research during World War I. “It resulted in his
              development of the first variable pitch propeller, and marked the
              beginning of aircraft studies at Stanford,” Pettit said.
              <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} />
            </Text>
          </OneCol>
          <Container mb={5}>
            <MediaCaptionImage
              isParallax
              rounded
              aspectRatio="16x9"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062196/00005967_0003_menves.jpg"
              alt="An old black and white image featuring individuals cycling and walking around."
              caption="The William F. Durand Building for Space Engineering and Science, 1969. The building was built to house the Department of Aeronautics and Astronautics. During this time, the department was receiving more than $1 million in research funding each year and more than 200 graduate students enrolled, surpassing MIT as the nation’s largest producer of PhD graduates in aeronautics and astronautics. | Stanford News Service."
            />
          </Container>
          <OneCol className="rs-mb-5">
            <Text>
              With more than $1 million in research grants flowing in yearly,
              and more than two hundred newly minted graduate students flowing
              out, Stanford became the nation’s leading source of PhDs in
              aeronautics and astronautics.
              <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} /> That
              upsurge owed much to the efforts and academic contributions of
              department chair Nicholas Hoff.
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-6">
            <OneCol>
              <H2 className="mt-0">First faculty in space</H2>
              <Text>
                During the heated space race of the 1960s, NASA selected
                Stanford electrical engineer Owen Garriott for its inaugural
                class of six scientist-astronauts.
                <Footnotes
                  footnoteRefs={[{ id: "footnote8", number: 8 }]}
                />{" "}
                Garriott would venture into space in 1973 with the Skylab 3
                mission, during which he worked the first amateur (ham) radio
                station in space, connecting with some 250 ham operators,
                including his mother, Mary Catherine Garriott, Senator Barry
                Goldwater, and King Hussein of Jordan.
              </Text>
              <Text>
                In 1973, Krishnamurty Karamcheti, a professor of aeronautics and
                astronautics, entered an agreement with the NASA Ames Research
                Center to establish the NASA–Stanford Joint Institute for
                Aeronautics and Acoustics (JIAA) to study the emerging field of
                flow-generated noise that had grown in importance in the age of
                commercial jets. Over the next quarter century, JIAA would
                graduate forty-five PhD students.
                <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} />
              </Text>
            </OneCol>
            <OneCol>
              <MediaCaptionImage
                isCaptionInset
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062190/Owen_Garriott_NASA_hgzrsm.jpg"
                alt="A man wearing an astronaut suit sits in a space station."
                caption="Electrical engineer Owen Garriott on board NASA’s Skylab 3, where he worked the first amateur radio from orbit, 1973. He also performed three spacewalks, logging 14 hours outside of Skylab. In the inaugural class of six scientist-astronauts selected by NASA in 1965, Garriott went on to fly on board a Space Shuttle mission in 1983, logging a lifetime total of 69 days, 18 hours, and 56 minutes off the planet. | NASA."
              />
            </OneCol>
          </TwoCol>
          <TwoCol bgColor="blue" className="rs-mt-7 rs-pt-7 rs-pb-5">
            <OneCol>
              <H2 className="mt-0">
                Stanford Engineering <br />
                Facilities Map, November 1966
              </H2>
            </OneCol>
            <OneCol>
              <Text>
                Campus facilities had been expanded, remodeled, and
                reconstructed almost continuously since the university opened
                its doors for students in 1891. At the time this map was
                published, some radio science research was conducted elsewhere
                in California and as far away as Antarctica. One major new
                building, the Space Engineering Building (later named for
                William F. Durand), was under construction.
                <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} /> A
                summary of the extensive facilities follows (numbers correspond
                to the buildings shown on the schematic drawing). | Special
                Collections & University Archives.
              </Text>
            </OneCol>
          </TwoCol>
          <MediaCaptionImage
            aspectRatio="free"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1747770081/EngineeringBuildingsMap-cropped_pyfsvz.jpg"
            alt="Visual representation of the campus layout, featuring essential buildings highlighted in red."
          />
          <Container bgColor="blue" pt={7} pb={7}>
            <Accordion items={accordionData} itemsPerColumn={10} />
          </Container>
          <OneCol className="rs-mb-4">
            <H2 className="">The computer age</H2>
            <Text>
              In January 1965, when the School of Humanities and Sciences
              created the Department of Computer Science, Stanford became one of
              a handful of universities with such a full-fledged department.
              Campuswide, computers were transforming a broad range of fields,
              including engineering, genetics, music, and robotics. The
              Department of Computer Science would find a permanent home in the
              School of Engineering two decades later.
            </Text>
            <Text>
              The DENDRAL program—short for “Dendritic Algorithm”—was the
              world’s first “expert system,” uniting the skills of early
              artificial intelligence champion Edward Feigenbaum and Nobel
              Prize–winning geneticist Joshua Lederberg. The system was able to
              computationally estimate the molecular structure of various
              compounds from mass-spectrogram data. DENDRAL would eventually
              prove more accurate than human chemists in its ability to automate
              decision-making and problem-solving in organic chemistry.
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
          <OneCol>
            <Text>
              At the Stanford Artificial Intelligence Laboratory (SAIL),
              professor John McCarthy, lecturer Lester Earnest, and doctoral
              candidate Rodney Schmidt applied new AI abilities to a robotic
              vehicle known as the Stanford Cart, which by the late 1970s would
              be able to navigate visually through the foothills above campus.
              The Stanford Cart was first imagined as a robotic lunar rover when
              it was introduced in 1961 by mechanical engineering graduate
              student James L. Adams, who later joined the faculty. It became
              one of the world’s first self-driving vehicles.
              <Footnotes footnoteRefs={[{ id: "footnote11", number: 11 }]} />
            </Text>
            <Text>
              SAIL colleague John Chowning, a PhD student in music, formed a
              computational music group that would evolve into the Center for
              Computer Research in Music and Acoustics (CCRMA).
              <Footnotes footnoteRefs={[{ id: "footnote12", number: 12 }]} /> In
              1967, Chowning presented his frequency modulation (FM) synthesis
              algorithm to the world. It was a “simple yet elegant” breakthrough
              in the synthetic production of musical timbres. In 1973, Chowning
              licensed the technology to Yamaha, where it became “the most
              successful synthesis engine in the history of electronic musical
              instruments.”
              <Footnotes footnoteRefs={[{ id: "footnote13", number: 13 }]} />
            </Text>
          </OneCol>
          <Container>
            <MediaCaptionImage
              isCaptionInset
              rounded
              className="max-w-850 mx-auto rs-mb-3"
              aspectRatio="3x2"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062197/E507-4_re5l3v.jpg"
              alt="Several people focused on a computer screen, engaged in discussion and collaboration."
              caption="Visitors from France at the Artificial Intelligence Lab on computer music, 1975. Seated from left: Pierre Boulez, Steve Martin; standing from left: Andy Moorer, John Chowning, and Max Mathews. A computational music group founded by Chowning evolved into the Center for Computer Research in Music and Acoustics (CCRMA), which launched in June 1975. Because of the growing reputation of the computer music group at Stanford, Boulez had asked the team to participate in the planning stages of a music research institute being formed at the Centre Pompidou in Paris. | Stanford News Service."
            />
          </Container>
          <OneCol>
            <Text>
              In 1968, the Computer Forum, an industrial affiliates initiative,
              formed under the oversight of professors Edward McCluskey, Arthur
              Samuel, and William Miller. The Forum endures today, bringing more
              than one hundred corporate members together with academic and
              industrial leaders in computer science and electrical engineering
              to shape the future.
              <Footnotes footnoteRefs={[{ id: "footnote14", number: 14 }]} />
            </Text>
            <Text>
              In the 1920s, the challenge of the day had been long-distance
              transmission of electricity. Fifty years later, it was
              long-distance transmission of data—and Stanford engineers were
              once again ready. In the 1960s, the U.S. Department of Defense
              established the ARPANET project to create the first wide-area
              “packet-switching” network. Packet-switching, which divided and
              sent data in small packets and reassembled them at the
              destination, was the technical foundation for what would become
              the Internet. On October 29, 1969, the Stanford Research Institute
              (SRI) received the first message—“LO”—ever sent over the ARPANET
              from its first node at UCLA, making Stanford the second node.
              <Footnotes footnoteRefs={[{ id: "footnote15", number: 15 }]} /> In
              1971, SAIL successfully joined the growing ARPANET, too, helping
              pave the way for further breakthroughs from Stanford.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mb-1">
            <Text>
              In 1974, electrical engineering and computer science Professor
              Vinton Cerf, Robert Kahn of DARPA, and some of Cerf’s students
              published the Transmission Control Protocol (TCP), which governed
              how packets of information would be transmitted over the ARPANET
              and, eventually, the Internet. For this work, Cerf and Kahn would
              later be named corecipients of the Association for Computing
              Machinery’s 2004 A.M. Turing Award.
            </Text>
          </OneCol>
          <TwoCol isSidebar>
            <OneCol>
              <Text>
                Meanwhile, Ed Feigenbaum and Joshua Lederberg continued their
                interdisciplinary partnership, demonstrating ARPANET’s abilities
                as a tool for collaborative research with SUMEX-AIM (Stanford
                University Medical EXperimental Computer for Artificial
                Intelligence in Medicine), a national network of computing
                resources for artificial intelligence in the biomedical fields,
                sponsored by the National Institutes of Health.
                <Footnotes footnoteRefs={[{ id: "footnote16", number: 16 }]} />
              </Text>
              <Text>
                SAIL was also busy making strides in robotics. In 1969,
                mechanical engineering student Victor Scheinman developed a
                prototype six-jointed robotic arm that was a forerunner of the
                assembly-line robotic arm.
                <Footnotes
                  footnoteRefs={[{ id: "footnote17", number: 17 }]}
                />{" "}
                Two such arms were mounted on a tabletop at SAIL and used in
                research and teaching for more than two decades.
              </Text>
              <Text>
                Even with those successes, computers were not above criticism.
                As the Vietnam War dragged on, in February 1971 a group of
                seventy students led a twelve-hour seizure of the Computation
                Center to protest the U.S. bombing of Laos. They chose the
                Computation Center as “the most obvious machinery of the war.”
                The protest resulted in numerous arrests.
                <Footnotes footnoteRefs={[{ id: "footnote18", number: 18 }]} />
              </Text>
              <Text>
                In 1974, the Association for Computing Machinery (ACM) named
                Stanford’s Donald Knuth as the ninth winner of its A.M. Turing
                Award.
                <Footnotes
                  footnoteRefs={[{ id: "footnote19", number: 19 }]}
                />{" "}
                Knuth’s 1968 textbook, The Art of Computer Programming, would be
                printed in more than a million copies and be cited in the
                American Scientist’s list of books that shaped the last century
                of science.
                <Footnotes footnoteRefs={[{ id: "footnote20", number: 20 }]} />
              </Text>
            </OneCol>
            <StorySidebar>
              <MediaCaptionImage
                isCaptionInset
                rounded
                aspectRatio="2x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062195/A645-9_sl8lv5.jpg"
                alt="A bearded man stands confidently in front of a chalkboard holding a pipe."
                caption="Vinton Cerf in front of a blackboard filled with notes on Transmission Control Protocol/Internet Protocol (TCP/IP), circa 1974. TCP/IP, the foundational protocols that underpin the modern internet, were developed by Cerf in collaboration with Robert Kahn of DARPA. Later, Cerf and Kahn were corecipients of the 2004 A. M. Turing Award for these pioneering contributions. | Stanford News Service."
              />
            </StorySidebar>
          </TwoCol>
          <OneCol>
            <H2>Growing disciplines, expanding influence</H2>
            <Text>
              With the help of economics professor Kenneth Arrow, the discipline
              of Operations Research became a full engineering department in
              1967.
              <Footnotes
                footnoteRefs={[{ id: "footnote21", number: 21 }]}
              />{" "}
              George Dantzig had joined the faculty just one year before; he
              would later be known as the “Father of Linear Programming” for
              developing the simplex method of mathematical process
              optimization. The simplex algorithm would be named as one of the
              top ten algorithms of the twentieth century and would transform
              “virtually every industry, from petroleum refining to the
              scheduling of airline flights.”
              <Footnotes footnoteRefs={[{ id: "footnote22", number: 22 }]} />
            </Text>
            <Text>
              A training grant from the U.S. Public Health Service and the U.S.
              Atomic Energy Commission produced, in 1965, Stanford’s first-ever
              course in nuclear civil engineering under Professor Paul Kruger.
              In the class, graduate students and faculty explored the
              feasibility of using tactical nuclear explosions in construction
              and industry. The class was keenly focused on water quality and
              pollution control. Guest lecturers included Manhattan Project
              physicist Edward Teller and Nobel laureate Willard Libby.
              <Footnotes footnoteRefs={[{ id: "footnote23", number: 23 }]} />
            </Text>
            <Text className="rs-mb-5">
              Also in 1965, associate professor En Yun Hsu oversaw the
              construction of a 115-foot-long artificial wave machine in the
              Department of Civil Engineering. “We are merely scratching the
              surface of the ancient problem of how waves are formed and
              behave,” Hsu said.
              <Footnotes footnoteRefs={[{ id: "footnote24", number: 24 }]} />
            </Text>
          </OneCol>
          <BgImageWrapper
            className="mb-0"
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062196/SC0122_s1_b270_f10_5037-006_kle1ak.jpg"
          >
            <TwoCol className="lg:nth-4n-2:*:rs-mt-8 lg:nth-4n-3:*:rs-mt-8 rs-mb-5">
              <MediaCaptionImage
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062189/3523ScheinmanHydrArm_dlbnh9.jpg"
                alt="A man stands in front of a computer, holding a robotic arm."
                caption="Mechanical Engineering student Victor Scheinman with a prototype hydraulic arm, 1969. The arm, now on display inside the Gates Computer Science Building, was one of two that were mounted to a table where researchers and students used it for research and teaching purposes for over 20 years, often focused on applications in the manufacturing industry. In 1974, a version of the Stanford Arm was able to assemble a Ford Model T water pump. | The Board of Trustees of the Leland Stanford Junior University."
              />
              <MediaCaptionImage
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062190/00015013_0001_yhghjo.jpg"
                alt="A diverse crowd gathered in front of a building, with their hands raised, indicating support in protest."
                caption="Students demonstrating against the invasion of Laos by the South Vietnamese with U.S. air support, 1971. The students seized the Computation Center during 12 hours of confrontation and violence to protest the center’s use for war research. There were 12 arrests and no injuries. | Jose Mercado/Stanford News Service."
              />
            </TwoCol>
            <MediaCaptionImage
              className="rs-mb-5 max-w-1200 mx-auto"
              isCaptionFullWidth
              isCaptionInset
              rounded
              aspectRatio="8x5"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062196/SC0122_s1_b270_f10_5037-006_kle1ak.jpg"
              alt="A person sits inside a large, spherical metal structure with machinery, outdoors on a grassy field with trees and a truck in the background."
              caption="Students in the Design Engineering class, 1968 and 1969. In the late 1950s, Stanford Engineering’s Mechanical Engineering Design Division pioneered a new approach to engineering and design education, emphasizing hands-on, experiential learning through environments, including the Design Loft and Machine Shop (today, Product Realization Lab). Under the leadership of faculty John E. Arnold and Robert H. McKim, the Product Design program focused on teaching design as a creative practice, integrating engineering, arts, natural science, social science, and the humanities into a comprehensive design education to address real-world needs. The division aimed to prepare engineers who developed the ability to integrate technical and artistic skills with social and environmental understanding to create innovative solutions for complex challenges. This comprehensive design approach set the foundation for a broader emphasis on interdisciplinary design, which later influenced the emergence of design practices like Smart Product Design and Interaction Design and, eventually, the Hasso Plattner Institute of Design (d.school). | Stanford News Service."
            />
            <TwoCol className="lg:nth-4n-2:*:rs-mt-8 lg:nth-4n-3:*:rs-mt-8">
              <OneCol>
                <MediaCaptionImage
                  className="rs-mb-5"
                  rounded
                  aspectRatio="4x3"
                  src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062194/SC0122_s1_b272_f05_7266-05_exbwdd.jpg"
                  alt="Four people paddle together in a small makeshift boat on a body of water, each using an oar to help move the vessel forward."
                />
                <MediaCaptionImage
                  rounded
                  aspectRatio="4x3"
                  src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062201/SC0122_s1_b272_f05_7270-06_qowjes.jpg"
                  alt="Four men ride a homemade cart downhill through a grassy field, wearing helmets, smiling, and exuding excitement. A crowd watches in the background."
                />
              </OneCol>
              <OneCol>
                <MediaCaptionImage
                  className="rs-mb-5"
                  rounded
                  aspectRatio="4x3"
                  src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062204/SC0122_s1_b272_f05_7265-01_xeon8p.jpg"
                  alt="Black-and-white image of a man wearing a helmet and goggles riding a bike over a makeshift ramp. A crowd watches in a grassy field, creating a lively atmosphere."
                />
                <MediaCaptionImage
                  className="max-w-450"
                  rounded
                  aspectRatio="3x4"
                  src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062193/SC0122_s1_b271_f05_6030-09_j3shzw.jpg"
                  alt="A group of people watching at an object climb up a mini set of stairs made out of blocks."
                />
              </OneCol>
            </TwoCol>
          </BgImageWrapper>
          <OneCol>
            <H2>Tele-education</H2>
            <Text>
              Bay Area engineers. The Honors Cooperative would eventually be
              folded into the Stanford Center for Professional Development
              (SCPD) in 1995 and, by the late 1990s, offer courses at three
              hundred companies.
              <Footnotes footnoteRefs={[{ id: "footnote25", number: 25 }]} />
            </Text>
          </OneCol>
          <Container>
            <MediaCaptionImage
              isCaptionInset
              rounded
              className="max-w-850 mx-auto rs-mb-2"
              aspectRatio="3x2"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062199/SC0122_s1_b278_f04_C388-13_ao2ojx.jpg"
              alt="A black and white image of a man surrounded by multiple monitors in a dimly lit room with onlookers in front of him."
              caption="The control room for the Stanford Instructional Television Network (SITN), showing James Angell lecturing, 1969. This network allowed employees of member companies within a 50-mile range of Hoover Tower to take classes offered by the School of Engineering as part of the Honors Cooperative Program (HCP). When the HCP was founded in 1954, students had to come to campus to attend classes. With the founding of SITN in 1969, students could begin attending the program remotely. The network eventually became part of the Stanford Center for Professional Development. | Special Collections & University Archives."
            />
          </Container>
          <OneCol>
            <H2 className="mt-0">Growing diversity</H2>
            <Text>
              In 1968, Stanford student Barbara Liskov became the first woman at
              Stanford University to earn a PhD in computer science. Forty years
              later, Liskov would become the second woman ever to receive the
              A.M. Turing Award.
              <Footnotes footnoteRefs={[{ id: "footnote26", number: 26 }]} /> In
              1969, Stanford’s chapter of the undergraduate engineering honor
              society, Tau Beta Pi, inducted its first female members.
              <Footnotes footnoteRefs={[{ id: "footnote27", number: 27 }]} />
            </Text>
            <Text className="rs-mb-5">
              When Joseph Pettit stepped down as dean of the School of
              Engineering in 1972, William M. Kays, professor of mechanical
              engineering, served as his successor for the next dozen years.
              Under Kays, each of Stanford’s engineering departments
              consistently ranked in the top five in its field nationally, and
              the school increased its external research funding. Kays also led
              the diversification of the School of Engineering faculty and
              student body, recruiting women and underrepresented minorities.
              <Footnotes footnoteRefs={[{ id: "footnote28", number: 28 }]} />
            </Text>
          </OneCol>
          <ThreeCol className="rs-mb-4">
            <MediaCaptionImage
              rounded
              isCaptionInset
              isPortrait
              aspectRatio="1x1"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062189/Barbara_Liskov_computer_scientist_2010_mxssrp.jpg"
              alt="A woman with curly hair smiles warmly at the camera."
              caption="Barbara Liskov, the first woman to receive a PhD in computer science from Stanford University, 1968. She was also among the first women to receive a PhD from a computer science department in the United States. For her PhD, Liskov worked with John McCarthy, focusing on chess endgames. In 2008, she became the second woman to receive the A. M. Turing Award. | Kenneth C. Zirkel/Wikimedia Commons."
            />
            <MediaCaptionImage
              rounded
              isCaptionInset
              isPortrait
              aspectRatio="1x1"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062203/00019306_001_elbcld.jpg"
              alt="A black and white portrait of a man wearing glasses."
              caption="William M. Kays, May 1971. Kays began his career at Stanford as an undergraduate in engineering (’42), earned his MS (’47) and PhD (’51) in mechanical engineering, and went on to join the faculty in that department. By 1961, he was department chairman and in 1972 was appointed dean of the School of Engineering, in which role he served until 1984. Under Kays’s leadership, all of Stanford’s engineering departments ranked in the top five in their graduate fields nationally. The school increased its external funding of research and expanded the number of students, particularly women. The Center for Integrated Systems and the John A. Blume Earthquake Engineering Center were both established during his tenure. | Jose Mercado/Stanford News Service."
            />
            <MediaCaptionImage
              rounded
              isCaptionInset
              isPortrait
              aspectRatio="1x1"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062202/SC0122_s1_b278_f01_C076-02_vsvcbb.jpg"
              alt="A black and white portrait of a man wearing glasses."
              caption="Clayton Bates, professor of materials science and engineering and of electrical engineering, 1974. In 1972, following a 10-year career in industry, Bates became the first Black faculty member to hold a tenure-track appointment in the School of Engineering. Along with a group of graduate students, Bates founded the Stanford Society of Black Scientists and Engineers, an affiliate chapter of the National Society of Black Engineers. He also acted as a mentor and supporter of Black students in the areas of science, technology, engineering, and mathematics and advocated for equity in STEM education. His expertise was in solid-state physics, and he was particularly interested in photoelectronic materials and devices. His work focused on the unraveling of processes involved in the interaction of photons and electrons with the very complex materials used in photoelectronic sensing devices. | Stanford News Service."
            />
          </ThreeCol>
          <OneCol>
            <Text>
              Clayton W. Bates Jr., an expert in solid-state physics and
              photoelectric devices, became the first Black faculty member in a
              tenure-track position in the School of Engineering in 1972.
              Pushing the frontiers of science was “what keeps us going. . . .
              Some people call research a rat race, but I don’t know of anything
              else in the world I would rather be doing,” Bates told Stanford
              News in 1983.
              <Footnotes footnoteRefs={[{ id: "footnote29", number: 29 }]} />
            </Text>
            <Text>
              In 1972, Stanford Engineering also began a concerted effort to
              recruit women into engineering.
              <Footnotes
                footnoteRefs={[{ id: "footnote30", number: 30 }]}
              />{" "}
              Kays penned a booklet, “Women in Engineering: Consider the
              Possibility,” that was mailed to 12,000 high schools nationwide.
              In it, he noted, “As the father of four college-aged girls, I am
              well aware of the career ambitions of today’s women. . . . Now is
              the perfect time for women to break some new ground. Like it or
              not, you live in a highly technological society; technology is not
              going to go away, and you should be a part of it.”
              <Footnotes footnoteRefs={[{ id: "footnote31", number: 31 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol>
            <Text>
              In 1973, just a year after Kays’s entreaty, the Department of
              Materials Science and Engineering awarded its first PhDs to
              women—Ayse Emel Geckinli and Diane Margel Robertson. A year later,
              Kays supported the creation of the Stanford Center for Research on
              Women, now known as the Michelle R. Clayman Institute for Gender
              Research.
              <Footnotes footnoteRefs={[{ id: "footnote32", number: 32 }]} /> He
              later encouraged the formation of the campus group Women in
              Science and Engineering (WISE).
            </Text>
            <H2>A nobel prize</H2>
          </OneCol>
          <Container>
            <MediaCaptionImage
              isCaptionInset
              rounded
              className="max-w-850 mx-auto"
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746062194/kenneth_arrow_ip1m0x.jpg"
              alt="A man in a suit and tie stands confidently as reporters gather around him, capturing the moment with their cameras."
              caption="Kenneth Arrow, professor of operations research, at his press conference after winning the Nobel Prize in Economic Sciences 1972. Arrow was on the faculty at Harvard University when he won the Nobel Prize for work he did while at Stanford for “pioneering contributions to general economic equilibrium theory and welfare theory.” Arrow returned to Stanford in 1979 and stayed until his retirement in 1991. | Chuck Painter/Stanford News Service."
            />
          </Container>
          <OneCol className="rs-mb-2">
            <Text>
              In 1972, Kenneth Arrow, deemed one of the most influential
              economists of the twentieth century, was awarded the Nobel Prize
              in economics for work he did while at Stanford with collaborator
              Sir John Hicks on general equilibrium and welfare theories. That
              work is now fundamental in the evaluation of business risk and in
              government economic and welfare policies. Arrow had come to
              Stanford in 1949 and eventually became a professor of operations
              research. He played a defining role in the creation of the School
              of Engineering’s Department of Operations Research in 1967. Though
              he left Stanford in 1969 for Harvard University, where he was on
              faculty when he won the Nobel Prize, Arrow would return to
              Stanford in 1979, completing his distinguished career in 1991.
              <Footnotes footnoteRefs={[{ id: "footnote33", number: 33 }]} />
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-5">
            <OneCol>
              <H2 className="mt-0">New focus on the environment</H2>
              <Text>
                The first Earth Day in 1970 spurred a period of profound growth
                in environmental awareness. Civil engineering faculty members
                James Leckie, Gilbert Masters, and Lily Young, with mechanical
                engineer Harry Whitehouse, developed an “immensely successful”
                course known as “Designs for Alternative Lifestyles” as part of
                the Stanford Workshops on Political and Social Issues. The team
                followed with a widely adopted textbook detailing
                environmentally beneficial projects that individuals could
                undertake at home. The Sierra Club published the book in 1975 as
                Other Homes and Garbage: Designs for Self-Sufficient Living.
                <Footnotes footnoteRefs={[{ id: "footnote34", number: 34 }]} />
              </Text>
              <Text>
                In 1974, the Environmental Engineering and Science program, part
                of the Department of Civil Engineering, partnered with the Santa
                Clara Valley Water District to explore how chemicals moved
                through highly treated Palo Alto domestic wastewater and into an
                aquifer adjacent to San Francisco Bay. Water Factory 21 became
                the first treatment plant to use reverse osmosis to remove
                harmful organic chemicals from treated wastewater.
                <Footnotes footnoteRefs={[{ id: "footnote35", number: 35 }]} />
              </Text>
              <Text>
                “We expect that more and more graduates will enter the
                environmental field. Society is fully aware of needs in relation
                to ecology, and more engineers will be needed in planning and
                building sewage treatment and power plants, transportation, and
                with other expertise related to the environment,” wrote
                Assistant Dean Alfred Kirkland in 1972.
                <Footnotes footnoteRefs={[{ id: "footnote36", number: 36 }]} />
              </Text>
              <H2>Rising demand</H2>
              <Text>
                Dean Pettit had boldly predicted a substantial shortage of
                engineers by decade’s end. As the demand for engineers grew
                throughout this transformative decade, enrollment in the School
                of Engineering increased dramatically, feeding a need for 42,000
                new engineers a year nationwide.
                <Footnotes
                  footnoteRefs={[{ id: "footnote37", number: 37 }]}
                />{" "}
                The school’s growth mirrored the nation’s increasing reliance on
                engineers to address complex global challenges. As its fifth
                decade closed, the School of Engineering had firmly established
                itself as a leader in shaping the future of technology and
                innovation. And it was poised to continue setting the pace for
                engineering education and research, extending influence far
                beyond the classroom and laboratory.
              </Text>
            </OneCol>
            <OneCol>
              <MediaCaptionImage
                rounded
                aspectRatio="3x4"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1746542722/00012017_015_cropped_ceonyc.jpg"
                alt=""
                caption="Engineering Corner, 1974. The new shield design for the School of Engineering, introduced in 1967, was added to the building in the early 1970s, before the school moved into its new home in the Terman Engineering Center in 1977. The mascle (diamond with the center removed) framework is orange, engineering’s academic color, on a blue background, denoting Stanford Engineering’s commitment to graduate education. The triple redwood fronds, found on all Stanford University heraldry, symbolize, first, “the organization, transmission, and generation of knowledge which takes place in the School and on which the scholarly growth of engineering depends,” and, second, “the tripartite character of Stanford’s School of Engineering—students, faculty, and alumni.” | Special Collections & University Archives."
              />
            </OneCol>
          </TwoCol>
          <DecadePager />
          <Container pt={4} pb={7} bgColor="blue">
            <OneCol>
              <FootnotesList footnotes={footnotes} />
            </OneCol>
          </Container>
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
