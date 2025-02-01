import React from "react";
import { ThreeCol } from "../Layout";
import { StoryCard, StoryCardProps } from "./StoryCard";

export const ExploreMore = ({ stories }: { stories: StoryCardProps[] }) => {
  const delays = [0.8, 1.5, 0.5];

  return (
    <ThreeCol className="max-w-[140rem]">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          animation="slideUp"
          duration={2}
          delay={delays[index] || 0.5}
          {...story}
        />
      ))}
    </ThreeCol>
  );
};
