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
import { EngLogoLockup } from "../Logo/EngLogoLockup";

type Props = {
  isLight?: boolean;
};

export const MainNavMvp = ({ isLight = false }: Props) => {
  // Reduce motion users will only see opacity change when opening/closing the menu
  const preferReducedMotion = useReducedMotion();

  return (
    <Popover as="nav" aria-label="main menu">
      {({ open }) => (
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
            <PopoverPanel className={styles.panel}>
              <div className={styles.panelWrapper}>
                <div className={styles.logo}>
                  <EngLogoLockup color="white-red" />
                </div>
                <FlexBox className={styles.panelOuter}>
                  <FlexBox as="ul" className={styles.col1}>
                    {/*  April Release */}
                    <li>
                      <Text weight="normal" size="f2" mb="0">
                        <ActionLink whiteText href="/timeline">
                          Explore the Centennial Timeline
                        </ActionLink>
                      </Text>
                    </li>
                  </FlexBox>
                  <FlexBox className={styles.col2}>
                    <section className={styles.featureCol}>
                      <Heading size="f2" as="h2" mb="base">
                        Share your Stanford Engineering memories
                      </Heading>
                      <Text weight="normal" mb={2}>
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
                  </FlexBox>
                </FlexBox>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
