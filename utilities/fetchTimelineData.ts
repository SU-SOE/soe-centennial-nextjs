import { TimelineCardProps } from "@/components/Timeline";
import { loadTimelineData } from "./loadTimelineData";

async function fetchTimelineData(uuids: string | string[]) {
  // Ensure we always work with an array
  const uuidArray = Array.isArray(uuids) ? uuids : [uuids];
  // Fetch the timeline data
  const timelineData: TimelineCardProps[] = await loadTimelineData();

  // Filter timeline items based on the provided UUIDs
  const filteredData = timelineData.filter((item) =>
    uuidArray.includes(item.anchor),
  );

  // Return a single item if only one UUID was provided, otherwise return an array
  return Array.isArray(uuids) ? filteredData : filteredData[0];
}

export default fetchTimelineData;
