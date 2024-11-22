import { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
import { Skiplink } from "@/components/SkipLink";
import * as styles from "./Masthead.styles";
import { EngLogoLockup } from "../Logo/EngLogoLockup";

type MastheadProps = HTMLAttributes<HTMLDivElement> & {
  isLight?: boolean;
  isOverlap?: boolean;
  bgColor?: styles.BgColorType;
  mainNav?: React.ReactNode;
};

export const Masthead = ({
  isLight,
  isOverlap = true,
  bgColor,
  mainNav,
  className,
  ...props
}: MastheadProps) => (
  <header
    className={cnb(
      styles.bgColors[bgColor || "white"],
      styles.root(isOverlap),
      className,
    )}
    {...props}
  >
    <Skiplink />
    <FlexBox
      justifyContent="between"
      alignItems="center"
      className={styles.wrapper}
    >
      <EngLogoLockup color={isLight ? "default" : "white"} />
      <FlexBox alignItems="center" className={styles.flexbox}>
        {mainNav}
      </FlexBox>
    </FlexBox>
  </header>
);
