import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  bgColor?: BgColorType;
};

export const ThreeCol = ({ children, className, ...props }: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb("grid grid-cols-1 lg:grid-cols-3 gap-50", className)}
      mb={6}
    >
      {children}
    </Container>
  );
};
