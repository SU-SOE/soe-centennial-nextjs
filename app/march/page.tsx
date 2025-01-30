import { Masthead } from "@/components/Masthead";
import { PageTitle } from "@/components/PageTitle";
import { StoryPosterCard } from "@/components/Story";
import Metadata from "@/components/Layout/Metadata";
import { ContributeStoryBanner } from "@/components/ContributeStoryBanner";
import { EventsSection } from "@/components/Event";

export default function MvpHome() {
  const events = [
    {
      heading: "Lorem ipsum dolar sit amet",
      superhead: "Monday, May 15",
      body: "Cras felis tortor, bibendum quis porttitor at, ullamcorper eu diam. Aenean iaculis efficitur quam, quis dignissim lacus. ",
      href: "/",
    },
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
        heading="“Preparing Roads over which Culture May Ride in Comfort”"
        dek="The 1st Decade"
        src="https://res.cloudinary.com/dsqi5touf/image/upload/v1737060927/1926_-_The_largest_university_electrical_lab_of_its_time_xdomjd.jpg"
        caption="Caption/credit lorem ipsum dolar sit amet vestibulum perimentium"
        chapter="Chapter 1"
        link="/"
        hasBgImage
      />
      <EventsSection events={events} />
      <ContributeStoryBanner bgColor="blue" />
    </div>
  );
}
