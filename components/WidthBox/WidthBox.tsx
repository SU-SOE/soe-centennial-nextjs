import { Container, type ContainerProps } from "../Container";

/**
 * For use as a wrapper container that sets a width in terms of number of columns.
 * There is a bounding width of either full (edge-to-edge) or site container width (centered container),
 * Within this bounding outer container, the children can span 12, 10, 8, 6 or 4 out of 12 column.
 * */

type WidthBoxProps = ContainerProps & {
  boundingWidth?: "full" | "site";
  align?: "center";
};

export const WidthBox = ({
  boundingWidth = "full",
  bgColor,
  children,
  className,
  ...props
}: WidthBoxProps) => {
  return (
    <Container
      {...props}
      bgColor={bgColor}
      width={boundingWidth}
      className={className}
    >
      {children}
    </Container>
  );
};
