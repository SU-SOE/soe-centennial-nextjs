/**
 * Props for the Masthead component.
 *
 * @typedef {Object} MastheadProps
 * @property {"default" | "white" | "white-red"} [logoColor] - The color of the logo.
 * @property {boolean} [isOverlap=false] - Whether the masthead overlaps content.
 * @property {boolean} [navLight] - Whether the navigation is light.
 * @property {boolean} [isBgDark=false] - Whether the background is dark.
 * @property {styles.BgColorType} [bgColor="none"] - The background color type.
 * @property {React.ReactNode} [mainNav] - The main navigation component.
 * @property {string} [className] - Additional class names for the masthead.
 */

/**
 * Masthead component for displaying the header section of the page.
 *
 * @param {MastheadProps} props - The props for the Masthead component.
 * @returns {JSX.Element} The rendered Masthead component.
 */
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
  isBgDark?: boolean;
  bgColor?: styles.BgColorType;
  mainNav?: React.ReactNode;
};

export const Masthead = ({
  logoColor,
  isOverlap = false,
  isBgDark = false,
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
            font="dm-sans"
            size="small"
            className={cnb(
              "ml-20 pl-20 py-10 border-l-2 border-digital-red-xlight max-w-220",
              { "text-white": isOverlap && isBgDark },
            )}
            mb="0"
            leading="tight"
            weight="medium"
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
