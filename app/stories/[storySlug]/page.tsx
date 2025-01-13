import { fetchStoryData } from "@/utilities/fetchStoryData";
import { renderDynamicComponent } from "@/utilities/renderDynamicComponent";
import { StoryData } from "@/types/storyPage";
import fs from "fs";
import path from "path";
import { Container } from "@/components/Container";
import { addIdsToValidObjects } from "@/utilities/addIdsToValidObjects";

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
  const rawStoryData: StoryData | null = await fetchStoryData(
    (await params).storySlug,
  );

  if (!rawStoryData) {
    return <p>Story not found.</p>;
  }

  const storyData = addIdsToValidObjects(rawStoryData);

  // Find the ID of the first object with a valid ID
  const firstObjectId = storyData.find((block) => block.props?.id)?.props.id;

  return (
    <Container as="article" width="full" aria-labelledby={firstObjectId}>
      {storyData.map((block, index) => {
        return (
          <div key={index}>
            {renderDynamicComponent(block.type, block.props)}
          </div>
        );
      })}
    </Container>
  );
}
