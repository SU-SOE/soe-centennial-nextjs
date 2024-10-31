"use client";

import { Container } from "@/components/Container";
import TimelineItem from "./TimelineItem";
import { SizeType } from "./TimelineItem.types";

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
};

const TimelineEven = ({ timelineData }: TimelineProps) => {
  const sizePattern: SizeType[] = ["large", "medium", "small"];

  return (
    <Container width="site" py={5} bgColor="fog-light" className="mb-50">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 *:mx-61">
        {timelineData.map((item, idx) => {
          const trapezoid = idx % 2 === 0 ? "right" : "left";
          const size = sizePattern[idx % sizePattern.length];

          return (
            <TimelineItem
              key={idx}
              {...item}
              size={size}
              trapezoid={trapezoid}
              className="rounded-lg flex items-center justify-center"
            />
          );
        })}
      </div>
    </Container>
  );
};

export default TimelineEven;
