/**
 * A component that renders its children in a three-column layout.
 * The layout adjusts based on the screen size:
 * - 1 column on small screens
 * - 2 columns on medium screens
 * - 3 columns on large screens
 *
 * @param {React.ReactNode} children - The content to be displayed within the columns.
 * @param {string} [className] - Additional class names to apply to the container.
 * @param {BgColorType} [bgColor] - Background color type for the container.
 * @param {HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes to apply to the container.
 *
 * @example
 * ```tsx
 * <ThreeCol className="custom-class" bgColor="primary">
 *   <div>Column 1</div>
 *   <div>Column 2</div>
 *   <div>Column 3</div>
 * </ThreeCol>
 * ```
 */
import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: BgColorType;
};

export const ThreeCol = ({ children, className, ...props }: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-50",
        className,
      )}
    >
      {children}
    </Container>
  );
};
