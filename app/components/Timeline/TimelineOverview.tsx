"use client";

import { Container } from "@/components/Container";
import { TimelineItem } from "./TimelineItem";
import { SizeType } from "./TimelineItem.types";
import { cnb } from "cnbuilder";

type TimelineItemData = {
  year: string;
  heading: string;
  dek: string;
  body: string;
  href?: string;
  image: string;
};

type TimelineProps = {
  timelineData: TimelineItemData[];
  hasBorder?: boolean;
};

// Helper function to generate a random delay between a specified range
function getRandomDelay(min = 0.5, max = 5) {
  return Math.random() * (max - min) + min;
}

// Animation variant with random delay for overlay fade-out
const overlayFadeOutVariant = {
  visible: { opacity: 1 },
  hidden: (custom: number) => ({
    opacity: 0,
    transition: {
      duration: 1,
      delay: custom, // Use the random delay
    },
  }),
};

const TimelineOverview = ({ timelineData, hasBorder }: TimelineProps) => {
  const sizePattern: SizeType[] = ["large", "medium", "small"];

  return (
    <Container width="site" py={5} bgColor="fog-light" className="mb-50">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {timelineData.map((item, idx) => {
          const trapezoid = idx % 2 === 0 ? "right" : "left";
          const size = sizePattern[idx % sizePattern.length];
          const randomDelay = getRandomDelay();

          return (
            <TimelineItem
              key={idx}
              {...item}
              size={size}
              trapezoid={trapezoid}
              className={cnb(
                "rs-pb-3 rs-pt-5 rs-px-4",
                hasBorder &&
                  "border-r-3 border-black nth-2n:border-0 md:nth-2n:border-r-3 md:nth-3n:border-0 xl:nth-3n:border-r-3 xl:nth-4n:border-0",
              )}
              animationProps={{
                custom: randomDelay,
                initial: "visible",
                animate: "hidden",
                exit: "visible",
                variants: overlayFadeOutVariant,
              }}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default TimelineOverview;
