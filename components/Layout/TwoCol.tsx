import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { MarginType, PaddingType } from "@/utilities/datasource";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  isSidebar?: boolean;
  isNarrow?: boolean;
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
  isNarrow = false,
  ...props
}: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb(
        "flex flex-col lg:flex-row w-full max-w-full gap-[7.6rem]",
        {
          "lg:*:w-1/2": !isSidebar,
          "lg:*:even:max-w-2/3 lg:*:odd:max-w-1/3": isSidebar,
          "xl:max-w-900 2xl:max-w-[1300px]": isNarrow,
        },
        className,
      )}
      mb={6}
    >
      {children}
    </Container>
  );
};
