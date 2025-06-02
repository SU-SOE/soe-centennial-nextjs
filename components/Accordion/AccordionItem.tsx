"use client";
import { motion } from "motion/react";
import { Heading, HeadingType, Text } from "@/components/Typography";
import * as styles from "./Accordion.styles";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { RefObject } from "react";

interface AccordionItemProps {
  item: {
    heading: string;
    content: string;
  };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  headingLevel?: HeadingType;
  firstItemRef?: RefObject<HTMLButtonElement | null>;
}

export function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
  headingLevel,
  firstItemRef,
}: AccordionItemProps) {
  return (
    <li className={styles.listItem}>
      <Heading as={headingLevel} leading="tight" className={styles.itemHeading}>
        <button
          id={`button-${index}`}
          ref={index === 0 ? firstItemRef : undefined}
          onClick={() => onToggle(index)}
          aria-expanded={isOpen || false}
          aria-controls={`content-${index}`}
          className={styles.button}
        >
          {item.heading}
          {isOpen ? (
            <MinusIcon width={25} className={styles.circleIcon()} />
          ) : (
            <PlusIcon width={25} className={styles.circleIcon()} />
          )}
        </button>
      </Heading>
      <motion.div
        role="region"
        aria-labelledby={`button-${index}`}
        id={`content-${index}`}
        aria-hidden={!isOpen}
        animate={{
          height: isOpen ? "auto" : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className={styles.contentWrapper}
      >
        <div className={styles.richtextWrapper}>
          <Text className={styles.richtext} mb="0">
            {item.content}
          </Text>
        </div>
      </motion.div>
    </li>
  );
}
