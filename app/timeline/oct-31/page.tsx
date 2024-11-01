import { Masthead } from "@/components/Masthead";
import { PageTitle } from "@/components/PageTitle";
import TimelineOverview from "@/components/TimelineEven/TimelineOverview";
import { loadTimelineData } from "@/utilities/loadTimelineData";

const TimelineEvenPage = async () => {
  const timelineData = await loadTimelineData();
  return (
    <div>
      <Masthead isLight />
      <PageTitle heading="100 years of" bigText="Impact" />
      <TimelineOverview timelineData={timelineData} hasBorder />
      <PageTitle heading="100 years of" bigText="Impact" />
      <TimelineOverview timelineData={timelineData} />
    </div>
  );
};

export default TimelineEvenPage;
