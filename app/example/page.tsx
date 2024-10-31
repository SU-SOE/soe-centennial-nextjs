import { Heading, Text } from "@/components/Typography";
import { ShapeAnimation } from "@/components/ShapeAnimation";
import { Masthead } from "@/components/Masthead";
import { FeatureHero } from "@/components/FeatureHero";
import { PageTitle } from "@/components/PageTitle";
import TimelineOverview from "@/components/Timeline/TimelineOverview";
import { loadTimelineData } from "@/utilities/loadTimelineData";
import { GradientBanner } from "@/components/GradientBanner/GradientBanner";
import TimelineEven from "@/components/TimelineEven/TimelineOverview";

const ExamplePage = async () => {
  const timelineData = await loadTimelineData();
  return (
    <div>
      <Masthead />
      <FeatureHero>
        <Heading
          as="h1"
          leading="none"
          className="2xl:whitespace-pre-line font-normal -mt-01em rs-mb-8 xl:max-w-1200"
        >
          Exploring the reengineering of immune cells
        </Heading>
        <Text
          variant="overview"
          weight="normal"
          className="order-first mb-38 underline underline-offset-[6px] decoration-2 decoration-digital-red-xlight"
        >
          Change Makers
        </Text>
        <Text
          variant="overview"
          weight="normal"
          className="max-w-[50ch] rs-mb-3 *:*:leading-snug"
        >
          The Sarafan ChEM-H Institute scholar is building a multidisciplinary
          lab to explore the reengineering of immune cells. Before coming to
          Stanford, she says, “I was thinking in terms of understanding. Now I
          feel that I can start thinking in terms of creating.”
        </Text>
        <Text
          variant="overview"
          weight="normal"
          className="max-w-[50ch] rs-mb-3 *:*:leading-snug"
        >
          by Jess Alvarenga
        </Text>
      </FeatureHero>
      <ShapeAnimation />
      <PageTitle heading="100 years of" bigText="Impact" />
      <GradientBanner>
        <Heading
          as="h1"
          leading="none"
          className="2xl:whitespace-pre-line font-normal -mt-01em rs-mb-8 xl:max-w-1200"
        >
          Events
        </Heading>
        <div className="grid grid-cols-2 gap-[15.8rem]">
          <Text>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            hymenaeos. Quisque libero metus, condimentum nec, tempor a, commodo
            mollis, magna. Ut a nisl id ante tempus hendrerit. Nunc sed turpis.
          </Text>
          <Text>
            Vivamus consectetuer hendrerit lacus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Donec vitae orci sed dolor rutrum auctor. Nunc
            interdum lacus sit amet orci. Proin pretium, leo ac pellentesque
            mollis, felis nunc ultrices eros, sed gravida augue augue mollis
            justo.
          </Text>
        </div>
      </GradientBanner>
      <TimelineOverview timelineData={timelineData} />
      <TimelineEven timelineData={timelineData} />
    </div>
  );
};

export default ExamplePage;
