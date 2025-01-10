import { fetchStoryData } from "@/utilities/fetchStoryData";
import { renderDynamicComponent } from "@/utilities/renderDynamicComponent";
import { StoryData } from "@/types/storyPage";

interface StoryPageProps {
  params: { storySlug: string };
}

const StoryPage = async ({ params }: StoryPageProps) => {
  const storyData: StoryData | null = await fetchStoryData(params.storySlug);

  if (!storyData) {
    return <p>Story not found.</p>;
  }

  return (
    <div>
      {storyData.map((block, index) => (
        <div key={index}>{renderDynamicComponent(block.type, block.props)}</div>
      ))}
    </div>
  );
};

// Static generation for performance
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const storiesDir = path.join(process.cwd(), "data/stories");
  const files = await fs.promises.readdir(storiesDir);

  return files.map((file) => ({
    storySlug: file.replace(".json", ""),
  }));
}

export default StoryPage;
