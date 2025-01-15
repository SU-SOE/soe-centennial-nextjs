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
      <HorizontalLineart className="ml-auto rs-pl-5 md:rs-pl-8 max-w-[160rem] 2xl:max-w-[200rem] 3xl:max-w-full" />
    </Container>
  );
};
