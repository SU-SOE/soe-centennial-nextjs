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
  BgImageWrapper,
  Scrollytelling,
  ScrollyBubble,
} from "@/components/Story";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/ImageGallery";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { H2 } from "@/components/Typography/Header";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  title:
    "Preparing Roads over which Culture May Ride in Comfort | 100 Years of Stanford Engineering",
  description:
    "On May 15, 1925, when the Stanford University Board of Trustees approved the School of Engineering proposal, it was not the start of engineering at Stanford — an engineering curriculum had been in place since the university's inception.",
  keywords: [
    "Stanford Engineering",
    "School of Engineering",
    "Stanford History",
    "Engineering Education",
  ],
  openGraph: {
    title: "Preparing Roads over which Culture May Ride in Comfort",
    description:
      "On May 15, 1925, when the Stanford University Board of Trustees approved the School of Engineering proposal, it was not the start of engineering at Stanford — an engineering curriculum had been in place since the university's inception.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742342467/Ryan-High-Voltage-Laboratory_927_tighter_Chapter-feature-image_mccqgm.jpg",
        alt: "Historic Stanford engineering class in session, circa 1925",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preparing Roads over which Culture May Ride in Comfort",
    description:
      "On May 15, 1925, when the Stanford University Board of Trustees approved the School of Engineering proposal, it was not the start of engineering at Stanford — an engineering curriculum had been in place since the university's inception.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1742342467/Ryan-High-Voltage-Laboratory_927_tighter_Chapter-feature-image_mccqgm.jpg",
    ],
  },
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741727933/harris_j_ryan_gw6by8.jpg",
    alt: "Professor Harris J. Ryan working in his High-Voltage Laboratory, around 1926",
    caption:
      "Professor Harris J. Ryan at his High-Voltage Laborator y, where he studied the long-distance transmission of electricity, circa 1926. Ryan was head of the Department of Electrical Engineering from 1905 until 1931. | Berton W. Crandall/Hoover Institution Librar y & Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741726621/00007001_0001.jpg_electrical_engineers_paz9cd.jpg",
    alt: "Group of Stanford electrical engineers in an old photograph",
    caption:
      "Stanford electrical engineers in an undated photograph. Professor Harris J. Ryan is seated sixth from right. | Berton W. Crandall/Hoover Institution Library & Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741727933/experimental_power_lines_eqroyv.jpg",
    alt: "Experimental power lines viewed from the Ryan Lab",
    caption:
      "View southward of experimental power lines from the Ryan Lab. Ryan’s research helped overcome many vexing challenges of transporting electricity, including how to carry electricity from the Hoover Dam to Los Angeles. | Berton W. Crandall/Hoover Institution Library & Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741726630/wd899qz9103_00_0001_bk0gxi.jpg",
    alt: "High-voltage transmission line built on Stanford land",
    caption:
      "A 7-mile-long experimental high-voltage transmission line was built on the 200 acres of land provided by Stanford for the Harris J. Ryan High-Voltage Laboratory. Today, the area is a faculty residential neighborhood with a street and park named for Ryan. | Berton W. Crandall/Hoover Institution Library & Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741726627/00014490_015_q0xicq.jpg",
    alt: "Ryan High-Voltage Lab building on Stanford Avenue",
    caption:
      "Located on Stanford Avenue, the Ryan High-Voltage Lab building—framed in steel and covered in asbestos—was 173 feet long, 60 feet wide, and 65 feet high. A 120-foot opening on one side of the building could be closed off by three 47-by-40-foot doors to create absolute darkness. | Berton W. Crandall/Hoover Institution Library & Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741726626/00007204_0003.jpg_Guggehneim_Lab_h3dwcp.jpg",
    alt: "Interior of the Guggenheim Aeronautics Laboratory, depicting a man alongside a large machine",
    caption:
      "Inside the Guggenheim Aeronautics Laboratory in 1927, Professor William F. Durand, who had joined the Stanford faculty in 1904, collaborated with Professor Everett P. Lesley to build one of the first wind tunnels, which enabled rigorous study of propeller design. Today, dozens of Durand’s hand-carved wooden propeller designs are on display in the Terman Engineering Library on the second floor of Stanford’s Jen-Hsun Huang Engineering Center. | Berton W. Crandall/Hoover Institution Library & Archives.",
  },
];

const footnotes = [
  {
    number: 1,
    id: "footnote1",
    text: "George T. Clark, Leland Stanford: War Governor of California, Railroad Builder and Founder of Stanford University (Stanford University Press, 1931).",
  },
  {
    number: 2,
    id: "footnote2",
    text: "Dictionary of American Biography, vol. 17 (New York: Charles Scribner’s Sons, 1935), 504.",
  },
  {
    number: 3,
    id: "footnote3",
    text: "“History,”",
    sourceLink: "https://engineering.stanford.edu/about/history",
  },
  {
    number: 4,
    id: "footnote4",
    text: "Annual Report of the President of Stanford University for the Thirty-Fourth Academic Year Ending August 31, 1925, 36.",
  },
  {
    number: 5,
    id: "footnote5",
    text: "Ibid., 33.",
  },
  {
    number: 6,
    id: "footnote6",
    text: "Theodore J. Hoover, “Training the Engineers of Tomorrow,” Stanford Illustrated Review (May 1926).",
  },
  {
    number: 7,
    id: "footnote7",
    text: "Tom Wyman, “Charles David Marx: At the Heart of a Town-Gown Relationship,” Sandstone and Tile (Stanford Historical Society) 28, no. 1 (Winter 2004).",
  },
  {
    number: 8,
    id: "footnote8",
    text: "Charles David Marx, “Stanford’s Schools of Engineering: Past, Present, and Future,” Stanford Illustrated Review (June 1923).",
  },
  {
    number: 9,
    id: "footnote9",
    text: "Ibid.",
  },
  {
    number: 10,
    id: "footnote10",
    text: "Charles D. Marx, “Idealism and Art in Engineering,” Transactions of the American Society of Civil Engineers 79, no. 1351 (1915), 1329–1344.",
  },
  {
    number: 11,
    id: "footnote11",
    text: "Annual Report of the President of Stanford University for the Thirty-Fourth Academic Year Ending August 31, 1925, 35–36.",
  },
  {
    number: 12,
    id: "footnote12",
    text: "C.D. Marx, “Stanford’s Schools of Engineering.”",
  },
  // {
  //   number: 13,
  //   id: "footnote13",
  //   text: "Guido H. Marx, “The Making of the Stanford Engineer,” Stanford Alumnus 9, no. 4 (December 1907).",
  // },
  // {
  //   number: 14,
  //   id: "footnote14",
  //   text: "Alfred D. Kirkland, “Engineering at Stanford: A Short Historical Perspective,” IEEE Transactions on Education 18, no. 1 (February 1975): 50,",
  //   sourceLink: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=4320947",
  // },
  {
    number: 15,
    id: "footnote15",
    text: "Annual Report of the President of Stanford University for the Thirty-Ninth Academic Year Ending August 31, 1930, 165.",
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
            chapter="Decade 1"
            heading="“Preparing Roads over which Culture May Ride in Comfort”"
            dek="1925 – 1934"
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726629/high_voltage_laboratory_oyh87g.jpg"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726629/high_voltage_laboratory_oyh87g.jpg"
            alt="A public demonstration of a 2.1 million volt test station lead by Harris J. Ryan standing to the right of a giant flame"
            caption="The Harris J. Ryan High-Voltage Laboratory debuted on September 17, 1926, with a public demonstration of its 2,100,000-volt test station containing six 350,000-volt transformer units, capable of producing the highest voltage ever obtained at commercial frequency. Erected at a cost of nearly $500,000, it was the largest university electrical lab in existence at the time. | Berton W. Crandall photographs, Box 24, Hoover Institution Library & Archives."
          />
          <div className="max-w-1500 w-full cc">
            <Quote
              width="wide"
              teaser="Stanford University should be in a position to offer advanced training in engineering for men qualified to be leaders."
              source="— Charles David Marx, 1923"
            />
          </div>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mt-3">
            <H2>1925 – 1934</H2>
            <Text variant="overview">
              On May 15, 1925, when the Stanford University Board of Trustees
              officially approved the proposal to create the new School of
              Engineering, the decision was anything but the start of
              engineering at Stanford. The education of engineers had been a
              founding intention for the university, with an engineering
              curriculum in place since its inception.
            </Text>
            <Text>
              In March 1884, Leland Stanford had just turned sixty. In addition
              to gaining extreme wealth by investing in the first
              transcontinental railroad, he had served as governor of California
              and would soon become a U.S. senator. Yet his wealth and power
              could not save his son. While on a grand tour of Europe with his
              family, Leland Stanford, Jr., just fifteen years old, had
              contracted typhoid and died. Even while still in Europe, a bereft
              Leland Stanford searched for a way to honor his child and bring
              purpose back into his own life. The elder Stanford imagined a
              university in his son’s name. It was not to be just any
              university, but one built specifically to educate engineers in a
              new way.
            </Text>
            <Text>
              “I was thinking in the night, since Leland is gone what my wealth
              could do,” Stanford explained to the Rev. Augustus F. Beard, in
              Florence, Italy, as he waited for clearance to bring his dead
              son’s body home to California. “I was thinking, since I could do
              no more for my boy I might do something for other people’s boys in
              Leland’s name. When I was connected with the building of the
              railroad, I found that many of those engaged in the engineering
              were inefficient and inexact and poorly prepared for their work. I
              was thinking I might start a school or institution for civil and
              mechanical engineers on my grounds in Palo Alto.”
              <Footnotes footnoteRefs={[{ id: "footnote1", number: 1 }]} />{" "}
            </Text>
            <Text>
              “The children of California shall be our children,” he told his
              wife, Jane Stanford.
              <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} />{" "}
              Though it took seven years for the doors of Leland Stanford Junior
              University to open in 1891, from its first day it was a school for
              engineering as much as it was a school for arts and sciences. Five
              of the university’s first fifteen faculty members were engineering
              professors, and 141 of the university’s original 559 students were
              enrolled in engineering.
              <Footnotes footnoteRefs={[{ id: "footnote3", number: 3 }]} /> When
              her husband died in 1893, Jane continued to shepherd this vision.
            </Text>
            <H2>A look back, and forward</H2>
            <Text mb="0">
              In the ten decades since its founding, the School of Engineering
              has produced fundamental work in science and transformational
              breakthroughs that have changed lives and shaped human society.
              From particle physics to human DNA, airplanes to automobiles,
              catalysts to computer science, the Stanford School of Engineering
              has been a leader among engineering schools. Documents from the
              school’s early years illuminate the founding purposes and
              principles that compelled university leaders to gather the
              engineering disciplines of the time—civil, mechanical, electrical,
              and mining and metallurgy—into a single school.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol className="rs-mb-5">
            <Text>
              “In organic union there is strength,” wrote the members of a
              select committee charged by then Stanford President Ray Lyman
              Wilbur to explore the idea of a School of Engineering thirty-four
              years after the university’s founding.
              <Footnotes footnoteRefs={[{ id: "footnote4", number: 4 }]} /> In
              their 1925 report to the president, the committee unanimously
              recommended that the school be formed. While their report had no
              shortage of discussion about what curriculum should be followed
              and the professional skills this new breed of engineer should
              master, the committee focused on the sort of people the Stanford
              School of Engineering should attract.
            </Text>
            <Text>
              The committee members noted that their work had been driven by a
              need to address “the scarcity, among engineers, of men capable of
              managing, directing, leading. This has given rise, among
              engineering teachers, to a widespread discussion of the question,
              How to train the engineering student for leadership.”
              <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} />{" "}
              Theodore Hoover, the first dean of the School of Engineering,
              detailed the personal characteristics possessed by the “Stanford
              engineer”—an individual prepared for leadership who would be
              successful in life as well as engineering. The Stanford engineer
              would be “something vastly greater and more significant in modern
              life than just a man with technical training.”
              <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} /> That
              goal of promoting leadership in engineering and life endures to
              this day.
            </Text>
          </OneCol>
          <BgImageWrapper bgColor="blue" isTwoCol>
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.5}
              duration={1}
              rounded
              isCaptionInset
              aspectRatio="3x4"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726630/00007005_0011.jpg_mining_lab_kufz7t.jpg"
              alt="A factory worker engages with a miniature ore-treating plant in a mining lab"
              caption="This undated photograph shows a miniature ore-treating plant in the mining lab. Stanford’s Department of Mining and Metallurgy was created in 1919 from the Geology and Mining Department, one of Stanford’s oldest departments, although the physics of metals had been studied since 1903. Study of metals would be the department’s main subject for nearly half a century. | Berton W. Crandall/Hoover Institution Library & Archives."
            />
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.2}
              duration={1}
              rounded
              isCaptionInset
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726628/Engineering_faculty_c1920_sjiqvd.jpg"
              alt="Black and white photo of two rows of men in three-pieced suits. Three sitting in front and six men sitting in back."
              caption="Stanford’s Civil Engineering faculty at the time of Charles David Marx’s 1923 retirement. Marx is seated in the center of the bottom row. | Courtesy Barbara Wallace."
            />
          </BgImageWrapper>
          <OneCol className="rs-mt-6 rs-mb-6">
            <Text>
              The committee’s focus on people applied not only to students but
              also to faculty. Back in 1891, Stanford’s first president, David
              Starr Jordan, went looking for top engineers across the country.
              The first hire he made in the engineering program was Charles
              David Marx, a noted civil engineer then at Cornell University.
              Marx became known as “The Father of the Stanford Engineer,” a man
              whom his students affectionately referred to as “Daddy Marx,” for
              the paternal figure he cut on campus.
              <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} />
            </Text>
            <Text>
              The headquarters of engineering education was “Engineering
              Corner,” a familiar building of sandstone and red tile with an
              arched portico that opened in 1905. Like many other structures on
              Stanford’s campus, it was damaged in the 1906 earthquake. Although
              some buildings, like the newly completed library, were
              unsalvageable, much of the campus was restored with the help of a
              committee of Stanford’s own engineers that included Charles Marx;
              Charles Wing, a structural engineer; and William Durand, a
              mechanical engineer. Engineering Corner would remain the center of
              Stanford Engineering for nearly three-quarters of a century, until
              the Frederick E. Terman Engineering Center was dedicated in 1977.
            </Text>
          </OneCol>
          <Container width="site" mb={5}>
            <MediaCaptionImage
              isParallax
              rounded
              animation="fadeIn"
              aspectRatio="16x9"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1742343299/engineering-corner-1910_1915_aoicg9.jpg"
              alt="The southeast corner of Stanford’s main quad, known as Engineering Corner"
              caption="The southeast corner of Stanford’s main quad, known as “Engineering Corner,” circa 1910–1915. The building was home to Engineering until 1977, when the school moved into the newly constructed Frederick E. Terman Engineering Center. | Special Collections & University Archives."
            />
          </Container>
          <OneCol>
            <Text>
              Later, in 1923, Charles Marx would write that, even before a
              single block of sandstone had been laid for Engineering Corner,
              Stanford had succeeded because it had placed a priority on people
              over infrastructure: “And this again is characteristic of
              Stanford, where the bringing and holding of properly qualified
              teachers has always been deemed of more importance than the
              addition to buildings and equipment.”
              <Footnotes footnoteRefs={[{ id: "footnote8", number: 8 }]} /> As
              for curriculum, Stanford had held engineering courses on par with
              other courses, allowing the university to “wipe out the line of
              division [between] students in technical and so-called cultural
              courses.”
              <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} />
              The goal was a well-rounded, liberal education meant to break free
              of stereotypes about engineers. Speaking to the American Society
              of Civil Engineers when he was president of the organization in
              1915, Marx renounced the idea of engineering as a purely technical
              endeavor that was “destructive of idealism” and natural beauty.
              Engineering embodied idealism and art, he insisted, and the same
              principles of construction applied to “a symphony, a poem, or a
              bridge.”
              <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} />
            </Text>
          </OneCol>
          <BgImageWrapper
            isTwoCol
            bgColor="fog-light"
            hasBgImage
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726628/campus_aerial_view_crandall_m0r1jy.jpg"
            alt=""
          >
            <div>
              <MediaCaptionImage
                animation="fadeIn"
                delay={0.2}
                duration={1}
                rounded
                isCaptionInset
                aspectRatio="4x3"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726628/campus_aerial_view_crandall_m0r1jy.jpg"
                alt="Aerial view of the Stanford campus, facing south, circa 1925"
                caption="Aerial view of the Stanford campus, facing south, circa 1925. | Berton W. Crandall photographs, Hoover Institution Library & Archives."
              />
              <MediaCaptionImage
                animation="fadeIn"
                delay={0.5}
                duration={1}
                rounded
                isCaptionInset
                aspectRatio="4x3"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741727935/60022_011_0001_gplnxp.jpg"
                alt="View south from Memorial Church, showing Engineering school buildings 520 (left) and 530 (right), with the old clock tower between them, 1925"
                caption="View south from Memorial Church, showing Engineering school buildings 520 (left) and 530 (right), with the old clock tower between them, 1925. Today they are Mechanical Engineering buildings. | Berton W. Crandall photographs, Hoover Institution Library & Archives."
              />
            </div>
            <MediaCaptionImage
              animation="fadeIn"
              delay={0.3}
              duration={1}
              rounded
              isCaptionInset
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741727934/60022_011_0005_gs4cil.jpg"
              alt="View of Engineering buildings on Escondido Mall behind Memorial Church, 1925"
              caption="View of Engineering buildings on Escondido Mall behind Memorial Church, 1925. From left o right, the buildings today are the Frederick Emmons Terman Engineering Laboratory (500), the George Havas Engineering Building (520), and Mechanical Engineering (530). Also visible is the roof corner of what is today the Thomas F. Peterson Engineering Laboratory (550), home of the Hasso Plattner Institute of Design (d.school). | Berton W. Crandall photographs, Hoover Institution Library & Archives."
            />
          </BgImageWrapper>
          <OneCol>
            <Text>
              In their 1925 report, Wilbur’s faculty committee concurred:
              liberal arts and engineering went hand in hand. In recommending a
              course of study, they wrote, “As to whether all engineering
              students should be required to take economics, geography or
              geology, biology, chemistry, history, and English: it is the
              unanimous judgment of this Committee that all engineering students
              should be required to take some minimum not only of the studies
              named above but also of certain others”—among them courses in
              physics, government, foreign language, law, and psychology.
            </Text>
            <Text>
              The professional engineering degree—six years in total—would
              follow a four-year liberal curriculum leading to a bachelor of
              arts, a quarter of which would be composed of electives designed
              to “attract rather than repel the born leader” and develop the
              “innate capacity to lead.” The curriculum would be followed by two
              years of specialization in a specific engineering discipline
              resulting in a graduate “degree of Engineer.”
              <Footnotes footnoteRefs={[{ id: "footnote11", number: 11 }]} />
            </Text>
            <Text>
              “If it is to endure,” Charles Marx wrote, “Stanford University
              should be in a position to offer advanced training in engineering
              for men qualified to become leaders . . . this brings us to what
              is commercially the Stanford engineer’s most valuable inherent
              asset—a certain sense of adequacy which manifests itself in his
              power of initiative and resourcefulness.”
              <Footnotes footnoteRefs={[{ id: "footnote12", number: 12 }]} />
            </Text>
          </OneCol>
          <TwoCol className="rs-mt-5" isSidebar>
            <OneCol>
              <Text>
                These leaders would not graduate and remain in Palo Alto, or in
                California, or even in the American West, but would—as Stanford
                engineers already had in previous decades—go out to all corners
                of the world. “We see them dotted over this continent from the
                Pacific to the Atlantic, from Alaska to Mexico; we find them in
                Cuba and the Philippines, in China and Japan, in South America,
                Australia and South Africa—and wherever they are we see them
                working hard and faithfully, exhibiting initiative and
                resourcefulness, many occupying positions of responsibility and
                power and all engaged, as one of them said, ‘in preparing roads
                over which Culture may ride in comfort,’ ” wrote Guido Marx, a
                mechanical engineer, who joined his brother Charles Marx on the
                Stanford faculty in 1895.
                <Footnotes footnoteRefs={[{ id: "footnote13", number: 13 }]} />
              </Text>
              <Text>
                The first dean of the School of Engineering, Theodore “Ted”
                Hoover, embodied that global spirit. Dean Hoover was an
                internationally known professor of mining and metallurgy and
                brother of the 31st president of the United States, Herbert
                Hoover. Prior to his professorship, Theodore Hoover had built a
                reputation as an advisor to gold mining operations in California
                and Australia; to lead and silver mining in Burma (now Myanmar);
                and to copper mining in Finland and Russia. At a time when
                international travel was made by steamship, Hoover maintained
                offices in London and San Francisco. As the school’s first dean,
                Ted Hoover shaped what the School of Engineering would become,
                building a strong, broad-based undergraduate curriculum while
                emphasizing graduate education. Hoover served as dean from the
                school’s inception until his retirement in 1936.
              </Text>
              <Text>
                Hoover’s early tenure was notable for the 1926 dedication of the
                Harris J. Ryan High-Voltage Laboratory, named for Professor
                Ryan, head of the Department of Electrical Engineering. In 1925,
                Ryan had been honored with an Institute of Electrical and
                Electronics Engineers (IEEE) Edison Medal for “contributions to
                the science and art of high-tension transmission of power,”
                taking his place beside George Westinghouse, Alexander Graham
                Bell, and Nikola Tesla as an Edison laureate.
              </Text>
            </OneCol>
            <StorySidebar hasLineArt>
              <MediaCaptionImage
                isPortriat
                rounded
                aspectRatio="1x1"
                imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726630/theodore_hoover_pv6obq.jpg"
                alt="Portriat of Theodore Jesse Hoover (1871-1955)"
                caption="Theodore Jesse Hoover (1871-1955) graduated from Stanford in 1901 with a BA degree in geology and mining. After a career in the international mining industry, he returned to Stanford in 1919 as a professor of mining and metallurgy. He played a pivotal role in the formation of the new School of Engineering and served as its first dean from 1925 until his retirement in 1936. Hoover was the elder brother of Herbert Hoover, one of the first graduates of Stanford University in 1895 and the 31st President of the United States from 1929 to 1933. | Special Collections & University Archives."
              />
            </StorySidebar>
          </TwoCol>
          <Container width="site" mt={5} mb={5}>
            <MediaCaptionImage
              isParallax
              rounded
              animation="fadeIn"
              aspectRatio="4x3"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726626/00007204_0003.jpg_Guggehneim_Lab_h3dwcp.jpg"
              alt="Interior of the Guggenheim Aeronautics Laboratory, depicting a man alongside a large machine"
              caption="Inside the Guggenheim Aeronautics Laboratory in 1927, Professor William F. Durand, who had joined the Stanford faculty in 1904, collaborated with Professor Everett P. Lesley to build one of the first wind tunnels, which enabled rigorous study of propeller design. Today, dozens of Durand’s hand-carved wooden propeller designs are on display in the Terman Engineering Library on the second floor of Stanford’s Jen-Hsun Huang Engineering Center. | Berton W. Crandall/Hoover Institution Library & Archives"
            />
          </Container>
          <Scrollytelling
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741727934/60022_011_0005_gs4cil.jpg"
            bgImageAlt="View of Engineering buildings on Escondido Mall behind Memorial Church, 1925"
          >
            <H2 className="text-center">Construction and plans</H2>
            <MediaCaptionImage
              className="max-w-500 mx-auto"
              aspectRatio="5x8"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1742839253/FPO-Stanford-Quad-logo-silo_vqitsd.png"
              alt=""
            />
            <ScrollyBubble>
              <Text variant="overview">
                From The Stanford Quad, vol. 34, 1927, pp. 38-39
              </Text>
              <Text>
                Relatively little construction has been done by the University
                during the year, owing to a lack of sufficient funds. Such
                building as has been done resulted from special gifts.
              </Text>
              <Text>
                The Harris J. Ryan High Voltage Laboratory is practically the
                only recent addition to the University plant, and is without
                question the most valuable and outstanding improvement which
                Stanford has acquired in several years. The building, located
                near “Frenchman’s dam,” has been under construction since
                August, 1925, and was formally opened on September 17, 1926,
                when Professor Ryan gave the initial demonstration of the
                equipment capable of producing 2,100,000 volts.
              </Text>
              <Text>
                The main portion of the laboratory building is a steel frame,
                asbestos covered structure, 173 feet long, 60 feet wide, and 65
                feet in height. It can be made absolutely light proof by closing
                the three huge steel doors, which are the largest ever built,
                but which can be operated readily by one man through the use of
                combinations of gears. The large size of the building was partly
                necessitated because safety in handling high voltages requires
                much space. Adjacent to the main room is an accessory wing
                containing offices and generator rooms.
              </Text>
              <Text mb="0">
                The equipment of the laboratory consists of six 350,000 volt
                transformer units, two motor generator sets, and a switchboard.
                The transformer units, which were presented by the General
                Electric Company, weigh twenty-two tons apiece and are mounted
                on cylinders of compressed paper. They are capable of producing
                the highest voltage ever obtained at commercial frequency. The
                University has set aside nearly 200 acres for the use of the
                laboratory, making possible the construction of a seven mile
                transmission line.
              </Text>
            </ScrollyBubble>
          </Scrollytelling>

          <Scrollytelling
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741727934/60022_011_0005_gs4cil.jpg"
            bgImageAlt="View of Engineering buildings on Escondido Mall behind Memorial Church, 1925"
          >
            <H2 className="text-center">Construction and plans</H2>
            <MediaCaptionImage
              className="max-w-500 mx-auto"
              aspectRatio="5x8"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1742839253/FPO-Stanford-Quad-logo-silo_vqitsd.png"
              alt=""
            />
            <ScrollyBubble>
              <Text variant="overview">
                From The Stanford Quad, vol. 34, 1927, pp. 38-39
              </Text>
              <Text>
                Relatively little construction has been done by the University
                during the year, owing to a lack of sufficient funds. Such
                building as has been done resulted from special gifts.
              </Text>
              <Text>
                The Harris J. Ryan High Voltage Laboratory is practically the
                only recent addition to the University plant, and is without
                question the most valuable and outstanding improvement which
                Stanford has acquired in several years. The building, located
                near “Frenchman’s dam,” has been under construction since
                August, 1925, and was formally opened on September 17, 1926,
                when Professor Ryan gave the initial demonstration of the
                equipment capable of producing 2,100,000 volts.
              </Text>
              <Text>
                The main portion of the laboratory building is a steel frame,
                asbestos covered structure, 173 feet long, 60 feet wide, and 65
                feet in height. It can be made absolutely light proof by closing
                the three huge steel doors, which are the largest ever built,
                but which can be operated readily by one man through the use of
                combinations of gears. The large size of the building was partly
                necessitated because safety in handling high voltages requires
                much space. Adjacent to the main room is an accessory wing
                containing offices and generator rooms.
              </Text>
              <Text mb="0">
                The equipment of the laboratory consists of six 350,000 volt
                transformer units, two motor generator sets, and a switchboard.
                The transformer units, which were presented by the General
                Electric Company, weigh twenty-two tons apiece and are mounted
                on cylinders of compressed paper. They are capable of producing
                the highest voltage ever obtained at commercial frequency. The
                University has set aside nearly 200 acres for the use of the
                laboratory, making possible the construction of a seven mile
                transmission line.
              </Text>
            </ScrollyBubble>
          </Scrollytelling>
          <ImageGallery images={galleryImages} />
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol className="rs-mb-6">
            <Text>
              In the kind of collaboration that became a hallmark of Stanford
              Engineer- ing, the Ryan Lab worked closely with industry and
              government. At a time when electrical engineering was focused on
              developing power plants to transmit electricity over high-tension
              wires to growing cities, the lab was the first at Stanford to be
              financed by external organizations, including the General Electric
              Company, the Pacific Gas and Electric Company, the
              California-Oregon Power Company, the San Joaquin Light and Power
              Company, the Great Western Power Company, and the City of Los
              Angeles.
            </Text>
            <Text>
              In 1927, the School of Engineering appropriated an entire building
              to house the Daniel Guggenheim Experimental Laboratory of
              Aerodynamic and Aeronautic Engineering, where William Durand,
              professor of Mechanical Engineering, and his associates could
              explore the expanding discipline of aeronautics. Educated at the
              U.S. Naval Academy, Durand was an expert in designing propellers
              for ships, a skill he applied to the design of aircraft
              propellers. The Guggenheim Lab included an 8-foot-wide wind tunnel
              and fans capable of producing air velocities up to 90 miles per
              hour; its dynamometer could test propeller designs up to 6 feet in
              diameter. Dozens of Durand’s hand-carved wooden propellers now
              adorn the walls of the Terman Engineering Library in the Jen-Hsun
              Huang Engineering Center.
            </Text>
          </OneCol>
          <Container width="full" bgColor="blue" pb={7} pt={7} mb={7}>
            <TwoCol isSidebar>
              <OneCol>
                <H2>Clipper Ships to Turbojets</H2>
                <Text variant="overview">The Career of William Durand</Text>
                <Text>
                  William Frederick Durand (1859–1958), who joined Stanford in
                  1904 as a professor of Mechanical Engineering, had previously
                  served as an engineer and engine designer in the Navy and had
                  taught at Michigan State and Cornell Universities.
                </Text>
                <Text>
                  At Stanford, Durand’s work extended beyond the classroom and
                  lab. From 1906 to 1908, he served on Stanford’s Commission of
                  Engineers, which was responsible for rebuilding the university
                  after the 1906 earthquake; he organized the Engineering
                  Congress held in conjunction with San Francisco’s
                  Panama-Pacific International Exposition in 1915; and he played
                  a significant role in the design of the electrical and water
                  systems of Los Angeles, the Hetch Hetchy Reservoir, and the
                  Colorado River project.
                </Text>
                <Text>
                  His chief accomplishments at Stanford were in aeronautical
                  engineering. His background in marine engineering prepared him
                  for studies of airplane propellers during the American
                  preparation for World War I. In 1915, President Woodrow Wilson
                  appointed Durand to the National Advisory Committee on
                  Aeronautics (NACA, later NASA), a new organization charged
                  with coordinating national efforts in aeronautics research. In
                  1918, with Everett Parker Lesley, Durand established the
                  Aeronautical Experimentation Laboratory at Stanford, the
                  forerunner of the Daniel Guggenheim Experimental Laboratory of
                  Aerodynamic and Aeronautic Engineering. The laboratory
                  conducted propeller studies jointly with NACA installations
                  such as the Langley Aeronautical Laboratory in Virginia.
                </Text>
                <Text>
                  Long after his retirement from Stanford, in March 1941, Durand
                  rejoined NACA to chair a special committee assigned to the
                  project of developing jet propulsion for aircraft; he also
                  chaired the Engineering Division of the National Research
                  Council during World War II.
                </Text>
                <Text>
                  Durand’s active career as an engineer in public service
                  continued through the end of World War II, when he retired at
                  the age of eighty-six. His professional contributions spanned
                  more than sixty years, taking him from clipper ships to the
                  turbojet. The breadth of his projects engaged him in many of
                  the central engineering problems and public engineering
                  projects of his age, with a record of service that was
                  unrivalled among American engineers of the first half of the
                  twentieth century.
                </Text>
                <Text>—Henry Lowood</Text>
                <Text size="small" mb="0">
                  Harold C. Hohbach Curator for
                  <br />
                  History of Science & Technology Collections
                  <br />
                  and Head, Silicon Valley Archives
                </Text>
              </OneCol>
              <StorySidebar hasLineArt lineArtType="short">
                <MediaCaptionImage
                  isPortriat
                  rounded
                  aspectRatio="1x1"
                  imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741727933/william_durand_o6qndb.jpg"
                  alt="Portriat of William F. Durand"
                  caption="William F. Durand. | Special Collections & University Archives."
                />
              </StorySidebar>
            </TwoCol>
          </Container>
          <Container width="site" mb={6}>
            <MediaCaptionImage
              isParallax
              rounded
              animation="fadeIn"
              aspectRatio="16x9"
              imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726626/00007002_0011.jpg_engineering_lab_exterior_atv43k.jpg"
              alt="Showcasing a plane parked in front of a historic building, with a group of men standing by, capturing a moment from aviation history."
              caption="In 1927, a gift from the Daniel Guggenheim Fund for the Promotion of Aeronautics helped create the new Daniel Guggenheim Experimental Laboratory of Aerodynamic and Aeronautic Engineering, located in the Engineering Lab buildings. The gift included $45,000 for equipment and $15,000 yearly for expenses for ten years. In this lab and others, Professor William F. Durand and his colleagues studied aerodynamics, naval propulsion, and engineering research methods. | Berton W. Crandall/Hoover Institution Library & Archives."
            />
          </Container>
          <OneCol className="rs-mt-5">
            <Text>
              But this growth trend was soon dealt a serious blow by the Great
              Depres- sion. Student enrollment dropped significantly for a few
              years at the School of Engineering and at Stanford as a whole. Not
              until 1934 could Dean Hoover predict that enrollment would soon
              increase. Meanwhile, the school invested in new facilities to
              house students and provide classrooms and lab spaces for the
              expected rise in numbers. As its first decade came to a close, the
              School of Engineering was positioned for growth and leadership.
            </Text>
          </OneCol>
          <Container mt={4} mb={7}>
            <OneCol>
              <FootnotesList footnotes={footnotes} />
            </OneCol>
          </Container>
          <ContributeStoryBanner bgColor="red" hasLineArt />
        </article>
      </main>
    </>
  );
}
