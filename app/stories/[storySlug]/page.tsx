import { fetchStoryData } from "@/utilities/fetchStoryData";
import { renderDynamicComponent } from "@/utilities/renderDynamicComponent";
import { StoryData } from "@/types/storyPage";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const storiesDir = path.join(process.cwd(), "data/stories");
  const stories = await fs.promises.readdir(storiesDir);

  return stories.map((file) => ({
    storySlug: file.replace(".json", ""),
  }));
}

type StoryPageProps = {
  params: Promise<{ storySlug: string }>;
};

export default async function StoryPage({ params }: StoryPageProps) {
  const storyData: StoryData | null = await fetchStoryData(
    (await params).storySlug,
  );

  if (!storyData) {
    return <p>Story not found.</p>;
  }

  return (
    <div>
      {storyData.map((block, index) => {
        return (
          <div key={index}>
            {renderDynamicComponent(block.type, block.props)}
          </div>
        );
      })}
    </div>
  );
}
