import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { MarginType, PaddingType } from "@/utilities/datasource";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  isSidebar?: boolean;
  pt?: PaddingType;
  pb?: PaddingType;
  py?: PaddingType;
  mt?: MarginType;
  mb?: MarginType;
  my?: MarginType;
  bgColor?: BgColorType;
};

export const TwoCol = ({
  children,
  className,
  isSidebar = false,
  ...props
}: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb(
        "flex flex-col w-full max-w-full lg:flex-row gap-20",
        {
          "lg:*:w-1/2": !isSidebar,
          "lg:first:max-w-2/3 lg:last:max-w-1/3": isSidebar,
        },
        className,
      )}
    >
      {children}
    </Container>
  );
};
