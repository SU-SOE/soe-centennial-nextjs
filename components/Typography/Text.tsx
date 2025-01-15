import { ReactNode, TimeHTMLAttributes } from "react";
import { cnb } from "cnbuilder";
import {
  HeroIcon,
  type HeroIconProps,
  type IconType,
} from "../images/HeroIcon";
import * as styles from "./typography.styles";
import * as types from "./typography.types";
import { marginBottoms, MarginType } from "@/utilities/datasource";

export type TypographyProps = {
  as?: types.TextType;
  font?: types.FontFamilyType;
  size?: types.FontSizeType;
  weight?: types.FontWeightType;
  align?: types.TextAlignType;
  color?: types.TextColorType;
  variant?: types.TextVariantType;
  leading?: types.FontLeadingType;
  mb?: MarginType;
  /**
   * If true, use default tracking for the font - for DM Sans
   */
  useDefaultTracking?: boolean;
  italic?: boolean;
  srOnly?: boolean;
  uppercase?: boolean;
  icon?: IconType;
  iconProps?: Omit<HeroIconProps, "icon" | "noBaseStyle">;
  className?: string;
  children?: ReactNode;
  footnoteRefs?: { id: string; number: number }[];
};

// The TimeHTMLAttributes<HTMLElement> is for the dateTime attribute when using as="time"
export type TextProps = TypographyProps &
  React.HTMLAttributes<HTMLElement> &
  TimeHTMLAttributes<HTMLElement>;

export const Text = ({
  as: AsComponent = "p",
  font = "dm-sans",
  size,
  weight,
  align,
  color = "default",
  variant,
  leading,
  mb,
  useDefaultTracking = font === "dm-sans",
  italic,
  srOnly,
  uppercase,
  icon,
  iconProps,
  className,
  children,
  footnoteRefs,
  ...rest
}: TextProps) => {
  const { className: iconClasses, ...iProps } = iconProps || {};

  return (
    <AsComponent
      {...rest}
      className={cnb(
        font ? styles.fontFamilies[font] : "",
        size ? styles.fontSizes[size] : "",
        weight ? styles.fontWeights[weight] : "",
        align ? styles.textAligns[align] : "",
        color ? styles.textColors[color] : "",
        variant ? styles.textVariants[variant] : "",
        leading ? styles.fontLeadings[leading] : "",
        mb ? marginBottoms[mb] : marginBottoms[2],
        italic ? "italic" : "",
        srOnly ? "sr-only" : "",
        uppercase ? "uppercase" : "",
        useDefaultTracking ? "tracking-normal" : "",
        className,
      )}
    >
      {children}
      {icon && (
        <HeroIcon
          icon={icon}
          noBaseStyle
          className={cnb(styles.iconStyle, iconClasses)}
          {...iProps}
        />
      )}
      {footnoteRefs &&
        footnoteRefs.map(({ id, number }) => (
          <sup key={id} className="top-0 ml-03em">
            <a
              href={`#${id}`}
              id={`ref-${id}`}
              className="font-normal text-stone-dark hocus:text-digital-red-xlight"
            >
              ({number})
            </a>
          </sup>
        ))}
    </AsComponent>
  );
};
