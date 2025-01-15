"use client";

import { HTMLAttributes, ReactNode } from "react";
import { Container } from "../Container";
import { HorizontalLineart } from "../images/horizontal-lineart";

type AnimatedLineartBannerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const AnimatedLineartBanner = ({
  children,
  ...props
}: AnimatedLineartBannerProps) => {
  return (
    <Container {...props} as="section" width="full" className="mb-[-10rem]">
      <Container width="site">{children}</Container>
      <div className="rs-pl-2 md:rs-pl-6">
        <HorizontalLineart />
      </div>
    </Container>
  );
};
