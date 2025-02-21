import { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
import { Skiplink } from "@/components/SkipLink";
import * as styles from "./Masthead.styles";
import { EngLogoLockup } from "../Logo/EngLogoLockup";
import { MainNav } from "@/components/MainNav";

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
  const isLight = !(
    isOverlap || ["red", "stone-dark", "black", "homepage"].includes(bgColor)
  );

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
        <EngLogoLockup color={logoColor} isLink />
        <FlexBox alignItems="center" className={styles.flexbox}>
          <MainNav isLight={isLight} />
        </FlexBox>
      </FlexBox>
    </header>
  );
};
