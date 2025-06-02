import { Container } from "@/components/Container";
import { OneCol, TwoCol } from "@/components/Layout";
import { Masthead } from "@/components/Masthead";
import { Quote } from "@/components/Quote";
import {
  ExploreMore,
  Footnotes,
  FootnotesList,
  StoryImpactBanner,
  StorySidebar,
} from "@/components/Story";
import { H2 } from "@/components/Typography/Header";
import { Text } from "@/components/Typography";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import {
  BgImageWrapper,
  Scrollytelling,
  ScrollyBubble,
} from "@/components/Story/";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { Metadata } from "next";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { ImageGallery } from "@/components/ImageGallery";
import { storiesSource } from "@/utilities/storiesSource";

export const metadata: Metadata = {
  title:
    "The Foundation of a New Era in Engineering | 100 Years of Stanford Engineering",
  description:
    "As the second decade of the Stanford School of Engineering began, Theodore Hoover was in his final year as dean, and the school was just beginning to recover from the decline in enrollment caused by the Great Depression. In 1936, the school appointed its second dean, Samuel B. Morris. A native Californian and a Stanford alumnus (’11), Morris had served as chief engineer, superintendent, and general manager of the Water Department of Pasadena, California, from 1912 to 1931, when he joined the Stanford faculty as a professor of civil engineering.",
  keywords: [
    "Stanford Engineering",
    "School of Engineering",
    "Theodore Hoover",
    "Samuel B. Morris",
    "Great Depression",
    "Engineering History",
  ],
  openGraph: {
    title:
      "The Foundation of a New Era in Engineering | 100 Years of Stanford Engineering",
    description:
      "As the second decade of the Stanford School of Engineering began, Theodore Hoover was in his final year as dean, and the school was just beginning to recover from the decline in enrollment caused by the Great Depression. In 1936, the school appointed its second dean, Samuel B. Morris. A native Californian and a Stanford alumnus (’11), Morris had served as chief engineer, superintendent, and general manager of the Water Department of Pasadena, California, from 1912 to 1931, when he joined the Stanford faculty as a professor of civil engineering.",
    images: [
      {
        url: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg",
        alt: "A vintage black and white photograph depicting a diverse group of men and women gathered together posing for a photo.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Foundation of a New Era in Engineering | 100 Years of Stanford Engineering",
    description:
      "As the second decade of the Stanford School of Engineering began, Theodore Hoover was in his final year as dean, and the school was just beginning to recover from the decline in enrollment caused by the Great Depression. In 1936, the school appointed its second dean, Samuel B. Morris. A native Californian and a Stanford alumnus (’11), Morris had served as chief engineer, superintendent, and general manager of the Water Department of Pasadena, California, from 1912 to 1931, when he joined the Stanford faculty as a professor of civil engineering.",
    images: [
      "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg",
    ],
  },
};

const exploreStoriesData = [
  storiesSource.decade1,
  storiesSource.decade3,
  storiesSource.decade4,
];

const galleryImages = [
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906512/00002098_0011_md0igf.jpg",
    alt: "A group of men in suits gathered around a large electrical panel, discussing its features and functionality.",
    caption:
      "Professor William G. Hoover demonstrates equipment to engineering students in the Army Specialized Training Program at Stanford, 1943. While keeping up with their regular course loads and research responsibilities, many faculty worked demanding hours to train these students for war. | Special Collections & University Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906499/00002390_0001_rnenz3.jpg",
    alt: "Three men in a room, one seated fscing a board while two others run tests",
    caption:
      "A student soldier in Stanford’s Army Specialized Training Program manipulates a mock plane rudder control handle to keep scales “on the beam” in front of him as his chair is moved to simulate a plane in flight. | Special Collections & University Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906503/00002098_0012_werh61.jpg",
    alt: "Several men standing together, observing and interacting with a large machine in a workshop setting.",
    caption:
      "By 1944, more than half of the Army Specialized Training Program students at Stanford were in basic or advanced engineering. Thirteen hundred were taking basic engineering courses that included mathematics, chemistry, drawing, English, history, and geography. Four hundred fifty were advanced engineering students who, after completing the basics, went on to coursework in civil, mechanical, chemical, or electrical engineering. By comparison, at that time the school had only about one hundred graduate and upper-division civilian students specializing in engineering. | Special Collections & University Archives.",
  },
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741906502/00002098_0003_z3b8uv.jpg",
    alt: "An audience watches attentively as two men engage in conversation around two tables, each table holding a prototype of a speaker built of a large shiny silver disk.",
    caption:
      "Members of Stanford’s Army Specialized Training Program conduct  an electronics display outside the engineering buildings, January 1944. | Special Collections  & University Archives.",
  },
];

const footnotes = [
  {
    id: "footnote1",
    text: "Annual Report of the President of Stanford University for the Forty-Fourth Academic Year Ending August 31, 1935, 208.",
    number: 1,
  },
  {
    id: "footnote2",
    text: "Annual Report of the President of Stanford University for the Forty-Eighth Academic Year Ending August 31, 1939, 250.",
    number: 2,
  },
  {
    id: "footnote3",
    text: "Biographical Memoirs, Volume 4 (Washington, DC: National Academies Press, 1998), 309–311.",
    number: 3,
  },
  {
    id: "footnote4",
    text: "C. Stewart Gillmor, Fred Terman at Stanford: Building a Discipline, a University, and Silicon Valley (Stanford University Press, 2004), 118.",
    number: 4,
  },
  { id: "footnote5", text: "Ibid., 131.", number: 5 },
  { id: "footnote6", text: "Ibid., 167.", number: 6 },
  { id: "footnote7", text: "Ibid., 167, 253.", number: 7 },
  {
    id: "footnote8",
    text: "Duane Benson, “A 1939 Audio Oscillator Caught Disney’s Eye—And Helped Launch HP,” All About Circuits, January 1, 2024.",
    number: 8,
  },
  {
    id: "footnote9",
    text: "Carolyn E. Tajnai, “Fred Terman, the Father of Silicon Valley,” IEEE Design & Test of Computers 2, no. 2 (April 1985).",
    number: 9,
  },
  {
    id: "footnote10",
    text: "Biographical Memoirs, Volume 4, 309–311.",
    number: 10,
  },
  {
    id: "footnote11",
    text: "Annual Report of the President of Stanford University for the Forty-Seventh Academic Year Ending August 31, 1938, 12.",
    number: 11,
  },
  {
    id: "footnote12",
    text: "Charles H. House and Raymond H. Price, The HP Phenomenon: Innovation and Business Transformation (Stanford: Stanford University Press, 2009), 15.",
    number: 12,
  },
  {
    id: "footnote13",
    text: "Annual Report of the President of Stanford University for the Forty-Eighth Academic Year Ending August 31, 1939, 11–12.",
    number: 13,
  },
  { id: "footnote14", text: "Ibid., 256.", number: 14 },
  {
    id: "footnote15",
    text: "Annual Report of the President of Stanford University for the Forty-Ninth Academic Year Ending August 31, 1940, 7.",
    number: 15,
  },
  { id: "footnote16", text: "Ibid., 11.", number: 16 },
  {
    id: "footnote17",
    text: "Annual Report of the President of Stanford University for the Fiftieth Academic Year Ending August 31, 1941, 12.",
    number: 17,
  },
  { id: "footnote18", text: "Ibid., 240.", number: 18 },
  {
    id: "footnote19",
    text: "Annual Report of the President of Stanford University for the Year Ending 1942, 253.",
    number: 19,
  },
  { id: "footnote20", text: "Ibid.", number: 20 },
  { id: "footnote21", text: "Ibid., 256.", number: 21 },
  {
    id: "footnote22",
    text: "Annual Report of the President of Stanford University for the Year Ending 1944, 147.",
    number: 22,
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
            bgColor="red"
            chapter="Decade 2"
            heading="The foundation of a new era in engineering"
            dek="1935 – 1944"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906517/00007000_0009_pvv788.jpg"
            alt="A vintage black and white photograph depicting a diverse group of men and women gathered together posing for a photo."
            caption="Members of the Stanford Student Chapter of the American Society of Civil Engineers gather for a photo for the Stanford Quad yearbook, 1936. Charles Marx is seated sixth from right. Women were still a significant minority in engineering: the two women pictured are students Mary DeF. Atkins (sixth from left) and Margaret Woolverton (seventh from left), both seniors. | Special Collections & University Archives."
          />
          <div className="max-w-1500 w-full cc 3xl:p-0 rs-mb-5">
            <Text mb={6}>by Andrew Myers</Text>
            <Quote
              width="wide"
              teaser="Relations with industry are beneficial to the university and to industry and most helpful to its program of engineering education and research.”"
              source="— Samuel B. Morris, 1939"
            />
          </div>
          <TwoCol className="rs-my-5">
            <OneCol>
              <H2>1935 – 1944</H2>
              <Text variant="overview">
                As the second decade of the Stanford School of Engineering
                began, Theodore Hoover was in his final year as dean, and the
                school was just beginning to recover from the decline in
                enrollment caused by the Great Depression. In 1936, the school
                appointed its second dean, Samuel B. Morris. A native
                Californian and a Stanford alumnus (’11), Morris had served as
                chief engineer, superintendent, and general manager of the Water
                Department of Pasadena, California, from 1912 to 1931, when he
                joined the Stanford faculty as a professor of civil engineering.
                Morris was the driving force behind the eponymous Samuel B.
                Morris Dam, the cornerstone of the San Gabriel water supply
                project.
              </Text>
              <Text mb="0">
                In his first year as dean, Morris continued the School of
                Engineering’s focus on humanities as a crucial element of an
                engineer’s preparation for professional leadership. He
                liberalized the school’s elective curriculum to prepare
                engineers for what Dean Hoover had aptly described as “life in
                an age of technological advances.”
                <Footnotes
                  footnoteRefs={[{ id: "footnote1", number: 1 }]}
                />{" "}
                Students were required to take six elective courses from outside
                the School of Engineering in their third and fourth years.
                Morris also championed the Department of Engineering’s growing
                research collaborations with industry, noting, “Such relations
                with industry are beneficial to the university and to industry
                and most helpful to its program of engineering education and
                research.”
                <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} />
              </Text>
            </OneCol>
            <StorySidebar hasLineArt lineArtType="medium">
              <MediaCaptionImage
                isPortrait
                rounded
                aspectRatio="1x1"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906509/ck707sy2214_yejfci.jpg"
                alt="Vintage portrait of Samuel B. Morris"
                caption="Samuel B. Morris, professor of civil engineering and the second dean of the School of Engineering from 1936 to 1944, adjusted course schedules and curriculum during the Great Depression and World War II to help students who needed to work or study during the summer. Hundreds of soldiers enrolled in 1943 as part of the Army Specialized Training Program. | Special Collections & University Archives."
              />
            </StorySidebar>
          </TwoCol>
          <OneCol className="rs-mb-5">
            <Text>
              During Morris’s tenure, which bridged the period between the Great
              Depression and World War II, course schedules and the curriculum
              were adapted both to accommodate students who worked during the
              summer to help pay for schooling and to deal with the outflow of
              students as the country mobilized for war. In 1943, Morris also
              oversaw the influx of hundreds of enlisted soldiers as part of the
              Army Specialized Training Program.
            </Text>
            <H2>Ideas and Innovations</H2>
            <Text mb="0">
              In 1937, Frederick E. Terman became head of the Department of
              Electrical Engineering. Like Morris, Terman was a Stanford alum,
              earning his BA in chemistry in 1920 and his master’s in electrical
              engineering in 1922; he earned a doctorate from MIT in 1924. After
              recovering from a year-long, life-threatening battle with
              tuberculosis, Terman returned to Stanford in 1925 to join the
              faculty in electrical engineering.
              <Footnotes footnoteRefs={[{ id: "footnote3", number: 3 }]} />
            </Text>
          </OneCol>
          <MediaCaptionImage
            animation="sharpen"
            rounded
            aspectRatio="3x2"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906509/kn908nr7305_ffxjaj.jpg"
            alt="Vintage portrait of Frederick Terman"
            caption="Frederick Terman, 1938. Terman became head of the Department of Electrical Engineering in 1937. He served as dean of the School of Engineering from 1944 to 1958 and as provost of the university from 1955 to 1965. | Special Collections & University Archives."
            className="max-w-800 mx-auto rs-mb-5"
          />
          <OneCol className="rs-mb-6">
            <Text>
              Terman began a collaboration with William Hansen, a colleague in
              the Stanford Physics Department. Hansen’s work on radiation fields
              from antennas led to a joint patent application with Terman for an
              antenna array, laying the groundwork for an ongoing partnership.
              In 1937, Hansen collaborated with brothers Russell and Sigurd
              Varian, with Terman as department head offering support, to invent
              the revolutionary klystron ultrahigh-frequency vacuum tube, a
              device that amplified radio waves into the microwave spectrum. The
              klystron was the foundational technology in the burgeoning
              microwave industry, particularly in commercial air navigation,
              satellite communications, high-energy particle accelerators, and
              other technologies.
              <Footnotes footnoteRefs={[{ id: "footnote4", number: 4 }]} />
            </Text>
          </OneCol>
          <BgImageWrapper
            hasBgImage
            bgColor="fog-light"
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1742509516/00018325_004_optimized_wqc3n8.jpg"
          >
            <MediaCaptionImage
              isParallax
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1742509516/00018325_004_optimized_wqc3n8.jpg"
              alt="Display of the Type A klystron tool"
              caption="Type A klystron, 1937. The klystron was the first significantly powerful source of radio waves in the microwave range. As the foundational technology in the burgeoning microwave industry, it would be used in military radar detection, commercial air navigation, satellite communications,  high-energy particle accelerators, and other technologies. | Special Collections  & University Archives."
            />
          </BgImageWrapper>
          <TwoCol className="rs-mb-5">
            <div>
              <MediaCaptionImage
                animation="slideUp"
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906509/00021082_004_nhnrna.jpg"
                alt="A group of five men huddled around the klystron tool"
                caption="Physics researchers Russell Varian (‘25, MA ‘27) and Sigurd Varian and Stanford physics professor William Hansen collaborated with colleagues in electrical engineering to invent the klystron. Posing with the klystron in 1939 are (clockwise from lower left) Russell H. Varian, Sigurd F. Varian, David L. Webster, William W. Hansen, and John R. Woodyard. | Special Collections & University Archives."
              />
              <MediaCaptionImage
                animation="slideUp"
                delay={0.5}
                rounded
                aspectRatio="4x3"
                src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906513/zm384pb3271_pw5s9z.jpg"
                alt="A pair of brother, Russel H. Varian on the left and Sugurd Varian on the right, standing in front of a large machine."
                caption="Brothers Russell H. Varian (left) and Sigurd Varian (right) went on to found Varian Associates, one of the earliest high-tech companies in Silicon Valley and the first to lease land from the university in what became the Stanford Industrial Park (renamed Stanford Research Park in 1974). | Special Collections & University Archives."
              />
            </div>
            <MediaCaptionImage
              animation="slideUp"
              delay={0.3}
              rounded
              aspectRatio="3x4"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906505/00018323_004_haa3ul.jpg"
              alt="Professor William Hansen standing by a unit of klystron"
              caption="Associate Professor William Hansen tests a unit of the  klystron in 1939. The klystron was based on his earlier invention,  the “rhumbatron.” | Special Collections & University Archives."
            />
          </TwoCol>
          <OneCol className="rs-mb-2">
            <Text>
              Terman worked to attract funding, build up research facilities,
              and initiate research in ionospheric physics and electron-tube
              optics.
              <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} /> The
              success of the klystron project at Stanford led to important
              applications both in military radar defense and in postwar
              developments. These included the founding of the private company
              Varian Associates and the establishment of Stanford’s Microwave
              Laboratory (renamed the E.L. Ginzton Laboratory in 1976 for Edward
              Ginzton, a graduate student of Terman who led key aspects of
              klystron measurement and circuit development and was subsequently
              appointed professor of both applied physics and electrical
              engineering at Stanford).
              <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} />{" "}
              Terman’s vision and strategic leadership not only advanced
              Stanford Engineering but also contributed to the progress of
              technology on a national scale.
              <Footnotes footnoteRefs={[{ id: "footnote7", number: 7 }]} />
            </Text>
            <Text>
              With the klystron, Terman began the school’s decades-long
              tradition of inventions emerging from academia and making a
              successful transfer to the corporate world. Varian Associates
              became the first resident of the new Stanford Industrial Park and
              a progenitor of Silicon Valley start-ups long before the term
              “Silicon Valley” even existed. The collaboration between
              engineering and physics that produced the klystron led to the
              creation of the High Energy Physics Laboratory (HEPL; now the W.W.
              Hansen Experimental Physics Laboratory), Stanford’s first
              independent research laboratory—a prime example of Stanford
              Engineering’s leadership in interdisciplinary research decades
              before the concept came into vogue at university campuses around
              the globe.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="A" />
          </div>
          <OneCol>
            <Text>
              In 1939, the Varian brothers’ success was followed by the
              introduction of the Model 200A precision audio oscillator, the
              first low-cost method of measuring audio frequencies, which was
              developed by two School of Engineering graduate students, William
              Hewlett and David Packard. Hewlett and Packard had been motivated
              to create the Model 200A during a lecture by Terman, who read from
              a 1934 paper by Bell Laboratories’ H.S. Black on distortion
              reduction techniques. Hewlett was so inspired that he committed
              his master’s thesis to the concept.
              <Footnotes footnoteRefs={[{ id: "footnote8", number: 8 }]} />
            </Text>
            <Text>
              That same year, at Terman’s urging, the young engineers pitched
              the Model 200A to the Walt Disney Company, which was producing the
              animated film Fantasia with a soundtrack of beloved classical
              music. The Model 200A provided the technological foundation for
              Disney’s “Fantasound” high-fidelity audio reproduction system, and
              the Hewlett-Packard Company, named for its founders, was off and
              running. In subsequent decades, its technological strides would
              make the company a household name.
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-5 rs-mt-5">
            <MediaCaptionImage
              animation="slideUp"
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906509/hewlett_packard_yijywt.jpg"
              alt="William Hewlett and David Packerd, standing in front of the first precision audio oscillator."
              caption="William Hewlett and David Packard (seated), 1939. As graduate students in the School of Engineering, they developed the first precision audio oscillator, a low-cost method of measuring audio frequencies. The device became the foundation for their company, known around the world today as HP. | Courtesy Hewlett-Packard Corporate Archives."
            />
            <MediaCaptionImage
              animation="slideUp"
              delay={0.5}
              rounded
              aspectRatio="4x3"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906513/zx844pk9013_viuv37.jpg"
              alt="Wiilliam Hewlett and David Parkard, smiling at one another as they work in their shop"
              caption="William Hewlett and David Packard working together in their shop, circa 1942. | Special Collections & University Archives."
            />
          </TwoCol>
          <OneCol className="rs-mb-5">
            <Text>
              Still in the early years of a legendary tenure, Terman would later
              become dean of the School of Engineering (1944–1958) and provost
              of Stanford University (1955–1965). He would be proclaimed a
              “Father of Silicon Valley” for urging innovative Stanford students
              like Hewlett and Packard not only to develop new technologies but
              also to commercialize them by founding start-up companies.
              <Footnotes footnoteRefs={[{ id: "footnote9", number: 9 }]} /> In
              the decades to come, his initiatives and influence would define
              him as a leading force in the birth of Silicon Valley.
              <Footnotes footnoteRefs={[{ id: "footnote10", number: 10 }]} />
            </Text>
            <Text>
              The success of the klystron and the Model 200A, and the companies
              resulting from those innovations, forced the School of Engineering
              into an unanticipated reckoning with its own creativity and
              business acumen. In 1938, Stanford published the university’s
              first policy governing the patenting of discoveries and inventions
              produced on campus using university facilities and resources.
              <Footnotes
                footnoteRefs={[{ id: "footnote11", number: 11 }]}
              />{" "}
              This practice—technology license transfer from university lab to
              corporate boardroom—would not become standard elsewhere for
              several more decades. The Stanford School of Engineering laid the
              early foundations of entrepreneurialism—an alloy of technological
              innovation and business acumen—that still stands today.
            </Text>
          </OneCol>
          <Scrollytelling
            bgImageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906512/PC0141_b12_Engineering_Corner_0172_jawygm.jpg"
            className="mb-0"
          >
            <H2>Born in a Stanford Engineering Classroom: HP</H2>
            <ScrollyBubble>
              <Text mb="0">
                While many think that William Hewlett and David Packard started
                their now world famous company in a Palo Alto garage, the place
                Hewlett-Packard really got started was in a Stanford Engineering
                classroom. Fred Terman, then a professor of electrical
                engineering, had been keeping an eye on the young Packard, a
                fine engineering student as well as a six-foot-five letterman in
                basketball, football, and track. In the spring of 1933, Terman
                invited Packard to stop by his office for a chat.
              </Text>
            </ScrollyBubble>
            <MediaCaptionImage
              rounded
              aspectRatio="3x4"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1742509511/nz029jf0057_optimized_eoovla.jpg"
              alt="David Packard, wearing athletic attire, crouches on grass outdoors, poised to sprint forward."
            />
            <Quote
              source="— David Packard"
              teaser={
                <>
                  I was amazed to find that he knew a great deal about me,”
                  Packard later recalled. “He knew my interests and abilities in
                  athletics; he knew what courses I had taken and my grades. He
                  had even looked up my high school record and my scores on the
                  entrance exams.”
                  <Footnotes
                    footnoteRefs={[{ id: "footnote12", number: 12 }]}
                  />
                </>
              }
            />
            <ScrollyBubble>
              <Text>
                Packard was exactly the kind of young leader the school most
                wanted to cultivate. Terman asked the rising senior if he was up
                for the challenge of becoming the first undergraduate to take
                Terman’s graduate course in radio engineering, then the
                forefront of electronics. In that moment, Packard believed,
                Hewlett-Packard was born.
              </Text>
              <Text>
                Most electronics companies at the time, Terman advised Packard,
                had been “built by people without much education.” In the fall
                of 1933, while Packard helped lead the Cardinal to the Rose
                Bowl, he also put together the kernel of HP with Hewlett,
                including Barney Oliver and Edward Porter as part of the early
                management team. Unlike their competitors, Packard and crew
                would place education and technical innovation at the center of
                their company.
              </Text>
              <Text>
                It didn’t hurt that a local banker at Palo Alto National was
                persuaded to give young Packard a loan in part because he
                remembered the entrepreneur’s success on the football field. Or
                that Terman, working for the government during World War II,
                often steered contracts toward HP. But all the help in the world
                wouldn’t have amounted to much without that first meeting of
                minds in a Stanford classroom in 1933.
              </Text>
              <Text mb="0">
                —Charles Petersen
                <br />
                Harold Hohbach Historian at the Silicon Valley Archives,
                <br />
                Stanford University
              </Text>
            </ScrollyBubble>
          </Scrollytelling>
          <OneCol>
            <H2>Gathering Clouds</H2>
            <Text>
              In the decade or so between the advent of human flight and World
              War I, then known simply as “The Great War,” Stanford faculty
              worked in the vanguard of aviation and aeronautical engineering.
              By the late 1920s, Professors William Frederick Durand and Everett
              Parker Lesley had built their wind tunnel in the Daniel Guggenheim
              Experimental Laboratory of Aerodynamic and Aeronautic Research
              with funds from the Guggenheim Foundation. But by the late 1930s,
              Durand and Lesley had retired, and the Guggenheim grant had
              expired. Yet aviation was at the cusp of a great transition as
              World War II loomed. As Germany invaded Poland in September 1939,
              the Department of Mechanical Engineering took in the Guggenheim
              Lab. Research relationships with the federal government were
              burgeoning; the Civil Aeronautics Authority, precursor to the
              Federal Aviation Administration, selected Stanford as one of
              several centers nationwide to train civilians in aviation.
              <Footnotes footnoteRefs={[{ id: "footnote13", number: 13 }]} />
            </Text>
          </OneCol>
          <div className="flex w-full justify-end">
            <HorizontalLineart lineartType="B" />
          </div>
          <OneCol className="rs-mb-4">
            <Text>
              Meanwhile, in electrical engineering, an extensive reimagining of
              the junior and senior-level curriculum began. Traditional
              senior-level classes in electrical circuits and machinery were
              moved to the end of the junior year to accommodate the addition of
              electives in communication in the senior year, a shift that
              reflected the growing influence of radio broadcasting nationwide.
              The rearrangement made for a “more uniform division of this work
              between the junior and senior years,” Terman wrote in the
              university’s 1939 annual report.
              <Footnotes footnoteRefs={[{ id: "footnote14", number: 14 }]} /> By
              enabling this training earlier, the newly developed elective
              senior-level courses “in this important field” of communication
              made it possible to raise the level of instruction for graduate
              students.
            </Text>
          </OneCol>
          <TwoCol className="rs-mb-5">
            <MediaCaptionImage
              animation="sharpen"
              rounded
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741906502/00008355_001_ocomle.jpg"
              alt="A pair of men reviewing a large piece of machinery"
              caption="Professor Arthur B. Domonoske, at right, 1939. Domonoske, who joined Stanford in 1927 to become head of the Department  of Mechanical Engineering, published about the principles of aircraft engine design. | Special Collections & University Archives."
            />
            <Text>
              The academic year of 1939–1940 began with an exploratory committee
              charged with considering the possibility of moving the Department
              of Mining Engineering out of the School of Engineering altogether,
              to combine it with the Department of Geology to form a Stanford
              School of Geology and Mining. The authors of the report to the
              president of the university noted that the two departments shared
              numerous interests, and many students demanded education in both
              disciplines. However, the committee recommended that the two
              departments remain separate because of the divergence of their
              engineering and scientific aims. “For that reason, it would be
              undesirable to combine them too closely,” the committee wrote; but
              it suggested considerable upgrades to the physical facilities of
              both departments.
              <Footnotes
                footnoteRefs={[{ id: "footnote15", number: 15 }]}
              />{" "}
              Changes for these departments lay ahead, but only after the war’s
              end.
            </Text>
          </TwoCol>
          <OneCol>
            <Text>
              With Germany’s aggressiveness in Europe in mind, the federal
              government appealed to research universities nationwide to bolster
              the defense effort. The Stanford School of Engineering,
              particularly the Guggenheim Lab, was among the leaders in that
              effort. Dean Morris was appointed chairman of a university-wide
              committee charged with facilitating the expansion of relationships
              with the federal government to “give the fullest possible service
              if called upon.”
              <Footnotes footnoteRefs={[{ id: "footnote16", number: 16 }]} />
            </Text>
            <Text>
              In 1941, preceding the attack on Pearl Harbor, Washington
              frequently called on Stanford to support defense activities,
              asking for help not only from the School of Engineering but also
              from the departments of physics and chemistry and the School of
              Medicine, seeking any experts who might give the country an edge
              in the coming conflict. The Field Artillery Unit and the Ordnance
              Unit of the Stanford ROTC were pressed into service to train
              students for military service, and the School of Engineering
              expanded its role in the Civilian Pilot Training Program under the
              Civil Aeronautics Administration.
            </Text>
          </OneCol>
          <div className="flex w-full justify-start">
            <HorizontalLineart lineartType="C" />
          </div>
          <OneCol>
            <Text>
              In March that year, months ahead of the country’s entry into the
              war in December, Stanford President Ray Lyman Wilbur wrote to all
              university faculty: “The National Selective Service law . . . will
              probably affect directly nearly all the men now enrolled in our
              colleges and universities. It is important that they complete as
              much of their education as soon as possible in order to be of
              greater value in national service. . . . Each individual is of
              value to the country in proportion to his or her educational
              attainments.”
              <Footnotes footnoteRefs={[{ id: "footnote17", number: 17 }]} />
            </Text>
          </OneCol>
          <ImageGallery images={galleryImages} />
          <OneCol className="rs-mb-3 rs-mt-5">
            <Text>
              For the first time, the School of Engineering offered summer
              courses to enable students to complete a typical twelve-quarter
              engineering curriculum in just three years. Dean Morris touted
              important research activities in the School of
              Engineering—especially in the Guggenheim Lab, the Department of
              Mechanical Engineering, and the Department of Electrical
              Engineering—but could not detail any in particular for fear of
              compromising national security secrets. He could only assert that
              such research “is going on in ever increasing volume. . . . This
              will become a more important factor in the year 1941–42, and
              increasingly until the European war is over.”
              <Footnotes footnoteRefs={[{ id: "footnote18", number: 18 }]} />
            </Text>
            <Text>
              The School of Engineering continued to gear itself to the flow of
              world events “in which the engineer is playing an ever-increasing
              part.” Engineers were necessary “to carry on . . . highly
              mechanized warfare.”
              <Footnotes
                footnoteRefs={[{ id: "footnote19", number: 19 }]}
              />{" "}
              Despite the fact that many students were permitted to defer
              military service to complete their engineering degrees, the call
              to serve affected both undergraduate and graduate enrollments.
              Students were not the only ones enlisting: as of August 1942,
              eight school faculty were on leave to the military; five were
              commissioned officers in the Army and Navy, and three were
              involved in research or technical engagements specifically related
              to the war. Terman was among them, departing in 1942 to lead a
              new, top-secret Radio Research Laboratory at Harvard. Two other
              faculty left for roles in industry, while another two in the Naval
              Reserve were retained only because of the “importance to the war
              effort of instruction and research being carried on by them.”
              <Footnotes footnoteRefs={[{ id: "footnote20", number: 20 }]} />
            </Text>
            <Text>
              In 1942, the School of Engineering conferred 157 degrees, a slight
              increase from 136 the previous year. But the impact of the war on
              school enrollment was undeniable: “Unless there is adequate
              protection by selective service or even subsidy to engineering
              students,” wrote Dean Morris to President Wilbur, “we can expect
              the number of Bachelors’ degrees to diminish and the graduate
              degrees to fall off almost completely.”
              <Footnotes footnoteRefs={[{ id: "footnote21", number: 21 }]} /> By
              academic year 1944–1945, the number of degrees granted fell below
              100 for the first time in years, with only 96 conferred, and
              prospects dimming for an influx of new students. “With deferment
              no longer granted to undergraduate or graduate engineering
              students by Selective Service, the numbers graduating from now
              until the end of the war will be greatly reduced,” wrote Morris in
              August 1944.
              <Footnotes
                footnoteRefs={[{ id: "footnote22", number: 22 }]}
              />{" "}
              The war continued to rage on two fronts as the second decade of
              the Stanford School of Engineering drew to a close.
            </Text>
            <Text>
              The following month, Morris stepped down from his role as dean to
              return to Los Angeles as chief engineer for the municipal power
              system. He recommended as his successor Fred Terman, whose work
              had already set in motion a new era for both the School of
              Engineering and the world.
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
          <ContributeStoryBanner bgColor="red" hasLineArt />
        </article>
      </main>
    </>
  );
}
