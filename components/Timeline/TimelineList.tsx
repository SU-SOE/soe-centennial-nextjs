"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { TimelineItem } from "./TimelineItem";
import { TimelineDetails } from "./TimelineDetails";
import { SizeType } from "./Timeline.types";
import { motion, useReducedMotion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";
import { TimelineItem as TimelineItemData } from "@/utilities/loadTimelineData";
import { ClipLoader } from "react-spinners";
import { AnimateInView } from "../Animate";
import { cnb } from "cnbuilder";
import { Heading, Text } from "@/components/Typography";
import { HorizontalLineart } from "../images/horizontal-lineart";

type TimelineProps = {
  timelineData: TimelineItemData[];
  hasBorder?: boolean;
};

const TimelineList = ({ timelineData }: TimelineProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [expandedUuid, setExpandedUuid] = useState<string | null>(null);
  const [itemId, setItemid] = useState<string>("");
  const prefersReducedMotion = useReducedMotion();

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

  return (
    <div className="rs-pb-5">
      <Container as="section" width="site" py={8}>
        <Heading leading="tight" size={6} as="h1" className="flex flex-col">
          100 years
          <br />
          of impact
        </Heading>
        <Text className="max-w-800">
          In the ten decades since its founding, the School of Engineering has
          produced fundamental work in science and transformational
          breakthroughs that have changed lives and shaped human society.
          Experience the impact we’ve made through time in each of the events
          you can interact with here.
        </Text>
      </Container>
      {!isMounted ? (
        <div className="cc flex flex-row gap-10">
          <ClipLoader />
          <Text variant="big">Loading Timeline Items...</Text>
        </div>
      ) : (
        <div>
          <div className="grid rs-mb-10 sm:mb-0 sm:gap-[32px] md:gap-[76px]">
            {rows.map((row, rowIndex) => {
              const isFullWidthRow = (rowIndex + 1) % 3 === 0;
              const fullwidthTrapezoid = rowIndex % 2 === 0 ? "left" : "right";

              const showSvg = (rowIndex + 1) % 3 === 1;
              const svgOptions = ["A", "B", "C", "D"];
              const lineartType = svgOptions[Math.floor(rowIndex / 3) % 4];
              const isSvgLeftAligned = Math.floor(rowIndex / 3) % 2 === 0;

              return (
                <div
                  key={`row-${rowIndex}`}
                  id={`${rowIndex}`}
                  className={cnb(
                    "odd:children:children:even:rs-pt-6 even:children:children:odd:rs-pt-6",
                    { "w-full": isFullWidthRow },
                  )}
                >
                  <div
                    className={cnb(
                      "cc flex flex-col items-center",
                      {
                        "md:items-start md:flex-row md:justify-between":
                          !isFullWidthRow,
                      },
                      { "flex-row justify-center w-full": isFullWidthRow },
                    )}
                  >
                    {isFullWidthRow && (
                      // Render a single item in full-width rows
                      <AnimateInView
                        key={row[0].uuid}
                        animation="slideUp"
                        delay={0.5}
                        className="w-full"
                      >
                        <TimelineItem
                          {...row[0]} // Only take the first item
                          id={row[0].uuid}
                          aria-expanded={expandedUuid === row[0].uuid}
                          aria-controls={row[0].anchor}
                          isExpanded={expandedUuid === row[0].uuid}
                          size="full"
                          trapezoid={fullwidthTrapezoid}
                          isHorizontal
                          onClick={() =>
                            handleToggle(row[0].uuid, row[0].anchor)
                          }
                          ref={(el) => {
                            itemRefs.current[row[0].uuid] = el;
                          }}
                        />
                      </AnimateInView>
                    )}
                    {!isFullWidthRow &&
                      row.map((item, itemIndex) => {
                        const sizePattern: SizeType[] =
                          rowIndex % 2 === 0
                            ? ["large", "medium", "small"]
                            : ["small", "large", "medium"];
                        const size =
                          sizePattern[itemIndex % sizePattern.length];
                        const trapezoid =
                          itemIndex % 2 === 0 ? "left" : "right";

                        // Animation
                        const delayPattern =
                          rowIndex % 2 === 0 ? [0.5, 1, 0.8] : [1, 0.3, 0.8];
                        const delay =
                          delayPattern[itemIndex % delayPattern.length];

                        return (
                          <AnimateInView
                            key={item.uuid}
                            animation="slideUp"
                            delay={delay}
                          >
                            <TimelineItem
                              {...item}
                              id={item.uuid}
                              aria-expanded={expandedUuid === item.uuid}
                              aria-controls={item.anchor}
                              isExpanded={expandedUuid === item.uuid}
                              size={size}
                              trapezoid={trapezoid}
                              isHorizontal={isFullWidthRow}
                              onClick={() =>
                                handleToggle(item.uuid, item.anchor)
                              }
                              ref={(el) => {
                                itemRefs.current[item.uuid] = el;
                              }}
                            />
                          </AnimateInView>
                        );
                      })}
                  </div>

                  {expandedUuid &&
                    row.some((item) => item.uuid === expandedUuid) && (
                      <motion.div
                        id={itemId}
                        aria-labelledby={expandedUuid}
                        className="w-full cc"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.8,
                        }}
                        ref={detailsRef}
                        tabIndex={-1}
                      >
                        <TimelineDetails
                          {...timelineData.find(
                            (item) => item.uuid === expandedUuid,
                          )!}
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

                  {showSvg && (
                    <HorizontalLineart
                      lineartType={lineartType as "A" | "B" | "C" | "D"}
                      isLeft={isSvgLeftAligned}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineList;
