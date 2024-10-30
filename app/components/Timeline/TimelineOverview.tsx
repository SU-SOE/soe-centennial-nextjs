'use client';

import { Container } from '@/components/Container';
import TimelineItem from './TimelineItem';
import { cnb } from 'cnbuilder';
import { useState } from 'react';
import { TimelineDetails } from './TimelineDetails';
import { motion, AnimatePresence } from 'framer-motion';
import { SizeType, TrapezoidType } from './TimelineItem.types';

type TimelineItemData = {
  year: string;
  heading: string;
  subtitle: string;
  body: string;
  href?: string;
  image: string;
};

type TimelineProps = {
  timelineData: TimelineItemData[];
};

const sizes: SizeType[] = ['small', 'medium', 'large'];
const trapezoids: TrapezoidType[] = [1, 2, 3, 4];

const TimelineOverview = ({ timelineData }: TimelineProps) => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(
    null,
  );

  // Create rows of items (5 items odd row; 4 items even row)
  const rows: TimelineItemData[][] = [];
  let index = 0;

  while (index < timelineData.length) {
    const rowSize = index % 9 === 0 && index !== 0 ? 4 : 5; // Alternate between 5 and 4 grid item layout
    rows.push(timelineData.slice(index, index + rowSize));
    index += rowSize;
  }

  const handleExpand = (index: number) => {
    setExpandedItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container width="site" py={5} bgColor="fog-light">
      {rows.map((row, rowIndex) => {
        const rowSize = row.length; // Determine the size of the current row

        return (
          <div key={rowIndex} className="mb-50">
            <div
              className={cnb(
                'grid gap-50 py-25',
                rowSize === 5 ? 'grid-cols-5' : 'grid-cols-4',
              )}
            >
              {row.map((item, idx) => {
                const itemIndex = rows.slice(0, rowIndex).flat().length + idx; 
                const isSelected = expandedItemIndex === itemIndex;

                return (
                  <TimelineItem
                    key={itemIndex}
                    {...item}
                    size={sizes[itemIndex % sizes.length]}
                    trapezoid={trapezoids[itemIndex % trapezoids.length]}
                    isSelected={isSelected}
                    className="rounded-lg flex items-center justify-center"
                    onClick={() => handleExpand(itemIndex)}
                  />
                );
              })}
            </div>
            {/* Conditionally render the banner if an item in this row is expanded */}
            <AnimatePresence>
              {expandedItemIndex !== null &&
                expandedItemIndex >= rows.slice(0, rowIndex).flat().length &&
                expandedItemIndex <
                  rows.slice(0, rowIndex + 1).flat().length && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <TimelineDetails {...timelineData[expandedItemIndex]} />
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        );
      })}
    </Container>
  );
};

export default TimelineOverview;
