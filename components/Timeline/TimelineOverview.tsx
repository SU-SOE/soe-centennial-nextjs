"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { TimelineItem } from "./TimelineItem";
import { TimelineDetails } from "./TimelineDetails";
import { SizeType } from "./TimelineItem.types";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { TimelineItem as TimelineItemData } from "@/utilities/loadTimelineData";
import { cnb } from "cnbuilder";
import { ClipLoader } from "react-spinners";

type TimelineProps = {
  timelineData: TimelineItemData[];
  hasBorder?: boolean;
};

const TimelineOverview = ({ timelineData }: TimelineProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [expandedUuid, setExpandedUuid] = useState<string | null>(null);

  // Ensure the component is mounted before running media queries
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define breakpoints using useMediaQuery hook
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  // Determine the number of items per row
  const itemsPerRow = isLg ? 3 : isMd ? 2 : 1;

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

  // Prevent rendering of mismatched HTML
  if (!isMounted) {
    return <ClipLoader />;
  }

  return (
    <Container width="site" py={5} bgColor="fog-light" className="mb-50">
      <div className="grid gap-[76px]">
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`}>
            <div
              role="tablist"
              className={cnb(" grid gap-4", {
                "grid-cols-3": itemsPerRow === 3,
                "grid-cols-2": itemsPerRow === 2,
                "grid-cols-1": itemsPerRow === 1,
              })}
            >
              {row.map((item, itemIndex) => {
                const sizePattern: SizeType[] = ["large", "medium", "small"];
                const size = sizePattern[itemIndex % sizePattern.length];
                const trapezoid = itemIndex % 2 === 0 ? "right" : "left";

                return (
                  <TimelineItem
                    {...item}
                    id={`tab-${item.uuid}`}
                    role="tab"
                    aria-selected={expandedUuid === item.uuid}
                    aria-controls={`tabpanel-${item.uuid}`}
                    key={item.uuid}
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
                    id={`tabpanel-${expandedUuid}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${expandedUuid}`}
                    className="col-span-full"
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
