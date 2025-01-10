import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { renderDynamicComponent } from "@/utilities/renderDynamicComponent";
import { OneCol } from "./OneCol";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  leftContent: React.ReactNode | { type: string; props: any }[];
  mainContent: React.ReactNode | { type: string; props: any }[];
  rightContent: React.ReactNode | { type: string; props: any }[];
  bgColor?: BgColorType;
};

export const ThreeCol = ({
  leftContent,
  mainContent,
  rightContent,
  className,
  ...props
}: ColProps) => {
  const renderContent = (content: any[]) =>
    content.map((item, index) =>
      typeof item === "object" && "type" in item
        ? renderDynamicComponent(item.type, item.props)
        : item,
    );

  return (
    <Container
      {...props}
      className="gutters grid gap-10 w-full md:grid-cols-3 md:gap-20"
    >
      <OneCol content={renderContent(leftContent as any[])} />
      <OneCol content={renderContent(mainContent as any[])} />
      <OneCol content={renderContent(rightContent as any[])} />
    </Container>
  );
};
