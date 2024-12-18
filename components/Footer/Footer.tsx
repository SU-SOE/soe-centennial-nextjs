import { HTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import { FlexBox } from "@/components/FlexBox";
import * as styles from "./Footer.styles";
import { EngLogoLockup } from "../Logo/EngLogoLockup";

type FooterProps = HTMLAttributes<HTMLDivElement> & {
  isOverlap?: boolean;
  bgColor?: styles.BgColorType;
};

export const Footer = ({
  bgColor = "none",
  className = "",
  ...props
}: FooterProps) => {
  // Map background colors to logo colors
  const logoColorMap: Record<styles.BgColorType, "white" | "default"> = {
    black: "white",
    "red-gradient": "white",
    "stone-dark": "white",
    none: "default",
    white: "white",
    blue: "default",
    "fog-light": "default",
    "": "default",
  };

  const isLight = logoColorMap[bgColor] || "default";

  return (
    <footer
      {...props}
      className={cnb(styles.bgColors[bgColor || "none"], className)}
    >
      <FlexBox alignItems="start" className={styles.wrapper}>
        <EngLogoLockup color={isLight} />
      </FlexBox>
    </footer>
  );
};
