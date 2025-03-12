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
