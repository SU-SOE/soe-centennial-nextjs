import { Container } from "@/components/Container";
import { Masthead } from "@/components/Masthead";
import { StoryCard, StoryPosterCard } from "@/components/Story";
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
      <StoryPosterCard
        heading="The foundation of a new era in engineering"
        superhead="100 Years of Impact"
        body="The education of engineers had been a founding intention for the university, with an engineering curriculum in place since its inception."
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1734567986/1926_-_The_largest_university_electrical_lab_of_its_time_c3orrt.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        chapter="Chapter 1"
        link="/"
      />
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
