"use client";

import { useEffect, useRef, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { ClipLoader } from "react-spinners";

import { Container } from "@/components/Container";
import { TimelineItem } from "./TimelineItem";
import { TimelineDetails } from "./TimelineDetails";
import { SizeType } from "./TimelineItem.types";
import { TimelineItem as TimelineItemData } from "@/utilities/loadTimelineData";

type TimelineProps = {
  timelineData: TimelineItemData[];
  hasBorder?: boolean;
};

const TimelineOverview = ({ timelineData }: TimelineProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const activePanelRef = useRef<HTMLDivElement | null>(null);

  // Ensure the component is mounted before running media queries
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Focus the first focusable element in the active panel when it opens
  useEffect(() => {
    if (activePanelRef.current) {
      const firstFocusable = activePanelRef.current.querySelector<HTMLElement>(
        "a, button, [tabindex='0']",
      );
      firstFocusable?.focus();
    }
  }, [activeTabIndex]);

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

  const handleTabClick = (index: number) => {
    // Toggle the tab open/close
    setActiveTabIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  if (!isMounted) {
    return <ClipLoader />;
  }

  return (
    <Container width="site" pb={5} bgColor="fog-light" className="mb-50">
      <TabGroup selectedIndex={activeTabIndex ?? -1} onChange={() => {}}>
        <div className="grid rs-mb-10 sm:mb-0 sm:gap-[32px] md:gap-[76px]">
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="odd:children:children:even:rs-pt-6 even:children:children:odd:rs-pt-6"
            >
              <TabList className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
                {row.map((item, itemIndex) => {
                  const sizePattern: SizeType[] = ["large", "medium", "small"];
                  const size = sizePattern[itemIndex % sizePattern.length];
                  const trapezoid = itemIndex % 2 === 0 ? "left" : "right";

                  return (
                    <Tab
                      key={item.uuid}
                      as="button"
                      onClick={() => handleTabClick(itemIndex)}
                    >
                      {({ selected }) => (
                        <TimelineItem
                          {...item}
                          size={size}
                          trapezoid={trapezoid}
                          isExpanded={selected}
                        />
                      )}
                    </Tab>
                  );
                })}
              </TabList>

              <TabPanels>
                {row.map((item, itemIndex) => (
                  <TabPanel
                    key={item.uuid}
                    className="w-full"
                    ref={itemIndex === activeTabIndex ? activePanelRef : null}
                  >
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <TimelineDetails {...item} />
                      </motion.div>
                    </AnimatePresence>
                  </TabPanel>
                ))}
              </TabPanels>
            </div>
          ))}
        </div>
      </TabGroup>
    </Container>
  );
};

export default TimelineOverview;
