import { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
import { Skiplink } from "@/components/SkipLink";
import * as styles from "./Masthead.styles";
import { EngLogoLockup } from "../Logo/EngLogoLockup";
// import { MainNav } from "@/components/MainNav";
import { Text } from "@/components/Typography";

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
          <Text
            font="dm-mono"
            size="small"
            className="mt-10"
            mb="0"
            leading="tight"
          >
            A century of discovery, innovation, and impact
          </Text>
        </div>
        <FlexBox alignItems="center" className={styles.flexbox}>
          {mainNav}
        </FlexBox>
      </FlexBox>
    </header>
  );
};
