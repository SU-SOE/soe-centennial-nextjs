import { cnb } from "cnbuilder";
import { Text, type TypographyProps } from "./Text";
import * as types from "./typography.types";

type HeadingProps = Omit<TypographyProps, "as"> &
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: types.HeadingType;
    className?: string;
    isInvertLinkStyle?: boolean;
  };

// Convenience component for paragraphs
export const Heading = ({
  as = "h2",
  weight = "medium",
  className,
  isInvertLinkStyle = false,
  ...rest
}: HeadingProps) => {
  const headingLinkClasses = isInvertLinkStyle
    ? "[&_a]:transition [&_a]:duration-500 [&_a]:text-stone-dark [&_a]:group-hocus:underline [&_a]:underline-offset-[5px] [&_a]:group-hocus:decoration-digital-red-light [&_a]:group-hocus:cursor-pointer [&_a]:decoration-4"
    : "[&_a]:transition [&_a]:duration-500 [&_a]:text-stone-dark [&_a]:underline [&_a]:underline-offset-[5px] [&_a]:decoration-digital-red-light [&_a]:cursor-pointer [&_a]:decoration-4";
  return (
    <Text
      {...rest}
      weight={weight}
      as={as}
      className={cnb(headingLinkClasses, className)}
    />
  );
};
