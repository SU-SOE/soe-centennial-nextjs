"use client";
import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Heading, Text } from "@/components/Typography";
import { type MarginType } from "@/utilities/datasource";
import { type HeadingType } from "@/components/Typography";
import * as styles from "./Accordion.styles";
import { cnb } from "cnbuilder";
import { AccordionItem } from "./AccordionItem";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";

type AccordionItem = {
  heading: string;
  content: string;
  defaultOpen?: boolean;
};

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  items: AccordionItem[];
  itemHeadingLevel?: HeadingType;
  itemsPerColumn?: number;
  intro?: React.ReactNode;
  id?: string;
  isDarkTheme?: boolean;
  hideControls?: boolean;
  marginTop?: MarginType;
  marginBottom?: MarginType;
};

export const Accordion = ({
  heading,
  headingLevel = "h2",
  itemHeadingLevel = "h3",
  itemsPerColumn,
  intro,
  items,
  id,
  isDarkTheme,
  hideControls,
  marginTop,
  marginBottom,
  ...props
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<boolean[]>([]);
  const firstItemRef = useRef<HTMLButtonElement>(null);

  const chunkedItems = itemsPerColumn
    ? Array.from({ length: Math.ceil(items.length / itemsPerColumn) }, (_, i) =>
        items.slice(i * itemsPerColumn, i * itemsPerColumn + itemsPerColumn),
      )
    : [items];

  useEffect(() => {
    if (!items?.length) return;
    const initialState = items.map((item) => item.defaultOpen ?? false);
    setOpenItems(initialState);
  }, [items]);

  const toggleItem = (index: number) => {
    setOpenItems((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item)),
    );
  };

  const allExpanded = openItems.every((item) => item);

  /**
   * Focus on first accordion item after expanding/collapsing all
   */
  const toggleAll = (shouldExpand: boolean) => {
    setOpenItems(items.map(() => shouldExpand));
    firstItemRef.current?.focus();
  };

  const showControls = !hideControls && items?.length > 1;

  return (
    <Container
      id={id}
      mt={marginTop}
      mb={marginBottom}
      className={styles.root}
      {...props}
    >
      {heading && (
        <Heading size={3} as={headingLevel} className={styles.heading}>
          {heading}
        </Heading>
      )}
      {intro && <div className={styles.intro}>{intro}</div>}
      {showControls && (
        <FlexBox justifyContent="end" className={styles.controls}>
          <Text size="small" mb="0">
            <button
              onClick={() => toggleAll(!allExpanded)}
              className={styles.controlButton}
            >
              {allExpanded ? "Collapse all" : "Expand all"}
              {allExpanded ? (
                <PlusIcon width={25} className={styles.circleIcon(true)} />
              ) : (
                <MinusIcon width={25} className={styles.circleIcon(true)} />
              )}
            </button>
          </Text>
        </FlexBox>
      )}
      {itemsPerColumn ? (
        <div className="flex flex-col md:flex-row md:gap-50">
          {chunkedItems.map((chunk, colIdx) => (
            <ul key={colIdx} className={cnb("flex flex-col", styles.list)}>
              {chunk.map((item, indexInChunk) => {
                const index = colIdx * itemsPerColumn + indexInChunk;
                return (
                  <AccordionItem
                    key={index}
                    item={item}
                    index={index}
                    isOpen={openItems[index]}
                    onToggle={toggleItem}
                    firstItemRef={firstItemRef}
                    headingLevel={itemHeadingLevel}
                  />
                );
              })}
            </ul>
          ))}
        </div>
      ) : (
        <ul className={styles.list}>
          {items?.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openItems[index]}
              onToggle={toggleItem}
              firstItemRef={firstItemRef}
              headingLevel={itemHeadingLevel}
            />
          ))}
        </ul>
      )}
    </Container>
  );
};
