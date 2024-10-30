import { Masthead } from "@/components/Masthead";
import { TimelineBanner } from "@/components/TimelineBanner";
import { PageTitle } from "@/components/PageTitle";

export default function Home() {
  return (
    <div>
      <Masthead isLight />
      <PageTitle heading="100 years of" bigText="Impact" />
      <TimelineBanner
        heading="The first African-American woman in space"
        year="1983"
        body="Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id mi blandit lobortis eget in enim."
        image="https://airandspace.si.edu/sites/default/files/styles/slideshow_basic/public/images/NASA%20166851h.jpg?itok=yL6MTpUr"
        width="narrow"
      />
      <TimelineBanner
        heading="First remote classs from the Stanford Instructional Television Network"
        year="1969"
        body="Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. Cras nec dui id mi blandit lobortis eget in enim."
        image="https://images.unsplash.com/photo-1491770042090-0810a7e20f46?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        align="right"
        width="narrow"
      />
      <TimelineBanner
        heading="The Stanford Dish Radiotelescope completed in 1962"
        year="1983"
        body="Enabling vastly expanded studies of scattering effects in the earth’s ionosphere and was used to detect Soviet radar and still used today for satellite calibrations, spacecraft command and telemetry, and radio astronomy measurements."
        image="https://airandspace.si.edu/sites/default/files/styles/slideshow_basic/public/images/NASA%20166851h.jpg?itok=yL6MTpUr"
        width="narrow"
      />
    </div>
  );
}
