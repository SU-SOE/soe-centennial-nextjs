import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  content: React.ReactNode;
  bgColor?: BgColorType;
};

export const OneCol = ({ content, className, ...props }: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb(
        "space-y-16 @container flex flex-col items-center *:max-w-[725px]",
        className,
      )}
      mb={6}
    >
      {content}
    </Container>
  );
};
