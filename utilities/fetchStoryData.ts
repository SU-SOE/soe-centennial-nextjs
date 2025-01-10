import fs from "fs";
import path from "path";
import { StoryData } from "@/types/storyPage";

export async function fetchStoryData(slug: string): Promise<StoryData | null> {
  try {
    const filePath = path.join(process.cwd(), "data/stories", `${slug}.json`);
    const fileContents = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(fileContents) as StoryData;
  } catch (error) {
    console.error(`Error fetching story data for slug "${slug}":`, error);
    return null;
  }
}
