import React, { HTMLAttributes } from "react";
import { Container } from "@/components/Container";

type StoryFeatureProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const StoryFeature = ({ children, ...props }: StoryFeatureProps) => {
  return (
    <Container
      {...props}
      as="article"
      width="full"
      mb={9}
      className="sm:rs-px-6"
    >
      <Container
        width="site"
        py={8}
        bgColor="blue"
        className="rounded-[25px] flex flex-col rs-px-6"
      >
        {children}
      </Container>
    </Container>
  );
};
