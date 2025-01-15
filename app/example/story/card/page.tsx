import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { ThreeCol, TwoCol } from "@/components/Layout";
import { Masthead } from "@/components/Masthead";
import { StoryCard, StoryFeature, StoryPosterCard } from "@/components/Story";
import { Heading, Text } from "@/components/Typography";

const ExampleCardPage = async () => {
  return (
    <div>
      <Masthead isLight />

      <Container width="site" py={6}>
        <StoryCard
          isHorizontal
          bgColor="blue"
          heading="Untangling the web of racial inequality"
          body="Lorem ipsum dolor sit amet consectetur. Cursus aliquet neque at aliquet penatibus commodo."
          imageUrl="https://placecats.com/neo_banana/300/200"
          href="/"
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
          <FlexBox direction="col">
            <Heading size="f4" weight="normal" className="rs-mr-8">
              Fundamental work in science and transformational breakthroughs for
              one hundred years.
            </Heading>
            <Text className="order-first" mb={2} font="dm-mono">
              Stories
            </Text>
          </FlexBox>
          <StoryCard
            superhead="Impact"
            heading="Lorem ipsum dolor sit amet consect hendrerit"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
            className="max-w-full"
            chapter="1985 - 1994"
          />
        </TwoCol>
        <ThreeCol>
          <StoryCard
            superhead="Change makers"
            heading="The Foundation of a New Era in Engineering"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
            chapter="Innovation"
          />
          <StoryCard
            superhead="Change makers"
            heading="Computation, outer space, the nanoscale, and the fragility of planet Earth"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
            chapter="1985 - 1994"
          />
          <StoryCard
            superhead="Change makers"
            heading="Mae Jemison: “We each get a chance to choose our own path”"
            imageUrl="https://placecats.com/neo_banana/300/200"
            href="/"
            chapter="1985 - 1994"
          />
        </ThreeCol>
      </StoryFeature>
      <StoryPosterCard
        hasBgImage
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1734567986/1926_-_The_largest_university_electrical_lab_of_its_time_c3orrt.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        chapter="Chapter 1"
        link="/"
      />
      <StoryPosterCard
        bgColor="red"
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://i.ibb.co/bX4ysck/1926-The-largest-university-electrical-lab-of-its-time.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        hasBgImage
        bgColor="red"
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://i.ibb.co/bX4ysck/1926-The-largest-university-electrical-lab-of-its-time.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        isNarrow
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact (Narrow Example)"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1734567986/1926_-_The_largest_university_electrical_lab_of_its_time_c3orrt.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        isNarrow
        hasBgImage
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact (Narrow Example)"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1734567986/1926_-_The_largest_university_electrical_lab_of_its_time_c3orrt.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
      <StoryPosterCard
        isNarrow
        bgColor="red"
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact (Narrow Example)"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1734567986/1926_-_The_largest_university_electrical_lab_of_its_time_c3orrt.jpg"
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
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1734567986/1926_-_The_largest_university_electrical_lab_of_its_time_c3orrt.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        link="/"
      />
    </div>
  );
};

export default ExampleCardPage;
