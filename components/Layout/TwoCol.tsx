import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";
import { renderDynamicComponent } from "@/utilities/renderDynamicComponent";
import { OneCol } from "./OneCol";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  leftContent: React.ReactNode | { type: string; props: any }[];
  rightContent: React.ReactNode | { type: string; props: any }[];
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
  const renderContent = (content: any[]) =>
    content.map((item, index) =>
      typeof item === "object" && "type" in item
        ? renderDynamicComponent(item.type, item.props)
        : item,
    );

  let gridCols = "md:grid-cols-2";
  if (columnWidth === "sidebar") {
    gridCols = "md:grid-cols-2-1";
  }

  return (
    <Container
      {...props}
      className={cnb(
        "gutters grid gap-10 w-full",
        {
          "xl:mx-auto xl:w-900 2xl:w-1300": isNarrow,
        },
        gridCols,
        className,
      )}
    >
      <OneCol content={renderContent(leftContent as any[])} />
      <OneCol content={renderContent(rightContent as any[])} />
    </Container>
  );
};
