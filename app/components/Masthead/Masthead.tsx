import { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
import { LogoLockup } from "@/components/Logo/LogoLockup";
import { Skiplink } from "@/components/SkipLink";
import * as styles from "./Masthead.styles";

type MastheadProps = HTMLAttributes<HTMLDivElement> & {
  isLight?: boolean;
  mainNav?: React.ReactNode;
};

export const Masthead = ({
  isLight,
  mainNav,
  className,
  ...props
}: MastheadProps) => (
  <header className={cnb(styles.root, className)} {...props}>
    <Skiplink />
    <FlexBox
      justifyContent="between"
      alignItems="center"
      className={styles.wrapper}
    >
      <LogoLockup
        isLink
        color={isLight ? "default" : "white"}
        text="Engineering Centennial"
        className={styles.lockup}
      />
      <FlexBox alignItems="center" className={styles.flexbox}>
        {mainNav}
      </FlexBox>
    </FlexBox>
  </header>
);
