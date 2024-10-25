import { TimelineBanner } from '@/components/TimelineBanner';
import { Masthead } from '@/components/Masthead';
import TimelineOverview from '@/components/Timeline/TimelineOverview';

export default function Home() {
  return (
    <div>
      <Masthead />
      <TimelineOverview />
    </div>
  );
}
