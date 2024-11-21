import { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
// import { LogoLockup } from "@/components/Logo/LogoLockup";
import { Skiplink } from "@/components/SkipLink";
import * as styles from "./Masthead.styles";
import { EngLogoLockup } from "../Logo/EngLogoLockup";

type MastheadProps = HTMLAttributes<HTMLDivElement> & {
  isLight?: boolean;
  isOverlap?: boolean;
  mainNav?: React.ReactNode;
};

export const Masthead = ({
  isLight,
  isOverlap = true,
  mainNav,
  className,
  ...props
}: MastheadProps) => (
  <header className={cnb(styles.root(isOverlap), className)} {...props}>
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
