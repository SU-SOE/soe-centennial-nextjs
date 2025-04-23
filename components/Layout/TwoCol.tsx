/**
 * A flexible two-column layout component.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the layout.
 * @param {string} [className] - Additional CSS classes to apply to the container.
 * @param {boolean} [isSidebar=false] - If true, applies styles for a sidebar layout.
 * @param {boolean} [isNarrow=false] - If true, applies styles for a narrower layout.
 * @param {BgColorType} [bgColor] - Background color type for the container.
 * @param {HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes to apply to the container.
 *
 * @example
 * ```tsx
 * <TwoCol isSidebar={true} isNarrow={true} className="custom-class">
 *   <div>Column 1</div>
 *   <div>Column 2</div>
 * </TwoCol>
 * ```
 */
import React from "react";
import { BgColorType, Container, ContainerProps } from "@/components/Container";
import { cnb } from "cnbuilder";

type ColProps = ContainerProps & {
  isSidebar?: boolean;
  isNarrow?: boolean;
  bgColor?: BgColorType;
};

export const TwoCol = ({
  children,
  className,
  isSidebar = false,
  isNarrow = false,
  ...props
}: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb(
        "flex flex-col lg:flex-row w-full gap-[7.6rem]",
        {
          "lg:*:w-1/2": !isSidebar,
          "lg:*:even:max-w-2/3 lg:*:odd:max-w-1/3": isSidebar,
          "xl:max-w-900 2xl:max-w-[1300px]": isNarrow,
        },
        className,
      )}
    >
      {children}
    </Container>
  );
};
