import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { cnb } from "cnbuilder";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  bgColor?: BgColorType;
};

export const StoryMediaGallery = ({
  children,
  className,
  ...props
}: ColProps) => {
  return (
    <Container
      {...props}
      className={cnb("grid gap-10 md:grid-cols-2", className)}
      width="site"
      mb={6}
    >
      {children}
    </Container>
  );
};
