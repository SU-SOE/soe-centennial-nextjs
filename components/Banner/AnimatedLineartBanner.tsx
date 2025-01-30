"use client";

import { HTMLAttributes, ReactNode } from "react";
import { Container } from "../Container";
import {
  HorizontalLineart,
  HorizontalLineartProps,
} from "../images/horizontal-lineart";

type AnimatedLineartBannerProps = HTMLAttributes<HTMLDivElement> &
  Omit<HorizontalLineartProps, "className"> & {
    children: ReactNode;
  };

export const AnimatedLineartBanner = ({
  children,
  className,
  isLeft = false,
  ...props
}: AnimatedLineartBannerProps) => {
  return (
    <Container {...props} as="section" width="full" className={className}>
      <Container width="site">{children}</Container>
      <HorizontalLineart
        isLeft={isLeft}
        className="ml-auto rs-pl-5 md:rs-pl-8 max-w-[160rem] 2xl:max-w-[200rem] 3xl:max-w-[250rem] 3xl:rs-pr-5"
      />
    </Container>
  );
};
