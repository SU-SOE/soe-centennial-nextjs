import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";
import { renderDynamicComponent } from "@/utilities/renderDynamicComponent";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  content: React.ReactNode | { type: string; props: any };
  bgColor?: BgColorType;
};

export const OneCol = ({ content, className, ...props }: ColProps) => {
  const renderedContent =
    typeof content === "object" && "type" in content
      ? renderDynamicComponent(content.type, content.props)
      : content;

  return (
    <Container
      {...props}
      className={cnb(
        "space-y-16 @container flex flex-col w-full *:max-w-[725px]",
        className,
      )}
      mb={6}
    >
      {renderedContent}
    </Container>
  );
};
