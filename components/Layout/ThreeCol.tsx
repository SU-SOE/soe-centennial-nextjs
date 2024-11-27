import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { MarginType, PaddingType } from "@/utilities/datasource";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  pt?: PaddingType;
  pb?: PaddingType;
  py?: PaddingType;
  mt?: MarginType;
  mb?: MarginType;
  my?: MarginType;
  bgColor?: BgColorType;
};

export const ThreeCol = ({ children, className, ...props }: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb("grid grid-cols-1 lg:grid-cols-3 gap-50", className)}
    >
      {children}
    </Container>
  );
};
