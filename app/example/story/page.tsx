import { Heading, Text } from "@/components/Typography";
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
import { ThreeCol, TwoCol } from "@/components/Layout";
import { AnimateInView } from "@/components/Animate";
import { ExploreMore } from "@/components/Story/ExploreMore";
import { Metadata } from "next";

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
