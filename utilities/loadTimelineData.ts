import fs from "fs";
import path from "path";

type TimelineItem = {
  year: string;
  heading: string;
  dek: string;
  body: string;
  href?: string;
  image: string;
};

export async function loadTimelineData(): Promise<TimelineItem[]> {
  const directoryPath = path.join(process.cwd(), "data/timeline");
  const fileNames = fs.readdirSync(directoryPath);

  const timelineData: TimelineItem[] = fileNames.map((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents) as TimelineItem;
  });

  timelineData.sort((a, b) => parseInt(a.year) - parseInt(b.year));
  return timelineData;
}
