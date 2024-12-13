"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { TimelineItem } from "./TimelineItem";
import { TimelineDetails } from "./TimelineDetails";
import { SizeType } from "./TimelineItem.types";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { TimelineItem as TimelineItemData } from "@/utilities/loadTimelineData";
import { ClipLoader } from "react-spinners";

type TimelineProps = {
  timelineData: TimelineItemData[];
  hasBorder?: boolean;
};

const TimelineOverview = ({ timelineData }: TimelineProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [expandedUuid, setExpandedUuid] = useState<string | null>(null);
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);

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

  const handleToggle = (uuid: string, rowIndex: number) => {
    setExpandedUuid((currentUuid) => {
      const isSameRow = rowIndex === expandedRowIndex;
      const isSameItem = uuid === currentUuid;

      if (isSameRow) return isSameItem ? null : uuid;

      setExpandedRowIndex(rowIndex);
      return uuid;
    });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    itemUuid: string,
    rowIndex: number,
  ) => {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        handleToggle(itemUuid, rowIndex);
        break;
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        setFocusedTabIndex(
          (prevIndex) => (prevIndex + 1) % timelineData.length,
        );
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        setFocusedTabIndex(
          (prevIndex) =>
            (prevIndex - 1 + timelineData.length) % timelineData.length,
        );
        break;
      case "Home":
        event.preventDefault();
        setFocusedTabIndex(0);
        break;
      case "End":
        event.preventDefault();
        setFocusedTabIndex(timelineData.length - 1);
        break;
      default:
        break;
    }
  };

  if (!isMounted) {
    return <ClipLoader />;
  }

  return (
    <Container
      id="main-content"
      width="site"
      pb={5}
      bgColor="fog-light"
      className="mb-50"
    >
      <div className="grid rs-mb-10 sm:mb-0 sm:gap-[32px] md:gap-[76px]">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="odd:children:children:even:rs-pt-6 even:children:children:odd:rs-pt-6"
          >
            <div
              role="tablist"
              aria-label={`Timeline row ${rowIndex + 1}`}
              className="flex flex-col items-center md:items-start md:flex-row md:justify-between"
            >
              {row.map((item, itemIndex) => {
                const sizePattern: SizeType[] = ["large", "medium", "small"];
                const size = sizePattern[itemIndex % sizePattern.length];
                const trapezoid = itemIndex % 2 === 0 ? "left" : "right";
                const globalIndex = rowIndex * itemsPerRow + itemIndex;

                return (
                  <TimelineItem
                    {...item}
                    id={`tab-${item.uuid}`}
                    role="tab"
                    aria-selected={expandedUuid === item.uuid}
                    aria-controls={`tabpanel-${item.uuid}`}
                    key={item.uuid}
                    isExpanded={expandedUuid === item.uuid}
                    size={size}
                    trapezoid={trapezoid}
                    onClick={() => handleToggle(item.uuid, rowIndex)}
                    tabIndex={focusedTabIndex === globalIndex ? 0 : -1}
                    onKeyDown={(e) => handleKeyDown(e, item.uuid, rowIndex)}
                    ref={(el) => {
                      if (focusedTabIndex === globalIndex) {
                        el?.focus();
                      }
                    }}
                  />
                );
              })}
            </div>

            <AnimatePresence>
              {expandedUuid &&
                expandedRowIndex === rowIndex &&
                row.some((item) => item.uuid === expandedUuid) && (
                  <motion.div
                    id={`tabpanel-${expandedUuid}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${expandedUuid}`}
                    className="w-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TimelineDetails
                      {...timelineData.find(
                        (item) => item.uuid === expandedUuid,
                      )!}
                      onClose={() => {
                        setExpandedUuid(null);
                        setExpandedRowIndex(null);
                      }}
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
