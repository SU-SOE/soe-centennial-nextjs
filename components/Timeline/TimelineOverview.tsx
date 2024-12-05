"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { TimelineItem } from "./TimelineItem";
import { TimelineDetails } from "./TimelineDetails";
import { SizeType } from "./TimelineItem.types";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

type TimelineItemData = {
  uuid: string;
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
  const [expandedUuid, setExpandedUuid] = useState<string | null>(null);

  // Define breakpoints using useMediaQuery hook
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isMd = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isSm = useMediaQuery("(min-width: 640px) and (max-width: 767px)");

  // Determine the number of items per row
  const itemsPerRow = isLg ? 3 : isMd || isSm ? 2 : 1;

  // Group timeline data into rows based on itemsPerRow
  const rows = timelineData.reduce<TimelineItemData[][]>((acc, item, index) => {
    const rowIndex = Math.floor(index / itemsPerRow);
    if (!acc[rowIndex]) acc[rowIndex] = [];
    acc[rowIndex].push(item);
    return acc;
  }, []);

  const handleToggle = (uuid: string) => {
    setExpandedUuid((currentUuid) => (currentUuid === uuid ? null : uuid));
  };

  return (
    <Container width="site" py={5} bgColor="fog-light" className="mb-50">
      <div className="grid gap-4">
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`}>
            {/* Dynamically set grid columns based on itemsPerRow */}
            <div
              className={`grid gap-4 ${
                itemsPerRow === 3
                  ? "grid-cols-3"
                  : itemsPerRow === 2
                    ? "grid-cols-2"
                    : "grid-cols-1"
              }`}
            >
              {row.map((item, itemIndex) => {
                const sizePattern: SizeType[] = ["large", "medium", "small"];
                const size = sizePattern[itemIndex % sizePattern.length];
                const trapezoid = itemIndex % 2 === 0 ? "right" : "left";

                return (
                  <TimelineItem
                    key={item.uuid}
                    {...item}
                    size={size}
                    trapezoid={trapezoid}
                    onClick={() => handleToggle(item.uuid)}
                  />
                );
              })}
            </div>

            <AnimatePresence>
              {expandedUuid &&
                row.some((item) => item.uuid === expandedUuid) && (
                  <motion.div
                    className="timeline-detail col-span-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TimelineDetails
                      {...timelineData.find(
                        (item) => item.uuid === expandedUuid,
                      )!}
                      onClose={() => setExpandedUuid(null)}
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
