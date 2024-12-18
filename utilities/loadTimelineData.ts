import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export type TimelineItem = {
  year: string;
  heading: string;
  body: string;
  anchor: string;
  image: string;
  uuid: string;
};

export async function loadTimelineData(): Promise<TimelineItem[]> {
  const baseDirectory = path.join(process.cwd(), "data/timeline");
  const decadeDirectories = fs.readdirSync(baseDirectory);

  const allTimelineData: TimelineItem[] = [];

  for (const decadeDir of decadeDirectories) {
    const decadePath = path.join(baseDirectory, decadeDir);

    // Skip if it's not a directory
    if (!fs.statSync(decadePath).isDirectory()) {
      console.warn(`Skipping non-directory: ${decadeDir}`);
      continue;
    }

    const files = fs.readdirSync(decadePath);

    for (const file of files) {
      const filePath = path.join(decadePath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");

      try {
        const parsedData: unknown = JSON.parse(fileContents);

        // Handle arrays or single objects
        if (Array.isArray(parsedData)) {
          const validatedItems = parsedData
            .filter(isTimelineItem)
            .map(assignUuidAndAnchor);
          allTimelineData.push(...validatedItems);
        } else if (isTimelineItem(parsedData)) {
          allTimelineData.push(assignUuidAndAnchor(parsedData));
        } else {
          console.warn(`Invalid data format in file: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error parsing JSON in file: ${filePath}`);
        console.error(error);
      }
    }
  }

  // Sort all timeline items by year
  allTimelineData.sort((a, b) => parseInt(a.year) - parseInt(b.year));
  return allTimelineData;
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

function sanitizeForUrl(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
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
    typeof item.image === "string"
  );
}
