/**
 * The `ExploreMore` component displays a section with a heading, a grid of story cards,
 * and an optional button for additional actions. It is designed to showcase a collection
 * of stories in a visually appealing layout.
 *
 * @param {ExploreMoreProps} props - The props for the `ExploreMore` component.
 * @param {StoryCardProps[]} props.stories - An array of story data to be displayed as cards.
 * @param {string} [props.sectionHeading] - An optional heading for the section.
 * @param {string} [props.buttonText] - Optional text for the button displayed below the stories.
 * @param {string} [props.buttonLink] - Optional link for the button.
 * @param {WidthType} [props.width] - The width of the container. Defaults to "full".
 * @param {object} [props.props] - Additional props to be passed to the container.
 *
 * @returns {JSX.Element} A container with a heading, a grid of story cards, and an optional button.
 *
 * Example:
 * <ExploreMore stories={storyData} />
 */
import React, { HTMLAttributes } from "react";
import { TwoCol, ThreeCol } from "../Layout";
import { StoryCard, StoryCardProps } from "./StoryCard";
import { Container, WidthType } from "../Container";
import { Button } from "../Cta";
import { Heading } from "../Typography";
import { cnb } from "cnbuilder";

type ExploreMoreProps = HTMLAttributes<HTMLDivElement> & {
  stories: StoryCardProps[];
  sectionHeading?: string;
  buttonText?: string;
  buttonLink?: string;
  width?: WidthType;
  isThreeCol?: boolean;
};

export const ExploreMore = ({
  className,
  stories,
  sectionHeading,
  buttonText,
  buttonLink,
  width,
  isThreeCol,
  ...props
}: ExploreMoreProps) => {
  const delays = [0.25, 0.5, 0.75];
  const AsComponent = isThreeCol ? ThreeCol : TwoCol;

  return (
    <Container
      {...props}
      width={width || "full"}
      className={cnb("rs-mt-7 rs-mb-10", className)}
    >
      {sectionHeading && <Heading>{sectionHeading}</Heading>}
      <AsComponent className="max-w-[140rem]">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            bgColor="blue"
            headerTag="h3"
            animation="slideUp"
            delay={delays[index] || 0.3}
            {...story}
          />
        ))}
      </AsComponent>
      {buttonText && buttonLink && (
        <Button isLight href={buttonLink} className="mx-auto rs-mt-5">
          {buttonText}
        </Button>
      )}
    </Container>
  );
};
