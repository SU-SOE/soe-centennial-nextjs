/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { cnb } from "cnbuilder";
import { useReducedMotion } from "motion/react";
import { ActionLink, Button } from "@/components/Cta";
import { Heading, Text } from "@/components/Typography";
import { AnimatedHamburger } from "./AnimatedHamburger";
import * as styles from "./MainNav.styles";
import { FlexBox } from "@/components/FlexBox";
import { EngLogoLockup } from "@/components/Logo/EngLogoLockup";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useFocusOutside } from "@/utilities/hook/useFocusOutside";

type Props = {
  isLight?: boolean;
};

export const MainNav = ({ isLight = false }: Props) => {
  const preferReducedMotion = useReducedMotion();
  const panelRef = useRef<HTMLElement | null>(null);

  return (
    <Popover as="nav" aria-label="main menu">
      {({ open, close }) => {
        useOnClickOutside(panelRef as React.RefObject<HTMLElement>, () => {
          if (open) close();
        });

        useFocusOutside(panelRef as React.RefObject<HTMLElement>, () => {
          if (open) close();
        });

        return (
          <>
            <PopoverButton
              aria-label={`${open ? "Close" : "Open"} main menu`}
              className={styles.button(isLight)}
            >
              <AnimatedHamburger
                icon={open ? "close" : "menu"}
                strokeWidth={1.8}
                className={styles.menuIcon(open, isLight)}
              />
            </PopoverButton>
            <Transition
              enter="duration-300 ease-out"
              enterFrom={cnb(
                "opacity-0",
                !preferReducedMotion && "-translate-y-30",
              )}
              enterTo="opacity-100 translate-y-0"
              leave="duration-200 ease-out"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo={cnb(
                "opacity-0",
                !preferReducedMotion && "-translate-y-30",
              )}
            >
              <PopoverPanel ref={panelRef} className={styles.panel}>
                <div className={styles.panelWrapper}>
                  <div className={styles.logo}>
                    <EngLogoLockup color="white-red" isLink />
                  </div>
                  <FlexBox className={styles.panelOuter}>
                    <FlexBox as="ul" className={styles.col1}>
                      <li>
                        <Text weight="normal" size="f1" mb="0">
                          <ActionLink whiteText href="/stories">
                            Centennial stories
                          </ActionLink>
                        </Text>
                      </li>
                      <li>
                        <Text weight="normal" size="f1" mb="0">
                          <ActionLink whiteText href="/timeline">
                            Timeline
                          </ActionLink>
                        </Text>
                      </li>
                    </FlexBox>
                    <FlexBox className={styles.col2}>
                      <section className={styles.featureCol}>
                        <Heading size="f1" as="h2" mb="base">
                          Share your Stanford Engineering memories
                        </Heading>
                        <Text weight="normal" mb={2} size="small">
                          Mark this milestone by sharing one of your favorite
                          memories of Stanford Engineering.
                        </Text>
                        <Button
                          solid
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfUppz2bgwGKJpEzZU7CohEwFr7m_drQbdLydU2TPo6cXPZeg/viewform"
                        >
                          Submit your story
                        </Button>
                      </section>
                      <section className={styles.featureCol}>
                        <Heading size="f1" as="h2" mb="base">
                          Support Stanford Engineering
                        </Heading>
                        <Text weight="normal" mb={2} size="small">
                          Learn how your generosity can have transformational
                          impact.
                        </Text>
                        <Button
                          solid
                          href="https://engineering.stanford.edu/get-involved/support-engineering"
                        >
                          Support Engineering
                        </Button>
                      </section>
                    </FlexBox>
                  </FlexBox>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        );
      }}
    </Popover>
  );
};
