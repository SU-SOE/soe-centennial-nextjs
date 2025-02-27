"use client";

import { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
import { Skiplink } from "@/components/SkipLink";
import * as styles from "./Masthead.styles";
import { EngLogoLockup } from "../Logo/EngLogoLockup";
// import { MainNav } from "@/components/MainNav";
import { motion } from "motion/react";

export type MastheadProps = HTMLAttributes<HTMLDivElement> & {
  logoColor?: "default" | "white" | "white-red";
  isOverlap?: boolean;
  navLight?: boolean;
  bgColor?: styles.BgColorType;
  mainNav?: React.ReactNode;
};

export const Masthead = ({
  logoColor,
  isOverlap = false,
  bgColor = "none",
  mainNav,
  navLight,
  className,
  ...props
}: MastheadProps) => {
  // TODO: Add back in for April launch in combination with <MainNav isLight={isLight} />
  //  const isLight = !(
  //   isOverlap || ["red", "stone-dark", "black", "homepage"].includes(bgColor)
  // );

  return (
    <header
      {...props}
      className={cnb(
        styles.bgColors[bgColor || "none"],
        styles.root(isOverlap),
        className,
      )}
    >
      <Skiplink />
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className={styles.wrapper}
      >
        <div className={styles.logo}>
          <EngLogoLockup color={logoColor} isLink />
          <div className="font-dm-sans text-16 leading-snug block lg:hidden max-w-200">
            A century of discovery, innovation, and impact
          </div>
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center w-full">
          <motion.div
            initial={{ fontSize: "4.6rem", width: "500px" }}
            whileInView={{
              fontSize: "1.6rem",
              width: "200px",
              transition: { duration: 1, delay: 0.8 },
            }}
            viewport={{ once: true, amount: "all" }}
            className="font-dm-sans leading-snug"
          >
            A century of discovery, innovation, and impact
          </motion.div>
        </div>
        {mainNav && (
          <FlexBox alignItems="center" className={styles.flexbox}>
            {mainNav}
          </FlexBox>
        )}
      </FlexBox>
    </header>
  );
};
