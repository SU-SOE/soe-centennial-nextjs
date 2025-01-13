/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ComponentProps {
  [key: string]: any; // General props for any component
}

export interface StoryComponent {
  id: string;
  type: string; // e.g., "StoryImpactBanner", "TwoCol"
  props: ComponentProps; // Props specific to the component
}

export type StoryData = StoryComponent[];
