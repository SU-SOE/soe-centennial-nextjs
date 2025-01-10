import { Masthead } from "@/components/Masthead";
import { TimelineCard } from "@/components/Timeline";
import { PageTitle } from "@/components/PageTitle";
import { TimelineFeature } from "@/components/Timeline/TimelineFeature";
import { StoryCard, StoryPosterCard } from "@/components/Story";
import { Container } from "@/components/Container";
import Metadata from "@/components/Layout/Metadata";

export default function Home() {
  const timelineCardItems = [
    "1937-foundational-technology-in-the-burgeoning-microwave-industry",
    "1910-1915-the-engineering-corner",
    "1943-training-for-war",
    "1939-aviation-and-aeronautical-engineering",
    "1944-stanford-engineerings-third-dean",
  ];
  return (
    <div>
      <Metadata
        isHome
        title="100 years of Impact"
        description="Lorem ipsum curabitur blandit mollis lacus. Curabitur ullamcorper ultricies nisi."
      />
      <Masthead isLight bgColor="fog-light" />
      <PageTitle heading="100 years of" bigText="Impact" />
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
      <TimelineCard
        isHorizontal
        heading="The first African-American woman in space"
        year="1983"
        body="Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id mi blandit lobortis eget in enim."
        image="https://airandspace.si.edu/sites/default/files/styles/slideshow_basic/public/images/NASA%20166851h.jpg?itok=yL6MTpUr"
        width="site"
      />
      <TimelineCard
        isHorizontal
        heading="First remote classs from the Stanford Instructional Television Network"
        year="1969"
        body="Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id mi blandit lobortis eget in enim."
        image="https://images.unsplash.com/photo-1491770042090-0810a7e20f46?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        align="right"
        width="site"
      />
      <TimelineCard
        isHorizontal
        heading="The Stanford Dish Radiotelescope completed in 1962"
        year="1983"
        body="Enabling vastly expanded studies of scattering effects in the earth’s ionosphere and was used to detect Soviet radar and still used today for satellite calibrations, spacecraft command and telemetry, and radio astronomy measurements."
        image="https://airandspace.si.edu/sites/default/files/styles/slideshow_basic/public/images/NASA%20166851h.jpg?itok=yL6MTpUr"
        width="site"
      />
      <TimelineFeature anchors={timelineCardItems} />
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
    </div>
  );
}
