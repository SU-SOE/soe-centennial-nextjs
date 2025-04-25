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
import { BgColorType, Container, WidthType } from "../Container";
import { Button } from "../Cta";
import { Heading } from "../Typography";
import { cnb } from "cnbuilder";

type ExploreMoreProps = HTMLAttributes<HTMLDivElement> & {
  stories: StoryCardProps[];
  cardBgColor?: BgColorType;
  sectionHeading?: string;
  headerTag?: "h2" | "h3";
  hasButton?: boolean;
  width?: WidthType;
  isThreeCol?: boolean;
};

export const ExploreMore = ({
  className,
  cardBgColor = "blue",
  stories,
  sectionHeading,
  headerTag,
  hasButton,
  width,
  isThreeCol,
  ...props
}: ExploreMoreProps) => {
  const delays = [0.25, 0.5, 0.75];
  const AsComponent = isThreeCol ? ThreeCol : TwoCol;
  const wrapper = sectionHeading ? "article" : "div";

  return (
    <Container
      as={wrapper}
      {...props}
      width={width || "full"}
      className={cnb("rs-my-7", className)}
    >
      {sectionHeading && <Heading>{sectionHeading}</Heading>}
      <AsComponent as="ul" className="max-w-[140rem] list-none">
        {stories.map((story, index) => (
          <StoryCard
            as="li"
            key={index}
            bgColor={cardBgColor}
            headerTag={headerTag || "h3"}
            animation="slideUp"
            delay={delays[index] || 0.3}
            {...story}
          />
        ))}
      </AsComponent>
      {hasButton && (
        <Button isLight href="/stories" className="mx-auto rs-mt-5">
          Explore all decade stories
        </Button>
      )}
    </Container>
  );
};
