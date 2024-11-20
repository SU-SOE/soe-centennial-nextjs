"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { TimelineItem } from "./TimelineItem";
import { TimelineDetails } from "./TimelineDetails";
import { SizeType } from "./TimelineItem.types";
import { motion, AnimatePresence } from "framer-motion";

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

const TimelineOverview = ({ timelineData }: TimelineProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sizePattern: SizeType[] = ["large", "medium", "small"];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const rows = [];
  for (let i = 0; i < timelineData.length; i += 3) {
    rows.push(timelineData.slice(i, i + 3));
  }

  return (
    <Container width="site" py={5} bgColor="fog-light" className="mb-50">
      <div className="grid gap-4">
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {row.map((item, itemIndex) => {
                const globalIndex = rowIndex * 3 + itemIndex;
                const trapezoid = globalIndex % 2 === 0 ? "right" : "left";
                const size = sizePattern[globalIndex % sizePattern.length];

                return (
                  <TimelineItem
                    key={globalIndex}
                    {...item}
                    size={size}
                    trapezoid={trapezoid}
                    onClick={() => handleToggle(globalIndex)}
                  />
                );
              })}
            </div>

            <AnimatePresence>
              {expandedIndex !== null &&
                expandedIndex >= rowIndex * 3 &&
                expandedIndex < (rowIndex + 1) * 3 && (
                  <motion.div
                    className="timeline-detail col-span-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TimelineDetails
                      {...timelineData[expandedIndex]}
                      onClose={() => setExpandedIndex(null)}
                    />
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TimelineOverview;
