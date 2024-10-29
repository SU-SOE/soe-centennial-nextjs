import { Masthead } from '@/components/Masthead';
import { PageTitle } from '@/components/PageTitle';
import TimelineOverview from '@/components/Timeline/TimelineOverview';
import { loadTimelineData } from '@/utilities/loadTimelineData';

const TimelinePage = async () => {
  const timelineData = await loadTimelineData();
  return (
    <div>
      <Masthead isLight />
      <PageTitle heading="100 years of" bigText="Impact" />
      <TimelineOverview timelineData={timelineData}  />
    </div>
  );
};

export default TimelinePage;