"use client";

import { Container } from "@/components/Container";
import TimelineItem from "./TimelineItem";
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

const TimelineEven = ({ timelineData, hasBorder }: TimelineProps) => {
  const sizePattern: SizeType[] = ["large", "medium", "small"];

  return (
    <Container width="site" py={5} bgColor="fog-light" className="mb-50">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 *:px-61">
        {timelineData.map((item, idx) => {
          const trapezoid = idx % 2 === 0 ? "right" : "left";
          const size = sizePattern[idx % sizePattern.length];

          return (
            <TimelineItem
              key={idx}
              {...item}
              size={size}
              trapezoid={trapezoid}
              className={cnb(
                "rs-pb-8",
                hasBorder &&
                  "border-r-3 border-black nth-2n:border-0 md:nth-2n:border-r-3 md:nth-3n:border-0 xl:nth-3n:border-r-3 xl:nth-4n:border-0",
              )}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default TimelineEven;
