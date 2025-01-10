/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy, Suspense } from "react";

const componentMap: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  StoryImpactBanner: lazy(() =>
    import("@/components/Story/StoryImpactBanner").then((mod) => ({
      default: mod.StoryImpactBanner,
    })),
  ),
  StoryCard: lazy(() =>
    import("@/components/Story/StoryCard").then((mod) => ({
      default: mod.StoryCard,
    })),
  ),
  StorySidebar: lazy(() =>
    import("@/components/Story/StorySidebar").then((mod) => ({
      default: mod.StorySidebar,
    })),
  ),
  OneCol: lazy(() =>
    import("@/components/Layout/OneCol").then((mod) => ({
      default: mod.OneCol,
    })),
  ),
  TwoCol: lazy(() =>
    import("@/components/Layout/TwoCol").then((mod) => ({
      default: mod.TwoCol,
    })),
  ),
  ThreeCol: lazy(() =>
    import("@/components/Layout/ThreeCol").then((mod) => ({
      default: mod.ThreeCol,
    })),
  ),
  Text: lazy(() =>
    import("@/components/Typography/Text").then((mod) => ({
      default: mod.Text,
    })),
  ),
  Heading: lazy(() =>
    import("@/components/Typography/Heading").then((mod) => ({
      default: mod.Heading,
    })),
  ),
};

export function renderDynamicComponent(type: string, props: any) {
  const Component = componentMap[type];
  if (!Component) {
    console.warn(`No component found for type: ${type}`);
    return null;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
