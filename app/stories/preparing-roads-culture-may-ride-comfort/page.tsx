import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { OneCol, ThreeCol, TwoCol } from "@/components/Layout";
import { Masthead } from "@/components/Masthead";
import MediaCaptionImage from "@/components/MediaCaptionImage/MediaCaptionImage";
import { Quote } from "@/components/Quote";
import {
  Footnotes,
  FootnotesList,
  StoryImpactBanner,
  StorySidebar,
} from "@/components/Story";
import { StoryGrid } from "@/components/Story/StoryGrid";
import { Text } from "@/components/Typography";
import React from "react";
import { Metadata } from "next";
import { MainNav } from "@/components/MainNav";
import { ImageGallery } from "@/components/ImageGallery";
import { HorizontalLineart } from "@/components/images/horizontal-lineart";
import { H2 } from "@/components/Typography/Header";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  title: "Preparing Roads over which Culture May Ride in Comfort",
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
        url: "[link]",
        alt: "Historic Stanford engineering class in session, circa 1925",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preparing Roads over which Culture May Ride in Comfort",
    description:
      "On May 15, 1925, when the Stanford University Board of Trustees approved the School of Engineering proposal, it was not the start of engineering at Stanford — an engineering curriculum had been in place since the university's inception.",
    images: ["[link]"],
  },
};

const galleryImages = [
  {
    src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1741727933/harris_j_ryan_gw6by8.jpg",
    alt: "Professor Harris J. Ryan working in his High-Voltage Laboratory, around 1926",
    caption:
      "Professor Harris J. Ryan at his High-Voltage Laboratory, where he studied the long-distance transmission of electricity, circa 1926. Ryan was head of the Department of Electrical Engineering from 1905 until 1931. | Berton W. Crandall/Hoover Institution Library & Archives.",
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
      "View southward of experimental power lines from the Ryan Lab. Ryan’s research helped overcome many vexing challenges of transporting electricity, including how to carry electricity from the Hoover Dam to Los Angeles. Berton W. Crandall/Hoover Institution Library & Archives.",
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
  {
    number: 13,
    id: "footnote13",
    text: "Guido H. Marx, “The Making of the Stanford Engineer,” Stanford Alumnus 9, no. 4 (December 1907).",
  },
  {
    number: 14,
    id: "footnote14",
    text: "Alfred D. Kirkland, “Engineering at Stanford: A Short Historical Perspective,” IEEE Transactions on Education 18, no. 1 (February 1975): 50,",
    sourceLink: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=4320947",
  },
  {
    number: 15,
    id: "footnote15",
    text: "Annual Report of the President of Stanford University for the Thirty-Ninth Academic Year Ending August 31, 1930, 165.",
  },
];

export default function page() {
  return (
    <Container as="article" width="full">
      <Masthead logoColor="white-red" isOverlap mainNav={<MainNav />} />
      <StoryImpactBanner
        hasBgImage
        bgColor="stone-dark"
        chapter="Part 1"
        heading="“Preparing Roads over which Culture May Ride in Comfort”"
        body="The 1st Decade | 1925 – 1934"
        byline="by Andrew Myers"
        src="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726626/00007204_0003.jpg_Guggehneim_Lab_h3dwcp.jpg"
        alt="Interior of the Guggenheim Aeronautics Laboratory, depicting a man alongside a large machine"
        caption="Inside the Guggenheim Aeronautics Laboratory in 1927, Professor William F. Durand, who had joined the Stanford faculty in 1904, collaborated with Professor Everett P. Lesley to build one of the first wind tunnels, which enabled rigorous study of propeller design. Today, dozens of Durand’s hand-carved wooden propeller designs are on display in the Terman Engineering Library on the second floor of Stanford’s Jen-Hsun Huang Engineering Center. | Berton W. Crandall/Hoover Institution Library & Archives"
      />
      <Container width="site">
        <Quote
          body="Stanford University should be in a position to offer advanced training in engineering for men qualified to be leaders."
          source="— Charles David Marx, 1923"
        />
      </Container>
      <HorizontalLineart lineartType="A" />
      <OneCol>
        <H2>1925 – 1934</H2>
        <Text variant="overview">
          On May 15, 1925, when the Stanford University Board of Trustees
          officially approved the proposal to create the new School of
          Engineering, the decision was anything but the start of engineering at
          Stanford. The education of engineers had been a founding intention for
          the university, with an engineering curriculum in place since its
          inception.
        </Text>
        <Text>
          In March 1884, Leland Stanford had just turned sixty. In addition to
          gaining extreme wealth by investing in the first transcontinental
          railroad, he had served as governor of California and would soon
          become a U.S. senator. Yet his wealth and power could not save his
          son. While on a grand tour of Europe with his family, Leland Stanford,
          Jr., just fifteen years old, had contracted typhoid and died. Even
          while still in Europe, a bereft Leland Stanford searched for a way to
          honor his child and bring purpose back into his own life. The elder
          Stanford imagined a university in his son’s name. It was not to be
          just any university, but one built specifically to educate engineers
          in a new way.
        </Text>
        <Text>
          “I was thinking in the night, since Leland is gone what my wealth
          could do,” Stanford explained to the Rev. Augustus F. Beard, in
          Florence, Italy, as he waited for clearance to bring his dead son’s
          body home to California. “I was thinking, since I could do no more for
          my boy I might do something for other people’s boys in Leland’s name.
          When I was connected with the building of the railroad, I found that
          many of those engaged in the engineering were inefficient and inexact
          and poorly prepared for their work. I was thinking I might start a
          school or institution for civil and mechanical engineers on my grounds
          in Palo Alto.”
          <Footnotes footnoteRefs={[{ id: "footnote1", number: 1 }]} />{" "}
        </Text>
        <Text>
          “The children of California shall be our children,” he told his wife,
          Jane Stanford.
          <Footnotes footnoteRefs={[{ id: "footnote2", number: 2 }]} /> Though
          it took seven years for the doors of Leland Stanford Junior University
          to open in 1891, from its first day it was a school for engineering as
          much as it was a school for arts and sciences. Five of the
          university’s first fifteen faculty members were engineering
          professors, and 141 of the university’s original 559 students were
          enrolled in engineering.
          <Footnotes footnoteRefs={[{ id: "footnote3", number: 3 }]} /> When her
          husband died in 1893, Jane continued to shepherd this vision.
        </Text>
        <H2>A look back, and forward</H2>
        <Text>
          In the ten decades since its founding, the School of Engineering has
          produced fundamental work in science and transformational
          breakthroughs that have changed lives and shaped human society. From
          particle physics to human DNA, airplanes to automobiles, catalysts to
          computer science, the Stanford School of Engineering has been a leader
          among engineering schools. Documents from the school’s early years
          illuminate the founding purposes and principles that compelled
          university leaders to gather the engineering disciplines of the
          time—civil, mechanical, electrical, and mining and metallurgy—into a
          single school.
        </Text>
      </OneCol>
      <HorizontalLineart lineartType="B" isLeft />
      <OneCol>
        <Text>
          “In organic union there is strength,” wrote the members of a select
          committee charged by then Stanford President Ray Lyman Wilbur to
          explore the idea of a School of Engineering thirty-four years after
          the university’s founding.
          <Footnotes footnoteRefs={[{ id: "footnote4", number: 4 }]} /> In their
          1925 report to the president, the committee unanimously recommended
          that the school be formed. While their report had no shortage of
          discussion about what curriculum should be followed and the
          professional skills this new breed of engineer should master, the
          committee focused on the sort of people the Stanford School of
          Engineering should attract.
        </Text>
        <Text>
          The committee members noted that their work had been driven by a need
          to address “the scarcity, among engineers, of men capable of managing,
          directing, leading. This has given rise, among engineering teachers,
          to a widespread discussion of the question, How to train the
          engineering student for leadership.”
          <Footnotes footnoteRefs={[{ id: "footnote5", number: 5 }]} /> Theodore
          Hoover, the first dean of the School of Engineering, detailed the
          personal characteristics possessed by the “Stanford engineer”—an
          individual prepared for leadership who would be successful in life as
          well as engineering. The Stanford engineer would be “something vastly
          greater and more significant in modern life than just a man with
          technical training.”
          <Footnotes footnoteRefs={[{ id: "footnote6", number: 6 }]} /> That
          goal of promoting leadership in engineering and life endures to this
          day.
        </Text>
      </OneCol>
      <StoryGrid bgColor="blue">
        <MediaCaptionImage
          rounded
          isCaptionInset
          aspectRatio="3x4"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726630/00007005_0011.jpg_mining_lab_kufz7t.jpg"
          alt="A factory worker engages with a miniature ore-treating plant in a mining lab"
          caption="This undated photograph shows a miniature ore-treating plant in the mining lab. Stanford’s Department of Mining and Metallurgy was created in 1919 from the Geology and Mining Department, one of Stanford’s oldest departments, although the physics of metals had been studied since 1903. Study of metals would be the department’s main subject for nearly half a century. | Berton W. Crandall/Hoover Institution Library & Archives."
        />
        <MediaCaptionImage
          rounded
          isCaptionInset
          aspectRatio="4x3"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726628/Engineering_faculty_c1920_sjiqvd.jpg"
          alt="Stanford’s Civil Engineering faculty at the time of Charles David Marx’s 1923 retirement"
          caption="Stanford’s Civil Engineering faculty at the time of Charles David Marx’s 1923 retirement. Marx is seated in the center of the bottom row. | Courtesy Barbara Wallace."
        />
      </StoryGrid>
      <OneCol>
        <Text>
          The committee’s focus on people applied not only to students but also
          to faculty. Back in 1891, Stanford’s first president, David Starr
          Jordan, went looking for top engineers across the country. The first
          hire he made in the engineering program was Charles David Marx, a
          noted civil engineer then at Cornell University. Marx became known as
          “The Father of the Stanford Engineer,” a man whom his students
          affectionately referred to as “Daddy Marx,” for the paternal figure he
          cut on campus.(7)
        </Text>
        <Text>
          The headquarters of engineering education was “Engineering Corner,” a
          familiar building of sandstone and red tile with an arched portico
          that opened in 1905. Like many other structures on Stanford’s campus,
          it was damaged in the 1906 earthquake. Although some buildings, like
          the newly completed library, were unsalvageable, much of the campus
          was restored with the help of a committee of Stanford’s own engineers
          that included Charles Marx; Charles Wing, a structural engineer; and
          William Durand, a mechanical engineer. Engineering Corner would remain
          the center of Stanford Engineering for nearly three-quarters of a
          century, until the Frederick E. Terman Engineering Center was
          dedicated in 1977.
        </Text>
      </OneCol>
      <Container width="site">
        <MediaCaptionImage
          isParallax
          aspectRatio="16x9"
          imageSrc=""
          alt="The southeast corner of Stanford’s main quad, known as “Engineering Corner,” circa 1910–1915"
          caption="The southeast corner of Stanford’s main quad, known as “Engineering Corner,” circa 1910–1915. The building was home to Engineering until 1977, when the school moved into the newly constructed Frederick E. Terman Engineering Center. | Special Collections & University Archives."
        />
      </Container>
      <OneCol>
        <Text>
          Later, in 1923, Charles Marx would write that, even before a single
          block of sandstone had been laid for Engineering Corner, Stanford had
          succeeded because it had placed a priority on people over
          infrastructure: “And this again is characteristic of Stanford, where
          the bringing and holding of properly qualified teachers has always
          been deemed of more importance than the addition to buildings and
          equipment.”(8) As for curriculum, Stanford had held engineering
          courses on par with other courses, allowing the university to “wipe
          out the line of division [between] students in technical and so-called
          cultural courses.”(9) The goal was a well-rounded, liberal education
          meant to break free of stereotypes about engineers. Speaking to the
          American Society of Civil Engineers when he was president of the
          organization in 1915, Marx renounced the idea of engineering as a
          purely technical endeavor that was “destructive of idealism” and
          natural beauty. Engineering embodied idealism and art, he insisted,
          and the same principles of construction applied to “a symphony, a
          poem, or a bridge.”(10)
        </Text>
      </OneCol>
      <StoryGrid bgColor="fog-light">
        <div>
          <MediaCaptionImage
            rounded
            isCaptionInset
            aspectRatio="4x3"
            imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741726628/campus_aerial_view_crandall_m0r1jy.jpg"
            alt="Aerial view of the Stanford campus, facing south, circa 1925"
            caption="Aerial view of the Stanford campus, facing south, circa 1925. | Berton W. Crandall photographs, Hoover Institution Library & Archives."
          />
          <MediaCaptionImage
            rounded
            isCaptionInset
            aspectRatio="4x3"
            imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741727935/60022_011_0001_gplnxp.jpg"
            alt="View south from Memorial Church, showing Engineering school buildings 520 (left) and 530 (right), with the old clock tower between them, 1925"
            caption="View south from Memorial Church, showing Engineering school buildings 520 (left) and 530 (right), with the old clock tower between them, 1925. Today they are Mechanical Engineering buildings. | Berton W. Crandall photographs, Hoover Institution Library & Archives."
          />
        </div>
        <MediaCaptionImage
          rounded
          isCaptionInset
          aspectRatio="4x3"
          imageSrc="https://res.cloudinary.com/duv7bozlj/image/upload/v1741727934/60022_011_0005_gs4cil.jpg"
          alt="View of Engineering buildings on Escondido Mall behind Memorial Church, 1925"
          caption="View of Engineering buildings on Escondido Mall behind Memorial Church, 1925. From left o right, the buildings today are the Frederick Emmons Terman Engineering Laboratory (500), the George Havas Engineering Building (520), and Mechanical Engineering (530). Also visible is the roof corner of what is today the Thomas F. Peterson Engineering Laboratory (550), home of the Hasso Plattner Institute of Design (d.school). | Berton W. Crandall photographs, Hoover Institution Library & Archives."
        />
      </StoryGrid>
      <ImageGallery images={galleryImages} />
      <Container mt={4} mb={7}>
        <OneCol>
          <FootnotesList footnotes={footnotes} />
        </OneCol>
      </Container>
      <ContributeStoryBanner />
    </Container>
  );
}
