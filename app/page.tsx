import { Masthead } from "@/components/Masthead";
import { TimelineCard } from "@/components/Timeline";
import { PageTitle } from "@/components/PageTitle";
import { TimelineFeature } from "@/components/Timeline/TimelineFeature";
import { ThreeCol } from "@/components/Layout";
import { StoryCard } from "@/components/StoryCard";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <div>
      <Masthead isLight />
      <PageTitle heading="100 years of" bigText="Impact" />
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
      <TimelineFeature uuids={[12, 3, 10, 4]} />
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
        <StoryCard
          heading="Lorem ipsum dolor sit amet consect hendrerit"
          superhead="Change makers"
          body="Quisque ante nunc, luctus nec aliquet in, gravida sed dui. Mauris posuere luctus varius."
          imageUrl="https://placecats.com/neo_banana/300/200"
          href="/"
        />
      </ThreeCol>
    </div>
  );
}
