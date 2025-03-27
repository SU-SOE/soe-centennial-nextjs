import fs from "fs";
import path from "path";

export type TimelineItem = {
  year: string;
  heading: string;
  body: string;
  anchor: string;
  image: string;
  alt: string;
  uuid: string;
};

export async function loadTimelineData() {
  const isPreviewOrDev =
    process.env.VERCEL_ENV === "preview" ||
    process.env.NODE_ENV === "development";

  const filePath = path.join(
    process.cwd(),
    isPreviewOrDev ? "data/timeline-backup.json" : "data/timeline.json",
  );

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsedData: unknown = JSON.parse(fileContents);

    if (!Array.isArray(parsedData)) {
      console.warn("Invalid data format: Expected an array of timeline items.");
      return [];
    }

    return parsedData.filter(isTimelineItem);
  } catch (error) {
    console.error(`Error reading or parsing JSON file: ${filePath}`);
    console.error(error);
    return [];
  }
}

function isTimelineItem(data: unknown): data is TimelineItem {
  if (typeof data !== "object" || data === null) return false;
  const item = data as Partial<TimelineItem>;
  const isValid =
    typeof item.year === "string" &&
    typeof item.heading === "string" &&
    typeof item.body === "string" &&
    typeof item.image === "string" &&
    typeof item.alt === "string";

  if (!isValid) {
    console.warn("Invalid timeline item found:", item);
  }

  return isValid;
}
