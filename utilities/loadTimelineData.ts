import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export type TimelineItem = {
  year: string;
  heading: string;
  body: string;
  anchor: string;
  image: string;
  alt: string;
  uuid: string;
};

export async function loadTimelineData(): Promise<TimelineItem[]> {
  const filePath = path.join(process.cwd(), "data/timeline.json");

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsedData: unknown = JSON.parse(fileContents);

    if (!Array.isArray(parsedData)) {
      console.warn("Invalid data format: Expected an array of timeline items.");
      return [];
    }

    const allTimelineData = parsedData
      .filter(isTimelineItem)
      .map((item) => assignUuidAndAnchor(item));

    // Sort all timeline items by year
    allTimelineData.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    return allTimelineData;
  } catch (error) {
    console.error(`Error reading or parsing JSON file: ${filePath}`);
    console.error(error);
    return [];
  }
}

function sanitizeForUrl(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

function assignUuidAndAnchor(
  item: Omit<TimelineItem, "uuid" | "anchor">,
): TimelineItem {
  if (!item.heading) {
    throw new Error(`Missing heading for timeline item with year ${item.year}`);
  }

  const sanitizedHeading = sanitizeForUrl(item.heading);
  const anchor = `${item.year}-${sanitizedHeading}`;
  const uuid = uuidv4(); // Always generate a new UUID

  return { ...item, uuid, anchor };
}

function isTimelineItem(
  data: unknown,
): data is Omit<TimelineItem, "uuid" | "anchor"> {
  if (typeof data !== "object" || data === null) return false;

  const item = data as Partial<TimelineItem>;
  return (
    typeof item.year === "string" &&
    typeof item.heading === "string" &&
    typeof item.body === "string" &&
    typeof item.image === "string" &&
    typeof item.alt === "string"
  );
}
