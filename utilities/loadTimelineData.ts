import fs from "fs";
import path from "path";

type TimelineItem = {
  year: string;
  heading: string;
  dek: string;
  body: string;
  href?: string;
  image: string;
  uuid: number;
};

export async function loadTimelineData(): Promise<TimelineItem[]> {
  const directoryPath = path.join(process.cwd(), "data/timeline");
  const fileNames = fs.readdirSync(directoryPath);

  const timelineData: TimelineItem[] = fileNames.flatMap((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse the JSON file content
    const parsedData: unknown = JSON.parse(fileContents);

    if (Array.isArray(parsedData)) {
      // Validate and return if the data is an array of TimelineItem
      return parsedData.filter(isTimelineItem);
    } else if (isTimelineItem(parsedData)) {
      // Return single object as an array if it is a valid TimelineItem
      return [parsedData];
    } else {
      console.warn(`Invalid data format in file: ${fileName}`);
      return [];
    }
  });

  // Sort the combined timeline data by year
  timelineData.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return timelineData;
}

// Type guard to ensure parsed data matches TimelineItem type
function isTimelineItem(data: unknown): data is TimelineItem {
  if (typeof data !== "object" || data === null) return false;

  const item = data as Partial<TimelineItem>;
  return (
    typeof item.year === "string" &&
    typeof item.heading === "string" &&
    typeof item.dek === "string" &&
    typeof item.body === "string" &&
    typeof item.uuid === "number" &&
    (item.href === undefined || typeof item.href === "string") &&
    typeof item.image === "string"
  );
}
