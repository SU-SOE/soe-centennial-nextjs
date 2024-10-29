'use client';

import { Container } from '@/components/Container';
import TimelineItem from './TimelineItem';
// import timelineData from '@/data/timelineData.json';
import { cnb } from 'cnbuilder';
import { useState } from 'react';
import { TimelineBanner } from '../TimelineBanner';
import { motion, AnimatePresence } from 'framer-motion';

type TimelineItem = {
  year: string;
  heading: string;
  subtitle: string;
  body: string;
  href?: string;
  image: string;
};

type TimelineProps = {
  timelineData: TimelineItem[];
};

const TimelineOverview = ({timelineData}: TimelineProps) => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(
    null,
  );
  const rows = [];
  console.log('timelineData', timelineData);

  // Split items into alternating rows of 5 and 4
  let index = 0;
  while (index < timelineData?.length) {
    rows.push(timelineData.slice(index, index + 5)); // Row with 5 items
    index += 5;

    if (index < timelineData?.length) {
      rows.push(timelineData.slice(index, index + 4)); // Row with 4 items
      index += 4;
    }
  }

  // Handler for expanding an item
  const handleExpand = (index: number) => {
    setExpandedItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container width="site" py={5} bgColor="fog-light">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-50">
          <div
            className={cnb(
              'grid gap-50 py-25',
              rowIndex % 2 === 0 ? 'grid-cols-5' : 'grid-cols-4',
            )}
          >
            {row.map((item, idx) => {
              const itemIndex = rowIndex * 5 + idx;
              return (
                <TimelineItem
                  key={idx}
                  {...item}
                  className="rounded-lg flex items-center justify-center"
                  onClick={() => handleExpand(itemIndex)}
                />
              );
            })}
          </div>
          {/* Conditionally render the banner if an item in this row is expanded */}
          <AnimatePresence>
            {expandedItemIndex !== null &&
              expandedItemIndex >= rowIndex * 5 &&
              expandedItemIndex <
                (rowIndex + 1) * 5 + (rowIndex % 2 === 0 ? 5 : 4) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <TimelineBanner {...timelineData[expandedItemIndex]} />
                </motion.div>
              )}
          </AnimatePresence>
        </div>
      ))}
    </Container>
  );
};

export default TimelineOverview;
