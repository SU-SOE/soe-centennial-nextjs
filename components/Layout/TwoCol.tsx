import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
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
