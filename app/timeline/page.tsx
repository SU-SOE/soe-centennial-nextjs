import { Masthead } from '@/components/Masthead';
import TimelineOverview from '@/components/Timeline/TimelineOverview';
import { loadTimelineData } from '@/utilities/loadTimelineData';

const TimelinePage = async () => {
  const timelineData = await loadTimelineData();
  return (
    <div>
      <Masthead isLight />
      <TimelineOverview timelineData={timelineData}  />
    </div>
  );
};

export default TimelinePage;