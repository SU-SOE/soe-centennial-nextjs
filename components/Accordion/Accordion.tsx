"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Heading, Text } from "@/components/Typography";
import { type MarginType } from "@/utilities/datasource";
import { type HeadingType } from "@/components/Typography";
import * as styles from "./Accordion.styles";
import { Button } from "../Cta";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

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
  const firstItemRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

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
  const allCollapsed = openItems.every((item) => !item);

  /**
   * Focus on first accordion item after expanding/collapsing all
   */
  const expandAll = () => {
    setOpenItems(items.map(() => true));
    firstItemRef.current?.focus();
  };

  const collapseAll = () => {
    setOpenItems(items.map(() => false));
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
          <Button
            disabled={allExpanded}
            onClick={expandAll}
            className={styles.controlButton}
          >
            Expand All
          </Button>
          <Button
            disabled={allCollapsed}
            onClick={collapseAll}
            className={styles.controlButton}
          >
            Collapse All
          </Button>
        </FlexBox>
      )}
      <ul className={styles.list}>
        {items?.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <Heading
              as={itemHeadingLevel}
              color={isDarkTheme ? "white" : "black"}
              leading="tight"
              className={styles.itemHeading}
            >
              <Button
                id={`button-${index}`}
                ref={index === 0 ? firstItemRef : undefined}
                onClick={() => toggleItem(index)}
                aria-expanded={openItems[index] || false}
                aria-controls={`content-${index}`}
                className={styles.button}
              >
                <span aria-hidden="true" className={styles.bar} />
                {item.heading}
                {openItems[index] ? (
                  <MinusIcon width={25} />
                ) : (
                  <PlusIcon width={25} />
                )}
              </Button>
            </Heading>
            <motion.div
              role="region"
              aria-labelledby={`button-${index}`}
              id={`content-${index}`}
              aria-hidden={!openItems[index]}
              animate={{
                height: openItems[index] ? "auto" : 0,
                visibility: openItems[index] ? "visible" : "hidden",
              }}
              initial={false}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className={styles.contentWrapper}
            >
              <div className={styles.richtextWrapper}>
                <Text className={styles.richtext}>{item.content}</Text>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </Container>
  );
};
