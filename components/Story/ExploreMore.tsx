import React from "react";
import { ThreeCol } from "../Layout";
import { StoryCard, StoryCardProps } from "./StoryCard";
import { Container, WidthType } from "../Container";
import { Button } from "../Cta";
import { Heading } from "../Typography";

type ExploreMoreProps = {
  stories: StoryCardProps[];
  sectionHeading?: string;
  buttonText?: string;
  buttonLink?: string;
  width?: WidthType;
};

export const ExploreMore = ({
  stories,
  sectionHeading,
  buttonText,
  buttonLink,
  width,
  ...props
}: ExploreMoreProps) => {
  const delays = [0.8, 1.5, 0.5];

  return (
    <Container width={width || "full"} mb={10} className="py-20" {...props}>
      <Heading>{sectionHeading}</Heading>
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
      {buttonText && buttonLink && (
        <Button isLight href={buttonLink} className="mx-auto">
          {buttonText}
        </Button>
      )}
    </Container>
  );
};
