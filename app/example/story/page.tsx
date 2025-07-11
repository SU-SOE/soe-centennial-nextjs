import { H2, Heading, Text } from "@/components/Typography";
import { Masthead } from "@/components/Masthead";
import { Container } from "@/components/Container";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import {
  StoryCard,
  StoryCardProps,
  StoryFeature,
  StoryImpactBanner,
  StoryLineBanner,
  StoryPosterCard,
} from "@/components/Story";
import { VerticalScrollGallery } from "@/components/VerticalScrollGallery";
import { ThreeCol, TwoCol } from "@/components/Layout";
import { AnimateInView } from "@/components/Animate";
import { ExploreMore } from "@/components/Story/ExploreMore";
import { Metadata } from "next";
import { TimelineCard } from "@/components/Timeline";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const ExampleStoryPage = async () => {
  const storyData: StoryCardProps[] = [
    {
      heading: "New Spaces and Expanding Influence",
      superhead: "The 5th Decade",
      chapter: "Chapter 5",
      href: "/",
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986284/new-spaces-and-expanding-influence_dcvv7j_odpshs.jpg",
    },
    {
      heading: "Bridging Worlds: Chips, Code, and Cosmos",
      superhead: "The 6th Decade",
      chapter: "Chapter 6",
      href: "/",
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986283/bridging-worlds_ma3ixq_gwcmqb.jpg",
    },
    {
      heading: "Redevelopment and an Earthquake",
      superhead: "The 7th Decade",
      chapter: "Chapter 7",
      href: "/",
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg",
    },
  ];

  const demoImages = [
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265141/aerial-campus-view-2011_owdrjo.jpg",
      alt: "Aerial view of Stanford University's campus, showcasing its iconic architecture and lush green surroundings.",
      caption:
        "Aerial view of campus facing east, 2011. The new Science and Engineering Quad is visible on the left, with the final building still under construction. Then known as Building 4, that building would later become the Shriram Center for Bioengineering and Chemical Engineering. | Linda A. Cicero/Stanford News Service.",
      children: (
        <>
          <H2>A new quad takes shape</H2>
          <Text>
            In the early 2000s, after the new buildings of the Near West Campus
            project had opened in 1999, a new project broke ground to complete
            the second phase: a new Science and Engineering Quad (SEQ). On an
            eight-acre section adjacent to the Near West Campus, a patchwork of
            aging, utilitarian buildings were razed. By 2014, the last four of
            the quad’s buildings had been completed, with the generous support
            of named donors as well as a group of anonymous donors known as the
            Fundamental Partners. Together, the four structures encompassed
            nearly 620,000 square feet of combined office, teaching, and
            research space—a grand center for science and engineering.
          </Text>
          <Text>
            All four buildings in the new SEQ featured sustainable building
            techniques, including rapidly renewable construction materials,
            recycled “gray” water to flush toilets, high-performance windows to
            make extensive use of daylight and natural ventilation, and active
            chilled beams. Each of the four buildings in the new SEQ used half
            the power—and one-tenth the water—of traditional buildings. (3)
          </Text>
        </>
      ),
    },
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265195/br440jc7470_lhb21j.jpg",
      alt: "People walking and cycling in front of a building.",
      caption:
        "Exterior of the Jerry Yang and Akiko Yamazaki Environment and Energy Building (Y2E2). Dedicated in 2008, Y2E2 became the first of the four buildings that composed the new Science and Engineering Quad. Named in honor of a gift from Jerry Yang (’90), cofounder of Yahoo!, and Akiko Yamazaki (’90), the building houses departments and institutes focused on studying and developing solutions for sustainability challenges, particularly climate change. | Tim Griffith/School of Engineering.",
      children: (
        <>
          <TimelineCard
            heading="Sustainable innovation hub: The Jerry Yang and Akiko Yamazaki Environment and Energy Building (Y2E2) opens its doors to tackle climate change"
            year="2008"
            anchor=""
          />
          <Text>
            In early 2008, this new era for the School of Engineering commenced
            with the dedication of the Jerry Yang and Akiko Yamazaki Environment
            and Energy Building. Nicknamed Y2E2, the new building was eight
            years in the making and was made possible by a $50 million gift from
            the husband-and-wife alumni team of Jerry Yang (’90), cofounder of
            Yahoo!, and Akiko Yamazaki (’90). Gathered under its roof were
            primarily engineers, but also an assortment of ecologists,
            economists, biologists, legal scholars, earth scientists, and policy
            experts whose goal was to make the world a more sustainable place.
            “The complexity of today’s global environmental questions requires
            that experts from a variety of fields come together to address
            different facets of the same problem,” Yamazaki said. “For our
            children to be able to enjoy and experience what we’ve been blessed
            with, we cannot afford not to do something today.” (4)
          </Text>
        </>
      ),
    },
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742266833/dz034ps1409_v9rkyg.jpg",
      alt: "An exterior view of the James and Anna Marie Spilker Engineering and Applied Science Building on Stanford University campus, showcasing its gorgeous architecture with a vibriant blue sky.",
      caption:
        "Exterior view of the James and Anna Marie Spilker Engineering and Applied Science Building. Opening in 2010, the 100,000-square-foot Spilker Building was the second of the four Science and Engineering Quad buildings to be completed. When it opened, it housed the independent E. L. Ginzton Laboratory, offices for the Department of Applied Physics, and nanoscale facilities. | Joel Simon/Stanford Engineering.",
    },
    {
      src: "https://res.cloudinary.com/duv7bozlj/image/upload/v1742265221/vr758kf1949_nv217v.jpg",
      alt: "A panoramic view of the Jen-Hsun Huang Engineering Center on Stanford University campus, showcasing its modern architecture and vibrant green spaces.",
      caption:
        "Exterior view of the Jen-Hsun Huang Engineering Center. The Huang Center opened in 2010 as the administrative headquarters for the School of Engineering. Its 130,000 square feet contain the dean’s suite, offices, classrooms, a conference center, a library, and a café. It also exhibits displays of major Stanford Engineering milestones, including the original Yahoo! servers. | Tim Griffith/School of Engineering.",
    },
  ];

  return (
    <div>
      <Masthead isOverlap />
      <StoryImpactBanner
        bgColor="stone-dark"
        heading="Exploring the reengineering of immune cells"
        superhead="Change Makers"
        body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
        byline="by Jess Alvarenga"
        src="/soe-centennial-nextjs/assets/images/lt-flynn-1994.jpeg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        alt={""}
      />

      <VerticalScrollGallery galleryImages={demoImages} />

      <TwoCol isSidebar>
        <Container width="wysiwyg">
          <Text className="type-3 intro-text">
            Overview style lorem ipsum dolar sit amet vestibulum parimentium
            elit rhoncus donec. Scelerisque urna et euismod in daphibus nec leo
            euismod nisi, pharetra raesent nec. Aliquam dignissim nisi convalis
            quis, leo vestibulum duis euismod.
          </Text>
          <Text className="big-paragraph">
            Long copy paragraph text style raesent nec dapibus odio. Aliquam
            dignissim nisi nisi, pharetra faucibus elit rhoncus in. Donec
            efficitur scelerisque urna et sollicitudin. Donec euismod enim a dui
            convallis, quis suscipit leo vestibulum. Duis aliquam euismod enim,
            sit amet
          </Text>
          <Heading>Header Two</Heading>
          <Text className="big-paragraph">
            Fusce sem enim, tempus nec massa id, mollis faucibus sem. Ut ipsum
            erat, imperdiet eu fermentum sed in text link. Praesent nec dapibus
            odio. Aliquam dignissim nisi nisi, pharetra faucibus elit rhoncus
            in. Donec efficitur scelerisque urna et sollicitudin. Duis aliquam
            euismod enim, sit amet in text link hover state. Aliquam sodales
            consequat arcu in egestas. Aliquam condimentum viverra eros.Donec
            efficitur scelerisque urna et sollicitudin. Duis aliquam euismod
            enim, sit amet.
          </Text>
          <Heading as="h3">Header Three</Heading>
          <Text className="big-paragraph">
            Aenean sollicitudin facilisis ex, in tincidunt velit sodales ac.
            Nullam consequat leo ut sem pharetra, a fringilla massa commodo.
            Etiam molestie, justo nec congue ultricies, augue massa tempus ante,
            nec sagittis dui tellus ac lectus. Duis aliquam euismod enim, sit
            amet lobortis ante porttitor. Donec efficitur scelerisque urna et
            sollicitudin. Duis aliquam euismod enim, sit amet.
          </Text>
        </Container>
      </TwoCol>
      <ContributeStoryBanner />
      <div id="example-storybanners">
        <StoryLineBanner
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          lineVariant="a"
        />

        <StoryLineBanner
          hasLineArt
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          lineVariant="a"
        />
        <StoryLineBanner
          hasLineArt
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          lineVariant="b"
        />

        <StoryLineBanner
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          lineVariant="b"
          bgColor="stone-dark"
        />
        <StoryLineBanner
          hasLineArt
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          lineVariant="a"
          bgColor="stone-dark"
        />
        <StoryLineBanner
          hasLineArt
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          lineVariant="b"
          bgColor="stone-dark"
        />
        <StoryImpactBanner
          bgColor="stone-dark"
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          hasBgImage
          bgColor="stone-dark"
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          bgColor="red"
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          hasBgImage
          bgColor="red"
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          isVertical
          bgColor="stone-dark"
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          isVertical
          hasBgImage
          bgColor="stone-dark"
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          isVertical
          bgColor="red"
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          isVertical
          hasBgImage
          bgColor="red"
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
        <StoryImpactBanner
          isVertical
          heading="Exploring the reengineering of immune cells"
          superhead="Change Makers"
          body="The Sarafan ChEM-H Institute scholar is building a multidisciplinary lab to explore the reengineering of immune cells. Before coming to Stanford, she says, “I was thinking in terms of understanding. Now I feel that I can start thinking in terms of creating."
          byline="by Jess Alvarenga"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986286/redevelopment_vprsob_erpl1p.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          alt={""}
        />
      </div>
      <div id="example-storycard">
        <Container width="site" py={6}>
          <StoryCard
            bgColor="blue"
            superhead="Change makers"
            heading="Untangling the web of racial inequality"
            body="Lorem ipsum dolor sit amet consectetur. Cursus aliquet neque at aliquet penatibus commodo."
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/1944_-_Stanford_Engineering_s_third_Dean_leujr9_dkho3h.jpg"
            href="/"
          />
        </Container>
        <Container width="site" pb={6}>
          <StoryCard
            bgColor="blue"
            superhead="Change makers"
            heading="Untangling the web of racial inequality"
            body="Lorem ipsum dolor sit amet consectetur. Cursus aliquet neque at aliquet penatibus commodo."
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/1944_-_Stanford_Engineering_s_third_Dean_leujr9_dkho3h.jpg"
            href="/"
            chapter="Chapter 1"
          />
        </Container>
        <ThreeCol>
          <StoryCard
            bgColor="blue"
            heading="Lorem ipsum dolor sit amet consect hendrerit"
            superhead="Change makers"
            body="Quisque ante nunc, luctus nec aliquet in, gravida sed dui. Mauris posuere luctus varius."
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/1944_-_Stanford_Engineering_s_third_Dean_leujr9_dkho3h.jpg"
            href="/"
            chapter="Chapter 1"
          />
          <StoryCard
            heading="Lorem ipsum dolor sit amet consect hendrerit"
            superhead="Change makers"
            body="Quisque ante nunc, luctus nec aliquet in, gravida sed dui. Mauris posuere luctus varius."
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/1944_-_Stanford_Engineering_s_third_Dean_leujr9_dkho3h.jpg"
            href="/"
          />
          <StoryCard
            heading="Lorem ipsum dolor sit amet consect hendrerit"
            superhead="Change makers"
            body="Quisque ante nunc, luctus nec aliquet in, gravida sed dui. Mauris posuere luctus varius."
            src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/1944_-_Stanford_Engineering_s_third_Dean_leujr9_dkho3h.jpg"
            href="/"
          />
        </ThreeCol>

        <StoryFeature>
          <TwoCol className="rs-mb-8 items-center max-w-[140rem]">
            <AnimateInView animation="slideUp" duration={2}>
              <Heading size="f5" weight="normal">
                Fundamental work in science and transformational breakthroughs
                for one hundred years.
              </Heading>
            </AnimateInView>
            <StoryCard
              isHeadingLarge
              animation="slideUp"
              duration={2}
              delay={0.5}
              superhead="Impact"
              heading="Lorem ipsum dolor sit amet consect hendrerit"
              src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986290/1944_-_Stanford_Engineering_s_third_Dean_leujr9_dkho3h.jpg"
              href="/"
              className="max-w-full"
            />
          </TwoCol>
          <ExploreMore stories={storyData} />
        </StoryFeature>
        <StoryPosterCard
          hasBgImage
          heading="“Preparing Roads over which Culture May Ride in Comfort”"
          dek="The 1st Decade"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          chapter="Chapter 1"
          href="/"
        />
        <StoryPosterCard
          bgColor="red"
          heading="“Preparing Roads over which Culture May Ride in Comfort”"
          dek="The 1st Decade"
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          href="/"
        />
        <StoryPosterCard
          hasBgImage
          bgColor="red"
          heading="The foundation of a new era in engineering"
          superhead="100 Years of Impact"
          body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          href="/"
        />
        <StoryPosterCard
          isNarrow
          heading="The foundation of a new era in engineering"
          superhead="100 Years of Impact (Narrow Example)"
          body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          href="/"
        />
        <StoryPosterCard
          isNarrow
          hasBgImage
          heading="The foundation of a new era in engineering"
          superhead="100 Years of Impact (Narrow Example)"
          body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          href="/"
        />
        <StoryPosterCard
          isNarrow
          bgColor="red"
          heading="The foundation of a new era in engineering"
          superhead="100 Years of Impact (Narrow Example)"
          body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          href="/"
        />
        <StoryPosterCard
          isNarrow
          hasBgImage
          bgColor="red"
          heading="The foundation of a new era in engineering"
          superhead="100 Years of Impact"
          body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
          src="https://res.cloudinary.com/duv7bozlj/image/upload/v1739986289/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd_tinfym.jpg"
          caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
          href="/"
        />
      </div>
    </div>
  );
};

export default ExampleStoryPage;
