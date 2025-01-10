/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Heading, Text } from "@/components/Typography";
import {
  StoryCard,
  StoryImpactBanner,
  StoryLineBanner,
  StoryPosterCard,
  StorySidebar,
} from "@/components/Story";
import { OneCol, ThreeCol, TwoCol } from "@/components/Layout";

const componentMap: Record<string, React.ElementType<any>> = {
  Heading,
  Text,
  StoryCard,
  StoryPosterCard,
  StoryImpactBanner,
  StoryLineBanner,
  StorySidebar,
  OneCol,
  TwoCol,
  ThreeCol,
};

export const renderDynamicComponent = (
  type: string,
  props: Record<string, any>,
): React.ReactNode => {
  const Component = componentMap[type];

  if (!Component) {
    console.warn(`No component found for type: ${type}`);
    return null;
  }

  return <Component {...props} />;
};
