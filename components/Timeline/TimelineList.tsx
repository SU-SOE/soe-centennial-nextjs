"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { TimelineItem } from "./TimelineItem";
import { TimelineDetails } from "./TimelineDetails";
import { SizeType } from "./Timeline.types";
import { motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";
import { TimelineItem as TimelineItemData } from "@/utilities/loadTimelineData";
import { ClipLoader } from "react-spinners";
import { AnimateInView } from "../Animate";

type TimelineProps = {
  timelineData: TimelineItemData[];
  hasBorder?: boolean;
};

const TimelineList = ({ timelineData }: TimelineProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [expandedUuid, setExpandedUuid] = useState<string | null>(null);
  const [itemId, setItemid] = useState<string>("");

  // Reference to the TimelineItems and TimelineDetails for accessibility focus management
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const detailsRef = useRef<HTMLDivElement>(null);

  // Ensure the component is mounted before running media queries
  useEffect(() => {
    setIsMounted(true);

    // Check if the URL has a hash
    const anchor = window.location.hash.replace("#", ""); // Remove '#' character

    if (anchor) {
      // Validate hash against timeline data
      timelineData.find((item) => {
        if (item.anchor === anchor) return setExpandedUuid(item.uuid);
      });
    }
  }, [timelineData]);

  // Focus on the TimelineDetails when it is expanded
  useEffect(() => {
    if (expandedUuid && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        detailsRef.current?.focus();
      }, 0);
    }
  }, [expandedUuid]);

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

  const handleToggle = (uuid: string, anchor: string) => {
    setExpandedUuid((currentUuid) => (currentUuid === uuid ? null : uuid));
    setItemid((currentAnchor) => (currentAnchor === anchor ? "" : anchor));
  };

  if (!isMounted) {
    return <ClipLoader />;
  }

  return (
    <Container id="main-content" width="site" pb={5} bgColor="fog-light">
      <div className="grid rs-mb-10 sm:mb-0 sm:gap-[32px] md:gap-[76px]">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            id={`${rowIndex}`}
            className="odd:children:children:even:rs-pt-6 even:children:children:odd:rs-pt-6"
          >
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
              {row.map((item, itemIndex) => {
                const sizePattern: SizeType[] =
                  rowIndex % 2 === 0
                    ? ["large", "medium", "small"]
                    : ["small", "large", "medium"];
                const size = sizePattern[itemIndex % sizePattern.length];
                const trapezoid = itemIndex % 2 === 0 ? "left" : "right";

                return (
                  <AnimateInView key={item.uuid}>
                    <TimelineItem
                      {...item}
                      id={item.uuid}
                      aria-expanded={expandedUuid === item.uuid}
                      aria-controls={item.anchor}
                      isExpanded={expandedUuid === item.uuid}
                      size={size}
                      trapezoid={trapezoid}
                      onClick={() => handleToggle(item.uuid, item.anchor)}
                      ref={(el) => {
                        itemRefs.current[item.uuid] = el;
                      }}
                    />
                  </AnimateInView>
                );
              })}
            </div>

            {expandedUuid && row.some((item) => item.uuid === expandedUuid) && (
              <motion.div
                id={itemId}
                aria-labelledby={expandedUuid}
                className="w-full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                ref={detailsRef}
                tabIndex={-1}
              >
                <TimelineDetails
                  {...timelineData.find((item) => item.uuid === expandedUuid)!}
                  onClose={() => {
                    if (expandedUuid) {
                      const itemButton = itemRefs.current[expandedUuid];
                      if (itemButton) {
                        itemButton.focus();
                      }
                    }
                    setExpandedUuid(null);
                  }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TimelineList;
