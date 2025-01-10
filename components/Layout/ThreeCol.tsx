import React, { HTMLAttributes } from "react";
import { BgColorType, Container } from "@/components/Container";
import { OneCol } from "./OneCol";

type ColProps = HTMLAttributes<HTMLDivElement> & {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  mainContent: React.ReactNode;
  bgColor?: BgColorType;
};

export const ThreeCol = ({
  leftContent,
  mainContent,
  rightContent,
  className,
  ...props
}: ColProps) => {
  return (
    <Container
      {...props}
      className="centered grid gap-10 @9xl:grid-cols-3 @9xl:gap-20"
    >
      <OneCol content={leftContent} />
      <OneCol content={mainContent} />
      <OneCol content={rightContent} />
    </Container>
  );
};
