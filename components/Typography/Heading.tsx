import { Text, type TypographyProps } from "./Text";
import * as types from "./typography.types";

type HeadingProps = Omit<TypographyProps, "as"> &
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: types.HeadingType;
  };

// Convenience component for paragraphs
export const Heading = ({
  as = "h2",
  weight = "bold",
  ...rest
}: HeadingProps) => <Text {...rest} weight={weight} as={as} />;
