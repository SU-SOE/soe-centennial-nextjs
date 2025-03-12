import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: BgColorType;
};

export const OneCol = ({ children, className, ...props }: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb("flex flex-col items-center", className)}
    >
      <div className="w-full max-w-[72.5rem]">{children}</div>
    </Container>
  );
};
