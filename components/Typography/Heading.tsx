import { cnb } from "cnbuilder";
import { Text, type TypographyProps } from "./Text";
import * as types from "./typography.types";

type HeadingProps = Omit<TypographyProps, "as"> &
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: types.HeadingType;
    className?: string;
    linkType?: "story" | "poster" | "default";
  };

// Convenience component for paragraphs
export const Heading = ({
  as = "h2",
  weight = "medium",
  className,
  linkType,
  ...rest
}: HeadingProps) => {
  let headingLinkClasses =
    "[&_a]:transition [&_a]:duration-1000 [&_a]:text-stone-dark [&_a]:underline [&_a]:underline-offset-[5px] [&_a]:decoration-digital-red-light [&_a]:cursor-pointer [&_a]:decoration-4";

  switch (linkType) {
    case "story":
      headingLinkClasses =
        "[&_a]:transition [&_a]:duration-1000 [&_a]:font-normal [&_a]:text-stone-dark [&_a]:group-hocus:underline [&_a]:underline-offset-[5px] [&_a]:group-hocus:decoration-stone-dark [&_a]:group-hocus:cursor-pointer [&_a]:decoration-2";
      break;
    case "poster":
      headingLinkClasses =
        "[&_a]:transition [&_a]:duration-1000 [&_a]:text-white [&_a]:font-normal [&_a]:group-hocus:underline [&_a]:underline-offset-[5px] [&_a]:group-hocus:decoration-white [&_a]:group-hocus:cursor-pointer [&_a]:decoration-4";
      break;
    default:
      break;
  }

  return (
    <Text
      {...rest}
      weight={weight}
      as={as}
      className={cnb(headingLinkClasses, className)}
    />
  );
};
