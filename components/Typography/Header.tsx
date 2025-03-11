/**
 * Header (e.g. h1, h2, h3) for Text Area
 */
import { cnb } from "cnbuilder";
import { Heading } from "./Heading";
import { TypographyProps } from "./Text";

type Props = Omit<TypographyProps, "as"> &
  React.HTMLAttributes<HTMLHeadingElement>;

export const H1 = ({ children, className, ...props }: Props) => {
  return (
    <Heading {...props} as="h1" className={cnb("rs-mt-2", className)}>
      {children}
    </Heading>
  );
};

export const H2 = ({ children, className, ...props }: Props) => {
  return (
    <Heading
      {...props}
      as="h2"
      size={3}
      weight="medium"
      className={cnb("rs-mt-2", className)}
    >
      {children}
    </Heading>
  );
};

export const H3 = ({ children, className, ...props }: Props) => {
  return (
    <Heading {...props} as="h3" size={1} className={cnb("rs-mt-2", className)}>
      {children}
    </Heading>
  );
};

export const H4 = ({ children, className, ...props }: Props) => {
  return (
    <Heading
      {...props}
      as="h4"
      size="base"
      className={cnb("rs-mt-2", className)}
      mb={1}
    >
      {children}
    </Heading>
  );
};

export const H5 = ({ children, className, ...props }: Props) => {
  return (
    <Heading
      {...props}
      as="h5"
      size="base"
      className={cnb("rs-mt-0", className)}
      mb={1}
    >
      {children}
    </Heading>
  );
};

type HeadingProps = Props & {
  /**
   * Which heading level to display.
   */
  level?: 1 | 2 | 3 | 4 | 5;
};

const Header = ({ children, level = 1, ...props }: HeadingProps) => {
  switch (level) {
    case 1:
      return <H1 {...props}>{children}</H1>;
    case 2:
      return <H2 {...props}>{children}</H2>;
    case 3:
      return <H3 {...props}>{children}</H3>;
    case 4:
      return <H4 {...props}>{children}</H4>;
    case 5:
      return <H5 {...props}>{children}</H5>;
  }
};
export default Header;
