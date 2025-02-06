import { AnimateInView } from "@/components/Animate";
import { Container } from "@/components/Container";
import { ThreeCol, TwoCol } from "@/components/Layout";
import { Masthead } from "@/components/Masthead";
import { StoryCard, StoryFeature, StoryPosterCard } from "@/components/Story";
import { Heading } from "@/components/Typography";

const ExampleCardPage = async () => {
  return (
    <div>
      <Masthead isLight />

      <Container width="site" py={6}>
        <StoryCard
          isHorizontal
          bgColor="blue"
          superhead="Change makers"
          heading="Untangling the web of racial inequality"
          body="Lorem ipsum dolor sit amet consectetur. Cursus aliquet neque at aliquet penatibus commodo."
          imageUrl="https://placecats.com/neo_banana/300/200"
          href="/"
        />
      </Container>
      <Container width="site" pb={6}>
        <StoryCard
          isHorizontal
          bgColor="blue"
          superhead="Change makers"
          heading="Untangling the web of racial inequality"
          body="Lorem ipsum dolor sit amet consectetur. Cursus aliquet neque at aliquet penatibus commodo."
          imageUrl="https://placecats.com/neo_banana/300/200"
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
          imageUrl="https://placecats.com/neo_banana/300/200"
          href="/"
          chapter="Chapter 1"
        />
        <StoryCard
          heading="Lorem ipsum dolor sit amet consect hendrerit"
          superhead="Change makers"
          body="Quisque ante nunc, luctus nec aliquet in, gravida sed dui. Mauris posuere luctus varius."
          imageUrl="https://placecats.com/neo_banana/300/200"
          href="/"
        />
        <StoryCard
          heading="Lorem ipsum dolor sit amet consect hendrerit"
          superhead="Change makers"
          body="Quisque ante nunc, luctus nec aliquet in, gravida sed dui. Mauris posuere luctus varius."
          imageUrl="https://placecats.com/neo_banana/300/200"
          href="/"
        />
      </ThreeCol>

      <StoryFeature>
        <TwoCol className="rs-mb-8 items-center">
          <AnimateInView animation="slideUp" duration={2}>
            <Heading size={5} weight="normal" className="rs-mr-8">
              Fundamental work in science and transformational breakthroughs for
              one hundred years.
            </Heading>
          </AnimateInView>
          <StoryCard
            isHeadingLarge
            animation="slideUp"
            duration={2}
            delay={0.5}
            superhead="Impact"
            heading="Lorem ipsum dolor sit amet consect hendrerit"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
            className="max-w-full"
          />
        </TwoCol>
        <ThreeCol>
          <StoryCard
            animation="slideUp"
            duration={2}
            delay={0.8}
            heading="New Spaces and Expanding Influence"
            superhead="The 5th Decade"
            chapter="Chapter 5"
            href="/"
            imageUrl="https://res.cloudinary.com/dsqi5touf/image/upload/v1738861405/new-spaces-and-expanding-influence_dcvv7j.jpg"
          />
          <StoryCard
            animation="slideUp"
            duration={2}
            delay={1.5}
            heading="Bridging Worlds: Chips, Code, and Cosmos"
            superhead="The 6th Decade"
            chapter="Chapter 6"
            href="/"
            imageUrl="https://res.cloudinary.com/dsqi5touf/image/upload/v1738861404/bridging-worlds_ma3ixq.jpg"
          />
          <StoryCard
            animation="slideUp"
            duration={2}
            delay={0.5}
            heading="Redevelopment and an Earthquake"
            superhead="The 7th Decade"
            chapter="Chapter 7"
            href="/"
            imageUrl="https://res.cloudinary.com/dsqi5touf/image/upload/v1738861405/redevelopment_vprsob.jpg"
          />
        </ThreeCol>
      </StoryFeature>
      <StoryPosterCard
        hasBgImage
        heading="“Preparing Roads over which Culture May Ride in Comfort”"
        dek="The 1st Decade"
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        chapter="Chapter 1"
        link="/"
      />
      <StoryPosterCard
        bgColor="red"
        heading="“Preparing Roads over which Culture May Ride in Comfort”"
        dek="The 1st Decade"
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        hasBgImage
        bgColor="red"
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        isNarrow
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact (Narrow Example)"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        isNarrow
        hasBgImage
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact (Narrow Example)"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        isNarrow
        bgColor="red"
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact (Narrow Example)"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        isNarrow
        hasBgImage
        bgColor="red"
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
    </div>
  );
};

export default ExampleCardPage;
