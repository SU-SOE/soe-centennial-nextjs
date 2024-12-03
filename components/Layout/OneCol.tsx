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

export const OneCol = ({ children, className, ...props }: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb("flex flex-col items-center *:max-w-[725px]", className)}
      mb={6}
    >
      {children}
    </Container>
  );
};
