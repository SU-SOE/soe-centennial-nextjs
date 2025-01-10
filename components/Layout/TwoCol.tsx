import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";
import { OneCol } from "./OneCol";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  columnWidth?: "sidebar" | "default";
  isNarrow?: boolean;
  bgColor?: BgColorType;
};

export const TwoCol = ({
  leftContent,
  rightContent,
  className,
  columnWidth = "default",
  isNarrow,
  ...props
}: ColProps) => {
  let gridCols = "md:grid-cols-2";
  if (columnWidth === "sidebar") {
    gridCols = "@6xl:grid-cols-2-1";
  }

  return (
    <Container
      {...props}
      className={cnb(
        "w-full",
        {
          "xl:mx-auto xl:w-900 2xl:w-1300": isNarrow,
        },
        gridCols,
        className,
      )}
      width="site"
    >
      <OneCol content={leftContent} />
      <OneCol content={rightContent} />
    </Container>
  );
};
