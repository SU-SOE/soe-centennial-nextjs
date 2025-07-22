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
import { AnimatedPosterCard } from "@/components/AnimatedHero";
import { ImageGallery } from "@/components/ImageGallery";
import { Container } from "@/components/Container";
import { TimelineCard } from "@/components/Timeline";
import { DecadePager, PageTransitionWrapper } from "@/components/DecadePager";

export const metadata: Metadata = {
  title: "Designing for the future | 100 Years of Stanford Engineering",
  description:
    "The fall of 2005 brought a new program to the school and university: the cross-disciplinary Hasso Plattner Institute of Design, dubbed the d.school. The institute embodied Stanford Engineering’s collaborative spirit as it welcomed students from across the university to participate in its innovative offerings. The d.school institutionalized the concept of “design thinking,” championed by world-renowned industrial designer and School of Engineering alumnus and professor of mechanical engineering David Kelley (MS ’78), who became the d.school’s first director.",
  keywords: [
    "Stanford Engineering",
    "d.school",
    "Design Thinking",
    "Hasso Plattner Institute of Design",
    "David Kelley",
    "Cross-disciplinary Program",
    "Innovation",
  ],
  openGraph: {
    title: "Designing for the future | 100 Years of Stanford Engineering",
    description:
      "The fall of 2005 brought a new program to the school and university: the cross-disciplinary Hasso Plattner Institute of Design, dubbed the d.school. The institute embodied Stanford Engineering’s collaborative spirit as it welcomed students from across the university to participate in its innovative offerings. The d.school institutionalized the concept of “design thinking,” championed by world-renowned industrial designer and School of Engineering alumnus and professor of mechanical engineering David Kelley (MS ’78), who became the d.school’s first director.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751063589/mb981vc1736_zqcgqv.jpg",
        alt: "Aerial view of the Stanford Science and Engineering Quad.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designing for the future | 100 Years of Stanford Engineering",
    description:
      "The fall of 2005 brought a new program to the school and university: the cross-disciplinary Hasso Plattner Institute of Design, dubbed the d.school, which embodied Stanford Engineering’s collaborative spirit and institutionalized the concept of “design thinking.”",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1751063589/mb981vc1736_zqcgqv.jpg",
    ],
  },
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751063586/br440jc7470_ofbr72.jpg",
    alt: "People walking and cycling in front of a building.",
    caption:
      "Exterior of the Jerry Yang and Akiko Yamazaki Environment and Energy Building (Y2E2). Dedicated in 2008, Y2E2 became the first of the four buildings that composed the new Science and Engineering Quad. Named in honor of a gift from Jerry Yang (’90), cofounder of Yahoo!, and Akiko Yamazaki (’90), the building houses departments and institutes focused on studying and developing solutions for sustainability challenges, particularly climate change. | Tim Griffith/School of Engineering.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751063587/dz034ps1409_w4ilkw.jpg",
    alt: "Exterior view of the Spilker Engineering and Applied Science Building at Stanford, with striking architecture and a clear blue sky.",
    caption:
      "Exterior view of the James and Anna Marie Spilker Engineering and Applied Science Building. Opening in 2010, the 100,000-square-foot Spilker Building was the second of the four Science and Engineering Quad buildings to be completed. When it opened, it housed the independent E. L. Ginzton Laboratory, offices for the Department of Applied Physics, and nanoscale facilities. | Joel Simon/Stanford Engineering.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751063590/rb514kc0656_yj7qgh.jpg",
    alt: "A group of people strolls through a courtyard in front of a building.",
    caption:
      "Exterior and interior views of the Shriram Center for Bioengineering and Chemical Engineering, named after a gift from university trustee Kavitark “Ram” Shriram and his wife, Vidjealatchoumy “Vijay” Shriram. Opening in 2014, the Shriram Building completed the final phase of the new Science and Engineering Quad. Its 208,000 square feet house the Departments of Chemical Engineering and Bioengineering, along with teaching space and labs. | Tim Maloney/School of Engineering.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751063587/fz107qj0976_wllrv9.jpg",
    alt: "A walkway lined with tall palm trees on both sides, flanked by modern buildings. People walk along the path under a clear blue sky.",
    caption:
      "The palm-lined pathway into the new Science and Engineering Quad, with a distant view of the arched entry to the main quad. The SEQ was designed to align with the original plan for university construction and to maintain architectural consistency across campus buildings. | Stanford Engineering.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1751063591/vr758kf1949_nxkxjb.jpg",
    alt: "A panoramic view of the Jen-Hsun Huang Engineering Center on Stanford University campus, showcasing its modern architecture and vibrant green spaces.",
    caption:
      "Exterior view of the Jen-Hsun Huang Engineering Center. The Huang Center opened in 2010 as the administrative headquarters for the School of Engineering. Its 130,000 square feet contain the dean’s suite, offices, classrooms, a conference center, a library, and a café. It also exhibits displays of major Stanford Engineering milestones, including the original Yahoo! servers. | Tim Griffith/School of Engineering.",
  },
];

const exploreStoriesData = [
  storiesSource.decade1,
  storiesSource.storyInnovation,
  storiesSource.decade8,
];

const footnotesList = [
  {
    number: 1,
    id: "footnote1",
    text: "James D. Plummer: An Oral History, with Andy DiPaolo, Stanford Historical Society Oral History Program (Stanford, Calif., 2020), 52–54, Stanford Libraries, Department of Special Collections and University Archives, SC0932.",
    sourceLink: "https://stacks.stanford.edu/file/bb799db3606/bb799db3606.pdf",
  },
  {
    number: 2,
    id: "footnote2",
    text: "Ronald Chan, “Design Institute Opens Doors,” Stanford Daily, October 4, 2005, 8.",
    sourceLink:
      "https://archives.stanforddaily.com/2005/10/04?page=8§ion=MODSMD_ARTICLE24#article",
  },
  {
    number: 3,
    id: "footnote3",
    text: "Anneke Cole, “Bioengineering and Chemical Engineering Building at Stanford Named for Gifts from Ram and Vijay Shriram,” Stanford Medicine News Center, July 9, 2014.",
    sourceLink:
      "https://med.stanford.edu/news/all-news/2014/07/new-bioengineering-chemical-engineering-building-named",
  },
  {
    number: 4,
    id: "footnote4",
    text: "Nikhil Kamat, “Y2E2 Officially Opens Its Doors,” Stanford Daily, March 5, 2008, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/2008/03/05?page=1§ion=MODSMD_ARTICLE6#article",
  },
  {
    number: 5,
    id: "footnote5",
    text: "“Huang Center Dedicated, Lauded as Stanford’s Engineering Anchor,” Stanford Engineering.",
    sourceLink:
      "https://engineering.stanford.edu/news/huang-center-dedicated-lauded-stanfords-engineering-anchor",
  },
  {
    number: 6,
    id: "footnote6",
    text: "2009–2010 Annual Report, Stanford University School of Engineering, 4–7.",
    sourceLink: "",
  },
  {
    number: 7,
    id: "footnote7",
    text: "Ibid.",
    sourceLink: "",
  },
  {
    number: 8,
    id: "footnote8",
    text: "Matt Bettonville, “Terman Park Opening Approaches,” Stanford Daily, May 1, 2012.",
    sourceLink:
      "https://stanforddaily.com/2012/05/01/opening-near-for-terman-park/",
  },
  {
    number: 9,
    id: "footnote9",
    text: "Alan Guo, “School of Engineering: Engineering Courses Offered Online for Public,” Stanford Daily, September 30, 2008, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/2008/09/30?page=1§ion=MODSMD_ARTICLE4#article",
  },
  {
    number: 10,
    id: "footnote10",
    text: "Alex Shashkevich, “Stanford’s Free Online Classes Expand Education Opportunities Worldwide and on Campus,” Stanford Report, June 22, 2018.",
    sourceLink: "https://news.stanford.edu/stories/2018/06/moocs",
  },
  {
    number: 11,
    id: "footnote11",
    text: "Andrew Ng and Jennifer Widom, “Origins of the Modern MOOC (xMOOC).",
    sourceLink:
      "https://ai.stanford.edu/~ang/papers/mooc14-OriginsOfModernMOOC.pdf",
  },
  {
    number: 12,
    id: "footnote12",
    text: "Elise Johnson, “Coursera at Forefront of Online Education,” Stanford Daily, October 19, 2012, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/2012/10/19?page=1§ion=MODSMD_ARTICLE6#article",
  },
  {
    number: 13,
    id: "footnote13",
    text: "Ellen Huet, “Budget Cuts: VPUE, Engineering Announce Cuts,” Stanford Daily, May 26, 2009, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/2009/05/26?page=1§ion=MODSMD_ARTICLE2#article",
  },
  {
    number: 14,
    id: "footnote14",
    text: "Ryan Mayfield, “Degrees Conferred Reveal No New Trends,” Stanford Daily, October 9, 2009, 2.",
    sourceLink:
      "https://archives.stanforddaily.com/2009/10/09?page=2§ion=MODSMD_ARTICLE10#article",
  },
  {
    number: 15,
    id: "footnote15",
    text: "Kylie Jue, “Computer Science Becomes Stanford’s Most Popular Major,” Stanford Daily, July 19, 2012.",
    sourceLink:
      "https://stanforddaily.com/2012/07/19/computer-science-becomes-stanfords-most-popular-major/",
  },
  {
    number: 16,
    id: "footnote16",
    text: "Sabelle Smythe, “CS Dept. Struggles to Recruit Women,” Stanford Daily, October 19, 2012, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/2012/10/19?page=1§ion=MODSMD_ARTICLE4#article",
  },
  {
    number: 17,
    id: "footnote17",
    text: "Transcript: “An Evening with Morris Chang in conversation with Jen-Hsun Huang,” October 17, 2007, Computer History Museum, Mountain View, California.",
    sourceLink:
      "https://archive.computerhistory.org/resources/access/text/2012/05/102658254-05-01-acc.pdf",
  },
  {
    number: 18,
    id: "footnote18",
    text: "Video: “Stanford Engineering Hero Lecture: Morris Chang in conversation with President John L. Hennessy.",
    sourceLink: "https://youtu.be/wEh3ZgbvBrE?si=TsoXJEzYskJQUvaa&t=313",
  },
  {
    number: 19,
    id: "footnote19",
    text: "Artist-rendered timeline of the collaboration and friendship between Morris Chang and Jensen Huang, displayed in Morris and Sophie Chang’s office in Taipei.",
    sourceLink: "",
  },
  {
    number: 20,
    id: "footnote20",
    text: "“Huang center dedicated, lauded as Stanford’s engineering anchor,” Stanford Engineering, October 2015.",
    sourceLink:
      "https://engineering.stanford.edu/news/huang-center-dedicated-lauded-stanfords-engineering-anchor",
  },
  {
    number: 21,
    id: "footnote21",
    text: "Eric Messinger, “Blending Arts, Engineering,” Stanford Daily, January 22, 2010, 2.",
    sourceLink:
      "https://archives.stanforddaily.com/2010/01/22?page=2§ion=MODSMD_ARTICLE7#article",
  },
  {
    number: 22,
    id: "footnote22",
    text: "“Huang Center Dedicated, Lauded as Stanford’s Engineering Anchor,” Stanford Engineering.",
    sourceLink:
      "https://engineering.stanford.edu/news/huang-center-dedicated-lauded-stanfords-engineering-anchor",
  },
  {
    number: 23,
    id: "footnote23",
    text: "Andrew Myers, “School of Engineering to upgrade Stanford Nanofabrication Facility,” September 12, 2024.",
    sourceLink:
      "https://engineering.stanford.edu/news/school-engineering-upgrade-stanford-nanofabrication-facility",
  },
  {
    number: 24,
    id: "footnote24",
    text: "Joshua Davis, “Say Hello to Stanley,” WIRED, January 1, 2006.",
    sourceLink: "https://www.wired.com/2006/01/stanley/",
  },
  {
    number: 25,
    id: "footnote25",
    text: "Mandy Kovach, “Race to the Future: Autonomous Car Comes in First Place,” Stanford Daily, October 10, 2005, 1.",
    sourceLink:
      "https://archives.stanforddaily.com/2005/10/10?page=1§ion=MODSMD_ARTICLE3#article",
  },
  {
    number: 26,
    id: "footnote26",
    text: "Kerri Smith, “Neuroscience: Method Man,” Nature 497 (2013): 550–552.",
    sourceLink: "https://doi.org/10.1038/497550a",
  },
  {
    number: 27,
    id: "footnote27",
    text: "Lou Bergeron, “Stanford Team Advances Performance of ‘Brain-Computer Interface’ for Paralyzed Patients,” Stanford Engineering, August 9, 2006.",
    sourceLink:
      "https://engineering.stanford.edu/news/stanford-team-advances-performance-brain-computer-interface-paralyzed-patients",
  },
  {
    number: 28,
    id: "footnote28",
    text: "“Stanford Engineering Dean Jim Plummer to Step Down after 15 Years,” Stanford Engineering, October 10, 2013.",
    sourceLink:
      "https://engineering.stanford.edu/news/stanford-engineering-dean-jim-plummer-step-down-after-15-years",
  },
  {
    number: 29,
    id: "footnote29",
    text: "Victor Xu, “Persis Drell Selected as New Dean for the School of Engineering, Will Be School’s First Female Dean,” Stanford Daily, June 4, 2014.",
    sourceLink: "https://stanforddaily.com/2014/06/04/persis-drell-new-dean/",
  },
  {
    number: 30,
    id: "footnote30",
    text: "“Meet Persis Drell,” Stanford Engineering, January 5, 2015.",
    sourceLink: "https://engineering.stanford.edu/news/meet-persis-drell",
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
            chapter="Decade 9"
            heading="Designing for the future"
            dek="2005 – 2014"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063589/mb981vc1736_zqcgqv.jpg"
            alt="Aerial view of the Stanford Science and Engineering Quad."
            caption="Aerial view of the four completed buildings that made up the new Science and Engineering Quad, facing southeast, 2014. | Todd Quam/School of Engineering."
          />
          <div className="max-w-1500 w-full cc 3xl:p-0 rs-mb-5">
            <Text mb={6}>by Andrew Myers</Text>
            <Quote
              quoteColor="red"
              width="wide"
              teaser=" . . . We are essentially unique in this country—we are essentially unique in the world—for having a great liberal arts university with terrific people and all of the necessary disciplines, and a great engineering school embedded inside"
              source="— Dean James Plummer, 2010"
            />
          </div>
          <TwoCol className="rs-mb-6" isSidebar>
            <OneCol>
              <H2 className="mt-0">2005 – 2014</H2>
              <Text variant="overview">
                The fall of 2005 brought a new program to the school and
                university: the cross-disciplinary Hasso Plattner Institute of
                Design, dubbed the d.school. The institute embodied Stanford
                Engineering’s collaborative spirit as it welcomed students from
                across the university to participate in its innovative
                offerings. The d.school institutionalized the concept of “design
                thinking,” championed by world-renowned industrial designer and
                School of Engineering alumnus and professor of mechanical
                engineering David Kelley (MS ’78), who became the d.school’s
                first director.
              </Text>
              <Text>
                “David came to my office one day, and he said . . . ‘I think
                that the concept of how you think about creatively designing
                things can have a much, much bigger impact on Stanford than just
                this little pocket of people who we’re educating to design
                products and companies,’ ” Dean James Plummer recalled.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote1", number: 1 }]} />{" "}
                The d.school sought to provide students with tools to solve big,
                societal challenges. Making air travel more enjoyable, refining
                ways to minimize drunk driving, and improving K–12 education are
                but a few examples of problems the d.school took on. The
                d.school quickly established itself as an ideas factory, famous
                for classes like “Design for Extreme Affordability,” which
                targeted innovations at under-resourced communities.
              </Text>
              <Text mb="0">
                “Design is about meeting human needs,” Kelley said. With a
                curriculum based on the principle of empathy, students sought to
                understand the users’ intentions through observation and then
                pursue rapid, iterative prototyping to design transformative
                products and services.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} />
              </Text>
            </OneCol>
            <StorySidebar hasLineArt lineArtType="medium">
              <MediaCaptionImage
                rounded
                isCaptionInset
                isPortrait
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063586/david-kelley_rtelzy.jpg"
                alt="A man with glasses and a moustache is speaking into a microphone."
                caption="David Kelley, professor of mechanical engineering, speaking at the opening gala for a newly reconstructed building to house the Hasso Plattner Institute of Design (d.school), 2010. Kelley championed the concept of design thinking and was the first director of the d.school. | Linda A.Cicero/Stanford News Service."
              />
            </StorySidebar>
          </TwoCol>
          <MediaCaptionImage
            rounded
            aspectRatio="8x5"
            className="cc mx-auto w-full 2xl:max-w-1500 2xl:p-0"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063587/dschoolcohort_udyq7y.jpg"
            alt="A group of individuals seated on vibrant orange couches."
            caption="The d.school’s early cohort in 2006 (clockwise from left): David Kelley, Bernard Roth, James Patell, Tina Seelig, Robert Sutton, Alex Kazaks, George Kembel, David Beach, Perry Klebahn, Julian Gorodsky, and Charlotte Burgess-Auburn. | Courtesy d.school."
          />
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol className="rs-mb-5">
            <H2 className="mt-0">A new quad takes shape</H2>
            <Text>
              In the early 2000s, after the new buildings of the Near West
              Campus project had opened in 1999, a new project broke ground to
              complete the second phase: a new Science and Engineering Quad
              (SEQ). On an eight-acre section adjacent to the Near West Campus,
              a patchwork of aging, utilitarian buildings were razed. By 2014,
              the last four of the quad’s buildings had been completed, with the
              generous support of named donors as well as a group of anonymous
              donors known as the Fundamental Partners. Together, the four
              structures encompassed nearly 620,000 square feet of combined
              office, teaching, and research space—a grand center for science
              and engineering.
            </Text>
            <Text>
              All four buildings in the new SEQ featured sustainable building
              techniques, including rapidly renewable construction materials,
              recycled “gray” water to flush toilets, high-performance windows
              to make extensive use of daylight and natural ventilation, and
              active chilled beams. Each of the four buildings in the new SEQ
              used half the power—and one-tenth the water—of traditional
              buildings.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote3", number: 3 }]} />
            </Text>
          </OneCol>
          <BgImageWrapper
            hasBgImage
            bgColor="fog-light"
            className="rs-mb-5"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063587/aerial-campus-view-2011_ju9wny.jpg"
          >
            <MediaCaptionImage
              isParallax
              rounded
              aspectRatio="8x5"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063587/aerial-campus-view-2011_ju9wny.jpg"
              alt="Aerial view of Stanford University's campus, showcasing its iconic architecture and lush green surroundings."
              caption="Aerial view of campus facing east, 2011. The new Science and Engineering Quad is visible on the left, with the final building still under construction. Then known as Building 4, that building would later become the Shriram Center for Bioengineering and Chemical Engineering. | Linda A. Cicero/Stanford News Service."
            />
          </BgImageWrapper>
          <OneCol className="rs-mb-5">
            <Text>
              In early 2008, this new era for the School of Engineering
              commenced with the dedication of the Jerry Yang and Akiko Yamazaki
              Environment and Energy Building. Nicknamed Y2E2, the new building
              was eight years in the making and was made possible by a $50
              million gift from the husband-and-wife alumni team of Jerry Yang
              (’90), cofounder of Yahoo!, and Akiko Yamazaki (’90). Gathered
              under its roof were primarily engineers, but also an assortment of
              ecologists, economists, biologists, legal scholars, earth
              scientists, and policy experts whose goal was to make the world a
              more sustainable place. “The complexity of today’s global
              environmental questions requires that experts from a variety of
              fields come together to address different facets of the same
              problem,” Yamazaki said. “For our children to be able to enjoy and
              experience what we’ve been blessed with, we cannot afford not to
              do something today.”{" "}
              <Footnotes footnoteRefs={[{ id: "footnote4", number: 4 }]} />
            </Text>
            <Text>
              Next up was the James and Anna Marie Spilker Engineering and
              Applied Science Building, which opened in September 2010. James
              Spilker, a consulting professor at Stanford and a principal
              contributor to the original Global Positioning System (GPS), had
              pioneered work in signal design to enable precise tracking of
              satellites, which had a profound impact on communications and
              technology. His wife, Anna Marie, was an economist and Bay Area
              real estate investor. The Spilker Building became a noted center
              for nanoscale science and engineering. The following month, the
              Jen-Hsun Huang Engineering Center was dedicated as well. The
              Science and Engineering Quad was now three-quarters complete.
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
              The Huang Center, boasting 130,000 square feet, became the
              headquarters of Stanford Engineering, home to the dean’s suite,
              offices, classrooms, a conference center, machine shops, a café,
              and the new Frederick Emmons Terman Engineering Library. The Huang
              Center was named for alumnus and Nvidia cofounder Jen-Hsun
              “Jensen” Huang (MS ’92 electrical engineering), who, with his
              wife, Lori, pledged the $30 million gift that made the building
              possible.
            </Text>
            <Text>
              “To build a better future we must invest in tomorrow’s
              innovators,” Huang said. “There is no better place to do this than
              Stanford. . . . I hope that students will find inspiration here,
              and that Stanford will be as important in shaping their lives as
              it has been in mine.”{" "}
              <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} />
            </Text>
          </OneCol>
          <Quote
            width="wide"
            className="cc 2xl:max-w-1000 2xl:p-0 mx-auto rs-mb-6"
            quoteColor="red"
            teaser="I hope that students will find inspiration here, and that Stanford will be as important in shaping their lives as it has been in mine."
            source="— Jen-Hsun Huang"
          />
          <OneCol>
            <Text>
              In tribute to that history, the Huang Center included several
              memorial “Engineering Touchstones” throughout: the original
              servers that Yahoo! founders Jerry Yang (who became chair of
              Stanford University’s Board of Trustees in 2021) and David Filo
              had used to categorize Web pages; toy-block-framed servers
              assembled by Google founders Sergey Brin and Larry Page to index
              the Internet; copies of Donald Knuth’s seminal book series The Art
              of Computer Programming; models of Perry McCarty’s anaerobic
              bioreactor; early examples of nanocharacterization; and an artful
              display of many of the hand-carved wooden propellers William
              Durand had used to test designs.
            </Text>
            <Text>
              The fourth and final building, the Shriram Center for
              Bioengineering and Chemical Engineering, opened its doors in 2014.
              It bore the names of university trustee Kavitark “Ram” Shriram and
              his wife, Vidjealatchoumy “Vijay” Shriram, who made a $61 million
              gift in support of the project. At more than 208,000 square feet
              of space, the Shriram Center was the largest of the four
              structures in the Science and Engineering Quad. The building
              provided a consolidated home for the Departments of Chemical
              Engineering and Bioengineering, which had been previously spread
              among several buildings on campus.
            </Text>
          </OneCol>
          <div className="flex w-full justify-end rs-mb-4">
            <HorizontalLineart lineartType="C" />
          </div>
          <ImageGallery images={galleryImages} />
          <OneCol className="rs-mt-5">
            <Text>
              “One of the major trends in bioengineering . . . has been the move
              toward molecular-level engineering,” said Russ Altman, professor
              and then-chair of bioengineering. “Our colleagues in chemical
              engineering have been thinking at this level for several decades,
              so the interface between chemical engineering and biological
              engineering will create opportunities at the biochemical
              engineering and chemical biology frontier that should be very
              exciting.”{" "}
              <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} />
            </Text>
            <Text>
              The design of all four buildings was also carefully choreographed
              to foster chance encounters among disparate academic disciplines
              in hopes that uncommon collaborations might result. Referring to
              the Shriram Building’s “connectivity,” Curtis W. Frank, a chemical
              engineer and chair of the faculty committee overseeing design,
              noted the sightlines of the central staircase, the intentional
              north-south, east-west orientation of the building’s two hallways,
              and the extensive use of glass throughout the building. “This will
              promote the chance encounters that can lead to sparks of
              inspiration,” Frank said.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} />
            </Text>
            <Text>
              And yet, even as the Science and Engineering Quad neared
              completion, a reminder of the past was coming down. The Terman
              Engineering Center, built in the 1970s, was deconstructed and its
              materials upcycled into other projects on campus. The School of
              Engineering turned its site into a park, preserving a modified
              version of the fountain that had previously saluted the Terman
              Building.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote8", number: 8 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <TwoCol className="rs-my-5" isSidebar leftSidebar>
            <TimelineCard
              wideImage
              className="p-0 mx-auto lg:m-0"
              heading="Learn more about Jennifer Widom in the Timeline"
              year="2011"
              anchor="2011-leading-the-online-education-revolution-professor-jennifer-widom-launches-one-of-stanfords-first-moocs"
              image="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063588/jennifer_widom_schv7f.jpg"
            />
            <div className="max-w-850 mx-auto">
              <H2 className="mt-0">MOOC’s moment</H2>
              <Text>
                In 2008, the School of Engineering began a bold experiment in
                universal education, offering materials from several of its most
                popular classes in computer science and electrical engineering
                for free, online. The pilot was known as Stanford Engineering
                Everywhere (SEE). SEE differed from similar programs at other
                major technical universities in that it provided full course
                content. “It has everything you need, [including all] the
                lecture notes and videos,” SEE program director Andy DiPaolo
                said.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} />
              </Text>
              <Text>
                A few years later, Stanford would innovate yet again when it
                became the first university to offer what became known as
                massive open online courses (MOOCs). In the fall of 2011, three
                Stanford classes were made available worldwide for free. MOOCs
                went beyond self-serve materials to provide synchronous classes
                that involved lively discussion forums in which students could
                help one another. Enrollees watched recorded lectures online,
                did machine-graded homework, and earned a “Statement of
                Accomplishment” for passing the class.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} />
              </Text>
              <Text>
                Though online education itself was not new, in 2011 the
                technology took a leap by which tens of thousands of students
                could enroll in courses taught by Stanford computer science
                faculty, including Andrew Ng, Sebastian Thrun—who was credited
                with launching the MOOC idea—and future dean Jennifer Widom.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote11", number: 11 }]} />
              </Text>
              <Text>
                Ng’s machine learning course and Widom’s database course were
                hosted on a software platform built by Stanford students.
                Together with these students, Ng and Daphne Koller, fellow
                professor of computer science, developed the platform into a
                start-up company called Coursera that is still in business
                today.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote12", number: 12 }]} />{" "}
                Simultaneously, Sebastian Thrun cofounded the online educational
                company Udacity, which initially offered MOOCs and later shifted
                to offer vocational courses for professionals.
              </Text>
            </div>
          </TwoCol>
          <BgImageWrapper bgColor="blue" isTwoCol>
            <MediaCaptionImage
              animation="slideInFromLeft"
              delay={0.3}
              rounded
              aspectRatio="4x3"
              className="lg:rs-mt-7"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063592/xm262js0452_onvjmg.jpg"
              alt="A man in a blue shirt typing on a laptop, seated at a desk with multiple monitors."
            />
            <MediaCaptionImage
              animation="slideInFromRight"
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063592/zb772gz3468_g4gbez.jpg"
              alt="A woman with long brown hair wearing a red sweater sits and smiles in front of bookshelves filled with books."
              caption="Andrew Ng (left) and Daphne Koller (above), cofounders of Coursera, 2014 and 2011. Originally developed by students as a platform to run Stanford’s massive open online courses (MOOCs), Coursera became a popular platform for delivering thousands of university courses and degrees to people worldwide. | Ng photo: Norbert von der Groeben/School of Engineering; Koller photo: Linda A. Cicero/Stanford News Service."
            />
          </BgImageWrapper>
          <OneCol>
            <H2 className="mt-0">Economic woes weigh</H2>
            <Text>
              Despite decades of success, in the wake of a global financial
              crisis in late 2008, the School of Engineering was pressed into
              significant reductions of staff and programming for 2009. Dean
              Plummer announced a reduction of $9.6 million to the base
              operating budget, and cuts to departmental expenditures by 14
              percent each.
            </Text>
            <Text>
              Certain other commitments, however, Plummer declared off limits.
              “We are committed to completing the key capital projects
              underway,” he added, mentioning a new automotive innovation
              facility and the renovation of the Thomas F. Peterson Engineering
              Laboratory for the d.school.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote13", number: 13 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol className="rs-mb-5">
            <Text>
              Amid the worst financial crisis since the Great Depression, the
              popularity of engineering programs remained high across campus and
              continued to grow. In the 2008–2009 academic year, one in five
              undergraduates earned degrees in engineering disciplines. By 2013,
              just five years later, the fraction of undergraduates majoring in
              engineering disciplines had increased to 38 percent. Numbers were
              high at the graduate level as well, with more than 40 percent of
              all graduate degrees for the entire university being granted in
              engineering programs.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote14", number: 14 }]} />
            </Text>
            <Text>
              Computer science was a major driver of the undergraduate increase.
              With a complete overhaul in 2009, the computer science curriculum
              was reshaped to be more welcoming and interdisciplinary in order
              to appeal to a broader cross section of students. In a matter of
              two years, computer science saw an 83 percent increase in
              enrollment; it soon became the most popular undergraduate major.
              <Footnotes footnoteRefs={[{ id: "footnote15", number: 15 }]} />
            </Text>
            <Text>
              Despite that impressive growth, computer science had difficulty
              attracting female students. In 2012, only slightly more than one
              in five undergraduate computer science majors were women. “[The
              problem] starts earlier than college,” said Widom, then chair of
              the Department of Computer Science, noting that the discrepancy
              was evident in America’s high schools as well. Outreach efforts to
              rectify the problem included biquarterly dinners for women in
              computer science organized by the campus group She++.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote16", number: 16 }]} /> By
              the end of 2024, the number of women enrolled in computer science
              at the graduate level had increased to 34 percent and
              undergraduate enrollment by women reached 36 percent. Overall,
              roughly one in five of all Stanford undergraduate seniors in 2024
              were earning a degree in computer science.
            </Text>
          </OneCol>
          <Scrollytelling
            heading="Fab, Meet Fabless: How Two Stanford Engineering Alumni Built a Collaboration on Shared Values"
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063587/fz107qj0976_wllrv9.jpg"
          >
            <ScrollyBubble>
              <Text>
                Over many decades, Stanford Engineering has helped shape the
                global semiconductor landscape. Some of that work occurred on
                campus—for example, in 1958, when young assistant professor
                James Gibbons, working part-time at Shockley Semiconductor, and
                his Stanford colleagues produced the first semiconductor device
                created in a university lab. And some happened off campus, such
                as when two Stanford Engineering alumni spoke by phone in the
                mid-1990s and kicked off one of the most influential
                collaborations in modern history.
              </Text>
              <Text mb="0">
                Morris Chang (PhD ’64) founded the Taiwan Semiconductor
                Manufacturing Company (TSMC) in 1987, pioneering the dedicated
                semiconductor foundry business model and going on to build some
                of the world’s most advanced silicon chips for companies all
                over the world. Six years later, in 1993, Jen-Hsun “Jensen”
                Huang (MS ’92) cofounded Nvidia to design graphics processing
                units (GPUs) for gaming and professional markets.
              </Text>
            </ScrollyBubble>
            <MediaCaptionImage
              rounded
              isCaptionInset
              className="max-w-850 mx-auto"
              aspectRatio="1x1"
              captionTextColor="black"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1742265147/Cartoon_EWS_qtpizx.jpg"
              alt="Black-and-white comic panel depicting an event at Stanford Engineering in 2014. Two elderly men, one labeled “Morris,” are seated in front of a Stanford Engineering building. A man holding a microphone, labeled “Jensen,” is giving a speech. A speech bubble from Jensen says, “Morris has built TSMC into the semiconductor platform that the world relies on to build everything.” The caption reads: “2014 – Morris is honored as a Stanford Engineering Hero. Jensen gave the opening speech highlighting Morris' achievements.”"
              caption="A drawing of (left to right) Morris Chang, John Hennessy, and Jensen Huang at the event recognizing Chang as a Stanford Engineering “Hero” in April 2014. The panel is from the artist-rendered timeline of the collaboration and friendship between Morris Chang and Jensen Huang. | Courtesy Morris Chang."
            />
            <ScrollyBubble>
              <Text>
                Huang had phoned TSMC in 1993,{" "}
                <Footnotes footnoteRefs={[{ id: "footnote17", number: 17 }]} />{" "}
                when his small, “fabless” company was looking to outsource
                manufacturing to an established “fab.” But the connection was
                made only after Huang personally wrote to Chang a few years
                later, and Chang called him directly. TSMC soon began
                manufacturing Nvidia’s first two successful chips. The
                collaboration was off and running—and so was the friendship.
              </Text>
              <Text>
                What struck Huang when he first visited Chang at TSMC was that,
                instead of emphasizing the company’s capabilities—which were
                many—Chang focused on two core values: trust and integrity.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote18", number: 18 }]} />
              </Text>
              <Text>
                As the two men grew to know each other over the years, their
                mutual respect only increased. Chang stopped in to see Huang at
                Nvidia’s campus in Sunnyvale, California, while honeymooning
                with his wife, Sophie, in 2001. There was always business to
                discuss—Nvidia’s need for a high volume of chips, and Huang’s
                expectation that 3D graphics would be the driving force of the
                computer industry. The personal connection grew with each visit.
              </Text>
              <Text>
                In 2001, Huang’s gift to Chang on his seventieth birthday
                described the TSMC founder as “a wise explorer, discovering a
                path forward, leading the way.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote19", number: 19 }]} />{" "}
                Chang had dinner at the Huang family home, and later, Huang
                celebrated his fiftieth birthday with Chang and Sophie at their
                home in Taiwan. As a gift, Huang was invited to select from a
                series of paintings Sophie herself had created.
              </Text>
              <Text>
                The next year, in 2014, when Morris Chang was honored as a
                Stanford Engineering “Hero,” Huang was there to share personal
                remarks highlighting Chang’s achievements, his enduring values,
                and his unparalleled impact. The event took place in the Nvidia
                Auditorium in the Jen-Hsun Huang Engineering Center— the new
                headquarters for the School of Engineering made possible by a
                generous gift from Jensen and Lori Huang.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote20", number: 20 }]} />
              </Text>
              <Text>
                More recently, when it was time for an upgrade of the Stanford
                Nanofabrication Facility—which had its distant roots in
                Gibbons’s early lab— TSMC’s generous commitment of funds and
                on-site scientific collaborators helped to ensure that the
                facility would remain at the forefront of chip research and
                innovation.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote21", number: 21 }]} />
              </Text>
              <Text>
                In an artist-rendered timeline of their collaboration and
                friendship that Huang commissioned for Chang in 2018, Huang
                described working with Chang as “one of the great joys of my
                career.” The timeline hangs on a wall inside Morris and Sophie
                Chang’s office in Taipei.
              </Text>
              <Text>—Julie Greicius</Text>
            </ScrollyBubble>
          </Scrollytelling>
          <OneCol>
            <H2 className="mt-0">A new breed of engineer</H2>
            <Text>
              At a faculty senate meeting in 2010, Dean Plummer laid out a case
              for what set the Stanford School of Engineering apart from other
              technical schools around the world. He described the great
              challenges of twenty-first-century scholarship as “largely
              interdisciplinary,” requiring engineering’s collaboration with
              medicine, business, and other parts of the university.
            </Text>
            <Text>
              “The truth,” Plummer said, “is that Stanford has an unbelievably
              unique opportunity to be dominant in these areas because we are
              essentially unique in this country—we are essentially unique in
              the world—for having a great liberal arts university with terrific
              people and all of the necessary disciplines, and a great
              engineering school embedded inside.” Plummer went on to describe
              the new breed of engineer he believed Stanford would produce:
              innovators who blended deep technical knowledge and skills with an
              artist’s breadth and taste. This combination of tradition and
              innovation would be necessary for Stanford to remain a top
              engineering program.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote22", number: 22 }]} />
            </Text>
            <Text>
              Speaking at the Huang Building dedication later that year, Plummer
              expanded on these ideas: “Engineers in the 21st century must be
              able to work across disciplines and must have breadth so that they
              can excel in areas including teamwork, communications,
              entrepreneurship and design. They also must be able to navigate in
              a global economy and across cultures.”{" "}
              <Footnotes footnoteRefs={[{ id: "footnote23", number: 23 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="D" />
          </div>
          <TwoCol className="rs-mt-6 rs-mb-5">
            <OneCol>
              <H2 className="mt-0">Research breakthroughs</H2>
              <Text>
                Even in the school’s storied history, the ninth decade at the
                Stanford School of Engineering was a notable period of research.
                In October 2005, Sebastian Thrun (whose accomplishments in
                online education were still to come) and the Stanford Racing
                Team made global headlines when “Stanley,” a driverless
                Volkswagen the team had designed and built, won the $2 million
                2005 DARPA Grand Challenge contest for autonomous vehicles.
              </Text>
              <Text>
                Stanley employed GPS, radar, cameras, and other features to
                sense its surroundings and skirt obstacles, completing a
                132-mile course through the Mojave Desert in just under seven
                hours—a remarkable feat. The previous year, no cars had even
                come close to completing the 150-mile course. Most had failed
                within the first mile or two, and even the most successful made
                it only past the seventh mile.{" "}
                <Footnotes footnoteRefs={[{ id: "footnote24", number: 24 }]} />
              </Text>
              <Text>
                “Cars will eventually drive themselves,” Thrun said, predicting
                a day he then thought might be fifty years off. “We’re at a
                point in time similar to the first flight. No one thought it was
                possible. Challenging things can be done. . . . This is a very
                exciting time.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote25", number: 25 }]} />
              </Text>
              <Quote
                quoteColor="red"
                teaser="“Cars will eventually drive themselves. . . We’re at a point in time similar to the first flight. No one thought it was possible."
                source="— Sebastian Thrun"
              />
            </OneCol>
            <div className="lg:rs-mt-6">
              <MediaCaptionImage
                rounded
                isCaptionInset
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063591/sebastian-thrun_gu9yjy.jpg"
                alt="A man in a white shirt engages in conversation with a reporter."
                caption="Sebastian Thrun, 2005. Along with the Stanford Racing Team, Thrun developed a driverless Volkswagen named Stanley that won an autonomous vehicle contest held by DARPA. The contest required participants to navigate a 132-mile course through the Mojave Desert in no more than 10 hours—Stanley finished in just under seven. | Linda A. Cicero/Stanford News Service."
              />
            </div>
          </TwoCol>
          <MediaCaptionImage
            rounded
            aspectRatio="8x5"
            className="cc mx-auto w-full 2xl:max-w-1500 rs-mb-4 2xl:p-0"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063592/stanley-2005_b5sfsk.jpg"
            alt="A Red Bull-themed blue Volkswagen car parked outside a building, with a crowd of onlookers nearby."
            caption="The Stanford Racing Team’s autonomous robotic car, Stanley, in front of the William Gates Computer Science Building, 2005. Significant advances that enabled Stanley’s success included improved long-range terrain perception, real-time collision avoidance, and stable vehicle control on slippery and rugged terrain. | Linda A. Cicero/Stanford News Service."
          />
          <OneCol className="rs-mb-5">
            <Text>
              In 2005, bioengineer and psychiatrist Karl Deisseroth published
              his first paper on optogenetics, demonstrating the ability to turn
              genetically modified neurons on and off with light. The
              transformational technique allowed scientists to study brain
              circuitry as never before. It became a fundamental tool for
              biological research across numerous disciplines and garnered a
              multitude of international awards. In 2010, optogenetics was named
              “Method of the Year” by Nature Methods and was listed among the
              “Breakthroughs of the Decade” in Science magazine. In 2013,
              Deisseroth would go on to introduce the CLARITY technique, further
              revolutionizing neuroscience by enabling detailed visualization of
              intact brain structures and molecular processes.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote26", number: 26 }]} />
            </Text>
            <Text>
              Remarkable breakthroughs from Stanford Engineering faculty didn’t
              stop there. In 2006, electrical engineer Krishna Shenoy and his
              longtime collaborator, Stanford neurosurgeon Jaimie Henderson, and
              their team developed a high-performance brain-computer interface
              system that could translate neural signals from paralyzed patients
              into real-time control of a computer cursor and, later, enable
              them to “type” with their thoughts. An adaptive algorithm could
              adjust to changes in neural signal patterns over time, allowing
              for better control.{" "}
              <Footnotes footnoteRefs={[{ id: "footnote27", number: 27 }]} />
            </Text>
            <Text>
              Electrical engineer Teresa Meng collaborated with Shenoy on neural
              interfaces. She also advanced low-power digital circuit design and
              played a key role in developing Wi-Fi technology. Her colleague in
              electrical engineering, Andrea Goldsmith, made significant
              contributions to the theoretical foundations of wireless
              communications, particularly through her work on multiple-input,
              multiple-output (MIMO) systems and capacity limits of wireless
              channels, which advanced modern communication technologies like 4G
              and 5G wireless.
            </Text>
            <Text>
              Women were making strides in other engineering disciplines, too.
              In the Department of Management Science and Engineering, Margaret
              Brandeau devised a mathematical model for optimally allocating
              resources among HIV prevention strategies in subSaharan Africa,
              helping policymakers maximize the impact of limited public health
              resources. In 2011, Jennifer Dionne’s work in materials science
              and engineering showed how light-based techniques could be used to
              grab and move nanoparticles in liquid, advancing approaches for
              detecting diseases and creating advanced microscopic devices.
            </Text>
          </OneCol>
          <BgImageWrapper
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063587/aerial-campus-view-2011_ju9wny.jpg"
          >
            <MediaCaptionImage
              isParallax
              rounded
              aspectRatio="8x5"
              className="rs-mb-6"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1742265192/2023_08_11_110846_cezues.jpg"
              alt="A diverse group of five in protective eyewear collaborates in a dim lab, examining an object together."
              caption="Jennifer Dionne, second from right, and members of her lab (from left) Varun Dolia, Yirui Zhang, Liam Herndon, and Sajjad Abdollahramezani, 2023. The team uses a home-built microscope setup for rapid detection of respiratory pathogens and bacteria. Their innovative method capitalizes on ultra-densely patterned silicon sensors (over 5 million per square centimeter) and acoustic bioprinting of surface chemistry to realize highly multiplexed, molecular-to-cellular detection at the point of care. | Christophe Wu/School of Engineering."
            />
            <TwoCol>
              <MediaCaptionImage
                className="mt-0 lg:rs-mt-8"
                animation="slideUp"
                delay={0.3}
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063586/Deisseroth_SteveFisch_qku6aw.jpg"
                alt="A  man dressed in a blue shirt looks at a device, reflecting a moment of focus and attention."
                caption="Karl Deisseroth, professor of bioengineering, 2017. In 2005, Deisseroth announced a novel way of activating individual genes in neurons using light. The technique, called optogenetics, allowed for new insights into animal behavior and the nervous system. He later developed a technique called CLARITY that revealed the brain’s structures in incredible detail. | Steve Fisch, Stanford School of Medicine."
              />
              <MediaCaptionImage
                animation="slideUp"
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063591/Shenoy_MG_6677_eac9lg.jpg"
                alt="A man in jeans and a shirt leans casually against a wall."
                caption="Krishna Shenoy, professor of electrical engineering, 2012. Shenoy and his collaborators developed brain-computer interface technologies using implanted microchips and algorithms that interpreted neural signals. Their work led to advances enabling paralyzed people to move a computer cursor and, years later, to “type” with their thoughts. | Joel Simon/Shenoy Lab."
              />
            </TwoCol>
          </BgImageWrapper>
          <OneCol className="rs-mb-4">
            <H2 className="mt-0">A new dean</H2>
            <Text>
              In October 2013, Jim Plummer announced that he would step down as
              dean the following summer, ending the longest-serving tenure of
              any dean in the School of Engineering at just a few months shy of
              fifteen years. Plummer led the school through an era defined by
              the term “interdisciplinary,” best exemplified by the creation of
              an entirely new department, bioengineering, and the Hasso Plattner
              Institute of Design (the d.school). Another notable milestone of
              Plummer’s deanship was the launch of the Global Climate and Energy
              Project (GCEP), which, supported by industry partnerships, ran
              from 2003 to 2018 and significantly advanced research in renewable
              energy, energy efficiency, and carbon capture with the goal of
              reducing greenhouse gas emissions.
            </Text>
            <Text>
              “I have been privileged to serve as dean and to work with some of
              the best faculty, staff and students in the world, but it is time
              for me and the School of Engineering to move on,” Plummer said.
              “Change is good. It is good for people, and it is good for
              institutions.”{" "}
              <Footnotes footnoteRefs={[{ id: "footnote28", number: 28 }]} />
            </Text>
          </OneCol>
          <MediaCaptionImage
            rounded
            aspectRatio="8x5"
            className="cc mx-auto w-full 2xl:max-w-850 rs-mb-4 2xl:p-0"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751063585/bb752wg6044_oaptql.jpg"
            alt="Three men in suits standing side by side."
            caption="From left to right: James Gibbons, James Plummer, and John Hennessy at Plummer’s farewell party, 2014. Gibbons, Plummer, and Hennessy were each deans of Stanford Engineering. Plummer’s 14-year tenure was defined by achievements that expanded the scholarship of the school and created interdisciplinary connections with other schools. | Rod Searcey."
          />
          <TwoCol className="rs-mb-6">
            <OneCol>
              <Text>
                The following summer, President Hennessy and Provost John
                Etchemendy identified the next Frederick Emmons Terman Dean of
                the School of Engineering, Persis Drell, a professor of physics
                and former director of the SLAC National Accelerator Laboratory.
                On September 1, 2014, Drell became the first non-engineer and
                the first female dean in the history of the School of
                Engineering. She would later become the James and Anna Marie
                Spilker Professor of Materials Science and Engineering.
              </Text>
              <Text>
                “She really epitomizes what we’re looking for as a great scholar
                in her own right,” Hennessy said of Drell. She brought “a great
                deal of experience running and encouraging interdisciplinary
                activities [among] a large group of faculty.” Among her
                strengths, he said, was her vision of engineering’s future and
                her “demonstrated ability to shape a vision for the school.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote29", number: 29 }]} />
              </Text>
              <Text>
                “I am extremely ambitious for the school,” Drell said.
                “Engineering at Stanford, in partnership with Silicon Valley,
                has changed the world. I have no intention of backing away from
                similar ambition for our future.”{" "}
                <Footnotes footnoteRefs={[{ id: "footnote30", number: 30 }]} />
              </Text>
              <Text>
                With world-class facilities, new leadership, and a new vision on
                the horizon, the Stanford School of Engineering was ready for
                the remarkable decade to come.
              </Text>
            </OneCol>
            <StorySidebar hasLineArt lineArtType="short">
              <MediaCaptionImage
                rounded
                isPortrait
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1751403113/Persis_Drell_square_wllame.jpg"
                alt="A woman with gray hair wearing a black and white top, smiling softly against a neutral background."
                caption="Persis Drell, 2014. Drell, a professor of physics and former director of SLAC National Accelerator Laboratory, followed James Plummer as dean of Stanford Engineering. | Saul Bromberger/Sandra Hoover."
              />
            </StorySidebar>
          </TwoCol>
          <Container pt={4} pb={7} bgColor="blue">
            <OneCol className="rs-mt-4 ms-mb-7">
              <FootnotesList footnotes={footnotesList} />
            </OneCol>
          </Container>
          <DecadePager currentDecade={9} />
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
